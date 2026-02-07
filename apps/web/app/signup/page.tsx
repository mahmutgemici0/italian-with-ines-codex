"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Container, SectionTitle } from "@/components/ui";
import { auth } from "@/lib/auth";
import { OAuthButtons } from "@/components/oauth-buttons";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (!res.ok) return setError("Unable to register");
    const data = await res.json();
    auth.setToken(data.access_token);
    router.push("/dashboard");
  }

  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Create Account" subtitle="Sign up with email, Google, or Apple." />
        <Card className="mx-auto max-w-md">
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="h-11 w-full rounded-xl border border-border px-3" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="h-11 w-full rounded-xl border border-border px-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="h-11 w-full rounded-xl border border-border px-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <Button className="w-full">Sign Up</Button>
          </form>
          <div className="my-4 h-px bg-border" />
          <OAuthButtons />
        </Card>
      </section>
    </Container>
  );
}
