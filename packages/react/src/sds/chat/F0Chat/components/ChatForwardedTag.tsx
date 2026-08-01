import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Share } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useReplyPreview } from "../hooks/useReplyPreview"
import { useF0ChatStable } from "../providers/F0ChatProvider"
import { type F0ChatForwardedFrom } from "../types"
import { senderNameColorClass } from "../utils/sender-color"

/**
 * "Forwarded" tag nested at the top of the bubble — same slot as
 * {@link ReplyQuote}, but a plain (non-interactive) row: unlike a reply, the
 * original message may live in a conversation this viewer doesn't belong to,
 * so there's no jump-to-source here.
 */
export const ChatForwardedTag = ({
  forwarded,
  isMine = false,
  isFirstOfRun = true,
}: {
  forwarded: F0ChatForwardedFrom
  /** The host bubble's side — picks which top corner hugs the bubble. */
  isMine?: boolean
  /** First message of a same-author run — mirrors the bubble's tail-side top
   * corner so the tag nests cleanly. */
  isFirstOfRun?: boolean
}): ReactNode => {
  const { currentUserId } = useF0ChatStable()
  const i18n = useI18n()
  const { icon, label, thumbnailUrl } = useReplyPreview(forwarded)
  const isOwnMessage = forwarded.author.id === currentUserId
  const originalSender = isOwnMessage ? i18n.chat.you : forwarded.author.name

  return (
    <div className="p-1 pb-0">
      <div
        className={cn(
          "flex w-full items-center overflow-hidden rounded-xl",
          "bg-f1-background-tertiary",
          isFirstOfRun
            ? isMine
              ? "rounded-tr-xl"
              : "rounded-tl-xl"
            : isMine
              ? "rounded-tr-xs"
              : "rounded-tl-xs"
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
          <span className="flex items-center gap-1 text-sm italic text-f1-foreground-secondary">
            <F0Icon icon={Share} size="sm" color="secondary" />
            {i18n.chat.forwarded}
            <span aria-hidden className="not-italic">
              ·
            </span>
            <span
              className={cn(
                "not-italic",
                senderNameColorClass(forwarded.author)
              )}
            >
              {originalSender}
            </span>
          </span>
          <span className="flex min-w-0 items-center gap-1 text-f1-foreground-secondary">
            {icon && <F0Icon icon={icon} size="sm" color="default" />}
            <OneEllipsis className="min-w-0 text-base" lines={1}>
              {label}
            </OneEllipsis>
          </span>
        </div>
      </div>
    </div>
  )
}
