import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/courses",
    "/shop",
    "/merch",
    "/bookings",
    "/membership",
    "/resources",
    "/blog",
    "/about",
    "/contact",
    "/start-here",
  ];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
