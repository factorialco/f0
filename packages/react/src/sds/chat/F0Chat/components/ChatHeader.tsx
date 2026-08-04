import { breakpoints } from "@factorialco/f0-core"
import { type ReactNode } from "react"
import { useMediaQuery } from "usehooks-ts"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Cross, Ellipsis, Maximize, Minimize, Search } from "@/icons/app"
import { EmojiImage } from "@/lib/emojis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatSearch } from "../providers/ChatUIProvider"
import { type F0ChatChannel, type F0ChatHeaderAction } from "../types"
import { ChatHeaderSearch } from "./ChatHeaderSearch"
import { ChatUserHoverCard } from "./ChatUserHoverCard"

const PresenceDot = ({
  online,
  label,
}: {
  online: boolean
  label: string
}): ReactNode => {
  if (!online) return null

  return (
    <span
      role="img"
      aria-label={label}
      className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background"
    >
      <span
        aria-hidden="true"
        className={cn("h-2 w-2 rounded-full", "bg-f1-background-positive-bold")}
      />
    </span>
  )
}

export type ChatHeaderProps = {
  channel: F0ChatChannel
  isFullscreen?: boolean
  onToggleFullscreen?: () => void
  onClose?: () => void
  /** Host-provided actions (pin, mute, edit group…), already resolved for this
   * channel by `F0Chat` — see {@link F0ChatHeaderAction}. */
  actions?: F0ChatHeaderAction[]
}

/** Top bar of the chat: avatar + presence + name + statuses and panel actions. */
export const ChatHeader = ({
  channel,
  isFullscreen,
  onToggleFullscreen,
  onClose,
  actions,
}: ChatHeaderProps): ReactNode => {
  const i18n = useI18n()
  const { searchOpen, openSearch } = useChatSearch()
  // On mobile the chat already fills the screen, so the fullscreen toggle is a
  // no-op — hide it (matches F0AiChatHeader).
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })
  // DMs show a presence dot (green online / grey offline).
  const showPresence = channel.type === "dm" && channel.presence !== undefined
  const showGroupFallback =
    channel.type === "group" &&
    (channel.avatar.type === "team" || channel.avatar.type === "company") &&
    !channel.avatar.src
  const identityEmoji =
    channel.avatar.type === "emoji"
      ? channel.avatar.emoji
      : showGroupFallback
        ? "＃"
        : null

  // Search is the ONLY built-in action. Everything else — pin, mute, edit
  // group… — comes from the host through `actions`, so each channel offers
  // exactly what the user's permissions allow there.
  const channelActions = (actions ?? []).filter(
    (action) =>
      !action.channelTypes || action.channelTypes.includes(channel.type)
  )
  // Inline without an icon can't render as an icon button → falls to the menu.
  const isInline = (
    action: F0ChatHeaderAction
  ): action is F0ChatHeaderAction & { icon: IconType } =>
    action.placement === "inline" && action.icon != null
  const inlineActions = channelActions.filter(isInline)
  const menuActions = channelActions.filter((action) => !isInline(action))

  const menuItems: DropdownItem[] = [
    { label: i18n.actions.search, icon: Search, onClick: openSearch },
    ...menuActions.map((action) => ({
      label: action.label,
      icon: action.icon,
      onClick: () => action.onClick(channel),
    })),
  ]

  const identity = (
    <div className="flex min-w-0 items-center gap-2">
      <div className="relative flex shrink-0">
        {identityEmoji ? (
          // Emoji groups show the glyph alone (no avatar chrome) so it reads at
          // full size instead of shrunk inside the bordered avatar box.
          <span
            aria-hidden={showGroupFallback || undefined}
            className="flex size-5 items-center justify-center text-lg font-medium text-f1-foreground-secondary"
            data-testid={
              showGroupFallback ? "chat-group-avatar-fallback" : undefined
            }
          >
            <EmojiImage emoji={identityEmoji} size="sm" />
          </span>
        ) : (
          <F0Avatar size="sm" avatar={channel.avatar} />
        )}
        {showPresence && (
          <PresenceDot
            online={channel.presence === "online"}
            label={i18n.chat.online}
          />
        )}
      </div>
      <span className="truncate text-base font-medium text-f1-foreground">
        {channel.title}
      </span>
      {channel.statuses?.map((status) => (
        <F0Icon
          key={status.label}
          icon={status.icon}
          size="sm"
          color="secondary"
          aria-label={status.label}
        />
      ))}
    </div>
  )

  return (
    <header className="flex shrink-0 items-center justify-between gap-2 px-4 py-3">
      {searchOpen ? (
        // Search mode: the whole header becomes the search bar.
        <ChatHeaderSearch />
      ) : (
        <>
          {/* DMs surface the counterpart's identity card (with View profile) on
              hover — the plain header block is the trigger (no button chrome). */}
          {channel.user ? (
            <ChatUserHoverCard user={channel.user}>
              {identity}
            </ChatUserHoverCard>
          ) : (
            identity
          )}
          <div className="flex shrink-0 items-center gap-0.5">
            {/* Host actions promoted out of the overflow menu (placement: "inline"). */}
            {inlineActions.map((action) => (
              <ButtonInternal
                key={action.id}
                variant="ghost"
                hideLabel
                label={action.label}
                icon={action.icon}
                onClick={() => action.onClick(channel)}
              />
            ))}
            {/* Search + the host's menu actions live behind the ellipsis menu. */}
            <Dropdown items={menuItems} align="end" label={i18n.chat.options}>
              <ButtonInternal
                variant="ghost"
                hideLabel
                label={i18n.chat.options}
                icon={Ellipsis}
              />
            </Dropdown>
            {onToggleFullscreen && !isSmallScreen && (
              <ButtonInternal
                variant="ghost"
                hideLabel
                label={
                  isFullscreen ? i18n.actions.collapse : i18n.actions.expand
                }
                icon={isFullscreen ? Minimize : Maximize}
                onClick={onToggleFullscreen}
              />
            )}
            {onClose && (
              <ButtonInternal
                variant="ghost"
                hideLabel
                label={i18n.actions.close}
                icon={Cross}
                onClick={onClose}
              />
            )}
          </div>
        </>
      )}
    </header>
  )
}
