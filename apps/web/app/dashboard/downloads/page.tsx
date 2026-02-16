"use client";

import { FormEvent, useState } from "react";
import { Button, Card, Container, SectionTitle } from "@/components/ui";

type DownloadResponse = {
  download_url: string;
  remaining_count: number;
  license: string;
};

export default function DownloadsPage() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState<DownloadResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setResult(null);
    if (!token.trim()) {
      setError("Please enter your download token.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/downloads/${token.trim()}`);
      if (!response.ok) {
        setError("Token is invalid, expired, or has no downloads remaining.");
        return;
      }
      const json = await response.json();
      setResult(json);
    } catch (err) {
      console.error(err);
      setError("Could not validate token. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <section className="py-16 space-y-4">
        <SectionTitle title="My Downloads" subtitle="Redeem your secure token to get your file link." />
        <Card>
          <form className="space-y-3" onSubmit={onSubmit}>
            <label htmlFor="download-token" className="text-sm font-semibold">Download token</label>
            <input
              id="download-token"
              className="h-11 w-full rounded-xl border border-border px-3"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="Paste token from email"
            />
            <Button>{loading ? "Checking..." : "Redeem token"}</Button>
          </form>
          {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
        </Card>

        {result ? (
          <Card className="space-y-3">
            <p className="text-sm text-foreground/80">Your secure file is ready:</p>
            <a href={result.download_url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary underline">
              Open download link
            </a>
            <p className="text-sm text-foreground/75">Remaining downloads: {result.remaining_count}</p>
            <p className="text-xs text-foreground/60">License: {result.license}</p>
          </Card>
        ) : null}
      </section>
    </Container>
  );
}
