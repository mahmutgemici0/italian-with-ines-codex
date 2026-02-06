from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class ProductDigital(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "products_digital"

    title: Mapped[str] = mapped_column(String(255), index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    price: Mapped[int] = mapped_column(Integer)
    stripe_price_id: Mapped[str] = mapped_column(String(128), default="")
    file_key: Mapped[str] = mapped_column(String(255), default="")
    description: Mapped[str] = mapped_column(Text, default="")
