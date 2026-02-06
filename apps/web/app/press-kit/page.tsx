import { Card, Container, SectionTitle } from "@/components/ui";

export default function PressKitPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Press Kit" subtitle="Bio, brand assets, and approved photos." />
        <Card>
          <p className="text-sm text-foreground/75">Add downloadable media kit files and brand guidelines here.</p>
        </Card>
      </section>
    </Container>
  );
}
