import { Button, Card, Container, SectionTitle } from "@/components/ui";

const offers = [
  { title: "Italian A1 Course", outcome: "Build your core grammar and daily speaking base.", level: "A1", href: "/courses/italian-a1-starter" },
  { title: "Italian A2 Course", outcome: "Expand to longer conversations and stronger listening.", level: "A2", href: "/courses/italian-a2-next-step" },
  { title: "Pronunciation Mini-Course", outcome: "Improve clarity, stress, and rhythm fast.", level: "A1-A2", href: "/courses/italian-pronunciation-mini" },
  { title: "Travel Italian Pack", outcome: "Speak confidently in airports, hotels, and cafes.", level: "A1", href: "/shop/50-essential-phrases" },
  { title: "Weekly Live Classroom", outcome: "Practice speaking every week with feedback.", level: "All levels", href: "/membership" },
  { title: "1:1 Coaching", outcome: "Get personal corrections and focused goals.", level: "All levels", href: "/bookings" },
];

export function ProductGrid() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Popular offers" subtitle="Pick the format that matches your learning style and schedule." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.title} className="flex h-full flex-col justify-between gap-4">
              <div>
                <p className="inline-block rounded-full bg-muted px-2 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">{offer.level}</p>
                <h3 className="mt-3 text-lg font-semibold">{offer.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{offer.outcome}</p>
              </div>
              <Button href={offer.href} variant="ghost">View offer</Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
