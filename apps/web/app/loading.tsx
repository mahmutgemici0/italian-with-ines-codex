export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="h-8 w-48 animate-pulse rounded bg-white/70" />
      <div className="mt-4 h-4 w-96 animate-pulse rounded bg-white/70" />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((n) => <div key={n} className="h-40 animate-pulse rounded-3xl bg-white/70" />)}
      </div>
    </div>
  );
}
