import { type ReactNode, useCallback, useMemo } from "react"

import {
  F0AiMessagesContainer,
  type RenderableTurn,
} from "../../../F0AiMessagesContainer"
import { type FeedbackConfig } from "../../../F0AiMessagesContainer/components/feedback/FeedbackProvider"
import { type Message as F0ContainerMessage } from "../../../F0AiMessagesContainer/types"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { type F0AIMessage, type F0Message } from "../../types"

import { useMockAiChatRuntime } from "./MockAiChatRuntime"
import {
  analyzeTurn,
  convertMessagesToTurns,
  extractThinkingGroup,
  filterNonRenderableMessages,
} from "./turn-utils"

function parseThinkingTitle(argsJson: string): string {
  try {
    const parsed = JSON.parse(argsJson)
    return (parsed.message as string) || "thinking"
  } catch {
    return "thinking"
  }
}

function collectThinkingTitles(messages: F0Message[]): string[] {
  const titles: string[] = []
  for (const message of messages) {
    if (message.role !== "assistant") continue
    const toolCalls = message.toolCalls
    for (const tc of toolCalls ?? []) {
      if (tc.function.name === "orchestratorThinking") {
        titles.push(parseThinkingTitle(tc.function.arguments))
      }
    }
  }
  return titles
}

/**
 * Storybook-only Connected wrapper. Reads messages from the mock runtime,
 * converts them to `RenderableTurn[]`, and feeds them to the headless
 * `F0AiMessagesContainer`. Mirrors the shape factorial's production
 * Connected wrapper will have.
 */
export const MockConnectedMessagesContainer = ({
  noShadows = false,
  children,
}: {
  noShadows?: boolean
  children?: ReactNode
}) => {
  const { messages, inProgress, isLoadingThread } = useMockAiChatRuntime()
  const {
    initialMessage,
    isClarifying,
    visualizationMode,
    onThumbsUp,
    onThumbsDown,
    setPendingQuote,
  } = useAiChat()

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )

  const turns = useMemo(() => {
    const rawTurns = convertMessagesToTurns(filteredMessages)

    const built: RenderableTurn[] = rawTurns.map((turnMessages, turnIndex) => {
      const { turnIsComplete, showActivityIndicator } = analyzeTurn(
        turnMessages,
        turnIndex,
        rawTurns.length,
        inProgress
      )
      const isLastTurn = turnIndex === rawTurns.length - 1
      const { thinkingGroup, restMessages } = extractThinkingGroup(turnMessages)

      const thinking =
        thinkingGroup && thinkingGroup.length > 0
          ? {
              titles: collectThinkingTitles(thinkingGroup),
              inProgress: !turnIsComplete,
              isWriting: showActivityIndicator,
            }
          : undefined

      const flatRest = restMessages.filter(
        (m): m is F0Message => !Array.isArray(m)
      )
      const userMessages = flatRest.filter((m) => m.role === "user")
      const assistantMessages = flatRest.filter((m) => m.role !== "user")

      // Concatenated assistant content used as the copy-button payload
      // and to gate feedback rendering — feedback only shows when the
      // assistant actually produced text in this turn.
      const assistantContent = assistantMessages
        .filter((m) => typeof m.content === "string" && m.content.length > 0)
        .map((m) => m.content as string)
        .join("\n\n")

      const lastAssistantMessage = [...assistantMessages]
        .reverse()
        .find((m): m is F0AIMessage => m.role === "assistant")

      const feedbackEntry =
        turnIsComplete && assistantContent && lastAssistantMessage
          ? {
              content: assistantContent,
              targetMessage:
                lastAssistantMessage as unknown as F0ContainerMessage,
            }
          : undefined

      const lastTurnMessage = turnMessages[turnMessages.length - 1]
      const isLastTurnLastMessageUser =
        !Array.isArray(lastTurnMessage) && lastTurnMessage?.role === "user"
      const endIndicator: RenderableTurn["endIndicator"] =
        inProgress && isLastTurn && isLastTurnLastMessageUser
          ? "thinking"
          : showActivityIndicator
            ? "activity"
            : undefined

      return {
        userMessages: userMessages as unknown as F0ContainerMessage[],
        thinking,
        assistantMessages: assistantMessages as unknown as F0ContainerMessage[],
        isInProgress: !turnIsComplete,
        endIndicator,
        feedback: feedbackEntry,
      }
    })

    return built
  }, [filteredMessages, inProgress])

  const onReplyQuote = useCallback(
    (text: string) => {
      setPendingQuote({ text })
    },
    [setPendingQuote]
  )

  // Wire the feedback modal. The thread id is fake (mock runtime has no
  // real threading) but stable enough for the modal's plumbing.
  const feedback = useMemo<FeedbackConfig | undefined>(() => {
    if (!onThumbsUp && !onThumbsDown) return undefined
    return {
      threadId: "mock-thread",
      onThumbsUp: (onThumbsUp ?? (() => {})) as FeedbackConfig["onThumbsUp"],
      onThumbsDown: (onThumbsDown ??
        (() => {})) as FeedbackConfig["onThumbsDown"],
    }
  }, [onThumbsUp, onThumbsDown])

  return (
    <F0AiMessagesContainer
      turns={turns}
      initialMessage={initialMessage}
      onReplyQuote={onReplyQuote}
      isLoadingThread={isLoadingThread}
      autoScrollUserIntoView={visualizationMode !== "fullscreen"}
      fullscreen={visualizationMode === "fullscreen"}
      freezeLayout={isClarifying}
      noShadows={noShadows}
      feedback={feedback}
    >
      {children}
    </F0AiMessagesContainer>
  )
}
