import { CheckoutButton } from "@/components/checkout-button";
import { Button, Card, Container, SectionTitle } from "@/components/ui";

const modules = [
  "Module 1: Italian sound system and survival phrases",
  "Module 2: Core sentence patterns and daily verbs",
  "Module 3: Travel situations and service interactions",
  "Module 4: Listening practice for natural speed",
  "Module 5: Guided speaking drills and feedback",
];

const includes = [
  "Self-paced video lessons and guided practice sheets",
  "Downloadable phrase packs and review checklists",
  "Class recordings for key speaking demonstrations",
  "Progress tracking in your student dashboard",
  "Support prompts for weekly consistency",
];

const faqs = [
  ["How long do I keep access?", "Access terms are shown at checkout and in the student dashboard after purchase."],
  ["Is this beginner friendly?", "Yes. The core structure is designed for English-speaking A1 learners."],
  ["Do I get speaking practice?", "Yes. Each module includes guided speaking tasks with practical prompts."],
  ["Where is the refund policy?", "You can review it anytime on the refund policy page before payment."],
];

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const isA2 = params.slug.includes("a2");
  const isPronunciation = params.slug.includes("pronunciation");

  const title = isPronunciation
    ? "Italian Pronunciation Mini-Course"
    : isA2
      ? "Italian A2 Next Step"
      : "Italian A1 Starter";

  const level = isPronunciation ? "A1-A2" : isA2 ? "A2" : "A1";

  const outcome = isPronunciation
    ? "You will speak with clearer rhythm, stronger stress control, and more natural flow."
    : isA2
      ? "You will handle longer conversations, improve listening speed, and respond with confidence."
      : "You will build a clear base and speak Italian in everyday situations with confidence.";

  return (
    <Container>
      <section className="py-14">
        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <p className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">Level {level}</p>
            <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
            <p className="max-w-2xl text-base text-foreground/80">{outcome}</p>
            <div className="flex flex-wrap gap-3">
              <CheckoutButton label="Enroll now" mode="payment" priceId="price_course_a1" productType="course" productId={params.slug} />
              <Button href="/legal/refund" variant="ghost">Read refund policy</Button>
            </div>
          </div>
          <Card className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">This is for you if</p>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>You want clear structure, not random lessons.</li>
              <li>You want to use Italian in real moments, not only in exercises.</li>
              <li>You want speaking confidence that grows every week.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <SectionTitle title="What you will learn" subtitle="Practical outcomes with direct daily relevance." />
        <div className="grid gap-3 md:grid-cols-2">
          <Card><p className="text-sm">Build useful sentence patterns for requests, plans, and everyday interactions.</p></Card>
          <Card><p className="text-sm">Understand and use high-frequency verbs with confidence.</p></Card>
          <Card><p className="text-sm">Handle common travel and social situations without freezing.</p></Card>
          <Card><p className="text-sm">Improve listening and speaking rhythm. Example: <strong>Mi fa piacere</strong> means <strong>Nice to meet you</strong>.</p></Card>
        </div>
      </section>

      <section className="py-8">
        <SectionTitle title="Curriculum preview" subtitle="A focused module path." />
        <div className="space-y-3">
          {modules.map((module) => (
            <Card key={module}><p className="text-sm font-medium">{module}</p></Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <SectionTitle title="What is included" />
        <div className="grid gap-3 md:grid-cols-2">
          {includes.map((item) => (
            <Card key={item}><p className="text-sm text-foreground/80">{item}</p></Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <SectionTitle title="Student feedback" />
        <div className="grid gap-3 md:grid-cols-3">
          <Card><p className="text-sm">“The structure removed confusion and gave me weekly momentum.”</p><p className="mt-2 text-xs text-foreground/60">Ava · United States</p></Card>
          <Card><p className="text-sm">“I can now keep conversations going without panic.”</p><p className="mt-2 text-xs text-foreground/60">Oliver · United Kingdom</p></Card>
          <Card><p className="text-sm">“Pronunciation practice helped me sound more natural quickly.”</p><p className="mt-2 text-xs text-foreground/60">Chloe · Canada</p></Card>
        </div>
      </section>

      <section className="py-8">
        <Card className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Pricing</p>
          <p className="text-4xl font-semibold">€49</p>
          <p className="text-sm text-foreground/75">Secure payment via Stripe. Please review terms before purchase.</p>
          <div className="flex flex-wrap gap-3">
            <CheckoutButton label="Start this course" mode="payment" priceId="price_course_a1" productType="course" productId={params.slug} />
            <Button href="/legal/refund" variant="ghost">Guarantee and refund policy</Button>
          </div>
        </Card>
      </section>

      <section className="py-8">
        <SectionTitle title="Course FAQ" />
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <Card key={q}>
              <h3 className="text-base font-semibold">{q}</h3>
              <p className="mt-2 text-sm text-foreground/75">{a}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-16 pt-6">
        <Card className="space-y-3 text-center">
          <h2 className="font-serif text-3xl">Ready to speak with more confidence?</h2>
          <p className="text-sm text-foreground/75">Join the course and begin with your first practical lesson today.</p>
          <div className="flex justify-center">
            <CheckoutButton label="Enroll now" mode="payment" priceId="price_course_a1" productType="course" productId={params.slug} />
          </div>
        </Card>
      </section>
    </Container>
  );
}
