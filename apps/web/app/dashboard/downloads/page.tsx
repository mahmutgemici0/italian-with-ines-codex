import { Card, Container, SectionTitle } from "@/components/ui";

export default function DownloadsPage() {
  return (
    <Container>
      <section className="space-y-4 py-16">
        <SectionTitle title="My Downloads" subtitle="Expiring links with remaining count and license note." />
        <Card>
          <p className="text-sm">
            Download link list placeholder from <code>/downloads/{"{token}"}</code> responses.
          </p>
        </Card>
      </section>
    </Container>
  );
}
