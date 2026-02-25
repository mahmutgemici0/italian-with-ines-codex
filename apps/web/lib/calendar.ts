export interface LiveSessionEvent {
  title: string;
  description: string;
  start: Date;
  durationMinutes: number;
  location?: string;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function formatDateUTC(date: Date): string {
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

export function generateICS(event: LiveSessionEvent): string {
  const end = new Date(event.start.getTime() + event.durationMinutes * 60_000);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Italian with Ines//Live Session//EN",
    "BEGIN:VEVENT",
    `DTSTART:${formatDateUTC(event.start)}`,
    `DTEND:${formatDateUTC(end)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    ...(event.location ? [`LOCATION:${event.location}`] : []),
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}
