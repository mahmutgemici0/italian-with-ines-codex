import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsScripts } from "@/components/analytics";

export const metadata: Metadata = {
  title: "Italian with Ines",
  description: "Learn Italian with courses, downloads, live classes, and 1:1 coaching.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Italian with Ines",
    description: "Courses, resources, and live Italian learning experiences.",
    url: "/",
    siteName: "Italian with Ines",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
