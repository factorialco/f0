import { CopilotKit, CopilotKitProps } from "@copilotkit/react-core"
import { CopilotSidebar } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"

import {
  AssistantMessage,
  ChatButton,
  ChatHeader,
  ChatTextarea,
  ChatWindow,
  MessagesContainer,
  UserMessage,
} from "./components"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"

export type AiChatProviderProps = {
  enabled?: boolean
  greeting?: string
} & Pick<
  CopilotKitProps,
  | "agent"
  | "credentials"
  | "children"
  | "runtimeUrl"
  | "showDevConsole"
  | "threadId"
  | "headers"
>

const AiChatProviderCmp = ({
  enabled = false,
  greeting,
  children,
  agent,
  ...copilotKitProps
}: AiChatProviderProps) => {
  // todo: implement error handling
  // temporary set runtime url until error handling is done
  return (
    <AiChatStateProvider enabled={enabled} greeting={greeting} agent={agent}>
      <AiChatKitWrapper {...copilotKitProps}>{children}</AiChatKitWrapper>
    </AiChatStateProvider>
  )
}

const AiChatKitWrapper = ({
  children,
  ...copilotKitProps
}: Omit<CopilotKitProps, "agent">) => {
  const { agent } = useAiChat()

  return (
    <CopilotKit runtimeUrl="/copilotkit" agent={agent} {...copilotKitProps}>
      {children}
    </CopilotKit>
  )
}

const AiChatCmp = () => {
  const { enabled, open, setOpen } = useAiChat()

  if (!enabled || !open) {
    return null
  }

  return (
    <CopilotSidebar
      className="h-full py-1 xs:pr-1"
      defaultOpen
      onSetOpen={(open) => {
        setOpen(open)
      }}
      Window={ChatWindow}
      Header={ChatHeader}
      Messages={MessagesContainer}
      Button={ChatButton}
      Input={ChatTextarea}
      UserMessage={UserMessage}
      AssistantMessage={AssistantMessage}
    />
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AiChat = experimentalComponent("AiChat", AiChatCmp)

const AiChatProvider = experimentalComponent(
  "AiChatProvider",
  AiChatProviderCmp
)

export { AiChat, AiChatProvider }
