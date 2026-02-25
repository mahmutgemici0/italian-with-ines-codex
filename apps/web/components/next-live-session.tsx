"use client";

import { CalendarPlus } from "lucide-react";
import { Button, Card, SectionTitle } from "@/components/ui";
import { generateICS, type LiveSessionEvent } from "@/lib/calendar";

const nextSession: LiveSessionEvent = {
  title: "Italian with Ines — Weekly Live Classroom",
  description:
    "Join Ines for a live group Italian lesson. Speaking practice, Q&A, and real-time feedback.",
  start: getNextSessionDate(),
  durationMinutes: 60,
  location: "Zoom (link sent after purchase)",
};

/** Returns the upcoming Saturday at 17:00 UTC as a placeholder date. */
function getNextSessionDate(): Date {
  const now = new Date();
  const day = now.getUTCDay(); // 0=Sun
  const daysUntilSaturday = (6 - day + 7) % 7 || 7;
  const next = new Date(now);
  next.setUTCDate(now.getUTCDate() + daysUntilSaturday);
  next.setUTCHours(17, 0, 0, 0);
  return next;
}

function downloadICS(event: LiveSessionEvent) {
  const ics = generateICS(event);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "italian-with-ines-live-session.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function NextLiveSession() {
  const formatted = nextSession.start.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = nextSession.start.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="py-10">
      <SectionTitle
        title="Next Live Session"
        subtitle="Join the weekly group lesson with Ines — subscribe to reserve your spot."
      />
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-lg font-semibold">{formatted}</p>
          <p className="text-sm text-foreground/75">
            {time} · {nextSession.durationMinutes} min · via Zoom
          </p>
          <p className="text-sm text-foreground/75">
            {nextSession.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/membership">Subscribe to Join</Button>
          <Button
            variant="ghost"
            onClick={() => downloadICS(nextSession)}
          >
            <CalendarPlus className="mr-1.5 h-4 w-4" />
            Add to Calendar
          </Button>
        </div>
      </Card>
    </section>
  );
}
