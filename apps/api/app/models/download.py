from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import UUIDPrimaryKeyMixin


class Download(Base, UUIDPrimaryKeyMixin):
    __tablename__ = "downloads"

    purchase_id: Mapped[str] = mapped_column(ForeignKey("purchases.id"), index=True)
    token: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    remaining_count: Mapped[int] = mapped_column(Integer, default=5)
