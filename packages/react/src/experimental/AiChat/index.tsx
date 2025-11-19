import {
  CopilotKit,
  CopilotKitProps,
  useCopilotAction,
  useCopilotChatInternal,
} from "@copilotkit/react-core"
import { CopilotSidebar, InputProps } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"

import { cn } from "@/lib/utils"
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
  SuggestionsList,
  UserMessage,
} from "./components"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"

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
      <FileUploadInterceptor />
      {children}
    </CopilotKit>
  )
}

// Intercepts fetch requests to add file upload headers
const FileUploadInterceptor = () => {
  useEffect(() => {
    const originalFetch = window.fetch

    window.fetch = async (input, init) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const files = (window as any).__copilot_files__

      if (files && files.length > 0) {
        const headers = new Headers(init?.headers)
        headers.set("X-Copilot-Files", JSON.stringify(files))

        return originalFetch(input, {
          ...init,
          headers,
        })
      }

      return originalFetch(input, init)
    }

    return () => {
      window.fetch = originalFetch
    }
  }, [])

  return null
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
      <div className="m-3 mt-2">
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
      className={cn("h-full", open && "py-1 xs:pr-1")}
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
      RenderSuggestionsList={SuggestionsList}
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
