import { LevelTest } from "@/components/level-test";
import { Card, Container, SectionTitle } from "@/components/ui";

export default function StartHerePage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle
          title="Free 5-minute Italian level test"
          subtitle="Complete all questions, unlock your results with email, and get a personalized course path."
        />
        <div className="mb-6 grid gap-4 lg:grid-cols-3">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">How it works</p>
            <p className="mt-2 text-sm text-foreground/75">1) Complete 10 questions 2) Enter name and email 3) View your level and recommended courses instantly.</p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Bonus</p>
            <p className="mt-2 text-sm text-foreground/75">You also receive the PDF <strong>Top 50 Italian phrases for real life</strong>.</p>
          </Card>
          <Card className="image-slot flex items-center justify-center">
            <p className="px-4 text-center text-xs font-semibold uppercase tracking-wide text-foreground/55">Reserved image spot for quiz preview or lead magnet visual</p>
          </Card>
        </div>
        <LevelTest />
      </section>
    </Container>
  );
}
