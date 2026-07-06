import { type ReactNode } from "react"

/** Unread-count pill shared by chat items and collapsed group headers. Caps at
 * "+99". Render only for counts > 0. When `hasMention` is set (the unread run
 * includes a message that mentions you), the count is prefixed with an `@`,
 * Slack-style — no separate badge. */
export const UnreadBadge = ({
  count,
  hasMention = false,
}: {
  count: number
  hasMention?: boolean
}): ReactNode => (
  <div
    aria-label={
      hasMention ? `${count} unread, mentions you` : `${count} unread`
    }
    className="flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-xs border border-solid border-f1-border-info bg-f1-background-info px-1 text-center text-sm font-semibold tabular-nums text-f1-foreground-info"
  >
    {hasMention ? "@" : ""}
    {count > 99 ? "+99" : count}
  </div>
)
