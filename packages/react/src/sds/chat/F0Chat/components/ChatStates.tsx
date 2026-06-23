import { type ReactNode } from "react"

import { Spinner } from "@/ui/Spinner"
import { useI18n } from "@/lib/providers/i18n"

const Centered = ({ children }: { children: ReactNode }): ReactNode => (
  <div className="flex h-full flex-1 items-center justify-center px-6 text-center text-sm text-f1-foreground-secondary">
    {children}
  </div>
)

export const ChatConnecting = (): ReactNode => {
  const i18n = useI18n()
  return (
    <Centered>
      <div className="flex flex-col items-center gap-3">
        <Spinner size="medium" />
        <span>{i18n.chat.connecting}</span>
      </div>
    </Centered>
  )
}

export const ChatError = (): ReactNode => {
  const i18n = useI18n()
  return <Centered>{i18n.chat.error}</Centered>
}

export const ChatEmptyState = (): ReactNode => {
  const i18n = useI18n()
  return <Centered>{i18n.chat.emptyConversation}</Centered>
}
