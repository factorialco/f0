import {
  CopilotKit,
  CopilotKitProps,
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { CopilotSidebar, InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { experimentalComponent } from "@/lib/experimental"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"

import { AssistantMessage } from "./components/AssistantMessage"
import { ChatHeader } from "./components/ChatHeader"
import { ChatTextarea } from "./components/ChatTextarea"
import { SidebarWindow } from "./components/ChatWindow"
import { MessagesContainer } from "./components/MessagesContainer"
import { UserMessage } from "./components/UserMessage"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import { useDefaultCopilotActions } from "./copilotActions"
import { F0AiFullscreenChatComponent } from "./F0AiFullscreenChat"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { AiChatProviderProps } from "./types"

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
  const { disclaimer, footer, visualizationMode } = useAiChat()
  const { messages } = useCopilotChatInternal()
  const containerRef = useRef<HTMLDivElement>(null)
  const isWelcomeScreen = messages.length === 0
  const fullscreen = visualizationMode === "fullscreen"
  const fullscreenWelcome = fullscreen && isWelcomeScreen

  useEffect(() => {
    const textarea = containerRef.current?.querySelector("textarea")
    textarea?.focus()
  }, [visualizationMode])

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center gap-2 px-4 pb-4 pt-2",
        fullscreenWelcome && "flex-1"
      )}
    >
      <div className="w-full max-w-[712px]">
        <ChatTextarea {...props} />
      </div>
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
      <AnimatePresence>
        {footer && isWelcomeScreen && (
          <motion.div
            key="chat-footer"
            className={cn(
              "w-full py-4 mx-auto max-w-[712px]",
              fullscreenWelcome && "mt-auto",
              fullscreen && "flex justify-center"
            )}
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {footer}
          </motion.div>
        )}
      </AnimatePresence>
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

export type { WelcomeScreenSuggestion }
