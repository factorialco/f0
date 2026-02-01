import { type InputProps } from "@copilotkit/react-ui"

import { F0AiChatTextArea } from "@/ai/F0AiChatTextArea"

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

  return (
    <F0AiChatTextArea
      submitLabel={submitLabel}
      inProgress={inProgress}
      onSend={onSend}
      onStop={onStop}
      placeholders={placeholders}
    />
  )
}
