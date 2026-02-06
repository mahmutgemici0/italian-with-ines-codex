import { Card, Container, SectionTitle } from "@/components/ui";

export default function AdminResourcesPage() {
  return (
    <Container><section className="py-16 space-y-3"><SectionTitle title="Manage Free Resources" /><Card>CRUD resources, tags, and gating rules.</Card></section></Container>
  );
}
