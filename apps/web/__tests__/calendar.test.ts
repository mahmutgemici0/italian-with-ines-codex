import { describe, expect, it } from "vitest";
import { generateICS, type LiveSessionEvent } from "../lib/calendar";

describe("generateICS", () => {
  const event: LiveSessionEvent = {
    title: "Italian Live Lesson",
    description: "Group practice session",
    start: new Date("2026-03-07T17:00:00Z"),
    durationMinutes: 60,
    location: "Zoom",
  };

  it("produces valid iCalendar structure", () => {
    const ics = generateICS(event);
    expect(ics).toContain("BEGIN:VCALENDAR");
    expect(ics).toContain("END:VCALENDAR");
    expect(ics).toContain("BEGIN:VEVENT");
    expect(ics).toContain("END:VEVENT");
  });

  it("sets correct start and end times", () => {
    const ics = generateICS(event);
    expect(ics).toContain("DTSTART:20260307T170000Z");
    expect(ics).toContain("DTEND:20260307T180000Z");
  });

  it("includes title, description, and location", () => {
    const ics = generateICS(event);
    expect(ics).toContain("SUMMARY:Italian Live Lesson");
    expect(ics).toContain("DESCRIPTION:Group practice session");
    expect(ics).toContain("LOCATION:Zoom");
  });

  it("omits LOCATION when not provided", () => {
    const { location, ...noLoc } = event;
    const ics = generateICS(noLoc);
    expect(ics).not.toContain("LOCATION:");
  });

  it("uses CRLF line endings per RFC 5545", () => {
    const ics = generateICS(event);
    expect(ics).toContain("\r\n");
  });
});
