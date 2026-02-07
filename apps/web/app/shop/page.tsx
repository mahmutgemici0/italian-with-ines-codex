import { ProductCard } from "@/components/product-card";
import { Card, Container, SectionTitle } from "@/components/ui";
import { api } from "@/lib/api";

const placeholders = [
  {
    id: "placeholder-1",
    title: "Travel Dialogues Audio Pack",
    description: "Speak through airport, taxi, hotel, and restaurant scenarios.",
    price: 1900,
    slug: "travel-dialogues-audio-pack",
  },
  {
    id: "placeholder-2",
    title: "Italian Verb Maps Workbook",
    description: "Visual verb maps and exercises for faster recall.",
    price: 2400,
    slug: "italian-verb-maps-workbook",
  },
];

export default async function ShopPage() {
  const products = await api.digitalProducts().catch(() => []);
  const items = products.length ? products : placeholders;

  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Digital Shop" subtitle="Ebooks, worksheets, and practical downloads for real-world speaking." />
        <div className="mb-6 image-slot flex h-40 items-center justify-center text-center">
          <p className="px-5 text-xs font-semibold uppercase tracking-wide text-foreground/55">
            Reserved hero image slot for digital product flat-lay or mockups
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p: any) => (
            <ProductCard key={p.id} title={p.title} description={p.description} price={p.price} href={`/shop/${p.slug}`} />
          ))}
        </div>
        <Card className="mt-6">
          <p className="text-sm text-foreground/75">Secure Stripe Checkout with support for Apple Pay on supported devices and browsers.</p>
        </Card>
      </section>
    </Container>
  );
}
