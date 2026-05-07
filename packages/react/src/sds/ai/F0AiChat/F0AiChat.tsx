import { CopilotKit, CopilotKitProps } from "@copilotkit/react-core"
import { CopilotSidebar } from "@copilotkit/react-ui"

import { ButtonInternal } from "@/components/F0Button/internal"
import Cross from "@/icons/app/Cross"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"

import { useRegisteredActions } from "./actions"
import { ChatInput } from "./components/input/ChatInput"
import { ChatHeader } from "./components/layout/ChatHeader"
import { SidebarWindow } from "./components/layout/ChatWindow"
import { AssistantMessage } from "./components/messages/AssistantMessage"
import { MessagesContainer } from "./components/messages/MessagesContainer"
import { UserMessage } from "./components/messages/UserMessage"
import { WelcomeScreenSuggestion } from "./components/messages/WelcomeScreen"
import { CopilotFunctionBridge } from "./components/shared/CopilotFunctionBridge"
import { F0AiFullscreenChatComponent } from "./F0AiFullscreenChat"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { OrderedMessagePartsProvider } from "./providers/OrderedMessagePartsProvider"
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
  entityRefs,
  canvasActions,
  toolHints,
  credits,
  creditWarning,
  fileAttachments,
  onThumbsUp,
  onThumbsDown,
  onBeforeSendMessage,
  runtimeFetch,
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
      onBeforeSendMessage={onBeforeSendMessage}
      runtimeFetch={runtimeFetch}
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
      entityRefs={entityRefs}
      canvasActions={canvasActions}
      toolHints={toolHints}
      credits={credits}
      creditWarning={creditWarning}
      fileAttachments={fileAttachments}
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
      <OrderedMessagePartsProvider>
        <CopilotFunctionBridge />
        {children}
      </OrderedMessagePartsProvider>
    </CopilotKit>
  )
}

const F0AiChatComponent = () => {
  const { enabled, open, setOpen, mode, VoiceMode, tracking } = useAiChat()
  const translations = useI18n()

  useRegisteredActions()

  if (!enabled) {
    return null
  }

  if (mode === "voice" && VoiceMode) {
    return (
      <SidebarWindow clickOutsideToClose hitEscapeToClose shortcut="">
        <div className="flex h-full w-full flex-col">
          <div className="absolute right-3 top-3 z-20">
            <ButtonInternal
              variant="ghost"
              hideLabel
              label={translations.ai.closeChat}
              icon={Cross}
              onClick={() => {
                setOpen(false)
                tracking?.onClose?.()
              }}
            />
          </div>
          <VoiceMode />
        </div>
      </SidebarWindow>
    )
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
