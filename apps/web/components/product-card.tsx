import { Card, Button } from "@/components/ui";

export function ProductCard({ title, description, price, href }: { title: string; description: string; price: number; href: string }) {
  return (
    <Card className="flex h-full flex-col justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-foreground/75">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">€{(price / 100).toFixed(2)}</span>
        <Button href={href}>View</Button>
      </div>
    </Card>
  );
}
