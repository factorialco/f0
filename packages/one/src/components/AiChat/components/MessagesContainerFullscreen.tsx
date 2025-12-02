import {
  useCopilotChatInternal as useCopilotChat,
  useCopilotContext,
} from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { ArrowDown } from "@factorialco/f0-react/icons/app"
import { AnimatePresence, motion } from "motion/react"
import { useMemo, useRef } from "react"
import { ButtonInternal } from "../../../components/F0Button/internal"
import { cn } from "../../../lib/utils"
import { useAiChat } from "../providers/AiChatStateProvider"
// TODO: Review - MessagesContainerFullscreen uses useAiChatTranslations but the provider doesn't exist
// Should we use useI18n() instead like in OneSwitch.tsx, or add AiChatTranslationsProvider?
import { convertMessagesToTurns } from "../convertMessagesToTurns"
import { useAiChatTranslations } from "../providers/AiChatTranslationsProvider"
import { FeedbackModal } from "./FeedbackModal"
import { FeedbackModalProvider, useFeedbackModal } from "./FeedbackProvider"
import { useScrollToBottom } from "./MessagesContainer"
import { Thinking } from "./Thinking"
import { WelcomeScreen } from "./WelcomeScreen"

/**
 * MessagesContainerFullscreen - Used in fullscreen chat (CopilotChat)
 *
 * Layout: Flexbox layout separating scrollable messages and sticky input footer.
 * - Messages scroll inside a flex-1 container.
 * - Input stays sticky at the bottom like a normal chat UI.
 *
 * Used by: AiFullscreenChat (expo-only component)
 *
 * NOTE: This is an internal component, not exported publicly.
 * It's only used internally by AiFullscreenChat which is expo-only.
 *
 * TODO: Review - FullScreen components structure and dependencies
 * - Currently uses useAiChatTranslations() which doesn't exist in packages/one
 * - Consider using useI18n() instead or adding AiChatTranslationsProvider
 */
export const MessagesContainerFullscreen = (props: MessagesProps) => {
  return (
    <FeedbackModalProvider>
      <Messages {...props} />
    </FeedbackModalProvider>
  )
}

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
  const turnsContainerRef = useRef<HTMLDivElement>(null)
  const { messages, interrupt } = useCopilotChat()
  const { threadId } = useCopilotContext()
  const {
    close: closeFeedbackModal,
    currentReaction,
    currentMessage,
    isOpen,
  } = useFeedbackModal()

  // TODO: Review - This uses useAiChatTranslations which doesn't exist yet
  // For now, keeping as is to match the original structure
  const translations = useAiChatTranslations()
  const {
    greeting,
    initialMessage,
    welcomeScreenSuggestions,
    onThumbsUp,
    onThumbsDown,
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

  const {
    messagesContainerRef,
    messagesEndRef,
    showScrollToBottom,
    scrollToBottom,
  } = useScrollToBottom()

  const turns = useMemo(() => convertMessagesToTurns(messages), [messages])

  return (
    <>
      <div
        className="flex h-full w-full flex-col overflow-hidden"
        style={{ position: "relative", minHeight: 0 }}
      >
        {/* Messages section */}
        <div
          ref={messagesContainerRef}
          className={cn(
            "scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4 pt-3",
            showWelcomeBlock ? "justify-end" : "justify-start"
          )}
          style={{ minHeight: 0 }}
        >
          <div
            ref={turnsContainerRef}
            className={showWelcomeBlock ? "flex pb-3" : "flex flex-col gap-8"}
            style={{ width: "100%" }}
          >
            {showWelcomeBlock && (
              <WelcomeScreen
                greeting={greeting}
                initialMessages={initialMessages}
                suggestions={welcomeScreenSuggestions}
              />
            )}

            {turns.map((turnMessages, turnIndex) => (
              <div
                className="flex flex-col items-start justify-start gap-2"
                key={`turn-${turnIndex}`}
              >
                {turnMessages.map((message, index) => {
                  const isCurrentMessage =
                    turnIndex === turns.length - 1 &&
                    index === turnMessages.length - 1

                  if (Array.isArray(message) && !isCurrentMessage) {
                    return (
                      <Thinking
                        key={`${turnIndex}-${index}`}
                        messages={message}
                        isActive={false}
                        inProgress={inProgress}
                        RenderMessage={RenderMessage}
                        AssistantMessage={AssistantMessage}
                      />
                    )
                  }

                  return (
                    <RenderMessage
                      key={`${turnIndex}-${index}`}
                      message={
                        Array.isArray(message)
                          ? message[message.length - 1]
                          : message
                      }
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
                  )
                })}
              </div>
            ))}

            {interrupt}
            <div ref={messagesEndRef} className="h-2" />
          </div>

          <AnimatePresence>
            {showScrollToBottom && (
              <motion.div
                className="sticky bottom-20 z-10 flex justify-center"
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

        {/* Input section (sticky footer) */}
        <footer
          className="copilotKitMessagesFooter bg-white border-gray-200 w-full border-t"
          style={{
            position: "sticky",
            bottom: 0,
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          {children}
        </footer>
      </div>

      {isOpen && (
        <FeedbackModal
          onSubmit={(message, feedback) => {
            const callback =
              currentReaction === "like" ? onThumbsUp : onThumbsDown
            callback?.(message, { threadId, feedback })
            closeFeedbackModal()
          }}
          onClose={(message) => {
            const callback =
              currentReaction === "like" ? onThumbsUp : onThumbsDown
            callback?.(message, { threadId, feedback: "" })
            closeFeedbackModal()
          }}
          reactionType={currentReaction}
          message={currentMessage}
        />
      )}
    </>
  )
}

function makeInitialMessages(initial?: string | string[]): Message[] {
  const initialArray: string[] = []
  if (initial) {
    if (Array.isArray(initial)) {
      initialArray.push(...initial)
    } else {
      initialArray.push(initial)
    }
  }

  return initialArray.map((message) => ({
    id: message,
    role: "assistant",
    content: message,
  }))
}
