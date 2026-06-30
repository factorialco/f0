import { type ReactNode } from "react"

import { Picker } from "@/kits/Social/Reactions/Picker"
import { Reaction } from "@/kits/Social/Reactions/reaction"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"

/**
 * Reaction pills under a bubble (Social Reactions kit). Once a message has at
 * least one reaction, an inline "add reaction" picker sits next to the pills so
 * more can be added without opening the message menu.
 */
export const ChatMessageReactions = ({
  message,
  isMine,
}: {
  message: F0ChatMessage
  isMine: boolean
}): ReactNode => {
  const i18n = useI18n()
  const { toggleReaction } = useF0Chat()
  if (!message.reactions || message.reactions.length === 0) return null

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 py-1",
        isMine && "justify-end"
      )}
    >
      {message.reactions.map((reaction) => (
        // Key includes count/own-state so the kit pill re-syncs with the
        // runtime after an external toggle (the pill is otherwise uncontrolled).
        <Reaction
          key={`${reaction.emoji}-${reaction.count}-${reaction.reactedByMe}`}
          emoji={reaction.emoji}
          initialCount={reaction.count}
          hasReacted={reaction.reactedByMe}
          users={reaction.users}
          onInteraction={(emoji) => toggleReaction(message.id, emoji)}
          size="sm"
        />
      ))}
      <Picker
        size="md"
        variant="outline"
        label={i18n.chat.react}
        onSelect={(emoji) => toggleReaction(message.id, emoji)}
      />
    </div>
  )
}
