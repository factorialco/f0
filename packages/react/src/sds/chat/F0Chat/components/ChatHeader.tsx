import { type ReactNode } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Cross, Maximize, MicrophoneNegative, Minimize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { type F0ChatChannel } from "../types"
import { ChatUserHoverCard } from "./ChatUserHoverCard"

const PresenceDot = (): ReactNode => (
  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-f1-background">
    <span className="h-2 w-2 rounded-full bg-f1-background-positive-bold" />
  </span>
)

export type ChatHeaderProps = {
  channel: F0ChatChannel
  isFullscreen?: boolean
  onToggleFullscreen?: () => void
  onClose?: () => void
}

/** Top bar of the chat: avatar + presence + name (+ muted) and panel actions. */
export const ChatHeader = ({
  channel,
  isFullscreen,
  onToggleFullscreen,
  onClose,
}: ChatHeaderProps): ReactNode => {
  const i18n = useI18n()
  const showPresence = channel.type === "dm" && channel.presence === "online"

  const identity = (
    <div className="flex min-w-0 items-center gap-2">
      <div className="relative shrink-0">
        <F0Avatar size="sm" avatar={channel.avatar} />
        {showPresence && <PresenceDot />}
      </div>
      <span className="truncate text-base font-medium text-f1-foreground">
        {channel.title}
      </span>
      {channel.muted && (
        <F0Icon
          icon={MicrophoneNegative}
          size="sm"
          color="secondary"
          aria-label={i18n.chat.muted}
        />
      )}
    </div>
  )

  return (
    <header className="flex shrink-0 items-center justify-between gap-2 px-4 py-3">
      {/* DMs surface the counterpart's identity card (with View profile) on
          hover — the plain header block is the trigger (no button chrome). */}
      {channel.user ? (
        <ChatUserHoverCard user={channel.user}>{identity}</ChatUserHoverCard>
      ) : (
        identity
      )}
      <div className="flex shrink-0 items-center gap-0.5">
        {onToggleFullscreen && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={isFullscreen ? i18n.chat.collapse : i18n.chat.expand}
            icon={isFullscreen ? Minimize : Maximize}
            onClick={onToggleFullscreen}
          />
        )}
        {onClose && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={i18n.chat.close}
            icon={Cross}
            onClick={onClose}
          />
        )}
      </div>
    </header>
  )
}
