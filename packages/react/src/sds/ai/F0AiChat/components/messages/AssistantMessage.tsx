import { useLazyToolRenderer } from "@copilotkit/react-core"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { createContext, useContext, useEffect } from "react"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { markdownRenderers } from "../markdownRenderers"

/**
 * Context that provides the current tool call ID to action render
 * callbacks.  CopilotKit v1.51+ does not pass toolCallId in the
 * render props, so we inject it from the message level.
 */
const ToolCallIdContext = createContext<string | undefined>(undefined)

/** Read the tool call ID injected by AssistantMessage. */
export const useToolCallId = () => useContext(ToolCallIdContext)

export const AssistantMessage = ({
  isGenerating,
  isLoading,
  markdownTagRenderers,
  message,
  messages,
}: AssistantMessageProps & { messages?: any[] }) => {
  const content = message?.content || ""

  // Use CopilotKit's lazy tool renderer to look up registered render
  // functions from copilotkit.renderToolCalls.  This handles actions
  // registered with `available: "frontend"` (orchestratorThinking,
  // downloadData, displayDashboard, etc.) whose render callbacks are
  // NOT stored in context.actions but in the internal renderToolCalls
  // registry.
  //
  // After message expansion in MessagesContainer, each message has at
  // most one tool call, so toolCalls[0] is correct.
  const lazyToolRendered = useLazyToolRenderer()
  const toolCallRenderer = message
    ? lazyToolRendered(message, messages ?? [])
    : null
  const subComponent = toolCallRenderer?.() ?? message?.generativeUI?.() ?? null

  // Extract toolCallId from the message so action components can read it
  const toolCallId = (message?.toolCalls as { id: string }[] | undefined)?.[0]
    ?.id

  const isEmptyMessage = !content && !subComponent

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
    <ToolCallIdContext.Provider value={toolCallId}>
      <div className="relative isolate flex w-full flex-col items-start justify-center">
        {message && content && (
          <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
            <Markdown
              content={content}
              components={{ ...markdownRenderers, ...markdownTagRenderers }}
            />
          </div>
        )}
        {!!subComponent && <div className="w-full">{subComponent}</div>}
      </div>
    </ToolCallIdContext.Provider>
  )
}
