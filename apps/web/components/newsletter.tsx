import { Button, Card } from "@/components/ui";

export function NewsletterBlock() {
  return (
    <Card className="bg-gradient-to-br from-white to-[#fef1e9]">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">Free weekly Italian tips</p>
        <h3 className="font-serif text-2xl">Get the "Italian Starter Pack" PDF</h3>
        <p className="text-sm text-foreground/75">Lead magnet flow ready: capture email, send gated resource link, and tag by level.</p>
        <form className="flex flex-col gap-2 sm:flex-row">
          <input
            className="h-11 flex-1 rounded-full border border-border bg-white px-4 text-sm outline-none"
            placeholder="you@example.com"
            type="email"
          />
          <Button>Get Free PDF</Button>
        </form>
      </div>
    </Card>
  );
}
