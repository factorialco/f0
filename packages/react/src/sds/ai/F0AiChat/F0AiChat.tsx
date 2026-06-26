import { motion } from "motion/react"
import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import Cross from "@/icons/app/Cross"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"

import { SidebarWindow } from "./components/layout/ChatWindow"
import { useRevealOnChange } from "./hooks/useRevealOnChange"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import {
  AiChatProviderProps,
  type VisualizationMode,
  type WelcomeScreenSuggestion,
} from "./types"

/**
 * Slot composition for the F0 AI chat shell. F0 ships the shell + UI
 * primitives; the consumer (factorial in production, the mock runtime
 * in stories) supplies the connected slot components that wire data
 * through whatever runtime they choose (CopilotKit, Mastra, mock, …).
 *
 * Slots are optional so the shell renders cleanly even when no runtime
 * is mounted (the chat just stays empty).
 */
export interface F0AiChatProps {
  /** Header slot rendered at the top of the chat window. */
  header?: ReactNode
  /** Messages slot rendered inside the scrollable area. */
  messages?: ReactNode
  /** Input slot rendered at the bottom (textarea + suggestions + disclaimer). */
  input?: ReactNode
  /**
   * When false, the chat content does NOT re-fade when the canvas opens/closes
   * with the chat docked on the side: `sidepanel` and `canvas` are treated as
   * one state for the mode-change reveal, so toggling the canvas is seamless.
   * Fullscreen transitions still reveal. Defaults to true.
   */
  revealChatOnCanvasToggle?: boolean
}

const F0AiChatProviderComponent = ({
  enabled = false,
  initialMessage,
  chatHeader,
  chatMessages,
  chatInput,
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
  canvasEntities,
  credits,
  employeeCredits,
  creditWarning,
  fileAttachments,
  onTranscribe,
  onThumbsUp,
  onThumbsDown,
  children,
  agent,
  tracking,
}: AiChatProviderProps) => {
  return (
    <AiChatStateProvider
      enabled={enabled}
      onThumbsUp={onThumbsUp}
      onThumbsDown={onThumbsDown}
      agent={agent}
      initialMessage={initialMessage}
      chatHeader={chatHeader}
      chatMessages={chatMessages}
      chatInput={chatInput}
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
      canvasEntities={canvasEntities}
      credits={credits}
      employeeCredits={employeeCredits}
      creditWarning={creditWarning}
      fileAttachments={fileAttachments}
      onTranscribe={onTranscribe}
    >
      {children}
    </AiChatStateProvider>
  )
}

const F0AiChatComponent = ({
  header: headerProp,
  messages: messagesProp,
  input: inputProp,
  revealChatOnCanvasToggle = true,
}: F0AiChatProps) => {
  const {
    enabled,
    setOpen,
    mode,
    visualizationMode,
    VoiceMode,
    tracking,
    chatHeader,
    chatMessages,
    chatInput,
  } = useAiChat()
  const translations = useI18n()

  // Mode-change reveal: switching between sidepanel / fullscreen / canvas
  // changes the whole content layout. Rather than animating each element into
  // place (busy), hide the content the instant the mode flips and reveal it
  // already settled with a soft fade. Hold ≈ the chat window's resize
  // animation (see ApplicationFrame: ~0.15s entering, ~0.4s exiting).
  // When the host opts out (`revealChatOnCanvasToggle={false}`), collapse
  // sidepanel + canvas into a single "docked" reveal state so opening/closing
  // the canvas with the chat on the side isn't seen as a mode change and the
  // chat content doesn't re-fade. Fullscreen transitions stay distinct and still
  // reveal (their layout change is substantial).
  const revealValue: VisualizationMode | "docked" =
    !revealChatOnCanvasToggle && visualizationMode !== "fullscreen"
      ? "docked"
      : visualizationMode
  const { motionProps: contentReveal } = useRevealOnChange(
    revealValue,
    (prev, next) =>
      next === "fullscreen" ? 220 : prev === "fullscreen" ? 460 : 260
  )

  // Props take precedence over provider-supplied slots. The provider slots
  // are how `ApplicationFrame` (which mounts `<F0AiChat />` itself) gets
  // a fully wired chat without f0 knowing about specific runtimes.
  const header = headerProp ?? chatHeader
  const messages = messagesProp ?? chatMessages
  const input = inputProp ?? chatInput

  if (!enabled) {
    return null
  }

  if (mode === "voice" && VoiceMode) {
    return (
      <SidebarWindow>
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
    <SidebarWindow>
      <div className="flex h-full w-full flex-col">
        {header}
        <motion.div className="flex min-h-0 flex-1 flex-col" {...contentReveal}>
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {messages}
          </div>
          {input}
        </motion.div>
      </div>
    </SidebarWindow>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiChat = experimentalComponent("F0AiChat", F0AiChatComponent)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiChatProvider = experimentalComponent(
  "F0AiChatProvider",
  F0AiChatProviderComponent
)

export type { WelcomeScreenSuggestion }
