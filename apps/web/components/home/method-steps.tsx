import { Card, Container, SectionTitle } from "@/components/ui";

const steps = [
  {
    title: "Build your foundation",
    detail: "Master A1 essentials: sentence order, core verbs, and high-frequency vocabulary with clear examples.",
  },
  {
    title: "Speak in real situations",
    detail: "Practice guided dialogues for travel, home, work, and social moments with useful prompts.",
  },
  {
    title: "Sound natural",
    detail: "Refine pronunciation, stress, and rhythm so your speech feels smoother and more confident.",
  },
];

export function MethodSteps() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="The Italian with Ines method" subtitle="A practical three-step framework for steady progress." />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Step {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{step.detail}</p>
              {index === 2 ? (
                <p className="mt-2 text-sm text-foreground/75"><strong>Andiamo!</strong> means <strong>Let us go!</strong></p>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
