import { useCopilotChatInternal as useCopilotChat } from "@copilotkit/react-core"
import { type MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { F0ActionItem } from "../../F0ActionItem"
import { F0Thinking as Thinking } from "../../F0Thinking"
import { useAiChat } from "../providers/AiChatStateProvider"
import {
  FeedbackModalProvider,
  useFeedbackSubmit,
} from "../providers/FeedbackProvider"
import { analyzeTurn, convertMessagesToTurns } from "../utils/turnUtils"
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
  const { greeting, initialMessage, welcomeScreenSuggestions } = useAiChat()

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
    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  // Scroll tracking
  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    setShowScrollBtn(distanceFromBottom > clientHeight)
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
    }
    prevTurnsCountRef.current = turns.length
  }, [turns.length])

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
                showWelcomeBlock ? "flex flex-1" : "flex flex-col gap-6",
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
              {turns.map((turnMessages, turnIndex) => {
                const { turnIsComplete, showActivityIndicator } = analyzeTurn(
                  turnMessages,
                  turnIndex,
                  turns.length,
                  inProgress
                )

                return (
                  <div
                    ref={
                      turnIndex === turns.length - 1 ? lastTurnRef : undefined
                    }
                    className={cn(
                      "flex flex-col items-start justify-start gap-2",
                      turnIndex === turns.length - 1 && "pb-5"
                    )}
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

function makeInitialMessages(initial?: string | string[]): Message[] {
  if (!initial) return []
  const arr = Array.isArray(initial) ? initial : [initial]
  return arr.map((message) => ({
    id: message,
    role: "assistant",
    content: message,
  }))
}
