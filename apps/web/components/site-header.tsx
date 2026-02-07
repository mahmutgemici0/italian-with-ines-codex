import { Button, Container } from "@/components/ui";

const nav = [
  { href: "/courses", label: "Courses" },
  { href: "/shop", label: "Digital Shop" },
  { href: "/merch", label: "Merch" },
  { href: "/bookings", label: "1:1 Lessons" },
  { href: "/membership", label: "Live Classroom" },
  { href: "/resources", label: "Free Resources" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="/" className="font-serif text-xl font-semibold">Italian with Ines</a>
          <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-foreground/85 hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href="/login" variant="ghost">Log in</Button>
            <Button href="/signup" variant="ghost">Sign up</Button>
            <Button href="/start-here" className="hidden sm:inline-flex">Free level test</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
