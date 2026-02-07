"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { auth } from "@/lib/auth";

export function CheckoutButton({
  label,
  mode,
  priceId,
  productType,
  productId,
  bookingId,
}: {
  label: string;
  mode: "payment" | "subscription";
  priceId: string;
  productType: string;
  productId: string;
  bookingId?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [error, setError] = useState("");

  async function doCheckout(email?: string, name?: string) {
    setLoading(true);
    setError("");
    try {
      const token = auth.getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          mode,
          price_id: priceId,
          product_type: productType,
          product_id: productId,
          booking_id: bookingId,
          email,
          name,
        }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const data = await res.json();
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      setError("Unable to start checkout. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function onCheckout() {
    const token = auth.getToken();
    if (!token) {
      setShowGuestModal(true);
      return;
    }
    await doCheckout();
  }

  async function onGuestSubmit() {
    if (!guestEmail.trim()) {
      setError("Email is required for guest checkout.");
      return;
    }
    setShowGuestModal(false);
    await doCheckout(guestEmail.trim(), guestName.trim());
  }

  return (
    <>
      <Button className="disabled:opacity-60" onClick={onCheckout}>
        {loading ? "Loading..." : label}
      </Button>
      {showGuestModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
          <div className="w-full max-w-md rounded-3xl border border-border bg-white p-6 shadow-2xl">
            <h3 className="font-serif text-2xl">Checkout as guest</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Enter your email to receive receipt and access details. Apple Pay is available in Stripe Checkout where supported.
            </p>
            <div className="mt-4 space-y-3">
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="h-11 w-full rounded-xl border border-border px-3"
                placeholder="Name (optional)"
              />
              <input
                type="email"
                required
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="h-11 w-full rounded-xl border border-border px-3"
                placeholder="Email"
              />
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <div className="flex gap-2">
                <Button className="w-full" onClick={onGuestSubmit}>
                  Continue to secure payment
                </Button>
                <Button className="w-full" variant="ghost" onClick={() => setShowGuestModal(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
