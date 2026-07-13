import { motion } from "motion/react"
import { useCallback, useMemo, useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"

import { F0AiChatTextArea } from "../../../F0AiChatTextArea"
import { type F0AiChatTextAreaSubmitPayload } from "../../../F0AiChatTextArea/types"
import { F0ClarifyingPanel } from "../../../F0ClarifyingPanel"
import { useAiChat } from "../../providers/AiChatStateProvider"
import type {
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
} from "../../types"

import { useMockAiChatRuntime } from "./MockAiChatRuntime"
import { filterNonRenderableMessages } from "./turn-utils"

/**
 * Storybook-only Connected chat input. Bridges `F0AiChatTextArea` to the
 * mock runtime — extracts plain text from the submit payload and forwards
 * to `mock.sendMessage()`. Mirrors factorial's production wrapper.
 */
export const MockConnectedChatInput = () => {
  const {
    messages,
    inProgress,
    sendMessage,
    isLoadingThread,
    currentThreadTitle,
    clarifyingQuestion,
    composerHidden,
  } = useMockAiChatRuntime()
  const shouldReduceMotion = useReducedMotion()
  // Track whether the composer was ever hidden this session (guided flows only).
  // Used to scope the mount fade-in-up to those flows — other flows render the
  // composer exactly as before, no entrance change.
  const wasHiddenRef = useRef(false)
  if (composerHidden) wasHiddenRef.current = true
  const {
    placeholders,
    entityRefs,
    fileAttachments,
    onTranscribe,
    pendingContext,
    setPendingContext,
    pendingQuote,
    setPendingQuote,
    setProcessDroppedFilesFunction,
    disclaimer,
    footer,
    visualizationMode,
    creditWarning,
    welcomeScreenSuggestions,
    welcomeScreenCards,
    tracking,
    openGame,
  } = useAiChat()
  const containerRef = useRef<HTMLDivElement>(null)

  // Wire the pong easter egg to the disclaimer text.
  const disclaimerWithGame = useMemo(
    () =>
      disclaimer
        ? { ...disclaimer, onClick: () => openGame("pong") }
        : undefined,
    [disclaimer, openGame]
  )

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  // The welcome screen (suggestions + footer, centred textarea) is only for a
  // brand-new chat. When a thread is loading or already loaded from history,
  // render the started-conversation layout (textarea at the bottom, no
  // suggestions/footer) — including in fullscreen.
  const isWelcomeScreen =
    filteredMessages.length === 0 && !isLoadingThread && !currentThreadTitle
  const fullscreen = visualizationMode === "fullscreen"

  const handleSubmit = useCallback(
    ({ text, quote }: F0AiChatTextAreaSubmitPayload) => {
      sendMessage(text, { replyQuote: quote?.text })
    },
    [sendMessage]
  )

  const handleSuggestionClick = useCallback(
    (item: WelcomeScreenSuggestionItem, group: WelcomeScreenSuggestion) => {
      const prompt = item.prompt || item.title
      tracking?.onWelcomeSuggestionClick?.({ item, group, prompt })
      sendMessage(prompt)
    },
    [sendMessage, tracking]
  )

  // Guided flows keep the composer out of view during the scripted intro (the
  // "Let's create a Survey" + thinking beat), until the first clarifying panel
  // is ready. Rendering nothing here — rather than adding a "hidden" state to
  // F0AiChatTextArea — keeps the component's own layout/animation rules intact.
  if (composerHidden && !clarifyingQuestion) return null

  const textArea = (
    <F0AiChatTextArea
      ref={containerRef}
      onSubmit={handleSubmit}
      inProgress={inProgress}
      placeholders={placeholders}
      // The credit warning belongs to the composer, so suppress it while a
      // clarifying panel occupies the input slot — it would otherwise sit above
      // the guiding questions, which isn't the input it's warning about.
      creditWarning={clarifyingQuestion ? undefined : creditWarning}
      pendingContext={pendingContext}
      onPendingContextChange={setPendingContext}
      pendingQuote={pendingQuote}
      onPendingQuoteChange={setPendingQuote}
      fileAttachments={fileAttachments}
      onTranscribe={onTranscribe}
      searchPersons={entityRefs?.resolvers?.searchPersons}
      onProcessFilesRef={setProcessDroppedFilesFunction}
      disclaimer={disclaimerWithGame}
      footer={footer}
      isWelcomeScreen={isWelcomeScreen}
      fullscreen={fullscreen}
      welcomeScreenSuggestions={welcomeScreenSuggestions}
      onSuggestionClick={handleSuggestionClick}
      welcomeScreenCards={welcomeScreenCards}
      clarifyingUI={
        clarifyingQuestion ? (
          <F0ClarifyingPanel
            clarifyingQuestion={clarifyingQuestion}
            isSubmitDisabled={inProgress}
          />
        ) : undefined
      }
    />
  )

  // For guided flows, the input slot appears for the first time already holding
  // the clarifying panel (the composer was hidden through the intro), so
  // F0AiChatTextArea's own AnimatePresence — `initial={false}` — won't animate
  // that first mount. Add a subtle fade-in-up on the slot itself. Other flows
  // render `textArea` untouched, so their entrance is unchanged.
  if (!wasHiddenRef.current) return textArea

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {textArea}
    </motion.div>
  )
}
