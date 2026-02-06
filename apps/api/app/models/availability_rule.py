from datetime import time
from sqlalchemy import Integer, Time
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import UUIDPrimaryKeyMixin


class AvailabilityRule(Base, UUIDPrimaryKeyMixin):
    __tablename__ = "availability_rules"

    weekday: Mapped[int] = mapped_column(Integer)
    start_time: Mapped[time] = mapped_column(Time)
    end_time: Mapped[time] = mapped_column(Time)
