import { ChatRow } from './grouping';
/**
 * Base for `firstItemIndex`. Virtuoso retains the viewport position on a
 * prepend when `firstItemIndex` DECREASES by the number of prepended items, so
 * it must start high enough to never hit zero (stream-chat uses the same
 * constant for the same reason).
 */
export declare const PREPEND_OFFSET: number;
/** Gap left above the unread divider on entry so it clears the sticky date
 * pill (which floats near the top) instead of colliding with it. */
export declare const UNREAD_DIVIDER_TOP_GAP = 88;
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
export type WindowChange = "initial" | "none" | "prepend" | "append" | "grow" | "replace";
export type WindowEnds = {
    firstId: string | null;
    lastId: string | null;
    length: number;
};
export declare const windowEnds: (messages: readonly {
    id: string;
}[]) => WindowEnds;
export declare function classifyWindowChange(prev: WindowEnds, next: WindowEnds, 
/** Whether any message of the PREVIOUS window survives into the next one.
 * Without it a window that merely widened at both ends reads as a far jump,
 * which remounts the list mid-entry (the cached-then-`watch()` path every
 * conversation takes when its panel is reopened). */
overlaps?: boolean): WindowChange;
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
export declare function nextFirstItemIndex(prev: number, change: WindowChange, prevRowCount: number, rowCount: number, headShift?: number): number;
/**
 * The window bookkeeping `useChatVirtuoso` carries between commits. Kept whole
 * (and advanced by the pure function below) so the accounting can be verified
 * without a React tree — the caller only stores it.
 */
export type ChatWindowState = {
    ends: WindowEnds;
    /** Row index of `ends.firstId` in the row build this state was measured on —
     * the baseline a later `grow` subtracts to get a real shift. */
    headRowIndex: number;
    /** Row count of that same build (the prepend delta's baseline). */
    rowCount: number;
    firstItemIndex: number;
    /** Bumped whenever the list must remount and re-enter (replace / initial). */
    epoch: number;
};
export type ChatWindowInput = {
    /** Ordered messages — the window diff reads their ends. */
    messages: readonly {
        id: string;
        isMine?: boolean;
    }[];
    /** Flattened row count of THIS build. */
    rowCount: number;
    /** message id → row index of THIS build. */
    indexById: ReadonlyMap<string, number>;
    /** True when the loaded window isn't the live tail. */
    hasMoreNewer: boolean;
};
/** Seed state for the first commit — nothing has moved yet. */
export declare const initialChatWindow: ({ messages, rowCount, indexById, }: ChatWindowInput) => ChatWindowState;
export type ChatWindowAdvance = {
    state: ChatWindowState;
    change: WindowChange;
    /** The tail grew with a message of MINE — the caller glides home. */
    ownGlide: boolean;
};
/**
 * Advances the window bookkeeping by one commit: classifies the change, moves
 * `firstItemIndex` so every surviving row keeps its global index, and bumps the
 * remount epoch when the list has to re-enter.
 *
 * Pure and idempotent in the sense that matters: the same `prev` and the same
 * input always produce the same output, so a re-run of the render that produced
 * it cannot double-apply anything.
 */
export declare function advanceChatWindow(prev: ChatWindowState, { messages, rowCount, indexById, hasMoreNewer }: ChatWindowInput): ChatWindowAdvance;
/**
 * Where the list enters on (re)mount, in LOCAL index space (0..rows-1):
 * a pending far jump centers its target; an unread divider pins near the top
 * (so the user reads down through the unread run) with breathing room for the
 * sticky date pill; otherwise land at the latest message.
 */
export type ChatEntryLocation = {
    index: number | "LAST";
    align: "start" | "center" | "end";
    offset?: number;
};
export declare function entryLocation({ pendingIndex, dividerIndex, hasMoreNewer, }: {
    /** Local index of a pending jump target (a just-loaded search hit), if any. */
    pendingIndex: number | null;
    /** Local index of the unread divider row, or -1. */
    dividerIndex: number;
    /** True when the loaded window isn't the live tail. */
    hasMoreNewer: boolean;
}): ChatEntryLocation;
/**
 * Whether a total-list-height change must re-assert the bottom pin. Virtuoso's
 * followOutput only reacts to COUNT changes — content growing in place at the
 * bottom (a reaction row unfolding, an edit rewrapping, a quote expanding)
 * changes height with the same count and would push below the fold. Only
 * growth re-pins: shrink is clamped by the browser, and a count change is
 * followOutput's job (double-commanding it causes fighting scrolls).
 */
export declare const shouldRepinOnGrowth: ({ prevHeight, height, prevCount, count, atBottom, }: {
    prevHeight: number;
    height: number;
    prevCount: number;
    count: number;
    atBottom: boolean;
}) => boolean;
/**
 * How close to the top (in viewport-heights of remaining scroll) the previous
 * page starts loading. Generous on purpose: the prepend must land and be
 * measured while its rows are still far above the viewport — waiting for
 * `startReached` (scrollTop 0) re-measures ~20 estimated rows right at the
 * anchor, which is visible as a jump on the first pass through a conversation.
 */
export declare const PREFETCH_OLDER_VIEWPORTS = 3;
/** Whether the scroll position is close enough to the top to prefetch the
 * previous page of history. */
export declare const shouldPrefetchOlder: (metrics: {
    scrollTop: number;
    clientHeight: number;
}, viewports?: number) => boolean;
/** Rough rendered height of one flattened row, in CSS pixels. */
export declare function chatRowHeightEstimate(row: ChatRow): number;
/** `heightEstimates` for the whole rendered list (same order as `data`). */
export declare const chatHeightEstimates: (rows: readonly ChatRow[]) => number[];
/**
 * followOutput decision for the at-bottom case (scrolled up → never follow;
 * an OWN message sent while scrolled up is handled imperatively instead).
 * Virtuoso's native smooth scroll retries after re-measure until it reaches
 * the true bottom — this replaces the old slide layer entirely.
 */
export declare const followDecision: (isAtBottom: boolean, reducedMotion: boolean) => "auto" | "smooth" | false;
