import { ProductCard } from "@/components/product-card";
import { Container, SectionTitle } from "@/components/ui";
import { api } from "@/lib/api";

export default async function ShopPage() {
  const products = await api.digitalProducts().catch(() => []);
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Digital Shop" subtitle="Ebooks, worksheets, and practical downloads." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.length ? products.map((p: any) => (
            <ProductCard key={p.id} title={p.title} description={p.description} price={p.price} href={`/shop/${p.slug}`} />
          )) : <p className="text-sm text-foreground/70">No digital products yet.</p>}
        </div>
      </section>
    </Container>
  );
}
