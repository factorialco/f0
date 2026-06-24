import { type ReactNode, useEffect, useMemo, useRef, useState } from "react"

import { useVirtualizer } from "@tanstack/react-virtual"
import { AnimatePresence, motion } from "motion/react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { Spinner } from "@/ui/Spinner"

import { useChatUI } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type ChatRow, flattenChatRows } from "../utils/grouping"
import { useChatScroll } from "../hooks/useChatScroll"
import { ChatMessageRowRenderer } from "./ChatMessageRowRenderer"
import { DateTimeSeparator } from "./DateTimeSeparator"

/** How long the "new messages" divider lingers after everything is seen. */
const DIVIDER_LINGER_MS = 5000

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
    unreadCount,
    firstUnreadId,
    markRead,
  } = useF0Chat()
  const reducedMotion = useReducedMotion()
  const isGroup = channel.type === "group"

  const viewportRef = useRef<HTMLDivElement>(null)
  const { registerScrollToMessage } = useChatUI()

  // "Seen everything" = the latest messages are visible AND the pointer is over
  // the chat. Only then do we mark as read.
  const [hovering, setHovering] = useState(false)

  // The divider lingers: it stays where the unread run began until everything has
  // been seen, then for DIVIDER_LINGER_MS more, then disappears.
  const [dividerId, setDividerId] = useState<string | null>(firstUnreadId)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { rows, indexById } = useMemo(
    () => flattenChatRows(messages, { dividerId }),
    [messages, dividerId]
  )

  // A typing indicator is an extra incoming "dots" bubble at the very end of the
  // list while someone is writing (not part of the message-derived rows).
  const displayRows = useMemo<ChatRow[]>(
    () =>
      typingUsers.length > 0
        ? [...rows, { type: "typing", key: "typing", users: typingUsers }]
        : rows,
    [rows, typingUsers]
  )

  const virtualizer = useVirtualizer({
    count: displayRows.length,
    getScrollElement: () => viewportRef.current,
    estimateSize: (i) => estimateRowSize(displayRows[i]),
    getItemKey: (i) => displayRows[i].key,
    // Round to whole pixels — sub-pixel measurements accumulate into translateY
    // drift that shows as jitter while scrolling up.
    measureElement: (el) => Math.round(el.getBoundingClientRect().height),
    overscan: 8,
  })

  const { scrolledUp, atBottom, scrollToBottom, handleScroll } = useChatScroll({
    viewportRef,
    virtualizer,
    rows: displayRows,
    indexById,
    messages,
    hasMoreOlder,
    loadingOlder,
    onReachTop: loadOlder,
  })

  // When someone starts typing while we're at the bottom, keep the dots in view.
  const typingActive = typingUsers.length > 0
  const prevTypingRef = useRef(false)
  useEffect(() => {
    if (typingActive && !prevTypingRef.current && atBottom) {
      scrollToBottom("smooth")
    }
    prevTypingRef.current = typingActive
  }, [typingActive, atBottom, scrollToBottom])

  // Reply quotes jump to the original message by index (works off-screen).
  useEffect(() => {
    registerScrollToMessage((id) => {
      const index = indexById.get(id)
      if (index != null) {
        virtualizer.scrollToIndex(index, {
          align: "center",
          behavior: "smooth",
        })
      }
    })
  }, [registerScrollToMessage, indexById, virtualizer])

  const seeingAll = atBottom && hovering

  useEffect(() => {
    if (seeingAll && unreadCount > 0) markRead?.()
  }, [seeingAll, unreadCount, markRead])

  useEffect(() => {
    if (firstUnreadId && !seeingAll) {
      setDividerId(firstUnreadId)
      if (hideTimer.current) {
        clearTimeout(hideTimer.current)
        hideTimer.current = null
      }
    } else if (dividerId && !hideTimer.current) {
      hideTimer.current = setTimeout(() => {
        setDividerId(null)
        hideTimer.current = null
      }, DIVIDER_LINGER_MS)
    }
  }, [firstUnreadId, seeingAll, dividerId])

  useEffect(
    () => () => {
      if (hideTimer.current) clearTimeout(hideTimer.current)
    },
    []
  )

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

  const showButton = scrolledUp

  return (
    <div
      className="relative min-h-0 flex-1"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        ref={viewportRef}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto px-4"
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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
              className="flex items-center gap-1.5 rounded-full bg-f1-background border border-solid border-f1-border-secondary px-2.5 py-0.5 backdrop-blur"
              aria-label={loadingOlder ? i18n.chat.loadingOlder : undefined}
            >
              {loadingOlder && <Spinner size="small" className="h-3.5 w-3.5" />}
              <DateTimeSeparator at={stickyDate} />
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
                onClick={() => scrollToBottom()}
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
                    : i18n.chat.scrollToBottom
                }
                hideLabel={unreadCount === 0}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const EMPTY_SET: Set<string> = new Set()
