import { Card, Container, SectionTitle } from "@/components/ui";

export default function TermsPage() {
  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="Terms and Conditions" subtitle="Rules for using the site, services, and digital products." />
        <Card className="space-y-2 text-sm text-foreground/75">
          <p><strong>Use of content:</strong> course materials and downloads are licensed for personal use only. Redistribution and resale are prohibited.</p>
          <p><strong>Accounts:</strong> users are responsible for maintaining account security and keeping login credentials confidential.</p>
          <p><strong>Purchases:</strong> product pricing and availability may change. Access terms are shown before checkout.</p>
          <p><strong>Memberships:</strong> recurring subscriptions renew automatically unless canceled before renewal date.</p>
          <p><strong>Bookings:</strong> scheduling, cancellation windows, and rescheduling limits apply to 1:1 services.</p>
          <p><strong>Intellectual property:</strong> all lessons, branding, and site content remain property of Italian with Ines unless otherwise stated.</p>
          <p><strong>Liability:</strong> educational content is provided for learning purposes and does not guarantee specific outcomes.</p>
        </Card>
      </section>
    </Container>
  );
}
