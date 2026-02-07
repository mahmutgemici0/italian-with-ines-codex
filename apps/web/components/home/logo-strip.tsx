import { Container } from "@/components/ui";

const logos = ["Travel Media", "Creator Weekly", "Language Journal", "Global Learners", "Study Podcast"];

export function LogoStrip() {
  return (
    <section aria-label="As seen in" className="py-8">
      <Container>
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">As seen in</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo} className="rounded-2xl border border-border bg-white/70 px-4 py-3 text-center text-sm font-medium text-foreground/70">
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
