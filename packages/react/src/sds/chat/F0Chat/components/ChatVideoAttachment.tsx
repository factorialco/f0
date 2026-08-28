import { lazy, Suspense, type ReactNode, useState } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { useTranscriptHeavyPreview } from "../hooks/useTranscriptHeavyPreview"
import { useF0ChatEmit } from "../providers/F0ChatProvider"
import { type F0ChatFileAttachment } from "../types"
import { triggerDownload } from "../utils/download"
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
}: {
  file: F0ChatFileAttachment
  cornerClass: string
  /** Optional sizing override for compact surfaces such as the composer. */
  className?: string
  /** Sender-aware surface supplied by a transcript message. */
  surfaceClassName?: string
}): ReactNode => {
  const i18n = useI18n()
  const emit = useF0ChatEmit()
  const [failed, setFailed] = useState(false)
  const [mediaReady, setMediaReady] = useState(false)
  const { ref, shouldMount } = useTranscriptHeavyPreview(loadVideoPlayer)
  const downloadAction = {
    label: i18n.t("chat.downloadNamedFile", { name: file.name }),
    icon: Download,
    onClick: () => {
      triggerDownload(file.url, file.name)
      emit.onAttachmentDownloaded({ kind: "video" })
    },
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
      ref={ref}
      aria-label={file.name}
      aria-busy={!mediaReady ? true : undefined}
      className={cn(
        // A percentage width has no stable intrinsic size inside the message's
        // shrink-to-fit flex column. Give the placeholder and the loaded player
        // the same preferred width so mounting controls cannot resize the row.
        "group/video relative m-0 aspect-video w-[36rem] max-w-full overflow-hidden bg-f1-background-secondary",
        cornerClass,
        className,
        surfaceClassName
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
      </div>

      <div
        className="relative z-10 h-full w-full"
        data-testid="chat-video-player-shell"
      >
        {shouldMount && (
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
        )}
      </div>

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
