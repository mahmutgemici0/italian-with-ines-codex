import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function CheckoutCancelPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Checkout Canceled" subtitle="No charge was made." />
        <Card className="space-y-3">
          <p className="text-sm text-foreground/75">You can return to your selected product anytime.</p>
          <Button href="/courses" variant="ghost">Back to Courses</Button>
        </Card>
      </section>
    </Container>
  );
}
