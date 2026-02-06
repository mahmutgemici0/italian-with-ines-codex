import { Card, Container, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 space-y-5">
        <SectionTitle title="About Ines" subtitle="Creator story, teaching philosophy, and mission." />
        <Card>
          <p className="text-sm text-foreground/75">Ines blends structured grammar and natural conversation practice to help learners speak Italian confidently.</p>
        </Card>
      </section>
    </Container>
  );
}
