import { CopilotKit, CopilotKitProps } from "@copilotkit/react-core"
import { CopilotSidebar } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"

import { useRegisteredActions } from "./actions"
import { ChatInput } from "./components/input/ChatInput"
import { ChatHeader } from "./components/layout/ChatHeader"
import { FloatingWindow, SidebarWindow } from "./components/layout/ChatWindow"
import { AssistantMessage } from "./components/messages/AssistantMessage"
import { MessagesContainer } from "./components/messages/MessagesContainer"
import { UserMessage } from "./components/messages/UserMessage"
import { WelcomeScreenSuggestion } from "./components/messages/WelcomeScreen"
import { CopilotFunctionBridge } from "./components/shared/CopilotFunctionBridge"
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
  historyEnabled,
  footer,
  VoiceMode,
  entityResolvers,
  toolHints,
  credits,
  onThumbsUp,
  onThumbsDown,
  children,
  agent,
  tracking,
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
      historyEnabled={historyEnabled}
      footer={footer}
      VoiceMode={VoiceMode}
      tracking={tracking}
      entityResolvers={entityResolvers}
      toolHints={toolHints}
      credits={credits}
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
      <CopilotFunctionBridge />
      {children}
    </CopilotKit>
  )
}

const F0AiChatComponent = () => {
  const { enabled, open, setOpen, mode, VoiceMode, visualizationMode } =
    useAiChat()

  useRegisteredActions()

  if (!enabled) {
    return null
  }

  if (mode === "voice" && VoiceMode) {
    return (
      <SidebarWindow clickOutsideToClose hitEscapeToClose shortcut="">
        <div className="flex h-full w-full flex-col">
          <VoiceMode />
        </div>
      </SidebarWindow>
    )
  }

  const WindowComponent =
    visualizationMode === "floating" ? FloatingWindow : SidebarWindow

  return (
    <CopilotSidebar
      className="h-full w-full"
      defaultOpen={open}
      onSetOpen={(isOpen) => {
        setOpen(isOpen)
      }}
      Window={WindowComponent}
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
