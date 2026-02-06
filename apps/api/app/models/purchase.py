from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class Purchase(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "purchases"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    product_type: Mapped[str] = mapped_column(String(32), index=True)
    product_id: Mapped[str] = mapped_column(String(64), index=True)
    stripe_payment_intent: Mapped[str] = mapped_column(String(128), default="")
    status: Mapped[str] = mapped_column(String(32), default="paid")
