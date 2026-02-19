import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"

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
  } = useAiChat()
  const fullscreen = visualizationMode === "fullscreen"
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"
  const hasMessages = messages.length > 0

  return (
    <header
      className={cn(
        "flex justify-between border-0 border-solid border-f1-border-secondary px-[16px] py-3"
      )}
    >
      <div className="flex items-center">
        <h2 className="text-f1-foreground">
          {hasDefaultTitle ? "" : labels.title}
        </h2>
      </div>
      <motion.div className="flex items-center" {...props}>
        {hasMessages && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.startNewChat}
            icon={New}
            onClick={() => {
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
        {!fullscreen && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.closeChat}
            icon={Cross}
            onClick={() => setOpen(false)}
          />
        )}
      </motion.div>
    </header>
  )
}
