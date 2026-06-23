import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

import { AnimatePresence, motion } from "motion/react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { Spinner } from "@/ui/Spinner"
import { useI18n } from "@/lib/providers/i18n"

import { useChatUI } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { groupChatMessages } from "../utils/grouping"
import { useChatScroll } from "../hooks/useChatScroll"
import { ChatMessageRun } from "./ChatMessageRun"
import { DateTimeSeparator } from "./DateTimeSeparator"
import { UnreadDivider } from "./UnreadDivider"

/** How long the "new messages" divider lingers after everything is seen. */
const DIVIDER_LINGER_MS = 5000

/** Scrollable transcript: separators, message runs, the unread divider, typing,
 * pagination, and a jump-to-bottom / unread-count affordance. */
export const ChatMessagesContainer = (): ReactNode => {
  const i18n = useI18n()
  const {
    messages,
    channel,
    hasMoreOlder,
    loadingOlder,
    loadOlder,
    unreadCount,
    firstUnreadId,
    markRead,
  } = useF0Chat()

  const viewportRef = useRef<HTMLDivElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const { registerScrollToMessage } = useChatUI()

  // Let reply quotes jump to the original message within this viewport.
  useEffect(() => {
    registerScrollToMessage((id) => {
      viewportRef.current
        ?.querySelector(`[data-msg-id="${id}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }, [registerScrollToMessage])

  const { scrolledUp, atBottom, scrollToBottom, handleScroll } = useChatScroll({
    viewportRef,
    endRef,
    messages,
    hasMoreOlder,
    loadingOlder,
    onReachTop: loadOlder,
  })

  // "Seen everything" = the latest messages are visible AND the pointer is over
  // the chat. Only then do we mark as read.
  const [hovering, setHovering] = useState(false)
  const seeingAll = atBottom && hovering

  useEffect(() => {
    if (seeingAll && unreadCount > 0) markRead?.()
  }, [seeingAll, unreadCount, markRead])

  // The divider lingers: it stays where the unread run began until everything
  // has been seen, then for DIVIDER_LINGER_MS more, then disappears.
  const [dividerId, setDividerId] = useState<string | null>(firstUnreadId)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (firstUnreadId && !seeingAll) {
      // Still unread and not fully seen — pin the divider, cancel any hide.
      setDividerId(firstUnreadId)
      if (hideTimer.current) {
        clearTimeout(hideTimer.current)
        hideTimer.current = null
      }
    } else if (dividerId && !hideTimer.current) {
      // Everything seen (or read) — keep the divider a bit longer, then drop it.
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

  const groups = groupChatMessages(messages)
  const lastMessageId = messages.at(-1)?.id ?? null
  const isGroup = channel.type === "group"

  // Which run carries the "new messages" divider (rendered just above it).
  let unreadRunKey: string | null = null
  if (dividerId) {
    for (const group of groups) {
      const run = group.runs.find((r) =>
        r.messages.some((m) => m.id === dividerId)
      )
      if (run) {
        unreadRunKey = run.key
        break
      }
    }
  }

  const jumpToBottom = useCallback(() => {
    scrollToBottom()
  }, [scrollToBottom])

  // Only when scrolled up (messages not in view). When at the bottom the unread
  // messages are already visible — the divider shows them, no jump button needed.
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
        {loadingOlder && (
          <div
            className="flex justify-center py-3"
            aria-label={i18n.chat.loadingOlder}
          >
            <Spinner size="small" />
          </div>
        )}

        {/* Centered, width-capped column — mirrors the AI chat in fullscreen
            (in the sidepanel the panel is narrower, so this is a no-op there). */}
        <div className="mx-auto flex w-full max-w-content flex-col gap-6 pb-6 pt-2">
          {groups.map((group) => (
            <div key={group.key} className="flex flex-col gap-6">
              <DateTimeSeparator at={group.separatorAt} />
              {group.runs.map((run) => (
                <div key={run.key} className="flex flex-col gap-6">
                  {run.key === unreadRunKey && <UnreadDivider />}
                  <ChatMessageRun
                    run={run}
                    isGroup={isGroup}
                    lastMessageId={lastMessageId}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div ref={endRef} />
      </div>

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
                variant={unreadCount === 0 ? "outline" : "default"}
                icon={ArrowDown}
                label={
                  unreadCount > 0
                    ? i18n.chat.unreadCount.replace(
                        "{{count}}",
                        String(unreadCount)
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
