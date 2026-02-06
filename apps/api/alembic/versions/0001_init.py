"""initial schema

Revision ID: 0001_init
Revises: 
Create Date: 2026-02-06 00:00:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0001_init"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("name", sa.String(length=255), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("role", sa.String(length=32), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("email"),
    )
    op.create_index(op.f("ix_users_email"), "users", ["email"], unique=False)

    op.create_table(
        "products_digital",
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("slug", sa.String(length=255), nullable=False),
        sa.Column("price", sa.Integer(), nullable=False),
        sa.Column("stripe_price_id", sa.String(length=128), nullable=False),
        sa.Column("file_key", sa.String(length=255), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug"),
    )
    op.create_index(op.f("ix_products_digital_slug"), "products_digital", ["slug"], unique=False)
    op.create_index(op.f("ix_products_digital_title"), "products_digital", ["title"], unique=False)

    op.create_table(
        "courses",
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("slug", sa.String(length=255), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("level", sa.String(length=32), nullable=False),
        sa.Column("price", sa.Integer(), nullable=False),
        sa.Column("stripe_price_id", sa.String(length=128), nullable=False),
        sa.Column("thumbnail_url", sa.String(length=255), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug"),
    )
    op.create_index(op.f("ix_courses_slug"), "courses", ["slug"], unique=False)
    op.create_index(op.f("ix_courses_title"), "courses", ["title"], unique=False)

    op.create_table(
        "purchases",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("product_type", sa.String(length=32), nullable=False),
        sa.Column("product_id", sa.String(length=64), nullable=False),
        sa.Column("stripe_payment_intent", sa.String(length=128), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_purchases_product_id"), "purchases", ["product_id"], unique=False)
    op.create_index(op.f("ix_purchases_product_type"), "purchases", ["product_type"], unique=False)
    op.create_index(op.f("ix_purchases_user_id"), "purchases", ["user_id"], unique=False)

    op.create_table(
        "downloads",
        sa.Column("purchase_id", sa.String(), nullable=False),
        sa.Column("token", sa.String(length=255), nullable=False),
        sa.Column("expires_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("remaining_count", sa.Integer(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.ForeignKeyConstraint(["purchase_id"], ["purchases.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("token"),
    )
    op.create_index(op.f("ix_downloads_expires_at"), "downloads", ["expires_at"], unique=False)
    op.create_index(op.f("ix_downloads_purchase_id"), "downloads", ["purchase_id"], unique=False)
    op.create_index(op.f("ix_downloads_token"), "downloads", ["token"], unique=False)

    op.create_table(
        "modules",
        sa.Column("course_id", sa.String(), nullable=False),
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_modules_course_id"), "modules", ["course_id"], unique=False)

    op.create_table(
        "lessons",
        sa.Column("module_id", sa.String(), nullable=False),
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False),
        sa.Column("content_json", sa.JSON(), nullable=False),
        sa.Column("video_url", sa.String(length=255), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["module_id"], ["modules.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_lessons_module_id"), "lessons", ["module_id"], unique=False)

    op.create_table(
        "course_enrollments",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("course_id", sa.String(), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("progress_json", sa.JSON(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["course_id"], ["courses.id"]),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_course_enrollments_course_id"), "course_enrollments", ["course_id"], unique=False)
    op.create_index(op.f("ix_course_enrollments_user_id"), "course_enrollments", ["user_id"], unique=False)

    op.create_table(
        "bookings",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("start_time", sa.DateTime(timezone=True), nullable=False),
        sa.Column("end_time", sa.DateTime(timezone=True), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("stripe_payment_intent", sa.String(length=128), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_bookings_end_time"), "bookings", ["end_time"], unique=False)
    op.create_index(op.f("ix_bookings_start_time"), "bookings", ["start_time"], unique=False)
    op.create_index(op.f("ix_bookings_user_id"), "bookings", ["user_id"], unique=False)

    op.create_table(
        "availability_rules",
        sa.Column("weekday", sa.Integer(), nullable=False),
        sa.Column("start_time", sa.Time(), nullable=False),
        sa.Column("end_time", sa.Time(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "subscriptions",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("stripe_customer_id", sa.String(length=128), nullable=False),
        sa.Column("stripe_subscription_id", sa.String(length=128), nullable=False),
        sa.Column("status", sa.String(length=32), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_subscriptions_user_id"), "subscriptions", ["user_id"], unique=False)

    op.create_table(
        "resources_free",
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("slug", sa.String(length=255), nullable=False),
        sa.Column("level", sa.String(length=32), nullable=False),
        sa.Column("tags", sa.JSON(), nullable=False),
        sa.Column("gated", sa.Boolean(), nullable=False),
        sa.Column("file_key", sa.String(length=255), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug"),
    )
    op.create_index(op.f("ix_resources_free_slug"), "resources_free", ["slug"], unique=False)
    op.create_index(op.f("ix_resources_free_title"), "resources_free", ["title"], unique=False)

    op.create_table(
        "blog_posts",
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("slug", sa.String(length=255), nullable=False),
        sa.Column("content_md", sa.Text(), nullable=False),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug"),
    )
    op.create_index(op.f("ix_blog_posts_slug"), "blog_posts", ["slug"], unique=False)
    op.create_index(op.f("ix_blog_posts_title"), "blog_posts", ["title"], unique=False)


def downgrade() -> None:
    for table in [
        "blog_posts",
        "resources_free",
        "subscriptions",
        "availability_rules",
        "bookings",
        "course_enrollments",
        "lessons",
        "modules",
        "downloads",
        "purchases",
        "courses",
        "products_digital",
        "users",
    ]:
        op.drop_table(table)
