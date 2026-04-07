import { Markdown } from "@copilotkit/react-ui"
import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import Lightbulb from "@/icons/app/Lightbulb"
import PushPin from "@/icons/app/PushPin"

import { markdownRenderersSimple } from "../../../components/markdownRenderers"
import { AiCollapsibleMessage } from "../../../components/shared/AiCollapsibleMessage"
import { useInsightTranslations } from "./useInsightTranslations"
import type { InsightCardProps, InsightData } from "./types"

/**
 * Renders an insight card inside the chat stream.
 *
 * Uses a collapsible panel with a Lightbulb icon. When expanded it
 * shows an optional highlight metric (big value + label) followed
 * by markdown-formatted detail content. Includes a save/pin button
 * when `onSave` is provided and the insight has a section + question.
 */
export const InsightCard = ({
  title,
  question,
  section,
  highlight,
  content,
  queryDataParams,
  onSave,
}: InsightCardProps) => {
  const insightT = useInsightTranslations()
  const [isSaved, setIsSaved] = useState(false)

  const canSave = !!onSave && !!section && !!question && !isSaved

  const handleSave = () => {
    if (!onSave || !section || !question) return

    const data: InsightData = {
      title,
      question,
      section,
      highlight,
      content,
      queryDataParams,
    }

    onSave(data)
    setIsSaved(true)
  }

  return (
    <AiCollapsibleMessage icon={Lightbulb} title={title || insightT.title}>
      <div className="flex flex-col gap-3 rounded-lg border border-solid border-f1-border-secondary p-3">
        {question && (
          <p className="text-xs italic text-f1-foreground-secondary">
            {question}
          </p>
        )}
        {highlight && (
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-2xl text-f1-foreground">
              {highlight.value}
            </span>
            <span className="text-sm font-medium text-f1-foreground-secondary">
              {highlight.label}
            </span>
          </div>
        )}
        {content && (
          <div className="w-fit max-w-full text-sm text-f1-foreground-secondary [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
            <Markdown content={content} components={markdownRenderersSimple} />
          </div>
        )}
        {(canSave || isSaved) && (
          <div className="flex justify-end">
            <F0Button
              icon={PushPin}
              label={isSaved ? insightT.saved : insightT.save}
              variant="ghost"
              size="sm"
              onClick={handleSave}
              disabled={isSaved}
            />
          </div>
        )}
      </div>
    </AiCollapsibleMessage>
  )
}
