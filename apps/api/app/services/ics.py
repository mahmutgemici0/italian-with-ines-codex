from datetime import datetime


def build_booking_ics(start: datetime, end: datetime, title: str, description: str) -> str:
    def fmt(dt: datetime) -> str:
        return dt.strftime("%Y%m%dT%H%M%SZ")

    return "\n".join(
        [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Italian with Ines//Bookings//EN",
            "BEGIN:VEVENT",
            f"DTSTART:{fmt(start)}",
            f"DTEND:{fmt(end)}",
            f"SUMMARY:{title}",
            f"DESCRIPTION:{description}",
            "END:VEVENT",
            "END:VCALENDAR",
        ]
    )
