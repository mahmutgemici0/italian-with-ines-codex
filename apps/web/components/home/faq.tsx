import { Card, Container, SectionTitle } from "@/components/ui";

const items = [
  ["How do payments work?", "Payments run through Stripe Checkout with secure card processing."],
  ["What is your refund policy?", "Please review the refund terms before purchase on the refund policy page."],
  ["How do courses work?", "Courses are self-paced with module-based lessons and progress tracking in your dashboard."],
  ["How long do I keep access?", "Course access and digital download rules are listed on each offer page before checkout."],
  ["What does the level test include?", "It includes a quick score, next-step recommendation, and a bonus PDF."],
  ["What is in the live classroom membership?", "Weekly live sessions, recordings, resources, and member announcements."],
];

export function HomeFAQ() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Frequently asked questions" subtitle="Clear answers before you join." />
        <div className="grid gap-3 md:grid-cols-2">
          {items.map(([q, a]) => (
            <Card key={q}>
              <h3 className="text-base font-semibold">{q}</h3>
              <p className="mt-2 text-sm text-foreground/75">{a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
