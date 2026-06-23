import { type ReactNode, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Reply } from "@/icons/app"
import { cn } from "@/lib/utils"

import { useChatUI } from "../providers/ChatUIProvider"
import { type F0ChatMessage, type F0ChatUser } from "../types"
import { ChatBubble } from "./ChatBubble"
import { ChatMessageActions } from "./ChatMessageActions"
import { ChatMessageAttachments } from "./ChatMessageAttachments"
import { ChatMessageReactions } from "./ChatMessageReactions"

/** Reply quote above the bubble — clicking it jumps to the quoted message. */
const ReplyQuote = ({
  reply,
  isMine,
}: {
  reply: NonNullable<F0ChatMessage["replyTo"]>
  isMine: boolean
}): ReactNode => {
  const { jumpToMessage } = useChatUI()
  const image = reply.attachments?.find((a) => a.kind === "image")
  const text = reply.body || reply.attachments?.[0]?.name || ""
  return (
    <button
      type="button"
      onClick={() => jumpToMessage(reply.id)}
      className={cn(
        "flex max-w-[80%] items-center gap-2 rounded-md pb-3 text-left text-f1-foreground-tertiary transition-colors hover:text-f1-foreground-secondary",
        isMine ? "self-end pr-2" : "self-start pl-2"
      )}
    >
      <div className="flex h-5 items-center">
        <F0Icon icon={Reply} />
      </div>
      {image && (
        <img
          src={image.url}
          alt=""
          className="h-9 w-9 shrink-0 rounded-sm object-cover"
        />
      )}
      <div className="min-w-0 truncate text-base leading-5">{text}</div>
    </button>
  )
}

/** One message: optional reply quote, bubble + reactions, with a hover ellipsis menu. */
export const ChatMessageItem = ({
  message,
  isMine,
  author,
  bubbleGutter,
  belowGutter,
}: {
  message: F0ChatMessage
  isMine: boolean
  /** Group incoming, first of a run: renders the sender name inside the bubble. */
  author?: F0ChatUser
  /** Left gutter aligned to the bubble (the avatar on a run's last message, or
   * an invisible spacer otherwise) — keeps the avatar level with the bubble. */
  bubbleGutter?: ReactNode
  /** Matching invisible spacer so reactions line up under the bubble. */
  belowGutter?: ReactNode
}): ReactNode => {
  const [actionsOpen, setActionsOpen] = useState(false)
  const { highlightedId } = useChatUI()
  const highlighted = highlightedId === message.id
  const hasReactions = !message.deleted && (message.reactions?.length ?? 0) > 0
  const hasAttachments =
    !message.deleted && (message.attachments?.length ?? 0) > 0
  // Attachment-only messages (no caption) skip the empty bubble but still show.
  const hasBubble = message.deleted || message.body.trim().length > 0
  const hasContent = hasBubble || hasAttachments

  return (
    <div
      data-msg-id={message.id}
      className={cn(
        "group flex flex-col",
        isMine ? "items-end" : "items-start"
      )}
    >
      {message.replyTo && !message.deleted && (
        <ReplyQuote reply={message.replyTo} isMine={isMine} />
      )}
      {/* Attachments + bubble are one message column on the message's side, so
          a text-less (files-only) message still aligns + gets hover actions.
          items-end keeps the avatar gutter level with the bottom of it. */}
      {hasContent && (
        <div
          className={cn(
            "flex w-full gap-2",
            isMine ? "flex-row-reverse items-end" : "items-end"
          )}
        >
          {bubbleGutter}
          <div
            className={cn(
              "flex min-w-0 items-end gap-1",
              isMine ? "flex-row-reverse" : "flex-row"
            )}
          >
            {/* The jump-to highlight wraps the whole message (attachments +
                bubble), so it reads even on image-only / multi-part messages. */}
            <div
              className={cn(
                "flex max-w-full flex-col gap-1 rounded-xl",
                isMine ? "items-end" : "items-start",
                highlighted &&
                  "ring-1 ring-f1-special-ring ring-offset-2 transition-shadow",
                "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                actionsOpen && "bg-f1-background-hover"
              )}
            >
              {hasAttachments && (
                <ChatMessageAttachments message={message} isMine={isMine} />
              )}
              {hasBubble && (
                <ChatBubble message={message} isMine={isMine} author={author} />
              )}
            </div>
            {/* Deleted tombstones have nothing to act on. The menu stays visible
                while open (not just on hover) so the ellipsis doesn't flicker. */}
            {!message.deleted && (
              <div
                className={cn(
                  "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
                  actionsOpen && "opacity-100"
                )}
              >
                <ChatMessageActions
                  message={message}
                  isMine={isMine}
                  open={actionsOpen}
                  onOpenChange={setActionsOpen}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {hasReactions && (
        <div className="flex w-full gap-2">
          {belowGutter}
          <div className="min-w-0 flex-1">
            <ChatMessageReactions message={message} isMine={isMine} />
          </div>
        </div>
      )}
    </div>
  )
}
