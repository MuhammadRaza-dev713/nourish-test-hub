/**
 * Universal tracking helper.
 * Pushes events to window.dataLayer (GTM/GA4), fbq (Meta), ttq (TikTok),
 * snaptr (Snap), pintrk (Pinterest), and lintrk (LinkedIn) when present.
 */
export type TrackEvent =
  | "page_view"
  | "view_content"
  | "lead"
  | "quiz_started"
  | "quiz_completed"
  | "search"
  | "add_to_cart"
  | "remove_from_cart"
  | "view_cart"
  | "initiate_checkout"
  | "add_shipping_info"
  | "add_payment_info"
  | "purchase"
  | "button_click"
  | "scroll"
  | string;

export function track(event: TrackEvent, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as any;
  const payload = { event, ...data, ts: Date.now() };
  (w.dataLayer = w.dataLayer || []).push(payload);
  try {
    w.fbq?.("trackCustom", event, data);
    w.ttq?.track?.(event, data);
    w.snaptr?.("track", event, data);
    w.pintrk?.("track", event, data);
    w.lintrk?.("track", event);
    // eslint-disable-next-line no-console
    console.debug("[track]", event, data);
  } catch {}
}
