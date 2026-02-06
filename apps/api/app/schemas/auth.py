from pydantic import BaseModel, EmailStr


class RegisterInput(BaseModel):
    email: EmailStr
    password: str
    name: str = ""


class LoginInput(BaseModel):
    email: EmailStr
    password: str


class TokenOutput(BaseModel):
    access_token: str
    token_type: str = "bearer"
