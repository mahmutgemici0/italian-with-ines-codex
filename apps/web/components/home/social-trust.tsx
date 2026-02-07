import { Container } from "@/components/ui";

const channels = [
  {
    label: "Instagram",
    followers: "1.5M followers",
    href: "https://www.instagram.com/ines.tutoring/?hl=en",
  },
  {
    label: "TikTok",
    followers: "1.1M followers",
    href: "https://www.tiktok.com/@ines.tutoring?lang=en",
  },
  {
    label: "YouTube",
    followers: "211K followers",
    href: "https://www.youtube.com/@LearnItalianwithInes",
  },
  {
    label: "Facebook",
    followers: "2.6M followers",
    href: "https://www.facebook.com/search/top?q=learn%20italian%20with%20ines",
  },
];

export function SocialTrust() {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-3xl border border-border bg-white/85 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">Join the community</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-white px-4 py-3 hover:bg-muted"
              >
                <p className="text-sm font-semibold">{channel.label}</p>
                <p className="text-xs text-foreground/65">{channel.followers}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
