import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Contact" subtitle="Business inquiries, support, and collaborations." />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <form className="space-y-3">
              <label className="text-sm font-semibold" htmlFor="contact-name">Name</label>
              <input id="contact-name" className="h-11 w-full rounded-xl border border-border px-3" placeholder="Your name" />
              <label className="text-sm font-semibold" htmlFor="contact-email">Email</label>
              <input id="contact-email" className="h-11 w-full rounded-xl border border-border px-3" placeholder="you@example.com" />
              <label className="text-sm font-semibold" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" className="h-36 w-full rounded-xl border border-border p-3" placeholder="How can we help?" />
              <Button>Send Message</Button>
            </form>
          </Card>
          <Card className="space-y-3">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <p className="text-sm text-foreground/75">For support and partnerships, use the form or email directly.</p>
            <p className="text-sm"><strong>Email:</strong> support@learnitalianwithines.com</p>
            <p className="text-sm"><strong>Response window:</strong> Monday to Friday, within 48 hours.</p>
            <div className="image-slot flex h-36 items-center justify-center text-center">
              <p className="px-4 text-xs font-semibold uppercase tracking-wide text-foreground/55">Reserved image slot for contact banner</p>
            </div>
          </Card>
        </div>
      </section>
    </Container>
  );
}
