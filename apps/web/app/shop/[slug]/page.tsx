import { CheckoutButton } from "@/components/checkout-button";
import { Card, Container } from "@/components/ui";

export default function ShopDetailPage({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <section className="py-16">
        <Card className="space-y-4">
          <h1 className="font-serif text-4xl">Digital Product: {params.slug.replaceAll("-", " ")}</h1>
          <p className="text-sm text-foreground/75">Uses secure expiring links and max download counts post-purchase.</p>
          <CheckoutButton label="Buy Download" mode="payment" priceId="price_digital_50phrases" productType="digital" productId={params.slug} />
        </Card>
      </section>
    </Container>
  );
}
