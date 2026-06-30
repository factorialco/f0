import { type ReactNode } from "react"

import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatMessage } from "../types"
import { formatStatusTime } from "../utils/natural-time"

/**
 * Footer under the conversation's last message: its time, plus — when the
 * message is mine — the delivery state (Sent / Read, or "Read by N" in groups).
 * iMessage-style: only the latest message carries this line.
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

  const time = formatStatusTime(new Date(message.createdAt), new Date(), {
    today: i18n.date.groups.today,
    yesterday: i18n.date.groups.yesterday,
  })

  let label = time
  if (message.isMine) {
    if (message.status === "failed") label = i18n.chat.error
    else if (message.status === "read")
      label =
        isGroup && message.readByCount
          ? i18n.t(
              message.readByCount === 1
                ? "chat.readBy.one"
                : "chat.readBy.other",
              { count: message.readByCount }
            )
          : `${i18n.chat.read} ${time}`
    else if (message.status === "sent") label = `${i18n.chat.sent} ${time}`
  }

  return (
    <div
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
