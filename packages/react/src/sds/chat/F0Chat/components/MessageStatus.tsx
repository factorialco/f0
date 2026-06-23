import { type ReactNode } from "react"

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

  const time = formatStatusTime(new Date(message.createdAt), new Date(), {
    today: i18n.chat.today,
    yesterday: i18n.chat.yesterday,
  })

  let label = time
  if (message.isMine) {
    if (message.status === "failed") label = i18n.chat.error
    else if (message.status === "read")
      label =
        isGroup && message.readByCount
          ? i18n.chat.readBy.replace("{{count}}", String(message.readByCount))
          : `${i18n.chat.read} ${time}`
    else if (message.status === "sent") label = `${i18n.chat.sent} ${time}`
  }

  return (
    <div
      className={cn(
        "px-1 pt-1 text-xs text-f1-foreground-secondary",
        message.isMine ? "text-right" : "text-left"
      )}
    >
      {label}
    </div>
  )
}
