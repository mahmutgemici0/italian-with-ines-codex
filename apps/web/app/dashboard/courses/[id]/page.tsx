import { Card, Container, SectionTitle } from "@/components/ui";

export default function CoursePlayerPage({ params }: { params: { id: string } }) {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Course Player" subtitle="Modules, lessons, progress tracking, and attachments." />
        <Card>
          <p className="text-sm">Course id: {params.id}</p>
          <p className="text-sm text-foreground/70">Load gated content via `/courses/{params.id}/player` after purchase/enrollment checks.</p>
        </Card>
      </section>
    </Container>
  );
}
