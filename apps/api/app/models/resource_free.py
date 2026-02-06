from sqlalchemy import Boolean, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class ResourceFree(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "resources_free"

    title: Mapped[str] = mapped_column(String(255), index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    level: Mapped[str] = mapped_column(String(32), default="A1")
    tags: Mapped[list] = mapped_column(JSON, default=list)
    gated: Mapped[bool] = mapped_column(Boolean, default=False)
    file_key: Mapped[str] = mapped_column(String(255), default="")
    content: Mapped[str] = mapped_column(Text, default="")
