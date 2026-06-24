import { type ReactNode, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"

import { useReplyPreview } from "../hooks/useReplyPreview"
import { useChatUI } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatUser } from "../types"
import { senderNameColorClass } from "../utils/sender-color"
import { ChatBubble } from "./ChatBubble"
import { ChatMessageActions } from "./ChatMessageActions"
import { ChatMessageAttachments } from "./ChatMessageAttachments"
import { ChatMessageReactions } from "./ChatMessageReactions"

/**
 * Reply quote above the bubble — a compact card led by a reply glyph that jumps
 * to the quoted message on click. In groups it leads with the quoted sender's
 * avatar + colored name; the body line shows the caption, and whenever there are
 * attachments it carries a media icon ("Photo", "3 photos", a filename, "2
 * files", "4 attachments") with the image thumbnail flush to the right.
 */
const ReplyQuote = ({
  reply,
  isMine,
  indented,
}: {
  reply: NonNullable<F0ChatMessage["replyTo"]>
  isMine: boolean
  /** Incoming group message: shift right to clear the avatar gutter. */
  indented?: boolean
}): ReactNode => {
  const { jumpToMessage } = useChatUI()
  const { currentUserId } = useF0Chat()
  const i18n = useI18n()
  const { icon, label, thumbnailUrl } = useReplyPreview(reply)
  // WhatsApp-style: a quote of your own message reads "You" rather than your name.
  const isOwnReply = reply.author.id === currentUserId
  const senderName = isOwnReply ? i18n.chat.you : reply.author.name
  return (
    <button
      type="button"
      onClick={() => jumpToMessage(reply.id)}
      className={cn(
        "mb-1 flex max-w-[85%] items-center overflow-hidden rounded bg-f1-background-tertiary text-left transition-colors hover:bg-f1-background-hover",
        isMine ? "self-end" : indented ? "ml-7 self-start" : "self-start"
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1 py-2 pl-2.5 pr-2.5">
        {/* {isGroup && ( */}
        <span className="flex items-center gap-1.5">
          {/* <F0Avatar size="xs" avatar={userAvatar(reply.author)} /> */}
          <OneEllipsis
            className={cn(
              "text-sm font-medium",
              senderNameColorClass(reply.author)
            )}
          >
            {senderName}
          </OneEllipsis>
        </span>
        {/* )} */}
        <span className="flex min-w-0 items-center gap-1 text-f1-foreground-secondary">
          {icon && <F0Icon icon={icon} size="sm" color="default" />}
          <OneEllipsis className="min-w-0 text-sm" lines={1}>
            {label}
          </OneEllipsis>
        </span>
      </div>
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt=""
          className="h-14 w-14 shrink-0 self-stretch object-cover"
        />
      )}
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
        <ReplyQuote
          reply={message.replyTo}
          isMine={isMine}
          indented={Boolean(bubbleGutter)}
        />
      )}
      {/* Attachments + bubble are one message column on the message's side, so
          a text-less (files-only) message still aligns + gets hover actions.
          items-end keeps the avatar gutter level with the bottom of it. */}
      {hasContent && (
        <div
          className={cn(
            "flex w-full gap-2",
            isMine ? "flex-row-reverse items-center" : "items-end"
          )}
        >
          {bubbleGutter}
          <div
            className={cn(
              "flex min-w-0 items-center gap-1",
              isMine ? "flex-row-reverse" : "flex-row"
            )}
          >
            {/* The jump-to highlight wraps the whole message (attachments +
                bubble), so it reads even on image-only / multi-part messages. */}
            <div
              className={cn(
                // `transition-shadow` is always on so the jump-to highlight ring
                // fades in/out instead of snapping when `highlighted` toggles.
                "flex max-w-full flex-col gap-1 rounded-2xl transition-shadow duration-200",
                isMine ? "items-end" : "items-start",
                highlighted && "ring-1 ring-f1-special-ring ring-offset-2",
                !message.deleted &&
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
