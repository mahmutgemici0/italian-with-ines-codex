import { FAQSection } from "@/components/faq";
import { NewsletterBlock } from "@/components/newsletter";
import { ProductCard } from "@/components/product-card";
import { Button, Container, SectionTitle } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">Italian professor casual</p>
              <h1 className="font-serif text-4xl leading-tight sm:text-6xl">Speak Italian with confidence, not memorization.</h1>
              <p className="max-w-xl text-base text-foreground/75">
                Creator-first language training by Ines: self-paced courses, premium PDFs, weekly live classroom, and 1:1 coaching.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/courses">Explore Courses</Button>
                <Button href="/start-here" variant="ghost">Get Free Starter Pack</Button>
              </div>
              <div className="grid max-w-md grid-cols-3 gap-4 text-sm">
                <div><p className="text-2xl font-semibold">12k+</p><p className="text-foreground/65">Students</p></div>
                <div><p className="text-2xl font-semibold">4.9/5</p><p className="text-foreground/65">Average Rating</p></div>
                <div><p className="text-2xl font-semibold">150+</p><p className="text-foreground/65">Lessons</p></div>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h2 className="font-serif text-3xl">Start Here Funnel</h2>
              <p className="mt-2 text-sm text-foreground/75">Choose your path with a 60-second level quiz and unlock a personalized free PDF.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>1. Take quick level quiz</li>
                <li>2. Get tailored study roadmap</li>
                <li>3. Receive lead magnet + course recommendation</li>
              </ul>
              <Button href="/start-here" className="mt-5">Start the Quiz</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <SectionTitle title="Top Sellers" subtitle="Featured course, digital kit, and membership entry points." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard title="Italian A1 Starter Course" description="8-week beginner roadmap." price={4900} href="/courses/italian-a1-starter" />
            <ProductCard title="50 Essential Phrases PDF" description="Travel + daily conversation toolkit." price={1200} href="/shop/50-essential-phrases" />
            <ProductCard title="Weekly Live Classroom" description="Group accountability + speaking feedback." price={2900} href="/membership" />
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <NewsletterBlock />
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <SectionTitle title="Testimonials" subtitle="Social proof blocks ready for creator quotes or imported reviews." />
          <div className="grid gap-4 md:grid-cols-3">
            {["I finally speak without freezing.", "The live classroom keeps me consistent.", "Downloads are practical and beautiful."].map((t) => (
              <blockquote key={t} className="rounded-3xl border border-border bg-white/90 p-5 text-sm">“{t}”</blockquote>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <FAQSection />
      </Container>
    </>
  );
}
