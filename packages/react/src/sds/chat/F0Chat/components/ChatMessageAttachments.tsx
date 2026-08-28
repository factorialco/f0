import { type ReactNode } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatImagePreview } from "../providers/ChatUIProvider"
import { type F0ChatMessage } from "../types"
import { albumCells } from "../utils/album-layout"
import { partitionChatAttachments } from "../utils/attachments"
import { triggerDownload } from "../utils/download"
import {
  CHAT_ALBUM_GAP_CLASS,
  CHAT_ALBUM_MORE_CLASS,
  CHAT_MEDIA_WIDTH_CLASS,
} from "../utils/media-layout"
import { messageSurfaceColorClass } from "../utils/sender-color"
import { bubbleCornerClass } from "./ChatBubble"
import { ChatDocumentAttachmentCard } from "./ChatDocumentAttachmentCard"
import { ChatImageTile } from "./ChatImageTile"
import { ChatLocationAttachment } from "./ChatLocationAttachment"
import { ChatMessageMeta } from "./ChatMessageMeta"
import { ChatVideoAttachment } from "./ChatVideoAttachment"
import { ChatVoiceAttachment } from "./ChatVoiceAttachment"

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

  // With no caption below, the message's own time has to live on the media.
  // Rendering order is images → videos → locations → voices → documents →
  // chips, so the LAST non-empty block hosts it. Surfaces with room take a
  // scrim overlay; a voice card (fixed 58px, right slot already spoken for)
  // and file chips (foreign markup) fall back to a line underneath.
  const metaHost: "image" | "video" | "location" | "below" | null =
    message.body.trim().length > 0 || message.replyTo || message.deleted
      ? null
      : nonVideoFileCount > 0 || voices.length > 0
        ? "below"
        : locations.length > 0
          ? "location"
          : videoFiles.length > 0
            ? "video"
            : images.length > 0
              ? "image"
              : null

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
      className={cn(
        // w-full gives the column a definite width so the cards' `max-w-full`
        // resolves against real space (fit-content would ignore it and lock the
        // voice card at its 320px default even on narrow containers).
        "flex w-full min-w-0 flex-col gap-1",
        isMine ? "items-end" : "items-start"
      )}
    >
      {images.length > 0 && (
        // The mosaic clips its own cells, so the cells carry no radius — the
        // interior seams stay square like WhatsApp's. The hairline lives on the
        // container for the same reason mobile puts it there: a mostly-white
        // photo would otherwise dissolve into the transcript background.
        <div
          className={cn(
            "grid grid-cols-2 overflow-hidden border border-solid border-f1-border-secondary",
            CHAT_MEDIA_WIDTH_CLASS,
            CHAT_ALBUM_GAP_CLASS,
            imageCorners
          )}
          data-testid="chat-image-album"
        >
          {albumCells(images).map((cell, cellIndex, cells) => {
            const image = images[cell.index]
            if (!image) return null
            const hostsMeta =
              metaHost === "image" && cellIndex === cells.length - 1
            return (
              <ChatImageTile
                key={`${image.url}-${cell.index}`}
                image={image}
                aspectRatio={cell.aspectRatio}
                spanFull={cell.span === 2}
                surfaceClassName={surfaceClassName}
                label={i18n.chat.openImage}
                onOpen={() => openImagePreview(images, cell.index)}
                overlay={
                  cell.hiddenCount > 0 ? (
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-0 flex items-center justify-center text-2xl font-semibold text-f1-foreground-inverse",
                        CHAT_ALBUM_MORE_CLASS
                      )}
                      data-testid="chat-image-album-more"
                    >
                      {`+${cell.hiddenCount}`}
                    </span>
                  ) : hostsMeta ? (
                    <ChatMessageMeta message={message} placement="overlay" />
                  ) : undefined
                }
              />
            )
          })}
        </div>
      )}
      {videoFiles.map((file, i) => (
        <ChatVideoAttachment
          key={`${file.url}-${i}`}
          file={file}
          cornerClass={videoCorners(i)}
          surfaceClassName={surfaceClassName}
          meta={
            metaHost === "video" && i === videoFiles.length - 1 ? (
              <ChatMessageMeta message={message} placement="overlay" />
            ) : undefined
          }
        />
      ))}
      {locations.map((location, i) => (
        <ChatLocationAttachment
          key={`${location.latitude},${location.longitude}-${i}`}
          location={location}
          cornerClass={locationCorners(i)}
          surfaceClassName={surfaceClassName}
          meta={
            metaHost === "location" && i === locations.length - 1 ? (
              <ChatMessageMeta message={message} placement="overlay" />
            ) : undefined
          }
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
                  onClick: () => triggerDownload(file.url, file.name),
                },
              ]}
            />
          ))}
        </div>
      )}
      {metaHost === "below" && (
        <ChatMessageMeta message={message} placement="below" />
      )}
    </div>
  )
}
