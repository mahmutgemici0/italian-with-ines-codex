import { Button, Card, Container, SectionTitle } from "@/components/ui";

export function GoalCards() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Choose your goal" subtitle="Pick the path that matches your daily reality." />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-4">
            <h3 className="font-serif text-3xl">Italian for travel and everyday life</h3>
            <p className="text-sm text-foreground/75">For learners who want to order, ask, understand, and respond with ease during trips and daily routines.</p>
            <p className="text-sm text-foreground/75">You get situation-based lessons, phrase packs, and listening drills for practical conversations.</p>
            <Button href="/courses/italian-a1-starter">See practical courses</Button>
          </Card>
          <Card className="space-y-4">
            <h3 className="font-serif text-3xl">Italian for confidence and conversation</h3>
            <p className="text-sm text-foreground/75">For learners who can read and study, but want smoother speaking and stronger expression.</p>
            <p className="text-sm text-foreground/75">You get guided speaking practice, pronunciation coaching, and feedback loops that build speed and control.</p>
            <Button href="/membership" variant="ghost">Join speaking-focused training</Button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
