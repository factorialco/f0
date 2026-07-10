import { type Virtualizer } from "@tanstack/react-virtual"
import {
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import { type ChatRow } from "../utils/grouping"

type ScrollMessage = { id: string; isMine?: boolean }

type UseChatScrollOptions = {
  viewportRef: RefObject<HTMLDivElement | null>
  virtualizer: Virtualizer<HTMLDivElement, Element>
  rows: ChatRow[]
  /** message id → row index, for restoring the scroll anchor after a prepend. */
  indexById: Map<string, number>
  /** Ordered messages — used to detect append (stick) vs prepend (retain). */
  messages: ScrollMessage[]
  hasMoreOlder: boolean
  loadingOlder: boolean
  onReachTop: () => void
  /** Newer-direction pagination — set after jumping to an old message. */
  hasMoreNewer?: boolean
  loadingNewer?: boolean
  onReachBottom?: () => void
  /**
   * Frozen "new messages" divider id (the first unread message). When set on
   * entry, the transcript opens with the divider pinned to the top so the user
   * reads down through the unread run; otherwise it opens at the latest message.
   */
  unreadDividerId?: string | null
  /**
   * Identity of the open conversation (the channel id). The message list isn't
   * remounted when you switch conversations, so this is how the hook knows to
   * re-run the initial scroll (land at the latest / pin the unread divider)
   * instead of treating the new conversation's messages as an append/prepend.
   */
  conversationKey?: string | null
  /** Skip every eased scroll (glides become instant repositions). */
  reducedMotion?: boolean
}

type UseChatScrollReturn = {
  /** True when scrolled far enough up to warrant a jump-to-bottom affordance. */
  scrolledUp: boolean
  /** True when the latest messages are visible (used to gate mark-as-read). */
  atBottom: boolean
  /** True when the transcript is scrolled to the very top (drives the header shadow). */
  atTop: boolean
  /**
   * True once the entry positioning (land at latest / pin the divider) has
   * SETTLED. Drives the transcript reveal, and gates the bottom-pin effect so
   * it can't fight the settle loop during those first frames.
   */
  entrySettled: boolean
  /** Ref twin of `entrySettled`, readable synchronously inside layout effects. */
  entrySettledRef: RefObject<boolean>
  /** True while a smooth return-to-bottom glide owns scrollTop. */
  smoothInFlightRef: RefObject<boolean>
  /** Abort an in-flight glide — call when the user takes over (wheel/touch). */
  cancelSmoothScroll: () => void
  scrollToBottom: (behavior?: "auto" | "smooth") => void
  /**
   * Scroll a row into view and keep re-targeting it across frames until the
   * estimate→measured row-height settle stops moving the offset (so a jump to a
   * just-loaded message lands precisely instead of mid-list). Used for reply /
   * search jumps and the jump-to-bottom button.
   */
  scrollToIndexSettled: (
    index: number,
    align: "start" | "center" | "end",
    startOffset?: number
  ) => void
  handleScroll: () => void
}

const NEAR_BOTTOM_PX = 80
const TOP_TRIGGER_PX = 120
// Gap left above the unread divider on entry so it clears the sticky date pill
// (which floats near the top) with breathing room instead of colliding with it.
const UNREAD_DIVIDER_TOP_GAP = 88
/** Return-to-bottom glide duration (sending while scrolled up, jump button). */
const SMOOTH_RETURN_MS = 300
/** Farther than this (in viewports), teleport near the bottom and glide the
 * rest (Telegram) instead of easing across the whole distance. */
const FAR_TELEPORT_VIEWPORTS = 1.5
/** Hard frame cap for the glide loop — fake timers freeze rAF timestamps, so
 * the time-based exit never fires in tests without this. */
const SMOOTH_FRAME_CAP = 40

/**
 * Scroll behaviour for the virtualized message list. The scroll element keeps
 * the full virtual height (the spacer), so the near-bottom / scrolled-up math is
 * unchanged; only the *targeting* goes through the virtualizer:
 *  - initial + auto-stick on append → `scrollToIndex(last, {align:"end"})`
 *  - infinite-scroll-up (load older) with anchor-based position retention: before
 *    triggering, remember the first visible message and its on-screen offset; once
 *    the older page is prepended, restore that message to the same spot.
 *  - `atBottom` flag the container combines with hover to mark messages as read.
 */
export function useChatScroll({
  viewportRef,
  virtualizer,
  rows,
  indexById,
  messages,
  hasMoreOlder,
  loadingOlder,
  onReachTop,
  hasMoreNewer = false,
  loadingNewer = false,
  onReachBottom,
  unreadDividerId = null,
  conversationKey = null,
  reducedMotion = false,
}: UseChatScrollOptions): UseChatScrollReturn {
  const [scrolledUp, setScrolledUp] = useState(false)
  // A divider entry opens pinned to the TOP of the unread run — starting
  // `atBottom` true there would let bottom-pinned behaviours (the pin effect,
  // markRead) fire against the entry positioning.
  const [atBottom, setAtBottom] = useState(() => unreadDividerId == null)
  // Whether the viewport is pinned to the very top — the header shadow shows
  // whenever it isn't (i.e. there's scrolled-away content beneath the header).
  const [atTop, setAtTop] = useState(true)
  const nearBottomRef = useRef(true)
  const prevFirstIdRef = useRef<string | null>(messages[0]?.id ?? null)
  const prevLastIdRef = useRef<string | null>(messages.at(-1)?.id ?? null)
  const prevLenRef = useRef(messages.length)
  const didInitialScrollRef = useRef(false)
  // Tracks the open conversation so we re-run the initial scroll when it
  // changes (the list isn't remounted between conversations).
  const conversationKeyRef = useRef(conversationKey)
  // Saved before loading older messages, so we can keep the viewport steady once
  // the prepended page changes every index below the anchor.
  const anchorRef = useRef<{ id: string; delta: number } | null>(null)
  // rAF handle for the post-prepend re-pin loop (see `restoreAnchor`).
  const pinRafRef = useRef<number | null>(null)
  // rAF handle for the settle loop (see `scrollToIndexSettled`).
  const initialRafRef = useRef<number | null>(null)
  // Entry positioning settled — state drives the reveal, the ref twin lets
  // sibling layout effects (the bottom pin) read it synchronously.
  const [entrySettled, setEntrySettled] = useState(false)
  const entrySettledRef = useRef(false)
  // Return-to-bottom glide (see `smoothScrollToBottom`).
  const smoothRafRef = useRef<number | null>(null)
  const smoothInFlightRef = useRef(false)

  const cancelSmoothScroll = useCallback(() => {
    if (smoothRafRef.current != null) cancelAnimationFrame(smoothRafRef.current)
    smoothRafRef.current = null
    smoothInFlightRef.current = false
  }, [])

  // Pin the saved anchor message back to its on-screen offset. Returns the
  // applied scrollTop (or null when there's nothing to pin) so the caller can
  // tell when it has stabilised.
  const restoreAnchor = useCallback((): number | null => {
    const el = viewportRef.current
    const anchor = anchorRef.current
    if (!el || !anchor) return null
    const newIndex = indexById.get(anchor.id)
    if (newIndex == null) return null
    const start = virtualizer.getOffsetForIndex(newIndex, "start")?.[0] ?? 0
    const target = start - anchor.delta
    el.scrollTop = target
    return target
  }, [viewportRef, indexById, virtualizer])

  // First message currently at the top of the viewport (skips separators/divider).
  const firstVisibleMessageIndex = useCallback(
    (scrollTop: number): number | null => {
      const item = virtualizer.getVirtualItemForOffset(scrollTop)
      if (!item) return null
      for (let i = item.index; i < rows.length; i++) {
        if (rows[i].type === "message") return i
      }
      return null
    },
    [virtualizer, rows]
  )

  // Recompute the scroll-state flags from the DOM (no pagination side effects).
  // Shared by `handleScroll` and the initial settle so opening a conversation
  // reflects the real position (e.g. divider-at-top → scrolledUp shows the
  // "N unread" affordance) without spuriously paging on open.
  const syncScrollFlags = useCallback(() => {
    const el = viewportRef.current
    if (!el) return { scrollTop: 0, distanceFromBottom: 0 }
    const { scrollTop, scrollHeight, clientHeight } = el
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    const isAtBottom = distanceFromBottom < NEAR_BOTTOM_PX
    nearBottomRef.current = isAtBottom
    setAtBottom(isAtBottom)
    setScrolledUp(distanceFromBottom > clientHeight * 0.5)
    setAtTop(scrollTop <= 0)
    return { scrollTop, distanceFromBottom }
  }, [viewportRef])

  // Eased return to the bottom (sending while scrolled up, the jump button).
  // Own rAF loop instead of the virtualizer's native smooth scroll, which
  // eases across stale ESTIMATED row heights and lands short: the target is
  // re-read every frame, so rows measuring in mid-glide are absorbed, and the
  // loop ends with a hard pin. From very far away, teleport to a viewport
  // short of the bottom first and glide only the last stretch (Telegram).
  const smoothScrollToBottom = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    cancelSmoothScroll()
    const maxTop = () => el.scrollHeight - el.clientHeight
    if (maxTop() - el.scrollTop > el.clientHeight * FAR_TELEPORT_VIEWPORTS) {
      el.scrollTop = el.scrollHeight - el.clientHeight * 2
    }
    const startTop = el.scrollTop
    const startTime = performance.now()
    let frames = 0
    smoothInFlightRef.current = true
    const tick = (now: number) => {
      frames += 1
      // Clamped low too: stubbed rAF clocks (tests) can hand out now < start.
      const t = Math.min(1, Math.max(0, (now - startTime) / SMOOTH_RETURN_MS))
      const eased = 1 - Math.pow(1 - t, 3)
      el.scrollTop = startTop + (maxTop() - startTop) * eased
      if (t >= 1 || frames >= SMOOTH_FRAME_CAP) {
        // scrollHeight is the full virtual height; assigning it clamps to the
        // true bottom (same hard pin as the settle loop).
        el.scrollTop = el.scrollHeight
        smoothInFlightRef.current = false
        smoothRafRef.current = null
        syncScrollFlags()
        return
      }
      smoothRafRef.current = requestAnimationFrame(tick)
    }
    smoothRafRef.current = requestAnimationFrame(tick)
  }, [viewportRef, syncScrollFlags, cancelSmoothScroll])

  const scrollToBottom = useCallback(
    (behavior: "auto" | "smooth" = "smooth") => {
      if (rows.length === 0) return
      if (behavior === "smooth" && !reducedMotion) {
        smoothScrollToBottom()
      } else {
        virtualizer.scrollToIndex(rows.length - 1, { align: "end" })
      }
    },
    [virtualizer, rows.length, reducedMotion, smoothScrollToBottom]
  )

  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, distanceFromBottom } = syncScrollFlags()

    if (scrollTop < TOP_TRIGGER_PX && hasMoreOlder && !loadingOlder) {
      // Anchor on the first visible message so the prepended page doesn't jump.
      const index = firstVisibleMessageIndex(scrollTop)
      const row = index != null ? rows[index] : null
      if (row && row.type === "message") {
        const start = virtualizer.getOffsetForIndex(index!, "start")?.[0] ?? 0
        anchorRef.current = { id: row.message.id, delta: start - scrollTop }
      }
      onReachTop()
    }

    // After jumping to an old message the tail isn't loaded; nearing the bottom
    // pages forward. Appending below doesn't shift the viewport, so no anchor.
    if (distanceFromBottom < TOP_TRIGGER_PX && hasMoreNewer && !loadingNewer) {
      onReachBottom?.()
    }
  }, [
    viewportRef,
    syncScrollFlags,
    hasMoreOlder,
    loadingOlder,
    onReachTop,
    hasMoreNewer,
    loadingNewer,
    onReachBottom,
    firstVisibleMessageIndex,
    rows,
    virtualizer,
  ])

  // Settle a targeted scroll: re-issue `scrollToIndex` each frame until the
  // resulting scrollTop holds steady (2 frames) or a cap — absorbing the
  // estimate→measured row-height settle that otherwise lands a one-shot scroll
  // mid-list. Same shape as the prepend re-pin loop. Syncs the flags when done.
  // For an "end" target it also hard-pins to the true bottom once settled, so
  // late-measuring rows (images, tall replies) can't leave it short of the end.
  const scrollToIndexSettled = useCallback(
    (
      index: number,
      align: "start" | "center" | "end",
      startOffset = 0,
      onSettled?: () => void
    ) => {
      const el = viewportRef.current
      if (!el || index < 0) return
      if (initialRafRef.current != null) {
        cancelAnimationFrame(initialRafRef.current)
      }
      let prev: number | null = null
      let stableFrames = 0
      let frames = 0
      const tick = () => {
        virtualizer.scrollToIndex(index, { align })
        // Leave a gap above a "start"-aligned row so it isn't tucked under the
        // sticky date pill / header. Scrolling up a touch drops the row down.
        if (align === "start" && startOffset > 0) {
          el.scrollTop = Math.max(0, el.scrollTop - startOffset)
        }
        const next = el.scrollTop
        frames += 1
        if (prev != null && Math.abs(next - prev) < 1) stableFrames += 1
        else stableFrames = 0
        prev = next
        if (stableFrames >= 2 || frames >= 12) {
          initialRafRef.current = null
          if (align === "end") {
            // scrollHeight is the full virtual height; assigning past the max
            // clamps to the true bottom (no-op when already there).
            const distanceFromBottom =
              el.scrollHeight - el.scrollTop - el.clientHeight
            if (distanceFromBottom > 1) el.scrollTop = el.scrollHeight
          }
          syncScrollFlags()
          onSettled?.()
          return
        }
        initialRafRef.current = requestAnimationFrame(tick)
      }
      tick()
    },
    [viewportRef, virtualizer, syncScrollFlags]
  )

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return

    // Conversation switched (the list isn't remounted): re-arm the initial
    // scroll and drop stale state so the new conversation lands at its latest
    // message / unread divider instead of being treated as an append/prepend.
    if (conversationKeyRef.current !== conversationKey) {
      conversationKeyRef.current = conversationKey
      didInitialScrollRef.current = false
      anchorRef.current = null
      if (pinRafRef.current != null) {
        cancelAnimationFrame(pinRafRef.current)
        pinRafRef.current = null
      }
      if (initialRafRef.current != null) {
        cancelAnimationFrame(initialRafRef.current)
        initialRafRef.current = null
      }
      cancelSmoothScroll()
      // Hide + gate again until the new conversation's entry has settled. The
      // setState in a layout effect re-renders before paint — no flash.
      entrySettledRef.current = false
      setEntrySettled(false)
      // Don't let a message arriving mid-load wrongly stick until we've landed.
      nearBottomRef.current = false
    }

    // Initial scroll. Land at the latest message, unless there's an unread
    // divider — then pin it to the top so the user reads down through the unread
    // run. Skip when opening straight into an older window (a deep-linked /
    // searched message), where the tail isn't loaded. The settle loop re-targets
    // across frames so the estimate→measured height settle doesn't land it
    // mid-list; it syncs the scroll flags when done, then `markSettled` reveals
    // the transcript and un-gates the bottom-pin effect.
    if (!didInitialScrollRef.current && rows.length > 0) {
      const markSettled = () => {
        entrySettledRef.current = true
        setEntrySettled(true)
      }
      if (!hasMoreNewer) {
        const dividerIndex =
          unreadDividerId != null
            ? rows.findIndex((row) => row.type === "divider")
            : -1
        if (dividerIndex >= 0) {
          // An ambient append landing mid-settle must not trigger the
          // follow-to-bottom branch while we're targeting the divider.
          nearBottomRef.current = false
          scrollToIndexSettled(
            dividerIndex,
            "start",
            UNREAD_DIVIDER_TOP_GAP,
            markSettled
          )
        } else {
          scrollToIndexSettled(rows.length - 1, "end", 0, markSettled)
        }
      } else {
        // Header shadow right away (a programmatic scroll may not fire onScroll).
        setAtTop(el.scrollHeight - el.clientHeight <= 0)
        markSettled()
      }
      didInitialScrollRef.current = true
      prevFirstIdRef.current = messages[0]?.id ?? null
      prevLastIdRef.current = messages.at(-1)?.id ?? null
      prevLenRef.current = messages.length
      return
    }

    const firstId = messages[0]?.id ?? null
    const lastMessage = messages.at(-1)
    const grew = messages.length > prevLenRef.current
    const prepended = grew && firstId !== prevFirstIdRef.current
    const appended = grew && lastMessage?.id !== prevLastIdRef.current

    if (prepended && anchorRef.current) {
      // Pin once now (estimate-based), then keep re-pinning each frame until the
      // offset stops moving — the prepended rows start at their estimated height
      // and only settle to their measured height a frame or two later, and
      // without this re-pin that settle reads as a small jump.
      if (pinRafRef.current != null) cancelAnimationFrame(pinRafRef.current)
      let prev = restoreAnchor()
      let stableFrames = 0
      let frames = 0
      const tick = () => {
        const next = restoreAnchor()
        frames += 1
        if (next != null && prev != null && Math.abs(next - prev) < 1) {
          stableFrames += 1
        } else {
          stableFrames = 0
        }
        prev = next
        // Stop once stable for 2 frames (measurements settled) or after a cap.
        if (next == null || stableFrames >= 2 || frames >= 12) {
          anchorRef.current = null
          pinRafRef.current = null
          return
        }
        pinRafRef.current = requestAnimationFrame(tick)
      }
      pinRafRef.current = requestAnimationFrame(tick)
    } else if (appended && !hasMoreNewer) {
      // Never auto-follow while viewing an older window — the "last" row isn't
      // the live tail.
      const distance = el.scrollHeight - el.scrollTop - el.clientHeight
      if (nearBottomRef.current || distance < NEAR_BOTTOM_PX) {
        // At/near the bottom: DON'T reposition here — the container's pin +
        // slide layer own the motion, and they need the viewport displacement
        // intact to animate it (an instant scrollToIndex here would eat the
        // delta and the arrival would hard-jump). Just assert the stick.
        setAtBottom(true)
      } else if (lastMessage?.isMine) {
        // Sent while scrolled up: glide home instead of teleporting. No
        // setAtBottom(true) here — flags sync on arrival, and an early
        // atBottom would let the pin effect grab mid-glide.
        if (reducedMotion) {
          virtualizer.scrollToIndex(rows.length - 1, { align: "end" })
          setAtBottom(true)
        } else {
          smoothScrollToBottom()
        }
      }
      // Incoming while scrolled up: no movement — the unread affordance
      // (jump button + count) is the signal.
    }

    prevFirstIdRef.current = firstId
    prevLastIdRef.current = lastMessage?.id ?? null
    prevLenRef.current = messages.length
  }, [
    messages,
    rows,
    viewportRef,
    virtualizer,
    indexById,
    hasMoreNewer,
    unreadDividerId,
    conversationKey,
    scrollToIndexSettled,
    restoreAnchor,
    reducedMotion,
    smoothScrollToBottom,
    cancelSmoothScroll,
  ])

  // Re-pin the bottom when the VIEWPORT resizes — the composer growing
  // (multiline text, reply chip, attachment rows), fullscreen toggles and
  // window resizes shrink/grow the transcript without changing the virtual
  // content height, so nothing else re-pins and the last message would slip
  // under the composer. Instant on purpose: the composer growth itself is the
  // visible motion (WhatsApp). Scrolled up → hold the view steady (no-op).
  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el || typeof ResizeObserver === "undefined") return
    let prevHeight = el.clientHeight
    const ro = new ResizeObserver(() => {
      const height = el.clientHeight
      // Ignore width-only changes and the observer's initial fire.
      if (height === prevHeight) return
      prevHeight = height
      if (!entrySettledRef.current) return
      if (nearBottomRef.current) {
        el.scrollTop = el.scrollHeight
        syncScrollFlags()
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [viewportRef, syncScrollFlags])

  // Stop the re-pin / initial-settle / glide loops if the list unmounts
  // mid-flight.
  useLayoutEffect(
    () => () => {
      if (pinRafRef.current != null) cancelAnimationFrame(pinRafRef.current)
      if (initialRafRef.current != null)
        cancelAnimationFrame(initialRafRef.current)
      if (smoothRafRef.current != null)
        cancelAnimationFrame(smoothRafRef.current)
    },
    []
  )

  return {
    scrolledUp,
    atBottom,
    atTop,
    entrySettled,
    entrySettledRef,
    smoothInFlightRef,
    cancelSmoothScroll,
    scrollToBottom,
    scrollToIndexSettled,
    handleScroll,
  }
}
