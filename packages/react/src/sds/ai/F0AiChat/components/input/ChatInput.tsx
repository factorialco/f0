import { useCopilotChatInternal } from "@copilotkit/react-core"
import { InputProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useMemo, useRef } from "react"

import { Link } from "@/lib/linkHandler"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { filterNonRenderableMessages } from "../../internal-types"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { ChatTextarea } from "./ChatTextarea"

export const ChatInput = (props: InputProps) => {
  const {
    disclaimer,
    footer,
    visualizationMode,
    isLoadingThread,
    creditWarning,
    clarifyingQuestion,
  } = useAiChat()
  const translation = useI18n()
  const { messages } = useCopilotChatInternal()
  const containerRef = useRef<HTMLDivElement>(null)
  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const isWelcomeScreen = filteredMessages.length === 0 && !isLoadingThread
  const fullscreen = visualizationMode === "fullscreen"
  const fullscreenWelcome = fullscreen && isWelcomeScreen

  const isClarifying = clarifyingQuestion != null
  const currentStepOptional = clarifyingQuestion?.currentStep.optional === true

  useEffect(() => {
    const textarea = containerRef.current?.querySelector("textarea")
    textarea?.focus()
  }, [visualizationMode])

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center gap-2 px-4 pb-3 pt-2",
        fullscreenWelcome && "flex-1"
      )}
    >
      <div className="w-full max-w-[712px]">
        <ChatTextarea {...props} creditWarning={creditWarning} />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isClarifying ? (
          <motion.div
            key="clarifying-nav-hint"
            className="flex w-full max-w-[712px] flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <span>
              <kbd className="font-sans">↑↓</kbd>{" "}
              {translation.ai.clarifyingQuestion.navHint.navigate}
            </span>
            <span>
              <kbd className="font-sans">Enter</kbd>{" "}
              {translation.ai.clarifyingQuestion.navHint.select}
            </span>
            {currentStepOptional && (
              <span>
                <kbd className="font-sans">Esc</kbd>{" "}
                {translation.ai.clarifyingQuestion.navHint.skip}
              </span>
            )}
          </motion.div>
        ) : (
          disclaimer?.text &&
          !fullscreenWelcome && (
            <motion.div
              key="chat-disclaimer"
              className="flex w-full max-w-[712px] flex-row items-center justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <OneEllipsis className="text-sm font-medium text-f1-foreground-tertiary">
                {disclaimer.text}
              </OneEllipsis>

              {disclaimer.link && disclaimer.linkText && (
                <Link
                  href={disclaimer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary"
                >
                  {disclaimer.linkText}
                </Link>
              )}
            </motion.div>
          )
        )}
      </AnimatePresence>
      <AnimatePresence>
        {footer && isWelcomeScreen && (
          <motion.div
            key="chat-footer"
            className={cn(
              "w-full py-4 mx-auto max-w-[712px]",
              fullscreenWelcome && "mt-auto",
              fullscreen && "flex justify-center"
            )}
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {footer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
