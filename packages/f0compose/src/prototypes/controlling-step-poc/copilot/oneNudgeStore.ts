/**
 * One-promo orchestration store (session-scoped).
 *
 * Holds the dismissal flags for the two *promotional* One surfaces so
 * they survive navigation between the list and the expense detail view
 * (which unmount each other). Module-scoped + `useSyncExternalStore`,
 * same pattern as `chatDraftsStore`.
 *
 * The third "surface" — the 4th New-expense dropdown item — is NOT
 * tracked here: it's always present and never dismissed.
 *
 * "Has the user actually used One?" is NOT stored here either — it's
 * derived from `useChatDrafts().length > 0` (One created an expense),
 * see `useOnePromo`. Keeping the success signal derived means we can't
 * forget to set it.
 *
 * Production note: these would be PER-USER persisted flags (plus
 * impression + time caps and a relevance re-trigger for the callout),
 * not session memory. See ONE_PROMO_TIMING.md.
 */
let bannerDismissed = false
let calloutDismissed = false
const subscribers = new Set<() => void>()

function notify(): void {
  for (const cb of subscribers) cb()
}

export function isBannerDismissed(): boolean {
  return bannerDismissed
}

export function isCalloutDismissed(): boolean {
  return calloutDismissed
}

export function dismissBanner(): void {
  if (bannerDismissed) return
  bannerDismissed = true
  notify()
}

export function dismissCallout(): void {
  if (calloutDismissed) return
  calloutDismissed = true
  notify()
}

export function subscribeOnePromo(cb: () => void): () => void {
  subscribers.add(cb)
  return () => {
    subscribers.delete(cb)
  }
}
