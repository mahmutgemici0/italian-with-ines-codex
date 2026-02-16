import { Card, Container, SectionTitle } from "@/components/ui";

export default function PressKitPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Press Kit" subtitle="Media summary, brand positioning, and asset placeholders." />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-2">
            <h3 className="text-lg font-semibold">Short bio</h3>
            <p className="text-sm text-foreground/75">Ines is an Italian educator and creator focused on practical speaking outcomes for English-speaking learners.</p>
          </Card>
          <Card className="space-y-2">
            <h3 className="text-lg font-semibold">Brand facts</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>Language niche: Italian learning for real communication</li>
              <li>Offer mix: courses, digital resources, live classes, coaching</li>
              <li>Audience: global English-speaking learners</li>
            </ul>
          </Card>
          <Card className="image-slot flex h-40 items-center justify-center text-center">
            <p className="px-4 text-xs font-semibold uppercase tracking-wide text-foreground/55">Reserved press image slot</p>
          </Card>
          <Card className="image-slot flex h-40 items-center justify-center text-center">
            <p className="px-4 text-xs font-semibold uppercase tracking-wide text-foreground/55">Reserved brand assets slot</p>
          </Card>
        </div>
      </section>
    </Container>
  );
}
