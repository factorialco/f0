import { F0Button } from "@/components/F0Button"
import { ButtonCopy } from "@/ui/ButtonCopy"

import {
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { useCallback, useRef, useState } from "react"
import { markdownRenderers as f0MarkdownRenderers } from "../markdownRenderers"
import { ChatSpinner } from "./ChatSpinner"

export const AssistantMessage = ({
  isGenerating,
  isLoading,
  markdownTagRenderers,
  message,
  onCopy,
  onThumbsDown,
  onThumbsUp,
}: AssistantMessageProps) => {
  const content = message?.content || ""
  const isThinkingTool =
    message?.role === "assistant" &&
    message.toolCalls?.find(
      (tool) => tool.function.name === "orchestratorThinking"
    )
  const subComponent = message?.generativeUI?.(
    isThinkingTool
      ? {
          status: isLoading ? "executing" : "completed",
        }
      : undefined
  )
  const isEmptyMessage = !content && !subComponent

  const translations = useI18n()
  const [reactionValue, setReactionValue] = useState<"like" | "dislike" | null>(
    null
  )
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (!isLoading && !isGenerating && !subComponent) {
      setIsHovered(true)
    }
  }, [isGenerating, isLoading, subComponent])
  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 150)
  }, [])

  if (!isLoading && !isGenerating && isEmptyMessage) {
    return null
  }

  return (
    <div
      className="relative isolate flex w-full flex-col items-start justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && !subComponent && (
        <div className="min-h-[20px]">
          <ChatSpinner />
        </div>
      )}
      {message && (
        <>
          <div className="w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
            <Markdown
              content={content}
              components={{ ...f0MarkdownRenderers, ...markdownTagRenderers }}
            />
          </div>

          <div
            className={cn(
              // add paddings to make the area bigger and avoid flickering when the mouse is over the actions
              "invisible absolute left-0 top-full py-1 pr-4 focus-within:visible",
              isHovered && !isGenerating && "visible"
            )}
            onMouseEnter={handleMouseEnter}
            // no onMouseLeave attached because the div is part of the upper container with the handler attached
          >
            <div className="flex gap-1">
              <div>
                <ButtonCopy
                  variant="ghost"
                  valueToCopy={content}
                  disabled={isGenerating}
                  onCopy={(e) => {
                    e.currentTarget.blur()
                    onCopy?.(content)
                  }}
                />
              </div>
              <div>
                <F0Button
                  variant="ghost"
                  size="sm"
                  label={translations.actions.thumbsUp}
                  icon={reactionValue === "like" ? ThumbsUpFilled : ThumbsUp}
                  hideLabel
                  disabled={isGenerating}
                  onClick={(e) => {
                    setReactionValue((val) => (val === "like" ? null : "like"))
                    onThumbsUp?.(message)
                    e.currentTarget.blur()
                  }}
                />
              </div>
              <div>
                <F0Button
                  variant="ghost"
                  size="sm"
                  label={translations.actions.thumbsDown}
                  icon={
                    reactionValue === "dislike" ? ThumbsDownFilled : ThumbsDown
                  }
                  hideLabel
                  disabled={isGenerating}
                  onClick={(e) => {
                    setReactionValue((val) =>
                      val === "dislike" ? null : "dislike"
                    )
                    onThumbsDown?.(message)
                    e.currentTarget.blur()
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {!!subComponent && <div>{subComponent}</div>}
    </div>
  )
}
