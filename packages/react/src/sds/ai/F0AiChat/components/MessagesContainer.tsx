import {
  useCopilotChatInternal as useCopilotChat,
  useCopilotContext,
} from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"

import { F0Thinking as Thinking } from "../../F0Thinking"
import { isAgentStateMessage } from "../internal-types"
import { useAiChat } from "../providers/AiChatStateProvider"
import { FeedbackModal } from "./FeedbackModal"
import { FeedbackModalProvider, useFeedbackModal } from "./FeedbackProvider"
import { ScrollShadow } from "./ScrollShadow"
import { WelcomeScreen } from "./WelcomeScreen"

type Turn = Array<Message | Array<Message>>

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
    messages.length === 0 && (greeting || initialMessages.length > 0)

  const turns = useMemo(() => convertMessagesToTurns(messages), [messages])

  // Scroll state
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const contentEndRef = useRef<HTMLDivElement>(null)
  const lastTurnRef = useRef<HTMLDivElement>(null)
  const prevTurnsCountRef = useRef(turns.length)
  const [turnMinHeight, setTurnMinHeight] = useState(0)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [hasContentBelow, setHasContentBelow] = useState(false)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    endRef.current?.scrollIntoView({ behavior })
  }, [])

  // Measure usable height for the last turn: viewport height minus the content wrapper's bottom padding
  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current
    if (!viewport || !content) return
    const observer = new ResizeObserver(() => {
      const py =
        parseFloat(getComputedStyle(content).paddingTop) +
        parseFloat(getComputedStyle(content).paddingBottom) +
        1 // -1 for the sentinel element
      setTurnMinHeight(viewport.clientHeight - py)
    })
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  // Scroll tracking
  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    setShowScrollBtn(distanceFromBottom > clientHeight)
    setIsAtTop(scrollTop <= 0)

    // Bottom shadow: only when actual message content is below the viewport
    const sentinel = contentEndRef.current
    if (sentinel) {
      const containerRect = el.getBoundingClientRect()
      const sentinelRect = sentinel.getBoundingClientRect()
      setHasContentBelow(sentinelRect.top > containerRect.bottom)
    }
  }, [])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Auto-scroll the last turn to the top when the user sends a message
  useEffect(() => {
    if (turns.length > prevTurnsCountRef.current) {
      requestAnimationFrame(() => {
        lastTurnRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    }
    // Reset scroll state when conversation is cleared
    if (turns.length === 0) {
      setShowScrollBtn(false)
      setIsAtTop(true)
      setHasContentBelow(false)
    }
    prevTurnsCountRef.current = turns.length
  }, [turns.length])

  return (
    <>
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <ScrollArea
          className="flex-1 [&>div]:h-full [&>div>div]:h-full"
          viewportRef={viewportRef}
        >
          <div
            ref={contentRef}
            className="flex flex-col p-4 h-full items-center"
          >
            <div
              className={cn(
                showWelcomeBlock ? "flex flex-1" : "flex flex-col gap-8",
                "w-full max-w-[712px]"
              )}
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
                  ref={turnIndex === turns.length - 1 ? lastTurnRef : undefined}
                  className="flex flex-col items-start justify-start gap-2"
                  key={`turn-${turnIndex}`}
                  style={{
                    minHeight:
                      turnIndex === turns.length - 1
                        ? turnMinHeight || undefined
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
        </ScrollArea>

        <AnimatePresence>
          {!isAtTop && <ScrollShadow position="top" key="shadow-top" />}
          {hasContentBelow && (
            <ScrollShadow position="bottom" key="shadow-bottom" />
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
  if (!initial) return []
  const arr = Array.isArray(initial) ? initial : [initial]
  return arr.map((message) => ({
    id: message,
    role: "assistant",
    content: message,
  }))
}

/**
 * Simplified scroll-to-bottom hook.
 * Provides a scroll utility and a "scroll to bottom" button visibility flag.
 */
export function useScrollToBottom() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const [showScrollToBottom, setShowScrollToBottom] = useState(false)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior })
  }, [])

  useEffect(() => {
    const el = messagesContainerRef.current
    if (!el) return

    const handleScroll = () => {
      const distanceFromBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight
      setShowScrollToBottom(distanceFromBottom > el.clientHeight)
    }

    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
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
  let thinkingGroup: Message[] | null = null

  for (const [i, message] of messages.entries()) {
    if (message.role === "user") {
      turns.push([message])
      thinkingGroup = null
      continue
    }

    const currentTurn = turns[turns.length - 1]

    // Hoist agent state messages above the thinking group
    if (isAgentStateMessage(message) && thinkingGroup) {
      if (i !== messages.length - 1) {
        const idx = currentTurn.indexOf(thinkingGroup)
        if (idx !== -1) {
          currentTurn.splice(idx, 1)
        }
        currentTurn.push(message, thinkingGroup)
      }
      continue
    }

    // Always merge thinking messages into a single group per turn, deduplicating consecutive identical content
    if (isThinkingMessage(message)) {
      if (thinkingGroup) {
        const prev = thinkingGroup[thinkingGroup.length - 1]
        if (prev.content !== message.content) {
          thinkingGroup.push(message)
        }
      } else {
        thinkingGroup = [message]
        currentTurn.push(thinkingGroup)
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
