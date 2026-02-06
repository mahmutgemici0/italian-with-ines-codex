from pydantic import BaseModel


class CourseOut(BaseModel):
    id: str
    title: str
    slug: str
    description: str
    level: str
    price: int
    thumbnail_url: str


class CourseCreate(BaseModel):
    title: str
    slug: str
    description: str
    level: str = "A1"
    price: int
    stripe_price_id: str = ""
    thumbnail_url: str = ""
