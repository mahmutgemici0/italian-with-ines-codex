import { Container } from "@/components/ui";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <article className="prose prose-slate max-w-3xl py-16">
        <h1 className="font-serif text-4xl">{params.slug.replaceAll("-", " ")}</h1>
        <p>Markdown blog rendering placeholder. Wire to `/admin/content` CRUD + published posts API.</p>
      </article>
    </Container>
  );
}
