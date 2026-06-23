import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Cross, Reply } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

import { type F0ChatMessage } from "../types"

/** Compact "replying to" preview above the composer (quotes the whole message). */
export const ChatReplyChip = ({
  message,
  onRemove,
}: {
  message: F0ChatMessage
  onRemove: () => void
}): ReactNode => {
  const i18n = useI18n()
  const image = message.attachments?.find((a) => a.kind === "image")
  const text = message.body || message.attachments?.[0]?.name || ""
  return (
    <div className="p-1">
      <div className="flex items-start justify-center gap-2 rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5">
        <div className="flex items-center py-0.5">
          <F0Icon icon={Reply} size="md" color="default" />
        </div>
        {image && (
          <img
            src={image.url}
            alt=""
            className="h-9 w-9 shrink-0 rounded-sm object-cover"
          />
        )}
        <div className="min-w-0 flex-1 py-0.5">
          <OneEllipsis className="text-sm font-semibold text-f1-foreground-secondary">
            {message.author.name}
          </OneEllipsis>
          <OneEllipsis
            className="text-sm text-f1-foreground-secondary"
            lines={2}
          >
            {text}
          </OneEllipsis>
        </div>
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
  )
}
