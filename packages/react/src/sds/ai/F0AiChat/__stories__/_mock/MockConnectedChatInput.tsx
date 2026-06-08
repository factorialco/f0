import { useCallback, useMemo, useRef } from "react"

import { F0AiChatTextArea } from "../../../F0AiChatTextArea"
import { type F0AiChatTextAreaSubmitPayload } from "../../../F0AiChatTextArea/types"
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
  const { messages, inProgress, sendMessage } = useMockAiChatRuntime()
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
  const isWelcomeScreen = filteredMessages.length === 0
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

  return (
    <F0AiChatTextArea
      ref={containerRef}
      onSubmit={handleSubmit}
      inProgress={inProgress}
      placeholders={placeholders}
      creditWarning={creditWarning}
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
    />
  )
}
