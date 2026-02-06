from fastapi import APIRouter

from app.api.routes import admin, auth, bookings, courses, downloads, payments, products, resources, subscriptions

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(products.router)
api_router.include_router(courses.router)
api_router.include_router(bookings.router)
api_router.include_router(subscriptions.router)
api_router.include_router(resources.router)
api_router.include_router(payments.router)
api_router.include_router(downloads.router)
api_router.include_router(admin.router)
