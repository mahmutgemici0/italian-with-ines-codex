from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class Booking(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "bookings"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    end_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    status: Mapped[str] = mapped_column(String(32), default="confirmed")
    stripe_payment_intent: Mapped[str] = mapped_column(String(128), default="")
