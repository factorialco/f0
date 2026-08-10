import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { type ItemProps, type ListProps, Virtuoso } from "react-virtuoso"

import { cn } from "@/lib/utils"
import { ScrollBar } from "@/ui/scrollarea"

import {
  AT_BOTTOM_THRESHOLD_PX,
  useChatVirtuoso,
} from "../hooks/useChatVirtuoso"
import { useMicrotaskBatch } from "../hooks/useMicrotaskBatch"
import {
  createTranscriptHeavyPreviewStore,
  TranscriptHeavyPreviewProvider,
} from "../hooks/useTranscriptHeavyPreview"
import { useTranscriptReadiness } from "../hooks/useTranscriptReadiness"
import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import { useChatJump } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { isUserMessage, LATEST } from "../types"
import { CHAT_COMPOSER_HEIGHT } from "../utils/chat-layout"
import { type ChatRow, flattenChatRows, freshTailIds } from "../utils/grouping"
import { ChatMessageRowRenderer } from "./ChatMessageRowRenderer"
import { type TypingEntryState } from "./ChatTypingBubble"
import { ChatViewportOverlays } from "./ChatViewportOverlays"

/** How long the typing bubble fades before its row is removed — also the grace
 * window in which resumed typing keeps the same bubble (no re-enter). */
const TYPING_EXIT_MS = 250

/** Date of the row at the top of the viewport, for the sticky header. The
 * index comes from Virtuoso's item measurements, which can lag a commit behind
 * the rows — clamp instead of trusting it. */
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
  onListVisibilityChange: (visible: boolean) => void
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
      // `className` carries Virtuoso's sizing and entry-readiness state.
      className={cn("overflow-hidden", className)}
      scrollHideDelay={200}
    >
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        // Virtuoso already retains its own anchor when measured rows change.
        // Native scroll anchoring would apply a second correction when the
        // Radix measure strip grows, which is perceived as a jump.
        style={{
          ...style,
          overflowAnchor: "none",
          scrollPaddingBottom: `calc(${CHAT_COMPOSER_HEIGHT} + 1.5rem)`,
        }}
        // Radix wraps children in a `display: table` div — force block so the
        // list lays out full-width (same fix as @/ui/scrollarea).
        className="size-full [&>div]:!block"
        {...props}
        data-testid="chat-message-viewport"
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
        <div
          ref={context.measureStripRef}
          aria-hidden="true"
          className="w-0"
          style={{ overflowAnchor: "none" }}
        />
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
  ListProps & { context: ChatScrollerContext }
>(function ChatVirtuosoList({ style, context, ...props }, ref) {
  const visible = style?.visibility !== "hidden"
  useLayoutEffect(() => {
    context.onListVisibilityChange(visible)
  }, [context, visible])

  return (
    <div
      {...props}
      ref={ref}
      style={style}
      className="mx-auto w-full max-w-[calc(theme(maxWidth.content)+2rem)] px-4"
    />
  )
})

/** Virtuoso cannot account for collapsed margins or zero-height items. A
 * stable formatting context contains any future child margins, while the 1px
 * floor keeps even an empty transient row measurable. */
const ChatVirtuosoItem = forwardRef<
  HTMLDivElement,
  ItemProps<ChatRow> & { context: ChatScrollerContext }
>(function ChatVirtuosoItem({ item: _item, context: _context, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className="flow-root min-h-px"
      data-chat-virtuoso-item=""
    />
  )
})

/** Breathing room between the last row and the transcript's bottom edge —
 * rendered as Virtuoso's Footer so scrollHeight and end-alignment include it. */
const ChatBottomGap = (): ReactNode => (
  <div
    data-testid="chat-bottom-gap"
    style={{ height: `calc(${CHAT_COMPOSER_HEIGHT} + 1.5rem)` }}
  />
)

const CHAT_VIRTUOSO_COMPONENTS = {
  Scroller: ChatVirtuosoScroller,
  List: ChatVirtuosoList,
  Item: ChatVirtuosoItem,
  Footer: ChatBottomGap,
}

// Keep the next rows mounted far enough ahead for Virtuoso to measure them
// before they enter the viewport. The item-count floor matters for very tall
// media rows, where a pixel-only buffer can contain a single item.
const CHAT_VIEWPORT_INCREASE = { top: 400, bottom: 200 }
const CHAT_MIN_OVERSCAN_ITEMS = { top: 4, bottom: 3 }

const chatRowKey = (index: number, row: ChatRow): string =>
  row?.key ?? `chat-gap-${index}`

/** Scrollable transcript: virtualized separators, messages, the unread divider,
 * a sticky date header, pagination and a jump-to-bottom / unread-count affordance.
 * Virtuoso owns the scroll physics (bottom follow, prepend retention, entry
 * positioning); useChatVirtuoso owns the bookkeeping around it. */
export const ChatMessagesContainer = (): ReactNode => {
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
  const { reducedMotion } = useChatRenderConfig()
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
  const [dividerId] = useState<string | null>(firstUnreadId)

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
  // the keyed transcript session prevents cross-channel animation state.
  const freshIdsRef = useRef<Map<string, number>>(new Map())
  const freshPrevLastRef = useRef<string | null>(null)
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

  const shouldStartTypingExit =
    prevTypingActiveRef.current &&
    !typingActive &&
    !reducedMotion &&
    !appendedFromTyper
  const effectiveTypingLeaving = shouldStartTypingExit
    ? true
    : typingLeaving && !appendedFromTyper

  // Commit prop-driven state transitions before paint. The derived value above
  // keeps the row continuous in this render without calling setState during it.
  useLayoutEffect(() => {
    prevTypingActiveRef.current = typingActive
    prevLastMsgIdRef.current = lastItem?.id ?? null
    if (typingLeaving !== effectiveTypingLeaving) {
      setTypingLeaving(effectiveTypingLeaving)
    }
  }, [effectiveTypingLeaving, lastItem?.id, typingActive, typingLeaving])

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
  const showTypingRow = typingActive || effectiveTypingLeaving
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

  const { ready, setViewport, setListVisible } = useTranscriptReadiness(listKey)
  const previewStore = useMemo(createTranscriptHeavyPreviewStore, [listKey])
  const previewStoreLifecycleRef = useRef({ store: previewStore, epoch: 0 })
  previewStoreLifecycleRef.current.store = previewStore

  useEffect(() => {
    previewStore.setReady(ready)
  }, [previewStore, ready])
  useEffect(() => {
    const epoch = ++previewStoreLifecycleRef.current.epoch
    return () => {
      queueMicrotask(() => {
        const lifecycle = previewStoreLifecycleRef.current
        if (lifecycle.store !== previewStore || lifecycle.epoch === epoch) {
          previewStore.dispose()
        }
      })
    }
  }, [previewStore])

  const setScroller = useCallback(
    (element: HTMLElement | Window | null) => {
      handleScrollerRef(element)
      const viewport = element instanceof HTMLElement ? element : null
      setViewport(viewport)
      previewStore.setViewport(viewport)
    },
    [handleScrollerRef, previewStore, setViewport]
  )

  // Scrollbar measure strip (see ChatVirtuosoScroller): mirror Virtuoso's
  // total list height into it. Virtuoso may report several corrections in one
  // task; coalescing those writes in a microtask wakes Radix only once while
  // still updating before the next paint.
  const measureStripRef = useRef<HTMLDivElement>(null)
  const scrollerContext = useMemo(
    () => ({ measureStripRef, onListVisibilityChange: setListVisible }),
    [setListVisible]
  )
  const scheduleMeasureStripHeight = useMicrotaskBatch((height: number) => {
    const strip = measureStripRef.current
    const nextHeight = `${height}px`
    if (strip && strip.style.height !== nextHeight) {
      strip.style.height = nextHeight
    }
  })
  const handleListHeightChanged = useCallback(
    (height: number) => {
      scheduleMeasureStripHeight(height)
      handleTotalListHeightChanged(height)
    },
    [handleTotalListHeightChanged, scheduleMeasureStripHeight]
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

  const renderItem = useCallback(
    (index: number, row: ChatRow) =>
      row ? (
        <ChatMessageRowRenderer
          row={row}
          isGroup={isGroup}
          isFirstRow={index === firstItemIndex}
          enterAnimation={!reducedMotion}
          animatedIds={animatedIds}
          freshIds={freshIdsRef.current}
          typingLeaving={row.type === "typing" ? effectiveTypingLeaving : false}
          typingEntry={typingEntryRef.current}
        />
      ) : null,
    [
      animatedIds,
      effectiveTypingLeaving,
      firstItemIndex,
      isGroup,
      reducedMotion,
    ]
  )

  // Sticky date pill: the date of the top-most visible row.
  const stickyDate =
    stickyIndex != null ? dateForRow(displayRows, stickyIndex) : null

  // Show the affordance when scrolled up, or whenever the live tail isn't loaded
  // (after a far-back jump) so there's always a way back to the latest messages.
  const showButton = scrolledUp || Boolean(hasMoreNewer)

  return (
    <TranscriptHeavyPreviewProvider store={previewStore}>
      <div
        {...(!ready ? ({ inert: "" } as Record<string, string>) : {})}
        className="scrollbar-macos relative min-h-0 flex-1"
        aria-busy={!ready}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Virtuoso<ChatRow, ChatScrollerContext>
          key={listKey}
          ref={virtuosoRef}
          scrollerRef={setScroller}
          data={displayRows}
          // `row` CAN transiently be undefined: a mid-list shrink (hard delete)
          // keeps the ends — and so the firstItemIndex — while the rendered
          // range still spans the old length for one pass. Self-corrects next
          // render; don't let it crash the frame.
          computeItemKey={chatRowKey}
          itemContent={renderItem}
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
          increaseViewportBy={CHAT_VIEWPORT_INCREASE}
          minOverscanItemCount={CHAT_MIN_OVERSCAN_ITEMS}
          defaultItemHeight={48}
          // Reporting measurements in the ResizeObserver callback avoids an
          // extra provisional frame when a previously unseen row is mounted.
          skipAnimationFrameInResizeObserver
          context={scrollerContext}
          components={CHAT_VIRTUOSO_COMPONENTS}
          isScrolling={previewStore.setScrolling}
          className={cn(
            "size-full",
            !reducedMotion && "transition-opacity duration-100",
            ready ? "visible opacity-100" : "invisible opacity-0"
          )}
        />

        {ready && (
          <ChatViewportOverlays
            atTop={atTop}
            scrolledUp={scrolledUp}
            hasMoreOlder={hasMoreOlder}
            loadingOlder={loadingOlder}
            stickyDate={stickyDate}
            showJumpButton={showButton}
            unreadCount={unreadCount}
            hasMoreNewer={hasMoreNewer ?? false}
            reducedMotion={reducedMotion}
            onJumpToBottom={jumpToBottom}
          />
        )}
      </div>
    </TranscriptHeavyPreviewProvider>
  )
}

const EMPTY_SET: Set<string> = new Set()
