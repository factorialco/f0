import { lazy, Suspense, type ReactNode, useState } from "react"

import { F0FileItem } from "@/components/F0FileItem"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { useDeferredHeavyMount } from "../hooks/useDeferredHeavyMount"
import { type F0ChatFileAttachment } from "../types"
import { triggerDownload } from "../utils/download"

const LazyVideoPlayer = lazy(() =>
  import("@/components/F0VideoPlayer").then((module) => ({
    default: module.F0VideoPlayer,
  }))
)

/**
 * An inline chat video powered by F0VideoPlayer. The player owns playback,
 * keyboard shortcuts, speed, volume, captions, download and fullscreen; chat
 * adds the file-specific download action, message sizing and chained corners.
 */
export const ChatVideoAttachment = ({
  file,
  cornerClass,
  className,
  deferHeavyContent = false,
}: {
  file: F0ChatFileAttachment
  cornerClass: string
  /** Optional sizing override for compact surfaces such as the composer. */
  className?: string
  /** Keep player initialization out of an active transcript scroll. */
  deferHeavyContent?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const [failed, setFailed] = useState(false)
  const mountPlayer = useDeferredHeavyMount(true, deferHeavyContent)
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
      aria-busy={!mountPlayer ? true : undefined}
      className={cn(
        "group/video relative m-0 aspect-video w-full max-w-xl overflow-hidden",
        cornerClass,
        className
      )}
      onErrorCapture={(event) => {
        if (event.target instanceof HTMLVideoElement) {
          setFailed(true)
        }
      }}
      data-testid="chat-video-attachment"
    >
      {mountPlayer ? (
        <Suspense fallback={<VideoSkeleton name={file.name} />}>
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
      ) : (
        <VideoSkeleton name={file.name} announce={false} />
      )}

      <figcaption className="sr-only">{file.name}</figcaption>
    </figure>
  )
}

const VideoSkeleton = ({
  name,
  announce = true,
}: {
  name: string
  announce?: boolean
}): ReactNode => {
  const i18n = useI18n()
  return (
    <div
      role={announce ? "status" : undefined}
      aria-label={announce ? i18n.t("chat.loadingVideo", { name }) : undefined}
      aria-hidden={announce ? undefined : true}
      className="h-full w-full"
    >
      <Skeleton
        className={cn(
          "h-full w-full",
          announce ? "motion-reduce:animate-none" : "animate-none"
        )}
      />
    </div>
  )
}
