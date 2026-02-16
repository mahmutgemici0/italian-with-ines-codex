import { Card, Container, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 space-y-5">
        <SectionTitle title="About Ines" subtitle="Structured Italian teaching with a warm and practical approach." />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3">
            <h2 className="text-xl font-semibold">My mission</h2>
            <p className="text-sm text-foreground/75">
              I help English-speaking learners build real Italian speaking confidence through clear structure, useful phrases, and consistent guided practice.
            </p>
            <p className="text-sm text-foreground/75">
              The goal is simple: you should be able to use what you learn in real conversations, not only in notes.
            </p>
          </Card>
          <Card className="space-y-3">
            <h2 className="text-xl font-semibold">Teaching philosophy</h2>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>Clarity first: know what to study and why.</li>
              <li>Speak early: output matters from day one.</li>
              <li>Practical repetition: train phrases you actually need.</li>
              <li>Natural rhythm: pronunciation and pacing are core skills.</li>
            </ul>
          </Card>
        </div>
      </section>
    </Container>
  );
}
