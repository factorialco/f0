import { Markdown, type UserMessageProps } from "@copilotkit/react-ui"
import { useEffect, useRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Download, Reply } from "@/icons/app"
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

function getTextContent(
  content: string | MessagePart[] | undefined
): string | undefined {
  if (typeof content === "string") return content
  if (Array.isArray(content)) {
    // When multiple text parts exist (e.g. pending context + user text),
    // only show the last one — earlier parts are invisible context for the agent.
    const textParts = content
      .filter((part): part is MessageTextPart => part.type === "text")
      .map((part) => part.text)
      .filter((part): part is string => typeof part === "string")
    return textParts[textParts.length - 1]
  }
  return undefined
}

/**
 * Regex to strip the invisible tool-context prefix injected by the tool hint system.
 * Matches `<tool-context tool="...">...</tool-context>` followed by optional whitespace.
 */
const TOOL_CONTEXT_RE =
  /<tool-context\s+tool="[^"]*">[\s\S]*?<\/tool-context>\s*/g

/** Strips <pending-context> tags (used when loading from history where the
 *  multipart structure was flattened into a single string). */
const PENDING_CONTEXT_RE = /<pending-context>[\s\S]*?<\/pending-context>\s*/g

/**
 * Regex matching the `<reply-quote>...</reply-quote>` prefix that the
 * composer prepends when the user replied to a selected fragment. The
 * quote is rendered ABOVE the bubble — not inside — so we extract it
 * before rendering the markdown content.
 */
const REPLY_QUOTE_RE = /^\s*<reply-quote>([\s\S]*?)<\/reply-quote>\s*/

/**
 * Decode the HTML-escaped quote body back to plain text. The composer
 * escapes the user's selection with `escapeHtml` and turns newlines into
 * `<br/>` so the payload is valid HTML — reverse that here.
 */
function decodeReplyQuote(raw: string): string {
  return raw
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
}

/**
 * Reply quote preview rendered above the user bubble. Renders the quoted
 * text as Markdown so selections keep formatting (bold, links, code,
 * lists…). The whole quote is shown — no height limit, no toggle.
 */
const ReplyQuoteBlock = ({ text }: { text: string }) => (
  <div className="flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary">
    <div className="flex h-5 items-center">
      <F0Icon icon={Reply} />
    </div>
    <div className="min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0">
      <Markdown content={text} components={markdownRenderers} />
    </div>
  </div>
)

export const UserMessage = ({ message }: UserMessageProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  const { visualizationMode, setPendingQuote } = useAiChat()
  const translation = useI18n()
  const isFullscreen = visualizationMode === "fullscreen"

  useEffect(() => {
    if (!ref.current || isFullscreen) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [isFullscreen])

  const rawData = (message as { rawData?: RawDataWithUploads }).rawData
  const uploadedFiles = extractUploadedFiles(
    message?.content as MessagePart[],
    rawData
  )
  const raw = getTextContent(message?.content as MessagePart[]) ?? ""

  // Extract the reply quote (if any) so we can render it as a separate
  // block above the bubble instead of inside the markdown content.
  const quoteMatch = raw.match(REPLY_QUOTE_RE)
  const quoteText = quoteMatch ? decodeReplyQuote(quoteMatch[1]) : null
  const rawWithoutQuote = quoteMatch ? raw.replace(REPLY_QUOTE_RE, "") : raw

  const content = rawWithoutQuote
    .replace(TOOL_CONTEXT_RE, "")
    .replace(PENDING_CONTEXT_RE, "")
    .trim()
  const hasVisibleText = content.trim().length > 0

  const { anchor, clear } = useReplySelection({
    containerRef: bubbleRef,
    enabled: hasVisibleText,
  })

  return (
    <div
      ref={ref}
      className="my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0"
    >
      {quoteText && <ReplyQuoteBlock text={quoteText} />}

      <MessageFiles
        files={uploadedFiles}
        align="end"
        actions={(file) => [
          {
            icon: Download,
            label: translation.ai.downloadFile,
            onClick: () => downloadUploadedFile(file),
          },
        ]}
      />

      {hasVisibleText && (
        <div
          ref={bubbleRef}
          className="w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1"
        >
          <Markdown content={content} components={markdownRenderers} />
        </div>
      )}
      <ReplyPopover
        anchor={anchor}
        onReply={(text) => {
          setPendingQuote({ text })
          clear()
          window.getSelection()?.removeAllRanges()
        }}
      />
    </div>
  )
}
