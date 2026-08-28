import {
  type MutableRefObject,
  type RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { type ListItem, type VirtuosoHandle } from "react-virtuoso"

import { type ChatRow } from "../utils/grouping"
import {
  createMediaWarmer,
  rowImageUrls,
  warmupRange,
} from "../utils/media-warmup"
import {
  type ChatEntryLocation,
  classifyWindowChange,
  entryLocation,
  followDecision,
  nextFirstItemIndex,
  PREPEND_OFFSET,
  shouldPrefetchOlder,
  shouldRepinOnGrowth,
  type WindowEnds,
  windowEnds,
} from "../utils/virtuoso-chat"
import { useTranscriptResizeAnchor } from "./useTranscriptResizeAnchor"

type ScrollMessage = { id: string; isMine?: boolean }

type UseChatVirtuosoOptions = {
  /** Message-derived rows (no footer/typing) — prepend accounting and the
   * divider's entry index are computed on these. */
  rows: ChatRow[]
  /** message id → row index, for jump targeting. */
  indexById: Map<string, number>
  /** Rendered item count (displayRows: rows + footer/typing) — distinguishes
   * in-place growth (re-pin here) from arrivals (followOutput's job). */
  itemCount: number
  /** Ordered messages — the window diff (prepend/append/replace) reads their ends. */
  messages: ScrollMessage[]
  hasMoreOlder: boolean
  loadingOlder: boolean
  loadOlder: () => void
  hasMoreNewer: boolean
  loadingNewer: boolean
  loadNewer?: () => void
  /** Identity of the open conversation — a switch remounts the list. */
  conversationKey: string
  /** Skip smooth behaviors (glides become instant repositions). */
  reducedMotion: boolean
  /** Set once the transcript has been revealed. Until then Virtuoso is still
   * settling its provisional entry window, so a prefetch would prepend a page
   * under a scroll position that isn't final yet. A ref because readiness is
   * keyed by `listKey`, which this hook is the one to produce. */
  canPrefetchRef?: MutableRefObject<boolean>
}

type UseChatVirtuosoReturn = {
  virtuosoRef: RefObject<VirtuosoHandle>
  /** Remount key for the Virtuoso element (conversation × window epoch). */
  listKey: string
  firstItemIndex: number
  initialLocation: ChatEntryLocation
  /** Pass DIRECTLY as the followOutput prop. Gated at the prop level — a
   * non-false prop makes Virtuoso's viewport-shrink re-pin (composer growth)
   * yank a scrolled-up reader to the bottom without evaluating the callback. */
  followOutput: ((isAtBottom: boolean) => "auto" | "smooth" | false) | false
  handleScrollerRef: (el: HTMLElement | Window | null) => void
  handleAtBottomChange: (isAtBottom: boolean) => void
  handleAtTopChange: (isAtTop: boolean) => void
  handleStartReached: () => void
  handleEndReached: () => void
  handleItemsRendered: (items: ListItem<ChatRow>[]) => void
  handleTotalListHeightChanged: (height: number) => void
  /** True when the latest messages are visible (gates mark-as-read). */
  atBottom: boolean
  /** True when scrolled to the very top (drives the header shadow). */
  atTop: boolean
  /** True when far enough up to warrant the jump-to-bottom affordance. */
  scrolledUp: boolean
  /** Local index of the top-most visible row (sticky date), or null. */
  stickyIndex: number | null
  scrollToBottom: () => void
  /** Jump to a loaded message, or park the id until its window loads. */
  scrollToMessage: (id: string) => void
  /** Park a jump-to-latest until the live tail window replaces the current one. */
  pendBottom: () => void
  /** Re-apply the entry location once, just before the transcript is revealed.
   * Free while the list is still hidden, and it absorbs everything that
   * measures late: the composer-height fallback, the webfont swap and the
   * previews that mount after the reveal. */
  reassertEntry: () => void
}

/** `atBottom` band — matches the old NEAR_BOTTOM_PX behavior. */
export const AT_BOTTOM_THRESHOLD_PX = 80
/** Scrolled up = more than half a viewport away from the bottom. */
const SCROLLED_UP_VIEWPORTS = 0.5
/** A genuine bottom edge, stricter than Virtuoso's 80px at-bottom band. */
const BOTTOM_EDGE_EPSILON_PX = 1
/** Let a wheel gesture settle before treating a no-scroll boundary as bottom. */
const WHEEL_BOUNDARY_SETTLE_MS = 160
type PendingJump = { kind: "id"; id: string } | { kind: "bottom" } | null

type MeasuredChatItem = Pick<ListItem<ChatRow>, "index" | "offset" | "size">

type ScrollMetrics = {
  scrollTop: number
  scrollHeight: number
  clientHeight: number
}

/** Finds the first row crossing the viewport's top edge from Virtuoso's own
 * measurements, avoiding DOM queries and synchronous layout reads on scroll. */
export const topVisibleRowIndex = (
  items: MeasuredChatItem[],
  scrollTop: number,
  firstItemIndex: number
): number | null => {
  const item = items.find(({ offset, size }) => offset + size > scrollTop)
  return item ? Math.max(0, item.index - firstItemIndex) : null
}

/**
 * What the reader is looking at, as a row plus how much of it sits above the
 * fold — the pair `scrollToIndex({ align: "start", offset })` restores exactly.
 * Read from Virtuoso's cached offsets, so capturing it costs no layout.
 */
export type ChatScrollAnchor =
  | { kind: "bottom" }
  | { kind: "row"; index: number; offset: number }

export const topVisibleAnchor = (
  items: MeasuredChatItem[],
  scrollTop: number,
  firstItemIndex: number
): ChatScrollAnchor | null => {
  const item = items.find(({ offset, size }) => offset + size > scrollTop)
  if (!item) return null
  return {
    kind: "row",
    index: Math.max(0, item.index - firstItemIndex),
    offset: scrollTop - item.offset,
  }
}

/**
 * Scroll behavior for the Virtuoso-backed transcript. Virtuoso owns the
 * physics (bottom follow, prepend retention, entry positioning, re-measure
 * retries); this hook owns the bookkeeping around it: the window diff that
 * feeds `firstItemIndex`, the remount epoch for window swaps, the imperative
 * own-message glide, pending far jumps, and the scroll-state flags the
 * container renders from (jump button, header shadow and sticky date).
 */
export function useChatVirtuoso({
  rows,
  indexById,
  itemCount,
  messages,
  hasMoreOlder,
  loadingOlder,
  loadOlder,
  hasMoreNewer,
  loadingNewer,
  loadNewer,
  conversationKey,
  reducedMotion,
  canPrefetchRef,
}: UseChatVirtuosoOptions): UseChatVirtuosoReturn {
  const virtuosoRef = useRef<VirtuosoHandle>(null)
  const scrollerElRef = useRef<HTMLElement | null>(null)
  const renderedItemsRef = useRef<ListItem<ChatRow>[]>([])
  const scrollMetricsRef = useRef<ScrollMetrics | null>(null)

  // ---- window accounting (render-phase, like the container's freshIds) ----
  const windowRef = useRef<WindowEnds | null>(null)
  const prevRowCountRef = useRef(rows.length)
  const firstItemIndexRef = useRef(PREPEND_OFFSET)
  const epochRef = useRef(0)
  const pendingRef = useRef<PendingJump>(null)
  // Own message appended while scrolled up → glide home (consumed post-commit).
  const ownGlideRef = useRef(false)
  // One older-page request in flight at a time — cleared when its window lands
  // (below) or when the host reports the attempt finished (loadingOlder edge).
  const olderRequestedRef = useRef(false)

  if (windowRef.current === null) {
    windowRef.current = windowEnds(messages)
  } else {
    const prevEnds = windowRef.current
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
    if (change !== "none") {
      olderRequestedRef.current = false
      firstItemIndexRef.current = nextFirstItemIndex(
        firstItemIndexRef.current,
        change,
        prevRowCountRef.current,
        rows.length,
        // Rows that landed ABOVE the surviving head — the only shift a grow
        // may apply (the net row delta would also count the appended tail).
        survivingHeadIndex ?? 0
      )
      // A swapped window (far jump) — and the FIRST page of an async-loading
      // conversation — re-enter through the initial location instead of
      // letting followOutput glide across the whole just-landed history.
      if (change === "replace" || change === "initial") epochRef.current += 1
      if (
        (change === "append" || change === "grow") &&
        !hasMoreNewer &&
        nextEnds.lastId !== prevEnds.lastId
      ) {
        const last = messages[messages.length - 1]
        if (last?.isMine) ownGlideRef.current = true
      }
      windowRef.current = nextEnds
    }
  }
  prevRowCountRef.current = rows.length

  const listKey = `${conversationKey}:${epochRef.current}`
  const firstItemIndex = firstItemIndexRef.current

  // Entry location, computed ONCE per remount (Virtuoso only reads
  // initialTopMostItemIndex at mount). A pending far jump wins; the unread
  // divider pins near the top, otherwise land at the latest message. Prepend
  // never remounts: Virtuoso retains the measured anchor from firstItemIndex.
  const entryRef = useRef<{ key: string; location: ChatEntryLocation } | null>(
    null
  )
  if (entryRef.current?.key !== listKey) {
    let location: ChatEntryLocation
    const pending = pendingRef.current
    if (pending?.kind === "bottom") {
      // An explicit jump-to-latest overrides the divider re-pin.
      location = { index: "LAST", align: "end" }
      pendingRef.current = null
    } else {
      const pendingIndex =
        pending?.kind === "id" ? (indexById.get(pending.id) ?? null) : null
      if (pendingIndex != null) pendingRef.current = null
      location = entryLocation({
        pendingIndex,
        dividerIndex: rows.findIndex((row) => row.type === "divider"),
        hasMoreNewer,
      })
    }
    entryRef.current = { key: listKey, location }
  }
  const initialLocation = entryRef.current.location

  // ---- scroll-state flags (reset per remount, render-phase) ----
  const entersAtBottom = initialLocation.index === "LAST"
  const [atBottom, setAtBottom] = useState(entersAtBottom)
  const [atTop, setAtTop] = useState(true)
  const [scrolledUp, setScrolledUp] = useState(false)
  const [followPaused, setFollowPaused] = useState(false)
  const [stickyIndex, setStickyIndex] = useState<number | null>(null)
  const atBottomRef = useRef(entersAtBottom)
  // Distance from the bottom as of the last real scroll — i.e. BEFORE any
  // growth/resize currently being handled. Virtuoso's atBottom state can flip
  // off from the very growth we're reacting to (when it exceeds the threshold
  // band), so the pin must gate on where the user WAS, not on that state.
  const distanceFromBottomRef = useRef(
    entersAtBottom ? 0 : Number.POSITIVE_INFINITY
  )
  const followPausedRef = useRef(false)
  const wheelBoundaryTimerRef = useRef<number | null>(null)
  // Starts unset so the reset below ALSO runs on the first mount. Seeded with
  // `listKey` it early-returned there, which left the scroller-attach read (of
  // a viewport Virtuoso hasn't positioned yet) as the last writer of
  // `distanceFromBottomRef` — the gate every re-pin consults.
  const stateKeyRef = useRef<string | null>(null)
  const stateResetPending = stateKeyRef.current !== listKey

  useLayoutEffect(() => {
    if (stateKeyRef.current === listKey) return
    stateKeyRef.current = listKey
    atBottomRef.current = entersAtBottom
    distanceFromBottomRef.current = entersAtBottom
      ? 0
      : Number.POSITIVE_INFINITY
    followPausedRef.current = false
    setAtBottom(entersAtBottom)
    setAtTop(true)
    setScrolledUp(false)
    setFollowPaused(false)
    setStickyIndex(null)
  }, [entersAtBottom, listKey])

  // Last position the reader actually chose, refreshed on every real scroll and
  // deliberately frozen while the width moves — that's what gets restored.
  const anchorRef = useRef<ChatScrollAnchor | null>(null)

  const restoreAnchor = useCallback(() => {
    const anchor = anchorRef.current
    const virtuoso = virtuosoRef.current
    if (!anchor || !virtuoso) return
    if (anchor.kind === "bottom") {
      virtuoso.scrollToIndex({ index: "LAST", align: "end", behavior: "auto" })
    } else {
      virtuoso.scrollToIndex({
        index: anchor.index,
        align: "start",
        offset: anchor.offset,
        behavior: "auto",
      })
    }
    // One DOM read per resize (not per frame) so the derived state that was
    // frozen through the drag resumes from reality instead of stale metrics.
    const element = scrollerElRef.current
    if (!element) return
    scrollMetricsRef.current = {
      scrollHeight: element.scrollHeight,
      scrollTop: element.scrollTop,
      clientHeight: element.clientHeight,
    }
    distanceFromBottomRef.current =
      element.scrollHeight - element.scrollTop - element.clientHeight
  }, [])

  const { observeResize, resizingRef } = useTranscriptResizeAnchor({
    onSettled: restoreAnchor,
  })

  const pauseFollowing = useCallback(() => {
    followPausedRef.current = true
    setFollowPaused(true)
  }, [])

  const resumeFollowing = useCallback(() => {
    followPausedRef.current = false
    setFollowPaused(false)
  }, [])

  const handleAtBottomChange = useCallback(
    (isAtBottom: boolean) => {
      atBottomRef.current = isAtBottom
      setAtBottom(isAtBottom)
      if (!isAtBottom) return
      // Mid-resize this reads a scrollHeight the measure strip hasn't caught up
      // with yet, so the edge test can pass for a reader who never moved.
      if (resizingRef.current) return

      const el = scrollerElRef.current
      if (
        el &&
        el.scrollHeight - el.scrollTop - el.clientHeight <=
          BOTTOM_EDGE_EPSILON_PX
      ) {
        resumeFollowing()
      }
    },
    [resizingRef, resumeFollowing]
  )

  const handleAtTopChange = useCallback((isAtTop: boolean) => {
    setAtTop(isAtTop)
  }, [])

  // ---- follow (see UseChatVirtuosoReturn.followOutput for the prop gate) ----
  const follow = useCallback(
    (isAtBottom: boolean) => followDecision(isAtBottom, reducedMotion),
    [reducedMotion]
  )
  const currentAtBottom = stateResetPending ? entersAtBottom : atBottom
  const currentFollowPaused = stateResetPending ? false : followPaused
  const followOutput =
    currentAtBottom && !currentFollowPaused && !hasMoreNewer ? follow : false

  // ---- pagination edges ----
  // Latest pagination inputs, readable from the stable rAF callback below.
  const olderPagingRef = useRef({ hasMoreOlder, loadingOlder, loadOlder })
  olderPagingRef.current = { hasMoreOlder, loadingOlder, loadOlder }

  // `itemsRendered` fires at mount and on every resize frame, both without a
  // user scroll, so the prefetch needs its own gate: a page landing while the
  // entry window is still provisional (or mid-drag) drags Virtuoso through its
  // two-frame prepend correction at the worst possible moment.
  const prefetchGateRef = useRef(canPrefetchRef)
  prefetchGateRef.current = canPrefetchRef

  const requestOlder = useCallback(() => {
    const paging = olderPagingRef.current
    if (olderRequestedRef.current) return
    if (!paging.hasMoreOlder || paging.loadingOlder) return
    olderRequestedRef.current = true
    paging.loadOlder()
  }, [])

  const prefetchOlder = useCallback(() => {
    const gate = prefetchGateRef.current
    if (gate && !gate.current) return
    requestOlder()
  }, [requestOlder])

  // Unstick the latch when the host reports the attempt finished without a
  // window change (a failed/empty page must not kill pagination for good).
  useEffect(() => {
    if (!loadingOlder) olderRequestedRef.current = false
  }, [loadingOlder])

  const handleStartReached = requestOlder

  const handleEndReached = useCallback(() => {
    if (hasMoreNewer && !loadingNewer) loadNewer?.()
  }, [hasMoreNewer, loadingNewer, loadNewer])

  // ---- media warm-up (see utils/media-warmup: the decoded-URL set lives
  // outside the tree because Virtuoso destroys rows that leave the window) ----
  const warmerRef = useRef<ReturnType<typeof createMediaWarmer> | null>(null)
  if (warmerRef.current === null) warmerRef.current = createMediaWarmer()
  const lastWarmScrollTopRef = useRef<number | null>(null)
  const rowsRef = useRef(rows)
  rowsRef.current = rows

  const warmMediaAhead = useCallback(
    (direction: "up" | "down", firstIndex: number) => {
      const rendered = renderedItemsRef.current
      if (rendered.length === 0) return
      const allRows = rowsRef.current
      const toLocal = (index: number): number => index - firstIndex
      const { start, end } = warmupRange(
        toLocal(rendered[0]!.index),
        toLocal(rendered[rendered.length - 1]!.index),
        direction,
        allRows.length
      )
      for (let index = start; index <= end; index++) {
        const urls = rowImageUrls(allRows[index])
        if (urls.length > 0) warmerRef.current?.warm(urls)
      }
    },
    []
  )

  useEffect(() => {
    const warmer = warmerRef.current
    return () => warmer?.dispose()
  }, [])

  // ---- scrolled-up flag + sticky date (native scroll listener: Virtuoso has
  // no onScroll prop, and atBottomStateChange's band is too narrow for the
  // jump affordance). The sticky index uses Virtuoso's cached item offsets,
  // avoiding a query + forced DOM layout on every animation frame. ----
  const measureRafRef = useRef<number | null>(null)
  const scheduleDerivedScrollState = useCallback(() => {
    if (measureRafRef.current != null) return
    measureRafRef.current = requestAnimationFrame(() => {
      measureRafRef.current = null
      // A resize doesn't produce a scroll event, so `scrollMetricsRef` still
      // describes the previous width while `renderedItemsRef` already holds the
      // new offsets. Deriving anything from that mix writes a bogus
      // distance-from-bottom (the re-pin gate) and a wrong sticky date — and it
      // would overwrite the very anchor we need to restore afterwards.
      if (resizingRef.current) return
      const metrics = scrollMetricsRef.current
      if (!metrics || !scrollerElRef.current) return
      const distanceFromBottom =
        metrics.scrollHeight - metrics.scrollTop - metrics.clientHeight
      distanceFromBottomRef.current = distanceFromBottom
      setScrolledUp(
        distanceFromBottom > metrics.clientHeight * SCROLLED_UP_VIEWPORTS
      )
      // Prefetch the previous page while still viewports away from the top:
      // the prepend lands and gets measured far above the viewport instead of
      // right at the anchor (startReached below stays as the safety net).
      if (shouldPrefetchOlder(metrics)) prefetchOlder()
      // Read at fire time: a prepend can update the global base between
      // scheduling this frame and calculating the local row index.
      const firstIndex = firstItemIndexRef.current
      setStickyIndex(
        topVisibleRowIndex(
          renderedItemsRef.current,
          metrics.scrollTop,
          firstIndex
        )
      )
      anchorRef.current =
        distanceFromBottom <= AT_BOTTOM_THRESHOLD_PX
          ? { kind: "bottom" }
          : (topVisibleAnchor(
              renderedItemsRef.current,
              metrics.scrollTop,
              firstIndex
            ) ?? anchorRef.current)

      // Virtuoso exposes no scroll direction, so derive it here — the warm-up
      // has to lean the way the reader is going, and the window is far shorter
      // ahead when scrolling down.
      const previousTop = lastWarmScrollTopRef.current
      lastWarmScrollTopRef.current = metrics.scrollTop
      warmMediaAhead(
        previousTop != null && metrics.scrollTop < previousTop ? "up" : "down",
        firstIndex
      )
    })
  }, [prefetchOlder, resizingRef, warmMediaAhead])

  const measureScrollState = useCallback(() => {
    const element = scrollerElRef.current
    if (!element) return

    // The native scroll hot path reads each metric exactly once. Everything
    // derived from them is published at most once in the next paint frame.
    const metrics = {
      scrollHeight: element.scrollHeight,
      scrollTop: element.scrollTop,
      clientHeight: element.clientHeight,
    }
    scrollMetricsRef.current = metrics
    const distanceFromBottom =
      metrics.scrollHeight - metrics.scrollTop - metrics.clientHeight
    distanceFromBottomRef.current = distanceFromBottom
    // A width change can shrink the content under the reader until the browser
    // CLAMPS scrollTop, which fires this as a real scroll. Re-arming the follow
    // there hands the bottom to someone who was three screens up.
    if (!resizingRef.current && distanceFromBottom <= BOTTOM_EDGE_EPSILON_PX) {
      resumeFollowing()
    }
    scheduleDerivedScrollState()
  }, [resizingRef, resumeFollowing, scheduleDerivedScrollState])

  // Existing rows can grow without changing the item count (reactions, edits,
  // previews). Re-align through Virtuoso's measured index instead of assigning
  // DOM scrollTop, so there is only one scroll-position authority.
  const pinToBottom = useCallback(() => {
    if (!scrollerElRef.current) return
    if (followPausedRef.current) return
    if (distanceFromBottomRef.current > AT_BOTTOM_THRESHOLD_PX) return
    virtuosoRef.current?.scrollToIndex({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
  }, [])

  // In-place growth at the bottom with the SAME item count — a reaction row
  // unfolding, an edit rewrapping, a quote expanding. followOutput never sees
  // it (it only reacts to count changes), so the grown content would sit below
  // the fold. Re-pinned per measurement: the row's own height animation eases
  // the growth frame by frame and the pin just tracks it, exactly like the old
  // slide layer did. Count changes are skipped — that's followOutput's scroll,
  // and issuing a second one would fight it.
  const itemCountRef = useRef(itemCount)
  itemCountRef.current = itemCount
  const lastListHeightRef = useRef({ height: 0, count: itemCount })
  const handleTotalListHeightChanged = useCallback(
    (height: number) => {
      const prev = lastListHeightRef.current
      const count = itemCountRef.current
      lastListHeightRef.current = { height, count }
      // Every frame of a width change rewraps rows and fires this. That is not
      // content growing at the bottom — it's the same content re-laid out — and
      // re-pinning per frame is what walks the reader down to the bottom.
      if (resizingRef.current) return
      if (
        shouldRepinOnGrowth({
          prevHeight: prev.height,
          height,
          prevCount: prev.count,
          count,
          // Pre-growth distance, same reasoning as pinToBottom's own gate.
          atBottom:
            !followPausedRef.current &&
            distanceFromBottomRef.current <= AT_BOTTOM_THRESHOLD_PX,
        })
      ) {
        pinToBottom()
      }
    },
    [pinToBottom, resizingRef]
  )

  // The user taking over beats every re-pin (WhatsApp cancels the follow).
  // An upward wheel intent pauses following BEFORE the native scroll lands and
  // keeps it paused while the reader is even slightly away from the true
  // bottom. This is deliberately separate from Virtuoso's broad 80px
  // `atBottom` band: async document/image growth must not pull a reader back
  // during the first few wheel ticks. A short settle only restores following
  // when the gesture could not move because it was already at the boundary.
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (event.deltaY >= 0) return
      pauseFollowing()

      if (wheelBoundaryTimerRef.current != null) {
        window.clearTimeout(wheelBoundaryTimerRef.current)
      }
      const target = scrollerElRef.current
      wheelBoundaryTimerRef.current = window.setTimeout(() => {
        wheelBoundaryTimerRef.current = null
        if (!target || scrollerElRef.current !== target) return
        const distanceFromBottom =
          target.scrollHeight - target.scrollTop - target.clientHeight
        distanceFromBottomRef.current = distanceFromBottom
        if (distanceFromBottom <= BOTTOM_EDGE_EPSILON_PX) resumeFollowing()
      }, WHEEL_BOUNDARY_SETTLE_MS)
    },
    [pauseFollowing, resumeFollowing]
  )
  const handleTouchMove = useCallback(() => {
    pauseFollowing()
  }, [pauseFollowing])

  const handleScrollerRef = useCallback(
    (el: HTMLElement | Window | null) => {
      if (wheelBoundaryTimerRef.current != null) {
        window.clearTimeout(wheelBoundaryTimerRef.current)
        wheelBoundaryTimerRef.current = null
      }
      const prev = scrollerElRef.current
      if (prev) {
        prev.removeEventListener("scroll", measureScrollState)
        prev.removeEventListener("wheel", handleWheel)
        prev.removeEventListener("touchmove", handleTouchMove)
        prev.removeEventListener("touchend", measureScrollState)
      }
      scrollerElRef.current = el instanceof HTMLElement ? el : null
      scrollMetricsRef.current = null
      const next = scrollerElRef.current
      observeResize(next)
      if (next) {
        // Metrics only. The attach is NOT a valid measurement — Virtuoso hasn't
        // positioned or measured the list yet, so scrollHeight ≈ clientHeight
        // and the distance reads as zero. Writing it here would open every
        // re-pin gate for a conversation that entered at the unread divider.
        // `distanceFromBottomRef` stays on the entry-derived seed until a real
        // scroll (or Virtuoso's own at-bottom state) replaces it.
        scrollMetricsRef.current = {
          scrollHeight: next.scrollHeight,
          scrollTop: next.scrollTop,
          clientHeight: next.clientHeight,
        }

        // QA hook (the Storm story HUD traces scrollTop/scrollHeight per frame).
        next.setAttribute("data-chat-viewport", "")
        next.addEventListener("scroll", measureScrollState, { passive: true })
        next.addEventListener("wheel", handleWheel, { passive: true })
        next.addEventListener("touchmove", handleTouchMove, { passive: true })
        // A touch that didn't actually scroll must restore the real distance,
        // or the pins would stay disabled until the next scroll.
        next.addEventListener("touchend", measureScrollState, {
          passive: true,
        })
      }
    },
    [handleTouchMove, handleWheel, measureScrollState, observeResize]
  )

  // ---- imperative scrolls ----
  const scrollToBottom = useCallback(() => {
    resumeFollowing()
    virtuosoRef.current?.scrollToIndex({
      index: "LAST",
      align: "end",
      behavior: reducedMotion ? "auto" : "smooth",
    })
  }, [reducedMotion, resumeFollowing])

  const indexByIdRef = useRef(indexById)
  indexByIdRef.current = indexById
  const scrollToMessage = useCallback((id: string) => {
    const index = indexByIdRef.current.get(id)
    if (index != null) {
      virtuosoRef.current?.scrollToIndex({ index, align: "center" })
    } else {
      // Not loaded yet (a far-back search hit) — resolved when its window
      // lands: a REPLACED window re-enters centered on it (see entryRef), a
      // page that merely grows to include it scrolls below.
      pendingRef.current = { kind: "id", id }
    }
  }, [])

  const pendBottom = useCallback(() => {
    pendingRef.current = { kind: "bottom" }
  }, [])

  // Entry positions are computed against a transcript that is still settling:
  // the composer height is a CSS fallback until its layout effect publishes the
  // real one, the webfont may still swap, and deferred previews mount later.
  // Re-applying the location right before the reveal is invisible (the list is
  // hidden) and absorbs all of it. Skipped once the reader has taken over.
  const initialLocationRef = useRef(initialLocation)
  initialLocationRef.current = initialLocation
  const reassertEntry = useCallback(() => {
    if (followPausedRef.current) return
    const location = initialLocationRef.current
    virtuosoRef.current?.scrollToIndex({
      index: location.index,
      align: location.align,
      offset: location.offset,
      behavior: "auto",
    })
  }, [])

  // A pending jump whose target arrived WITHOUT a window swap (the page grew
  // to include it) — scroll now.
  useEffect(() => {
    const pending = pendingRef.current
    if (pending?.kind !== "id") return
    const index = indexById.get(pending.id)
    if (index != null) {
      pendingRef.current = null
      virtuosoRef.current?.scrollToIndex({ index, align: "center" })
    }
  }, [indexById])

  // Own message sent while scrolled up: glide home (at the bottom, follow
  // already owns the motion). Post-commit so the new row exists to target.
  useLayoutEffect(() => {
    if (!ownGlideRef.current) return
    ownGlideRef.current = false
    if (atBottomRef.current && !followPausedRef.current) return
    scrollToBottom()
  })

  // ---- sticky refresh on rendered-window changes ----
  const handleItemsRendered = useCallback(
    (items: ListItem<ChatRow>[]) => {
      renderedItemsRef.current = items
      scheduleDerivedScrollState()
    },
    [scheduleDerivedScrollState]
  )

  useEffect(
    () => () => {
      if (measureRafRef.current != null)
        cancelAnimationFrame(measureRafRef.current)
      if (wheelBoundaryTimerRef.current != null)
        window.clearTimeout(wheelBoundaryTimerRef.current)
    },
    []
  )

  return {
    virtuosoRef,
    listKey,
    firstItemIndex,
    initialLocation,
    followOutput,
    handleScrollerRef,
    handleAtBottomChange,
    handleAtTopChange,
    handleStartReached,
    handleEndReached,
    handleItemsRendered,
    handleTotalListHeightChanged,
    atBottom: currentAtBottom,
    atTop: stateResetPending ? true : atTop,
    scrolledUp: stateResetPending ? false : scrolledUp,
    stickyIndex: stateResetPending ? null : stickyIndex,
    scrollToBottom,
    scrollToMessage,
    pendBottom,
    reassertEntry,
  }
}
