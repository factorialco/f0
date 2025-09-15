import { CopilotKit, CopilotKitProps } from "@copilotkit/react-core"
import { CopilotPopup, CopilotSidebar } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"

import {
  AssistantMessage,
  ChatButton,
  ChatTextarea,
  MessagesContainer,
  PopupHeader,
  PopupWindow,
  SidebarHeader,
  SidebarWindow,
  UserMessage,
} from "./components"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"

export type AiChatMode = "popup" | "sidebar"

export type AiChatProviderProps = {
  enabled?: boolean
  mode?: AiChatMode
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
  mode = "popup",
  greeting,
  children,
  agent,
  ...copilotKitProps
}: AiChatProviderProps) => {
  // todo: implement error handling
  // temporary set runtime url until error handling is done
  return (
    <AiChatStateProvider
      enabled={enabled}
      initialMode={mode}
      greeting={greeting}
      agent={agent}
    >
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
  const { enabled, mode, open, setOpen } = useAiChat()

  if (!enabled) {
    return null
  }

  return mode === "sidebar" ? (
    <CopilotSidebar
      className="h-full py-1 xs:pr-1"
      defaultOpen={open}
      onSetOpen={(open) => {
        setOpen(open)
      }}
      Window={SidebarWindow}
      Header={SidebarHeader}
      Messages={MessagesContainer}
      Button={ChatButton}
      Input={ChatTextarea}
      UserMessage={UserMessage}
      AssistantMessage={AssistantMessage}
    />
  ) : (
    <CopilotPopup
      clickOutsideToClose={false}
      defaultOpen={open}
      onSetOpen={(open) => {
        setOpen(open)
      }}
      Window={PopupWindow}
      Header={PopupHeader}
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
