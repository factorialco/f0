import {
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
  type ChatEntryLocation,
  classifyWindowChange,
  entryLocation,
  followDecision,
  nextFirstItemIndex,
  PREPEND_OFFSET,
  shouldRepinOnGrowth,
  type WindowEnds,
  windowEnds,
} from "../utils/virtuoso-chat"

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
  /** Transcript reveal — hidden until the entry positioning has painted. */
  revealed: boolean
  /** Local index of the top-most visible row (sticky date), or null. */
  stickyIndex: number | null
  scrollToBottom: () => void
  /** Jump to a loaded message, or park the id until its window loads. */
  scrollToMessage: (id: string) => void
  /** Park a jump-to-latest until the live tail window replaces the current one. */
  pendBottom: () => void
}

/** `atBottom` band — matches the old NEAR_BOTTOM_PX behavior. */
export const AT_BOTTOM_THRESHOLD_PX = 80
/** Scrolled up = more than half a viewport away from the bottom. */
const SCROLLED_UP_VIEWPORTS = 0.5
/** Farther than this (in viewports), teleport near the bottom and glide only
 * the last stretch (Telegram) instead of easing across the whole distance. */
const FAR_TELEPORT_VIEWPORTS = 1.5

type PendingJump = { kind: "id"; id: string } | { kind: "bottom" } | null

/**
 * Scroll behavior for the Virtuoso-backed transcript. Virtuoso owns the
 * physics (bottom follow, prepend retention, entry positioning, re-measure
 * retries); this hook owns the bookkeeping around it: the window diff that
 * feeds `firstItemIndex`, the remount epoch for window swaps, the imperative
 * own-message glide, pending far jumps, and the scroll-state flags the
 * container renders from (jump button, header shadow, sticky date, reveal).
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
}: UseChatVirtuosoOptions): UseChatVirtuosoReturn {
  const virtuosoRef = useRef<VirtuosoHandle>(null)
  const scrollerElRef = useRef<HTMLElement | null>(null)

  // ---- window accounting (render-phase, like the container's freshIds) ----
  const windowRef = useRef<WindowEnds | null>(null)
  const prevRowCountRef = useRef(rows.length)
  const firstItemIndexRef = useRef(PREPEND_OFFSET)
  const epochRef = useRef(0)
  const conversationRef = useRef(conversationKey)
  const pendingRef = useRef<PendingJump>(null)
  // Own message appended while scrolled up → glide home (consumed post-commit).
  const ownGlideRef = useRef(false)

  if (windowRef.current === null) {
    windowRef.current = windowEnds(messages)
  } else if (conversationRef.current !== conversationKey) {
    conversationRef.current = conversationKey
    epochRef.current += 1
    firstItemIndexRef.current = PREPEND_OFFSET
    windowRef.current = windowEnds(messages)
    pendingRef.current = null
    ownGlideRef.current = false
  } else {
    const nextEnds = windowEnds(messages)
    const change = classifyWindowChange(windowRef.current, nextEnds)
    if (change !== "none") {
      firstItemIndexRef.current = nextFirstItemIndex(
        firstItemIndexRef.current,
        change,
        prevRowCountRef.current,
        rows.length
      )
      // A swapped window (far jump) — and the FIRST page of an async-loading
      // conversation — re-enter through the initial location instead of
      // letting followOutput glide across the whole just-landed history.
      if (change === "replace" || change === "initial") epochRef.current += 1
      if (change === "append" && !hasMoreNewer) {
        const last = messages[messages.length - 1]
        if (last?.isMine) ownGlideRef.current = true
      }
      windowRef.current = nextEnds
    }
  }
  prevRowCountRef.current = rows.length

  const listKey = `${conversationKey}:${epochRef.current}`

  // Entry location, computed ONCE per remount (Virtuoso only reads
  // initialTopMostItemIndex at mount). A pending far jump wins; the unread
  // divider pins near the top; otherwise land at the latest message.
  const entryRef = useRef<{ key: string; location: ChatEntryLocation } | null>(
    null
  )
  if (entryRef.current?.key !== listKey) {
    const pending = pendingRef.current
    let location: ChatEntryLocation
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
  const [revealed, setRevealed] = useState(false)
  const [stickyIndex, setStickyIndex] = useState<number | null>(null)
  const atBottomRef = useRef(entersAtBottom)
  const revealedRef = useRef(false)
  // Distance from the bottom as of the last real scroll — i.e. BEFORE any
  // growth/resize currently being handled. Virtuoso's atBottom state can flip
  // off from the very growth we're reacting to (when it exceeds the threshold
  // band), so the pin must gate on where the user WAS, not on that state.
  const distanceFromBottomRef = useRef(
    entersAtBottom ? 0 : Number.POSITIVE_INFINITY
  )
  const keyRef = useRef(listKey)
  if (keyRef.current !== listKey) {
    keyRef.current = listKey
    atBottomRef.current = entersAtBottom
    revealedRef.current = false
    distanceFromBottomRef.current = entersAtBottom
      ? 0
      : Number.POSITIVE_INFINITY
    setAtBottom(entersAtBottom)
    setAtTop(true)
    setScrolledUp(false)
    setRevealed(false)
    setStickyIndex(null)
  }

  const handleAtBottomChange = useCallback((isAtBottom: boolean) => {
    atBottomRef.current = isAtBottom
    setAtBottom(isAtBottom)
  }, [])

  const handleAtTopChange = useCallback((isAtTop: boolean) => {
    setAtTop(isAtTop)
  }, [])

  // ---- follow (see UseChatVirtuosoReturn.followOutput for the prop gate) ----
  const follow = useCallback(
    (isAtBottom: boolean) => followDecision(isAtBottom, reducedMotion),
    [reducedMotion]
  )
  const followOutput = atBottom && !hasMoreNewer ? follow : false

  // ---- pagination edges ----
  const handleStartReached = useCallback(() => {
    if (hasMoreOlder && !loadingOlder) loadOlder()
  }, [hasMoreOlder, loadingOlder, loadOlder])

  const handleEndReached = useCallback(() => {
    if (hasMoreNewer && !loadingNewer) loadNewer?.()
  }, [hasMoreNewer, loadingNewer, loadNewer])

  // ---- scrolled-up flag + sticky date (native scroll listener: Virtuoso has
  // no onScroll prop, and atBottomStateChange's band is too narrow for the
  // jump affordance). The sticky index is measured from the rendered items'
  // DOM rects — exact regardless of the Header spinner's height. ----
  const measureRafRef = useRef<number | null>(null)
  const measureScrollState = useCallback(() => {
    // The pin gate updates SYNCHRONOUSLY on every scroll event — deferring it
    // to the rAF leaves a one-frame window where a growth re-pin reads the
    // pre-scroll distance and yanks an escaping reader back to the bottom.
    const sync = scrollerElRef.current
    if (sync) {
      distanceFromBottomRef.current =
        sync.scrollHeight - sync.scrollTop - sync.clientHeight
    }
    if (measureRafRef.current != null) return
    measureRafRef.current = requestAnimationFrame(() => {
      measureRafRef.current = null
      const el = scrollerElRef.current
      if (!el) return
      const distanceFromBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight
      distanceFromBottomRef.current = distanceFromBottom
      setScrolledUp(
        distanceFromBottom > el.clientHeight * SCROLLED_UP_VIEWPORTS
      )
      const viewportTop = el.getBoundingClientRect().top
      let topIndex: number | null = null
      for (const item of el.querySelectorAll("[data-index]")) {
        if (item.getBoundingClientRect().bottom > viewportTop) {
          // firstItemIndex read AT FIRE TIME (the ref): this callback can run
          // a frame after a prepend commit rewrote every data-index — a
          // render-captured value would produce a stale (even negative) index.
          const local =
            Number(item.getAttribute("data-index")) - firstItemIndexRef.current
          topIndex = Number.isFinite(local) ? Math.max(0, local) : null
          break
        }
      }
      setStickyIndex(topIndex)
    })
  }, [])

  // DIRECT bottom pin. NOT `autoscrollToBottom()`: that method only arms a
  // 100ms trap that fires when Virtuoso's atBottom state flips off with cause
  // SIZE_INCREASED — but growth smaller than atBottomThreshold (a textarea
  // line ~24px, a reaction row ~32px vs the 80px band) never flips the state,
  // so the trap sees nothing and the content sits short of the bottom. At the
  // bottom no other scroll writer is active, so assigning scrollHeight is safe
  // (it clamps to the true bottom) — same pin the pre-Virtuoso system used.
  const pinToBottom = useCallback(() => {
    const el = scrollerElRef.current
    if (!el) return
    // Gate on the pre-growth distance (see distanceFromBottomRef), NOT on
    // Virtuoso's atBottom state — a big growth flips that state off before
    // this runs and the pin would wrongly skip.
    if (distanceFromBottomRef.current > AT_BOTTOM_THRESHOLD_PX) return
    el.scrollTop = el.scrollHeight
  }, [])

  // Async image loads change a row's height WITHOUT a re-render — nothing else
  // re-measures the bottom, so re-pin on each load landing.
  const handleCaptureLoad = pinToBottom

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
      if (
        shouldRepinOnGrowth({
          prevHeight: prev.height,
          height,
          prevCount: prev.count,
          count,
          // Pre-growth distance, same reasoning as pinToBottom's own gate.
          atBottom: distanceFromBottomRef.current <= AT_BOTTOM_THRESHOLD_PX,
        })
      ) {
        pinToBottom()
      }
    },
    [pinToBottom]
  )

  // The VIEWPORT shrinking re-pins too: the composer growing (multiline text,
  // reply chip, attachment rows), fullscreen toggles and window resizes hide
  // the last message under the composer without any list change. Instant on
  // purpose — the composer's own growth is the visible motion (WhatsApp).
  const viewportResizeObserverRef = useRef<ResizeObserver | null>(null)
  const observeViewportResize = useCallback(
    (el: HTMLElement | null) => {
      viewportResizeObserverRef.current?.disconnect()
      viewportResizeObserverRef.current = null
      if (!el || typeof ResizeObserver === "undefined") return
      let prevHeight = el.clientHeight
      const observer = new ResizeObserver(() => {
        const height = el.clientHeight
        // Ignore width-only changes and the observer's initial fire.
        if (height === prevHeight) return
        prevHeight = height
        pinToBottom()
      })
      observer.observe(el)
      viewportResizeObserverRef.current = observer
    },
    [pinToBottom]
  )

  // The user taking over beats every re-pin (WhatsApp cancels the follow).
  // An upward wheel tick / touch drag disables the pins IMMEDIATELY — input
  // events land before their scroll event, so a growth re-pin arriving in
  // that gap would read the stale ~0 distance, yank the reader back to the
  // bottom and eat their wheel deltas: with rows re-measuring continuously
  // (PDF thumbnails rendering in), scrolling away became impossible. The next
  // scroll event (or touchend) re-measures the real distance and gluing
  // resumes only if they're genuinely still at the bottom.
  const handleWheel = useCallback((event: WheelEvent) => {
    if (event.deltaY < 0) {
      distanceFromBottomRef.current = Number.POSITIVE_INFINITY
    }
  }, [])
  const handleTouchMove = useCallback(() => {
    distanceFromBottomRef.current = Number.POSITIVE_INFINITY
  }, [])

  const handleScrollerRef = useCallback(
    (el: HTMLElement | Window | null) => {
      const prev = scrollerElRef.current
      if (prev) {
        prev.removeEventListener("scroll", measureScrollState)
        prev.removeEventListener("wheel", handleWheel)
        prev.removeEventListener("touchmove", handleTouchMove)
        prev.removeEventListener("touchend", measureScrollState)
        prev.removeEventListener("load", handleCaptureLoad, true)
      }
      scrollerElRef.current = el instanceof HTMLElement ? el : null
      const next = scrollerElRef.current
      observeViewportResize(next)
      if (next) {
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
        // Capture phase: img `load` doesn't bubble.
        next.addEventListener("load", handleCaptureLoad, true)
      }
    },
    [
      handleCaptureLoad,
      handleTouchMove,
      handleWheel,
      measureScrollState,
      observeViewportResize,
    ]
  )

  // ---- imperative scrolls ----
  const scrollToBottom = useCallback(() => {
    const el = scrollerElRef.current
    if (
      el &&
      el.scrollHeight - el.scrollTop - el.clientHeight >
        el.clientHeight * FAR_TELEPORT_VIEWPORTS
    ) {
      // From very far away, teleport most of the distance and glide the rest.
      el.scrollTop = el.scrollHeight - el.clientHeight * 2
    }
    virtuosoRef.current?.scrollToIndex({
      index: "LAST",
      align: "end",
      behavior: reducedMotion ? "auto" : "smooth",
    })
  }, [reducedMotion])

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
    if (atBottomRef.current) return
    scrollToBottom()
  })

  // ---- reveal + sticky refresh on rendered-window changes ----
  const revealRafRef = useRef<number | null>(null)
  const handleItemsRendered = useCallback(
    (items: ListItem<ChatRow>[]) => {
      if (
        !revealedRef.current &&
        items.length > 0 &&
        revealRafRef.current == null
      ) {
        // No public "initial location reached" callback exists; Virtuoso's
        // align/offset correction lands within a couple of frames of the first
        // rendered window — reveal after two, so the transcript appears
        // already in place (worst case: hidden-then-fade, never a jump).
        revealRafRef.current = requestAnimationFrame(() => {
          revealRafRef.current = requestAnimationFrame(() => {
            revealRafRef.current = null
            revealedRef.current = true
            setRevealed(true)
          })
        })
      }
      measureScrollState()
    },
    [measureScrollState]
  )

  // An empty conversation renders no items — reveal the empty transcript.
  useEffect(() => {
    if (rows.length === 0 && !revealedRef.current) {
      revealedRef.current = true
      setRevealed(true)
    }
  }, [rows.length])

  useEffect(
    () => () => {
      if (measureRafRef.current != null)
        cancelAnimationFrame(measureRafRef.current)
      if (revealRafRef.current != null)
        cancelAnimationFrame(revealRafRef.current)
      viewportResizeObserverRef.current?.disconnect()
    },
    []
  )

  return {
    virtuosoRef,
    listKey,
    firstItemIndex: firstItemIndexRef.current,
    initialLocation,
    followOutput,
    handleScrollerRef,
    handleAtBottomChange,
    handleAtTopChange,
    handleStartReached,
    handleEndReached,
    handleItemsRendered,
    handleTotalListHeightChanged,
    atBottom,
    atTop,
    scrolledUp,
    revealed,
    stickyIndex,
    scrollToBottom,
    scrollToMessage,
    pendBottom,
  }
}
