import { type ReactNode } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatImagePreview } from "../providers/ChatUIProvider"
import {
  type F0ChatFileAttachment,
  type F0ChatImageAttachment,
  type F0ChatLocationAttachment,
  type F0ChatMessage,
  type F0ChatVoiceAttachment,
} from "../types"
import { triggerDownload } from "../utils/download"
import { bubbleCornerClass } from "./ChatBubble"
import { ChatLocationAttachment } from "./ChatLocationAttachment"
import { ChatVoiceAttachment } from "./ChatVoiceAttachment"

/**
 * Attachments shown above a message bubble — images render inline (clickable to
 * open the in-chat lightbox); other files use {@link F0FileItem} with a download
 * action, mirroring the AI chat's file rendering. A lone image and location
 * cards follow the bubble's chained corners (run-aware); file chips can't.
 */
export const ChatMessageAttachments = ({
  message,
  isMine,
  isFirstOfRun = true,
  isLastOfRun = true,
}: {
  message: F0ChatMessage
  isMine: boolean
  /** Run flags — the media cards tuck their tail-side corners like the bubble. */
  isFirstOfRun?: boolean
  isLastOfRun?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const { openImagePreview } = useChatImagePreview()
  const attachments = message.attachments
  if (!attachments || attachments.length === 0) return null

  const images = attachments.filter(
    (a): a is F0ChatImageAttachment => a.kind === "image"
  )
  const files = attachments.filter(
    (a): a is F0ChatFileAttachment => a.kind === "file"
  )
  const locations = attachments.filter(
    (a): a is F0ChatLocationAttachment => a.kind === "location"
  )
  const voices = attachments.filter(
    (a): a is F0ChatVoiceAttachment => a.kind === "voice"
  )
  // A lone image gets full size; several flow side by side (wrap) as thumbnails
  // so the message doesn't grow tall.
  const singleImage = images.length === 1
  // Chained corners for the media cards, mirroring the bubble's run logic — but
  // aware of what stacks BELOW them inside the same message too: a card only
  // keeps its round bottom corner when nothing follows it (no more media, no
  // caption bubble, no further message of the run).
  const captionBelow =
    message.body.trim().length > 0 || Boolean(message.replyTo)
  const belowMedia =
    files.length > 0 || voices.length > 0 || captionBelow || !isLastOfRun
  const imageCorners = bubbleCornerClass(
    isMine,
    isFirstOfRun,
    locations.length === 0 && !belowMedia
  )
  const locationCorners = (index: number): string =>
    bubbleCornerClass(
      isMine,
      isFirstOfRun && images.length === 0 && index === 0,
      index === locations.length - 1 && !belowMedia
    )
  // Voice notes stack after the locations, before the files/caption.
  const belowVoices = files.length > 0 || captionBelow || !isLastOfRun
  const voiceCorners = (index: number): string =>
    bubbleCornerClass(
      isMine,
      isFirstOfRun &&
        images.length === 0 &&
        locations.length === 0 &&
        index === 0,
      index === voices.length - 1 && !belowVoices
    )

  return (
    <div
      className={cn(
        // w-full gives the column a definite width so the cards' `max-w-full`
        // resolves against real space (fit-content would ignore it and lock the
        // voice card at its 320px default even on narrow containers).
        "flex w-full min-w-0 flex-col gap-1",
        isMine ? "items-end" : "items-start"
      )}
    >
      {images.length > 0 && (
        <div className={cn("flex flex-wrap gap-1", isMine && "justify-end")}>
          {images.map((image, i) => (
            <button
              key={`${image.url}-${i}`}
              type="button"
              onClick={() => openImagePreview(images, i)}
              className={cn(
                "flex overflow-hidden transition-opacity hover:opacity-90",
                singleImage ? imageCorners : "rounded-xl"
              )}
              aria-label={i18n.chat.openImage}
            >
              <img
                src={image.thumbnailUrl ?? image.url}
                alt={image.name}
                // Native width/height reserve the box via aspect-ratio BEFORE
                // the image loads — no late re-measure shifting the transcript
                // (adapters should populate the dimensions; Stream sends
                // original_width/height). Without them, min-h keeps the jump
                // bounded.
                width={singleImage ? image.width : undefined}
                height={singleImage ? image.height : undefined}
                className={cn(
                  "border border-solid border-f1-border-secondary object-cover",
                  "bg-f1-background-secondary",
                  // A lone image follows the bubble's chained corners; grid
                  // thumbnails keep the uniform radius.
                  singleImage
                    ? cn(
                        imageCorners,
                        "h-auto max-h-60 w-auto max-w-full",
                        image.width == null && "min-h-28"
                      )
                    : "h-28 w-28 rounded-xl"
                )}
              />
            </button>
          ))}
        </div>
      )}
      {locations.map((location, i) => (
        <ChatLocationAttachment
          key={`${location.latitude},${location.longitude}-${i}`}
          location={location}
          cornerClass={locationCorners(i)}
        />
      ))}
      {voices.map((voice, i) => (
        <ChatVoiceAttachment
          key={`${voice.url}-${i}`}
          voice={voice}
          isMine={isMine}
          cornerClass={voiceCorners(i)}
        />
      ))}
      {files.length > 0 && (
        // Files flow side by side and wrap, instead of stacking vertically.
        <div className={cn("flex flex-wrap gap-1", isMine && "justify-end")}>
          {files.map((file, i) => (
            <F0FileItem
              key={`${file.url}-${i}`}
              size="md"
              file={{ name: file.name, type: file.mimeType ?? "" }}
              actions={[
                {
                  label: i18n.chat.download,
                  icon: Download,
                  onClick: () => triggerDownload(file.url, file.name),
                },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  )
}
