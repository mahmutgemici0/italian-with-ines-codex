import { Container, SectionTitle, Card, Button } from "@/components/ui";
import { api } from "@/lib/api";

export default async function ResourcesPage() {
  const resources = await api.resources().catch(() => []);
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Free Resources" subtitle="Ungated + lead-magnet resources with filters by level and topic." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.length ? resources.map((r: any) => (
            <Card key={r.id} className="space-y-3">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-xs text-foreground/60">Level: {r.level} · Tags: {(r.tags || []).join(", ")}</p>
              <p className="text-sm text-foreground/75">{r.content}</p>
              <Button variant="ghost">{r.gated ? "Unlock via Email" : "View Resource"}</Button>
            </Card>
          )) : <p className="text-sm text-foreground/70">No resources yet.</p>}
        </div>
      </section>
    </Container>
  );
}
