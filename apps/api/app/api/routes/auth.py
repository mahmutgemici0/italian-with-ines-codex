import secrets
import urllib.parse
from datetime import datetime, timedelta, timezone

import httpx
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from app.core.deps import get_current_user
from app.core.rate_limit import simple_rate_limit
from app.core.security import create_access_token, hash_password, verify_password
from app.core.config import get_settings
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import LoginInput, RegisterInput, TokenOutput

router = APIRouter(prefix="/auth", tags=["auth"])
settings = get_settings()
google_oauth_states: dict[str, datetime] = {}


@router.post("/register", response_model=TokenOutput)
def register(payload: RegisterInput, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already in use")

    user = User(email=payload.email, name=payload.name, hashed_password=hash_password(payload.password))
    db.add(user)
    db.commit()
    db.refresh(user)
    return TokenOutput(access_token=create_access_token(user.id))


@router.post("/login", response_model=TokenOutput, dependencies=[Depends(simple_rate_limit)])
def login(payload: LoginInput, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == payload.email).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return TokenOutput(access_token=create_access_token(user.id))


@router.get("/me")
def me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "name": current_user.name,
        "role": current_user.role,
    }


@router.get("/oauth/providers")
def oauth_providers():
    return {
        "google": bool(settings.google_client_id and settings.google_client_secret),
        "apple": False,
    }


@router.get("/oauth/google/start")
def google_oauth_start():
    if not settings.google_client_id or not settings.google_client_secret:
        return RedirectResponse(url=f"{settings.frontend_url}/login?oauth=google_not_configured")

    state = secrets.token_urlsafe(24)
    google_oauth_states[state] = datetime.now(timezone.utc)
    params = {
        "client_id": settings.google_client_id,
        "redirect_uri": settings.google_oauth_redirect_uri,
        "response_type": "code",
        "scope": "openid email profile",
        "state": state,
        "access_type": "online",
        "prompt": "select_account",
    }
    url = f"https://accounts.google.com/o/oauth2/v2/auth?{urllib.parse.urlencode(params)}"
    return RedirectResponse(url=url)


@router.get("/oauth/google/callback")
async def google_oauth_callback(code: str, state: str, db: Session = Depends(get_db)):
    created_at = google_oauth_states.pop(state, None)
    if not created_at or created_at < datetime.now(timezone.utc) - timedelta(minutes=10):
        return RedirectResponse(url=f"{settings.frontend_url}/login?oauth=invalid_state")

    async with httpx.AsyncClient(timeout=15) as client:
        token_resp = await client.post(
            "https://oauth2.googleapis.com/token",
            data={
                "code": code,
                "client_id": settings.google_client_id,
                "client_secret": settings.google_client_secret,
                "redirect_uri": settings.google_oauth_redirect_uri,
                "grant_type": "authorization_code",
            },
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        if token_resp.status_code >= 400:
            return RedirectResponse(url=f"{settings.frontend_url}/login?oauth=google_token_failed")

        access_token = token_resp.json().get("access_token", "")
        userinfo_resp = await client.get(
            "https://openidconnect.googleapis.com/v1/userinfo",
            headers={"Authorization": f"Bearer {access_token}"},
        )
        if userinfo_resp.status_code >= 400:
            return RedirectResponse(url=f"{settings.frontend_url}/login?oauth=google_userinfo_failed")

        info = userinfo_resp.json()
        email = str(info.get("email", "")).lower().strip()
        name = str(info.get("name", ""))
        if not email:
            return RedirectResponse(url=f"{settings.frontend_url}/login?oauth=google_no_email")

    user = db.query(User).filter(User.email == email).first()
    if not user:
        user = User(
            email=email,
            name=name or "Google User",
            hashed_password=hash_password(secrets.token_urlsafe(24)),
            role="user",
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    token = create_access_token(user.id)
    redirect_query = urllib.parse.urlencode({"token": token, "role": user.role})
    return RedirectResponse(url=f"{settings.frontend_url}/oauth/success?{redirect_query}")


@router.get("/oauth/apple/start")
def apple_oauth_start():
    return RedirectResponse(url=f"{settings.frontend_url}/login?oauth=apple_setup_required")
