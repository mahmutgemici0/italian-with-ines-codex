import { Button, Container } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Italian for real life
            </p>
            <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
              Build confident Italian that you can use the same day.
            </h1>
            <p className="max-w-xl text-base text-foreground/80">
              For English-speaking learners who want clear progress. Learn through structured lessons, practical speaking drills, and pronunciation coaching that helps you sound natural.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/courses">Explore Italian Courses</Button>
              <Button href="/start-here" variant="ghost">Take the free Italian level test</Button>
            </div>
            <p className="text-sm font-medium text-foreground/75">Trusted by 25,000+ learners worldwide</p>
          </div>
          <aside className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl">Start with one strong win</h2>
            <p className="mt-2 text-sm text-foreground/75">
              Take the free level test, get your score, and receive a focused next-step plan with one practical PDF.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>1. Five-minute assessment for A1 to B1 learners</li>
              <li>2. Instant level guidance with a study route</li>
              <li>3. Bonus PDF: Top 50 Italian phrases for real life</li>
            </ul>
            <Button href="/start-here" className="mt-5">Start the free test</Button>
            <div className="image-slot mt-5 flex h-40 items-center justify-center text-center">
              <p className="px-6 text-xs font-semibold uppercase tracking-wide text-foreground/55">
                Reserved image spot
                <br />
                Add a hero photo or short classroom clip thumbnail
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
