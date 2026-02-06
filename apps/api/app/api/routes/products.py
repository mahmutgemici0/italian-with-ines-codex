from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.deps import require_admin
from app.db.session import get_db
from app.models.product_digital import ProductDigital
from app.schemas.products import DigitalProductCreate

router = APIRouter(prefix="/products", tags=["products"])


@router.get("/digital")
def list_digital(db: Session = Depends(get_db)):
    rows = db.query(ProductDigital).order_by(ProductDigital.created_at.desc()).all()
    return rows


@router.get("/digital/{slug}")
def get_digital(slug: str, db: Session = Depends(get_db)):
    row = db.query(ProductDigital).filter(ProductDigital.slug == slug).first()
    if not row:
        raise HTTPException(status_code=404, detail="Not found")
    return row


@router.post("/digital", dependencies=[Depends(require_admin)])
def create_digital(payload: DigitalProductCreate, db: Session = Depends(get_db)):
    row = ProductDigital(**payload.model_dump())
    db.add(row)
    db.commit()
    db.refresh(row)
    return row
