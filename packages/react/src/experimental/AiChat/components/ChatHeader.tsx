import { ButtonInternal } from "@/components/Actions/Button/internal"
import Cross from "@/icons/app/Cross"
import Maximize from "@/icons/app/Maximize"
import Minimize from "@/icons/app/Minimize"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { DialogDescription, DialogHeader, DialogTitle } from "@/ui/dialog"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { ElementType } from "react"
import { useAiChat } from "../providers/AiChatStateProvider"
import { useChatWindowContext } from "./ChatWindow"

export const PopupHeader = (props: HeaderProps) => {
  return (
    <ChatHeader
      Container={DialogHeader}
      TitleComponent={DialogTitle}
      DescriptionComponent={DialogDescription}
      {...props}
    />
  )
}

export const SidebarHeader = (props: HeaderProps) => {
  return (
    <ChatHeader
      Container={DialogHeader}
      TitleComponent="h2"
      DescriptionComponent="p"
      {...props}
    />
  )
}

type ChatHeaderProps = HeaderProps & {
  Container: ElementType
  TitleComponent: ElementType
  DescriptionComponent: ElementType
}

const ChatHeader = ({
  Container,
  TitleComponent,
  DescriptionComponent,
  ...rest
}: ChatHeaderProps) => {
  const { setOpen, labels } = useChatContext()
  const { messageContainerScrollTop } = useChatWindowContext()
  const translations = useI18n()
  const { mode, setMode } = useAiChat()
  const hasDefaultTitle = labels.title === "CopilotKit"

  // todo: title is only shown for the active dialog with at least one user message present
  return (
    <Container
      className={cn(
        "absolute inset-x-0 top-0 z-10 flex justify-between border-0 border-solid border-f1-border-secondary p-3",
        messageContainerScrollTop > 0 &&
          "border-b bg-f1-background/30 backdrop-blur-lg"
      )}
    >
      <TitleComponent className="text-f1-foreground">
        {hasDefaultTitle ? "" : labels.title}
      </TitleComponent>
      <DescriptionComponent className="sr-only">
        {translations.ai.description}
      </DescriptionComponent>
      <motion.div layout className="flex items-center gap-x-2" {...rest}>
        <ButtonInternal
          variant="outline"
          hideLabel
          label={translations.ai.expandChat}
          icon={mode === "popup" ? Maximize : Minimize}
          size="sm"
          onClick={() =>
            setMode((current) => (current === "popup" ? "sidebar" : "popup"))
          }
        />
        <ButtonInternal
          variant="outline"
          hideLabel
          label={translations.actions.close}
          icon={Cross}
          size="sm"
          onClick={() => setOpen(false)}
        />
      </motion.div>
    </Container>
  )
}
