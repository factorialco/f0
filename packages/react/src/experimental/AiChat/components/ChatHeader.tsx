import { ButtonInternal } from "@/components/Actions/Button/internal"
import Cross from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useChatWindowContext } from "./ChatWindow"

export const ChatHeader = (props: HeaderProps) => {
  const { setOpen, labels } = useChatContext()
  const { messageContainerScrollTop } = useChatWindowContext()
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-10 flex justify-between border-0 border-solid border-f1-border-secondary p-3",
        messageContainerScrollTop > 0 &&
          "border-b bg-f1-background/30 backdrop-blur-lg"
      )}
    >
      <h2 className="text-f1-foreground">
        {hasDefaultTitle ? "" : labels.title}
      </h2>
      <motion.div layout className="flex items-center gap-x-2" {...props}>
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={translations.actions.close}
          icon={Cross}
          onClick={() => setOpen(false)}
        />
      </motion.div>
    </header>
  )
}
