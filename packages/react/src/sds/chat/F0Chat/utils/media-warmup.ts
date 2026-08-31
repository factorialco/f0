import { type ChatRow } from "./grouping"

/** How far past the rendered edge to warm, in rows. */
export const WARMUP_LOOKAHEAD_ROWS = 8

/**
 * Which rows to warm, given the rendered window and where the reader is going.
 *
 * Virtuoso's window is deliberately lopsided — a generous buffer above so
 * estimate→real height corrections land far from the fold, and almost nothing
 * below. Scrolling down there is barely a row of runway, which is nowhere near
 * enough to fetch a photo, so the warm-up leans into the direction of travel
 * and keeps a shorter tail behind for the way back.
 */
export const warmupRange = (
  renderedStart: number,
  renderedEnd: number,
  direction: "up" | "down",
  total: number
): { start: number; end: number } => {
  const ahead = WARMUP_LOOKAHEAD_ROWS
  const behind = Math.ceil(WARMUP_LOOKAHEAD_ROWS / 2)
  return direction === "up"
    ? {
        start: Math.max(0, renderedStart - ahead),
        end: Math.min(total - 1, renderedEnd + behind),
      }
    : {
        start: Math.max(0, renderedStart - behind),
        end: Math.min(total - 1, renderedEnd + ahead),
      }
}

/** Every image URL a row will paint, in the order the reader meets them. */
export const rowImageUrls = (row: ChatRow | undefined): string[] => {
  if (!row || row.type !== "message") return []
  const urls: string[] = []
  for (const attachment of row.message.attachments ?? []) {
    if (attachment.kind !== "image") continue
    // The blur source first: it is tiny, and having it decoded is what makes
    // the photo resolve out of something rather than appear over a flat tint.
    if (attachment.blurUrl) urls.push(attachment.blurUrl)
    urls.push(attachment.thumbnailUrl ?? attachment.url)
  }
  return urls
}

/**
 * Decodes images off-screen so they are already in the browser's cache by the
 * time their row is rendered.
 *
 * This lives outside the React tree on purpose. Virtuoso destroys rows that
 * leave its window — it does not hide them — so "this photo is already loaded"
 * cannot be held in component state: on the way back the `<img>` is recreated
 * and `img.complete` is only synchronously true while the decoded bitmap is
 * still resident. The `seen` set is what survives that, which is why scrolling
 * back over a stretch you have already read shows the photos instantly.
 */
export const createMediaWarmer = (): {
  warm: (urls: readonly string[]) => void
  dispose: () => void
} => {
  const seen = new Set<string>()
  let disposed = false

  return {
    warm: (urls) => {
      if (disposed || typeof Image === "undefined") return
      for (const url of urls) {
        if (seen.has(url)) continue
        seen.add(url)
        const image = new Image()
        image.src = url
        // Decoding here keeps the work off the frame that finally paints the
        // row. A failure is not worth reporting: the real <img> will render the
        // same error state, and a rejected decode must not poison the set (the
        // URL stays marked so a broken image isn't retried on every frame).
        void image.decode?.().catch(() => {})
      }
    },
    dispose: () => {
      disposed = true
      seen.clear()
    },
  }
}
