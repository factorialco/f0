import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { type SidebarChatKind } from "./types"

/** Unread-count pill shared by chat items and collapsed group headers. Caps at
 * "+99". Render only for counts > 0. When `hasMention` is set (the unread run
 * includes a message that mentions you), the count is prefixed with an `@`,
 * Slack-style — no separate badge.
 *
 * `role="status"`: the pill is a `div`, and an `aria-label` on a generic
 * element is not reliably exposed. The label itself goes through i18n — it used
 * to be an English string built here, the one thing in this folder that didn't.
 */
export const UnreadBadge = ({
  count,
  hasMention = false,
  kind = "conversation",
}: {
  count: number
  hasMention?: boolean
  /** What the count is OF. A community's items are posts, so it reads "3 new
   * posts" rather than "3 unread", and never takes the `@` prefix — there are
   * no mentions to carry. */
  kind?: SidebarChatKind
}): ReactNode => {
  const i18n = useI18n()
  const isCommunity = kind === "community"
  const label = isCommunity
    ? i18n.t(
        count === 1 ? "chat.newPostsCount.one" : "chat.newPostsCount.other",
        { count }
      )
    : hasMention
      ? i18n.t(
          count === 1
            ? "chat.unreadMentionCount.one"
            : "chat.unreadMentionCount.other",
          { count }
        )
      : i18n.t(
          count === 1 ? "chat.unreadCount.one" : "chat.unreadCount.other",
          { count }
        )

  return (
    <div
      role="status"
      aria-label={label}
      className="flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-xs border border-solid border-f1-border-info bg-f1-background-info px-1 text-center text-sm font-semibold tabular-nums text-f1-foreground-info"
    >
      {hasMention && !isCommunity ? "@" : ""}
      {count > 99 ? "+99" : count}
    </div>
  )
}
