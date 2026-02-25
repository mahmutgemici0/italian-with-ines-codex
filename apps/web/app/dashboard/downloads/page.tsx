import { Card, Container, SectionTitle } from "@/components/ui";

export default function DownloadsPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="My Downloads" subtitle="Expiring links with remaining count and license note." />
        <Card>
          <p className="text-sm">Download link list placeholder from `/downloads/{"{"}token{"}"}` responses.</p>
        </Card>
      </section>
    </Container>
  );
}
