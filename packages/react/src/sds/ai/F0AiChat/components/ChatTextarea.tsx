import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { useCallback, useRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { F0AiChatTextArea } from "@/sds/ai/F0AiChatTextArea"

import { useAiChat } from "../providers/AiChatStateProvider"

type ChatTextareaProps = InputProps & {
  submitLabel?: string
}

/**
 * ChatTextarea component that integrates with the F0AiChat context.
 * Uses F0AiChatTextArea internally and gets placeholders from context.
 *
 * For standalone usage without the F0AiChat context, use F0AiChatTextArea directly.
 */
export const ChatTextarea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
}: ChatTextareaProps) => {
  const { placeholders } = useAiChat()
  const { messages, setMessages } = useCopilotChatInternal()
  const translations = useI18n()
  const messagesRef = useRef(messages)
  messagesRef.current = messages

  const handleStop = useCallback(async () => {
    await onStop?.()
    // cursive message to indicate that the response was stopped
    setMessages([
      ...messagesRef.current,
      {
        id: randomId(),
        role: "assistant" as const,
        content: `*<!--response-stopped-->${translations.ai.responseStopped}*`,
      },
    ])
  }, [onStop, setMessages, translations.ai.responseStopped])

  return (
    <F0AiChatTextArea
      submitLabel={submitLabel}
      inProgress={inProgress}
      onSend={onSend}
      onStop={handleStop}
      placeholders={placeholders}
    />
  )
}
