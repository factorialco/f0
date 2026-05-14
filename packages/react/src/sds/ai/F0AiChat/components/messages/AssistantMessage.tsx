import { useLazyToolRenderer } from "@copilotkit/react-core"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { createContext, useContext, useEffect, useRef } from "react"

import { Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { markdownRenderers } from "../markdownRenderers"
import { MessageFiles } from "./MessageFiles"
import {
  type MessagePart,
  type MessageTextPart,
  type RawDataWithUploads,
  downloadUploadedFile,
  extractUploadedFiles,
} from "./messageFiles"
import { ReplyPopover } from "./ReplyPopover"
import { useReplySelection } from "./useReplySelection"

/**
 * Reduce a possibly-multipart assistant content to the rendered text.
 * Assistant turns that ship files arrive as `{ type: "text" } | { type: "binary" }`
 * parts; we join the text parts so the markdown body stays intact while
 * files are rendered separately below.
 */
function getAssistantText(content: string | MessagePart[] | undefined): string {
  if (!content) return ""
  if (typeof content === "string") return content
  if (Array.isArray(content)) {
    return content
      .filter((part): part is MessageTextPart => part.type === "text")
      .map((part) => part.text ?? "")
      .join("")
  }
  return ""
}

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
  const rawContent = message?.content
  const content = getAssistantText(rawContent as string | MessagePart[])

  const rawData = (message as { rawData?: RawDataWithUploads } | undefined)
    ?.rawData
  const uploadedFiles = extractUploadedFiles(
    rawContent as string | MessagePart[] | undefined,
    rawData
  )

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

  const isEmptyMessage = !content && !subComponent && uploadedFiles.length === 0

  const { tracking, setPendingQuote } = useAiChat()
  const translation = useI18n()
  const contentRef = useRef<HTMLDivElement>(null)
  const { anchor, clear } = useReplySelection({
    containerRef: contentRef,
    enabled: Boolean(message?.id && content),
  })

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
      <div className="relative isolate flex w-full flex-col items-start justify-center gap-2">
        {message && content && (
          <div
            ref={contentRef}
            className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1"
          >
            <Markdown
              content={content}
              components={{ ...markdownRenderers, ...markdownTagRenderers }}
            />
          </div>
        )}
        <MessageFiles
          files={uploadedFiles}
          align="start"
          actions={(file) => [
            {
              icon: Download,
              label: translation.ai.downloadFile,
              onClick: () => downloadUploadedFile(file),
            },
          ]}
        />
        {!!subComponent && <div className="w-full">{subComponent}</div>}
        <ReplyPopover
          anchor={anchor}
          onReply={(text) => {
            setPendingQuote({ text })
            clear()
            window.getSelection()?.removeAllRanges()
          }}
        />
      </div>
    </ToolCallIdContext.Provider>
  )
}
