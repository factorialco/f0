import { useCopilotChatInternal } from "@copilotkit/react-core"
import { InputProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { ChatTextarea } from "./ChatTextarea"

export const ChatInput = (props: InputProps) => {
  const { disclaimer, footer, visualizationMode, isLoadingThread } = useAiChat()
  const { messages } = useCopilotChatInternal()
  const containerRef = useRef<HTMLDivElement>(null)
  const isWelcomeScreen = messages.length === 0 && !isLoadingThread
  const fullscreen = visualizationMode === "fullscreen"
  const fullscreenWelcome = fullscreen && isWelcomeScreen

  useEffect(() => {
    const textarea = containerRef.current?.querySelector("textarea")
    textarea?.focus()
  }, [visualizationMode])

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center gap-2 px-4 pb-4 pt-2",
        fullscreenWelcome && "flex-1"
      )}
    >
      <motion.div
        layout="position"
        className="w-full max-w-[712px]"
        transition={{
          layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        }}
      >
        <ChatTextarea {...props} />
      </motion.div>
      {disclaimer?.text && (
        <motion.div
          layout="position"
          className="flex w-full max-w-[712px] flex-row items-center justify-center gap-1"
          transition={{
            layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
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
      )}
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
