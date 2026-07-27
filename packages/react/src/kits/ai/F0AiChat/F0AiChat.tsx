import { AnimatePresence, motion } from "motion/react"
import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import Cross from "@/icons/app/Cross"
import { useReducedMotion } from "@/lib/a11y"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"

import { Skeleton } from "@/ui/skeleton"

import { SidebarWindow } from "./components/layout/ChatWindow"
import { useRevealOnChange } from "./hooks/useRevealOnChange"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { AiChatProviderProps, type WelcomeScreenSuggestion } from "./types"

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
  panelContentSide,
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
      panelContentSide={panelContentSide}
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
    open,
    setOpen,
    mode,
    visualizationMode,
    VoiceMode,
    tracking,
    chatHeader,
    chatMessages,
    chatInput,
    panelContent,
    panelSide,
    panelContentSide,
    restoringPanelContentId,
  } = useAiChat()
  const translations = useI18n()

  // When hosted content docks to the other edge, it renders in its own window
  // (ApplicationFrame's HostedPanelWindow) — this window then only ever shows
  // the chat/voice views and hides while the content is up.
  const splitPanel = panelContentSide !== panelSide

  // Mode-change reveal: only fullscreen transitions change the layout enough to
  // warrant a re-fade. Sidepanel + canvas are treated as one "docked" state, so
  // opening/closing the canvas beside the docked chat doesn't re-fade it;
  // fullscreen still reveals. Hold ≈ the chat window's resize animation (see
  // ApplicationFrame: ~0.15s entering, ~0.4s exiting).
  const revealValue: "docked" | "fullscreen" =
    visualizationMode === "fullscreen" ? "fullscreen" : "docked"
  const { motionProps: contentReveal } = useRevealOnChange(
    revealValue,
    (_prev, next) => (next === "fullscreen" ? 220 : 460)
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
  if (panelContent && !splitPanel) {
    viewKey = `panel:${panelContent.id}`
    viewContent = panelContent.content
  } else if (restoringPanelContentId && !splitPanel) {
    // The panel reopened with hosted content pending restoration — hold a
    // skeleton instead of flashing the AI chat while the host re-mounts it.
    viewKey = `restoring:${restoringPanelContentId}`
    viewContent = (
      <Skeleton
        role="status"
        aria-busy={true}
        className="h-full w-full rounded-none"
      />
    )
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
    // In split mode this window hides while hosted content is up on the other
    // edge. The swap is a reveal: the outgoing window holds still while the
    // main content covers it (exitStyle "hold" — `open` is still true), and a
    // real close (open false) keeps today's shrink exit.
    <SidebarWindow
      visible={
        splitPanel
          ? open && !panelContent && !restoringPanelContentId
          : undefined
      }
      exitStyle={splitPanel && open ? "hold" : "shrink"}
    >
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
