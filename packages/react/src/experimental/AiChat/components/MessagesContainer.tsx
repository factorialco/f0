import { ButtonInternal } from "@/components/Actions/Button/internal"
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
import { Thinking } from "./Thinking"

type Turn = Array<Message | Array<Message>>

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

  const translations = useI18n()
  const { greeting, initialMessage } = useAiChat()
  const [longestTurnHeight, setLongestTurnHeight] = useState<number>(0)
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
    return convertMessagesToTurns(messages)
  }, [messages])

  // the scroll container's height is manually controlled by the size of the biggest turn (see `motion.div` below)
  // However the initial height is dynamic and set via `flex-1` class.
  // This way the scroll container takes all available vertical space in the chat window.
  // When we measure it's size in the effect and start manipulating the hight manually. The flex is reset to initial.
  return (
    <motion.div
      layout
      className={cn(
        "scrollbar-macos relative isolate flex-1 px-4 pt-3",
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
                  ? // "scroll" the current turn up in the view to make space for the assistant response,
                    // but leave 20% of the container height on the top to show part of the previous dialog
                    containerHeight * 0.8
                  : undefined,
              }}
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

export function convertMessagesToTurns(messages: Message[]): Turn[] {
  if (messages.length === 0) {
    return []
  }

  console.assert(
    messages[0].role === "user",
    "Invariant violation! Assistant message received before user message"
  )

  const turns: Turn[] = []

  for (const [i, message] of messages.entries()) {
    if (message.role === "user") {
      // create new turn
      turns.push([message])
      continue
    }

    const currentTurn = turns[turns.length - 1]

    // Handle agent state messages that arrive during thinking message grouping
    if (
      isAgentStateMessage(message) &&
      isCurrentlyGroupingThinking(currentTurn)
    ) {
      // we want to ignore the last agent state message
      // to avoid rerenders of thinking components and play extra animations
      if (i !== messages.length - 1) {
        const thinkingGroup = currentTurn.pop() as Message[]
        currentTurn.push(message, thinkingGroup)
      }
      continue
    }

    // Handle thinking messages
    if (isThinkingMessage(message)) {
      if (isCurrentlyGroupingThinking(currentTurn)) {
        // Continue grouping: add to existing thinking group
        const thinkingGroup = currentTurn.at(-1) as Message[]
        thinkingGroup.push(message)
      } else {
        // Start grouping: create new thinking group
        currentTurn.push([message])
      }
      continue
    }

    currentTurn.push(message)
  }

  return turns
}

function isThinkingMessage(message: Message): boolean {
  return (
    message.role === "assistant" &&
    message.toolCalls?.some(
      (call) => call.function.name === "orchestratorThinking"
    ) === true
  )
}

function isAgentStateMessage(message: Message): boolean {
  return message.role === "assistant" && message.agentName !== undefined
}

function isCurrentlyGroupingThinking(turn: Turn): boolean {
  const lastMessage = turn.at(-1)
  return Array.isArray(lastMessage)
}
