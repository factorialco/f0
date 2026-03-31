import { useCopilotChatInternal as useCopilotChat } from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { Fragment, useEffect, useMemo, useRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { F0ActionItem } from "../../../F0ActionItem"
import { filterCoagentPlaceholders } from "../../internal-types"
import { useMessageScroll } from "../../hooks/useMessageScroll"
import { useAiChat } from "../../providers/AiChatStateProvider"
import {
  type Turn,
  analyzeTurn,
  convertMessagesToTurns,
  extractThinkingGroup,
} from "../../utils/turnUtils"
import { FeedbackModal } from "../feedback/FeedbackModal"
import {
  FeedbackModalProvider,
  useFeedbackSubmit,
} from "../feedback/FeedbackProvider"
import { TurnFeedback } from "../feedback/TurnFeedback"
import { AssistantMessage as F0AssistantMessage } from "./AssistantMessage"
import { ScrollShadow } from "./ScrollShadow"
import { Thinking } from "./Thinking"
import { UserMessage as F0UserMessage } from "./UserMessage"
import { WelcomeScreen } from "./WelcomeScreen"

type MessagesContainerProps = Partial<MessagesProps> & {
  noShadows?: boolean
}

export const MessagesContainer = (props: MessagesContainerProps) => (
  <FeedbackModalProvider>
    <Messages {...props} />
  </FeedbackModalProvider>
)

const Messages = ({
  inProgress: inProgressProp,
  children,
  RenderMessage: RenderMessageProp,
  AssistantMessage: AssistantMessageProp,
  UserMessage: UserMessageProp,
  onRegenerate,
  onCopy,
  markdownTagRenderers,
  noShadows = false,
}: MessagesContainerProps) => {
  const { messages, interrupt, isLoading } = useCopilotChat()
  const { modal, handleSubmit, handleClose } = useFeedbackSubmit()

  const translations = useI18n()
  const {
    greeting,
    initialMessage,
    welcomeScreenSuggestions,
    isLoadingThread,
    setInProgress,
  } = useAiChat()

  const inProgress = inProgressProp ?? isLoading

  // Sync inProgress to the central provider so FullscreenChatInput can read it
  useEffect(() => {
    setInProgress(inProgress)
  }, [inProgress, setInProgress])

  const AssistantMessage = AssistantMessageProp ?? F0AssistantMessage
  const UserMessage = UserMessageProp ?? F0UserMessage

  const initialMessages = useMemo(
    () =>
      makeInitialMessages(
        initialMessage || translations.ai.defaultInitialMessage
      ),
    [initialMessage, translations.ai.defaultInitialMessage]
  )

  // Filter coagent placeholders and expand multi-tool-call messages.
  //
  // CopilotKit v1.51+ AG-UI packs multiple tool calls into a single
  // assistant message (e.g. 2× orchestratorThinking + 1× downloadData +
  // text content).  The v1.10 format had one tool call per message.
  //
  // We expand each multi-tool-call message into individual messages so
  // the turn/thinking pipeline (which expects one tool call per message)
  // works correctly.  The actual rendering of tool call UIs is handled
  // by AssistantMessage which looks up actions from CopilotKit context.
  const filteredMessages = useMemo(
    () =>
      filterCoagentPlaceholders(messages).flatMap((msg) => {
        if (msg.role !== "assistant") return [msg]

        const toolCalls = msg.toolCalls as
          | { id: string; function: { name: string; arguments: string } }[]
          | undefined

        // No tool calls — plain text message, pass through
        if (!toolCalls || toolCalls.length === 0) return [msg]

        // Single tool call, no text — pass through as-is
        if (toolCalls.length === 1 && !msg.content) return [msg]

        // Multiple tool calls and/or text content — expand into
        // individual messages so thinking groups work correctly.
        // Tool calls come first (they arrive before content during
        // streaming), then text content.
        const expanded: Message[] = []

        // Each tool call becomes its own message
        for (let i = 0; i < toolCalls.length; i++) {
          expanded.push({
            id: `${msg.id}_tc${i}`,
            role: msg.role,
            content: "",
            toolCalls: [toolCalls[i]],
          })
        }

        // Text content becomes its own message (after tool calls)
        if (msg.content) {
          expanded.push({
            id: `${msg.id}_text`,
            role: msg.role,
            content: msg.content,
          })
        }

        return expanded
      }),
    [messages]
  )

  const showWelcomeBlock =
    filteredMessages.length === 0 && (greeting || initialMessages.length > 0)

  const turns = useMemo(
    () => convertMessagesToTurns(filteredMessages),
    [filteredMessages]
  )

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
  })

  // ─── Render a single turn's messages ───
  const renderTurnMessages = (turnMessages: Turn, turnIndex: number) => {
    const { turnIsComplete, showActivityIndicator } = analyzeTurn(
      turnMessages,
      turnIndex,
      turns.length,
      inProgress
    )
    const { thinkingGroup, restMessages } = extractThinkingGroup(turnMessages)
    const isLastTurn = turnIndex === turns.length - 1

    const renderMessage = (message: Message, index: number) => {
      const isCurrentMessage = isLastTurn && index === restMessages.length - 1

      const firstAssistantIndex = restMessages.findIndex(
        (m) => (m as Message).role === "assistant"
      )
      const showThinkingBefore =
        thinkingGroup &&
        !(isLastTurn && !turnIsComplete) &&
        index === firstAssistantIndex

      const messageProps = {
        message,
        messages: filteredMessages,
        inProgress,
        index,
        isCurrentMessage,
        AssistantMessage,
        UserMessage,
        onRegenerate,
        onCopy,
        markdownTagRenderers,
        rawData: (message as any).rawData || {},
      }

      if (RenderMessageProp) {
        return (
          <Fragment key={`${turnIndex}-${index}`}>
            {showThinkingBefore && (
              <Thinking
                messages={thinkingGroup}
                isActive={false}
                inProgress={inProgress}
                RenderMessage={RenderMessageProp as any}
                AssistantMessage={AssistantMessage}
              />
            )}
            <RenderMessageProp {...(messageProps as any)} />
          </Fragment>
        )
      }

      // Default rendering (no custom RenderMessage)
      if (message.role === "user") {
        return (
          <UserMessage
            key={`${turnIndex}-${index}`}
            {...(messageProps as any)}
          />
        )
      }

      return (
        <Fragment key={`${turnIndex}-${index}`}>
          {showThinkingBefore && (
            <Thinking
              messages={thinkingGroup}
              isActive={false}
              inProgress={inProgress}
              RenderMessage={RenderMessageProp as any}
              AssistantMessage={AssistantMessage}
            />
          )}
          <AssistantMessage
            {...(messageProps as any)}
            isGenerating={inProgress && isCurrentMessage}
            isLoading={inProgress && isCurrentMessage && !message.content}
          />
        </Fragment>
      )
    }

    return (
      <div
        ref={isLastTurn ? lastTurnRef : undefined}
        className={cn(
          "flex flex-col items-start justify-start gap-2",
          isLastTurn && "pb-5"
        )}
        key={`turn-${turnIndex}`}
        style={{
          minHeight: isLastTurn ? turnMinHeight || undefined : undefined,
        }}
      >
        {restMessages.map((message, index) =>
          renderMessage(message as Message, index)
        )}
        {/* Loading indicator while waiting for the first assistant
            response.  Mirrors the official CopilotKit Messages
            component behaviour (show activity icon when the last
            message is from the user and the agent is running). */}
        {inProgress &&
          turnIndex === turns.length - 1 &&
          turnMessages.length > 0 &&
          !Array.isArray(turnMessages[turnMessages.length - 1]) &&
          (turnMessages[turnMessages.length - 1] as Message).role ===
            "user" && (
            <F0ActionItem title={translations.ai.thinking} status="executing" />
          )}
        {/* Live thinking: render last thinking message while streaming */}
        {thinkingGroup &&
          isLastTurn &&
          !turnIsComplete &&
          !showActivityIndicator &&
          (() => {
            const liveMessage = thinkingGroup[thinkingGroup.length - 1]
            const liveProps = {
              message: liveMessage,
              inProgress,
              index: restMessages.length,
              isCurrentMessage: true,
              AssistantMessage,
              UserMessage,
              onRegenerate,
              onCopy,
              markdownTagRenderers,
              rawData: (liveMessage as any).rawData || {},
            }
            if (RenderMessageProp) {
              return (
                <RenderMessageProp
                  key={`thinking-live-${turnIndex}`}
                  {...(liveProps as any)}
                />
              )
            }
            return (
              <AssistantMessage
                key={`thinking-live-${turnIndex}`}
                {...(liveProps as any)}
                isGenerating={true}
                isLoading={!liveMessage.content}
              />
            )
          })()}
        {showActivityIndicator && <F0ActionItem title="" status="executing" />}
        {turnIsComplete && (
          <TurnFeedback messages={turnMessages} onCopy={onCopy} />
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
                  initialMessages={initialMessages}
                  suggestions={welcomeScreenSuggestions}
                />
              )}
              {!isLoadingThread &&
                turns.map((turnMessages, turnIndex) =>
                  renderTurnMessages(turnMessages, turnIndex)
                )}
              {interrupt}
            </div>

            {/* Sentinel: marks end of actual message content (for shadow detection) */}
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
