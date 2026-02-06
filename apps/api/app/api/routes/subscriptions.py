from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.deps import get_current_user
from app.db.session import get_db
from app.models.subscription import Subscription
from app.services.stripe_service import create_customer_portal

router = APIRouter(prefix="/subscriptions", tags=["subscriptions"])


@router.get("/me")
def my_subscription(current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    sub = db.query(Subscription).filter(Subscription.user_id == current_user.id).first()
    return sub


@router.post("/portal")
def open_portal(current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    sub = db.query(Subscription).filter(Subscription.user_id == current_user.id).first()
    if not sub or not sub.stripe_customer_id:
        raise HTTPException(status_code=400, detail="No Stripe customer")
    return {"url": create_customer_portal(sub.stripe_customer_id)}
