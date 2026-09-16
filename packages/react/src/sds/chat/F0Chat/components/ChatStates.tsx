import { type ReactNode } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { OneEmptyState } from "@/components/OneEmptyState"
import { ArrowCycle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useF0Chat, useF0ChatChannelType } from "../providers/F0ChatProvider"
import { ChatMessageSkeleton } from "./ChatMessageSkeleton"
import { ChatPostSkeleton } from "./ChatPostSkeleton"

const Centered = ({ children }: { children: ReactNode }): ReactNode => (
  <div className="flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary">
    {children}
  </div>
)

/**
 * First load: a skeleton, not a spinner. On re-entry the data is cached, so the
 * runtime reports "ready" immediately and this never shows.
 *
 * The shape follows the channel, because the two transcripts have nothing in
 * common: a conversation is alternating bubbles, a community is a column of
 * full-width posts. Showing bubbles to someone opening a community announced a
 * surface that never arrived.
 */
export const ChatConnecting = (): ReactNode => {
  // The stable read, not the runtime: this mounts while the transport is still
  // churning, and the placeholder has no reason to re-render with it.
  const channelType = useF0ChatChannelType()

  return (
    <div className="min-h-0 flex-1 overflow-hidden">
      {channelType === "community" ? (
        <ChatPostSkeleton />
      ) : (
        <ChatMessageSkeleton />
      )}
    </div>
  )
}

export const ChatError = (): ReactNode => {
  const i18n = useI18n()
  const { reconnect } = useF0Chat()
  return (
    <Centered>
      <div className="flex flex-col items-center gap-3">
        <span>{i18n.chat.error}</span>
        {/* Recovery action — only when the host can actually retry the load. */}
        {reconnect ? (
          <ButtonInternal
            variant="outline"
            size="sm"
            label={i18n.chat.retry}
            icon={ArrowCycle}
            onClick={() => void reconnect()}
          />
        ) : null}
      </div>
    </Centered>
  )
}

export const ChatEmptyState = (): ReactNode => {
  const i18n = useI18n()
  return (
    <div className="flex h-full flex-1 items-center justify-center p-6">
      <OneEmptyState
        emoji="💬"
        title={i18n.chat.emptyConversation}
        description={i18n.chat.emptyConversationDescription}
      />
    </div>
  )
}
