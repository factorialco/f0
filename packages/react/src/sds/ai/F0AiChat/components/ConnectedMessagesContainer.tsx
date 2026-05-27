import {
  useCopilotChatInternal as useCopilotChat,
  useCopilotContext,
  useLazyToolRenderer,
} from "@copilotkit/react-core"
import { Markdown, type MessagesProps } from "@copilotkit/react-ui"
import { type AIMessage, type Message } from "@copilotkit/shared"
import { type ReactNode, useCallback, useEffect, useMemo } from "react"

import {
  F0AiMessagesContainer,
  type F0AiMessagesContainerProps,
  type RenderableTurn,
} from "../../F0AiMessagesContainer"
import { type FeedbackConfig } from "../../F0AiMessagesContainer/components/feedback/FeedbackProvider"

import { filterNonRenderableMessages } from "../internal-types"
import { useAiChat } from "../providers/AiChatStateProvider"
import { useOrderedMessageParts } from "../providers/OrderedMessagePartsProvider"
import {
  expandFromOrderedParts,
  legacyExpansion,
} from "../utils/expand-message-parts"
import {
  analyzeTurn,
  convertMessagesToTurns,
  extractThinkingGroup,
} from "../utils/turnUtils"

import { markdownRenderers } from "./markdownRenderers"

type ConnectedMessagesContainerProps = Partial<MessagesProps> & {
  noShadows?: boolean
}

function parseThinkingTitle(argsJson: string): string {
  try {
    const parsed = JSON.parse(argsJson)
    return (parsed.message as string) || "thinking"
  } catch {
    return "thinking"
  }
}

function collectThinkingTitles(messages: Message[]): string[] {
  const titles: string[] = []
  for (const message of messages) {
    if (message.role !== "assistant") continue
    const toolCalls = (
      message as {
        toolCalls?: { function: { name: string; arguments: string } }[]
      }
    ).toolCalls
    for (const tc of toolCalls ?? []) {
      if (tc.function.name === "orchestratorThinking") {
        titles.push(parseThinkingTitle(tc.function.arguments))
      }
    }
  }
  return titles
}

const RESPONSE_STOPPED_MARKER = "<!--response-stopped-->"

/**
 * Internal wrapper that bridges CopilotKit + the AiChat provider to the
 * headless F0AiMessagesContainer. Does ALL the message-shape-aware work
 * (filtering, expansion, turn grouping, thinking extraction, feedback
 * target selection, stop-marker detection) and forwards the result as
 * pre-processed turns. The headless container is purely presentational.
 *
 * Boundary: this Connected* wrapper is one of the only places inside f0
 * that calls CopilotKit hooks. Any new f0 component must receive its
 * data via props from a Connected* wrapper — never read `useCopilot*`
 * or `@copilotkit/*` types directly.
 */
export const ConnectedMessagesContainer = ({
  inProgress: inProgressProp,
  children,
  AssistantMessage,
  UserMessage,
  onRegenerate,
  onCopy,
  markdownTagRenderers,
  noShadows = false,
}: ConnectedMessagesContainerProps) => {
  const { messages, interrupt, isLoading } = useCopilotChat()
  const { getOrderedParts, version: orderedPartsVersion } =
    useOrderedMessageParts()
  const { threadId } = useCopilotContext()
  const lazyToolRendered = useLazyToolRenderer()

  const {
    initialMessage,
    isLoadingThread,
    setInProgress,
    clarifyingQuestion,
    visualizationMode,
    tracking,
    setPendingQuote,
    openGame,
    onThumbsUp,
    onThumbsDown,
  } = useAiChat()

  const inProgress = inProgressProp ?? isLoading

  // Sync inProgress to the central provider so other components (e.g. the
  // fullscreen input) can read it.
  useEffect(() => {
    setInProgress(inProgress)
  }, [inProgress, setInProgress])

  // ── Filter + expand raw messages into renderable sub-messages ──
  //
  // CopilotKit v1.51+ packs multiple tool calls + text into a single
  // assistant message. We split that back into one sub-message per
  // segment, preferring the in-flight order captured by
  // OrderedMessagePartsProvider, falling back to legacy expansion for
  // history-loaded threads.
  const filteredMessages = useMemo(
    () =>
      filterNonRenderableMessages(messages).flatMap((msg) => {
        if (msg.role !== "assistant") return [msg]
        const ordered = getOrderedParts(msg.id)
        if (ordered && ordered.length > 0) {
          return expandFromOrderedParts(msg, ordered)
        }
        return legacyExpansion(msg)
      }),
    [messages, getOrderedParts, orderedPartsVersion]
  )

  // ── Build the per-message tool-call renderer once ──
  const renderToolCall = useCallback<
    NonNullable<F0AiMessagesContainerProps["renderToolCall"]>
  >(
    (message): ReactNode => {
      const renderer = lazyToolRendered(message, filteredMessages)
      return renderer?.() ?? null
    },
    [lazyToolRendered, filteredMessages]
  )

  // ── Assemble renderable turns ──
  const turns = useMemo<RenderableTurn[]>(() => {
    const rawTurns = convertMessagesToTurns(filteredMessages)
    return rawTurns.map((turnMessages, turnIndex) => {
      const { turnIsComplete, showActivityIndicator } = analyzeTurn(
        turnMessages,
        turnIndex,
        rawTurns.length,
        inProgress
      )
      const isLastTurn = turnIndex === rawTurns.length - 1
      const { thinkingGroup, restMessages } = extractThinkingGroup(turnMessages)

      // Thinking section: always renders the collapsible whenever there are
      // any thinking steps in the turn. While the turn is still streaming the
      // collapsible defaults open and the last item renders as `executing`;
      // once the turn completes the collapsible auto-collapses and every item
      // renders as `completed`.
      const thinking =
        thinkingGroup && thinkingGroup.length > 0
          ? {
              titles: collectThinkingTitles(thinkingGroup),
              inProgress: !turnIsComplete,
              isWriting: showActivityIndicator,
            }
          : undefined

      // Split rest messages into user vs assistant blocks. convertMessagesToTurns
      // groups messages so each turn starts with user messages and is followed
      // by assistant replies — splitting keeps the thinking section anchored
      // between the user question and the assistant answer.
      const flatRest = restMessages.filter(
        (m): m is Message => !Array.isArray(m)
      )
      const userMessages = flatRest.filter((m) => m.role === "user")
      const assistantMessages = flatRest.filter((m) => m.role !== "user")

      // Concatenate assistant text content for the feedback copy button +
      // detect the "response stopped" marker injected by the input bar.
      const assistantContent = assistantMessages
        .filter((m) => !!m.content)
        .map((m) => m.content as string)
        .join("\n\n")
      const isStopped = assistantContent.includes(RESPONSE_STOPPED_MARKER)

      const lastAssistantMessage = [...assistantMessages]
        .reverse()
        .find((m): m is AIMessage => m.role === "assistant")

      const feedbackEntry =
        turnIsComplete && assistantContent && lastAssistantMessage && !isStopped
          ? {
              content: assistantContent,
              targetMessage: lastAssistantMessage,
            }
          : undefined

      // End-of-turn indicators (mutually exclusive):
      // - "thinking": user just sent, agent running, no assistant output yet
      // - "activity": agent streaming with some assistant output already
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
        userMessages,
        thinking,
        assistantMessages,
        isInProgress: !turnIsComplete,
        endIndicator,
        feedback: feedbackEntry,
      }
    })
  }, [filteredMessages, inProgress])

  // ── Callbacks ──
  // Welcome phrase click → pong easter egg. Replaces the previous F0OneIcon
  // entry point that the simplified welcome screen no longer renders.
  const onWelcomeClick = useCallback(() => {
    openGame("pong")
  }, [openGame])

  const onReplyQuote = useCallback(
    (text: string) => {
      setPendingQuote({ text })
    },
    [setPendingQuote]
  )

  const onAssistantMessageRendered = useCallback(
    (message: Message) => {
      tracking?.onMessage?.(message)
    },
    [tracking]
  )

  const feedback = useMemo<FeedbackConfig | undefined>(() => {
    if (!onThumbsUp && !onThumbsDown) return undefined
    return {
      threadId,
      onThumbsUp: onThumbsUp ?? (() => {}),
      onThumbsDown: onThumbsDown ?? (() => {}),
    }
  }, [threadId, onThumbsUp, onThumbsDown])

  const renderMarkdown = useCallback<
    NonNullable<F0AiMessagesContainerProps["renderMarkdown"]>
  >(
    (content) => (
      <Markdown
        content={content}
        components={{ ...markdownRenderers, ...markdownTagRenderers }}
      />
    ),
    [markdownTagRenderers]
  )

  return (
    <F0AiMessagesContainer
      turns={turns}
      isLoadingThread={isLoadingThread}
      interrupt={interrupt}
      initialMessage={initialMessage}
      onWelcomeClick={onWelcomeClick}
      renderToolCall={renderToolCall}
      onReplyQuote={onReplyQuote}
      onAssistantMessageRendered={onAssistantMessageRendered}
      autoScrollUserIntoView={visualizationMode !== "fullscreen"}
      renderMarkdown={renderMarkdown}
      feedback={feedback}
      freezeLayout={clarifyingQuestion != null}
      noShadows={noShadows}
      AssistantMessage={AssistantMessage}
      UserMessage={UserMessage}
      onRegenerate={onRegenerate}
      onCopy={onCopy}
    >
      {children}
    </F0AiMessagesContainer>
  )
}
