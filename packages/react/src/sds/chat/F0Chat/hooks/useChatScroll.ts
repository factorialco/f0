import {
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import { type Virtualizer } from "@tanstack/react-virtual"

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
}

type UseChatScrollReturn = {
  /** True when scrolled far enough up to warrant a jump-to-bottom affordance. */
  scrolledUp: boolean
  /** True when the latest messages are visible (used to gate mark-as-read). */
  atBottom: boolean
  /** True when the transcript is scrolled to the very top (drives the header shadow). */
  atTop: boolean
  scrollToBottom: (behavior?: "auto" | "smooth") => void
  handleScroll: () => void
}

const NEAR_BOTTOM_PX = 80
const TOP_TRIGGER_PX = 120

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
}: UseChatScrollOptions): UseChatScrollReturn {
  const [scrolledUp, setScrolledUp] = useState(false)
  const [atBottom, setAtBottom] = useState(true)
  // Whether the viewport is pinned to the very top — the header shadow shows
  // whenever it isn't (i.e. there's scrolled-away content beneath the header).
  const [atTop, setAtTop] = useState(true)
  const nearBottomRef = useRef(true)
  const prevFirstIdRef = useRef<string | null>(messages[0]?.id ?? null)
  const prevLastIdRef = useRef<string | null>(messages.at(-1)?.id ?? null)
  const prevLenRef = useRef(messages.length)
  const didInitialScrollRef = useRef(false)
  // Saved before loading older messages, so we can keep the viewport steady once
  // the prepended page changes every index below the anchor.
  const anchorRef = useRef<{ id: string; delta: number } | null>(null)
  // rAF handle for the post-prepend re-pin loop (see `restoreAnchor`).
  const pinRafRef = useRef<number | null>(null)

  const scrollToBottom = useCallback(
    (behavior: "auto" | "smooth" = "smooth") => {
      if (rows.length > 0) {
        virtualizer.scrollToIndex(rows.length - 1, { align: "end", behavior })
      }
    },
    [virtualizer, rows.length]
  )

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

  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    const isAtBottom = distanceFromBottom < NEAR_BOTTOM_PX
    nearBottomRef.current = isAtBottom
    setAtBottom(isAtBottom)
    setScrolledUp(distanceFromBottom > clientHeight * 0.5)
    setAtTop(scrollTop <= 0)

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

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return

    // Initial auto-scroll to the bottom — but not if we opened straight into an
    // older window (a deep-linked / searched message), where the tail isn't loaded.
    if (!didInitialScrollRef.current && rows.length > 0) {
      if (!hasMoreNewer) {
        virtualizer.scrollToIndex(rows.length - 1, { align: "end" })
        setAtBottom(true)
      }
      // Landing at the bottom of an overflowing transcript means we're not at
      // the top — show the header shadow right away (a programmatic scroll may
      // not fire `onScroll`).
      setAtTop(el.scrollHeight - el.clientHeight <= 0)
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
    } else if (
      appended &&
      !hasMoreNewer &&
      (lastMessage?.isMine || nearBottomRef.current)
    ) {
      // Always follow my own messages; follow incoming ones only if near the
      // bottom (otherwise they accumulate as unread). Never auto-follow while
      // viewing an older window — the "last" row isn't the live tail.
      virtualizer.scrollToIndex(rows.length - 1, { align: "end" })
      setAtBottom(true)
    }

    prevFirstIdRef.current = firstId
    prevLastIdRef.current = lastMessage?.id ?? null
    prevLenRef.current = messages.length
  }, [
    messages,
    rows.length,
    viewportRef,
    virtualizer,
    indexById,
    hasMoreNewer,
    restoreAnchor,
  ])

  // Stop the re-pin loop if the list unmounts mid-restore.
  useLayoutEffect(
    () => () => {
      if (pinRafRef.current != null) cancelAnimationFrame(pinRafRef.current)
    },
    []
  )

  return { scrolledUp, atBottom, atTop, scrollToBottom, handleScroll }
}
