import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import Cross from "@factorialco/f0-react/icons/app/Cross"
import { motion } from "motion/react"
import { ButtonInternal } from "../../../components/F0Button/internal"
import { useI18n } from "../../../lib/providers/i18n"
import { cn } from "../../../lib/utils"
import { useAiChat } from "../providers/AiChatStateProvider"

export const ChatHeader = (props: HeaderProps) => {
  const { labels } = useChatContext()
  const { setOpen } = useAiChat()
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"

  return (
    <header
      className={cn(
        "flex justify-between border-0 border-solid border-f1-border-secondary p-3"
      )}
    >
      <h2 className="text-f1-foreground">
        {hasDefaultTitle ? "" : labels.title}
      </h2>
      <motion.div layout className="flex items-center gap-x-2" {...props}>
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
