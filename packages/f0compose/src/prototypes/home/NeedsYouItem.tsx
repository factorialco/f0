import { F0AvatarIcon, F0Button, F0Text } from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"

import type { NeedsYouTask } from "./fixtures"

export function NeedsYouItem({
  task,
  index = 0,
  onAction,
  onOpen,
}: {
  task: NeedsYouTask
  /** Position in the list — drives the staggered entrance animation. */
  index?: number
  onAction?: (task: NeedsYouTask) => void
  onOpen?: (task: NeedsYouTask) => void
}) {
  return (
    <div
      onClick={() => onOpen?.(task)}
      className="f0c-card-in flex w-full cursor-pointer items-center gap-3 rounded-[10px] bg-f1-background-tertiary p-2 transition-colors hover:bg-f1-background-secondary"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <F0AvatarIcon icon={task.icon} size="md" />
      <div className="flex min-w-0 flex-1 flex-col justify-center pl-1">
        <F0Text content={task.title} variant="label" />
        <div className="w-full truncate font-medium text-f1-foreground-secondary">
          {task.subtitle}
        </div>
      </div>
      <F0Button
        variant="outline"
        size="md"
        label={task.ctaLabel}
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation()
          onAction?.(task)
        }}
      />
      <F0Button
        variant="ghost"
        size="sm"
        icon={ChevronRight}
        hideLabel
        label={`Open "${task.title}"`}
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation()
          onOpen?.(task)
        }}
      />
    </div>
  )
}
