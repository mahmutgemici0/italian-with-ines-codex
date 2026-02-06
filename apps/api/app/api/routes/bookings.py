from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.deps import get_current_user, require_admin
from app.db.session import get_db
from app.models.availability_rule import AvailabilityRule
from app.models.booking import Booking
from app.schemas.bookings import BookingCreate
from app.services.ics import build_booking_ics

settings = get_settings()
router = APIRouter(prefix="/bookings", tags=["bookings"])


@router.get("/availability")
def get_availability(db: Session = Depends(get_db)):
    return db.query(AvailabilityRule).all()


@router.post("/availability", dependencies=[Depends(require_admin)])
def set_availability(payload: list[dict], db: Session = Depends(get_db)):
    db.query(AvailabilityRule).delete()
    for row in payload:
        db.add(AvailabilityRule(**row))
    db.commit()
    return {"ok": True}


@router.post("")
def create_booking(payload: BookingCreate, current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    if payload.end_time <= payload.start_time:
        raise HTTPException(status_code=400, detail="Invalid time range")
    if payload.end_time - payload.start_time > timedelta(hours=2):
        raise HTTPException(status_code=400, detail="Max 2 hours")

    booking = Booking(
        user_id=current_user.id,
        start_time=payload.start_time,
        end_time=payload.end_time,
        status="pending_payment",
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return booking


@router.get("/me")
def list_my_bookings(current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    return db.query(Booking).filter(Booking.user_id == current_user.id).order_by(Booking.start_time.desc()).all()


@router.get("/{booking_id}/ics")
def booking_ics(booking_id: str, current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    booking = db.get(Booking, booking_id)
    if not booking or booking.user_id != current_user.id:
        raise HTTPException(status_code=404, detail="Not found")

    ics = build_booking_ics(
        booking.start_time,
        booking.end_time,
        "Italian with Ines 1:1 Lesson",
        f"Join: {settings.zoom_default_link}",
    )
    return Response(content=ics, media_type="text/calendar")
