import { forwardRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import type { DataAttributes } from "@/global.types"
import CrossIcon from "@/icons/app/Cross"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"

import type { F0AiAnnouncementCardProps } from "./types"

/** Shared between the card and its skeleton so the two cannot drift. */
const ROOT_CLASSES =
  "relative flex w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background shadow-md"
const MEDIA_CLASSES = "aspect-video w-full flex-shrink-0 p-1"
const CONTENT_CLASSES = "flex flex-col gap-2 p-3"

const getDataAttributes = (props: F0AiAnnouncementCardProps): DataAttributes =>
  Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith("data-"))
  ) as DataAttributes

const F0AiAnnouncementCardComponent = forwardRef<
  HTMLDivElement,
  F0AiAnnouncementCardProps
>(function F0AiAnnouncementCard(props, ref) {
  const {
    title,
    description,
    mediaUrl,
    primaryAction,
    secondaryAction,
    onClose,
    isLoading = false,
    children,
  } = props
  const [dismissed, setDismissed] = useState(false)

  const handleClose = () => {
    onClose?.()
    setDismissed(true)
  }

  if (isLoading) return <F0AiAnnouncementCardSkeleton ref={ref} />
  if (dismissed) return null

  const isVideo = mediaUrl?.endsWith(".mp4")

  return (
    <section
      ref={ref}
      className={ROOT_CLASSES}
      aria-label={title}
      {...getDataAttributes(props)}
    >
      {mediaUrl && (
        <div className={MEDIA_CLASSES}>
          {isVideo ? (
            <video
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <img
              src={mediaUrl}
              alt=""
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </div>
      )}

      <div className={CONTENT_CLASSES}>
        <div className="flex w-full flex-col gap-1">
          <h3 className="font-medium text-lg text-f1-foreground">{title}</h3>
          {/* Clamped rather than truncated: the card sits in a narrow surface
              and a long description would otherwise push the actions out of
              view, which is the one thing it cannot afford to lose. */}
          <p className="line-clamp-2 text-base text-f1-foreground-secondary">
            {description}
          </p>
        </div>

        <div className="flex gap-2">
          {primaryAction && (
            <F0Button
              label={primaryAction.label}
              onClick={primaryAction.onClick}
              icon={primaryAction.icon}
              variant="outline"
              size="md"
            />
          )}
          {secondaryAction && (
            <F0Button
              label={secondaryAction.label}
              onClick={secondaryAction.onClick}
              icon={secondaryAction.icon}
              variant="ghost"
              size="md"
            />
          )}
          {children}
        </div>
      </div>

      {onClose && (
        <div className="absolute right-2 top-2 z-10">
          <F0Button
            variant="ghost"
            icon={CrossIcon}
            size="sm"
            hideLabel
            onClick={handleClose}
            label="Close"
          />
        </div>
      )}
    </section>
  )
})

const F0AiAnnouncementCardSkeleton = forwardRef<HTMLDivElement>(
  function F0AiAnnouncementCardSkeleton(props, ref) {
    return (
      <div
        ref={ref}
        className={ROOT_CLASSES}
        role="status"
        aria-busy="true"
        aria-live="polite"
        {...props}
      >
        <div className={MEDIA_CLASSES}>
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
        <div className={CONTENT_CLASSES}>
          <div className="flex w-full flex-col gap-1">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
    )
  }
)

export const F0AiAnnouncementCard = withSkeleton(
  F0AiAnnouncementCardComponent,
  F0AiAnnouncementCardSkeleton
)

F0AiAnnouncementCard.displayName = "F0AiAnnouncementCard"
