import { Card, Container, SectionTitle } from "@/components/ui";

export function ProblemSolution() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle
          title="If Italian feels stuck, the method is usually the issue"
          subtitle="Many learners understand lessons, then freeze during real conversations. This section speaks directly to that gap."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Common frustrations</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/75">
              <li>You understand notes, but your mind goes blank when someone speaks to you.</li>
              <li>Grammar explanations feel endless and disconnected from real situations.</li>
              <li>Native speech sounds too fast, so confidence drops quickly.</li>
            </ul>
          </Card>
          <Card className="bg-[#fff8f3]">
            <h3 className="text-lg font-semibold">What changes with this approach</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/75">
              <li>Structured lessons build one clear skill at a time.</li>
              <li>Real-life phrase training gives you ready sentences for daily moments.</li>
              <li>Pronunciation support helps rhythm and clarity.</li>
              <li><strong>Che bello!</strong> means <strong>How nice!</strong> and you practice when and how to say it naturally.</li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
