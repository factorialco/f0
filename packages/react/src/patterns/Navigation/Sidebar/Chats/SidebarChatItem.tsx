import { F0Avatar } from "@/components/avatars/F0Avatar"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn, focusRing } from "@/lib/utils"

import { SidebarChat, SidebarChatPresence } from "./types"
import { F0Icon } from "@/components/F0Icon/F0Icon"

const PresenceDot = ({
  presence,
  isActive,
}: {
  presence: SidebarChatPresence
  isActive: boolean
}) => {
  if (presence === "offline") return null
  return (
    <div className="bg-f1-background absolute -bottom-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full">
      <span
        aria-hidden="true"
        className={cn(
          // The ring follows the item's hover/active state so the dot blends
          // with the highlighted row background.
          "ring-2 ring-f1-background-tertiary transition-[box-shadow] group-hover:ring-f1-background-secondary-hover",
          isActive && "ring-f1-background-secondary-hover",
          "h-2 w-2 rounded-full",
          "bg-f1-background-positive-bold"
        )}
      />
    </div>
  )
}

export const SidebarChatItem = ({
  chat,
  isActive,
  onClick,
}: {
  chat: SidebarChat
  isActive: boolean
  onClick: () => void
}) => {
  // Chats are not navigation links: unread is conveyed by a darker, bolder
  // name (Slack-style), not a counter.
  const isUnread = Boolean(chat.unreadCount)

  // People always show a presence state (defaulting to offline); companies and
  // groups only show one if explicitly set.
  const presence =
    chat.presence ?? (chat.avatar.type === "person" ? "offline" : undefined)

  // Status — people only; the consumer provides the emoji/icon + label.
  const status = chat.avatar.type === "person" ? chat.status : undefined

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "group flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-1.5 pr-2 text-left transition-colors",
        focusRing("focus-visible:ring-inset"),
        isActive
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary"
      )}
    >
      <div className="relative flex flex-shrink-0 items-center">
        <F0Avatar size="xs" avatar={chat.avatar} />
        {presence && <PresenceDot presence={presence} isActive={isActive} />}
      </div>
      <OneEllipsis
        tag="span"
        className={cn(
          "line-clamp-1 flex-1 py-0.5",
          isUnread
            ? "text-f1-foreground font-semibold "
            : "text-f1-foreground-secondary font-medium"
        )}
        lines={1}
      >
        {chat.label}
      </OneEllipsis>
      {(status || chat.unreadCount) && (
        <div className="gap-1 flex items-center justify-center">
          {status && (
            <div className="w-5 h-5 flex items-center justify-center">
              <F0Icon
                icon={status.icon}
                size="sm"
                aria-label={status.label}
                color="default"
              />
            </div>
          )}
          {chat.unreadCount && (
            <div
              aria-label={`${chat.unreadCount} unread`}
              className="flex-shrink-0 flex items-center justify-center rounded-xs bg-f1-background-info px-0.5 min-w-5 h-5 text-center text-sm font-semibold tabular-nums text-f1-foreground-info border border-solid border-f1-border-info"
            >
              {chat.unreadCount > 99 ? "+99" : chat.unreadCount}
            </div>
          )}
        </div>
      )}
    </button>
  )
}
