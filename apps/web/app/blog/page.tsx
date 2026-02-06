import { Card, Container, SectionTitle } from "@/components/ui";

const posts = [
  { slug: "how-to-sound-natural-in-italian", title: "How to Sound More Natural in Italian", excerpt: "Use chunks and rhythm, not isolated words." },
  { slug: "best-way-to-learn-italian-a1", title: "Best A1 Italian Study Plan", excerpt: "A practical week-by-week beginner plan." },
];

export default function BlogPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Blog" subtitle="SEO-ready content hub for organic growth." />
        <div className="space-y-3">
          {posts.map((p) => (
            <Card key={p.slug}>
              <a href={`/blog/${p.slug}`} className="text-lg font-semibold hover:underline">{p.title}</a>
              <p className="mt-1 text-sm text-foreground/70">{p.excerpt}</p>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
