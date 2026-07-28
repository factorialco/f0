import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

/**
 * "New messages" divider (Telegram-style), shown above the first unread
 * message. Frozen for the whole visit — reading and sending leave it in place;
 * it only resets when you leave the conversation and come back.
 */
export const UnreadDivider = (): ReactNode => {
  const i18n = useI18n()
  return (
    <div className="flex items-center gap-2 py-4">
      <div className="h-px flex-1 bg-f1-border" />
      <span className="text-md font-medium text-f1-foreground">
        {i18n.chat.newMessages}
      </span>
      <div className="h-px flex-1 bg-f1-border-secondary" />
    </div>
  )
}
