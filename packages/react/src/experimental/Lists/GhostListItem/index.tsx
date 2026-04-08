import React from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Check } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

export interface GhostListItemProps {
  /** Icon displayed on the left */
  icon: IconType
  /** Item title */
  title: string
  /** Whether the item is filled (true) or pending (false) */
  filled: boolean
  /** Date or secondary text */
  date: string
  /** Whether the item is selected */
  selected?: boolean
  /** Click handler */
  onClick?: () => void
}

const BaseGhostListItem = React.forwardRef<HTMLDivElement, GhostListItemProps>(
  ({ icon, title, filled, date, selected = false, onClick }, ref) => {
    const { lists } = useI18n()

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-xl border border-solid border-transparent bg-f1-background p-3 transition-all hover:border-f1-border",
          selected && "bg-f1-background-tertiary"
        )}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onClick?.()
          }
        }}
      >
        <F0AvatarIcon icon={icon} size="md" />
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="truncate text-base font-semibold text-f1-foreground">
            {title}
          </span>
          <div className="flex items-center gap-2">
            {filled ? (
              <F0TagRaw icon={Check} text={lists.ghostListItem.filled} />
            ) : (
              <F0TagStatus
                variant="warning"
                text={lists.ghostListItem.pending}
              />
            )}
            <span className="text-sm text-f1-foreground-secondary">{date}</span>
          </div>
        </div>
      </div>
    )
  }
)

const GhostListItemSkeleton = () => {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-solid border-transparent p-3">
      <Skeleton className="h-9 w-9 rounded-md" />
      <div className="flex flex-1 flex-col gap-1.5">
        <Skeleton className="h-4 w-32 rounded-md" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-3.5 w-20 rounded-md" />
        </div>
      </div>
    </div>
  )
}

BaseGhostListItem.displayName = "GhostListItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const GhostListItem = withDataTestId(
  experimentalComponent(
    "GhostListItem",
    withSkeleton(BaseGhostListItem, GhostListItemSkeleton)
  )
)
