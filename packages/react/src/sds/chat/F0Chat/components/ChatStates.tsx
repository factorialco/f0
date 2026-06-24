import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

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
  return <Centered>{i18n.chat.error}</Centered>
}

export const ChatEmptyState = (): ReactNode => {
  const i18n = useI18n()
  return <Centered>{i18n.chat.emptyConversation}</Centered>
}
