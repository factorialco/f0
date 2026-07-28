import { type ReactNode, useEffect, useRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { F0FileItem } from "@/components/F0FileItem"
import { F0RichTextDisplay } from "@/components/RichText/F0RichTextDisplay"
import { Reply } from "@/icons/app"

import { type Message } from "../types"
import { useReplySelection } from "../useReplySelection"

import { ReplyPopover } from "./ReplyPopover"

type UploadedFile = {
  url: string
  filename: string
  mimetype: string
}

type RawDataWithUploads = {
  uploadedFiles?: UploadedFile[]
}

type MessageTextPart = { type: "text"; text?: string }
type MessageBinaryPart = {
  type: "binary"
  url?: string
  filename?: string
  mimeType?: string
}
type MessagePart = MessageTextPart | MessageBinaryPart

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

function getUploadedFiles(
  content: string | MessagePart[] | undefined,
  rawData: RawDataWithUploads | undefined
): UploadedFile[] {
  const uploadedFilesFromParts = Array.isArray(content)
    ? content
        .filter((part): part is MessageBinaryPart => part.type === "binary")
        .map((part) => ({
          url: part.url,
          filename: part.filename,
          mimetype: part.mimeType,
        }))
        .filter(
          (file): file is UploadedFile =>
            typeof file?.filename === "string" &&
            typeof file?.mimetype === "string" &&
            typeof file?.url === "string"
        )
    : []

  if (uploadedFilesFromParts.length > 0) {
    return uploadedFilesFromParts
  }

  return (rawData?.uploadedFiles ?? []).filter(
    (file): file is UploadedFile =>
      typeof file?.filename === "string" &&
      typeof file?.mimetype === "string" &&
      typeof file?.url === "string"
  )
}

const defaultMarkdownFallback = (content: string): ReactNode => (
  <F0RichTextDisplay content={content} format="markdown" />
)

/**
 * Reply quote preview rendered above the user bubble. Renders the quoted
 * text as Markdown so selections keep formatting (bold, links, code,
 * lists…). The whole quote is shown — no height limit, no toggle.
 */
const ReplyQuoteBlock = ({
  text,
  renderMarkdown,
}: {
  text: string
  renderMarkdown?: (content: string) => ReactNode
}) => (
  <div className="flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary">
    <div className="flex h-5 items-center">
      <F0Icon icon={Reply} />
    </div>
    <div className="min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0">
      {(renderMarkdown ?? defaultMarkdownFallback)(text)}
    </div>
  </div>
)

export type F0UserMessageExtraProps = {
  /** Called when the user selects text in this message and clicks Reply. */
  onReplyQuote?: (text: string) => void
  /**
   * When true (default), the bubble auto-scrolls itself into view on mount.
   * Set to false in fullscreen layouts where the viewport handles scrolling.
   */
  autoScrollIntoView?: boolean
  /**
   * Renders the user text content. The connected wrapper provides a
   * markdown-aware implementation; standalone consumers can omit it and a
   * plain whitespace-preserving fallback is used instead.
   */
  renderMarkdown?: (content: string) => ReactNode
}

type UserMessageBaseProps = {
  /** The user message to render. */
  message?: Message
}

export const UserMessage = ({
  message,
  onReplyQuote,
  autoScrollIntoView = true,
  renderMarkdown,
}: UserMessageBaseProps & F0UserMessageExtraProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || !autoScrollIntoView) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [autoScrollIntoView])

  const rawData = (message as { rawData?: RawDataWithUploads }).rawData
  const uploadedFiles = getUploadedFiles(
    message?.content as MessagePart[],
    rawData
  )
  const content = (
    getTextContent(message?.content as MessagePart[]) ?? ""
  ).trim()
  const quoteText = message?.replyQuote ?? null
  const hasVisibleText = content.length > 0

  const { anchor, clear } = useReplySelection({
    containerRef: bubbleRef,
    enabled: hasVisibleText,
  })

  return (
    <div
      ref={ref}
      className="my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0"
    >
      {quoteText && (
        <ReplyQuoteBlock text={quoteText} renderMarkdown={renderMarkdown} />
      )}

      {uploadedFiles.length > 0 && (
        <div className="flex max-w-[90%] flex-wrap justify-end gap-1.5">
          {uploadedFiles.map((file, index) => (
            <F0FileItem
              key={`${file.filename}-${index}`}
              file={{ name: file.filename, type: file.mimetype }}
              size="lg"
            />
          ))}
        </div>
      )}
      {hasVisibleText && (
        <div
          ref={bubbleRef}
          className="w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1"
        >
          {(renderMarkdown ?? defaultMarkdownFallback)(content)}
        </div>
      )}
      <ReplyPopover
        anchor={anchor}
        onReply={(text) => {
          onReplyQuote?.(text)
          clear()
          window.getSelection()?.removeAllRanges()
        }}
      />
    </div>
  )
}
