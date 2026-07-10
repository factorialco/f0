import {
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { useVirtualizer } from "@tanstack/react-virtual"
import { animate, AnimatePresence, motion, useMotionValue } from "motion/react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import { ScrollShadow } from "@/sds/ai/F0AiMessagesContainer/components/ScrollShadow"

import { useChatJump } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { LATEST } from "../types"
import { type ChatRow, flattenChatRows } from "../utils/grouping"
import { useChatScroll } from "../hooks/useChatScroll"
import { ChatMessageRowRenderer } from "./ChatMessageRowRenderer"
import { DateTimeSeparator } from "./DateTimeSeparator"

/** How long the typing bubble fades before its row is removed — also the grace
 * window in which resumed typing keeps the same bubble (no re-enter). */
const TYPING_EXIT_MS = 250

/** Largest bottom-content growth/shrink (px) smoothed by the slide animation —
 * beyond it (page loads, window swaps) the pin re-anchors instantly. */
const MAX_SLIDE_PX = 400

const estimateRowSize = (row: ChatRow): number =>
  row.type === "message" ? 76 : row.type === "typing" ? 60 : 36

/** Date of the row at the top of the viewport, for the sticky header. */
const dateForRow = (rows: ChatRow[], from: number): string | null => {
  for (let i = from; i < rows.length; i++) {
    const row = rows[i]
    if (row.type === "message") return row.message.createdAt
    if (row.type === "separator") return row.at
  }
  return null
}

/** Scrollable transcript: virtualized separators, messages, the unread divider,
 * a sticky date header, pagination and a jump-to-bottom / unread-count affordance. */
export const ChatMessagesContainer = (): ReactNode => {
  const i18n = useI18n()
  const {
    messages,
    channel,
    typingUsers,
    hasMoreOlder,
    loadingOlder,
    loadOlder,
    hasMoreNewer,
    loadingNewer,
    loadNewer,
    loadMessageContext,
    unreadCount,
    firstUnreadId,
    markRead,
  } = useF0Chat()
  const reducedMotion = useReducedMotion()
  const isGroup = channel.type === "group"

  const viewportRef = useRef<HTMLDivElement>(null)
  const { registerScrollToMessage } = useChatJump()

  // "Seen everything" = the latest messages are visible AND the pointer is over
  // the chat. Only then do we mark as read.
  const [hovering, setHovering] = useState(false)

  // The "new messages" divider is captured once on entering a conversation and
  // then frozen (Telegram-style): it stays where the unread run began — through
  // reading AND sending — and only goes away when you leave and come back
  // (re-snapshotted from the new conversation's `firstUnreadId`). Reading the
  // messages — which zeroes `firstUnreadId` via `markRead` — must NOT move or
  // hide it.
  const [dividerId, setDividerId] = useState<string | null>(firstUnreadId)
  const dividerChannelRef = useRef(channel.id)

  // Re-snapshot the unread anchor synchronously when the conversation changes
  // (leaving and coming back). Done during render — not in an effect — so the
  // new divider is in place before the scroll hook's layout effect reads it
  // (an effect would run a frame later and the initial scroll would miss it).
  if (dividerChannelRef.current !== channel.id) {
    dividerChannelRef.current = channel.id
    setDividerId(firstUnreadId)
  }

  const { rows, indexById } = useMemo(
    () => flattenChatRows(messages, { dividerId }),
    [messages, dividerId]
  )

  // Typing exit hysteresis: when the writer pauses, the dots row is NOT dropped
  // immediately — it stays for TYPING_EXIT_MS with `typingLeaving` so the bubble
  // fades smoothly, and typing resumed within the window keeps the same bubble
  // (no pop-out/pop-in on every pause). The leaving flag is flipped during
  // render (state-from-props adjustment) so the row never unmounts for a frame
  // between "stopped" and "leaving".
  //
  // EXCEPT when the pause is because the message just LANDED: then the bubble
  // must visually replace the dots in the same commit (WhatsApp) — a leaving
  // fade would park ghost dots under the new message for 250ms. The net height
  // change of that swap is smoothed by the slide layer below.
  //
  // Transports deliver typing_stop and message.new as SEPARATE events in any
  // order (Stream: one forceRender per websocket packet), so three shapes are
  // handled: same tick (both in one commit), stop-then-message (cancel the
  // leaving fade) and message-then-stop (the author is still in `typingUsers`
  // when their bubble lands — suppress them locally until their stop arrives,
  // otherwise their dots ghost under the new message for the inter-event gap).
  const lastMessage = messages[messages.length - 1]
  const prevLastMsgIdRef = useRef<string | null>(lastMessage?.id ?? null)
  const suppressedTypersRef = useRef<Set<string>>(new Set())
  // A suppression lives until the runtime actually drops the user (their
  // typing_stop landed) — their next typing_start then shows dots again.
  if (suppressedTypersRef.current.size > 0) {
    for (const id of suppressedTypersRef.current) {
      if (!typingUsers.some((u) => u.id === id)) {
        suppressedTypersRef.current.delete(id)
      }
    }
  }
  if (
    lastMessage != null &&
    lastMessage.id !== prevLastMsgIdRef.current &&
    !lastMessage.isMine &&
    typingUsers.some((u) => u.id === lastMessage.author.id)
  ) {
    suppressedTypersRef.current.add(lastMessage.author.id)
  }
  const visibleTypingUsers =
    suppressedTypersRef.current.size > 0
      ? typingUsers.filter((u) => !suppressedTypersRef.current.has(u.id))
      : typingUsers

  const typingActive = visibleTypingUsers.length > 0
  const [typingLeaving, setTypingLeaving] = useState(false)
  const prevTypingActiveRef = useRef(typingActive)
  // Last non-empty typing users, so the bubble still has faces while it leaves.
  const lastTypingUsersRef = useRef(visibleTypingUsers)
  if (typingActive) lastTypingUsersRef.current = visibleTypingUsers

  // A new incoming message whose author was (just) typing — the dots' message.
  const appendedFromTyper =
    lastMessage != null &&
    lastMessage.id !== prevLastMsgIdRef.current &&
    !lastMessage.isMine &&
    lastTypingUsersRef.current.some((u) => u.id === lastMessage.author.id)

  if (prevTypingActiveRef.current !== typingActive) {
    prevTypingActiveRef.current = typingActive
    // Swap: the typer's message landed as (or just before) their dots cleared —
    // remove the row in this same commit, no hysteresis.
    setTypingLeaving(!typingActive && !reducedMotion && !appendedFromTyper)
  } else if (typingLeaving && appendedFromTyper) {
    // Staggered swap: typing_stop arrived a tick before the message (real
    // backends do this) — cancel the leaving fade mid-window.
    setTypingLeaving(false)
  }
  prevLastMsgIdRef.current = lastMessage?.id ?? null

  useEffect(() => {
    if (!typingLeaving) return
    const timer = setTimeout(() => setTypingLeaving(false), TYPING_EXIT_MS)
    return () => clearTimeout(timer)
  }, [typingLeaving])

  // A typing indicator is an extra incoming "dots" bubble at the very end of the
  // list while someone is writing — or just stopped (leaving). Not part of the
  // message-derived rows.
  const showTypingRow = typingActive || typingLeaving
  const displayRows = useMemo<ChatRow[]>(
    () =>
      showTypingRow
        ? [
            ...rows,
            {
              type: "typing",
              key: "typing",
              users: typingActive
                ? visibleTypingUsers
                : lastTypingUsersRef.current,
            },
          ]
        : rows,
    [rows, visibleTypingUsers, typingActive, showTypingRow]
  )

  const getScrollElement = useCallback(() => viewportRef.current, [])
  const estimateSize = useCallback(
    (i: number) => estimateRowSize(displayRows[i]),
    [displayRows]
  )
  const getItemKey = useCallback(
    (i: number) => displayRows[i].key,
    [displayRows]
  )

  const virtualizer = useVirtualizer({
    count: displayRows.length,
    getScrollElement,
    estimateSize,
    getItemKey,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (el) => Math.round(el.getBoundingClientRect().height),
    overscan: 8,
  })

  const {
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
  } = useChatScroll({
    viewportRef,
    virtualizer,
    rows: displayRows,
    indexById,
    messages,
    hasMoreOlder,
    loadingOlder,
    onReachTop: loadOlder,
    hasMoreNewer,
    loadingNewer,
    onReachBottom: loadNewer,
    unreadDividerId: dividerId,
    conversationKey: channel.id,
    reducedMotion,
  })

  // Jump targeting (reply quotes, search hits, back-to-latest). A jump may land
  // on a message that isn't loaded yet (a far-back search hit pulled in by
  // `loadMessageContext`): we record it as pending and resolve once it appears
  // in `indexById` — avoids the race where the scroll fires before the loaded
  // window has updated.
  const pendingScrollRef = useRef<
    { kind: "id"; id: string } | { kind: "bottom" } | null
  >(null)

  const resolvePendingScroll = useCallback(() => {
    const pending = pendingScrollRef.current
    if (!pending) return
    if (pending.kind === "bottom") {
      if (displayRows.length > 0) {
        scrollToIndexSettled(displayRows.length - 1, "end")
        pendingScrollRef.current = null
      }
      return
    }
    const index = indexById.get(pending.id)
    if (index != null) {
      // Settle the jump so the estimate→measured height of the just-loaded rows
      // doesn't leave it mid-list.
      scrollToIndexSettled(index, "center")
      pendingScrollRef.current = null
    }
  }, [indexById, scrollToIndexSettled, displayRows.length])

  // Retry any pending jump after the loaded window changes (e.g. once
  // `loadMessageContext` brought the target in).
  useEffect(resolvePendingScroll, [resolvePendingScroll])

  useEffect(() => {
    registerScrollToMessage((id) => {
      pendingScrollRef.current = { kind: "id", id }
      resolvePendingScroll()
    })
  }, [registerScrollToMessage, resolvePendingScroll])

  // Jump-to-bottom: when newer messages aren't loaded (we're in an old window),
  // reload the live tail first, then stick to the bottom once it lands.
  const jumpToBottom = useCallback(() => {
    if (hasMoreNewer && loadMessageContext) {
      pendingScrollRef.current = { kind: "bottom" }
      void loadMessageContext(LATEST)
    } else {
      scrollToBottom()
    }
  }, [hasMoreNewer, loadMessageContext, scrollToBottom])

  const seeingAll = atBottom && hovering

  useEffect(() => {
    if (seeingAll && unreadCount > 0) markRead?.()
  }, [seeingAll, unreadCount, markRead])

  // Latest "at bottom" reading for the pin layout effect, so it doesn't re-run
  // on every scroll-state change.
  const atBottomRef = useRef(atBottom)
  atBottomRef.current = atBottom

  // Keep the bottom pinned while we're at the bottom as the content at the end
  // grows or shrinks (a typing bubble appearing/leaving, a sent message landing,
  // a reaction row growing a bubble, images measuring in). The pin itself is
  // instant (scrollHeight clamps to the true bottom); the displacement is then
  // SMOOTHED by `slideY`: the rows are offset by the viewport's actual
  // displacement (back to where they just were on screen) and SPRUNG to 0, so
  // the transcript slides WhatsApp-style instead of jumping. A critically-
  // damped spring — not a tween — because rapid-fire appends retarget it
  // mid-flight and a spring carries its velocity across retargets (a tween
  // restarts from zero: the stutter). Every post-entry delta slides — appends,
  // the typing→message swap, reactions, edits, images settling — the entry
  // gate is what keeps the conversation-open re-measures from reading as a
  // phantom scroll. Large deltas (page loads, window swaps) and reduced motion
  // skip the slide. Also held while a return-to-bottom glide owns scrollTop.
  const slideY = useMotionValue(0)
  const slideAnimRef = useRef<ReturnType<typeof animate> | null>(null)
  const prevTotalRef = useRef<number | null>(null)
  const slideChannelRef = useRef(channel.id)
  const totalSize = virtualizer.getTotalSize()
  useLayoutEffect(() => {
    const el = viewportRef.current
    const prevTotal = prevTotalRef.current
    const sameConversation = slideChannelRef.current === channel.id
    prevTotalRef.current = totalSize
    if (!sameConversation) {
      slideChannelRef.current = channel.id
      // Kill any in-flight slide from the conversation we just left.
      slideAnimRef.current?.stop()
      slideY.jump(0)
    }
    if (!entrySettledRef.current) return
    if (smoothInFlightRef.current) return
    if (!el || !atBottomRef.current || displayRows.length === 0) return

    // Pin, measuring the ACTUAL viewport displacement — not the totalSize
    // delta — so someone parked 40-80px up (still "at bottom") gets their
    // offset folded into the slide instead of a visible micro-teleport.
    const before = el.scrollTop
    el.scrollTop = el.scrollHeight
    const visualDelta = el.scrollTop - before

    if (reducedMotion || !sameConversation || prevTotal === null) return
    if (visualDelta !== 0 && Math.abs(visualDelta) <= MAX_SLIDE_PX) {
      // Preserve momentum across retargets: capture the velocity BEFORE the
      // reframe (.set() would read the jump as one-frame motion and poison
      // it), reframe with .jump() (zeroes velocity), then hand the real
      // velocity to the spring. Clamp the ACCUMULATED offset — a burst can
      // stack deltas past the cap and expose blank space below the last row.
      const velocity = slideY.getVelocity()
      slideY.jump(
        Math.min(
          MAX_SLIDE_PX,
          Math.max(-MAX_SLIDE_PX, slideY.get() + visualDelta)
        )
      )
      slideAnimRef.current?.stop()
      slideAnimRef.current = animate(slideY, 0, {
        // ζ ≈ 1.0 (critically damped): no overshoot, ~280ms perceived settle.
        type: "spring",
        stiffness: 320,
        damping: 36,
        mass: 1,
        velocity,
        restDelta: 0.5,
        restSpeed: 10,
      })
    }
  }, [totalSize, displayRows.length, channel.id, reducedMotion, slideY])

  // Seed the "already shown" set on first render with messages — only genuinely
  // new arrivals (not in the set) animate in. Mutated by the row renderer at mount.
  const animatedIdsRef = useRef<Set<string> | null>(null)
  if (animatedIdsRef.current === null && messages.length > 0) {
    animatedIdsRef.current = new Set(messages.map((m) => m.id))
  }
  const animatedIds = animatedIdsRef.current ?? EMPTY_SET

  const virtualItems = virtualizer.getVirtualItems()

  // Sticky date pill: the date of the top-most visible row.
  const topItem = virtualItems[0]
  const stickyDate = topItem ? dateForRow(displayRows, topItem.index) : null

  // Show the affordance when scrolled up, or whenever the live tail isn't loaded
  // (after a far-back jump) so there's always a way back to the latest messages.
  const showButton = scrolledUp || hasMoreNewer

  return (
    <div
      className="relative min-h-0 flex-1"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        ref={viewportRef}
        onScroll={handleScroll}
        // The user taking over (wheel/touch) aborts any return-to-bottom glide;
        // a wheel UP with a slide in flight fast-tracks the transform out so
        // content stops moving under someone who's trying to read (WhatsApp
        // cancels the follow). Wheel down mid-slide composes fine — leave it.
        onWheel={(e) => {
          cancelSmoothScroll()
          if (e.deltaY < 0 && slideY.get() !== 0) {
            slideAnimRef.current?.stop()
            slideAnimRef.current = animate(slideY, 0, {
              duration: 0.08,
              ease: "easeOut",
            })
          }
        }}
        onTouchMove={cancelSmoothScroll}
        className={cn(
          "absolute inset-0 overflow-y-auto px-4",
          // Hidden (opacity keeps layout + the a11y tree, so the virtualizer
          // measures normally) until the entry positioning settles, then a
          // short fade — the transcript appears already in place, zero motion.
          !reducedMotion && "transition-opacity duration-100",
          entrySettled ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className="relative mx-auto w-full max-w-content"
          style={{ height: virtualizer.getTotalSize() }}
        >
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
            }}
          >
            {/* Slide layer: offset by the bottom-growth delta and eased back to
                0 by the pin effect, so appended content pushes the transcript
                up smoothly (see the layout effect above). */}
            <motion.div style={{ y: slideY }}>
              {virtualItems.map((vi) => (
                <div
                  key={vi.key}
                  data-index={vi.index}
                  ref={virtualizer.measureElement}
                >
                  <ChatMessageRowRenderer
                    row={displayRows[vi.index]}
                    isGroup={isGroup}
                    isFirstRow={vi.index === 0}
                    isLastRow={vi.index === displayRows.length - 1}
                    enterAnimation={!reducedMotion}
                    animatedIds={animatedIds}
                    typingLeaving={
                      displayRows[vi.index].type === "typing"
                        ? typingLeaving
                        : false
                    }
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Header shadow: a soft gradient at the top of the transcript whenever
          it's scrolled away from the top (same affordance as the sidebar). */}
      <AnimatePresence>
        {!atTop && <ScrollShadow position="top" key="chat-header-shadow" />}
      </AnimatePresence>

      {/* Sticky date header: pinned date of the top-most visible group. While
          older messages load, a spinner sits beside the date in the same pill. */}
      <AnimatePresence>
        {scrolledUp && stickyDate && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-2 flex justify-center"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="flex items-center gap-1.5 rounded-full bg-f1-background border border-solid border-f1-border-secondary px-2.5 py-0.5 backdrop-blur z-50"
              aria-label={loadingOlder ? i18n.chat.loadingOlder : undefined}
            >
              {loadingOlder && <Spinner size="small" className="h-3.5 w-3.5" />}
              <DateTimeSeparator at={stickyDate} withTime />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showButton && (
          // Centered via flex (inset-x-0 + justify-center) so the motion-driven
          // `scale` transform doesn't fight a `-translate-x-1/2`.
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <div className="pointer-events-auto rounded-md bg-f1-background">
              <ButtonInternal
                onClick={jumpToBottom}
                variant={"neutral"}
                icon={ArrowDown}
                label={
                  unreadCount > 0
                    ? i18n.t(
                        unreadCount === 1
                          ? "chat.unreadCount.one"
                          : "chat.unreadCount.other",
                        { count: unreadCount }
                      )
                    : hasMoreNewer
                      ? i18n.chat.backToLatest
                      : i18n.chat.scrollToBottom
                }
                hideLabel={unreadCount === 0 && !hasMoreNewer}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const EMPTY_SET: Set<string> = new Set()
