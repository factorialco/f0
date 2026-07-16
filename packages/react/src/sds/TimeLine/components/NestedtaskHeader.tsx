import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon/F0AvatarIcon"
import { F0Text } from "@/components/F0Text"
import { cn, focusRing } from "@/lib/utils"
import { ChevronToggle } from "@/ui/ChevronToggle/ChevronToggle"
import { Progress } from "@/ui/progress"

import type { F0TimelineRowNestedtaskProps } from "../types"

export const NestedtaskHeader = ({
  props,
  contentId,
}: {
  props: F0TimelineRowNestedtaskProps
  contentId?: string
}) => {
  const {
    status,
    icon,
    title,
    description,
    taskCount,
    completedCount,
    expanded,
    onExpandToggle,
    items,
    content,
    collapsible = true,
  } = props

  const hasItems = (items?.length ?? 0) > 0 || content !== undefined
  const showToggle = hasItems && collapsible

  return (
    <>
      <F0AvatarIcon icon={icon} size="sm" />
      <div className="flex flex-1 items-center justify-between">
        {showToggle ? (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={contentId}
            onClick={onExpandToggle}
            className={cn(
              "pointer-events-auto relative flex items-center gap-3 rounded-sm",
              // Extend the hit area to a 40px-tall target without shifting layout
              "after:absolute after:inset-x-0 after:top-1/2 after:h-10 after:-translate-y-1/2 after:content-['']",
              focusRing()
            )}
          >
            <span
              className={cn(
                "text-base font-semibold text-f1-foreground whitespace-nowrap",
                status === "completed" && "line-through"
              )}
            >
              {title}
            </span>
            {description && (
              <F0Text content={description} variant="description" as="span" />
            )}
            <span className="text-f1-icon-secondary">
              <ChevronToggle open={expanded} size="xs" />
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "text-base font-semibold text-f1-foreground whitespace-nowrap",
                status === "completed" && "line-through"
              )}
            >
              {title}
            </span>
            {description && (
              <F0Text content={description} variant="description" as="span" />
            )}
          </div>
        )}
        {completedCount !== undefined && taskCount !== undefined && (
          <div
            className="flex items-center gap-2"
            aria-label={`${completedCount} of ${taskCount} completed`}
          >
            <Progress
              value={taskCount > 0 ? (completedCount / taskCount) * 100 : 0}
              color={
                status === "completed"
                  ? "hsl(var(--positive-50))"
                  : "hsl(var(--warning-50))"
              }
              className="h-1.5 w-20"
            />
            <span className="text-sm font-medium tabular-nums text-f1-foreground whitespace-nowrap">
              {completedCount}/{taskCount}
            </span>
          </div>
        )}
      </div>
    </>
  )
}
