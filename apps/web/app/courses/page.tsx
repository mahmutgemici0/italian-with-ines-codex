import { ProductCard } from "@/components/product-card";
import { Container, SectionTitle } from "@/components/ui";
import { api } from "@/lib/api";

export default async function CoursesPage() {
  const courses = await api.courses().catch(() => []);
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Courses" subtitle="Structured paths from A1 to B1." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.length ? courses.map((c: any) => (
            <ProductCard key={c.id} title={c.title} description={c.description} price={c.price} href={`/courses/${c.slug}`} />
          )) : <p className="text-sm text-foreground/70">No courses yet.</p>}
        </div>
      </section>
    </Container>
  );
}
