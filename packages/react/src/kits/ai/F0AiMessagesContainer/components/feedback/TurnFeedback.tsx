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

import { type AIMessage } from "../../types"

import { useFeedbackModal, UserReaction } from "./FeedbackProvider"

interface TurnFeedbackProps {
  /** Concatenated assistant content displayed by the copy button. */
  content: string
  /** Reference message used as the target of feedback submissions. */
  targetMessage: AIMessage
  /** Optional copy callback (called after the user clicks copy). */
  onCopy?: (content: string) => void
}

export const TurnFeedback = ({
  content,
  targetMessage,
  onCopy,
}: TurnFeedbackProps) => {
  const translations = useI18n()
  const { open: openFeedbackModal } = useFeedbackModal()
  const [reactionValue, setReactionValue] = useState<UserReaction | null>(null)

  return (
    <div className="flex">
      <ButtonCopy
        size="md"
        variant="ghost"
        valueToCopy={content}
        onCopy={(e) => {
          e.currentTarget.blur()
          onCopy?.(content)
        }}
      />
      <Action
        onClick={(e) => {
          const newValue = reactionValue === "like" ? null : "like"
          if (newValue) {
            openFeedbackModal(newValue, targetMessage)
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
          const newValue = reactionValue === "dislike" ? null : "dislike"
          if (newValue) {
            openFeedbackModal(newValue, targetMessage)
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
