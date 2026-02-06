from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class Course(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "courses"

    title: Mapped[str] = mapped_column(String(255), index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    description: Mapped[str] = mapped_column(Text, default="")
    level: Mapped[str] = mapped_column(String(32), default="A1")
    price: Mapped[int] = mapped_column(Integer, default=0)
    stripe_price_id: Mapped[str] = mapped_column(String(128), default="")
    thumbnail_url: Mapped[str] = mapped_column(String(255), default="")
