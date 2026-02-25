import { FAQSection } from "@/components/faq";
import { Button, Container } from "@/components/ui";

const features = [
  {
    title: "Structured Courses",
    description: "Step-by-step programs designed to get you speaking confidently without overwhelm.",
  },
  {
    title: "1:1 Private Sessions",
    description: "Personalized lessons tailored to your goals, schedule, and current level.",
  },
  {
    title: "Native Support",
    description: "Learn authentic expressions, pronunciation, and rhythm used by native speakers.",
  },
  {
    title: "Cultural Immersion",
    description: "Practice with real-life dialogues and context from everyday Italian life.",
  },
  {
    title: "Flexible Schedules",
    description: "Learn on your own rhythm with self-paced materials and practical routines.",
  },
  {
    title: "Certified Results",
    description: "Build measurable progress with guided checkpoints and speaking milestones.",
  },
];

const courses = [
  { title: "Italian for Beginners — La Dolce Vita", price: "$89" },
  { title: "Conversational Italian — Parla Con Fiducia", price: "$129" },
  { title: "Advanced Italian — Maestria", price: "$199" },
];

const testimonials = [
  {
    quote:
      "Ines made learning feel fun and practical. I can finally hold simple conversations when I travel.",
    name: "Sara M.",
  },
  {
    quote:
      "Her lessons are clear and beautifully structured. I stayed consistent for the first time in years.",
    name: "Marco T.",
  },
  {
    quote:
      "I joined to improve pronunciation and ended up improving everything: grammar, confidence, and flow.",
    name: "Elena R.",
  },
];

const posts = [
  "10 Italian Phrases You'll Use Every Day",
  "Understanding Italian Hand Gestures",
  "The Secret to Sounding Italian: Intonation",
];

export default function HomePage() {
  return (
    <>
      <section className="pb-12 pt-10 sm:pt-14">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="inline-block rounded-full border border-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/65">
              Italian with Ines
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-7xl">
              Learn Italian <span className="text-primary">with Ines</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-foreground/75 sm:text-base">
              Structured courses, private sessions, and weekly practice designed to help you speak Italian naturally
              and confidently.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/courses">Explore Courses</Button>
              <Button href="/bookings" variant="ghost">
                Book a Session
              </Button>
            </div>
            <div className="flex items-center justify-center gap-3 text-xs text-foreground/60">
              <div className="flex -space-x-3">
                {["A", "L", "M", "S"].map((initial) => (
                  <span
                    key={initial}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-accent/20 text-[10px] font-semibold"
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <p>Trusted by 2,000+ students worldwide</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">Why students choose this method</p>
            <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">Everything you need to speak Italian fluently</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-3xl border border-border bg-white/90 p-5 text-left">
                  <h3 className="font-serif text-xl">{feature.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">Courses</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl">Find your perfect course</h2>
            <p className="mt-2 max-w-2xl text-sm text-foreground/70 sm:text-base">Choose the program that matches your level and goals, from foundations to advanced fluency.</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {courses.map((course, index) => (
                <article key={course.title} className="overflow-hidden rounded-3xl border border-border bg-white">
                  <div className={`h-36 ${index === 0 ? "bg-sky-200" : index === 1 ? "bg-orange-200" : "bg-emerald-200"}`} />
                  <div className="space-y-3 p-4">
                    <h3 className="font-serif text-xl leading-tight">{course.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/60">Lifetime access</span>
                      <span className="font-semibold">{course.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-6 rounded-[2rem] border border-border bg-white p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="h-72 rounded-3xl bg-[linear-gradient(135deg,#c9d7f8,#f6c6af)]" />
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">Ciao! I'm Ines.</p>
              <h2 className="font-serif text-4xl leading-tight">Your Italian coach for real-world fluency</h2>
              <p className="text-sm text-foreground/70 sm:text-base">
                I help learners go from textbook Italian to confident, natural communication through simple routines and
                practical conversation training.
              </p>
              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-background p-4 text-center">
                <div>
                  <p className="text-2xl font-semibold">2,000+</p>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Students</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">40+</p>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Countries</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">10+</p>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Years</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl sm:text-5xl">Loved by students worldwide</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-3xl border border-border bg-white/90 p-5 text-sm text-foreground/75">
                  <p>“{testimonial.quote}”</p>
                  <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground/55">{testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl sm:text-5xl">Tips, culture & language insights</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {posts.map((post, index) => (
                <article key={post} className="overflow-hidden rounded-3xl border border-border bg-white">
                  <div className={`h-32 ${index === 0 ? "bg-teal-200" : index === 1 ? "bg-amber-200" : "bg-zinc-300"}`} />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold leading-snug">{post}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-foreground px-6 py-10 text-center text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">Get weekly Italian tips in your inbox</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Simple, practical lessons every week</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base">Join our newsletter for speaking prompts, mini vocabulary packs, and cultural notes to keep your Italian fresh.</p>
            <Button href="/start-here" className="mt-6 bg-primary px-8">
              Subscribe
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-white px-6 py-9 text-center sm:px-10">
            <h2 className="font-serif text-3xl sm:text-5xl">
              Ready to start your <span className="text-primary">Italian journey</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/70 sm:text-base">Choose a course, book a private lesson, or begin with our free level quiz and personalized study path.</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Button href="/courses">Browse Courses</Button>
              <Button href="/start-here" variant="ghost">
                Start Free Quiz
              </Button>
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
