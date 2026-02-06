import { Card, Container, SectionTitle } from "@/components/ui";

const links = [
  ["Manage Courses", "/admin/courses"],
  ["Manage Digital Products", "/admin/products"],
  ["Manage Resources", "/admin/resources"],
  ["Manage Bookings", "/admin/bookings"],
  ["Manage Live Classroom", "/admin/live"],
  ["Manage Merch", "/admin/merch"],
  ["Users", "/admin/users"],
  ["Content", "/admin/content"],
];

export default function AdminDashboardPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Admin Dashboard" subtitle="Sales metrics and content control center." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(([label, href]) => (
            <Card key={href}><a href={href} className="font-semibold hover:underline">{label}</a></Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
