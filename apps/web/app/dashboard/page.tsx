import { Card, Container, SectionTitle, Button } from "@/components/ui";

const items = [
  {
    label: "My Courses",
    href: "/dashboard/courses",
    detail: "Open your enrolled courses and continue learning.",
  },
  {
    label: "Downloads",
    href: "/dashboard/downloads",
    detail: "Redeem secure download links and view license notes.",
  },
  {
    label: "Billing Portal",
    href: "/dashboard/billing",
    detail: "Manage invoices, payment methods, and subscription status.",
  },
  {
    label: "Booking History",
    href: "/dashboard/bookings",
    detail: "Review upcoming sessions and cancellation policies.",
  },
];

export default function DashboardPage() {
  return (
    <Container>
      <section className="py-16 space-y-6">
        <SectionTitle title="Dashboard" subtitle="Your courses, downloads, subscription, and lesson bookings in one place." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.label} className="space-y-3">
              <p className="font-semibold">{item.label}</p>
              <p className="text-sm text-foreground/75">{item.detail}</p>
              <Button href={item.href} variant="ghost">Open</Button>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
