import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Contact" subtitle="Business inquiries, support, and collaborations." />
        <Card className="space-y-3">
          <input className="h-11 w-full rounded-xl border border-border px-3" placeholder="Your email" />
          <textarea className="h-36 w-full rounded-xl border border-border p-3" placeholder="Message" />
          <Button>Send Message</Button>
        </Card>
      </section>
    </Container>
  );
}
