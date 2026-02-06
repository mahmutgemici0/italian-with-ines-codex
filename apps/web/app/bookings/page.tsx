import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function BookingsPage() {
  return (
    <Container>
      <section className="py-16 space-y-6">
        <SectionTitle title="Book a 1:1 Lesson" subtitle="Pick a slot, pay securely, receive confirmation and .ics file." />
        <Card className="space-y-4">
          <p className="text-sm">Availability calendar component placeholder + admin-managed rules from `/bookings/availability`.</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {['Mon 10:00', 'Tue 14:00', 'Thu 17:00', 'Fri 09:00'].map((s) => (
              <button key={s} className="rounded-xl border border-border p-3 text-sm">{s}</button>
            ))}
          </div>
          <Button>Continue to Payment</Button>
        </Card>
      </section>
    </Container>
  );
}
