"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <h2 className="font-serif text-3xl">Something went wrong</h2>
      <button onClick={reset} className="mt-4 rounded-full border px-4 py-2 text-sm">Try again</button>
    </div>
  );
}
