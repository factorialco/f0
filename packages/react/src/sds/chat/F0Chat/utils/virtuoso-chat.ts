/**
 * Pure helpers for the Virtuoso-backed transcript (see useChatVirtuoso):
 * window-diff classification, prepend index accounting and entry positioning.
 * No React, no DOM — unit-tested directly.
 */

/**
 * Base for `firstItemIndex`. Virtuoso retains the viewport position on a
 * prepend when `firstItemIndex` DECREASES by the number of prepended items, so
 * it must start high enough to never hit zero (stream-chat uses the same
 * constant for the same reason).
 */
export const PREPEND_OFFSET = 10 ** 7

/** Gap left above the unread divider on entry so it clears the sticky date
 * pill (which floats near the top) instead of colliding with it. */
export const UNREAD_DIVIDER_TOP_GAP = 88

/**
 * How the loaded message window changed between two commits, from the ends of
 * the (ordered, oldest → newest) message list:
 * - `prepend`: head-local change (older page landed, or the head was removed) —
 *   `firstItemIndex` must absorb the row delta so surviving rows keep their
 *   global index and the viewport doesn't jump.
 * - `append`: tail-local change (new message, or the tail was removed) — the
 *   leading rows' indices are untouched.
 * - `grow`: both ends changed but the windows OVERLAP (a cached head repainted
 *   before `watch()` widened it in both directions) — rows survive, so this is
 *   a prepend and an append at once and must NOT remount.
 * - `replace`: both ends changed and nothing survives (a far jump swapped the
 *   whole window) — the list remounts and re-enters through its initial location.
 * - `none`: same ends (status updates, reactions, edits — identity is by id).
 */
export type WindowChange =
  | "initial"
  | "none"
  | "prepend"
  | "append"
  | "grow"
  | "replace"

export type WindowEnds = {
  firstId: string | null
  lastId: string | null
  length: number
}

export const windowEnds = (
  messages: readonly { id: string }[]
): WindowEnds => ({
  firstId: messages[0]?.id ?? null,
  lastId: messages[messages.length - 1]?.id ?? null,
  length: messages.length,
})

export function classifyWindowChange(
  prev: WindowEnds,
  next: WindowEnds,
  /** Whether any message of the PREVIOUS window survives into the next one.
   * Without it a window that merely widened at both ends reads as a far jump,
   * which remounts the list mid-entry (the cached-then-`watch()` path every
   * conversation takes when its panel is reopened). */
  overlaps = false
): WindowChange {
  if (prev.length === 0 && next.length === 0) return "none"
  if (prev.length === 0) return "initial"
  if (next.length === 0) return "replace"
  const firstChanged = next.firstId !== prev.firstId
  const lastChanged = next.lastId !== prev.lastId
  if (!firstChanged && !lastChanged) return "none"
  if (firstChanged && !lastChanged) return "prepend"
  if (!firstChanged && lastChanged) return "append"
  return overlaps ? "grow" : "replace"
}

/**
 * Next `firstItemIndex` after a window change. On a prepend it decreases by
 * the NET flattened-ROW delta — not the message delta: merging pages can
 * remove the old head's day separator (same-day boundary), and only the row
 * delta keeps every surviving row at its exact global index.
 *
 * A `grow` moved BOTH ends, so the net delta would over-shift. There the caller
 * passes `headShift` — the surviving old head's new row index, i.e. exactly how
 * many rows landed above it.
 */
export function nextFirstItemIndex(
  prev: number,
  change: WindowChange,
  prevRowCount: number,
  rowCount: number,
  headShift = 0
): number {
  if (change === "initial" || change === "replace") return PREPEND_OFFSET
  if (change === "prepend") return prev - (rowCount - prevRowCount)
  if (change === "grow") return prev - headShift
  return prev
}

/**
 * Where the list enters on (re)mount, in LOCAL index space (0..rows-1):
 * a pending far jump centers its target; an unread divider pins near the top
 * (so the user reads down through the unread run) with breathing room for the
 * sticky date pill; otherwise land at the latest message.
 */
export type ChatEntryLocation = {
  index: number | "LAST"
  align: "start" | "center" | "end"
  offset?: number
}

export function entryLocation({
  pendingIndex,
  dividerIndex,
  hasMoreNewer,
}: {
  /** Local index of a pending jump target (a just-loaded search hit), if any. */
  pendingIndex: number | null
  /** Local index of the unread divider row, or -1. */
  dividerIndex: number
  /** True when the loaded window isn't the live tail. */
  hasMoreNewer: boolean
}): ChatEntryLocation {
  if (pendingIndex != null) return { index: pendingIndex, align: "center" }
  // An older window without a jump target (deep link): hold its top — landing
  // at its bottom would immediately trigger the load-newer edge.
  if (hasMoreNewer) return { index: 0, align: "start" }
  if (dividerIndex >= 0) {
    return {
      index: dividerIndex,
      align: "start",
      offset: -UNREAD_DIVIDER_TOP_GAP,
    }
  }
  return { index: "LAST", align: "end" }
}

/**
 * Whether a total-list-height change must re-assert the bottom pin. Virtuoso's
 * followOutput only reacts to COUNT changes — content growing in place at the
 * bottom (a reaction row unfolding, an edit rewrapping, a quote expanding)
 * changes height with the same count and would push below the fold. Only
 * growth re-pins: shrink is clamped by the browser, and a count change is
 * followOutput's job (double-commanding it causes fighting scrolls).
 */
export const shouldRepinOnGrowth = ({
  prevHeight,
  height,
  prevCount,
  count,
  atBottom,
}: {
  prevHeight: number
  height: number
  prevCount: number
  count: number
  atBottom: boolean
}): boolean => atBottom && count === prevCount && height > prevHeight

/**
 * How close to the top (in viewport-heights of remaining scroll) the previous
 * page starts loading. Generous on purpose: the prepend must land and be
 * measured while its rows are still far above the viewport — waiting for
 * `startReached` (scrollTop 0) re-measures ~20 estimated rows right at the
 * anchor, which is visible as a jump on the first pass through a conversation.
 */
export const PREFETCH_OLDER_VIEWPORTS = 3

/** Whether the scroll position is close enough to the top to prefetch the
 * previous page of history. */
export const shouldPrefetchOlder = (
  metrics: { scrollTop: number; clientHeight: number },
  viewports: number = PREFETCH_OLDER_VIEWPORTS
): boolean => metrics.scrollTop <= metrics.clientHeight * viewports

/**
 * followOutput decision for the at-bottom case (scrolled up → never follow;
 * an OWN message sent while scrolled up is handled imperatively instead).
 * Virtuoso's native smooth scroll retries after re-measure until it reaches
 * the true bottom — this replaces the old slide layer entirely.
 */
export const followDecision = (
  isAtBottom: boolean,
  reducedMotion: boolean
): "auto" | "smooth" | false =>
  isAtBottom ? (reducedMotion ? "auto" : "smooth") : false
