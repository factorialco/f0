import { useCopilotChatInternal as useCopilotChat } from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { Fragment, useMemo, useRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import { F0ActionItem } from "../../F0ActionItem"
import { F0Thinking as Thinking } from "../../F0Thinking"
import { useMessageScroll } from "../hooks/useMessageScroll"
import { useAiChat } from "../providers/AiChatStateProvider"
import {
  FeedbackModalProvider,
  useFeedbackSubmit,
} from "../providers/FeedbackProvider"
import {
  analyzeTurn,
  convertMessagesToTurns,
  extractThinkingGroup,
} from "../utils/turnUtils"
import { FeedbackModal } from "./FeedbackModal"
import { ScrollShadow } from "./ScrollShadow"
import { TurnFeedback } from "./TurnFeedback"
import { WelcomeScreen } from "./WelcomeScreen"

export const MessagesContainer = (props: MessagesProps) => (
  <FeedbackModalProvider>
    <Messages {...props} />
  </FeedbackModalProvider>
)

const Messages = ({
  inProgress,
  children,
  RenderMessage,
  AssistantMessage,
  UserMessage,
  ImageRenderer,
  onRegenerate,
  onCopy,
  markdownTagRenderers,
}: MessagesProps) => {
  const { messages, interrupt } = useCopilotChat()
  const { modal, handleSubmit, handleClose } = useFeedbackSubmit()

  const translations = useI18n()
  const {
    greeting,
    initialMessage,
    welcomeScreenSuggestions,
    isLoadingThread,
  } = useAiChat()

  const initialMessages = useMemo(
    () =>
      makeInitialMessages(
        initialMessage || translations.ai.defaultInitialMessage
      ),
    [initialMessage, translations.ai.defaultInitialMessage]
  )
  const showWelcomeBlock =
    messages.length === 0 && (greeting || initialMessages.length > 0)

  const turns = useMemo(() => convertMessagesToTurns(messages), [messages])

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

  return (
    <>
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div
          ref={viewportRef}
          className={cn(
            "flex-1 overflow-y-scroll pr-0",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          )}
        >
          <div
            ref={contentRef}
            className="flex h-full flex-col items-center py-4 pl-4 pr-1.5"
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
                turns.map((turnMessages, turnIndex) => {
                  const { turnIsComplete, showActivityIndicator } = analyzeTurn(
                    turnMessages,
                    turnIndex,
                    turns.length,
                    inProgress
                  )
                  const { thinkingGroup, restMessages } =
                    extractThinkingGroup(turnMessages)
                  const isLastTurn = turnIndex === turns.length - 1

                  return (
                    <div
                      ref={isLastTurn ? lastTurnRef : undefined}
                      className={cn(
                        "flex flex-col items-start justify-start gap-2",
                        isLastTurn && "pb-5"
                      )}
                      key={`turn-${turnIndex}`}
                      style={{
                        minHeight: isLastTurn
                          ? turnMinHeight || undefined
                          : undefined,
                      }}
                    >
                      {restMessages.map((message, index) => {
                        const isCurrentMessage =
                          isLastTurn && index === restMessages.length - 1
                        const msg = message as Message

                        // Find the index of the first assistant message
                        const firstAssistantIndex = restMessages.findIndex(
                          (m) => (m as Message).role === "assistant"
                        )
                        const showThinkingBefore =
                          thinkingGroup &&
                          !(isLastTurn && !turnIsComplete) &&
                          index === firstAssistantIndex

                        return (
                          <Fragment key={`${turnIndex}-${index}`}>
                            {showThinkingBefore && (
                              <Thinking
                                key={`thinking-${turnIndex}`}
                                messages={thinkingGroup}
                                isActive={false}
                                inProgress={inProgress}
                                RenderMessage={RenderMessage}
                                AssistantMessage={AssistantMessage}
                              />
                            )}
                            <RenderMessage
                              message={msg}
                              inProgress={inProgress}
                              index={index}
                              isCurrentMessage={isCurrentMessage}
                              AssistantMessage={AssistantMessage}
                              UserMessage={UserMessage}
                              ImageRenderer={ImageRenderer}
                              onRegenerate={onRegenerate}
                              onCopy={onCopy}
                              markdownTagRenderers={markdownTagRenderers}
                            />
                          </Fragment>
                        )
                      })}
                      {/* Live thinking: render last thinking message while streaming */}
                      {thinkingGroup &&
                        isLastTurn &&
                        !turnIsComplete &&
                        !showActivityIndicator && (
                          <RenderMessage
                            key={`thinking-live-${turnIndex}`}
                            message={thinkingGroup[thinkingGroup.length - 1]}
                            inProgress={inProgress}
                            index={restMessages.length}
                            isCurrentMessage={true}
                            AssistantMessage={AssistantMessage}
                            UserMessage={UserMessage}
                            ImageRenderer={ImageRenderer}
                            onRegenerate={onRegenerate}
                            onCopy={onCopy}
                            markdownTagRenderers={markdownTagRenderers}
                          />
                        )}
                      {showActivityIndicator && (
                        <F0ActionItem title="" status="executing" />
                      )}
                      {turnIsComplete && (
                        <TurnFeedback messages={turnMessages} onCopy={onCopy} />
                      )}
                    </div>
                  )
                })}
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

        <ScrollShadow position="top" key="shadow-top" />
        <ScrollShadow position="bottom" key="shadow-bottom" />
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
