import stripe
from app.core.config import get_settings

settings = get_settings()
stripe.api_key = settings.stripe_secret_key


def create_checkout_session(
    *,
    mode: str,
    price_id: str,
    client_reference_id: str,
    metadata: dict[str, str],
    customer_email: str | None = None,
) -> str:
    session = stripe.checkout.Session.create(
        mode=mode,
        line_items=[{"price": price_id, "quantity": 1}],
        success_url=settings.stripe_success_url,
        cancel_url=settings.stripe_cancel_url,
        client_reference_id=client_reference_id,
        metadata=metadata,
        customer_email=customer_email or None,
    )
    return session.url


def create_customer_portal(customer_id: str) -> str:
    session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url=settings.stripe_portal_return_url,
    )
    return session.url
