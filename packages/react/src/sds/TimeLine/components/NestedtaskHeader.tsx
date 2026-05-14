import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon/F0AvatarIcon"
import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import ChevronDown from "@/icons/app/ChevronDown"
import ChevronUp from "@/icons/app/ChevronUp"
import { cn, focusRing } from "@/lib/utils"

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
  } = props

  const hasItems = (items?.length ?? 0) > 0 || content !== undefined

  return (
    <>
      <F0AvatarIcon icon={icon} size="sm" />
      <div className="flex flex-1 items-center justify-between">
        {hasItems ? (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={contentId}
            onClick={onExpandToggle}
            className={cn(
              "pointer-events-auto flex items-center gap-3 rounded-sm",
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
            <F0Icon
              icon={expanded ? ChevronUp : ChevronDown}
              size="xs"
              color="secondary"
            />
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
        {completedCount !== undefined && (
          <F0TagStatus
            text={`${completedCount}/${taskCount}`}
            variant={status === "completed" ? "positive" : "warning"}
          />
        )}
      </div>
    </>
  )
}
