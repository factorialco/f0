import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useCallback, useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { filterNonRenderableMessages } from "./internal-types"

import { F0AiChatTextArea } from "../F0AiChatTextArea"
import {
  type F0AiChatTextAreaSubmitPayload,
  type UserBinaryPart,
  type UserTextPart,
} from "../F0AiChatTextArea/types"

import { ConnectedMessagesContainer } from "./components/ConnectedMessagesContainer"
import { CanvasPanel } from "./components/layout/CanvasPanel"
import { useAiChat } from "./providers/AiChatStateProvider"

const FullscreenChatInput = () => {
  const {
    sendMessage,
    appendMessages,
    inProgress,
    creditWarning,
    placeholders,
    entityRefs,
    fileAttachments,
    clarifyingQuestion,
    pendingContext,
    setPendingContext,
    pendingQuote,
    setPendingQuote,
    setProcessDroppedFilesFunction,
    onBeforeSendMessage,
    disclaimer,
    footer,
    isLoadingThread,
  } = useAiChat()
  const { stopGeneration, messages } = useCopilotChatInternal()
  const translation = useI18n()
  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const isWelcomeScreen = filteredMessages.length === 0 && !isLoadingThread

  const handleSubmit = useCallback(
    ({ text, files, context }: F0AiChatTextAreaSubmitPayload) => {
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
        sendMessage(text)
      }
    },
    [sendMessage]
  )

  const handleStop = useCallback(() => {
    appendMessages(
      [
        {
          role: "assistant",
          content: `*<!--response-stopped-->${translation.ai.responseStopped}*`,
        },
      ],
      { persist: false }
    )
    stopGeneration()
  }, [appendMessages, stopGeneration, translation.ai.responseStopped])

  return (
    <F0AiChatTextArea
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
      fullscreen
    />
  )
}

export const F0AiFullscreenChatComponent = () => {
  const { enabled, canvasContent, visualizationMode } = useAiChat()

  const isCanvasMode = visualizationMode === "canvas"

  if (!enabled) {
    return null
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden overscroll-none",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "[&_*]:[-webkit-tap-highlight-color:transparent]"
      )}
    >
      <style>{`
        html, body {
          overflow: hidden !important;
          height: 100% !important;
          width: 100% !important;
          margin: 0;
          padding: 0;
        }
        #root {
          height: 100% !important;
          width: 100% !important;
          overflow: hidden !important;
          display: flex;
          flex-direction: column;
        }
      `}</style>

      {isCanvasMode && canvasContent && (
        <div className={cn("pointer-events-none overflow-y-scroll")}>
          <CanvasPanel />
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <ConnectedMessagesContainer noShadows />
      </div>

      <div
        className={cn(
          "z-10 flex w-full shrink-0 flex-col touch-none border-t border-f1-border bg-f1-background",
          "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"
        )}
      >
        <FullscreenChatInput />
      </div>
    </div>
  )
}
