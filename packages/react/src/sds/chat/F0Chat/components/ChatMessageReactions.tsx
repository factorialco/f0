import { AnimatePresence, motion } from "motion/react"
import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatPermission } from "../hooks/useChatPermission"
import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import { useF0ChatEmit, useF0ChatStable } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatReactionSource } from "../types"
import { microEnterTransition, microExitTransition } from "../utils/chat-motion"
import { emitReactionToggle } from "../utils/reactions"
import { ChatEmojiPickerButton } from "./ChatEmojiPickerButton"
import { ChatReactionPill } from "./ChatReactionPill"

/**
 * Reaction pills under a bubble. Once a message has at
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
  const { reducedMotion } = useChatRenderConfig()
  const { toggleReaction, loadReactionUsers } = useF0ChatStable()
  const emit = useF0ChatEmit()
  // Existing pills stay VISIBLE without the capability (the data is real) —
  // only adding/toggling is disabled.
  const canReact = useChatPermission("canReact")

  const react = (emoji: string, source: F0ChatReactionSource) => {
    emitReactionToggle(emit, message, emoji, source)
    void toggleReaction(message.id, emoji)
  }

  if (!message.reactions || message.reactions.length === 0) return null

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 py-1",
        isMine && "justify-end"
      )}
    >
      {/* Each pill fades in discreetly and shrinks out. Presence is keyed by
          emoji ALONE — count changes must not replay the entry — and
          `initial={false}` keeps scroll-back remounts still.

          NO `layout` / `popLayout` here. Layout projection measures in viewport
          coordinates and only subtracts the scroll of ancestors marked
          `layoutScroll`; the transcript's scroller is a plain Radix div, so it
          cannot be compensated. Scrolling UP is exactly when Virtuoso applies
          synchronous scrollTop corrections, and every one of them was read as a
          layout delta — the pills visibly slid away from their bubble. The cost
          is that neighbours snap into a removed pill's gap instead of gliding. */}
      <AnimatePresence initial={false}>
        {message.reactions.map((reaction) => (
          <motion.span
            key={reaction.emoji}
            className="flex"
            initial={reducedMotion ? false : { scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={
              reducedMotion
                ? undefined
                : { scale: 0.9, opacity: 0, transition: microExitTransition }
            }
            transition={microEnterTransition}
          >
            {/* No composite key: the pill syncs count/own-state from props, so
                remounting it (and its measuring NumberFlow) is unnecessary. */}
            <ChatReactionPill
              emoji={reaction.emoji}
              initialCount={reaction.count}
              hasReacted={reaction.reactedByMe}
              users={reaction.users}
              loadUsers={
                loadReactionUsers &&
                (reaction.users?.length ?? 0) < reaction.count
                  ? () =>
                      loadReactionUsers(
                        message.id,
                        reaction.emoji,
                        reaction.count
                      )
                  : undefined
              }
              onInteraction={
                canReact ? (emoji) => react(emoji, "existingPill") : undefined
              }
              size="sm"
            />
          </motion.span>
        ))}
      </AnimatePresence>
      {canReact && (
        <ChatEmojiPickerButton
          size="md"
          variant="outline"
          label={i18n.chat.react}
          onSelect={(emoji) => react(emoji, "inlinePicker")}
        />
      )}
    </div>
  )
}
