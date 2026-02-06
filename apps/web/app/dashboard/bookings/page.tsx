import { Card, Container, SectionTitle } from "@/components/ui";

export default function BookingHistoryPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Booking History" subtitle="Upcoming and past lessons with reschedule/cancel policy cutoff." />
        <Card>
          <p className="text-sm">Integrate with `/bookings/me` + action buttons based on cutoff rules.</p>
        </Card>
      </section>
    </Container>
  );
}
