from sqlalchemy import ForeignKey, Integer, JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class Lesson(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "lessons"

    module_id: Mapped[str] = mapped_column(ForeignKey("modules.id"), index=True)
    title: Mapped[str] = mapped_column(String(255))
    order: Mapped[int] = mapped_column(Integer, default=0)
    content_json: Mapped[dict] = mapped_column(JSON, default=dict)
    video_url: Mapped[str] = mapped_column(String(255), default="")
