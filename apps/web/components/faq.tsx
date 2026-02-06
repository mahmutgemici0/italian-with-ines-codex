import { Card, SectionTitle } from "@/components/ui";

const items = [
  ["Are courses beginner-friendly?", "Yes, there are A1 and A2 pathways with clear lesson progression."],
  ["How do downloads work?", "You receive expiring, limited-use secure links in your dashboard and email."],
  ["What happens if I cancel membership?", "Classroom access remains until period end, then member-only pages lock."],
];

export function FAQSection() {
  return (
    <section className="py-16">
      <SectionTitle title="FAQ" subtitle="Clear answers before checkout." />
      <div className="space-y-3">
        {items.map(([q, a]) => (
          <Card key={q}>
            <h4 className="text-base font-semibold">{q}</h4>
            <p className="mt-1 text-sm text-foreground/75">{a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
