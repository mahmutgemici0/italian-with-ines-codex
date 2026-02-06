export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {gaId ? <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} /> : null}
      {pixelId ? <script dangerouslySetInnerHTML={{ __html: `window.__META_PIXEL_ID='${pixelId}'` }} /> : null}
    </>
  );
}
