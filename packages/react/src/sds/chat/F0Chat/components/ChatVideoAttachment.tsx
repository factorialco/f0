import { lazy, Suspense, type ReactNode, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0FileItem } from "@/components/F0FileItem"
import { type IconType } from "@/components/F0Icon"
import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { type F0ChatFileAttachment } from "../types"
import { triggerDownload } from "../utils/download"

const LazyVideoPlayer = lazy(() =>
  import("@/components/F0VideoPlayer").then((module) => ({
    default: module.F0VideoPlayer,
  }))
)

/**
 * An inline chat video powered by F0VideoPlayer. The player owns playback,
 * keyboard shortcuts, speed, volume, captions and fullscreen; chat only adds
 * message sizing/corners and preserves the attachment download action.
 */
export const ChatVideoAttachment = ({
  file,
  cornerClass,
  className,
  action,
}: {
  file: F0ChatFileAttachment
  cornerClass: string
  /** Optional sizing override for compact surfaces such as the composer. */
  className?: string
  /** Override the default download action, e.g. Remove inside the composer. */
  action?: {
    label: string
    icon: IconType
    onClick: () => void
  }
}): ReactNode => {
  const i18n = useI18n()
  const [failed, setFailed] = useState(false)
  const attachmentAction = action ?? {
    label: i18n.t("chat.downloadNamedFile", { name: file.name }),
    icon: Download,
    onClick: () => triggerDownload(file.url, file.name),
  }

  if (failed) {
    return (
      <F0FileItem
        size="md"
        file={{ name: file.name, type: file.mimeType ?? "" }}
        actions={[attachmentAction]}
      />
    )
  }

  return (
    <figure
      aria-label={file.name}
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
      <Suspense
        fallback={
          <div
            role="status"
            aria-label={i18n.t("chat.loadingVideo", { name: file.name })}
            className="h-full w-full"
          >
            <Skeleton className="h-full w-full" />
          </div>
        }
      >
        <LazyVideoPlayer
          src={file.url}
          ariaLabel={i18n.t("chat.videoPlayerLabel", { name: file.name })}
          poster={file.thumbnailUrl}
          content={file.videoContent}
          defaultLanguage={file.videoDefaultLanguage}
          silent={file.videoSilent}
          data-testid="chat-video-player"
        />
      </Suspense>

      <span className="shadow-sm absolute right-2 top-2 z-10 flex rounded bg-f1-background">
        <ButtonInternal
          variant="outline"
          hideLabel
          icon={attachmentAction.icon}
          label={attachmentAction.label}
          onClick={attachmentAction.onClick}
        />
      </span>
      <figcaption className="sr-only">{file.name}</figcaption>
    </figure>
  )
}
