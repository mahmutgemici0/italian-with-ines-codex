from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.deps import get_current_user, require_admin
from app.db.session import get_db
from app.models.course import Course
from app.models.course_enrollment import CourseEnrollment
from app.models.lesson import Lesson
from app.models.module import Module
from app.models.purchase import Purchase
from app.schemas.courses import CourseCreate

router = APIRouter(prefix="/courses", tags=["courses"])


@router.get("")
def list_courses(db: Session = Depends(get_db)):
    return db.query(Course).order_by(Course.created_at.desc()).all()


@router.get("/{slug}")
def course_detail(slug: str, db: Session = Depends(get_db)):
    course = db.query(Course).filter(Course.slug == slug).first()
    if not course:
        raise HTTPException(status_code=404, detail="Not found")

    modules = db.query(Module).filter(Module.course_id == course.id).order_by(Module.order.asc()).all()
    module_ids = [m.id for m in modules]
    lessons = db.query(Lesson).filter(Lesson.module_id.in_(module_ids)).order_by(Lesson.order.asc()).all() if module_ids else []
    return {"course": course, "modules": modules, "lessons": lessons}


@router.get("/{course_id}/player")
def course_player(course_id: str, current_user=Depends(get_current_user), db: Session = Depends(get_db)):
    enrollment = (
        db.query(CourseEnrollment)
        .filter(CourseEnrollment.user_id == current_user.id, CourseEnrollment.course_id == course_id)
        .first()
    )
    if not enrollment:
        has_purchase = (
            db.query(Purchase)
            .filter(Purchase.user_id == current_user.id, Purchase.product_type == "course", Purchase.product_id == course_id)
            .first()
        )
        if not has_purchase:
            raise HTTPException(status_code=403, detail="Purchase required")

    modules = db.query(Module).filter(Module.course_id == course_id).order_by(Module.order.asc()).all()
    module_ids = [m.id for m in modules]
    lessons = db.query(Lesson).filter(Lesson.module_id.in_(module_ids)).order_by(Lesson.order.asc()).all() if module_ids else []
    return {"modules": modules, "lessons": lessons, "progress": enrollment.progress_json if enrollment else {}}


@router.post("", dependencies=[Depends(require_admin)])
def create_course(payload: CourseCreate, db: Session = Depends(get_db)):
    course = Course(**payload.model_dump())
    db.add(course)
    db.commit()
    db.refresh(course)
    return course
