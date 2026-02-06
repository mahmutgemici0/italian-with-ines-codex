from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.deps import get_current_user
from app.core.rate_limit import simple_rate_limit
from app.core.security import create_access_token, hash_password, verify_password
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import LoginInput, RegisterInput, TokenOutput

router = APIRouter(prefix="/auth", tags=["auth"])


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
