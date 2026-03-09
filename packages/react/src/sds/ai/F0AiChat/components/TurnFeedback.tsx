import { type AIMessage } from "@copilotkit/shared"
import { useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import {
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action"
import { ButtonCopy } from "@/ui/ButtonCopy"

import {
  useFeedbackModal,
  type UserReaction,
} from "../providers/FeedbackProvider"

type TurnFeedbackProps = {
  /** All assistant messages with content in this turn */
  messages: AIMessage[]
  /** Callback fired when the user copies the turn content */
  onCopy?: (content: string) => void
}

/**
 * Renders a single feedback bar (copy + thumbs up/down) for an entire
 * question/answer turn. Placed at the bottom of each completed turn.
 */
export const TurnFeedback = ({ messages, onCopy }: TurnFeedbackProps) => {
  const translations = useI18n()
  const { open: openFeedbackModal } = useFeedbackModal()
  const [reactionValue, setReactionValue] = useState<UserReaction | null>(null)

  const fullContent = messages
    .map((m) => m.content)
    .filter(Boolean)
    .join("\n\n")

  // Use the last assistant message as the reference for feedback
  const lastMessage = messages[messages.length - 1]

  if (!fullContent || !lastMessage) return null

  return (
    <div className="flex">
      <ButtonCopy
        size="md"
        variant="ghost"
        valueToCopy={fullContent}
        onCopy={(e) => {
          e.currentTarget.blur()
          onCopy?.(fullContent)
        }}
      />
      <Action
        onClick={(e) => {
          const newValue: UserReaction | null =
            reactionValue === "like" ? null : "like"
          if (newValue) {
            openFeedbackModal(newValue, lastMessage)
          }
          setReactionValue(newValue)
          e.currentTarget.blur()
        }}
        compact={true}
        mode="only"
        variant="ghost"
        aria-label={translations.actions.thumbsUp}
      >
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
          <F0Icon
            size="md"
            icon={reactionValue === "like" ? ThumbsUpFilled : ThumbsUp}
            color="default"
          />
        </div>
      </Action>

      <Action
        onClick={(e) => {
          const newValue: UserReaction | null =
            reactionValue === "dislike" ? null : "dislike"
          if (newValue) {
            openFeedbackModal(newValue, lastMessage)
          }
          setReactionValue(newValue)
          e.currentTarget.blur()
        }}
        compact={true}
        mode="only"
        variant="ghost"
        aria-label={translations.actions.thumbsDown}
      >
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
          <F0Icon
            size="md"
            icon={reactionValue === "dislike" ? ThumbsDownFilled : ThumbsDown}
            color="default"
          />
        </div>
      </Action>
    </div>
  )
}
