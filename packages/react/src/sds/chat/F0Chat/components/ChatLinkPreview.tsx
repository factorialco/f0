import { type ReactNode } from "react"

import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { cn } from "@/lib/utils"

import { type F0ChatLinkPreview } from "../types"

const hostOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

const cardClass = (isMine: boolean, isFirstOfRun: boolean) =>
  cn(
    "flex w-full flex-col overflow-hidden rounded-xl text-left no-underline",
    "bg-f1-background-tertiary transition-colors hover:bg-f1-background-secondary",
    // Tail-side top corner mirrors the host bubble (same as the reply quote).
    isFirstOfRun
      ? isMine
        ? "rounded-tr-xl"
        : "rounded-tl-xl"
      : isMine
        ? "rounded-tr-xs"
        : "rounded-tl-xs"
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
          // Only the first card touches the bubble's top corner.
          className={cardClass(isMine, index === 0 ? isFirstOfRun : true)}
        >
          {!compact && preview.imageUrl && (
            <img
              src={preview.imageUrl}
              alt=""
              className="max-h-40 w-full object-cover"
            />
          )}
          <PreviewTexts preview={preview} compact={compact} />
        </a>
      ))}
    </div>
  )
}
