import {
  useCopilotChatInternal as useCopilotChat,
  useCopilotContext,
} from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { ArrowDown } from "@factorialco/f0-react/icons/app"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useEventListener, useResizeObserver } from "usehooks-ts"
import { ButtonInternal } from "../../../components/F0Button/internal"
import { useI18n } from "../../../lib/providers/i18n"
import { cn } from "../../../lib/utils"
import {
  FeedbackModal,
  FeedbackModalProvider,
  useFeedbackModal,
} from "../../FeedbackModal"
import { convertMessagesToTurns } from "../convertMessagesToTurns"
import { useAiChat } from "../providers/AiChatStateProvider"
import { Thinking } from "./Thinking"
import { WelcomeScreen } from "./WelcomeScreen"

export const MessagesContainer = (props: MessagesProps) => {
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

  const translations = useI18n()
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
    messages.length == 0 && (greeting || initialMessages.length > 0)

  const {
    messagesContainerRef,
    messagesEndRef,
    showScrollToBottom,
    scrollToBottom,
  } = useScrollToBottom()
  const { height: containerHeight = 0 } = useResizeObserver({
    ref: messagesContainerRef,
    box: "border-box",
  })
  const turns = useMemo(() => {
    return convertMessagesToTurns(messages)
  }, [messages])

  return (
    <>
      <motion.div
        layout
        className={cn(
          "scrollbar-macos relative isolate flex flex-1 flex-col px-4 pt-3",
          "overflow-y-scroll"
        )}
        ref={messagesContainerRef}
      >
        <motion.div
          layout="position"
          ref={turnsContainerRef}
          className={
            showWelcomeBlock ? "flex flex-1 pb-3" : "flex flex-col gap-8"
          }
        >
          {showWelcomeBlock && (
            <WelcomeScreen
              greeting={greeting}
              initialMessages={initialMessages}
              suggestions={welcomeScreenSuggestions}
            />
          )}
          {turns.map((turnMessages, turnIndex) => {
            const isCurrentTurn = turnIndex === turns.length - 1

            return (
              <div
                className="flex flex-col items-start justify-start gap-2"
                style={{
                  minHeight: isCurrentTurn
                    ? // "scroll" the current turn up in the view to make space for the assistant response,
                      // but leave 20% of the container height on the top to show part of the previous dialog
                      containerHeight * 0.8
                    : undefined,
                }}
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
                          ? message[message.length - 1] // show last thought when the thinking is ongoing
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
            )
          })}
          {interrupt}
        </motion.div>
        <footer className="copilotKitMessagesFooter" ref={messagesEndRef}>
          {children}
        </footer>
        <AnimatePresence>
          {showScrollToBottom && (
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
      </motion.div>
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

export function useScrollToBottom() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const isProgrammaticScrollRef = useRef(false)
  const isUserScrollUpRef = useRef(false)
  const [showScrollToBottom, setShowScrollToBottom] = useState(false)

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (messagesContainerRef.current && messagesEndRef.current) {
      setShowScrollToBottom(false)
      isProgrammaticScrollRef.current = true
      messagesEndRef.current.scrollIntoView({ behavior })
    }
  }

  const checkIsScrollingUp = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current
      const PRECISION = 20

      isUserScrollUpRef.current =
        scrollTop + clientHeight + PRECISION < scrollHeight
    } else {
      isUserScrollUpRef.current = false
    }
  }

  const checkScrollToBottomButtonVisibility = () => {
    if (!messagesContainerRef.current) {
      setShowScrollToBottom(false)
      return
    }

    const { scrollTop, scrollHeight, clientHeight } =
      messagesContainerRef.current

    const isScrolledFarUp = scrollTop < scrollHeight - 3 * clientHeight
    setShowScrollToBottom(isScrolledFarUp)
  }

  const handleScroll = useCallback(() => {
    if (isProgrammaticScrollRef.current) {
      isProgrammaticScrollRef.current = false
      return
    }

    checkIsScrollingUp()
    checkScrollToBottomButtonVisibility()
  }, [])

  useEventListener("scroll", handleScroll, messagesContainerRef)

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) {
      return
    }

    scrollToBottom("instant")

    const mutationObserver = new MutationObserver(() => {
      checkScrollToBottomButtonVisibility()
    })

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => {
      mutationObserver.disconnect()
    }
  }, [])

  return {
    messagesEndRef,
    messagesContainerRef,
    showScrollToBottom,
    scrollToBottom,
  }
}

// Re-export for backward compatibility
export { convertMessagesToTurns } from "../convertMessagesToTurns"
