import secrets
from datetime import datetime, timedelta, timezone

from sqlalchemy.orm import Session

from app.models.download import Download


def create_download_token(db: Session, purchase_id: str, ttl_minutes: int = 60 * 24, max_downloads: int = 5) -> Download:
    token = secrets.token_urlsafe(32)
    download = Download(
        purchase_id=purchase_id,
        token=token,
        expires_at=datetime.now(timezone.utc) + timedelta(minutes=ttl_minutes),
        remaining_count=max_downloads,
    )
    db.add(download)
    db.commit()
    db.refresh(download)
    return download


def validate_and_consume_download(db: Session, token: str) -> Download | None:
    record = db.query(Download).filter(Download.token == token).first()
    if not record:
        return None
    if record.expires_at < datetime.now(timezone.utc):
        return None
    if record.remaining_count <= 0:
        return None

    record.remaining_count -= 1
    db.add(record)
    db.commit()
    db.refresh(record)
    return record
