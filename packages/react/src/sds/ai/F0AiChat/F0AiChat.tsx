import { AnimatePresence, motion } from "motion/react"
import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import Cross from "@/icons/app/Cross"
import { useReducedMotion } from "@/lib/a11y"
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
}

const F0AiChatProviderComponent = ({
  enabled = false,
  side,
  initialMessage,
  chatHeader,
  chatMessages,
  chatInput,
  welcomeScreenSuggestions,
  welcomeScreenCards,
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
  revealChatOnCanvasToggle,
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
      side={side}
      onThumbsUp={onThumbsUp}
      onThumbsDown={onThumbsDown}
      agent={agent}
      initialMessage={initialMessage}
      chatHeader={chatHeader}
      chatMessages={chatMessages}
      chatInput={chatInput}
      welcomeScreenSuggestions={welcomeScreenSuggestions}
      welcomeScreenCards={welcomeScreenCards}
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
      revealChatOnCanvasToggle={revealChatOnCanvasToggle}
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
}: F0AiChatProps) => {
  const {
    enabled,
    setOpen,
    mode,
    visualizationMode,
    revealChatOnCanvasToggle,
    VoiceMode,
    tracking,
    chatHeader,
    chatMessages,
    chatInput,
    panelContent,
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
  const reducedMotion = useReducedMotion()

  // Props take precedence over provider-supplied slots. The provider slots
  // are how `ApplicationFrame` (which mounts `<F0AiChat />` itself) gets
  // a fully wired chat without f0 knowing about specific runtimes.
  const header = headerProp ?? chatHeader
  const messages = messagesProp ?? chatMessages
  const input = inputProp ?? chatInput

  if (!enabled) {
    return null
  }

  // Every view lives in the same SidebarWindow (the container never remounts).
  // Custom side-panel content takes precedence over the chat, then voice mode,
  // then the chat itself. The `viewKey` drives a crossfade so switching between
  // conversations — or between a conversation and the AI chat — fades the
  // content out and the next one in, while the window stays put.
  let viewKey: string
  let viewContent: ReactNode
  if (panelContent) {
    viewKey = `panel:${panelContent.id}`
    viewContent = panelContent.content
  } else if (mode === "voice" && VoiceMode) {
    viewKey = "voice"
    viewContent = (
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
    )
  } else {
    viewKey = "chat"
    viewContent = (
      <div className="flex h-full w-full flex-col">
        {header}
        <motion.div className="flex min-h-0 flex-1 flex-col" {...contentReveal}>
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {messages}
          </div>
          {input}
        </motion.div>
      </div>
    )
  }

  return (
    <SidebarWindow>
      {/* Simultaneous crossfade: the outgoing view fades out while the next
          fades in (both briefly mounted, stacked via `absolute inset-0` over the
          SidebarWindow's relative content box). Switching conversations starts
          the next view immediately instead of waiting for a sequential fade-out,
          which is what made switching feel slow. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={viewKey}
          className="absolute inset-0 flex flex-col overflow-hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.15, ease: "easeOut" }}
        >
          {viewContent}
        </motion.div>
      </AnimatePresence>
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
