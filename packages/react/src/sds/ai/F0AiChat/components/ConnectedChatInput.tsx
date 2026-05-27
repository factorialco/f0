import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { useCallback, useEffect, useMemo, useRef } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { F0AiChatTextArea } from "../../F0AiChatTextArea"
import {
  type F0AiChatTextAreaSubmitPayload,
  type UserBinaryPart,
  type UserTextPart,
} from "../../F0AiChatTextArea/types"

import { filterNonRenderableMessages } from "../internal-types"
import { useAiChat } from "../providers/AiChatStateProvider"
import type {
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
} from "../types"

/**
 * Internal wrapper that connects F0AiChatTextArea to the AiChat provider.
 * Sources placeholders, clarifying state, pending context/quote, file
 * attachments and search-persons from `useAiChat()`, and forwards
 * submission to CopilotKit via `sendMessage`/`onSend`.
 *
 * Layout (container, disclaimer, footer, clarifying nav-hint) is owned
 * by F0AiChatTextArea so the connected wrapper stays purely about wiring.
 *
 * Boundary: this Connected* wrapper is one of the only places inside f0
 * that calls CopilotKit hooks. Any new f0 component must receive its
 * data via props from a Connected* wrapper — never read `useCopilot*`
 * or `@copilotkit/*` types directly.
 */
export const ConnectedChatInput = (props: InputProps) => {
  const {
    placeholders,
    entityRefs,
    fileAttachments,
    sendMessage,
    appendMessages,
    clarifyingQuestion,
    pendingContext,
    setPendingContext,
    pendingQuote,
    setPendingQuote,
    setProcessDroppedFilesFunction,
    onBeforeSendMessage,
    disclaimer,
    footer,
    visualizationMode,
    isLoadingThread,
    creditWarning,
    welcomeScreenSuggestions,
    tracking,
  } = useAiChat()
  const translation = useI18n()
  const { messages } = useCopilotChatInternal()
  const containerRef = useRef<HTMLDivElement>(null)

  const { onSend, onStop, inProgress } = props

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const isWelcomeScreen = filteredMessages.length === 0 && !isLoadingThread
  const fullscreen = visualizationMode === "fullscreen"

  useEffect(() => {
    const textarea = containerRef.current?.querySelector("textarea")
    textarea?.focus()
  }, [visualizationMode])

  const handleSubmit = useCallback(
    ({ text, files, context }: F0AiChatTextAreaSubmitPayload) => {
      // With pending context or files, send as multipart so the agent sees
      // the context separately from the user's visible text.
      if (context || files.length > 0) {
        const contentParts: Array<UserTextPart | UserBinaryPart> = [
          ...(context
            ? [
                {
                  type: "text" as const,
                  text: `<pending-context>${context.context}</pending-context>`,
                },
              ]
            : []),
          ...files.map((file) => ({
            type: "binary" as const,
            url: file.url,
            filename: file.filename,
            mimeType: file.mimetype,
          })),
          { type: "text" as const, text },
        ]
        sendMessage({
          id: crypto.randomUUID(),
          role: "user",
          content: contentParts,
        })
      } else {
        onSend(text)
      }
    },
    [sendMessage, onSend]
  )

  const handleSuggestionClick = useCallback(
    (item: WelcomeScreenSuggestionItem, group: WelcomeScreenSuggestion) => {
      const prompt = item.prompt || item.title
      tracking?.onWelcomeSuggestionClick?.({ item, group, prompt })
      sendMessage({
        id: randomId(),
        role: "user",
        content: prompt,
      })
    },
    [sendMessage, tracking]
  )

  const handleStop = useCallback(() => {
    // Inject the stopped-indicator via appendMessages so the message list
    // gets JSON-sanitized before setMessages — setMessages directly fails
    // under CopilotKit 1.54 because live render wrappers aren't cloneable.
    appendMessages(
      [
        {
          role: "assistant",
          content: `*<!--response-stopped-->${translation.ai.responseStopped}*`,
        },
      ],
      { persist: false }
    )
    // Fire-and-forget so the indicator paints immediately even if the
    // agent's abortRun() resolves only after the stream drains.
    void onStop?.()
  }, [onStop, appendMessages, translation.ai.responseStopped])

  return (
    <F0AiChatTextArea
      ref={containerRef}
      onSubmit={handleSubmit}
      onStop={handleStop}
      inProgress={inProgress}
      onBeforeSubmit={onBeforeSendMessage}
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
