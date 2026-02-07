import { Card, Container, SectionTitle } from "@/components/ui";

const testimonials = [
  { quote: "I stopped translating in my head and started speaking faster.", name: "Megan", country: "United States" },
  { quote: "The lessons are clear, focused, and practical for travel.", name: "Luke", country: "Australia" },
  { quote: "Pronunciation feedback changed how confident I feel.", name: "Sarah", country: "United Kingdom" },
  { quote: "I finally understand spoken Italian in normal speed audio.", name: "Daniel", country: "Canada" },
  { quote: "I can speak during class without freezing now.", name: "Emma", country: "Ireland" },
  { quote: "The structure keeps me consistent every week.", name: "Noah", country: "New Zealand" },
  { quote: "I used the travel module in Rome and it worked.", name: "Grace", country: "United States" },
  { quote: "The phrases are natural and easy to reuse.", name: "Ben", country: "South Africa" },
];

export function Testimonials() {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle title="Student results" subtitle="Short feedback from learners around the world." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <Card key={`${item.name}-${item.country}`} className="flex h-full flex-col justify-between">
              <p className="text-sm text-foreground/85">“{item.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground/60">{item.name} · {item.country}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
