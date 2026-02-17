import {
  CopilotKit,
  CopilotKitProps,
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { CopilotSidebar, InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, createContext, useContext, useState, useRef } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { experimentalComponent } from "@/lib/experimental"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"

import { AssistantMessage } from "./components/AssistantMessage"
import { ChatHeader } from "./components/ChatHeader"
import { ChatTextarea } from "./components/ChatTextarea"
import { SidebarWindow } from "./components/ChatWindow"
import { MessagesContainer } from "./components/MessagesContainer"
import { MessagesContainerFullscreen } from "./components/MessagesContainerFullscreen"
import { UserMessage } from "./components/UserMessage"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import { useDefaultCopilotActions } from "./copilotActions"
import { FullscreenChatContextType } from "./internal-types"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { AiChatProviderProps } from "./types"

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
  disclaimer,
  resizable = false,
  defaultVisualizationMode,
  lockVisualizationMode,
  footer,
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
      disclaimer={disclaimer}
      resizable={resizable}
      defaultVisualizationMode={defaultVisualizationMode}
      lockVisualizationMode={lockVisualizationMode}
      footer={footer}
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
  const { setThreadId } = useCopilotContext()

  useEffect(() => {
    const resetWithNewThread = () => {
      reset()
      setThreadId(randomId())
    }
    setClearFunction(resetWithNewThread)
    return () => {
      setClearFunction(null)
    }
  }, [setClearFunction, reset, setThreadId])

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

const ChatInput = (props: InputProps) => {
  const { disclaimer, footer } = useAiChat()
  const { messages } = useCopilotChatInternal()
  const isWelcomeScreen = messages.length === 0

  return (
    <div className="flex flex-col items-center gap-2 px-4 pb-4 pt-2">
      <div className="w-full max-w-[712px]">
        <ChatTextarea {...props} />
      </div>

      <AnimatePresence>
        {footer && isWelcomeScreen && (
          <motion.div
            key="chat-footer"
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full py-4 mx-auto max-w-[712px]"
          >
            {footer}
          </motion.div>
        )}
      </AnimatePresence>

      {disclaimer?.text && (
        <div className="flex flex-row items-center gap-1 w-full justify-center max-w-[712px]">
          <OneEllipsis className="text-sm font-medium text-f1-foreground-tertiary">
            {disclaimer.text}
          </OneEllipsis>

          {disclaimer.link && disclaimer.linkText && (
            <Link
              href={disclaimer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary"
            >
              {disclaimer.linkText}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

const F0AiChatComponent = () => {
  const { enabled, open, setOpen } = useAiChat()

  // Register all default copilot actions
  useDefaultCopilotActions()

  if (!enabled) {
    return null
  }

  return (
    <CopilotSidebar
      className="h-full w-full"
      defaultOpen={open}
      onSetOpen={(isOpen) => {
        setOpen(isOpen)
      }}
      Window={SidebarWindow}
      Header={ChatHeader}
      Messages={MessagesContainer}
      Button={() => {
        return null // hide CopilotKit's default chat button
      }}
      Input={ChatInput}
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiChatProvider = experimentalComponent(
  "F0AiChatProvider",
  F0AiChatProviderComponent
)

// Re-export WelcomeScreenSuggestion type from components for backwards compatibility
export type { WelcomeScreenSuggestion }
