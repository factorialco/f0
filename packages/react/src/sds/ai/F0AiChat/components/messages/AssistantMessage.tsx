import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { useEffect } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { F0ActionItem } from "../../../F0ActionItem"
import { markdownRenderers } from "../markdownRenderers"
import { useAiChat } from "../../providers/AiChatStateProvider"

export const AssistantMessage = ({
  isGenerating,
  isLoading,
  markdownTagRenderers,
  message,
}: AssistantMessageProps) => {
  const content = message?.content || ""
  const isThinkingTool =
    message?.role === "assistant" &&
    message.toolCalls?.find(
      (tool) => tool.function.name === "orchestratorThinking"
    )
  const subComponent = message?.generativeUI?.(
    isThinkingTool
      ? {
          status: isLoading ? "executing" : "completed",
        }
      : undefined
  )
  const isEmptyMessage = !content && !subComponent

  const translations = useI18n()
  const { tracking } = useAiChat()

  useEffect(() => {
    if (message?.id && !isLoading && !isGenerating) {
      tracking?.onMessage?.(message)
    }
  }, [message, isLoading, isGenerating, tracking])

  if (!isLoading && !isGenerating && isEmptyMessage) {
    return null
  }

  return (
    <div className="relative isolate flex w-full flex-col items-start justify-center">
      {isLoading && !subComponent && (
        <F0ActionItem title={translations.ai.thinking} status="executing" />
      )}
      {message && (
        <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
          <Markdown
            content={content}
            components={{ ...markdownRenderers, ...markdownTagRenderers }}
          />
        </div>
      )}
      {!!subComponent && <div className="w-full">{subComponent}</div>}
    </div>
  )
}
