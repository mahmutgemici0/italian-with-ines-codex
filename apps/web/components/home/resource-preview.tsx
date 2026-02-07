import { Button, Card, Container, SectionTitle } from "@/components/ui";

const resources = [
  { title: "Italian restaurant phrases that sound natural", type: "Free guide", href: "/resources" },
  { title: "How to train your ear for faster Italian speech", type: "Blog", href: "/blog" },
  { title: "A1 verb sheet for daily routines", type: "Download", href: "/resources" },
];

export function ResourcePreview() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Free resources" subtitle="Start learning today with practical lessons and downloads." />
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{resource.type}</p>
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <Button href={resource.href} variant="ghost">Open resource</Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
