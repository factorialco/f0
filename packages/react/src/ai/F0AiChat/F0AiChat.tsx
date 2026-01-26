import {
  CopilotKit,
  CopilotKitProps,
  useCopilotChatInternal,
} from "@copilotkit/react-core"
import { CopilotSidebar, InputProps } from "@copilotkit/react-ui"
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

import { AssistantMessage } from "./components/AssistantMessage"
import { ChatHeader } from "./components/ChatHeader"
import { ChatTextarea } from "./components/ChatTextarea"
import { SidebarWindow as ChatWindow } from "./components/ChatWindow"
import { MessagesContainer } from "./components/MessagesContainer"
import { MessagesContainerFullscreen } from "./components/MessagesContainerFullscreen"
import { UserMessage } from "./components/UserMessage"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import { useDefaultCopilotActions } from "./copilotActions"
import { FullscreenChatContextType } from "./internal-types"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { F0AiChatProviderProps } from "./types"

// Context to share input state between Messages and Input components
export const FullscreenChatContext = createContext<FullscreenChatContextType>({
  inProgress: false,
  setInProgress: () => {},
})

const F0AiChatProviderComponent = ({
  enabled = false,
  greeting,
  initialMessage,
  welcomeScreenSuggestions,
  onThumbsUp,
  onThumbsDown,
  children,
  agent,
  ...copilotKitProps
}: F0AiChatProviderProps) => {
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

const F0AiChatComponent = () => {
  const { enabled, open, setOpen } = useAiChat()

  // Register all default copilot actions
  useDefaultCopilotActions()

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
      Button={() => {
        return null // hide CopilotKit's default chat button
      }}
      Input={InputComponent}
      UserMessage={UserMessage}
      AssistantMessage={AssistantMessage}
    />
  )
}

const F0AiFullscreenChatComponent = () => {
  const { enabled } = useAiChat()
  const [inProgress, setInProgress] = useState(false)
  const inputContainerRef = useRef<HTMLDivElement>(null)

  // Register all default copilot actions
  useDefaultCopilotActions()

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
    sendMessage(text)
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
export const F0AiChat = experimentalComponent("F0AiChat", F0AiChatComponent)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiFullscreenChat = experimentalComponent(
  "F0AiFullscreenChat",
  F0AiFullscreenChatComponent
)

export const F0AiChatProvider = experimentalComponent(
  "F0AiChatProvider",
  F0AiChatProviderComponent
)

// Re-export WelcomeScreenSuggestion type from components for backwards compatibility
export type { WelcomeScreenSuggestion }
