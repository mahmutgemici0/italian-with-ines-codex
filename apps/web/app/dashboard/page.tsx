import { Card, Container, SectionTitle, Button } from "@/components/ui";

export default function DashboardPage() {
  return (
    <Container>
      <section className="py-16 space-y-6">
        <SectionTitle title="Dashboard" subtitle="Purchases, downloads, courses, membership, and upcoming bookings." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["My Courses", "/dashboard/courses/placeholder"],
            ["Downloads", "/dashboard/downloads"],
            ["Billing Portal", "/dashboard/billing"],
            ["Booking History", "/dashboard/bookings"],
          ].map(([label, href]) => (
            <Card key={label} className="space-y-3">
              <p className="font-semibold">{label}</p>
              <Button href={href} variant="ghost">Open</Button>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
