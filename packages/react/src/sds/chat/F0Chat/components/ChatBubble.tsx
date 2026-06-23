import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatMessage, type F0ChatUser } from "../types"
import { ChatUserHoverCard } from "./ChatUserHoverCard"

/** A single message bubble (body, or a deleted tombstone). The reply quote is
 * rendered above the bubble by {@link ChatMessageItem} (AI-chat style). In
 * groups, the sender's name is the bubble's first line (hover-carded). */
export const ChatBubble = ({
  message,
  isMine,
  author,
}: {
  message: F0ChatMessage
  isMine: boolean
  /** When set (group incoming, first of a run), render the name as line one. */
  author?: F0ChatUser
}): ReactNode => {
  const i18n = useI18n()

  if (message.deleted) {
    return (
      <div
        className={cn(
          "w-fit max-w-full rounded-xl px-3.5 py-2.5",
          "border border-solid border-f1-border-secondary",
          "text-sm italic text-f1-foreground-secondary"
        )}
      >
        {i18n.chat.deletedMessage}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "w-fit max-w-full rounded-xl px-3.5 py-2.5 text-f1-foreground font-normal",
        "whitespace-pre-wrap break-words",
        // Mine: grey. Others: white with a subtle border (matches the design).
        isMine
          ? "bg-f1-background-secondary"
          : "border border-solid border-f1-border-secondary bg-f1-background",
        message.status === "failed" && "opacity-60"
      )}
    >
      {author && (
        <ChatUserHoverCard user={author}>
          <span className="mb-0.5 block w-fit cursor-default text-sm font-medium text-f1-foreground-secondary">
            {author.name}
          </span>
        </ChatUserHoverCard>
      )}
      {message.body}
    </div>
  )
}
