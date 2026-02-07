import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-primary text-white shadow-sm hover:translate-y-[-1px] hover:opacity-95"
      : "border border-border bg-white/85 text-foreground hover:bg-muted";
  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(base, styles, className)} {...props}>
      {children}
    </button>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 space-y-2">
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm text-foreground/75 sm:text-[1rem]">{subtitle}</p> : null}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl border border-border bg-white/92 p-6 shadow-[var(--card-shadow)]", className)}>{children}</div>;
}
