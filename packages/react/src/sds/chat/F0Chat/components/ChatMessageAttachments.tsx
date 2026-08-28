import { type ReactNode } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { useChatImagePreview } from "../providers/ChatUIProvider"
import { useF0ChatEmit } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { attachedKindOf, partitionChatAttachments } from "../utils/attachments"
import { triggerDownload } from "../utils/download"
import { messageSurfaceColorClass } from "../utils/sender-color"
import { bubbleCornerClass } from "./ChatBubble"
import { ChatDocumentAttachmentCard } from "./ChatDocumentAttachmentCard"
import { ChatLocationAttachment } from "./ChatLocationAttachment"
import { ChatVideoAttachment } from "./ChatVideoAttachment"
import { ChatVoiceAttachment } from "./ChatVoiceAttachment"
import { FadeInImage } from "./FadeInImage"

/**
 * Attachments shown above a message bubble — images render inline (clickable to
 * open the in-chat lightbox); videos render as wide, inline F0VideoPlayers;
 * previewable documents (pdf/sheet/docx/text) get a Slack-style snapshot card
 * (clickable to open the fullscreen viewer); other files use
 * {@link F0FileItem} with a download action, mirroring the AI chat's file
 * rendering. Multiple videos stack vertically so each keeps the largest useful
 * playback area. A lone image, video, location, voice and document cards follow
 * the bubble's chained corners (run-aware); file chips can't.
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
  const emit = useF0ChatEmit()
  const attachments = message.attachments
  if (!attachments || attachments.length === 0) return null
  const surfaceClassName = messageSurfaceColorClass(message.author, isMine)

  const {
    images,
    videos: videoFiles,
    documents: documentFiles,
    files: plainFiles,
    locations,
    voices,
  } = partitionChatAttachments(attachments)
  const nonVideoFileCount = documentFiles.length + plainFiles.length
  // A lone image gets full size; several flow side by side (wrap) as thumbnails
  // so the message doesn't grow tall.
  const singleImage = images.length === 1
  // Chained corners for the media cards, mirroring the bubble's run logic — but
  // aware of what stacks BELOW them inside the same message too: a card only
  // keeps its round bottom corner when nothing follows it (no more media, no
  // caption bubble, no further message of the run).
  const captionBelow =
    message.body.trim().length > 0 || Boolean(message.replyTo)
  const belowImages =
    videoFiles.length > 0 ||
    nonVideoFileCount > 0 ||
    voices.length > 0 ||
    captionBelow ||
    !isLastOfRun
  const imageCorners = bubbleCornerClass({
    isMine,
    isFirstOfRun,
    isLastOfRun: locations.length === 0 && !belowImages,
  })
  const belowVideos =
    locations.length > 0 ||
    voices.length > 0 ||
    nonVideoFileCount > 0 ||
    captionBelow ||
    !isLastOfRun
  const videoCorners = (index: number): string =>
    bubbleCornerClass({
      isMine,
      isFirstOfRun: isFirstOfRun && images.length === 0 && index === 0,
      isLastOfRun: index === videoFiles.length - 1 && !belowVideos,
    })
  const belowLocations =
    voices.length > 0 || nonVideoFileCount > 0 || captionBelow || !isLastOfRun
  const locationCorners = (index: number): string =>
    bubbleCornerClass({
      isMine,
      isFirstOfRun:
        isFirstOfRun &&
        images.length === 0 &&
        videoFiles.length === 0 &&
        index === 0,
      isLastOfRun: index === locations.length - 1 && !belowLocations,
    })
  // Voice notes stack after the locations, before the files/caption.
  const belowVoices = nonVideoFileCount > 0 || captionBelow || !isLastOfRun
  const voiceCorners = (index: number): string =>
    bubbleCornerClass({
      isMine,
      isFirstOfRun:
        isFirstOfRun &&
        images.length === 0 &&
        videoFiles.length === 0 &&
        locations.length === 0 &&
        index === 0,
      isLastOfRun: index === voices.length - 1 && !belowVoices,
    })
  // Document cards stack after the voices, before the plain files/caption.
  const belowDocuments = plainFiles.length > 0 || captionBelow || !isLastOfRun
  const documentCorners = (index: number): string =>
    bubbleCornerClass({
      isMine,
      isFirstOfRun:
        isFirstOfRun &&
        images.length === 0 &&
        videoFiles.length === 0 &&
        locations.length === 0 &&
        voices.length === 0 &&
        index === 0,
      isLastOfRun: index === documentFiles.length - 1 && !belowDocuments,
    })

  return (
    <div
      // Read by SELF_HANDLING_DESCENDANTS in ChatMessageItem: a deferred
      // placeholder is not focusable, and must not quote where the mounted
      // preview would not.
      data-chat-attachments=""
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
              onClick={() => {
                openImagePreview(images, i)
                emit.onImageOpened({ count: images.length })
              }}
              className={cn(
                "flex overflow-hidden transition-opacity hover:opacity-90",
                focusRing("focus-visible:ring-inset"),
                singleImage ? imageCorners : "rounded-xl",
                surfaceClassName
              )}
              aria-label={i18n.chat.openImage}
              data-testid="chat-image-attachment"
            >
              <FadeInImage
                src={image.thumbnailUrl ?? image.url}
                alt={image.name}
                // Native width/height reserve the box via aspect-ratio BEFORE
                // the image loads — no late re-measure shifting the transcript
                // (adapters should populate the dimensions; Stream sends
                // original_width/height). Without both, a fixed fallback box
                // avoids a late Virtuoso height correction.
                width={singleImage ? image.width : undefined}
                height={singleImage ? image.height : undefined}
                className={cn(
                  "border border-solid border-f1-border-secondary object-cover",
                  surfaceClassName,
                  // A lone image follows the bubble's chained corners; grid
                  // thumbnails keep the uniform radius.
                  singleImage
                    ? cn(
                        imageCorners,
                        "h-auto max-h-60 w-auto max-w-full",
                        (image.width == null || image.height == null) &&
                          "h-60 w-80"
                      )
                    : "h-28 w-28 rounded-xl"
                )}
              />
            </button>
          ))}
        </div>
      )}
      {videoFiles.map((file, i) => (
        <ChatVideoAttachment
          key={`${file.url}-${i}`}
          file={file}
          cornerClass={videoCorners(i)}
          surfaceClassName={surfaceClassName}
        />
      ))}
      {locations.map((location, i) => (
        <ChatLocationAttachment
          key={`${location.latitude},${location.longitude}-${i}`}
          location={location}
          cornerClass={locationCorners(i)}
          surfaceClassName={surfaceClassName}
        />
      ))}
      {voices.map((voice, i) => (
        <ChatVoiceAttachment
          key={`${voice.url}-${i}`}
          voice={voice}
          isMine={isMine}
          cornerClass={voiceCorners(i)}
          surfaceClassName={surfaceClassName}
        />
      ))}
      {documentFiles.map(({ file, kind }, i) => (
        <ChatDocumentAttachmentCard
          key={`${file.url}-${i}`}
          file={file}
          kind={kind}
          cornerClass={documentCorners(i)}
          surfaceClassName={surfaceClassName}
        />
      ))}
      {plainFiles.length > 0 && (
        // Files flow side by side and wrap, instead of stacking vertically.
        <div className={cn("flex flex-wrap gap-1", isMine && "justify-end")}>
          {plainFiles.map((file, i) => (
            <F0FileItem
              key={`${file.url}-${i}`}
              size="md"
              file={{ name: file.name, type: file.mimeType ?? "" }}
              actions={[
                {
                  label: i18n.chat.download,
                  icon: Download,
                  onClick: () => {
                    triggerDownload(file.url, file.name)
                    emit.onAttachmentDownloaded({ kind: attachedKindOf(file) })
                  },
                },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  )
}
