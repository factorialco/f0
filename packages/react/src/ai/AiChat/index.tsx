import {
  CopilotKit,
  CopilotKitProps,
  useCopilotAction,
  useCopilotChatInternal,
} from "@copilotkit/react-core"
import { CopilotChat, CopilotSidebar, InputProps } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"

import { type AIMessage } from "@copilotkit/shared"
import { useCallback, useEffect } from "react"
import { ActionItem } from "./ActionItem"
import {
  AssistantMessage,
  ChatButton,
  ChatHeader,
  ChatTextarea,
  ChatWindow,
  MessageSources,
  MessagesContainer,
  UserMessage,
} from "./components"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { MessagesContainerFullscreen } from "./components/MessagesContainerFullscreen"

export type AiChatProviderProps = {
  enabled?: boolean
  greeting?: string
  initialMessage?: string | string[]
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
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
  welcomeScreenSuggestions,
  onThumbsUp,
  onThumbsDown,
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
      onThumbsUp={onThumbsUp}
      onThumbsDown={onThumbsDown}
      agent={agent}
      welcomeScreenSuggestions={welcomeScreenSuggestions}
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
      <ResetFunctionInjector />
      <SendMessageFunctionInjector />
      {children}
    </CopilotKit>
  )
}

const ResetFunctionInjector = () => {
  const { setClearFunction } = useAiChat()
  const { reset } = useCopilotChatInternal()

  useEffect(() => {
    setClearFunction(reset)
    return () => {
      setClearFunction(null)
    }
  }, [setClearFunction, reset])

  return null
}

const SendMessageFunctionInjector = () => {
  const { setSendMessageFunction } = useAiChat()
  const { sendMessage } = useCopilotChatInternal()

  useEffect(() => {
    if (sendMessage) {
      setSendMessageFunction(sendMessage)
    }
    return () => {
      setSendMessageFunction(null)
    }
  }, [setSendMessageFunction, sendMessage])

  return null
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

  useCopilotAction({
    name: "messageSources",
    description:
      "Attach information sources to the assistant's response. Use this to show where the AI got its information from.",
    parameters: [
      {
        name: "sources",
        type: "object[]",
        description:
          "Array of source objects with title and link properties. Example: [{title: 'Documentation', link: 'https://example.com'}]",
        required: true,
        attributes: [
          {
            name: "title",
            type: "string",
            description: "The title or name of the source",
            required: true,
          },
          {
            name: "link",
            type: "string",
            description: "The URL link to the source",
            required: true,
          },
          {
            name: "icon",
            type: "string",
            description: "The icon name to display for the source",
            required: false,
          },
          {
            name: "targetBlank",
            type: "boolean",
            description: "Whether to open the link in a new tab",
            required: false,
            default: false,
          },
        ],
      },
    ],
    // render only when backend wants to attach sources
    available: "disabled",
    render: (props) => {
      return <MessageSources sources={props.args.sources || []} />
    },
  })

  const InputComponent = useCallback(
    ({ ...props }: InputProps) => (
      <div className="m-[16px] mt-2">
        <ChatTextarea {...props} />
      </div>
    ),
    []
  )

  if (!enabled) {
    return null
  }

  return (
    <CopilotSidebar
      className="h-full"
      defaultOpen={open}
      onSetOpen={(isOpen) => {
        setOpen(isOpen)
      }}
      Window={ChatWindow}
      Header={ChatHeader}
      Messages={MessagesContainer}
      Button={ChatButton}
      Input={InputComponent}
      UserMessage={UserMessage}
      AssistantMessage={AssistantMessage}
    />
  )
}

const AiFullscreenChatCmp = () => {
  const { enabled } = useAiChat()

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
    <div className="bg-white flex h-full w-full flex-col overflow-hidden">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        {/* Use grid to reorder layout */}
        <div className="grid h-full w-full grid-rows-[1fr_auto]">
          {/* Messages take remaining height */}
          <div className="overflow-y-auto">
            <CopilotChat
              Messages={MessagesContainerFullscreen}
              Input={ChatTextarea}
              UserMessage={UserMessage}
              AssistantMessage={AssistantMessage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AiChat = experimentalComponent("AiChat", AiChatCmp)

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AiFullscreenChat = experimentalComponent("AiChat", AiFullscreenChatCmp)

const AiChatProvider = experimentalComponent(
  "AiChatProvider",
  AiChatProviderCmp
)

export { AiChat, AiChatProvider, AiFullscreenChat }
