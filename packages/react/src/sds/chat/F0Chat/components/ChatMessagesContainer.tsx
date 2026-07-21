import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { AnimatePresence, motion } from "motion/react"
import { Virtuoso } from "react-virtuoso"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollBar } from "@/ui/scrollarea"

import { ScrollShadow } from "@/sds/ai/F0AiMessagesContainer/components/ScrollShadow"

import {
  AT_BOTTOM_THRESHOLD_PX,
  useChatVirtuoso,
} from "../hooks/useChatVirtuoso"
import { useChatJump } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { isUserMessage, LATEST } from "../types"
import { EASE_OUT_SWIFT } from "../utils/chat-motion"
import { type ChatRow, flattenChatRows, freshTailIds } from "../utils/grouping"
import { ChatMessageRowRenderer } from "./ChatMessageRowRenderer"
import { type TypingEntryState } from "./ChatTypingBubble"
import { DateTimeSeparator } from "./DateTimeSeparator"

/** How long the typing bubble fades before its row is removed — also the grace
 * window in which resumed typing keeps the same bubble (no re-enter). */
const TYPING_EXIT_MS = 250

/** Date of the row at the top of the viewport, for the sticky header. The
 * index comes from a DOM measurement that can lag a commit behind the rows —
 * clamp instead of trusting it. */
const dateForRow = (rows: ChatRow[], from: number): string | null => {
  for (let i = Math.max(0, from); i < rows.length; i++) {
    const row = rows[i]
    if (row.type === "message" || row.type === "system")
      return row.message.createdAt
    if (row.type === "separator") return row.at
  }
  return null
}

/** Passed to the custom Virtuoso components via the `context` prop. */
type ChatScrollerContext = {
  /** The scrollbar measure strip — see ChatVirtuosoScroller. */
  measureStripRef: RefObject<HTMLDivElement>
}

/** Virtuoso's scroll container, backed by Radix ScrollArea so the scrollbar is
 * an OVERLAY (absolute in the Root) that consumes zero client width — the
 * message column centers on the exact same width as the composer, scrollbar or
 * not. Virtuoso's `style` (height, overflow, position:relative) and props
 * (tabIndex, data-testid) must land on the VIEWPORT: it's the element that
 * scrolls, the one Virtuoso's forwarded ref listens on, and — via that
 * position:relative — the containing block Virtuoso's absolute inner viewport
 * sizes against. Radix spreads our style/className AFTER its own inline
 * defaults, so the overrides are guaranteed (verified in the package). */
const ChatVirtuosoScroller = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { context: ChatScrollerContext }
>(function ChatVirtuosoScroller(
  { style, children, className, context, ...props },
  ref
) {
  return (
    <ScrollAreaPrimitive.Root
      // `className` carries Virtuoso's className prop (sizing + reveal fade).
      className={cn("overflow-hidden", className)}
      scrollHideDelay={200}
    >
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        style={style}
        // Radix wraps children in a `display: table` div — force block so the
        // list lays out full-width (same fix as @/ui/scrollarea).
        className="size-full [&>div]:!block"
        {...props}
      >
        {/* Scrollbar measure strip. Radix sizes the thumb only when the
            ResizeObserver on its content wrapper fires — but Virtuoso's inner
            viewport is ABSOLUTE, so the wrapper never resizes on its own and
            the thumb would stay frozen with the sizes measured at mount
            (wrong size/position and broken drag as older pages prepend).
            The strip is the wrapper's only in-flow child: it mirrors
            Virtuoso's total list height (set imperatively from
            totalListHeightChanged), so every virtual height change resizes
            the wrapper and Radix re-measures. Zero width — no visual
            footprint, and scrollHeight already equals that total. */}
        <div ref={context.measureStripRef} aria-hidden="true" className="w-0" />
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

/** Centered column inside Virtuoso's scroller (the item container). The
 * horizontal padding lives HERE, not on the scroller: Virtuoso's viewport is
 * absolutely positioned, so it sizes against the scroller's padding box and
 * rows would bleed under a scroller-level padding to the very edge. The max
 * width compensates the padding so the content column stays 712px (the
 * `content` token) on wide viewports. */
const ChatVirtuosoList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function ChatVirtuosoList(props, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className="mx-auto w-full max-w-[calc(theme(maxWidth.content)+2rem)] px-4"
    />
  )
})

/** Breathing room between the last row and the transcript's bottom edge —
 * rendered as Virtuoso's Footer so scrollHeight and end-alignment include it. */
const ChatBottomGap = (): ReactNode => <div className="h-6" />

/** Scrollable transcript: virtualized separators, messages, the unread divider,
 * a sticky date header, pagination and a jump-to-bottom / unread-count affordance.
 * Virtuoso owns the scroll physics (bottom follow, prepend retention, entry
 * positioning); useChatVirtuoso owns the bookkeeping around it. */
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
  // new divider is in the rows before the scroll hook computes the new entry
  // location (an effect would run a frame later and the entry would miss it).
  if (dividerChannelRef.current !== channel.id) {
    dividerChannelRef.current = channel.id
    setDividerId(firstUnreadId)
  }

  // Rows keep their IDENTITY across appends (previousRows feeds the last
  // build back in): the row renderer is memoized on it, so a new message
  // re-renders ~2 rows instead of every visible one.
  const rowCacheRef = useRef<Map<string, ChatRow> | undefined>(undefined)
  const { rows, indexById } = useMemo(() => {
    const flat = flattenChatRows(messages, {
      dividerId,
      previousRows: rowCacheRef.current,
    })
    rowCacheRef.current = flat.rowCache
    return flat
  }, [messages, dividerId])

  // Fresh tail of this commit (transports coalesce bursts into ONE render):
  // every appended message animates in, staggered by its batch order — not
  // just the last one. Same Map instance forever (renderer prop stability);
  // conversation switches reset it so a cross-channel tail never animates.
  const freshIdsRef = useRef<Map<string, number>>(new Map())
  const freshPrevLastRef = useRef<string | null>(null)
  const freshChannelRef = useRef(channel.id)
  if (freshChannelRef.current !== channel.id) {
    freshChannelRef.current = channel.id
    freshIdsRef.current.clear()
    freshPrevLastRef.current = null
  }
  const currentLastId = messages[messages.length - 1]?.id ?? null
  if (freshPrevLastRef.current !== currentLastId) {
    const fresh = freshTailIds(messages, freshPrevLastRef.current)
    if (fresh.length > 0) {
      freshIdsRef.current.clear()
      fresh.forEach((id, order) => freshIdsRef.current.set(id, order))
    }
    freshPrevLastRef.current = currentLastId
  }

  // Typing exit hysteresis: when the writer pauses, the dots row is NOT dropped
  // immediately — it stays for TYPING_EXIT_MS with `typingLeaving` so the bubble
  // fades smoothly, and typing resumed within the window keeps the same bubble
  // (no pop-out/pop-in on every pause). The leaving flag is flipped during
  // render (state-from-props adjustment) so the row never unmounts for a frame
  // between "stopped" and "leaving".
  //
  // EXCEPT when the pause is because the message just LANDED: then the bubble
  // must visually replace the dots in the same commit (WhatsApp) — a leaving
  // fade would park ghost dots under the new message for 250ms.
  //
  // Transports deliver typing_stop and message.new as SEPARATE events in any
  // order (Stream: one forceRender per websocket packet), so three shapes are
  // handled: same tick (both in one commit), stop-then-message (cancel the
  // leaving fade) and message-then-stop (the author is still in `typingUsers`
  // when their bubble lands — suppress them locally until their stop arrives,
  // otherwise their dots ghost under the new message for the inter-event gap).
  // The transcript's final item vs its final USER message: the typing logic and
  // the delivery footer only apply when the last item is a user message — a
  // trailing system row ("Luis left the group") gets neither dots suppression
  // nor a "Read" footer under it.
  const lastItem = messages[messages.length - 1]
  const lastMessage = lastItem && isUserMessage(lastItem) ? lastItem : undefined
  const prevLastMsgIdRef = useRef<string | null>(lastItem?.id ?? null)
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
  const filteredTypingUsers =
    suppressedTypersRef.current.size > 0
      ? typingUsers.filter((u) => !suppressedTypersRef.current.has(u.id))
      : typingUsers
  // Content-stable identity: the runtime rebuilds `typingUsers` on every
  // transport event; without this, `displayRows` would change identity per
  // event during a typing streak and every visible row would re-render.
  const typingUsersKey = filteredTypingUsers.map((u) => u.id).join("|")
  const typingMemoRef = useRef({
    key: typingUsersKey,
    users: filteredTypingUsers,
  })
  if (typingMemoRef.current.key !== typingUsersKey) {
    typingMemoRef.current = { key: typingUsersKey, users: filteredTypingUsers }
  }
  const visibleTypingUsers = typingMemoRef.current.users

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
  prevLastMsgIdRef.current = lastItem?.id ?? null

  useEffect(() => {
    if (!typingLeaving) return
    const timer = setTimeout(() => setTypingLeaving(false), TYPING_EXIT_MS)
    return () => clearTimeout(timer)
  }, [typingLeaving])

  // A typing indicator is an extra incoming "dots" bubble at the very end of
  // the list while someone is writing — or just stopped (leaving). The
  // delivery-status footer is ALSO its own trailing row (constant height).
  // Both are DATA items on purpose: appearing means +1 item, which is what
  // triggers Virtuoso's followOutput — they slide the transcript up exactly
  // like a message would (a `components.Footer` would grow silently).
  const showTypingRow = typingActive || typingLeaving
  // Arm the bubble's entry pop only when the typing ROW is genuinely new — a
  // resume inside the grace window keeps the mounted bubble (no re-arm), and
  // the bubble consumes the flag at mount so scroll-back remounts mid-streak
  // render in place.
  const typingEntryRef = useRef<TypingEntryState>({ fresh: false })
  const prevShowTypingRowRef = useRef(showTypingRow)
  if (prevShowTypingRowRef.current !== showTypingRow) {
    prevShowTypingRowRef.current = showTypingRow
    if (showTypingRow) typingEntryRef.current.fresh = true
  }
  const displayRows = useMemo<ChatRow[]>(() => {
    const out = [...rows]
    if (lastMessage) {
      out.push({ type: "footer", key: "status-footer", message: lastMessage })
    }
    if (showTypingRow) {
      out.push({
        type: "typing",
        key: "typing",
        users: typingActive ? visibleTypingUsers : lastTypingUsersRef.current,
      })
    }
    return out
  }, [rows, lastMessage, visibleTypingUsers, typingActive, showTypingRow])

  const {
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
    atBottom,
    atTop,
    scrolledUp,
    revealed,
    stickyIndex,
    scrollToBottom,
    scrollToMessage,
    pendBottom,
  } = useChatVirtuoso({
    rows,
    indexById,
    itemCount: displayRows.length,
    messages,
    hasMoreOlder,
    loadingOlder,
    loadOlder,
    hasMoreNewer: hasMoreNewer ?? false,
    loadingNewer: loadingNewer ?? false,
    loadNewer,
    conversationKey: channel.id,
    reducedMotion,
  })

  // Scrollbar measure strip (see ChatVirtuosoScroller): mirror Virtuoso's
  // total list height into it — imperatively, so the frequent height
  // notifications never re-render the transcript.
  const measureStripRef = useRef<HTMLDivElement>(null)
  const scrollerContext = useMemo(() => ({ measureStripRef }), [])
  const handleListHeightChanged = useCallback(
    (height: number) => {
      const strip = measureStripRef.current
      if (strip) strip.style.height = `${height}px`
      handleTotalListHeightChanged(height)
    },
    [handleTotalListHeightChanged]
  )

  // Jump targeting (reply quotes, search hits). A jump may land on a message
  // that isn't loaded yet (a far-back search hit pulled in by
  // `loadMessageContext`): the hook parks it and resolves once its window lands.
  useEffect(() => {
    registerScrollToMessage(scrollToMessage)
  }, [registerScrollToMessage, scrollToMessage])

  // Jump-to-bottom: when newer messages aren't loaded (we're in an old window),
  // reload the live tail first, then land at the bottom when it remounts.
  const jumpToBottom = useCallback(() => {
    if (hasMoreNewer && loadMessageContext) {
      pendBottom()
      void loadMessageContext(LATEST)
    } else {
      scrollToBottom()
    }
  }, [hasMoreNewer, loadMessageContext, pendBottom, scrollToBottom])

  const seeingAll = atBottom && hovering

  useEffect(() => {
    if (seeingAll && unreadCount > 0) markRead?.()
  }, [seeingAll, unreadCount, markRead])

  // Seed the "already shown" set on first render with messages — only genuinely
  // new arrivals (not in the set) animate in. Mutated by the row renderer at mount.
  const animatedIdsRef = useRef<Set<string> | null>(null)
  if (animatedIdsRef.current === null && messages.length > 0) {
    animatedIdsRef.current = new Set(messages.map((m) => m.id))
  }
  const animatedIds = animatedIdsRef.current ?? EMPTY_SET

  // Sticky date pill: the date of the top-most visible row.
  const stickyDate =
    stickyIndex != null ? dateForRow(displayRows, stickyIndex) : null

  // Show the affordance when scrolled up, or whenever the live tail isn't loaded
  // (after a far-back jump) so there's always a way back to the latest messages.
  const showButton = scrolledUp || hasMoreNewer

  return (
    <div
      className="relative min-h-0 flex-1 scrollbar-macos"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Virtuoso<ChatRow, ChatScrollerContext>
        key={listKey}
        ref={virtuosoRef}
        scrollerRef={handleScrollerRef}
        data={displayRows}
        // `row` CAN transiently be undefined: a mid-list shrink (hard delete)
        // keeps the ends — and so the firstItemIndex — while the rendered
        // range still spans the old length for one pass. Self-corrects next
        // render; don't let it crash the frame.
        computeItemKey={(index, row) => row?.key ?? `chat-gap-${index}`}
        itemContent={(index, row) =>
          row ? (
            <ChatMessageRowRenderer
              row={row}
              isGroup={isGroup}
              isFirstRow={index === firstItemIndex}
              enterAnimation={!reducedMotion}
              animatedIds={animatedIds}
              freshIds={freshIdsRef.current}
              typingLeaving={row.type === "typing" ? typingLeaving : false}
              typingEntry={typingEntryRef.current}
            />
          ) : null
        }
        firstItemIndex={firstItemIndex}
        initialTopMostItemIndex={initialLocation}
        followOutput={followOutput}
        atBottomThreshold={AT_BOTTOM_THRESHOLD_PX}
        atBottomStateChange={handleAtBottomChange}
        atTopStateChange={handleAtTopChange}
        startReached={handleStartReached}
        endReached={handleEndReached}
        itemsRendered={handleItemsRendered}
        totalListHeightChanged={handleListHeightChanged}
        increaseViewportBy={{ top: 400, bottom: 200 }}
        defaultItemHeight={48}
        context={scrollerContext}
        components={{
          Scroller: ChatVirtuosoScroller,
          List: ChatVirtuosoList,
          Footer: ChatBottomGap,
        }}
        className={cn(
          // Lands on the ScrollArea Root (see ChatVirtuosoScroller). Normal
          // flow, not absolute: Radix hardcodes `position: relative` inline.
          "size-full",
          // Hidden (opacity keeps layout + the a11y tree) until the entry
          // positioning has painted, then a short fade — the transcript
          // appears already in place, zero perceived motion.
          !reducedMotion && "transition-opacity duration-100",
          revealed ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Header shadow: a soft gradient at the top of the transcript whenever
          it's scrolled away from the top (same affordance as the sidebar). */}
      <AnimatePresence>
        {!atTop && <ScrollShadow position="top" key="chat-header-shadow" />}
      </AnimatePresence>

      {/* Sticky date header: pinned date of the top-most visible group. While
          older messages load, a spinner sits beside the date in the same pill.
          Hidden only at the REAL top of the history (nothing older to load) —
          the transcript's own first day separator is in view there and the two
          pills would show the same date twice. Reaching the top mid-pagination
          keeps it: that top is transient and the pill carries the spinner. */}
      <AnimatePresence>
        {scrolledUp &&
          (!atTop || hasMoreOlder || loadingOlder) &&
          stickyDate && (
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-2 flex justify-center"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <div
                className="z-50"
                aria-label={loadingOlder ? i18n.chat.loadingOlder : undefined}
              >
                {/* The pill (border, background, spinner) is the separator's
                  own — same look as the in-transcript day rows. */}
                <DateTimeSeparator
                  at={stickyDate}
                  withTime
                  loading={loadingOlder}
                />
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: EASE_OUT_SWIFT }}
          >
            {/* Keyed by the count: each new unread remounts the pill with a
                subtle scale settle — the signal that the number changed. */}
            <motion.div
              key={unreadCount}
              className="pointer-events-auto rounded-md bg-f1-background"
              initial={
                reducedMotion || unreadCount === 0 ? false : { scale: 0.95 }
              }
              animate={{ scale: 1 }}
              transition={{ duration: 0.15, ease: EASE_OUT_SWIFT }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const EMPTY_SET: Set<string> = new Set()
