import { Button, Card, Container, SectionTitle } from "@/components/ui";

const googleBookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2du-KuW2Kppr-TIcJYDkRicq1BYWmWg8vGKQToZnzULVm1nD2tFFNkVKXsGaKFLbpnLSVr6kBN";

export default function BookingsPage() {
  return (
    <Container>
      <section className="py-16 space-y-6">
        <SectionTitle
          title="Book a 1:1 Italian lesson"
          subtitle="Use the integrated Google Appointments page to select your time. Pay securely with Stripe Checkout, including Apple Pay on supported devices."
        />
        <Card className="space-y-4">
          <p className="text-sm text-foreground/80">
            Choose a time in Google Appointments, then complete payment through Stripe. You do not need to create a manual account before purchase.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={googleBookingUrl}>Open Google booking page</Button>
            <Button href="/login" variant="ghost">Optional account login</Button>
          </div>
          <div className="rounded-2xl border border-border bg-white p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/60">Embedded booking view</p>
            <iframe
              title="Google booking schedule"
              src={googleBookingUrl}
              className="h-[560px] w-full rounded-xl border border-border"
            />
            <p className="mt-2 text-xs text-foreground/60">If this embed is blocked in your browser, use the "Open Google booking page" button above.</p>
          </div>
        </Card>
      </section>
    </Container>
  );
}
