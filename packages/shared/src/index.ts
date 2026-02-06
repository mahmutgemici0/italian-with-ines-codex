export type UserRole = "user" | "admin";

export type ProductType = "digital" | "course" | "booking" | "membership" | "merch";

export interface CourseSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  price: number;
  thumbnailUrl?: string;
}

export interface DigitalProductSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
}
