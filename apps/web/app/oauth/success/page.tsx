"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/ui";
import { auth } from "@/lib/auth";

export default function OAuthSuccessPage() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    const role = params.get("role") || "user";
    if (!token) {
      router.replace("/login?oauth=missing_token");
      return;
    }
    auth.setToken(token);
    auth.setRole(role);
    router.replace(role === "admin" ? "/admin" : "/dashboard");
  }, [params, router]);

  return (
    <Container>
      <section className="py-20">
        <h1 className="font-serif text-3xl">Signing you in...</h1>
      </section>
    </Container>
  );
}
