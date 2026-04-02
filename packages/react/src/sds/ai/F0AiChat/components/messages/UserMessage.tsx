import { Markdown, type UserMessageProps } from "@copilotkit/react-ui"
import { useEffect, useRef } from "react"

import { FileItem } from "@/experimental/RichText/FileItem"

import { markdownRenderers } from "../markdownRenderers"
import { useAiChat } from "../../providers/AiChatStateProvider"

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
    return content
      .filter((part): part is MessageTextPart => part.type === "text")
      .map((part) => part.text)
      .filter((part): part is string => typeof part === "string")
      .join("")
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

/**
 * Regex to strip the invisible tool-context prefix injected by the tool hint system.
 * Matches `<tool-context tool="...">...</tool-context>` followed by optional whitespace.
 */
const TOOL_CONTEXT_RE =
  /<tool-context\s+tool="[^"]*">[\s\S]*?<\/tool-context>\s*/g

export const UserMessage = ({ message }: UserMessageProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { visualizationMode } = useAiChat()
  const isFullscreen = visualizationMode === "fullscreen"

  useEffect(() => {
    if (!ref.current || isFullscreen) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [isFullscreen])

  const rawData = (message as { rawData?: RawDataWithUploads }).rawData
  const uploadedFiles = getUploadedFiles(
    message?.content as MessagePart[],
    rawData
  )
  const raw = getTextContent(message?.content as MessagePart[]) ?? ""
  const content = raw.replace(TOOL_CONTEXT_RE, "").trim()
  const hasVisibleText = content.trim().length > 0

  return (
    <div
      ref={ref}
      className="my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0"
    >
      {uploadedFiles.length > 0 && (
        <div className="flex max-w-[90%] flex-wrap justify-end gap-1.5">
          {uploadedFiles.map((file, index) => (
            <FileItem
              key={`${file.filename}-${index}`}
              file={{ name: file.filename, type: file.mimetype }}
              size="lg"
            />
          ))}
        </div>
      )}
      {hasVisibleText && (
        <div className="w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
          <Markdown content={content} components={markdownRenderers} />
        </div>
      )}
    </div>
  )
}
