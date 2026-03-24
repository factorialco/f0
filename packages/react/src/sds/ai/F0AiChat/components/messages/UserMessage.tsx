import { Markdown, type UserMessageProps } from "@copilotkit/react-ui"
import { useEffect, useRef } from "react"

import { markdownRenderers } from "../markdownRenderers"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { getTextContent } from "../../utils/contentHelpers"

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

  const raw = getTextContent(message?.content) ?? ""
  const content = raw.replace(TOOL_CONTEXT_RE, "")

  return (
    <div
      ref={ref}
      className="my-4 w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0"
    >
      <Markdown content={content} components={markdownRenderers} />
    </div>
  )
}
