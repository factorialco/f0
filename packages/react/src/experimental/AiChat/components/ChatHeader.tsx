import { ButtonInternal } from "@/components/F0Button/internal"
import Cross from "@/icons/app/Cross"
import Plus from "@/icons/app/Plus"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useAiChat } from "../providers/AiChatStateProvider"

export const ChatHeader = (props: HeaderProps) => {
  const { labels } = useChatContext()
  const { messages } = useCopilotChatInternal()
  const { setOpen, clear, visualizationMode } = useAiChat()
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"
  const hasMessages = messages.length > 0

  return (
    <header
      className={cn(
        "flex justify-between border-0 border-solid border-f1-border-secondary p-3",
        visualizationMode === "fullscreen" &&
          !hasMessages &&
          "absolute top-0 left-0 right-0"
      )}
    >
      <h2 className="text-f1-foreground">
        {hasDefaultTitle ? "" : labels.title}
      </h2>
      <motion.div layout className="flex items-center" {...props}>
        {hasMessages && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.startNewChat}
            icon={Plus}
            onClick={() => {
              clear()
            }}
          />
        )}
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={translations.ai.closeChat}
          icon={Cross}
          onClick={() => setOpen(false)}
        />
      </motion.div>
    </header>
  )
}
