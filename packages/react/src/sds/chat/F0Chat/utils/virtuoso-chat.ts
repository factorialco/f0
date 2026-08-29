/**
 * Pure helpers for the Virtuoso-backed transcript (see useChatVirtuoso):
 * window-diff classification, prepend index accounting, entry positioning and
 * the per-row height estimates. No React, no DOM — unit-tested directly.
 */

import { documentPreviewKind, isVideoFileAttachment } from "./attachments"
import { type ChatRow } from "./grouping"

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
 * passes `headShift`: how far the surviving old head MOVED, i.e.
 * `newRowIndex - oldRowIndex`. It is a DELTA, never the new index on its own —
 * `flattenChatRows` always emits a day separator before the first message, so
 * the old head never sat at row 0 and its raw new index over-shifts by at least
 * one row (see `chatWindowHeadRowIndex`).
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
 * The window bookkeeping `useChatVirtuoso` carries between commits. Kept whole
 * (and advanced by the pure function below) so the accounting can be verified
 * without a React tree — the caller only stores it.
 */
export type ChatWindowState = {
  ends: WindowEnds
  /** Row index of `ends.firstId` in the row build this state was measured on —
   * the baseline a later `grow` subtracts to get a real shift. */
  headRowIndex: number
  /** Row count of that same build (the prepend delta's baseline). */
  rowCount: number
  firstItemIndex: number
  /** Bumped whenever the list must remount and re-enter (replace / initial). */
  epoch: number
}

/** Row index of `id`, or 0 when it isn't in this build. */
const chatWindowHeadRowIndex = (
  indexById: ReadonlyMap<string, number>,
  id: string | null
): number => (id != null ? (indexById.get(id) ?? 0) : 0)

export type ChatWindowInput = {
  /** Ordered messages — the window diff reads their ends. */
  messages: readonly { id: string; isMine?: boolean }[]
  /** Flattened row count of THIS build. */
  rowCount: number
  /** message id → row index of THIS build. */
  indexById: ReadonlyMap<string, number>
  /** True when the loaded window isn't the live tail. */
  hasMoreNewer: boolean
}

/** Seed state for the first commit — nothing has moved yet. */
export const initialChatWindow = ({
  messages,
  rowCount,
  indexById,
}: ChatWindowInput): ChatWindowState => {
  const ends = windowEnds(messages)
  return {
    ends,
    headRowIndex: chatWindowHeadRowIndex(indexById, ends.firstId),
    rowCount,
    firstItemIndex: PREPEND_OFFSET,
    epoch: 0,
  }
}

export type ChatWindowAdvance = {
  state: ChatWindowState
  change: WindowChange
  /** The tail grew with a message of MINE — the caller glides home. */
  ownGlide: boolean
}

/**
 * Advances the window bookkeeping by one commit: classifies the change, moves
 * `firstItemIndex` so every surviving row keeps its global index, and bumps the
 * remount epoch when the list has to re-enter.
 *
 * Pure and idempotent in the sense that matters: the same `prev` and the same
 * input always produce the same output, so a re-run of the render that produced
 * it cannot double-apply anything.
 */
export function advanceChatWindow(
  prev: ChatWindowState,
  { messages, rowCount, indexById, hasMoreNewer }: ChatWindowInput
): ChatWindowAdvance {
  const prevEnds = prev.ends
  const nextEnds = windowEnds(messages)

  // Does anything of the previous window survive? A cached head repainted
  // before `watch()` widens it in both directions is a GROW, not a far jump —
  // classifying it as a swap would remount the list mid-entry, which is the
  // scroll jump every reopened conversation shows.
  const survivingHeadIndex =
    prevEnds.firstId != null ? indexById.get(prevEnds.firstId) : undefined
  const overlaps =
    survivingHeadIndex != null ||
    (prevEnds.lastId != null && indexById.has(prevEnds.lastId))
  const change = classifyWindowChange(prevEnds, nextEnds, overlaps)

  if (change === "none") return { state: prev, change, ownGlide: false }

  // How far the surviving head MOVED — not where it landed. Its previous row
  // index is carried in the state precisely because it is never 0.
  const headShift =
    survivingHeadIndex != null ? survivingHeadIndex - prev.headRowIndex : 0

  const firstItemIndex = nextFirstItemIndex(
    prev.firstItemIndex,
    change,
    prev.rowCount,
    rowCount,
    headShift
  )

  const last = messages[messages.length - 1]
  const ownGlide =
    (change === "append" || change === "grow") &&
    !hasMoreNewer &&
    nextEnds.lastId !== prevEnds.lastId &&
    Boolean(last?.isMine)

  return {
    state: {
      ends: nextEnds,
      headRowIndex: chatWindowHeadRowIndex(indexById, nextEnds.firstId),
      rowCount,
      firstItemIndex,
      // A swapped window (far jump) — and the FIRST page of an async-loading
      // conversation — re-enter through the initial location instead of
      // letting followOutput glide across the whole just-landed history.
      epoch:
        change === "replace" || change === "initial"
          ? prev.epoch + 1
          : prev.epoch,
    },
    change,
    ownGlide,
  }
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
 * Per-row height estimates for Virtuoso's `heightEstimates`.
 *
 * Why this exists at all: `defaultItemHeight` is a SINGLE number applied to
 * every unmeasured row, and this transcript's rows are anything from a 24px
 * delivery footer to a 380px photo album. Virtuoso positions the entry, sizes
 * the scrollbar and picks the render window from those estimates, and every
 * pixel of estimate error becomes a scroll correction the moment the row is
 * measured for real — corrections it silently drops whenever the reader isn't
 * strictly scrolling upward. Estimating per row is what shrinks them.
 *
 * These are approximations of the rendered components, not measurements: the
 * transcript column is resizable, so no fixed number can be exact. Being in the
 * right order of magnitude per row is the whole win.
 *
 * `heightEstimates` is only read while Virtuoso's size tree is empty (i.e. at
 * mount), so this never fights a real measurement.
 */

/** Top spacing baked into each row — mirrors `topSpacing` in the renderer. */
const ESTIMATE_RUN_START_SPACING = 20 // pt-5
const ESTIMATE_MESSAGE_RUN_SPACING = 0 // pt-0, a message continuing a run
const ESTIMATE_STANDALONE_SPACING = 12 // pt-3
/** Bubble chrome: px-3.5 py-2.5 plus the surface's own 2px of padding. */
const ESTIMATE_BUBBLE_PADDING = 24
const ESTIMATE_LINE_HEIGHT = 22
/** Characters that fit on one line at a typical panel width. */
const ESTIMATE_CHARS_PER_LINE = 52
const ESTIMATE_SENDER_NAME = 20
const ESTIMATE_REPLY_QUOTE = 46
const ESTIMATE_REACTIONS = 32
const ESTIMATE_LINK_PREVIEW = 96
/** Media cards are `w-[24rem]`; the album's tallest common shape is ~1:1. */
const ESTIMATE_ALBUM = 300
const ESTIMATE_VIDEO = 220
const ESTIMATE_LOCATION = 200
const ESTIMATE_VOICE = 58
const ESTIMATE_DOCUMENT_CARD = 96
const ESTIMATE_CARD = 120
const ESTIMATE_FILE_CHIP = 56

const ESTIMATE_SEPARATOR = 28 + ESTIMATE_STANDALONE_SPACING
const ESTIMATE_DIVIDER = 28 + ESTIMATE_STANDALONE_SPACING
const ESTIMATE_SYSTEM = 24 + ESTIMATE_STANDALONE_SPACING
const ESTIMATE_TYPING = 44 + ESTIMATE_STANDALONE_SPACING
/** `MessageStatus` is `px-1 pt-1 text-sm` in a `pt-0` row. */
const ESTIMATE_FOOTER = 24

const estimateTextHeight = (body: string): number => {
  const text = body.trim()
  if (text.length === 0) return 0
  const longest = text
    .split("\n")
    .reduce(
      (lines, line) =>
        lines + Math.max(1, Math.ceil(line.length / ESTIMATE_CHARS_PER_LINE)),
      0
    )
  return longest * ESTIMATE_LINE_HEIGHT
}

/** Rough rendered height of one flattened row, in CSS pixels. */
export function chatRowHeightEstimate(row: ChatRow): number {
  switch (row.type) {
    case "separator":
      return ESTIMATE_SEPARATOR
    case "divider":
      return ESTIMATE_DIVIDER
    case "system":
      return ESTIMATE_SYSTEM
    case "typing":
      return ESTIMATE_TYPING
    case "footer":
      return ESTIMATE_FOOTER
    case "message":
      break
  }

  const { message } = row
  let height = row.isFirstOfRun
    ? ESTIMATE_RUN_START_SPACING
    : ESTIMATE_MESSAGE_RUN_SPACING

  if (message.deleted) return height + ESTIMATE_BUBBLE_PADDING

  const media = message.attachments ?? []
  let hasMedia = false
  let images = 0
  for (const attachment of media) {
    hasMedia = true
    if (attachment.kind === "image") {
      images += 1
      continue
    }
    if (attachment.kind === "location") height += ESTIMATE_LOCATION
    else if (attachment.kind === "voice") height += ESTIMATE_VOICE
    else if (attachment.kind === "card") height += ESTIMATE_CARD
    else if (isVideoFileAttachment(attachment)) height += ESTIMATE_VIDEO
    else if (documentPreviewKind(attachment)) height += ESTIMATE_DOCUMENT_CARD
    else height += ESTIMATE_FILE_CHIP
  }
  if (images > 0) height += ESTIMATE_ALBUM

  const body = estimateTextHeight(message.body)
  if (body > 0 || message.replyTo) {
    height += ESTIMATE_BUBBLE_PADDING + body
    if (message.replyTo) height += ESTIMATE_REPLY_QUOTE
    if (row.isFirstOfRun && !hasMedia) height += ESTIMATE_SENDER_NAME
    height += (message.linkPreviews?.length ?? 0) * ESTIMATE_LINK_PREVIEW
  }
  if ((message.reactions?.length ?? 0) > 0) height += ESTIMATE_REACTIONS

  return height
}

/** `heightEstimates` for the whole rendered list (same order as `data`). */
export const chatHeightEstimates = (rows: readonly ChatRow[]): number[] =>
  rows.map(chatRowHeightEstimate)

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
