import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function StartHerePage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Start Here" subtitle="Quiz scaffold + lead capture funnel." />
        <Card className="space-y-4">
          <p className="text-sm">What is your current level?</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost">A1 Beginner</Button>
            <Button variant="ghost">A2 Elementary</Button>
            <Button variant="ghost">B1 Intermediate</Button>
          </div>
          <p className="text-sm text-foreground/75">On submit, call newsletter API and send the matching lead magnet via email.</p>
          <Button>See My Plan</Button>
        </Card>
      </section>
    </Container>
  );
}
