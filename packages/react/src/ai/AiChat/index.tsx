import {
  CopilotKit,
  CopilotKitProps,
  useCopilotAction,
  useCopilotChatInternal,
} from "@copilotkit/react-core"
import { CopilotSidebar, InputProps } from "@copilotkit/react-ui"
import { type AIMessage } from "@copilotkit/shared"
import {
  useCallback,
  useEffect,
  createContext,
  useContext,
  useState,
  useRef,
} from "react"

import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

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
import { MessagesContainerFullscreen } from "./components/MessagesContainerFullscreen"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import {
  AiChatStateProvider,
  useAiChat,
  type FileValidationConfig,
  type RejectedFile,
} from "./providers/AiChatStateProvider"

// Context to share input state between Messages and Input components
export const FullscreenChatContext = createContext<{
  inProgress: boolean
  setInProgress: (value: boolean) => void
}>({
  inProgress: false,
  setInProgress: () => {},
})

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
  /**
   * Configuration for file validation. When provided, enables file uploads in the chat.
   */
  fileValidation?: FileValidationConfig
  /**
   * Callback when files are rejected during attachment validation
   */
  onFilesRejected?: (rejectedFiles: RejectedFile[]) => void
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
  fileValidation,
  onFilesRejected,
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
      fileValidation={fileValidation}
      onFilesRejected={onFilesRejected}
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
      <div className="m-[16px] mt-0">
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
  const [inProgress, setInProgress] = useState(false)
  const inputContainerRef = useRef<HTMLDivElement>(null)

  // Prevent whole-page scroll when dragging from the input area (iOS bounce fix)
  useEffect(() => {
    const el = inputContainerRef.current
    if (!el) return

    const handleTouchMove = (e: TouchEvent) => {
      // If the touch starts in the input container, we don't want it to scroll the page
      if (e.cancelable) {
        e.preventDefault()
      }
    }

    el.addEventListener("touchmove", handleTouchMove, { passive: false })
    return () => {
      el.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  // Inject global styles to prevent body scroll
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      html, body {
        overflow: hidden !important;
        height: 100% !important;
        width: 100% !important;
        margin: 0;
        padding: 0;
      }
      #root {
        height: 100% !important;
        width: 100% !important;
        overflow: hidden !important;
        display: flex;
        flex-direction: column;
      }
      /* Hide scrollbars */
      ::-webkit-scrollbar {
        display: none !important;
      }
      * {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
        -webkit-tap-highlight-color: transparent;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

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
    <FullscreenChatContext.Provider value={{ inProgress, setInProgress }}>
      <div
        className="bg-white"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          overscrollBehavior: "none",
        }}
      >
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <MessagesContainerFullscreen />
        </div>

        {/* Input section rendered outside the messages container to stay at the bottom */}
        <div
          ref={inputContainerRef}
          className={cn(
            "flex-shrink-0 w-full bg-white border-t border-f1-border transition-all",
            "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"
          )}
          style={{
            flexShrink: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
            touchAction: "none",
          }}
        >
          <FullscreenChatInput />
        </div>
      </div>
    </FullscreenChatContext.Provider>
  )
}

const FullscreenChatInput = () => {
  const { sendMessage } = useAiChat()
  const { interrupt } = useCopilotChatInternal()
  const { inProgress } = useContext(FullscreenChatContext)

  const handleSend = async (text: string) => {
    await sendMessage(text)
    return {
      id: "",
      role: "user" as const,
      content: text,
    }
  }

  const handleStop = () => {
    if (interrupt && typeof interrupt !== "string") {
      const stopButton = document.querySelector(
        '[aria-label*="Stop"]'
      ) as HTMLButtonElement
      if (stopButton) {
        stopButton.click()
      }
    }
  }

  return (
    <div className="w-full px-4 py-2">
      <ChatTextarea
        inProgress={inProgress}
        onSend={handleSend}
        onStop={handleStop}
      />
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
const AiFullscreenChat = experimentalComponent(
  "AiFullscreenChat",
  AiFullscreenChatCmp
)

const AiChatProvider = experimentalComponent(
  "AiChatProvider",
  AiChatProviderCmp
)

export { AiChat, AiChatProvider, AiFullscreenChat }
