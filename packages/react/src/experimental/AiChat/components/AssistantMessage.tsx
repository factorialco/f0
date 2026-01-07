import { F0Icon } from "@/components/F0Icon"
import {
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Action } from "@/ui/Action"
import { ButtonCopy } from "@/ui/ButtonCopy"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { useState } from "react"
import { ActionItem } from "../ActionItem"
import { markdownRenderers as f0MarkdownRenderers } from "../MarkdownRenderers"
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

  if (!isLoading && !isGenerating && isEmptyMessage) {
    return null
  }

  return (
    <div className="relative isolate flex w-full flex-col items-start justify-center gap-1">
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

          {!isGenerating && !isLoading && !!content && (
            <div className="flex">
              <ButtonCopy
                size="md"
                variant="ghost"
                valueToCopy={content}
                disabled={isGenerating}
                onCopy={(e) => {
                  e.currentTarget.blur()
                  onCopy?.(content)
                }}
              />
              <Action
                onClick={(e) => {
                  const newValue = reactionValue === "like" ? null : "like"
                  if (newValue) {
                    openFeedbackModal(newValue, message)
                  }
                  setReactionValue(newValue)
                  e.currentTarget.blur()
                }}
                compact={true}
                mode="only"
                variant="ghost"
                aria-label={translations.actions.thumbsUp}
              >
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <F0Icon
                    size="md"
                    icon={reactionValue === "like" ? ThumbsUpFilled : ThumbsUp}
                    color="default"
                  />
                </div>
              </Action>

              <Action
                onClick={(e) => {
                  const newValue =
                    reactionValue === "dislike" ? null : "dislike"
                  if (newValue) {
                    openFeedbackModal(newValue, message)
                  }
                  setReactionValue(newValue)
                  e.currentTarget.blur()
                }}
                compact={true}
                mode="only"
                variant="ghost"
                aria-label={translations.actions.thumbsDown}
              >
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1">
                  <F0Icon
                    size="md"
                    icon={
                      reactionValue === "dislike"
                        ? ThumbsDownFilled
                        : ThumbsDown
                    }
                    color="default"
                  />
                </div>
              </Action>
            </div>
          )}
        </>
      )}
      {!!subComponent && <div className="w-full">{subComponent}</div>}
    </div>
  )
}
