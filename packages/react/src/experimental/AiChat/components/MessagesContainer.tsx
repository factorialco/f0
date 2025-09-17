import { ButtonInternal } from "@/components/actions/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useCopilotChatInternal as useCopilotChat } from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useEventListener, useResizeObserver } from "usehooks-ts"
import OneIcon from "../OneIcon"
import { useAiChat } from "../providers/AiChatStateProvider"
import { useChatWindowContext } from "./ChatWindow"

// corresponds to padding pt-14 applied for the header
const HEADER_HEIGHT_PX = 56

export const MessagesContainer = ({
  inProgress,
  children,
  RenderMessage,
  AssistantMessage,
  UserMessage,
  ImageRenderer,
  onRegenerate,
  onCopy,
  onThumbsUp,
  onThumbsDown,
  markdownTagRenderers,
}: MessagesProps) => {
  const turnsContainerRef = useRef<HTMLDivElement>(null)
  const { messages, interrupt } = useCopilotChat()

  const { greeting } = useAiChat()
  const translations = useI18n()
  const [longestTurnHeight, setLongestTurnHeight] = useState<number>(0)
  const initialMessages = useMemo(
    () => makeInitialMessages(translations.ai.initialMessage),
    [translations.ai.initialMessage]
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
  useEffect(() => {
    if (!turnsContainerRef.current) {
      return
    }
    const turnElements = turnsContainerRef.current.children
    if (turnElements.length === 0) {
      return
    }

    const lastTurnElement = turnElements[turnElements.length - 1]
    const height = lastTurnElement.scrollHeight
    setLongestTurnHeight((prev) => (prev >= height ? prev : height))
  }, [messages.length, initialMessages.length])
  const turns = useMemo(() => {
    return messages.reduce<Array<Array<Message>>>((turns, message) => {
      if (message && message.role === "user") {
        turns.push([message])
      } else {
        if (turns.length > 0) {
          turns[turns.length - 1].push(message)
        }
      }
      return turns
    }, [])
  }, [messages])

  // the scroll container's height is manually controlled by the size of the biggest turn (see `motion.div` below)
  // However the initial height is dynamic and set via `flex-1` class.
  // This way the scroll container takes all available vertical space in the chat window.
  // When we measure it's size in the effect and start manipulating the hight manually. The flex is reset to initial.
  return (
    <motion.div
      layout
      className={cn(
        "scrollbar-macos relative isolate flex-1 scroll-pt-14 px-4 pt-14",
        "overflow-y-scroll"
      )}
      ref={messagesContainerRef}
      style={{
        height: containerHeight
          ? Math.max(containerHeight, longestTurnHeight)
          : undefined,
        flex: containerHeight ? "initial" : undefined,
      }}
    >
      <motion.div layout="position" ref={turnsContainerRef}>
        <AnimatePresence mode="popLayout">
          {showWelcomeBlock && (
            <motion.div
              key="welcome"
              className="absolute top-1/2 flex translate-y-[-50%] flex-col px-2"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="flex w-fit justify-center"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
                transition={{
                  opacity: { duration: 0.2, ease: "easeOut", delay: 0.4 },
                  scale: { duration: 0.3, ease: [0.25, 0.46, 0.45, 1.94] },
                  filter: { duration: 0.2, ease: "easeOut", delay: 0.4 },
                }}
              >
                <OneIcon spin size="lg" className="my-4" />
              </motion.div>
              {greeting && (
                <motion.p
                  className="text-lg font-medium text-f1-foreground-secondary"
                  initial={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
                  animate={{ opacity: 1, filter: "blur(0px)", translateY: 0 }}
                  exit={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
                  transition={{
                    opacity: { duration: 0.2, ease: "easeOut", delay: 0.5 },
                    filter: { duration: 0.2, ease: "easeOut", delay: 0.5 },
                    translateY: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 1.94],
                      delay: 0.5,
                    },
                  }}
                >
                  {greeting}
                </motion.p>
              )}
              {initialMessages.map((message) => (
                <motion.p
                  className="text-2xl font-semibold text-f1-foreground"
                  key={message.id}
                  initial={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
                  animate={{ opacity: 1, filter: "blur(0px)", translateY: 0 }}
                  exit={{ opacity: 0, filter: "blur(2px)", translateY: -8 }}
                  transition={{
                    opacity: { duration: 0.2, ease: "easeOut", delay: 0.7 },
                    filter: { duration: 0.2, ease: "easeOut", delay: 0.7 },
                    translateY: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 1.94],
                      delay: 0.7,
                    },
                  }}
                >
                  {message.content}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {turns.map((turnMessages, turnIndex) => {
          const isCurrentTurn = turnIndex === turns.length - 1

          return (
            <div
              className="flex flex-col items-start justify-start gap-2"
              key={`turn-${turnIndex}`}
              style={{
                minHeight: isCurrentTurn
                  ? containerHeight - HEADER_HEIGHT_PX
                  : undefined,
              }}
            >
              {turnMessages.map((message, index) => {
                const isCurrentMessage =
                  turnIndex === turns.length - 1 &&
                  index === turnMessages.length - 1

                return (
                  <RenderMessage
                    key={`${turnIndex}-${index}`}
                    message={message}
                    inProgress={inProgress}
                    index={index}
                    isCurrentMessage={isCurrentMessage}
                    AssistantMessage={AssistantMessage}
                    UserMessage={UserMessage}
                    ImageRenderer={ImageRenderer}
                    onRegenerate={onRegenerate}
                    onCopy={onCopy}
                    onThumbsUp={onThumbsUp}
                    onThumbsDown={onThumbsDown}
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
  const { setMessageContainerScrollTop } = useChatWindowContext()

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
    setMessageContainerScrollTop(messagesContainerRef.current?.scrollTop ?? 0)

    if (isProgrammaticScrollRef.current) {
      isProgrammaticScrollRef.current = false
      return
    }

    checkIsScrollingUp()
    checkScrollToBottomButtonVisibility()
  }, [setMessageContainerScrollTop])

  useEventListener("scroll", handleScroll, messagesContainerRef)

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) {
      return
    }

    scrollToBottom("instant")

    const mutationObserver = new MutationObserver(() => {
      if (!isUserScrollUpRef.current) {
        scrollToBottom()
      }
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
