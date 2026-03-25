import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { type ToolCall } from "@copilotkit/shared"
import { useEffect } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { F0ActionItem } from "../../../F0ActionItem"
import { markdownRenderers } from "../markdownRenderers"
import { isCoagentStateRenderMessage } from "../../internal-types"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { getTextContent } from "../../utils/contentHelpers"

export const AssistantMessage = ({
  isGenerating,
  isLoading,
  markdownTagRenderers,
  message,
}: AssistantMessageProps) => {
  const content = getTextContent(message?.content)
  const hasVisibleContent = content.trim().length > 0
  const isPending = isLoading || isGenerating
  const isCoagentStateRender = !!message && isCoagentStateRenderMessage(message)
  const isThinkingTool =
    message?.role === "assistant" &&
    message.toolCalls?.find(
      (tool: ToolCall) => tool.function.name === "orchestratorThinking"
    )
  const subComponent =
    message?.generativeUI?.(
      isThinkingTool
        ? {
            status: isPending ? "executing" : "completed",
          }
        : undefined
    ) ?? null
  const shouldRenderSubComponent =
    !isThinkingTool || !hasVisibleContent || isPending
  const shouldRenderMarkdown = !(
    isThinkingTool &&
    hasVisibleContent &&
    isPending
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

  if (isCoagentStateRender) {
    return <F0ActionItem title={translations.ai.thinking} status="executing" />
  }

  return (
    <div className="relative isolate flex w-full flex-col items-start justify-center">
      {isLoading && !subComponent && !isThinkingTool && (
        <F0ActionItem title={translations.ai.thinking} status="executing" />
      )}
      {message && shouldRenderMarkdown && (
        <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
          <Markdown
            content={content}
            components={{ ...markdownRenderers, ...markdownTagRenderers }}
          />
        </div>
      )}
      {shouldRenderSubComponent && !!subComponent && (
        <div className="w-full">{subComponent}</div>
      )}
    </div>
  )
}
