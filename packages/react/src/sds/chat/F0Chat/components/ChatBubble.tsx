import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatMessage, type F0ChatUser } from "../types"
import { senderNameColorClass } from "../utils/sender-color"
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
          "w-fit max-w-full rounded-2xl px-3.5 py-2.5",
          "text-sm italic text-f1-foreground",
          "border border-solid border-f1-border-secondary",
          isMine ? "bg-f1-background-secondary" : "bg-f1-background"
        )}
      >
        {i18n.chat.deletedMessage}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "w-fit max-w-full rounded-2xl px-3.5 py-2.5 text-f1-foreground font-normal",
        "whitespace-pre-wrap break-words",
        "border border-solid border-f1-border-secondary",
        // Mine: grey. Others: white with a subtle border (matches the design).
        isMine ? "bg-f1-background-secondary" : "bg-f1-background",
        message.status === "failed" && "opacity-60"
      )}
    >
      {author && (
        <ChatUserHoverCard user={author}>
          {/* WhatsApp-style: tint the sender name to match their avatar colour. */}
          <span
            className={cn(
              "mb-0.5 block w-fit cursor-default text-sm font-medium",
              senderNameColorClass(author)
            )}
          >
            {author.name}
          </span>
        </ChatUserHoverCard>
      )}
      {message.body}
    </div>
  )
}
