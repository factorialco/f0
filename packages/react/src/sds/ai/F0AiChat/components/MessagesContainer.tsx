import { type MessagesProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowDown } from "@/icons/app"
import { cn } from "@/lib/utils"

import { FeedbackModal } from "./FeedbackModal"
import { FeedbackModalProvider } from "../providers/FeedbackProvider"
import { ScrollShadow } from "./ScrollShadow"
import { TurnContent } from "./TurnContent"
import { analyzeTurn } from "../utils/turnConversions"
import { useMessagesSetup } from "../hooks/useMessagesSetup"
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
  const {
    interrupt,
    translations,
    greeting,
    initialMessages,
    welcomeScreenSuggestions,
    showWelcomeBlock,
    turns,
  } = useMessagesSetup()

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
                const analysis = analyzeTurn(
                  turnMessages,
                  turnIndex,
                  turns.length,
                  inProgress
                )

                return (
                  <div
                    ref={analysis.isLastTurn ? lastTurnRef : undefined}
                    className={cn(
                      "flex flex-col items-start justify-start gap-2",
                      analysis.isLastTurn && "pb-5"
                    )}
                    key={`turn-${turnIndex}`}
                    style={{
                      minHeight: analysis.isLastTurn
                        ? turnMinHeight || undefined
                        : undefined,
                    }}
                  >
                    <TurnContent
                      turnMessages={turnMessages}
                      turnIndex={turnIndex}
                      analysis={analysis}
                      inProgress={inProgress}
                      RenderMessage={RenderMessage}
                      AssistantMessage={AssistantMessage}
                      onCopy={onCopy}
                      renderMessage={(message, index, isCurrentMessage) => (
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
                          markdownTagRenderers={markdownTagRenderers}
                        />
                      )}
                    />
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

      <FeedbackModal />
    </>
  )
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
