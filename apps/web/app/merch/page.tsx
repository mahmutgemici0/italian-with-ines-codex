import { ProductCard } from "@/components/product-card";
import { Container, SectionTitle } from "@/components/ui";

const merch = [
  { slug: "ciao-club-tee", title: "Ciao Club Tee", description: "Soft premium cotton t-shirt.", price: 3200 },
  { slug: "espresso-grammar-hoodie", title: "Espresso Grammar Hoodie", description: "Warm unisex hoodie.", price: 5600 },
];

export default function MerchPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Merch" subtitle="Manual Stripe merch today, Printful/Printify adapter-ready." />
        <div className="grid gap-4 sm:grid-cols-2">
          {merch.map((m) => <ProductCard key={m.slug} title={m.title} description={m.description} price={m.price} href={`/merch/${m.slug}`} />)}
        </div>
      </section>
    </Container>
  );
}
