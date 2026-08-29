import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { type F0ChatChannel } from "../types"

/**
 * What sits where the composer would be on a channel the current user can't
 * post in. Without it a read-only surface simply ended at the last message,
 * which reads as a bug rather than as a rule.
 *
 * The sentence names whoever *can* post ("Only Factorial can send messages"),
 * so it belongs to the host — F0 can't know it, and the host is the one with
 * the translations. `channel.readOnlyNotice` when set, a generic line otherwise.
 */
export const ChatReadOnlyNotice = ({
  channel,
}: {
  channel: F0ChatChannel
}): ReactNode => {
  const i18n = useI18n()

  return (
    <p
      className="shrink-0 px-4 pb-4 pt-2 text-center text-sm text-f1-foreground-tertiary font-medium"
      data-testid="chat-read-only-notice"
    >
      {channel.readOnlyNotice ?? i18n.chat.readOnly}
    </p>
  )
}
