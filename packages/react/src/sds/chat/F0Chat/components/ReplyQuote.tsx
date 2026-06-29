import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useReplyPreview } from "../hooks/useReplyPreview"
import { useChatJump } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { senderNameColorClass } from "../utils/sender-color"

/**
 * Reply quote nested at the top of the bubble (WhatsApp-style): a compact card
 * led by the quoted sender's coloured name; the body line shows the caption and
 * carries a media icon / thumbnail when the quoted message has attachments.
 * Clicking it jumps to the quoted message.
 */
export const ReplyQuote = ({
  reply,
  isMine = false,
  isFirstOfRun = true,
}: {
  reply: NonNullable<F0ChatMessage["replyTo"]>
  /** The host bubble's side — picks which top corner hugs the bubble. */
  isMine?: boolean
  /** First message of a same-author run — mirrors the bubble's tail-side top
   * corner so the quote nests cleanly (rounded at a run's start, tucked when
   * it continues one). */
  isFirstOfRun?: boolean
}): ReactNode => {
  const { jumpToMessage } = useChatJump()
  const { currentUserId } = useF0Chat()
  const i18n = useI18n()
  const { icon, label, thumbnailUrl } = useReplyPreview(reply)
  // WhatsApp-style: a quote of your own message reads "You" rather than your name.
  const isOwnReply = reply.author.id === currentUserId
  const senderName = isOwnReply ? i18n.chat.you : reply.author.name
  return (
    <div className="p-1 pb-0">
      <button
        type="button"
        onClick={() => jumpToMessage(reply.id)}
        className={cn(
          "flex w-full items-center overflow-hidden rounded-xl text-left",
          "bg-f1-background-tertiary transition-colors hover:bg-f1-background-secondary",
          // Tail-side top corner mirrors the host bubble: rounded to hug the
          // bubble at a run's start, tucked in when the message continues a run.
          isFirstOfRun
            ? isMine
              ? "rounded-tr-2xl"
              : "rounded-tl-2xl"
            : isMine
              ? "rounded-tr-sm"
              : "rounded-tl-sm"
        )}
      >
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt=""
            className="ml-2.5 h-9 w-9 shrink-0 self-center rounded-sm object-cover"
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 p-2.5">
          <OneEllipsis
            className={cn(
              "text-sm font-medium",
              senderNameColorClass(reply.author)
            )}
          >
            {senderName}
          </OneEllipsis>
          <span className="flex min-w-0 items-center gap-1 text-f1-foreground-secondary">
            {icon && <F0Icon icon={icon} size="sm" color="default" />}
            <OneEllipsis className="min-w-0 text-base" lines={1}>
              {label}
            </OneEllipsis>
          </span>
        </div>
      </button>
    </div>
  )
}
