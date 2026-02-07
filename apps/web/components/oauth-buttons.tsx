"use client";

import { Button } from "@/components/ui";

const API = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export function OAuthButtons() {
  return (
    <div className="space-y-2">
      <Button className="w-full" variant="ghost" href={`${API}/auth/oauth/google/start`}>
        Continue with Google
      </Button>
      <Button className="w-full" variant="ghost" href={`${API}/auth/oauth/apple/start`}>
        Continue with Apple
      </Button>
      <p className="text-xs text-foreground/60">Google sign-in is ready once credentials are configured. Apple sign-in route is prepared for provider setup.</p>
    </div>
  );
}
