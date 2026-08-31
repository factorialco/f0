import { type ReactNode, useState } from "react"

import { cn, focusRing } from "@/lib/utils"

import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import { type F0ChatImageAttachment } from "../types"
import { FadeInImage } from "./FadeInImage"

/**
 * One photo in the transcript mosaic.
 *
 * The cell — not the image — owns the box, through `aspect-ratio`. That is the
 * whole point: the space a photo will occupy is known before a single byte
 * arrives, so nothing in the transcript is measured twice and the row never
 * resizes under the reader.
 *
 * Nothing pulses while it loads. The cell already carries the sender's tint, so
 * an empty cell reads as a quiet surface rather than a hole; when the host can
 * supply a `blurUrl`, that tiny image sits blurred underneath instead and the
 * photo resolves out of it. Both are the real file arriving, not a stand-in
 * for it.
 */
export const ChatImageTile = ({
  image,
  aspectRatio,
  spanFull,
  surfaceClassName,
  label,
  onOpen,
  overlay,
}: {
  image: F0ChatImageAttachment
  /** Width ÷ height for the cell, from the album layout. */
  aspectRatio: number
  /** The 1-up and the 3-up hero span both grid columns. */
  spanFull: boolean
  surfaceClassName?: string
  label: string
  onOpen: () => void
  /** `+N` cover or the message's timestamp, drawn above the photo. */
  overlay?: ReactNode
}): ReactNode => {
  const { reducedMotion } = useChatRenderConfig()
  const [loaded, setLoaded] = useState(false)

  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ aspectRatio }}
      className={cn(
        "relative flex overflow-hidden p-0 transition-opacity hover:opacity-90",
        focusRing("focus-visible:ring-inset"),
        spanFull && "col-span-2",
        surfaceClassName
      )}
      aria-label={label}
      data-testid="chat-image-attachment"
    >
      {image.blurUrl && !loaded && (
        // Scaled up so the blur's soft edges fall outside the cell instead of
        // fading into the tint at the border.
        <img
          src={image.blurUrl}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
          data-testid="chat-image-blur"
        />
      )}
      <FadeInImage
        src={image.thumbnailUrl ?? image.url}
        alt={image.name}
        // Mounted rows are often a screenful ahead of the viewport; fetching on
        // mount is what turns that head start into a photo that is simply there.
        eager
        className={cn(
          "h-full w-full object-cover",
          // A blur underneath deserves a longer dissolve than a bare tint.
          image.blurUrl && !reducedMotion && "duration-300"
        )}
        onLoadedChange={setLoaded}
      />
      {overlay}
    </button>
  )
}
