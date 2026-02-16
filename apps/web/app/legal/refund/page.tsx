import { Card, Container, SectionTitle } from "@/components/ui";

export default function RefundPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Refund Policy" subtitle="Clear guidance for digital products, courses, memberships, and 1:1 sessions." />
        <Card className="space-y-2 text-sm text-foreground/75">
          <p><strong>Digital products:</strong> due to instant access, digital download purchases are generally non-refundable.</p>
          <p><strong>Courses:</strong> refund requests must be submitted within the policy window shown at checkout, if applicable.</p>
          <p><strong>Membership:</strong> subscription fees are non-refundable for the active billing period. Access remains until period end after cancellation.</p>
          <p><strong>1:1 lessons:</strong> cancellations made less than 24 hours before session start are generally not eligible for refund.</p>
          <p><strong>How to request:</strong> contact support with order details and reason for request. Approved refunds are returned to original payment method.</p>
          <p><strong>Chargebacks:</strong> please contact support first so issues can be resolved quickly and accurately.</p>
        </Card>
      </section>
    </Container>
  );
}
