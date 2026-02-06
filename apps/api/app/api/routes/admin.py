from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.core.deps import require_admin
from app.db.session import get_db
from app.models.booking import Booking
from app.models.course import Course
from app.models.blog_post import BlogPost
from app.models.product_digital import ProductDigital
from app.models.purchase import Purchase
from app.models.resource_free import ResourceFree
from app.models.user import User

router = APIRouter(prefix="/admin", tags=["admin"], dependencies=[Depends(require_admin)])


@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    total_sales = db.query(func.count(Purchase.id)).scalar() or 0
    users = db.query(func.count(User.id)).scalar() or 0
    courses = db.query(func.count(Course.id)).scalar() or 0
    products = db.query(func.count(ProductDigital.id)).scalar() or 0
    bookings = db.query(func.count(Booking.id)).scalar() or 0

    recent_orders = db.query(Purchase).order_by(Purchase.created_at.desc()).limit(10).all()
    return {
        "metrics": {
            "total_sales": total_sales,
            "users": users,
            "courses": courses,
            "products": products,
            "bookings": bookings,
        },
        "recent_orders": recent_orders,
    }


@router.get("/users")
def list_users(db: Session = Depends(get_db)):
    return db.query(User).order_by(User.created_at.desc()).all()


@router.get("/courses")
def admin_list_courses(db: Session = Depends(get_db)):
    return db.query(Course).order_by(Course.created_at.desc()).all()


@router.put("/courses/{course_id}")
def admin_update_course(course_id: str, payload: dict, db: Session = Depends(get_db)):
    course = db.get(Course, course_id)
    if not course:
        return {"ok": False}
    for key, value in payload.items():
        setattr(course, key, value)
    db.add(course)
    db.commit()
    db.refresh(course)
    return course


@router.get("/products")
def admin_list_products(db: Session = Depends(get_db)):
    return db.query(ProductDigital).order_by(ProductDigital.created_at.desc()).all()


@router.put("/products/{product_id}")
def admin_update_product(product_id: str, payload: dict, db: Session = Depends(get_db)):
    row = db.get(ProductDigital, product_id)
    if not row:
        return {"ok": False}
    for key, value in payload.items():
        setattr(row, key, value)
    db.add(row)
    db.commit()
    db.refresh(row)
    return row


@router.get("/resources")
def admin_list_resources(db: Session = Depends(get_db)):
    return db.query(ResourceFree).order_by(ResourceFree.created_at.desc()).all()


@router.get("/bookings")
def admin_list_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).order_by(Booking.start_time.desc()).all()


@router.get("/content")
def admin_list_content(db: Session = Depends(get_db)):
    return db.query(BlogPost).order_by(BlogPost.created_at.desc()).all()


@router.post("/content")
def admin_create_content(payload: dict, db: Session = Depends(get_db)):
    post = BlogPost(**payload)
    db.add(post)
    db.commit()
    db.refresh(post)
    return post
