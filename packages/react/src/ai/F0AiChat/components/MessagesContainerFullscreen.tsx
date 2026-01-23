import {
  useCopilotChatInternal as useCopilotChat,
  useCopilotContext,
} from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useContext, useEffect, useMemo, useRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { FullscreenChatContext } from "../index"
import { useAiChat } from "../providers/AiChatStateProvider"
import { AssistantMessage as F0AssistantMessage } from "./AssistantMessage"
import { FeedbackModal } from "./FeedbackModal"
import { FeedbackModalProvider, useFeedbackModal } from "./FeedbackProvider"
import { convertMessagesToTurns, useScrollToBottom } from "./MessagesContainer"
import { Thinking } from "./Thinking"
import { UserMessage as F0UserMessage } from "./UserMessage"
import { WelcomeScreen } from "./WelcomeScreen"

/**
 * MessagesContainerFullscreen
 *
 * Layout: Flexbox layout separating scrollable messages and sticky input footer.
 * Messages scroll inside a flex-1 container while the input stays at the bottom.
 */
export const MessagesContainerFullscreen = (props: Partial<MessagesProps>) => {
  return (
    <FeedbackModalProvider>
      <Messages {...props} />
    </FeedbackModalProvider>
  )
}

const Messages = ({
  inProgress: inProgressProp,
  RenderMessage: RenderMessageProp,
  AssistantMessage: AssistantMessageProp,
  UserMessage: UserMessageProp,
  ImageRenderer: ImageRendererProp,
  onRegenerate,
  onCopy,
  markdownTagRenderers,
}: Partial<MessagesProps>) => {
  const turnsContainerRef = useRef<HTMLDivElement>(null)
  const { messages, interrupt, isLoading } = useCopilotChat()

  const inProgress = inProgressProp ?? isLoading

  const AssistantMessage = AssistantMessageProp ?? F0AssistantMessage
  const UserMessage = UserMessageProp ?? F0UserMessage
  const ImageRenderer =
    ImageRendererProp ??
    (({ image, content }: any) => (
      <img
        src={image}
        alt={content || "Assistant image"}
        className="max-w-full rounded-lg"
      />
    ))
  const { threadId } = useCopilotContext()
  const { setInProgress } = useContext(FullscreenChatContext)
  const {
    close: closeFeedbackModal,
    currentReaction,
    currentMessage,
    isOpen,
  } = useFeedbackModal()

  useEffect(() => {
    setInProgress(inProgress)
  }, [inProgress, setInProgress])

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
    messages.length === 0 && (greeting || initialMessages.length > 0)

  const {
    messagesContainerRef,
    messagesEndRef,
    showScrollToBottom,
    scrollToBottom,
  } = useScrollToBottom()

  const turns = useMemo(() => convertMessagesToTurns(messages), [messages])

  // Auto-scroll for new messages and streaming content
  const prevMessagesLength = useRef(messages.length)
  const lastMessageContent = messages[messages.length - 1]?.content || ""
  const prevLastMessageContent = useRef(lastMessageContent)

  useEffect(() => {
    const isNewMessage = messages.length > prevMessagesLength.current
    const isContentUpdate =
      messages.length === prevMessagesLength.current &&
      lastMessageContent !== prevLastMessageContent.current

    if (isNewMessage || isContentUpdate) {
      const lastMessage = messages[messages.length - 1]
      const isUserMessage = lastMessage?.role === "user"

      const performScroll = (behavior: ScrollBehavior = "instant") => {
        const container = messagesContainerRef.current
        if (container) {
          const threshold = isUserMessage ? 400 : 250
          const isNearBottom =
            container.scrollHeight -
              container.scrollTop -
              container.clientHeight <
            threshold

          if (isUserMessage || isNearBottom) {
            scrollToBottom(behavior)
          }
        }
      }

      if (isNewMessage) {
        // Immediate and then a few retries for layout shifts
        performScroll("instant")
        const timeouts = [50, 150, 400].map((ms) =>
          setTimeout(() => performScroll("instant"), ms)
        )

        prevMessagesLength.current = messages.length
        prevLastMessageContent.current = lastMessageContent
        return () => timeouts.forEach(clearTimeout)
      } else if (isContentUpdate) {
        // Streaming: use instant to stay at bottom without jitters
        performScroll("instant")
      }
    }

    prevMessagesLength.current = messages.length
    prevLastMessageContent.current = lastMessageContent
  }, [messages.length, lastMessageContent, scrollToBottom])

  // Sync scroll on resize and viewport changes (e.g. keyboard)
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    let isAtBottom = true
    const checkAtBottom = () => {
      // Use a slightly larger threshold for mobile to be safe
      const threshold = 150
      isAtBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight <
        threshold
    }

    const handleResize = () => {
      // Multiple retries because mobile layout shifts and keyboard animations take time
      const retries = [50, 150, 300, 600]
      const timeouts = retries.map((ms) =>
        setTimeout(() => {
          if (isAtBottom) {
            scrollToBottom("instant")
          }
        }, ms)
      )
      return () => timeouts.forEach(clearTimeout)
    }

    // Force scroll to bottom when any input gets focus (keyboard appearing)
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "TEXTAREA" ||
        (target.tagName === "INPUT" &&
          (target as HTMLInputElement).type === "text")
      ) {
        // When focusing an input, we almost always want to see the last messages
        // wait a bit for keyboard to start appearing
        setTimeout(() => {
          scrollToBottom("instant")
          setTimeout(() => scrollToBottom("instant"), 300)
        }, 100)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      ;(container as any)._startY = e.touches[0].pageY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const isAtTop = scrollTop <= 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight

      // Get the direction of the swipe
      const touch = e.touches[0]
      const currentY = touch.pageY
      const startY = (container as any)._startY || currentY
      const direction = currentY > startY ? "down" : "up"

      // 1. If the list is shorter than the container, block all scrolling
      // 2. If at the top and pulling down, block it
      // 3. If at the bottom and pulling up, block it
      if (
        scrollHeight <= clientHeight ||
        (isAtTop && direction === "down") ||
        (isAtBottom && direction === "up")
      ) {
        if (e.cancelable) {
          e.preventDefault()
        }
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    container.addEventListener("scroll", checkAtBottom)
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    })
    container.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("resize", handleResize)
    window.addEventListener("focusin", handleFocusIn)

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize)
      window.visualViewport.addEventListener("scroll", handleResize)
    }

    return () => {
      resizeObserver.disconnect()
      container.removeEventListener("scroll", checkAtBottom)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("focusin", handleFocusIn)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize)
        window.visualViewport.removeEventListener("scroll", handleResize)
      }
    }
  }, [scrollToBottom])

  return (
    <>
      {/* Messages section - scrollable container */}
      <div
        ref={messagesContainerRef}
        className={cn(
          "scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4",
          showWelcomeBlock ? "justify-end pt-0" : "justify-start pt-3"
        )}
        style={{
          minHeight: 0,
          flex: "1 1 auto",
          overflowY: showWelcomeBlock ? "hidden" : "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: showWelcomeBlock ? "flex-end" : "flex-start",
          position: "relative",
          touchAction: showWelcomeBlock ? "none" : "pan-y",
          paddingTop: showWelcomeBlock ? 0 : undefined,
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          transform: "translateZ(0)",
          willChange: "scroll-position",
        }}
      >
        <div
          ref={turnsContainerRef}
          className={
            showWelcomeBlock ? "flex flex-1 pb-3" : "flex flex-col gap-8"
          }
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: showWelcomeBlock ? "100%" : undefined,
            flexGrow: showWelcomeBlock ? 1 : 1,
            flexShrink: 1,
            alignItems: "stretch",
            paddingBottom: showWelcomeBlock ? "12px" : undefined,
          }}
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
                      RenderMessage={RenderMessageProp as any}
                      AssistantMessage={AssistantMessage}
                    />
                  )
                }

                const messageToShow = Array.isArray(message)
                  ? message[message.length - 1]
                  : message

                const messageProps = {
                  key: `${turnIndex}-${index}`,
                  message: messageToShow,
                  inProgress: inProgress,
                  index: index,
                  isCurrentMessage: isCurrentMessage,
                  AssistantMessage: AssistantMessage,
                  UserMessage: UserMessage,
                  ImageRenderer: ImageRenderer,
                  onRegenerate: onRegenerate,
                  onCopy: onCopy,
                  markdownTagRenderers: markdownTagRenderers,
                  rawData: (messageToShow as any).rawData || {},
                }

                const { key, ...messageRestProps } = messageProps

                if (RenderMessageProp) {
                  return (
                    <RenderMessageProp
                      key={key}
                      {...(messageRestProps as any)}
                    />
                  )
                }

                if (messageToShow.role === "user") {
                  return (
                    <UserMessage key={key} {...(messageRestProps as any)} />
                  )
                }

                return (
                  <AssistantMessage
                    key={key}
                    {...(messageRestProps as any)}
                    isGenerating={inProgress && isCurrentMessage}
                    isLoading={
                      inProgress && isCurrentMessage && !messageToShow.content
                    }
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
