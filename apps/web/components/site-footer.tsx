import { Button, Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-white/60 py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <h3 className="font-serif text-lg">Italian with Ines</h3>
            <p className="text-sm text-foreground/70">
              Courses, digital tools, live classes, and coaching for English-speaking learners.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row" aria-label="Footer newsletter form">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" className="h-10 flex-1 rounded-full border border-border bg-white px-3 text-sm" placeholder="Email for weekly tips" />
              <Button>Join newsletter</Button>
            </form>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Learn</h4>
            <ul className="mt-2 space-y-1 text-sm text-foreground/75">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/membership">Live Classroom</a></li>
              <li><a href="/bookings">1:1 Lessons</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm text-foreground/75">
              <li><a href="/start-here">Free level test</a></li>
              <li><a href="/resources">Free library</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal and social</h4>
            <ul className="mt-2 space-y-1 text-sm text-foreground/75">
              <li><a href="/legal/privacy">Privacy Policy</a></li>
              <li><a href="/legal/terms">Terms</a></li>
              <li><a href="/legal/refund">Refund Policy</a></li>
              <li><a href="https://www.instagram.com/ines.tutoring/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram (1.5M)</a></li>
              <li><a href="https://www.tiktok.com/@ines.tutoring?lang=en" target="_blank" rel="noreferrer" aria-label="TikTok">TikTok (1.1M)</a></li>
              <li><a href="https://www.youtube.com/@LearnItalianwithInes" target="_blank" rel="noreferrer" aria-label="YouTube">YouTube (211K)</a></li>
              <li><a href="https://www.facebook.com/search/top?q=learn%20italian%20with%20ines" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook (2.6M)</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
