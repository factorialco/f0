import { type ReactNode } from "react"

import { AnimatePresence, motion } from "motion/react"

import { Picker } from "@/sds/social/Reactions/Picker"
import { Reaction } from "@/sds/social/Reactions/reaction"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useF0ChatStable } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import {
  layoutTransition,
  microEnterTransition,
  microExitTransition,
} from "../utils/chat-motion"

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
  const reducedMotion = useReducedMotion()
  const { toggleReaction, capabilities } = useF0ChatStable()
  // Existing pills stay VISIBLE without the capability (the data is real) —
  // only adding/toggling is disabled.
  const canReact = capabilities?.canReact !== false
  if (!message.reactions || message.reactions.length === 0) return null

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 py-1",
        isMine && "justify-end"
      )}
    >
      {/* Each pill fades in discreetly and shrinks out; `layout` slides the
          neighbours into a removed pill's gap instead of jumping. Presence is
          keyed by emoji ALONE — count changes must not replay the entry —
          and `initial={false}` keeps scroll-back remounts still. */}
      <AnimatePresence initial={false} mode="popLayout">
        {message.reactions.map((reaction) => (
          <motion.span
            key={reaction.emoji}
            layout="position"
            className="flex"
            initial={reducedMotion ? false : { scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={
              reducedMotion
                ? undefined
                : { scale: 0.9, opacity: 0, transition: microExitTransition }
            }
            // Explicit `layout` key: the default transform transition is an
            // underdamped spring (bounces) — see chat-motion.layoutTransition.
            transition={{ ...microEnterTransition, layout: layoutTransition }}
          >
            {/* Key includes count/own-state so the kit pill re-syncs with the
                runtime after an external toggle (it's otherwise uncontrolled). */}
            <Reaction
              key={`${reaction.emoji}-${reaction.count}-${reaction.reactedByMe}`}
              emoji={reaction.emoji}
              initialCount={reaction.count}
              hasReacted={reaction.reactedByMe}
              users={reaction.users}
              onInteraction={
                canReact
                  ? (emoji) => void toggleReaction(message.id, emoji)
                  : undefined
              }
              size="sm"
            />
          </motion.span>
        ))}
      </AnimatePresence>
      {canReact && (
        <Picker
          size="md"
          variant="outline"
          label={i18n.chat.react}
          onSelect={(emoji) => void toggleReaction(message.id, emoji)}
        />
      )}
    </div>
  )
}
