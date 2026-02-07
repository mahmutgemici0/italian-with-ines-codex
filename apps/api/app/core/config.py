from functools import lru_cache
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Italian with Ines API"
    database_url: str
    jwt_secret: str
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 120

    stripe_secret_key: str = ""
    stripe_webhook_secret: str = ""
    stripe_success_url: str = "http://localhost:3000/dashboard?success=true"
    stripe_cancel_url: str = "http://localhost:3000/checkout/cancel"
    stripe_portal_return_url: str = "http://localhost:3000/dashboard/billing"

    frontend_url: str = "http://localhost:3000"
    cors_origins: str = "http://localhost:3000"

    s3_endpoint: str = ""
    s3_bucket: str = ""
    s3_access_key: str = ""
    s3_secret_key: str = ""

    email_provider: str = "resend"
    resend_api_key: str = ""
    postmark_api_key: str = ""

    zoom_default_link: str = ""

    google_client_id: str = ""
    google_client_secret: str = ""
    google_oauth_redirect_uri: str = "http://localhost:8000/auth/oauth/google/callback"

    class Config:
        env_file = ".env"
        extra = "ignore"


@lru_cache
def get_settings() -> Settings:
    return Settings()
