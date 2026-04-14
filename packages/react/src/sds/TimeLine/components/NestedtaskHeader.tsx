import type { F0TimelineRowNestedtaskProps } from "../types"

import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon/F0AvatarIcon"
import ChevronDown from "@/icons/app/ChevronDown"
import ChevronUp from "@/icons/app/ChevronUp"
import { cn } from "@/lib/utils"

export const NestedtaskHeader = ({
  props,
}: {
  props: F0TimelineRowNestedtaskProps
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
  } = props

  return (
    <>
      <F0AvatarIcon icon={icon} size="sm" />
      <div className="flex flex-1 items-center justify-between">
        <button
          type="button"
          onClick={() => onExpandToggle()}
          className="pointer-events-auto flex items-center gap-2"
        >
          <h4
            className={cn(
              "text-base font-semibold text-f1-foreground whitespace-nowrap",
              status === "completed" && "line-through"
            )}
          >
            {title}
          </h4>
          {description && (
            <F0Text content={description} variant="description" />
          )}
          <F0Icon
            icon={expanded ? ChevronUp : ChevronDown}
            size="xs"
            color="secondary"
          />
        </button>
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
