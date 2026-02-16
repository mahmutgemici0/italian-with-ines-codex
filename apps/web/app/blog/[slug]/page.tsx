import { Card, Container } from "@/components/ui";

const posts: Record<string, { title: string; intro: string; bullets: string[]; takeaway: string }> = {
  "how-to-sound-natural-in-italian": {
    title: "How to Sound More Natural in Italian",
    intro: "Sounding natural is less about difficult grammar and more about rhythm, useful chunks, and consistent speaking practice.",
    bullets: [
      "Use phrase chunks in context instead of isolated single words.",
      "Practice sentence rhythm out loud with short recordings.",
      "Repeat high-frequency patterns until they feel automatic.",
      "Listen to natural pace daily, even for five focused minutes.",
    ],
    takeaway: "Small daily speaking drills build natural flow faster than occasional long sessions.",
  },
  "best-way-to-learn-italian-a1": {
    title: "Best A1 Italian Study Plan",
    intro: "A1 progress improves when learning is structured and practical.",
    bullets: [
      "Week 1-2: greetings, introductions, and daily essentials.",
      "Week 3-4: core verbs and sentence structure.",
      "Week 5-6: listening to normal-speed beginner dialogues.",
      "Week 7-8: guided speaking and travel situations.",
    ],
    takeaway: "Focus on output every week so your confidence keeps pace with your grammar knowledge.",
  },
};

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const entry = posts[params.slug] ?? {
    title: params.slug.replaceAll("-", " "),
    intro: "This article is being prepared. Explore the resource library for practical materials.",
    bullets: ["Check the latest free resources.", "Take the level test to get course recommendations."],
    takeaway: "Consistency is the most important learning advantage.",
  };

  return (
    <Container>
      <article className="mx-auto max-w-3xl py-16">
        <h1 className="text-4xl font-semibold">{entry.title}</h1>
        <p className="mt-4 text-base text-foreground/80">{entry.intro}</p>
        <Card className="mt-6">
          <h2 className="text-xl font-semibold">Key points</h2>
          <ul className="mt-3 space-y-2 text-sm text-foreground/75">
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Card>
        <Card className="mt-4">
          <h3 className="text-lg font-semibold">Takeaway</h3>
          <p className="mt-2 text-sm text-foreground/75">{entry.takeaway}</p>
        </Card>
      </article>
    </Container>
  );
}
