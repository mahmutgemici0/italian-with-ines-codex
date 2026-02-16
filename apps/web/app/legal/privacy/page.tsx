import { Card, Container, SectionTitle } from "@/components/ui";

export default function PrivacyPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Privacy Policy" subtitle="How Italian with Ines collects, uses, and protects personal information." />
        <Card className="space-y-2 text-sm text-foreground/75">
          <p><strong>Information collected:</strong> name, email, purchase records, course progress, and support messages.</p>
          <p><strong>How data is used:</strong> to provide products, process payments, deliver course access, and send relevant learning updates.</p>
          <p><strong>Payment processing:</strong> payments are processed by Stripe. Sensitive payment data is not stored directly on this website.</p>
          <p><strong>Email communication:</strong> users may receive transactional emails and optional educational marketing emails. Unsubscribe is available in marketing messages.</p>
          <p><strong>Data sharing:</strong> data is only shared with service providers required for operation (for example payment, storage, and email services).</p>
          <p><strong>Data rights:</strong> users may request access, correction, or deletion of personal data by contacting support.</p>
          <p><strong>Policy updates:</strong> policy updates may occur as services evolve. Continued use indicates acceptance of updated terms.</p>
        </Card>
      </section>
    </Container>
  );
}
