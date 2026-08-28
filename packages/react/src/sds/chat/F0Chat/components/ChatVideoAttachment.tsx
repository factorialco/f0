import { lazy, Suspense, type ReactNode, useState } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { SolidPlay } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { type F0ChatFileAttachment } from "../types"
import { formatFileSize } from "../utils/attachments"
import { triggerDownload } from "../utils/download"
import {
  CHAT_MEDIA_BADGE_CLASS,
  CHAT_MEDIA_OVERLAY_CLASS,
  CHAT_MEDIA_WIDTH_CLASS,
  CHAT_VIDEO_SURFACE_CLASS,
} from "../utils/media-layout"
import { FadeInImage } from "./FadeInImage"

const loadVideoPlayer = () =>
  import("@/components/F0VideoPlayer").then((module) => ({
    default: module.F0VideoPlayer,
  }))
const LazyVideoPlayer = lazy(loadVideoPlayer)

/**
 * An inline chat video powered by F0VideoPlayer. The player owns playback,
 * keyboard shortcuts, speed, volume, captions, download and fullscreen; chat
 * adds the file-specific download action, message sizing and chained corners.
 */
export const ChatVideoAttachment = ({
  file,
  cornerClass,
  className,
  surfaceClassName,
  meta,
}: {
  file: F0ChatFileAttachment
  cornerClass: string
  /** Optional sizing override for compact surfaces such as the composer. */
  className?: string
  /** Sender-aware surface supplied by a transcript message. */
  surfaceClassName?: string
  /** Scrim + timestamp, when this card is the last thing in its message. */
  meta?: ReactNode
}): ReactNode => {
  const i18n = useI18n()
  const [failed, setFailed] = useState(false)
  const [mediaReady, setMediaReady] = useState(false)
  const sizeLabel = file.size != null ? formatFileSize(file.size) : null
  const downloadAction = {
    label: i18n.t("chat.downloadNamedFile", { name: file.name }),
    icon: Download,
    onClick: () => triggerDownload(file.url, file.name),
  }

  if (failed) {
    return (
      <F0FileItem
        size="md"
        file={{ name: file.name, type: file.mimeType ?? "" }}
        actions={[downloadAction]}
      />
    )
  }

  return (
    <figure
      aria-label={file.name}
      aria-busy={!mediaReady ? true : undefined}
      className={cn(
        // Shares the transcript's single media width. The placeholder and the
        // loaded player get the same box so mounting controls cannot resize the
        // row. This used to be a fixed 36rem, which also made video the largest
        // per-row height swing of any width change.
        "group/video relative m-0 aspect-video max-w-full overflow-hidden",
        CHAT_MEDIA_WIDTH_CLASS,
        // Neutral dark letterbox, never the sender tint: the sender colour is
        // for card chrome, not for the bars around someone's pixels.
        CHAT_VIDEO_SURFACE_CLASS,
        cornerClass,
        className
      )}
      onErrorCapture={(event) => {
        if (event.target instanceof HTMLVideoElement) {
          setFailed(true)
        }
      }}
      onLoadedDataCapture={(event) => {
        if (event.target instanceof HTMLVideoElement) {
          setMediaReady(true)
        }
      }}
      data-testid="chat-video-attachment"
    >
      {/* Keep a stable visual behind the lazy player until the browser has an
          actual frame. It never intercepts input: browsers may require a user
          gesture before loading media, so the controls must stay reachable. */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-150 motion-reduce:transition-none",
          mediaReady && "opacity-0"
        )}
        aria-hidden={mediaReady ? true : undefined}
        data-testid="chat-video-placeholder"
      >
        <VideoPlaceholder
          name={file.name}
          poster={file.thumbnailUrl}
          announce={!mediaReady}
          surfaceClassName={surfaceClassName}
        />
        {/* Wash + play affordance so a poster still reads as a video, and the
            size badge WhatsApp shows before you commit to downloading it. */}
        <span className="absolute inset-0 bg-[hsl(0_0%_0%/0.2)]" />
        <span
          className={cn(
            "absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-f1-foreground-inverse",
            CHAT_MEDIA_OVERLAY_CLASS
          )}
        >
          <SolidPlay className="size-6" />
        </span>
        {sizeLabel && (
          <span
            className={cn(
              "absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-sm font-medium text-f1-foreground-inverse",
              CHAT_MEDIA_BADGE_CLASS
            )}
            data-testid="chat-video-size"
          >
            {sizeLabel}
          </span>
        )}
      </div>

      <div
        className="relative z-10 h-full w-full"
        data-testid="chat-video-player-shell"
      >
        <Suspense fallback={null}>
          <LazyVideoPlayer
            src={file.url}
            ariaLabel={i18n.t("chat.videoPlayerLabel", { name: file.name })}
            poster={file.thumbnailUrl}
            content={file.videoContent}
            defaultLanguage={file.videoDefaultLanguage}
            silent={file.videoSilent}
            download={{
              label: downloadAction.label,
              onClick: downloadAction.onClick,
            }}
            data-testid="chat-video-player"
          />
        </Suspense>
      </div>

      {/* Above the player shell so the time stays readable over the poster, and
          hidden on hover so it never fights the player's own bottom controls. */}
      {meta && (
        <span className="pointer-events-none absolute inset-0 z-20 opacity-100 transition-opacity duration-150 group-hover/video:opacity-0 motion-reduce:transition-none">
          {meta}
        </span>
      )}

      <figcaption className="sr-only">{file.name}</figcaption>
    </figure>
  )
}

const VideoPlaceholder = ({
  name,
  poster,
  announce = true,
  surfaceClassName,
}: {
  name: string
  poster?: string
  announce?: boolean
  surfaceClassName?: string
}): ReactNode => {
  const i18n = useI18n()
  return (
    <div
      role={announce ? "status" : undefined}
      aria-label={announce ? i18n.t("chat.loadingVideo", { name }) : undefined}
      aria-hidden={announce ? undefined : true}
      className="relative h-full w-full"
    >
      {poster ? (
        <FadeInImage
          src={poster}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      ) : (
        <Skeleton
          className={cn(
            "h-full w-full",
            announce ? "motion-reduce:animate-none" : "animate-none",
            surfaceClassName
          )}
        />
      )}
    </div>
  )
}
