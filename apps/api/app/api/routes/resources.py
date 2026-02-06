from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.deps import require_admin
from app.db.session import get_db
from app.models.resource_free import ResourceFree

router = APIRouter(prefix="/resources", tags=["resources"])


@router.get("/free")
def list_resources(db: Session = Depends(get_db), level: str | None = None, tag: str | None = None):
    query = db.query(ResourceFree)
    if level:
        query = query.filter(ResourceFree.level == level)
    rows = query.order_by(ResourceFree.created_at.desc()).all()
    if tag:
        rows = [r for r in rows if tag in (r.tags or [])]
    return rows


@router.post("/free", dependencies=[Depends(require_admin)])
def create_resource(payload: dict, db: Session = Depends(get_db)):
    row = ResourceFree(**payload)
    db.add(row)
    db.commit()
    db.refresh(row)
    return row
