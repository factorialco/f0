import type { MessagesProps } from "@copilotkit/react-ui"
import type { Message } from "@copilotkit/shared"
import type { ReactNode } from "react"

import { F0ActionItem } from "../../F0ActionItem"
import { F0Thinking } from "../../F0Thinking"

import { TurnFeedback } from "./TurnFeedback"
import type { Turn, TurnAnalysis } from "../utils/turnConversions"

export interface TurnContentProps {
  turnMessages: Turn
  turnIndex: number
  analysis: TurnAnalysis
  inProgress: boolean
  RenderMessage?: MessagesProps["RenderMessage"]
  AssistantMessage?: MessagesProps["AssistantMessage"]
  onCopy?: (content: string) => void
  /**
   * Render a single (non-thinking) message. Each container variant provides
   * its own implementation — the sidebar delegates to RenderMessage while the
   * fullscreen variant has a fallback rendering path.
   */
  renderMessage: (
    message: Message,
    index: number,
    isCurrentMessage: boolean
  ) => ReactNode
}

/**
 * Shared turn body rendered identically in the sidebar and fullscreen
 * message containers. Handles the thinking group, per-message rendering
 * (via render prop), activity indicator, and turn feedback.
 */
export const TurnContent = ({
  turnMessages,
  turnIndex,
  analysis,
  inProgress,
  RenderMessage,
  AssistantMessage,
  onCopy,
  renderMessage,
}: TurnContentProps) => {
  const {
    isLastTurn,
    turnIsComplete,
    assistantMessages,
    showActivityIndicator,
  } = analysis

  return (
    <>
      {turnMessages.map((message, index) => {
        const isCurrentMessage = isLastTurn && index === turnMessages.length - 1

        if (Array.isArray(message) && !isCurrentMessage) {
          return (
            <F0Thinking
              key={`${turnIndex}-${index}`}
              messages={message}
              isActive={false}
              inProgress={inProgress}
              RenderMessage={RenderMessage}
              AssistantMessage={AssistantMessage}
            />
          )
        }

        const messageToRender = Array.isArray(message)
          ? message[message.length - 1]
          : message

        return renderMessage(messageToRender, index, isCurrentMessage)
      })}

      {showActivityIndicator && <F0ActionItem title="" status="executing" />}

      {turnIsComplete && assistantMessages.length > 0 && (
        <TurnFeedback messages={assistantMessages} onCopy={onCopy} />
      )}
    </>
  )
}
