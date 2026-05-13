import { type AssistantMessageProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react"

import { useReplySelection } from "../useReplySelection"

import { ReplyPopover } from "./ReplyPopover"

/**
 * Context that provides the current tool call ID to action render
 * callbacks. CopilotKit v1.51+ does not pass toolCallId in the
 * render props, so we inject it from the message level.
 */
const ToolCallIdContext = createContext<string | undefined>(undefined)

/** Read the tool call ID injected by AssistantMessage. */
export const useToolCallId = () => useContext(ToolCallIdContext)

export type F0AssistantMessageExtraProps = {
  /**
   * Returns a React node for the message's tool call, or null when there is
   * nothing to render. The container's connected wrapper closes over the
   * full message list to call CopilotKit's lazy tool renderer; standalone
   * consumers can omit it.
   */
  renderToolCall?: (message: Message) => ReactNode | null
  /** Called when the user selects text in this message and clicks Reply. */
  onReplyQuote?: (text: string) => void
  /** Called once the assistant message has finished generating — for analytics. */
  onRendered?: (message: Message) => void
  /**
   * Renders the assistant text content. The connected wrapper provides a
   * markdown-aware implementation; standalone consumers can omit it and a
   * plain whitespace-preserving fallback is used instead.
   */
  renderMarkdown?: (content: string) => ReactNode
}

const defaultMarkdownFallback = (content: string): ReactNode => (
  <div className="whitespace-pre-wrap text-base text-f1-foreground">
    {content}
  </div>
)

export const AssistantMessage = ({
  isGenerating,
  isLoading,
  message,
  renderToolCall,
  onReplyQuote,
  onRendered,
  renderMarkdown,
}: Omit<AssistantMessageProps, "markdownTagRenderers"> &
  F0AssistantMessageExtraProps) => {
  const content = message?.content || ""

  // Each rendered message carries at most one tool call (turns are
  // expanded upstream), so toolCalls[0] is correct.
  const subComponent =
    (message && renderToolCall?.(message as Message)) ??
    message?.generativeUI?.() ??
    null

  // Extract toolCallId from the message so action components can read it
  const toolCallId = (message?.toolCalls as { id: string }[] | undefined)?.[0]
    ?.id

  const isEmptyMessage = !content && !subComponent

  const contentRef = useRef<HTMLDivElement>(null)
  const { anchor, clear } = useReplySelection({
    containerRef: contentRef,
    enabled: Boolean(message?.id && content),
  })

  useEffect(() => {
    if (message?.id && !isLoading && !isGenerating) {
      onRendered?.(message as Message)
    }
  }, [message, isLoading, isGenerating, onRendered])

  if (!isLoading && !isGenerating && isEmptyMessage) {
    return null
  }

  return (
    <ToolCallIdContext.Provider value={toolCallId}>
      <div className="relative isolate flex w-full flex-col items-start justify-center">
        {message && content && (
          <div
            ref={contentRef}
            className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1"
          >
            {(renderMarkdown ?? defaultMarkdownFallback)(content)}
          </div>
        )}
        {!!subComponent && <div className="w-full">{subComponent}</div>}
        <ReplyPopover
          anchor={anchor}
          onReply={(text) => {
            onReplyQuote?.(text)
            clear()
            window.getSelection()?.removeAllRanges()
          }}
        />
      </div>
    </ToolCallIdContext.Provider>
  )
}
