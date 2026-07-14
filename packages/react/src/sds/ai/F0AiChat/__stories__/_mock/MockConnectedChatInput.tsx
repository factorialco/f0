import { useCallback, useMemo, useRef } from "react"

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

  // The guided flows keep `composerHidden` true from the intro through their
  // FIRST clarifying panel (it's cleared when the user answers), so this slot's
  // first visible content is that panel on a fresh mount — F0's own
  // composer→clarifying transition never ran (its `AnimatePresence` is
  // `initial={false}`), and it would pop in. Give that first appearance its own
  // fade-in-and-up entrance. Once the composer has taken over (composerHidden
  // false), later clarifying panels use F0's built-in transition, so the
  // entrance isn't doubled up. Driven by tailwindcss-animate (CSS keyframes)
  // rather than framer, so it also plays where framer's global `skipAnimations`
  // is set (the automation/Chromatic preview); respects reduced motion.
  const clarifyingPanel = clarifyingQuestion ? (
    <F0ClarifyingPanel
      clarifyingQuestion={clarifyingQuestion}
      isSubmitDisabled={inProgress}
    />
  ) : undefined

  const clarifyingUI =
    clarifyingPanel && composerHidden ? (
      <div className="duration-500 ease-out animate-in fade-in slide-in-from-bottom-4 motion-reduce:animate-none">
        {clarifyingPanel}
      </div>
    ) : (
      clarifyingPanel
    )

  return (
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
      clarifyingUI={clarifyingUI}
    />
  )
}
