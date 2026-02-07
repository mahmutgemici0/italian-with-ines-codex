# Italian with Ines - Monorepo MVP

Production-oriented MVP for a creator-commerce language brand.

## Stack
- Web: Next.js (App Router) + TypeScript + Tailwind
- API: FastAPI + SQLAlchemy + Alembic
- DB: PostgreSQL
- Auth: FastAPI JWT (email/password)
- Payments: Stripe Checkout + Customer Portal + Webhooks
- Storage: S3-compatible placeholder interface for signed delivery
- Video: external embeds (YouTube/Vimeo/unlisted links)
- Local infra: Docker Compose

## Repository Structure
- `/apps/web` Next.js frontend (public pages + account + admin scaffolding)
- `/apps/api` FastAPI backend (`/auth`, `/products`, `/courses`, `/bookings`, `/subscriptions`, `/resources`, `/admin`, `/payments`, `/downloads`)
- `/packages/shared` shared TS types
- `/docs/stripe-integration-plan.md` Stripe implementation details

## Quick Start (Local)
1. Copy env files:
   - `cp apps/api/.env.example apps/api/.env`
   - `cp apps/web/.env.example apps/web/.env.local`
2. Start services:
   - `docker compose up --build`
3. Run DB migration in API container:
   - `docker compose exec api alembic upgrade head`
4. Seed demo data:
   - `docker compose exec api python scripts/seed.py`
5. Open app:
   - Web: `http://localhost:3000`
   - API docs: `http://localhost:8000/docs`

## Manual Non-Docker Setup
### API
1. `cd apps/api`
2. `python -m venv .venv && source .venv/bin/activate`
3. `pip install -r requirements.txt`
4. Set `DATABASE_URL` and other env vars
5. `alembic upgrade head`
6. `python scripts/seed.py`
7. `uvicorn app.main:app --reload --port 8000`

### Web
1. `cd apps/web`
2. `npm install`
3. `npm run dev`

## Seed Accounts
- Admin: `admin@ines.com` / `admin1234`
- User: `user@ines.com` / `user1234`

## Environment Variables
### API (`apps/api/.env`)
- `DATABASE_URL`
- `JWT_SECRET`, `JWT_ALGORITHM`, `JWT_EXPIRE_MINUTES`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `STRIPE_SUCCESS_URL`, `STRIPE_CANCEL_URL`, `STRIPE_PORTAL_RETURN_URL`
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_OAUTH_REDIRECT_URI`
- `FRONTEND_URL`, `CORS_ORIGINS`
- `S3_ENDPOINT`, `S3_BUCKET`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`
- `EMAIL_PROVIDER`, `RESEND_API_KEY`, `POSTMARK_API_KEY`
- `ZOOM_DEFAULT_LINK`

### Web (`apps/web/.env.local`)
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`

## Current Merch Strategy
- Implemented as manual Stripe products for MVP.
- Adapter-friendly architecture so Printful/Printify sync can be swapped in later without breaking storefront URLs.

## Core Implemented Capabilities
- JWT auth, admin route guards (API + frontend middleware)
- Google OAuth login callback flow (`/auth/oauth/google/start`)
- Course/product/resource catalogs and CRUD scaffolding
- Stripe checkout session creation + webhook-driven access grants
- Guest checkout support (email-based checkout without manual sign-up)
- Secure digital delivery model (expiring token + remaining count)
- Booking model + `.ics` generation endpoint
- Membership subscription model + billing portal endpoint
- In-site level test with gated result reveal and course recommendations
- SEO basics (`metadata`, `sitemap.xml`, `robots.txt`, OG)
- Responsive mobile-first page scaffolds for all required routes
- Basic tests:
  - API: health + openapi tests
  - Web: utility test (Vitest)

## Stripe Configuration Checklist
1. Create Stripe prices for course/product/booking/membership/merch.
2. Save each price ID in DB records (`stripe_price_id`).
3. Configure webhook endpoint and signing secret.
4. Test with Stripe CLI:
   - `stripe listen --forward-to localhost:8000/payments/webhooks/stripe`
5. Complete a checkout test and verify:
   - `purchases` row created
   - enrollment/download/subscription updates applied

## Printful/Printify Swap (Later)
- Add provider service under `apps/api/app/services/merch_provider.py`
- Implement sync job to map external variants -> internal merch catalog
- Keep existing product detail URLs and switch purchase target per product

## Notes
- This is an MVP scaffold intentionally optimized for extensibility and fast delivery.
- Replace placeholder email/signed URL logic in `emailer.py` and `downloads.py` for production.
