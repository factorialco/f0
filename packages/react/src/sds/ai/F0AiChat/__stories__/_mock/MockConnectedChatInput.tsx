import { useCallback, useMemo, useRef } from "react"

import { F0AiChatTextArea } from "../../../F0AiChatTextArea"
import { type F0AiChatTextAreaSubmitPayload } from "../../../F0AiChatTextArea/types"
import { filterNonRenderableMessages } from "../../internal-types"
import { useAiChat } from "../../providers/AiChatStateProvider"
import type {
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
} from "../../types"

import { useMockAiChatRuntime } from "./MockAiChatRuntime"

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
    clarifyingQuestion,
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
  } = useAiChat()
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const isWelcomeScreen = filteredMessages.length === 0
  const fullscreen = visualizationMode === "fullscreen"

  const handleSubmit = useCallback(
    ({ text }: F0AiChatTextAreaSubmitPayload) => {
      sendMessage(text)
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
      clarifyingQuestion={clarifyingQuestion}
      pendingContext={pendingContext}
      onPendingContextChange={setPendingContext}
      pendingQuote={pendingQuote}
      onPendingQuoteChange={setPendingQuote}
      fileAttachments={fileAttachments}
      searchPersons={entityRefs?.resolvers?.searchPersons}
      onProcessFilesRef={setProcessDroppedFilesFunction}
      disclaimer={disclaimer}
      footer={footer}
      isWelcomeScreen={isWelcomeScreen}
      fullscreen={fullscreen}
      welcomeScreenSuggestions={welcomeScreenSuggestions}
      onSuggestionClick={handleSuggestionClick}
    />
  )
}
