import { CheckoutButton } from "@/components/checkout-button";
import { Card, Container, SectionTitle } from "@/components/ui";

const sessions = [
  { day: "Monday", time: "11:00 AM PST", spotsLeft: 4 },
  { day: "Monday", time: "8:00 PM PST", spotsLeft: 3 },
  { day: "Friday", time: "9:00 AM PST", spotsLeft: 6 },
  { day: "Friday", time: "9:00 PM PST", spotsLeft: 2 },
  { day: "Saturday", time: "10:00 AM PST", spotsLeft: 5 },
  { day: "Saturday", time: "10:00 PM PST", spotsLeft: 4 },
];

export default function MembershipPage() {
  return (
    <Container>
      <section className="py-16 space-y-6">
        <SectionTitle
          title="Weekly Live Classroom Membership"
          subtitle="Two live classes each week, small groups of up to 10 learners, and guided speaking support with practical correction."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3">
            <h3 className="text-xl font-semibold">What awaits you</h3>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>Two live classroom sessions per week in small groups (max 10 students).</li>
              <li>Speaking-focused lessons with direct correction and pronunciation support.</li>
              <li>Google Classroom hub for worksheets, assignments, and class updates.</li>
              <li>Google Meet session recordings stored in Google Drive for replay.</li>
              <li>Member announcements and structured weekly study prompts.</li>
            </ul>
            <div className="rounded-2xl border border-border bg-muted p-3 text-sm text-foreground/75">
              Google Classroom integration spot: add your class invite URL once ready.
            </div>
          </Card>

          <Card className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Subscription</p>
            <p className="text-4xl font-semibold">$29 / month</p>
            <p className="text-sm text-foreground/75">Cancel anytime. Access remains active until the billing period ends.</p>
            <CheckoutButton
              label="Join live classroom"
              mode="subscription"
              priceId="price_membership_monthly"
              productType="membership"
              productId="weekly-live-classroom"
            />
            <p className="text-xs text-foreground/60">Payment is handled by Stripe Checkout. Apple Pay is available on supported devices.</p>
          </Card>
        </div>

        <Card className="space-y-3">
          <h3 className="text-xl font-semibold">Available live session options</h3>
          <p className="text-sm text-foreground/75">Choose the session that fits your schedule. Spot counts update as members join.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sessions.map((slot) => (
              <div key={`${slot.day}-${slot.time}`} className="rounded-2xl border border-border bg-white p-4">
                <p className="text-sm font-semibold">{slot.day}</p>
                <p className="text-sm text-foreground/75">{slot.time}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-accent">
                  {slot.spotsLeft} spots left
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </Container>
  );
}
