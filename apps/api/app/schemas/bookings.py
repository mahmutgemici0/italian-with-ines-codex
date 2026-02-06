from datetime import datetime
from pydantic import BaseModel


class BookingCreate(BaseModel):
    start_time: datetime
    end_time: datetime


class BookingOut(BaseModel):
    id: str
    start_time: datetime
    end_time: datetime
    status: str
