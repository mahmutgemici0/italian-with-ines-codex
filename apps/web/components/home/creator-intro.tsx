import { Card, Container, SectionTitle } from "@/components/ui";

const reasons = [
  "Clear sequence: students know what to study this week and why.",
  "Frequent speaking prompts: progress is measured by what students can say.",
  "Pronunciation checkpoints: rhythm and stress receive direct attention.",
  "Practical repetition: students use useful phrases in many contexts.",
];

export function CreatorIntro() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid items-start gap-5 lg:grid-cols-[1.1fr_1fr]">
          <Card className="space-y-4">
            <SectionTitle title="Hi, I am Ines." subtitle="I teach Italian with structure, warmth, and high standards for speaking confidence." />
            <p className="text-sm text-foreground/75">
              I build lessons for English-speaking learners who want real communication, not passive study. My teaching style combines clear grammar with active speaking from day one.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl bg-muted p-3"><p className="text-xl font-semibold">25k+</p><p className="text-foreground/65">Learners</p></div>
              <div className="rounded-2xl bg-muted p-3"><p className="text-xl font-semibold">4.9</p><p className="text-foreground/65">Rating</p></div>
              <div className="rounded-2xl bg-muted p-3"><p className="text-xl font-semibold">300+</p><p className="text-foreground/65">Lessons</p></div>
            </div>
          </Card>
          <Card className="space-y-4">
            <h3 className="text-lg font-semibold">Why my students improve</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/75">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <div className="image-slot flex h-36 items-center justify-center text-center">
              <p className="px-5 text-xs font-semibold uppercase tracking-wide text-foreground/55">
                Reserved image spot
                <br />
                Add portrait, classroom screenshot, or testimonial collage
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
