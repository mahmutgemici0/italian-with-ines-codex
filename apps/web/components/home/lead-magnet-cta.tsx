import { Button, Card, Container } from "@/components/ui";

export function LeadMagnetCTA() {
  return (
    <section className="py-14">
      <Container>
        <Card className="bg-gradient-to-br from-white to-[#fef1e9] p-7">
          <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Free 5-minute Italian level test</p>
              <h3 className="mt-2 font-serif text-4xl">Get your level and a bonus speaking PDF</h3>
              <p className="mt-2 text-sm text-foreground/75">
                Complete the test and receive the PDF <strong>Top 50 Italian phrases for real life</strong> in your inbox.
              </p>
            </div>
            <form className="space-y-3" aria-label="Email signup for level test and PDF">
              <div>
                <label htmlFor="lead-name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-foreground/65">Name</label>
                <input id="lead-name" type="text" className="h-11 w-full rounded-xl border border-border bg-white px-3" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="lead-email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-foreground/65">Email</label>
                <input id="lead-email" type="email" required className="h-11 w-full rounded-xl border border-border bg-white px-3" placeholder="you@example.com" />
              </div>
              <Button className="w-full">Send my test and bonus PDF</Button>
              <p className="text-xs text-foreground/60">By joining, you agree to receive learning emails. You can unsubscribe anytime.</p>
            </form>
          </div>
        </Card>
      </Container>
    </section>
  );
}
