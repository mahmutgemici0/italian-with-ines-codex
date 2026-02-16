import { Button, Card, Container, SectionTitle } from "@/components/ui";

const bookingLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2du-KuW2Kppr-TIcJYDkRicq1BYWmWg8vGKQToZnzULVm1nD2tFFNkVKXsGaKFLbpnLSVr6kBN";

export default function BookingHistoryPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Booking History" subtitle="Review your lesson policies and schedule new 1:1 sessions." />
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold">Reschedule and cancellation policy</h3>
          <ul className="space-y-2 text-sm text-foreground/75">
            <li>Rescheduling is available up to 24 hours before your session.</li>
            <li>Cancellations inside 24 hours are non-refundable by default.</li>
            <li>You receive a calendar file and confirmation details after payment.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <Button href="/bookings">Open booking page</Button>
            <Button href={bookingLink} variant="ghost">Google schedule</Button>
          </div>
        </Card>
      </section>
    </Container>
  );
}
