# Stripe Integration Plan

## Products and Price IDs
- One-time prices:
  - Digital products (`product_type=digital`)
  - Courses (`product_type=course`)
  - Bookings (`product_type=booking`)
  - Manual merch (`product_type=merch`)
- Recurring prices:
  - Weekly live classroom membership (`product_type=membership`, `mode=subscription`)

## Checkout Flow
1. Frontend requests `POST /payments/checkout` with `price_id`, `product_type`, `product_id`, optional `booking_id`.
2. API creates Stripe Checkout session and returns `session.url`.
3. User completes payment on Stripe-hosted checkout.
4. Stripe sends webhook to `POST /payments/webhooks/stripe`.
5. API validates signature and grants/revokes access based on event.

## Webhooks Implemented
- `checkout.session.completed`
  - Creates `purchases` row
  - For `course`: creates `course_enrollments`
  - For `digital`: creates `downloads` token record (expiring + max count)
  - For `membership`: creates `subscriptions`
  - For `booking`: marks booking `confirmed`
- `invoice.paid` / `customer.subscription.updated`
  - Syncs `subscriptions.status`
- `payment_intent.payment_failed`
  - Marks `purchases.status=failed`

## Customer Portal
- Frontend calls `POST /subscriptions/portal`
- API returns Stripe Billing Portal URL

## Required Stripe Dashboard Setup
- Create products + prices and copy price IDs into admin-managed entities (`stripe_price_id` fields).
- Configure webhook endpoint:
  - URL: `https://<api-domain>/payments/webhooks/stripe`
  - Events listed above
- Set env vars:
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`
  - `STRIPE_SUCCESS_URL`, `STRIPE_CANCEL_URL`, `STRIPE_PORTAL_RETURN_URL`
