import stripe
import secrets
from fastapi import APIRouter, Depends, Header, HTTPException, Request
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.security import hash_password
from app.db.session import get_db
from app.models.booking import Booking
from app.models.course import Course
from app.models.course_enrollment import CourseEnrollment
from app.models.product_digital import ProductDigital
from app.models.purchase import Purchase
from app.models.subscription import Subscription
from app.models.user import User
from app.services.downloads import create_download_token
from app.services.stripe_service import create_checkout_session

settings = get_settings()
router = APIRouter(prefix="/payments", tags=["payments"])
optional_bearer = HTTPBearer(auto_error=False)


@router.post("/checkout")
def checkout(
    payload: dict,
    db: Session = Depends(get_db),
    credentials: HTTPAuthorizationCredentials | None = Depends(optional_bearer),
):
    mode = payload.get("mode", "payment")
    price_id = payload.get("price_id")
    product_type = payload.get("product_type")
    product_id = payload.get("product_id")
    booking_id = payload.get("booking_id", "")
    email = payload.get("email", "").strip().lower()
    name = payload.get("name", "").strip()

    if not price_id or not product_type or not product_id:
        raise HTTPException(status_code=400, detail="Missing fields")

    user: User | None = None

    if credentials:
        try:
            token = credentials.credentials
            decoded = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
            user_id = decoded.get("sub")
            if user_id:
                user = db.get(User, user_id)
        except JWTError:
            user = None

    if not user:
        if not email:
            raise HTTPException(status_code=400, detail="Login or provide email for guest checkout")
        user = db.query(User).filter(User.email == email).first()
        if not user:
            user = User(
                email=email,
                name=name or "Guest",
                hashed_password=hash_password(secrets.token_urlsafe(24)),
                role="user",
            )
            db.add(user)
            db.commit()
            db.refresh(user)

    url = create_checkout_session(
        mode=mode,
        price_id=price_id,
        client_reference_id=user.id,
        customer_email=user.email,
        metadata={
            "product_type": product_type,
            "product_id": product_id,
            "booking_id": booking_id,
        },
    )
    return {"url": url}


@router.post("/webhooks/stripe")
async def stripe_webhook(
    request: Request,
    stripe_signature: str = Header(alias="stripe-signature"),
    db: Session = Depends(get_db),
):
    payload = await request.body()

    try:
        event = stripe.Webhook.construct_event(payload, stripe_signature, settings.stripe_webhook_secret)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="Invalid payload") from exc
    except stripe.error.SignatureVerificationError as exc:
        raise HTTPException(status_code=400, detail="Invalid signature") from exc

    event_type = event.get("type")
    data = event["data"]["object"]

    if event_type == "checkout.session.completed":
        metadata = data.get("metadata", {})
        user_id = data.get("client_reference_id")
        product_type = metadata.get("product_type")
        product_id = metadata.get("product_id")

        purchase = Purchase(
            user_id=user_id,
            product_type=product_type,
            product_id=product_id,
            stripe_payment_intent=data.get("payment_intent", ""),
            status="paid",
        )
        db.add(purchase)
        db.commit()
        db.refresh(purchase)

        if product_type == "course":
            course = db.get(Course, product_id) or db.query(Course).filter(Course.slug == product_id).first()
            if course:
                enrollment = CourseEnrollment(user_id=user_id, course_id=course.id, status="active", progress_json={"percent": 0})
                db.add(enrollment)
                db.commit()

        if product_type == "digital":
            product = db.get(ProductDigital, product_id) or db.query(ProductDigital).filter(ProductDigital.slug == product_id).first()
            if product:
                purchase.product_id = product.id
                db.add(purchase)
                db.commit()
            create_download_token(db, purchase.id)

        if product_type == "membership":
            sub = Subscription(
                user_id=user_id,
                stripe_customer_id=data.get("customer", ""),
                stripe_subscription_id=data.get("subscription", ""),
                status="active",
            )
            db.add(sub)
            db.commit()

        if product_type == "booking":
            booking_id = metadata.get("booking_id")
            if booking_id:
                booking = db.get(Booking, booking_id)
                if booking:
                    booking.status = "confirmed"
                    booking.stripe_payment_intent = data.get("payment_intent", "")
                    db.add(booking)
                    db.commit()

    elif event_type in ("invoice.paid", "customer.subscription.updated"):
        stripe_sub_id = data.get("subscription") or data.get("id")
        sub = db.query(Subscription).filter(Subscription.stripe_subscription_id == stripe_sub_id).first()
        if sub:
            sub.status = data.get("status", "active")
            db.add(sub)
            db.commit()

    elif event_type == "payment_intent.payment_failed":
        pi = data.get("id")
        purchase = db.query(Purchase).filter(Purchase.stripe_payment_intent == pi).first()
        if purchase:
            purchase.status = "failed"
            db.add(purchase)
            db.commit()

    return {"received": True, "event": event_type}
