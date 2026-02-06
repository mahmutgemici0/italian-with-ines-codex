import stripe
from fastapi import APIRouter, Depends, Header, HTTPException, Request
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.deps import get_current_user
from app.db.session import get_db
from app.models.booking import Booking
from app.models.course_enrollment import CourseEnrollment
from app.models.purchase import Purchase
from app.models.subscription import Subscription
from app.services.downloads import create_download_token
from app.services.stripe_service import create_checkout_session

settings = get_settings()
router = APIRouter(prefix="/payments", tags=["payments"])


@router.post("/checkout")
def checkout(payload: dict, current_user=Depends(get_current_user)):
    mode = payload.get("mode", "payment")
    price_id = payload.get("price_id")
    product_type = payload.get("product_type")
    product_id = payload.get("product_id")
    booking_id = payload.get("booking_id", "")

    if not price_id or not product_type or not product_id:
        raise HTTPException(status_code=400, detail="Missing fields")

    url = create_checkout_session(
        mode=mode,
        price_id=price_id,
        client_reference_id=current_user.id,
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
            enrollment = CourseEnrollment(user_id=user_id, course_id=product_id, status="active", progress_json={"percent": 0})
            db.add(enrollment)
            db.commit()

        if product_type == "digital":
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
