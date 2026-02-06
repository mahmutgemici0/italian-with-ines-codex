import { CheckoutButton } from "@/components/checkout-button";
import { Card, Container, SectionTitle } from "@/components/ui";

export default function MembershipPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Weekly Live Classroom" subtitle="Monthly membership with speaking feedback and recordings." />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3">
            <h3 className="font-semibold">What members get</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>Weekly live Zoom class</li>
              <li>Class recordings and notes</li>
              <li>Member-only announcements</li>
              <li>Priority Q&A</li>
            </ul>
          </Card>
          <Card className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-accent">Monthly</p>
            <p className="text-4xl font-semibold">€29</p>
            <p className="text-sm text-foreground/75">Cancel anytime. Access remains until period end.</p>
            <CheckoutButton
              label="Subscribe with Stripe"
              mode="subscription"
              priceId="price_membership_monthly"
              productType="membership"
              productId="weekly-live-classroom"
            />
          </Card>
        </div>
      </section>
    </Container>
  );
}
