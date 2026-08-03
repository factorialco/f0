import { type ReactNode } from "react"

import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { cn } from "@/lib/utils"

import { type F0ChatLinkPreview } from "../types"
import { FadeInImage } from "./FadeInImage"

const hostOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

/**
 * Chained corners for the stacked cards, mirroring `bubbleCornerClass`
 * (ChatBubble): outer corners stay rounded-xl while the edges where two cards
 * meet tuck to the small radius, whatever the count. The first card's tail-side
 * top corner additionally follows the host bubble's run corner (same as the
 * reply quote).
 */
const cardClass = (
  isMine: boolean,
  isFirstOfRun: boolean,
  isFirstCard: boolean,
  isLastCard: boolean
) =>
  cn(
    "flex w-full flex-col overflow-hidden rounded-xl text-left no-underline",
    "bg-f1-background-tertiary transition-colors hover:bg-f1-background-secondary",
    !isFirstCard && "rounded-t-sm",
    !isLastCard && "rounded-b-sm",
    isFirstCard && !isFirstOfRun && (isMine ? "rounded-tr-xs" : "rounded-tl-xs")
  )

const PreviewTexts = ({
  preview,
  compact,
}: {
  preview: F0ChatLinkPreview
  compact: boolean
}): ReactNode => (
  <div className="flex min-w-0 flex-col gap-0.5 p-2.5">
    {preview.title && (
      <OneEllipsis className="text-base font-medium text-f1-foreground">
        {preview.title}
      </OneEllipsis>
    )}
    {preview.description && (
      <span
        className={cn(
          "text-sm text-f1-foreground-secondary",
          compact ? "line-clamp-1" : "line-clamp-2"
        )}
      >
        {preview.description}
      </span>
    )}
    <OneEllipsis className="text-sm text-f1-foreground-tertiary">
      {hostOf(preview.url)}
    </OneEllipsis>
  </div>
)

/**
 * Open Graph cards nested at the top of the bubble (WhatsApp-style). One link →
 * a full card with its preview image; several links → compact stacked rows with
 * title/description/host only (Slack-style unfurls, no image wall). Each card
 * opens its link in a new tab. Rendered above the body, mirroring the reply
 * quote's nesting.
 */
export const ChatLinkPreview = ({
  previews,
  isMine = false,
  isFirstOfRun = true,
}: {
  previews: F0ChatLinkPreview[]
  /** The host bubble's side — picks which top corner hugs the bubble. */
  isMine?: boolean
  /** Mirrors the bubble's tail-side top corner, like the reply quote. */
  isFirstOfRun?: boolean
}): ReactNode => {
  if (previews.length === 0) return null
  const compact = previews.length > 1
  return (
    <div className="flex flex-col gap-1 p-1 pb-0">
      {previews.map((preview, index) => (
        <a
          key={`${preview.url}-${index}`}
          href={preview.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass(
            isMine,
            isFirstOfRun,
            index === 0,
            index === previews.length - 1
          )}
        >
          {!compact && preview.imageUrl && (
            <FadeInImage
              src={preview.imageUrl}
              alt=""
              // Fixed height (not max-h): the box is reserved before the OG
              // image loads, so late loads never re-measure the row and shift
              // the transcript mid-conversation.
              className="h-40 w-full bg-f1-background-secondary object-cover"
            />
          )}
          <PreviewTexts preview={preview} compact={compact} />
        </a>
      ))}
    </div>
  )
}
