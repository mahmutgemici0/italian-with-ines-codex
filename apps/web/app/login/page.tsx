"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { OAuthButtons } from "@/components/oauth-buttons";
import { Button, Card, Container, SectionTitle } from "@/components/ui";
import { auth } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) return setError("Invalid credentials");
    const data = await res.json();
    auth.setToken(data.access_token);

    const me = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${data.access_token}` },
    }).then((r) => r.json());
    auth.setRole(me.role);
    router.push("/dashboard");
  }

  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Login" subtitle="Use email/password or continue with Google and Apple." />
        <Card className="mx-auto max-w-md">
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="h-11 w-full rounded-xl border border-border px-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="h-11 w-full rounded-xl border border-border px-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {params.get("oauth") ? <p className="text-xs text-foreground/60">OAuth status: {params.get("oauth")}</p> : null}
            <Button className="w-full">Login</Button>
          </form>
          <div className="my-4 h-px bg-border" />
          <OAuthButtons />
        </Card>
      </section>
    </Container>
  );
}
