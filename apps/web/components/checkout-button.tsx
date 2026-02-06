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

  async function onCheckout() {
    setLoading(true);
    try {
      const token = auth.getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ mode, price_id: priceId, product_type: productType, product_id: productId, booking_id: bookingId }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const data = await res.json();
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Unable to start checkout. Please login first.");
    } finally {
      setLoading(false);
    }
  }

  return <Button className="disabled:opacity-60" onClick={onCheckout}>{loading ? "Loading..." : label}</Button>;
}
