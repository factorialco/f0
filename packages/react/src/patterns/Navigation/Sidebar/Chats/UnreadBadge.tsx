import { type ReactNode } from "react"

/** Unread-count pill shared by chat items and collapsed group headers. Caps at
 * "+99". Render only for counts > 0. */
export const UnreadBadge = ({ count }: { count: number }): ReactNode => (
  <div
    aria-label={`${count} unread`}
    className="flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info"
  >
    {count > 99 ? "+99" : count}
  </div>
)
