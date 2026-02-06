from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class Module(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "modules"

    course_id: Mapped[str] = mapped_column(ForeignKey("courses.id"), index=True)
    title: Mapped[str] = mapped_column(String(255))
    order: Mapped[int] = mapped_column(Integer, default=0)
