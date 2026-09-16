import { type ReactNode } from "react"
import { cn, focusRing } from "@/lib/utils"
import { useIntrinsicImageSize } from "../hooks/useIntrinsicImageSize"
import { useF0ChatEmit } from "../providers/F0ChatProvider"
import { type F0ChatLinkPreview } from "../types"
import {
  BANNER_MAX_HEIGHT,
  linkPreviewImageLayout,
  THUMB_SIZE,
} from "../utils/link-preview-layout"
import { ClampText } from "./ClampText"
import { FadeInImage } from "./FadeInImage"

/**
 * The card's destination, or null when it isn't one we will open.
 *
 * The URL is scraped metadata from the host (factorial → Stream's `title_link`),
 * and it lands in an `href` the reader clicks: a `javascript:` or `data:` value
 * would run on click, so anything that isn't http(s) is dropped rather than
 * rendered. The parse doubles as the host line — a URL we can't read has no
 * business being a card either.
 */
const safeUrl = (url: string): URL | null => {
  try {
    const parsed = new URL(url)
    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? parsed
      : null
  } catch {
    return null
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
    // Always the full width of the bubble: a card narrower than the message it
    // belongs to reads as a loose fragment.
    "flex w-full overflow-hidden rounded-xl text-left no-underline",
    "bg-f1-background-secondary",
    "transition-shadow hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary",
    focusRing("focus-visible:ring-inset"),
    !isFirstCard && "rounded-t-sm",
    !isLastCard && "rounded-b-sm",
    isFirstCard && !isFirstOfRun && (isMine ? "rounded-tr-xs" : "rounded-tl-xs")
  )

const PreviewTexts = ({
  preview,
  host,
  compact,
}: {
  preview: F0ChatLinkPreview
  host: string
  compact: boolean
}): ReactNode => (
  <div className="flex min-w-0 flex-1 flex-col gap-0.5 p-2.5">
    {preview.title ? (
      <ClampText className="text-base font-medium text-f1-foreground">
        {preview.title}
      </ClampText>
    ) : null}
    {preview.description ? (
      <span
        className={cn(
          "text-sm text-f1-foreground-secondary",
          compact ? "line-clamp-1" : "line-clamp-2"
        )}
      >
        {preview.description}
      </span>
    ) : null}
    <ClampText className="text-sm text-f1-foreground">{host}</ClampText>
  </div>
)

/**
 * One card: the image decides the shape.
 *
 * A landscape image spans the top at its own proportions; anything squarer,
 * taller or smaller becomes a 64px thumbnail beside the text, because a card is
 * a link and not a gallery — cropping a portrait screenshot into a strip showed
 * nothing of it. See {@link linkPreviewImageLayout}.
 */
const PreviewCard = ({
  preview,
  host,
  compact,
  className,
  onOpen,
}: {
  preview: F0ChatLinkPreview
  host: string
  compact: boolean
  className: string
  onOpen: () => void
}): ReactNode => {
  const size = useIntrinsicImageSize(preview.imageUrl)
  const image = linkPreviewImageLayout(preview.imageUrl, size, compact)

  return (
    <a
      href={preview.url}
      onClick={onOpen}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        image.kind === "banner" ? "flex-col" : "flex-row"
      )}
      data-testid="chat-link-preview"
    >
      {image.kind === "banner" ? (
        // The box owns the ratio, so it is reserved before the image arrives and
        // a late load never re-measures the row. The height cap only bites on a
        // wide bubble, and there the image is centred over a blurred copy of
        // itself rather than cropped — the same treatment a letterboxed photo
        // gets in the transcript.
        <div
          style={{
            aspectRatio: image.aspectRatio,
            maxHeight: BANNER_MAX_HEIGHT,
          }}
          className="relative w-full overflow-hidden bg-f1-background-secondary"
          data-testid="chat-link-preview-banner"
        >
          <img
            src={preview.imageUrl}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
          />
          <FadeInImage
            src={preview.imageUrl}
            alt=""
            className="relative h-full w-full object-contain"
          />
        </div>
      ) : null}
      <PreviewTexts preview={preview} host={host} compact={compact} />
      {image.kind === "thumb" ? (
        // Cropped on purpose: at 64px the image is a glyph telling you which
        // link this is, and the page itself is one click away.
        <FadeInImage
          src={preview.imageUrl}
          alt=""
          style={{ width: THUMB_SIZE, height: THUMB_SIZE }}
          className="my-2.5 mr-2.5 shrink-0 self-center rounded-md bg-f1-background-secondary object-cover"
          data-testid="chat-link-preview-thumb"
        />
      ) : null}
    </a>
  )
}

/**
 * Open Graph cards nested at the top of the bubble (WhatsApp-style). One link →
 * a full card whose image takes the shape that suits it; several links →
 * compact stacked rows with a thumbnail each (Slack-style unfurls, no wall of
 * banners). Each card opens its link in a new tab. Rendered above the body,
 * mirroring the reply quote's nesting.
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
  const emit = useF0ChatEmit()
  const safe = previews.flatMap((preview) => {
    const url = safeUrl(preview.url)
    return url ? [{ preview, host: url.hostname.replace(/^www\./, "") }] : []
  })
  if (safe.length === 0) {
    return null
  }
  const compact = safe.length > 1
  return (
    <div className="flex flex-col gap-1 p-1 pb-0">
      {safe.map(({ preview, host }, index) => (
        <PreviewCard
          key={`${preview.url}-${index}`}
          preview={preview}
          host={host}
          compact={compact}
          className={cardClass(
            isMine,
            isFirstOfRun,
            index === 0,
            index === safe.length - 1
          )}
          onOpen={() => emit.onLinkPreviewClicked()}
        />
      ))}
    </div>
  )
}
