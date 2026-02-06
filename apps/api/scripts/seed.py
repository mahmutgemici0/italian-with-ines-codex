import os
import sys

# Allow running via `python scripts/seed.py` inside and outside Docker.
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.core.security import hash_password
from app.db.session import SessionLocal
from app.models.blog_post import BlogPost
from app.models.course import Course
from app.models.module import Module
from app.models.lesson import Lesson
from app.models.product_digital import ProductDigital
from app.models.resource_free import ResourceFree
from app.models.user import User


def run_seed() -> None:
    db = SessionLocal()
    try:
        if not db.query(User).filter(User.email == "admin@ines.com").first():
            db.add(User(email="admin@ines.com", name="Ines", hashed_password=hash_password("admin1234"), role="admin"))
        if not db.query(User).filter(User.email == "user@ines.com").first():
            db.add(User(email="user@ines.com", name="Student", hashed_password=hash_password("user1234"), role="user"))

        course = db.query(Course).filter(Course.slug == "italian-a1-starter").first()
        if not course:
            course = Course(
                title="Italian A1 Starter",
                slug="italian-a1-starter",
                description="Build foundational Italian for travel and daily life.",
                level="A1",
                price=4900,
                stripe_price_id="price_course_a1",
                thumbnail_url="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
            )
            db.add(course)
            db.flush()
            module = Module(course_id=course.id, title="Week 1 Basics", order=1)
            db.add(module)
            db.flush()
            db.add(
                Lesson(
                    module_id=module.id,
                    title="Greetings and Introductions",
                    order=1,
                    content_json={"blocks": [{"type": "paragraph", "text": "Ciao! Mi chiamo..."}]},
                    video_url="https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                )
            )

        if not db.query(ProductDigital).filter(ProductDigital.slug == "50-essential-phrases").first():
            db.add(
                ProductDigital(
                    title="50 Essential Italian Phrases",
                    slug="50-essential-phrases",
                    description="Printable PDF + audio prompts",
                    price=1200,
                    stripe_price_id="price_digital_50phrases",
                    file_key="digital/50-essential-phrases.pdf",
                )
            )

        if not db.query(ResourceFree).filter(ResourceFree.slug == "free-a1-cheat-sheet").first():
            db.add(
                ResourceFree(
                    title="A1 Italian Cheat Sheet",
                    slug="free-a1-cheat-sheet",
                    level="A1",
                    tags=["grammar", "vocabulary"],
                    gated=True,
                    file_key="free/a1-cheat-sheet.pdf",
                    content="Quick-reference grammar and useful phrases.",
                )
            )

        if not db.query(BlogPost).filter(BlogPost.slug == "how-to-sound-natural-in-italian").first():
            db.add(
                BlogPost(
                    title="How to Sound More Natural in Italian",
                    slug="how-to-sound-natural-in-italian",
                    content_md="## Speak naturally\nUse chunks, not isolated words.",
                )
            )

        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    run_seed()
