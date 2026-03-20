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

import { useFeedbackModal, UserReaction } from "../providers/FeedbackProvider"
import { type Turn } from "../utils/turnUtils"

interface TurnFeedbackProps {
  messages: Turn
  onCopy?: (content: string) => void
}

export const TurnFeedback = ({ messages, onCopy }: TurnFeedbackProps) => {
  const translations = useI18n()
  const { open: openFeedbackModal } = useFeedbackModal()
  const [reactionValue, setReactionValue] = useState<UserReaction | null>(null)

  // Concatenate all assistant text content from the turn
  const allContent = messages
    .filter(
      (m): m is Exclude<typeof m, Array<unknown>> =>
        !Array.isArray(m) && m.role === "assistant" && !!m.content
    )
    .map((m) => m.content)
    .join("\n\n")

  // Use the last assistant message as the reference for feedback submission
  const lastAssistantMessage = [...messages]
    .reverse()
    .find((m): m is AIMessage => !Array.isArray(m) && m.role === "assistant")

  // Check if this turn was stopped
  const isStopped = allContent.includes("<!--response-stopped-->")

  if (!allContent || !lastAssistantMessage || isStopped) {
    return null
  }

  return (
    <div className="flex">
      <ButtonCopy
        size="md"
        variant="ghost"
        valueToCopy={allContent}
        onCopy={(e) => {
          e.currentTarget.blur()
          onCopy?.(allContent)
        }}
      />
      <Action
        onClick={(e) => {
          const newValue = reactionValue === "like" ? null : "like"
          if (newValue) {
            openFeedbackModal(newValue, lastAssistantMessage)
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
            openFeedbackModal(newValue, lastAssistantMessage)
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
