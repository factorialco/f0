import { type UserMessageProps } from "@copilotkit/react-ui"
import { type ReactNode, useEffect, useRef } from "react"

import { PersonEntityRef } from "../../../F0MarkdownRenderers/components/PersonEntityRef"
import { useAiChat } from "../../providers/AiChatStateProvider"

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

  // Strip invisible tool-context prefix before rendering
  const cleaned = content.replace(TOOL_CONTEXT_RE, "")

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

  const { visualizationMode } = useAiChat()
  const isFullscreen = visualizationMode === "fullscreen"

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

  return (
    <div
      ref={ref}
      className="my-4 w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0"
    >
      <UserMessageContent content={getTextContent(message?.content)} />
    </div>
  )
}
