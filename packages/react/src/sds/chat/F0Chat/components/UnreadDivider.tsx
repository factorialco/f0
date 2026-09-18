import { type ReactNode } from "react"
import { useI18n } from "@/lib/providers/i18n"
import { useF0ChatChannelType } from "../providers/F0ChatProvider"

/**
 * "New messages" divider (Telegram-style), shown above the first unread
 * message. Frozen for the whole visit — reading and sending leave it in place;
 * it only resets when you leave the conversation and come back.
 *
 * On a community it names POSTS instead, and that freeze matters more there
 * than anywhere: a post is a screenful, so a line that moved as you read would
 * carry away the very post you are still on.
 */
export const UnreadDivider = (): ReactNode => {
  const i18n = useI18n()
  const channelType = useF0ChatChannelType()
  const label =
    channelType === "community" ? i18n.chat.newPosts : i18n.chat.newMessages
  return (
    <div className="flex items-center gap-2 py-4">
      <div className="h-px flex-1 bg-f1-border" />
      <span className="text-md font-medium text-f1-foreground">{label}</span>
      <div className="h-px flex-1 bg-f1-border-secondary" />
    </div>
  )
}
