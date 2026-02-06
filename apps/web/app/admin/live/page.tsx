import { Card, Container, SectionTitle } from "@/components/ui";

export default function AdminLivePage() {
  return (
    <Container><section className="py-16 space-y-3"><SectionTitle title="Manage Live Classroom" /><Card>Schedule sessions, store Zoom links, send member announcements.</Card></section></Container>
  );
}
