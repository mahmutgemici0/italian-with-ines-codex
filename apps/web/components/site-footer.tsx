import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-white/60 py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg">Italian with Ines</h3>
            <p className="mt-2 text-sm text-foreground/70">Courses, downloads, coaching, and a live weekly classroom.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/shop">Digital Shop</a></li>
              <li><a href="/membership">Membership</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/press-kit">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="/legal/privacy">Privacy Policy</a></li>
              <li><a href="/legal/terms">Terms</a></li>
              <li><a href="/legal/refund">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
