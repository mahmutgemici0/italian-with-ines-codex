from pydantic import BaseModel


class DigitalProductOut(BaseModel):
    id: str
    title: str
    slug: str
    description: str
    price: int


class DigitalProductCreate(BaseModel):
    title: str
    slug: str
    description: str
    price: int
    stripe_price_id: str = ""
    file_key: str = ""
