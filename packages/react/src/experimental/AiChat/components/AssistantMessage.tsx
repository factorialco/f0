import { F0Button } from "@/components/F0Button"
import {
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ButtonCopy } from "@/ui/ButtonCopy"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { useCallback, useRef, useState } from "react"
import { ActionItem } from "../ActionItem"
import { markdownRenderers as f0MarkdownRenderers } from "../markdownRenderers"
import { useFeedbackModal, UserReaction } from "./FeedbackProvider"

export const AssistantMessage = ({
  isGenerating,
  isLoading,
  markdownTagRenderers,
  message,
  onCopy,
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
  const { open: openFeedbackModal } = useFeedbackModal()
  const [reactionValue, setReactionValue] = useState<UserReaction | null>(null)
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
        <ActionItem title={translations.ai.thinking} status="executing" />
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
                    const newValue = reactionValue === "like" ? null : "like"
                    if (newValue) {
                      openFeedbackModal(newValue, message)
                    }
                    setReactionValue(newValue)
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
                    const newValue =
                      reactionValue === "dislike" ? null : "dislike"
                    if (newValue) {
                      openFeedbackModal(newValue, message)
                    }
                    setReactionValue(newValue)
                    e.currentTarget.blur()
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {!!subComponent && <div className="w-full">{subComponent}</div>}
    </div>
  )
}
