import { Card, Container, SectionTitle } from "@/components/ui";

export default function AdminProductsPage() {
  return (
    <Container><section className="py-16 space-y-3"><SectionTitle title="Manage Digital Products" /><Card>Upload files, set pricing, and attach Stripe price IDs.</Card></section></Container>
  );
}
