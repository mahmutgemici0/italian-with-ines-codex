import { Card, Container, SectionTitle } from "@/components/ui";

export default function AdminBookingsPage() {
  return (
    <Container><section className="py-16 space-y-3"><SectionTitle title="Manage Bookings" /><Card>Set weekly availability, exceptions, and cancellation cutoff.</Card></section></Container>
  );
}
