from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class Subscription(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "subscriptions"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    stripe_customer_id: Mapped[str] = mapped_column(String(128), default="")
    stripe_subscription_id: Mapped[str] = mapped_column(String(128), default="")
    status: Mapped[str] = mapped_column(String(32), default="inactive")
