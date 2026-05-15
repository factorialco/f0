import { AnimatePresence, motion } from "motion/react"
import { type ComponentType, type ReactNode, useMemo, useRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { F0ActionItem } from "../F0ActionItem"

import { type WelcomeScreenSuggestion } from "../F0AiChat/types"

import {
  AssistantMessage as F0AssistantMessage,
  type F0AssistantMessageExtraProps,
} from "./components/AssistantMessage"
import { FeedbackModal } from "./components/feedback/FeedbackModal"
import {
  type FeedbackConfig,
  FeedbackModalProvider,
  useFeedbackSubmit,
} from "./components/feedback/FeedbackProvider"
import { TurnFeedback } from "./components/feedback/TurnFeedback"
import { ScrollShadow } from "./components/ScrollShadow"
import { Thinking } from "./components/Thinking"
import {
  UserMessage as F0UserMessage,
  type F0UserMessageExtraProps,
} from "./components/UserMessage"
import { WelcomeScreen } from "./components/WelcomeScreen"
import { type Message, type RenderableTurn } from "./types"
import { useMessageScroll } from "./useMessageScroll"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MessageSlotComponent = ComponentType<any>

export type F0AiMessagesContainerProps = {
  /** Optional override for the per-message renderer (rarely used). */
  RenderMessage?: MessageSlotComponent
  /** Optional override for the assistant bubble component. */
  AssistantMessage?: MessageSlotComponent
  /** Optional override for the user bubble component. */
  UserMessage?: MessageSlotComponent
  /** Called when the user triggers regeneration on an assistant message. */
  onRegenerate?: (messageId: string) => void
  /** Called when the user copies an assistant message's content. */
  onCopy?: (content: string) => void

  /** Pre-processed turns to render (assembled by the connected wrapper). */
  turns: RenderableTurn[]
  /** Show a skeleton in place of the turns while a thread is being fetched. */
  isLoadingThread?: boolean
  /** Optional React node rendered inline at the end of the list (e.g. CopilotKit interrupt). */
  interrupt?: ReactNode

  /** Greeting shown above the initial message in the welcome screen. */
  greeting?: string
  /** Initial message(s) shown in the welcome screen, or a default if omitted. */
  initialMessage?: string | string[]
  /** Suggestions rendered as buttons under the welcome screen. */
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  /** Click on a suggestion chip — host wires this to sendMessage(). */
  onSuggestionClick?: (suggestion: WelcomeScreenSuggestion) => void
  /** Optional click on the One icon (factorial uses it for the pong easter egg). */
  onWelcomeIconClick?: () => void

  /** Returns a React node for an assistant message's tool call, or null. */
  renderToolCall?: F0AssistantMessageExtraProps["renderToolCall"]

  /** Called when the user selects text and clicks Reply (user or assistant bubble). */
  onReplyQuote?: (text: string) => void
  /** Called when an assistant message finishes generating — for analytics. */
  onAssistantMessageRendered?: (message: Message) => void
  /** Disables auto-scrollIntoView on new user messages (fullscreen sets false). */
  autoScrollUserIntoView?: boolean

  /**
   * Renders the markdown content of user/assistant messages. The connected
   * wrapper provides a CopilotKit + f0-markdown-renderers implementation;
   * standalone consumers can omit it and a plain whitespace-preserving
   * fallback is used.
   */
  renderMarkdown?: (content: string) => ReactNode

  /** When omitted, feedback (thumbs + modal) is hidden. */
  feedback?: FeedbackConfig

  /** Pause turnMinHeight observer (e.g. while a clarifying panel is open). */
  freezeLayout?: boolean
  /** Disable the top/bottom scroll shadows. */
  noShadows?: boolean
  /** Passthrough children appended after the last turn (CopilotKit parity). */
  children?: ReactNode
}

const noopFeedback: FeedbackConfig = {
  threadId: "",
  onThumbsUp: () => {},
  onThumbsDown: () => {},
}

export const F0AiMessagesContainer = (props: F0AiMessagesContainerProps) => (
  <FeedbackModalProvider>
    <Messages {...props} />
  </FeedbackModalProvider>
)

const Messages = ({
  turns,
  isLoadingThread = false,
  interrupt,
  greeting,
  initialMessage,
  welcomeScreenSuggestions = [],
  onSuggestionClick,
  onWelcomeIconClick,
  renderToolCall,
  onReplyQuote,
  onAssistantMessageRendered,
  autoScrollUserIntoView = true,
  renderMarkdown,
  feedback,
  freezeLayout = false,
  noShadows = false,
  children,
  RenderMessage: RenderMessageProp,
  AssistantMessage: AssistantMessageProp,
  UserMessage: UserMessageProp,
  onRegenerate,
  onCopy,
}: F0AiMessagesContainerProps) => {
  const { modal, handleSubmit, handleClose } = useFeedbackSubmit(
    feedback ?? noopFeedback
  )

  const translations = useI18n()

  const AssistantMessage = AssistantMessageProp ?? F0AssistantMessage
  const UserMessage = UserMessageProp ?? F0UserMessage

  const initialMessages = useMemo(
    () => makeInitialMessages(initialMessage),
    [initialMessage]
  )
  const resolvedInitialMessages = useMemo(
    () =>
      initialMessages.length > 0
        ? initialMessages
        : makeInitialMessages(translations.ai.defaultInitialMessage),
    [initialMessages, translations.ai.defaultInitialMessage]
  )

  const showWelcomeBlock =
    turns.length === 0 && (greeting || resolvedInitialMessages.length > 0)

  // Scroll state
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const contentEndRef = useRef<HTMLDivElement>(null)
  const lastTurnRef = useRef<HTMLDivElement>(null)

  const { showScrollBtn, turnMinHeight, scrollToBottom } = useMessageScroll({
    viewportRef,
    contentRef,
    endRef,
    lastTurnRef,
    turnsCount: turns.length,
    freezeTurnMinHeight: freezeLayout,
  })

  const renderTurn = (turn: RenderableTurn, turnIndex: number) => {
    const isLastTurn = turnIndex === turns.length - 1
    const liveMessage = turn.thinking?.liveMessage
    const totalMessagesInTurn =
      turn.userMessages.length + turn.assistantMessages.length

    const baseExtraProps: F0AssistantMessageExtraProps &
      F0UserMessageExtraProps = {
      renderToolCall,
      onReplyQuote,
      onRendered: onAssistantMessageRendered,
      autoScrollIntoView: autoScrollUserIntoView,
      renderMarkdown,
    }

    const renderUserMessage = (message: Message, index: number) => {
      const messageProps = {
        message,
        inProgress: turn.isInProgress,
        index,
        isCurrentMessage: false,
        AssistantMessage,
        UserMessage,
        onRegenerate,
        onCopy,
        rawData: (message as any).rawData || {},
        ...baseExtraProps,
      }

      if (RenderMessageProp) {
        return (
          <RenderMessageProp
            key={`${turnIndex}-u-${index}`}
            {...(messageProps as any)}
          />
        )
      }

      return (
        <UserMessage
          key={`${turnIndex}-u-${index}`}
          {...(messageProps as any)}
        />
      )
    }

    const renderAssistantMessage = (message: Message, index: number) => {
      const isCurrentMessage =
        isLastTurn &&
        index === turn.assistantMessages.length - 1 &&
        !liveMessage
      const flatIndex = turn.userMessages.length + index

      const messageProps = {
        message,
        inProgress: turn.isInProgress,
        index: flatIndex,
        isCurrentMessage,
        AssistantMessage,
        UserMessage,
        onRegenerate,
        onCopy,
        rawData: (message as any).rawData || {},
        ...baseExtraProps,
      }

      if (RenderMessageProp) {
        return (
          <RenderMessageProp
            key={`${turnIndex}-a-${index}`}
            {...(messageProps as any)}
          />
        )
      }

      return (
        <AssistantMessage
          key={`${turnIndex}-a-${index}`}
          {...(messageProps as any)}
          isGenerating={turn.isInProgress && isCurrentMessage}
          isLoading={turn.isInProgress && isCurrentMessage && !message.content}
        />
      )
    }

    return (
      <div
        ref={isLastTurn ? lastTurnRef : undefined}
        className={cn(
          "flex flex-col items-start justify-start gap-2 px-1",
          isLastTurn && "pb-5"
        )}
        key={`turn-${turnIndex}`}
        style={{
          minHeight: isLastTurn ? turnMinHeight || undefined : undefined,
        }}
      >
        {turn.userMessages.map((message, index) =>
          renderUserMessage(message, index)
        )}
        {turn.thinking && (
          <Thinking
            titles={turn.thinking.titles}
            title={translations.ai.thoughtsGroupTitle}
          />
        )}
        {turn.assistantMessages.map((message, index) =>
          renderAssistantMessage(message, index)
        )}
        {liveMessage && (
          <AssistantMessage
            key={`thinking-live-${turnIndex}`}
            {...({
              message: liveMessage,
              inProgress: turn.isInProgress,
              index: totalMessagesInTurn,
              isCurrentMessage: true,
              AssistantMessage,
              UserMessage,
              onRegenerate,
              onCopy,
              rawData: (liveMessage as any).rawData || {},
              ...baseExtraProps,
              isGenerating: true,
              isLoading: !liveMessage.content,
            } as any)}
          />
        )}
        {turn.endIndicator === "thinking" && (
          <F0ActionItem title={translations.ai.thinking} status="executing" />
        )}
        {turn.endIndicator === "activity" && (
          <F0ActionItem title="" status="executing" />
        )}
        {turn.feedback && (
          <TurnFeedback
            content={turn.feedback.content}
            targetMessage={turn.feedback.targetMessage}
            onCopy={onCopy}
          />
        )}
      </div>
    )
  }

  return (
    <>
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div
          ref={viewportRef}
          className={cn(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          )}
        >
          <div
            ref={contentRef}
            className="flex h-full flex-col items-center px-4 py-4"
          >
            <div
              className={cn(
                showWelcomeBlock && !isLoadingThread
                  ? "flex flex-1"
                  : "flex flex-col gap-6",
                "w-full max-w-[712px]"
              )}
            >
              {isLoadingThread && <MessagesSkeleton />}
              {!isLoadingThread && showWelcomeBlock && (
                <WelcomeScreen
                  greeting={greeting}
                  initialMessages={resolvedInitialMessages}
                  suggestions={welcomeScreenSuggestions}
                  onSuggestionClick={onSuggestionClick}
                  onIconClick={onWelcomeIconClick}
                />
              )}
              {!isLoadingThread &&
                turns.map((turn, turnIndex) => renderTurn(turn, turnIndex))}
              {interrupt}
            </div>

            <div ref={contentEndRef} className="h-px shrink-0" aria-hidden />

            <footer className="copilotKitMessagesFooter" ref={endRef}>
              {children}
            </footer>

            <AnimatePresence>
              {showScrollBtn && (
                <motion.div
                  className="sticky bottom-2 z-10 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded bg-f1-background">
                    <ButtonInternal
                      onClick={() => scrollToBottom()}
                      label={translations.ai.scrollToBottom}
                      variant="neutral"
                      icon={ArrowDown}
                      hideLabel
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {!noShadows && (
          <>
            <ScrollShadow position="top" key="shadow-top" />
            <ScrollShadow position="bottom" key="shadow-bottom" />
          </>
        )}
      </div>

      {modal.isOpen && (
        <FeedbackModal
          onSubmit={handleSubmit}
          onClose={handleClose}
          reactionType={modal.currentReaction}
          message={modal.currentMessage}
        />
      )}
    </>
  )
}

const MessagesSkeleton = () => (
  <div className="flex h-full w-full max-w-[712px] flex-col gap-6">
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <Skeleton className="h-12 w-2/5 rounded-full" />
      </div>
      <Skeleton className="mt-6 h-5 w-full rounded-md" />
      <Skeleton className="h-5 w-2/5 rounded-md" />
      <Skeleton className="h-5 w-4/5 rounded-md" />
    </div>
  </div>
)

function makeInitialMessages(initial?: string | string[]): Message[] {
  if (!initial) return []
  const arr = Array.isArray(initial) ? initial : [initial]
  return arr.map((message) => ({
    id: message,
    role: "assistant",
    content: message,
  }))
}
