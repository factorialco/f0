import { F0Button, F0Icon } from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import type { NeedsYouTask } from "./fixtures"

// The cascade is a first-paint welcome, not a navigation transition.
// Opening and closing a conversation, leaving ?view=policies and the nav
// "New" action all remount this list, and the stagger must not replay
// every time (Emil: Home is seen dozens of times a day).
let hasEnteredOnce = false

/**
 * A "Needs you" row (Figma 2621:23747, redesigned 2026-08-29): 48px tall
 * — a bare 20px icon, then the title and its subtitle on ONE line, then
 * a chevron. The title never shrinks and the subtitle absorbs the slack
 * and clips, so the row reads title-first at any width.
 *
 * The per-row CTA button ("Approve all", "Pick Lucía"…) is gone from the
 * design — opening the row is the only action now. `ctaLabel` stays in
 * the fixtures, unused, in case the buttons come back.
 */
export function NeedsYouItem({
  task,
  index = 0,
  onOpen,
}: {
  task: NeedsYouTask
  /** Position in the list — drives the staggered entrance animation. */
  index?: number
  onOpen?: (task: NeedsYouTask) => void
}) {
  const [animate] = useState(() => !hasEnteredOnce)
  useEffect(() => {
    hasEnteredOnce = true
  }, [])
  return (
    <div
      onClick={() => onOpen?.(task)}
      // Explicit duration/easing: a bare `transition-colors` falls back to
      // tailwind's 150ms ease-in-out, which withholds the first third of a
      // hover the pointer is already sitting on. Hover -> plain ease, short.
      className={`f0c-ease-hover flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-3 transition-colors duration-150 hover:bg-f1-background-secondary ${
        animate ? "f0c-card-in" : ""
      }`}
      style={animate ? { animationDelay: `${index * 30}ms` } : undefined}
    >
      <F0Icon icon={task.icon} size="md" color="secondary" />
      <span className="flex min-w-0 flex-1 items-center gap-2">
        <span className="shrink-0 text-base font-medium text-f1-foreground">
          {task.title}
        </span>
        <span className="min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary">
          {task.subtitle}
        </span>
      </span>
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
