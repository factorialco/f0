import { MutableRefObject, RefObject } from 'react';
import { ListItem, VirtuosoHandle } from 'react-virtuoso';
import { ChatRow } from '../utils/grouping';
import { ChatEntryLocation } from '../utils/virtuoso-chat';
type ScrollMessage = {
    id: string;
    isMine?: boolean;
};
type UseChatVirtuosoOptions = {
    /** Message-derived rows (no footer/typing) — prepend accounting and the
     * divider's entry index are computed on these. */
    rows: ChatRow[];
    /** message id → row index, for jump targeting. */
    indexById: Map<string, number>;
    /** Rendered item count (displayRows: rows + footer/typing) — distinguishes
     * in-place growth (re-pin here) from arrivals (followOutput's job). */
    itemCount: number;
    /** Ordered messages — the window diff (prepend/append/replace) reads their ends. */
    messages: ScrollMessage[];
    hasMoreOlder: boolean;
    loadingOlder: boolean;
    loadOlder: () => void;
    hasMoreNewer: boolean;
    loadingNewer: boolean;
    loadNewer?: () => void;
    /** Identity of the open conversation — a switch remounts the list. */
    conversationKey: string;
    /** Skip smooth behaviors (glides become instant repositions). */
    reducedMotion: boolean;
    /** Set once the transcript has been revealed. Until then Virtuoso is still
     * settling its provisional entry window, so a prefetch would prepend a page
     * under a scroll position that isn't final yet. A ref because readiness is
     * keyed by `listKey`, which this hook is the one to produce. */
    canPrefetchRef?: MutableRefObject<boolean>;
};
type UseChatVirtuosoReturn = {
    virtuosoRef: RefObject<VirtuosoHandle>;
    /** Remount key for the Virtuoso element (conversation × window epoch). */
    listKey: string;
    firstItemIndex: number;
    initialLocation: ChatEntryLocation;
    /** Pass DIRECTLY as the followOutput prop. Gated at the prop level — a
     * non-false prop makes Virtuoso's viewport-shrink re-pin (composer growth)
     * yank a scrolled-up reader to the bottom without evaluating the callback. */
    followOutput: ((isAtBottom: boolean) => "auto" | "smooth" | false) | false;
    handleScrollerRef: (el: HTMLElement | Window | null) => void;
    handleAtBottomChange: (isAtBottom: boolean) => void;
    handleAtTopChange: (isAtTop: boolean) => void;
    handleStartReached: () => void;
    handleEndReached: () => void;
    handleItemsRendered: (items: ListItem<ChatRow>[]) => void;
    handleTotalListHeightChanged: (height: number) => void;
    /** True when the latest messages are visible (gates mark-as-read). */
    atBottom: boolean;
    /** True when scrolled to the very top (drives the header shadow). */
    atTop: boolean;
    /** True when far enough up to warrant the jump-to-bottom affordance. */
    scrolledUp: boolean;
    /** Local index of the top-most visible row (sticky date), or null. */
    stickyIndex: number | null;
    scrollToBottom: () => void;
    /** Jump to a loaded message, or park the id until its window loads. */
    scrollToMessage: (id: string) => void;
    /** Park a jump-to-latest until the live tail window replaces the current one. */
    pendBottom: () => void;
    /** Re-apply the entry location once, just before the transcript is revealed.
     * Free while the list is still hidden, and it absorbs everything that
     * measures late: the composer-height fallback, the webfont swap and the
     * previews that mount after the reveal. */
    reassertEntry: () => void;
};
/** `atBottom` band — matches the old NEAR_BOTTOM_PX behavior. */
export declare const AT_BOTTOM_THRESHOLD_PX = 80;
type MeasuredChatItem = Pick<ListItem<ChatRow>, "index" | "offset" | "size">;
/** Finds the first row crossing the viewport's top edge from Virtuoso's own
 * measurements, avoiding DOM queries and synchronous layout reads on scroll. */
export declare const topVisibleRowIndex: (items: MeasuredChatItem[], scrollTop: number, firstItemIndex: number) => number | null;
/**
 * What the reader is looking at, as a row plus how much of it sits above the
 * fold — the pair `scrollToIndex({ align: "start", offset })` restores exactly.
 * Read from Virtuoso's cached offsets, so capturing it costs no layout.
 */
export type ChatScrollAnchor = {
    kind: "bottom";
} | {
    kind: "row";
    index: number;
    offset: number;
};
export declare const topVisibleAnchor: (items: MeasuredChatItem[], scrollTop: number, firstItemIndex: number) => ChatScrollAnchor | null;
/**
 * Scroll behavior for the Virtuoso-backed transcript. Virtuoso owns the
 * physics (bottom follow, prepend retention, entry positioning, re-measure
 * retries); this hook owns the bookkeeping around it: the window diff that
 * feeds `firstItemIndex`, the remount epoch for window swaps, the imperative
 * own-message glide, pending far jumps, and the scroll-state flags the
 * container renders from (jump button, header shadow and sticky date).
 */
export declare function useChatVirtuoso({ rows, indexById, itemCount, messages, hasMoreOlder, loadingOlder, loadOlder, hasMoreNewer, loadingNewer, loadNewer, conversationKey, reducedMotion, canPrefetchRef, }: UseChatVirtuosoOptions): UseChatVirtuosoReturn;
export {};
