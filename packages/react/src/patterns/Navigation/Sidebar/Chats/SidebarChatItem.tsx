import { F0Avatar } from "@/components/avatars/F0Avatar"
import { PushPin, PushPinSolid } from "@/icons/app"
import { EmojiImage } from "@/lib/emojis"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { SidebarChatItemSkeleton } from "./SidebarChatSkeleton"
import { SidebarChat, SidebarChatPresence } from "./types"
import { UnreadBadge } from "./UnreadBadge"
import { F0Icon } from "@/components/F0Icon/F0Icon"

const Dots = () => (
  <span
    className="flex items-center gap-0.5 w-5 h-5 justify-center"
    aria-hidden="true"
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="size-1 animate-bounce rounded-full bg-f1-foreground-secondary"
        style={{ animationDelay: `${i * 120}ms` }}
      />
    ))}
  </span>
)

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
  const i18n = useI18n()

  // Cascade loading: the conversation is known but its name/avatar aren't
  // resolved yet — show a skeleton row in place (not interactive).
  if (chat.loading) {
    return <SidebarChatItemSkeleton />
  }

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
    <div className="group/row relative">
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
        {chat.typing ? (
          <Dots />
        ) : (
          <div className="relative flex flex-shrink-0 items-center">
            {chat.avatar.type === "emoji" ? (
              // Emoji groups show the glyph alone (no avatar chrome) so it isn't
              // shrunk inside the bordered avatar box.
              <span className="flex size-5 items-center justify-center">
                <EmojiImage emoji={chat.avatar.emoji} size="sm" />
              </span>
            ) : (
              <F0Avatar size="xs" avatar={chat.avatar} />
            )}
            {presence && (
              <PresenceDot presence={presence} isActive={isActive} />
            )}
          </div>
        )}

        <OneEllipsis
          tag="span"
          className={cn(
            "line-clamp-1 flex-1 py-0.5",
            isUnread
              ? "text-f1-foreground font-semibold"
              : "text-f1-foreground-secondary font-medium"
          )}
          lines={1}
        >
          {chat.label}
        </OneEllipsis>
        {(status || chat.unreadCount) && (
          <div
            className={cn(
              "gap-1 flex items-center justify-center transition-opacity",
              // On hover the pin button takes this spot, so fade the badge/status out.
              chat.onTogglePin && "group-hover/row:opacity-0"
            )}
          >
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
            {chat.unreadCount && <UnreadBadge count={chat.unreadCount} />}
          </div>
        )}
      </button>
      {/* Hover (or focus) reveals a pin/unpin button, sitting where the unread
          badge / status is — a sibling of the row button so it isn't a nested
          <button>. */}
      {chat.onTogglePin && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            chat.onTogglePin?.()
          }}
          aria-label={chat.pinned ? i18n.chat.unpin : i18n.chat.pin}
          aria-pressed={chat.pinned}
          className={cn(
            "absolute right-2 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded",
            "text-f1-foreground-secondary hover:text-f1-foreground",
            "opacity-0 group-hover/row:opacity-100 focus-visible:opacity-100",
            focusRing()
          )}
        >
          <F0Icon icon={chat.pinned ? PushPinSolid : PushPin} size="sm" />
        </button>
      )}
    </div>
  )
}
