import {
  CopilotKit,
  CopilotKitProps,
  useCopilotAction,
} from "@copilotkit/react-core"
import { CopilotSidebar } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"

import { cn } from "@/lib/utils"
import { ActionItem } from "./ActionItem"
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
  initialMessage?: string | string[]
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
  initialMessage,
  children,
  agent,
  ...copilotKitProps
}: AiChatProviderProps) => {
  // todo: implement error handling
  // temporary set runtime url until error handling is done
  return (
    <AiChatStateProvider
      enabled={enabled}
      greeting={greeting}
      initialMessage={initialMessage}
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
  const { enabled, open, setOpen } = useAiChat()

  useCopilotAction({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [
      {
        name: "message",
        description: "User-friendly progress message",
        required: true,
      },
    ],
    // render only when backend wants to display the thinking
    available: "disabled",
    render: (props) => {
      return (
        <div className={props.status ? "-ml-1" : undefined}>
          <ActionItem
            title={props.args.message ?? "thinking"}
            status={props.status === "complete" ? "completed" : props.status}
            inGroup={props.result?.inGroup}
          />
        </div>
      )
    },
  })

  if (!enabled) {
    return null
  }

  return (
    <CopilotSidebar
      className={cn("h-full", open && "py-1 xs:pr-1")}
      defaultOpen={open}
      onSetOpen={(isOpen) => {
        setOpen(isOpen)
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
