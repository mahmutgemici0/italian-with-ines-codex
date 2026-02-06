from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.rate_limit import simple_rate_limit
from app.db.session import get_db
from app.models.product_digital import ProductDigital
from app.models.purchase import Purchase
from app.services.downloads import validate_and_consume_download

router = APIRouter(prefix="/downloads", tags=["downloads"])


@router.get("/{token}", dependencies=[Depends(simple_rate_limit)])
def download_with_token(token: str, db: Session = Depends(get_db)):
    record = validate_and_consume_download(db, token)
    if not record:
        raise HTTPException(status_code=403, detail="Invalid or expired token")

    purchase = db.get(Purchase, record.purchase_id)
    if not purchase:
        raise HTTPException(status_code=404, detail="Purchase missing")

    product = db.get(ProductDigital, purchase.product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product missing")

    # Placeholder for signed S3 URL generation.
    signed_url = f"https://example-download.local/{product.file_key}?token={token}"
    return {
        "download_url": signed_url,
        "remaining_count": record.remaining_count,
        "license": "Personal use only. Redistribution prohibited.",
    }
