import { f1Colors } from "@factorialco/f0-core"

import { CalendarEvent } from "@/experimental/Widgets/Content/CalendarEvent"
import { formatTime } from "@/lib/date"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"

import { isVideo } from "../CommunityPost/video"

export type PostEventProps = {
  title: string
  mediaUrl?: string
  place?: string
  date: Date
}

export const BasePostEvent = ({
  title,
  mediaUrl,
  place,
  date,
}: PostEventProps) => {
  let description = formatTime(date)

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.stopPropagation()
  }

  if (place) {
    description = `${description} · ${place}`
  }

  return (
    <div className="flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow">
      {mediaUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          {isVideo(mediaUrl) ? (
            <video
              controls
              className="aspect-video h-full w-full bg-f1-background-secondary object-cover"
              onClick={handleVideoClick}
            >
              <source src={mediaUrl} />
            </video>
          ) : (
            <>
              <img
                src={mediaUrl}
                role="presentation"
                loading="lazy"
                className="aspect-video h-full w-full object-cover"
              />
              <Skeleton className="absolute inset-0 h-full w-full" />
            </>
          )}
        </div>
      )}
      <CalendarEvent
        title={title}
        description={description}
        color={f1Colors.special.highlight}
        isPending={false}
        toDate={date}
        noBackground
      />
    </div>
  )
}

export const PostEventSkeleton = () => (
  <div
    className="flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1"
    role="status"
    aria-busy="true"
    aria-live="polite"
  >
    <div>
      <Skeleton className="aspect-video h-full w-full rounded-lg" />
    </div>
    <div className="flex h-full flex-row gap-3 p-2">
      <Skeleton className="w-1 shrink-0 self-stretch rounded-full" />
      <div className="flex grow flex-col gap-1.5 py-1">
        <Skeleton className="mt-px h-3 w-1/2" />
        <Skeleton className="mb-px h-3 w-1/4" />
      </div>
    </div>
  </div>
)

export const PostEvent = withSkeleton(BasePostEvent, PostEventSkeleton)
