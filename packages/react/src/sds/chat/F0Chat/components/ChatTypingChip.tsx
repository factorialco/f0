import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { useF0Chat } from "../providers/F0ChatProvider"

const Dots = (): ReactNode => (
  <span className="flex items-center gap-1" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="h-1.5 w-1.5 animate-bounce rounded-full bg-f1-foreground-secondary"
        style={{ animationDelay: `${i * 120}ms` }}
      />
    ))}
  </span>
)

/**
 * "Writing…" indicator shown above the composer, styled like the reply chip.
 * DMs show "Writing…"; groups name who's typing. Renders nothing when idle.
 */
export const ChatTypingChip = (): ReactNode => {
  const i18n = useI18n()
  const { typingUsers, channel } = useF0Chat()
  if (typingUsers.length === 0) return null

  let label = i18n.chat.writing
  if (channel.type === "group") {
    if (typingUsers.length === 1) {
      label = i18n.chat.isTyping.replace("{{name}}", typingUsers[0].name)
    } else if (typingUsers.length === 2) {
      label = i18n.chat.twoTyping
        .replace("{{first}}", typingUsers[0].name)
        .replace("{{second}}", typingUsers[1].name)
    } else {
      label = i18n.chat.severalTyping
    }
  }

  return (
    <div className="p-1">
      <div className="flex items-center gap-2 rounded-[10px] bg-f1-background-secondary py-1.5 pl-2.5 pr-2">
        <Dots />
        <span className="text-sm font-medium text-f1-foreground-secondary">
          {label}
        </span>
      </div>
    </div>
  )
}
