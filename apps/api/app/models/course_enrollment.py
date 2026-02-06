from sqlalchemy import ForeignKey, JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin, UUIDPrimaryKeyMixin


class CourseEnrollment(Base, UUIDPrimaryKeyMixin, TimestampMixin):
    __tablename__ = "course_enrollments"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    course_id: Mapped[str] = mapped_column(ForeignKey("courses.id"), index=True)
    status: Mapped[str] = mapped_column(String(32), default="active")
    progress_json: Mapped[dict] = mapped_column(JSON, default=dict)
