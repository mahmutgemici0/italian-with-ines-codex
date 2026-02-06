import { CheckoutButton } from "@/components/checkout-button";
import { Card, Container } from "@/components/ui";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <section className="py-16">
        <Card className="space-y-4">
          <h1 className="font-serif text-4xl">Course: {params.slug.replaceAll("-", " ")}</h1>
          <p className="text-sm text-foreground/75">Detail page scaffold with curriculum, outcomes, testimonials, and Stripe checkout CTA.</p>
          <CheckoutButton label="Buy Course" mode="payment" priceId="price_course_a1" productType="course" productId={params.slug} />
        </Card>
      </section>
    </Container>
  );
}
