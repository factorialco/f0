import { F0Avatar } from "@/components/avatars/F0Avatar"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon/F0Icon"
import { PushPin, PushPinSolid } from "@/icons/app"
import { EmojiImage } from "@/lib/emojis"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import { SidebarChatItemSkeleton } from "./SidebarChatSkeleton"
import { SidebarChat, SidebarChatPresence } from "./types"
import { UnreadBadge } from "./UnreadBadge"

const Dots = () => (
  <span
    className="flex h-5 w-5 items-center justify-center gap-0.5"
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
  label,
}: {
  presence: SidebarChatPresence
  isActive: boolean
  label: string
}) => {
  if (presence === "offline") return null
  return (
    <div
      role="img"
      aria-label={label}
      className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background"
    >
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
  // groups only show one if explicitly set. Avatar-less rows have no presence.
  const presence =
    chat.presence ?? (chat.avatar?.type === "person" ? "offline" : undefined)

  // The consumer owns the status icons and labels for every conversation type.
  const statuses = chat.statuses ?? (chat.status ? [chat.status] : [])
  const showGroupFallback =
    (chat.avatar?.type === "team" || chat.avatar?.type === "company") &&
    !chat.avatar.src
  const identityEmoji =
    chat.avatar?.type === "emoji"
      ? chat.avatar.emoji
      : showGroupFallback
        ? "＃"
        : null

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
        ) : chat.avatar ? (
          <div className="relative flex flex-shrink-0 items-center">
            {identityEmoji ? (
              // Emoji groups show the glyph alone (no avatar chrome) so it isn't
              // shrunk inside the bordered avatar box.
              <span
                aria-hidden={showGroupFallback || undefined}
                className="flex size-5 items-center justify-center text-lg font-medium text-f1-foreground-secondary"
                data-testid={
                  showGroupFallback
                    ? "sidebar-group-avatar-fallback"
                    : undefined
                }
              >
                <EmojiImage emoji={identityEmoji} size="sm" />
              </span>
            ) : (
              <F0Avatar size="xs" avatar={chat.avatar} />
            )}
            {presence && (
              <PresenceDot
                presence={presence}
                isActive={isActive}
                label={i18n.chat.online}
              />
            )}
          </div>
        ) : null}

        <OneEllipsis
          tag="span"
          className={cn(
            "line-clamp-1 flex-1 py-0.5",
            isUnread
              ? "text-f1-foreground font-semibold"
              : // Avatar-less rows (e.g. AI chat history) read as primary text;
                // real conversations stay muted until they have unread messages.
                chat.avatar
                ? "text-f1-foreground-secondary font-medium"
                : "text-f1-foreground font-medium"
          )}
          lines={1}
        >
          {chat.label}
        </OneEllipsis>
        {(statuses.length > 0 || chat.unreadCount) && (
          <div
            className={cn(
              "gap-1 flex items-center justify-center transition-opacity",
              // On hover the pin button takes this spot, so fade the badge/status out.
              chat.onTogglePin && "group-hover/row:opacity-0",
              // While saving, the spinner takes this spot off-hover too.
              chat.pinPending && "opacity-0"
            )}
          >
            {statuses.map((status, index) => (
              <div
                key={`${status.label}-${index}`}
                className="flex h-5 w-5 items-center justify-center"
              >
                <F0Icon
                  icon={status.icon}
                  size="sm"
                  aria-label={status.label}
                  color="default"
                />
              </div>
            ))}
            {/* A mention in the unread run just prefixes the count with `@`. */}
            {chat.unreadCount ? (
              <UnreadBadge
                count={chat.unreadCount}
                hasMention={!!chat.mentionCount}
              />
            ) : null}
          </div>
        )}
      </button>
      {/* Hover (or focus) reveals a pin/unpin button, sitting where the unread
          badge / status is — a sibling of the row button so it isn't a nested
          <button>. While a pin/unpin is saving, a spinner takes its place and
          stays visible off-hover. */}
      {chat.onTogglePin &&
        (chat.pinPending ? (
          <div
            className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center"
            aria-label={chat.pinned ? i18n.chat.unpin : i18n.chat.pin}
          >
            <Spinner size="small" />
          </div>
        ) : (
          <div
            className={cn(
              "absolute right-1.5 top-1/2 -translate-y-1/2",
              "opacity-0 transition-opacity group-hover/row:opacity-100 focus-within:opacity-100"
            )}
          >
            <ButtonInternal
              variant="neutral"
              size="sm"
              hideLabel
              label={chat.pinned ? i18n.chat.unpin : i18n.chat.pin}
              icon={chat.pinned ? PushPinSolid : PushPin}
              onClick={(event) => {
                event.stopPropagation()
                chat.onTogglePin?.()
              }}
            />
          </div>
        ))}
    </div>
  )
}
