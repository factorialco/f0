import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { IconType } from "@/components/F0Icon"
import { Bell as BellIcon } from "@/icons/app"
import { getDisplayDateBasedOnDuration } from "@/lib/date"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"
import { useIntersectionObserver } from "usehooks-ts"
import { experimentalComponent } from "@/lib/experimental"

export type ActivityItemProps = {
  id: string
  createdAt: Date
  title: string
  description?: string
  icon?: IconType
  category: string
  isUnread?: boolean
  onClick: (id: string) => void
  onVisible?: (id: string) => void
}

export const BaseActivityItem = ({
  id,
  createdAt,
  title,
  description,
  icon,
  category,
  isUnread = false,
  onClick,
  onVisible,
}: ActivityItemProps) => {
  const { ref } = useIntersectionObserver({
    threshold: 0.1,
    onChange(isIntersecting) {
      if (isIntersecting) {
        onVisible?.(id)
      }
    },
  })

  const ago = getDisplayDateBasedOnDuration(createdAt, {
    yesterdayRelative: false,
  })

  const handleClick = () => {
    onClick(id)
  }

  return (
    <div
      ref={ref}
      className="flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"
      onClick={handleClick}
    >
      <F0AvatarIcon icon={icon ?? BellIcon} />
      <div className="flex-1">
        <p
          className="line-clamp-2 font-medium text-f1-foreground"
          title={title}
        >
          {title}
        </p>
        <p
          className="line-clamp-2 text-f1-foreground-secondary"
          title={description}
        >
          {description}
        </p>
        <div className="mt-1.5 flex flex-row">
          <p className="text-f1-foreground-secondary">{`${category} · ${ago}`}</p>
        </div>
      </div>
      <div className="ml-1">
        {isUnread && (
          <div className="mt-1.5 size-2 rounded-full bg-f1-icon-accent" />
        )}
      </div>
    </div>
  )
}

export const ActivityItemSkeleton = () => (
  <div className="flex w-full flex-row gap-2 rounded-lg p-2 pr-3">
    <Skeleton className="size-9 rounded-md" />
    <div className="flex-1">
      <Skeleton className="mb-1 h-5 w-full" />

      <Skeleton className="mb-1 h-4 w-full" />
      <Skeleton className="mb-1 h-4 w-full" />

      <Skeleton className="mt-1.5 h-4 w-1/3" />
    </div>
  </div>
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const ActivityItem = experimentalComponent(
  "ActivityItem",
  withSkeleton(BaseActivityItem, ActivityItemSkeleton)
)
