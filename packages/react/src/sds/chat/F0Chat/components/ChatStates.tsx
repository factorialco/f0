import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { OneEmptyState } from "@/components/OneEmptyState"
import { ArrowCycle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useF0Chat } from "../providers/F0ChatProvider"
import { ChatMessageSkeleton } from "./ChatMessageSkeleton"

const Centered = ({ children }: { children: ReactNode }): ReactNode => (
  <div className="flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary">
    {children}
  </div>
)

/** First load: a bubble skeleton (not a spinner). On re-entry the data is
 * cached, so the runtime reports "ready" immediately and this never shows. */
export const ChatConnecting = (): ReactNode => (
  <div className="min-h-0 flex-1 overflow-hidden">
    <ChatMessageSkeleton />
  </div>
)

export const ChatError = (): ReactNode => {
  const i18n = useI18n()
  const { reconnect } = useF0Chat()
  return (
    <Centered>
      <div className="flex flex-col items-center gap-3">
        <span>{i18n.chat.error}</span>
        {/* Recovery action — only when the host can actually retry the load. */}
        {reconnect && (
          <ButtonInternal
            variant="outline"
            size="sm"
            label={i18n.chat.retry}
            icon={ArrowCycle}
            onClick={() => void reconnect()}
          />
        )}
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
