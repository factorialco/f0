import { F0Icon } from "@/components/F0Icon"
import CheckCircle from "@/icons/app/CheckCircle"
import Multitask from "@/icons/app/Multitask"
import { ChevronToggle } from "@/ui/ChevronToggle"
import { cn, focusRing } from "@/lib/utils"

import type { F0TimelineRowMultitaskProps } from "../types"

import { IconContainer } from "./IconContainer"

const MultitaskIcon = () => (
  <F0Icon icon={Multitask} size="sm" color="default" />
)

export const MultitaskHeader = ({
  props,
  contentId,
}: {
  props: F0TimelineRowMultitaskProps
  contentId: string
}) => {
  const { status, title, taskCount, completedCount, expanded, onExpandToggle } =
    props

  return (
    <>
      <IconContainer status={status}>
        <MultitaskIcon />
      </IconContainer>
      <div className="flex flex-1 items-center justify-between">
        <button
          type="button"
          className={cn(
            "flex items-center gap-1 rounded text-base font-semibold text-f1-foreground",
            focusRing()
          )}
          onClick={() => onExpandToggle()}
          aria-expanded={expanded}
          aria-controls={expanded ? contentId : undefined}
        >
          {taskCount} {title}
          <ChevronToggle open={expanded} size="xs" />
        </button>
        {completedCount !== undefined && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-f1-background-secondary px-2.5 py-1 text-sm font-semibold text-f1-foreground-secondary">
            <CheckCircle className="h-[18px] w-[18px] fill-f1-icon-secondary" />
            {completedCount}/{taskCount}
          </span>
        )}
      </div>
    </>
  )
}
