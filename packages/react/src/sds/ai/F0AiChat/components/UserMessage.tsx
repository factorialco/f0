import { type UserMessageProps } from "@copilotkit/react-ui"
import { type ReactNode, useContext, useEffect, useRef } from "react"

import { FileItem } from "@/experimental/RichText/FileItem"

import { PersonEntityRef } from "../../F0MarkdownRenderers/components/PersonEntityRef"
import { FullscreenChatContext } from "../index"
import type { UploadedFile } from "../types"

function getTextContent(
  content: string | Array<{ type: string; text?: string }> | undefined
): string | undefined {
  if (typeof content === "string") return content
  if (Array.isArray(content)) {
    return content
      .filter((part) => part.type === "text" && part.text)
      .map((part) => part.text)
      .join("")
  }
  return undefined
}

/**
 * Regex to match <entity-ref type="person" id="X">Name</entity-ref>
 * Captures: [1] id, [2] display name
 */
const ENTITY_REF_RE =
  /<entity-ref\s+type="person"\s+id="([^"]+)">(.*?)<\/entity-ref>/g

/**
 * Regex to strip the invisible tool-context prefix injected by the tool hint system.
 * Matches `<tool-context tool="...">...</tool-context>` followed by optional whitespace.
 */
const TOOL_CONTEXT_RE =
  /<tool-context\s+tool="[^"]*">[\s\S]*?<\/tool-context>\s*/g

/**
 * Regex to match <file-attachments>JSON</file-attachments> prefix.
 */
const FILE_ATTACHMENTS_RE =
  /<file-attachments>([\s\S]*?)<\/file-attachments>\s*/g

function parseFileAttachments(content: string): UploadedFile[] {
  FILE_ATTACHMENTS_RE.lastIndex = 0
  const match = FILE_ATTACHMENTS_RE.exec(content)
  if (!match) return []
  try {
    return JSON.parse(match[1])
  } catch {
    return []
  }
}

type ContentSegment =
  | { kind: "text"; text: string }
  | { kind: "person-ref"; id: string; name: string }

/**
 * Parse a content string into segments of plain text and entity references.
 * If no entity-refs are found, returns null (caller should render as plain text).
 */
function parseEntityRefs(content: string): ContentSegment[] | null {
  const segments: ContentSegment[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  // Reset regex state
  ENTITY_REF_RE.lastIndex = 0

  while ((match = ENTITY_REF_RE.exec(content)) !== null) {
    // Text before this match
    if (match.index > lastIndex) {
      segments.push({
        kind: "text",
        text: content.slice(lastIndex, match.index),
      })
    }

    segments.push({
      kind: "person-ref",
      id: match[1],
      name: match[2],
    })

    lastIndex = match.index + match[0].length
  }

  if (segments.length === 0) return null

  // Remaining text after last match
  if (lastIndex < content.length) {
    segments.push({ kind: "text", text: content.slice(lastIndex) })
  }

  return segments
}

/**
 * Renders user message content, replacing inline entity-ref tags
 * with interactive PersonEntityRef hover cards.
 */
function UserMessageContent({
  content,
}: {
  content: string | undefined
}): ReactNode {
  if (!content) return null

  // Strip invisible prefixes before rendering
  const cleaned = content
    .replace(FILE_ATTACHMENTS_RE, "")
    .replace(TOOL_CONTEXT_RE, "")

  const segments = parseEntityRefs(cleaned)

  if (!segments) {
    return <>{cleaned}</>
  }

  return (
    <>
      {segments.map((segment, i) => {
        if (segment.kind === "text") {
          return <span key={i}>{segment.text}</span>
        }
        return <PersonEntityRef key={i} id={segment.id} label={segment.name} />
      })}
    </>
  )
}

export const UserMessage = ({ message, ImageRenderer }: UserMessageProps) => {
  const isImageMessage = message && "image" in message && message.image
  const ref = useRef<HTMLDivElement>(null)

  // Get context to check if we are in fullscreen
  const fullscreenContext = useContext(FullscreenChatContext)
  const isFullscreen = !!fullscreenContext?.setInProgress

  useEffect(() => {
    if (!ref.current || isFullscreen) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [isFullscreen])

  // Image message
  if (isImageMessage) {
    const imageMessage = message

    return (
      <div className="copilotKitMessage copilotKitUserMessage">
        <ImageRenderer
          image={imageMessage.image!}
          content={imageMessage.content}
        />
      </div>
    )
  }

  const rawContent = getTextContent(message?.content)
  const fileAttachments = rawContent ? parseFileAttachments(rawContent) : []

  return (
    <div
      ref={ref}
      className="gap-1 my-4 w-fit max-w-[min(90%,330px)] self-end first:mt-0 last:mb-0 flex flex-col gap-2 items-end"
    >
      {fileAttachments.length > 0 && (
        <div className="flex flex-wrap justify-end gap-1">
          {fileAttachments.map((file, i) => (
            <FileItem
              key={i}
              file={new File([], file.filename, { type: file.mimetype })}
              size="lg"
            />
          ))}
        </div>
      )}
      <div className="w-fit whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
        <UserMessageContent content={rawContent} />
      </div>
    </div>
  )
}
