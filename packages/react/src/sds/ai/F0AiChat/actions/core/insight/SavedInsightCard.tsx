import { Markdown } from "@copilotkit/react-ui"

import { F0Button } from "@/components/F0Button"
import Delete from "@/icons/app/Delete"
import Lightbulb from "@/icons/app/Lightbulb"
import Reset from "@/icons/app/Reset"
import { F0Icon } from "@/components/F0Icon"

import { markdownRenderersSimple } from "../../../components/markdownRenderers"
import { useInsightTranslations } from "./useInsightTranslations"
import type { SavedInsightCardProps } from "./types"

/**
 * Standalone insight card rendered outside the chat (e.g. in a carousel).
 *
 * Displays the original question, an optional highlight metric, and
 * markdown detail content. Includes refresh and delete action buttons.
 */
export const SavedInsightCard = ({
  id,
  title,
  question,
  highlight,
  content,
  isRefreshing = false,
  onRefresh,
  onDelete,
}: SavedInsightCardProps) => {
  const insightT = useInsightTranslations()

  return (
    <div className="flex h-full flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background">
      <div className="flex items-center gap-2 border-b border-solid border-f1-border-secondary px-3 py-2">
        <F0Icon icon={Lightbulb} size="md" />
        <span className="flex-1 truncate text-sm font-medium text-f1-foreground">
          {title}
        </span>
      </div>

      <div
        className={`flex flex-1 flex-col gap-2 overflow-y-auto p-3 transition-opacity ${isRefreshing ? "animate-pulse opacity-50" : ""}`}
      >
        <p className="text-xs italic text-f1-foreground-secondary">
          {question}
        </p>

        {highlight && (
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-xl text-f1-foreground">
              {highlight.value}
            </span>
            <span className="text-xs font-medium text-f1-foreground-secondary">
              {highlight.label}
            </span>
          </div>
        )}

        {content && (
          <div className="w-fit max-w-full text-xs text-f1-foreground-secondary [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
            <Markdown content={content} components={markdownRenderersSimple} />
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-1 border-t border-solid border-f1-border-secondary px-2 py-1.5">
        {onRefresh && (
          <F0Button
            icon={Reset}
            label={insightT.refresh}
            hideLabel
            variant="ghost"
            size="sm"
            onClick={() => onRefresh(id)}
            disabled={isRefreshing}
          />
        )}
        {onDelete && (
          <F0Button
            icon={Delete}
            label={insightT.delete}
            hideLabel
            variant="ghost"
            size="sm"
            onClick={() => onDelete(id)}
            disabled={isRefreshing}
          />
        )}
      </div>
    </div>
  )
}
