import { type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Transcript-safe text clamp: pure CSS with a native `title` for overflowed
 * text. Mirrors OneEllipsis's visual classes, but skips its mount-time
 * measurement (getComputedStyle + scrollWidth force a layout) and its
 * re-parenting into a tooltip on overflow (a DOM remount) — per instance,
 * multiplied by every quote/link card mounting during a scroll pass.
 */
export const ClampText = ({
  children,
  className,
  lines = 1,
}: {
  /** Only strings — the full text doubles as the hover title. */
  children: string
  className?: string
  lines?: number
}): ReactNode =>
  lines > 1 ? (
    <span
      title={children}
      className={cn(
        "line-clamp-1 min-w-0 max-w-full overflow-hidden whitespace-normal",
        className
      )}
      style={{ WebkitLineClamp: lines, lineClamp: lines }}
    >
      {children}
    </span>
  ) : (
    <span
      title={children}
      className={cn(
        "block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  )
