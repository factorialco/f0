import { type ReactNode } from "react"

import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { formatStatusTime } from "../utils/natural-time"

/**
 * Footer under the conversation's last message. My settled messages show
 * "Sent · hh:mm" until the read state is reached; group messages only advance
 * to "Read · hh:mm" once every other channel member appears in the receipt
 * count. Reader identities and counts remain available in the Info panel.
 */
export const MessageStatus = ({
  message,
  isGroup,
}: {
  message: F0ChatMessage
  isGroup?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()
  const { channel } = useF0Chat()

  const time = formatStatusTime(new Date(message.createdAt), new Date(), {
    today: i18n.date.groups.today,
    yesterday: i18n.date.groups.yesterday,
  })

  let label = time
  if (message.isMine) {
    const readByCount = message.readBy?.length ?? message.readByCount
    const expectedGroupReaders =
      isGroup && channel.memberCount != null
        ? Math.max(0, channel.memberCount - 1)
        : undefined
    const hasCompleteGroupReceipts =
      expectedGroupReaders == null ||
      expectedGroupReaders === 0 ||
      (readByCount != null && readByCount >= expectedGroupReaders)
    const isRead =
      message.status === "read" && (!isGroup || hasCompleteGroupReceipts)
    const isSettled =
      message.status === "sent" ||
      message.status === "delivered" ||
      message.status === "read"

    if (message.status === "failed") label = `${i18n.chat.notSent} · ${time}`
    else if (isSettled)
      label = `${isRead ? i18n.chat.read : i18n.chat.sent} · ${time}`
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        message.isMine ? "text-right" : "text-left"
      )}
    >
      {/* Fade the new label in as the status advances (sending → sent → read).
          Keying on the label remounts on change; no exit/`mode="wait"` so there's
          no sequential gap that makes the update feel laggy. */}
      <motion.span
        key={label}
        className="inline-block"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.15 }}
      >
        {label}
      </motion.span>
    </div>
  )
}
