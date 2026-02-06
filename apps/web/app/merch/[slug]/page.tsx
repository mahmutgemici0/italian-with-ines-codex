import { CheckoutButton } from "@/components/checkout-button";
import { Card, Container } from "@/components/ui";

export default function MerchDetailPage({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <section className="py-16">
        <Card className="space-y-4">
          <h1 className="font-serif text-4xl">Merch: {params.slug.replaceAll("-", " ")}</h1>
          <p className="text-sm text-foreground/75">Checkout via Stripe product pricing with shipping details captured in Checkout.</p>
          <CheckoutButton label="Buy Merch" mode="payment" priceId="price_merch_generic" productType="merch" productId={params.slug} />
        </Card>
      </section>
    </Container>
  );
}
