import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useCallback } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import Cross from "@/icons/app/Cross"
import Maximize from "@/icons/app/Maximize"
import Minimize from "@/icons/app/Minimize"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useAiChat } from "../providers/AiChatStateProvider"
import { New } from "@/icons/app"

export const ChatHeader = (props: HeaderProps) => {
  const { labels } = useChatContext()
  const { messages } = useCopilotChatInternal()
  const {
    setOpen,
    clear,
    visualizationMode,
    setVisualizationMode,
    lockVisualizationMode,
    onNewChat,
  } = useAiChat()
  const fullscreen = visualizationMode === "fullscreen"
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"
  const hasMessages = messages.length > 0

  const handleClose = useCallback(() => {
    if (fullscreen) {
      setVisualizationMode("sidepanel")
      setTimeout(() => setOpen(false), 200)
    } else {
      setOpen(false)
    }
  }, [fullscreen, setVisualizationMode, setOpen])

  return (
    <header className={cn("flex justify-between px-4 py-3")}>
      <div className="flex items-center">
        <h2 className="text-f1-foreground">
          {hasDefaultTitle ? "" : labels.title}
        </h2>
      </div>
      <motion.div className="flex items-center" {...props}>
        {hasMessages && !lockVisualizationMode && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.startNewChat}
            icon={New}
            onClick={() => {
              onNewChat?.()
              clear()
            }}
          />
        )}
        {!lockVisualizationMode && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={
              fullscreen
                ? translations.ai.collapseChat
                : translations.ai.expandChat
            }
            icon={fullscreen ? Minimize : Maximize}
            onClick={() =>
              setVisualizationMode((prev) =>
                prev === "fullscreen" ? "sidepanel" : "fullscreen"
              )
            }
          />
        )}
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={translations.ai.closeChat}
          icon={Cross}
          onClick={handleClose}
        />
      </motion.div>
    </header>
  )
}
