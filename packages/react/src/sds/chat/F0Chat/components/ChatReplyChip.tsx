import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Cross } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

import { useReplyPreview } from "../hooks/useReplyPreview"
import { type F0ChatMessage } from "../types"
import { cn } from "@/lib/utils"
import { senderNameColorClass } from "../utils/sender-color"

/** Compact "replying to" preview above the composer (quotes the whole message). */
export const ChatReplyChip = ({
  message,
  onRemove,
}: {
  message: F0ChatMessage
  onRemove: () => void
}): ReactNode => {
  const i18n = useI18n()
  const { icon, label, thumbnailUrl } = useReplyPreview(message)
  return (
    <div className="p-1">
      <div className="flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5">
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt=""
            className="h-9 w-9 shrink-0 self-center rounded-sm object-cover"
          />
        )}
        <div className="min-w-0 flex-1 gap-0.5 p-1">
          <OneEllipsis
            className={cn(
              "text-sm font-medium",
              senderNameColorClass(message.author)
            )}
          >
            {message.isMine ? i18n.chat.you : message.author.name}
          </OneEllipsis>
          <span className="flex min-w-0 items-center gap-1 text-f1-foreground-secondary">
            {icon && <F0Icon icon={icon} size="xs" color="default" />}
            <OneEllipsis className="min-w-0 text-base" lines={1}>
              {label}
            </OneEllipsis>
          </span>
        </div>
        <div className="flex flex-col">
          <ButtonInternal
            variant="ghost"
            size="sm"
            hideLabel
            label={i18n.chat.removeQuote}
            icon={Cross}
            onClick={onRemove}
          />
        </div>
      </div>
    </div>
  )
}
