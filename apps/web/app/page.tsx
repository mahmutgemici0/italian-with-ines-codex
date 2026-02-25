import { FAQSection } from "@/components/faq";
import { Button, Container } from "@/components/ui";

const benefits = [
  {
    title: "Speak from day one",
    description: "Practical lessons built around real situations so you can start conversations quickly.",
  },
  {
    title: "Clear weekly structure",
    description: "Short guided sessions, homework prompts, and repetition tools that keep momentum high.",
  },
  {
    title: "Native-style confidence",
    description: "Pronunciation coaching and everyday phrases to help you sound natural in Italian.",
  },
];

const steps = [
  "Choose your level and learning goal.",
  "Follow structured video lessons and guided practice.",
  "Join live speaking sessions and get direct feedback.",
];

const testimonials = [
  "I finally stopped translating in my head and started speaking naturally.",
  "The lessons are beautiful, clear, and easy to stay consistent with.",
  "After a few weeks, I felt confident ordering and chatting in Italy.",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-7">
              <p className="inline-flex rounded-full border border-border bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
                Learn Italian with Ines
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                  Speak Italian fluently with a method that actually works.
                </h1>
                <p className="max-w-2xl text-base text-foreground/75 sm:text-lg">
                  Structured lessons, premium materials, and live guidance designed to help you build confidence fast.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/courses" className="px-6 py-3 text-base">
                  Start Learning
                </Button>
                <Button href="/start-here" variant="ghost" className="px-6 py-3 text-base">
                  Take Free Level Quiz
                </Button>
              </div>
              <div className="grid max-w-xl grid-cols-3 gap-4 rounded-3xl border border-border bg-white/85 p-5 text-center shadow-sm">
                <div>
                  <p className="text-3xl font-semibold">12K+</p>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">4.9/5</p>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">150+</p>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Lessons</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-white p-8 shadow-xl shadow-primary/10 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">How it works</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight">Your roadmap to speaking confidently</h2>
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm sm:text-base">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-foreground/80">{step}</span>
                  </li>
                ))}
              </ol>
              <Button href="/membership" className="mt-7 w-full justify-center py-3 text-base">
                Join Live Classroom
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-8 sm:pb-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-border bg-white/90 p-6">
                <h3 className="font-serif text-2xl">{benefit.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 sm:text-base">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-16">
        <Container>
          <div className="rounded-[2rem] border border-border bg-foreground px-6 py-10 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Student voices</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {testimonials.map((quote) => (
                <blockquote key={quote} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-relaxed sm:text-base">
                  “{quote}”
                </blockquote>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <FAQSection />
      </Container>
    </>
  );
}
