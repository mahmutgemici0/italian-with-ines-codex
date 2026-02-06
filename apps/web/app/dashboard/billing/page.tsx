import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function BillingPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Billing Portal" subtitle="Manage payment methods, invoices, and subscription." />
        <Card className="space-y-3">
          <p className="text-sm">Call `/subscriptions/portal` to get Stripe Customer Portal URL.</p>
          <Button>Open Billing Portal</Button>
        </Card>
      </section>
    </Container>
  );
}
