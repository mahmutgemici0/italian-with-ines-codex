import { Card, Container, SectionTitle } from "@/components/ui";

export default function AdminUsersPage() {
  return (
    <Container><section className="py-16 space-y-3"><SectionTitle title="Users" /><Card>View users and roles, promote/demote admin.</Card></section></Container>
  );
}
