import { useLayoutEffect, useRef, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { F0RichTextDisplay } from "@/components/RichText/F0RichTextDisplay"
import { One as OneIcon } from "@/icons/ai"
import { useContainerSize } from "@/kits/F0DataChart/utils/useContainerSize"
import { cn, focusRing } from "@/lib/utils"
import {
  DASHBOARD_TEXT_ITEM_MAX_ACTIONS,
  type DashboardTextItem as DashboardTextItemType,
  type F0AnalyticsDashboardAskAiTarget,
  type F0AnalyticsDashboardAskAiTargetWithQuote,
} from "../../types"
import { DashboardItem } from "../DashboardItem/DashboardItem"

interface TextItemProps {
  item: DashboardTextItemType
  editMode?: boolean
  handleDelete?: (itemId: string) => void
  onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void
  onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void
}

/**
 * Renders a text dashboard item: a frameless block with a display-size
 * headline, a markdown body and up to three follow-up questions as ghost
 * buttons.
 *
 * The shell still provides the menu and edit-mode delete, so the block behaves
 * like every other widget in the grid. It does not offer fullscreen: a few
 * sentences gain nothing from filling the viewport. There is no data fetcher
 * and no skeleton: the copy is known from config, so the item never loads.
 */
export function TextItem({
  item,
  editMode,
  handleDelete,
  onAskAi,
  onAskAiTarget,
}: TextItemProps) {
  const actions = (item.actions ?? []).slice(0, DASHBOARD_TEXT_ITEM_MAX_ACTIONS)

  // The body scrolls when the row is shorter than the copy. A scroll region
  // that only a pointer can reach fails keyboard access, so it becomes a tab
  // stop exactly when it overflows — the same rule `MetricValue` follows.
  const bodyRef = useRef<HTMLDivElement>(null)
  const { height, width } = useContainerSize(bodyRef)
  const [isScrollable, setIsScrollable] = useState(false)

  useLayoutEffect(() => {
    const element = bodyRef.current
    setIsScrollable(
      element !== null && element.scrollHeight > element.clientHeight
    )
  }, [height, width, item.content, actions.length])

  return (
    <DashboardItem
      title={item.title}
      info={item.info}
      explanation={item.explanation}
      isLoading={false}
      editMode={editMode}
      handleDelete={handleDelete}
      onAskAi={onAskAi}
      onAskAiTarget={onAskAiTarget}
      itemId={item.id}
      frameless
      titleVariant="display"
    >
      {/* The questions follow the copy like a list under a paragraph rather
          than anchoring to the bottom of the block. */}
      <div
        ref={bodyRef}
        tabIndex={isScrollable ? 0 : undefined}
        className={cn(
          // No horizontal padding: the block is frameless, so its copy sits on
          // the column edge in line with the neighbouring cards' borders.
          "flex h-full min-h-0 flex-col gap-3 overflow-auto pb-4",
          isScrollable &&
            focusRing(
              "rounded-sm focus-visible:ring-inset focus-visible:ring-offset-0"
            )
        )}
      >
        <F0RichTextDisplay
          content={item.content}
          format="markdown"
          // Reading copy, not a label: a looser line height than the widget
          // chrome uses. Paragraph rules in the rich text stylesheet set only
          // margins, so the line height inherits from here.
          className="text-base leading-relaxed text-f1-foreground"
        />
        {actions.length > 0 ? (
          <div className="flex shrink-0 flex-col items-start gap-1">
            {actions.map((action, index) => (
              <F0Button
                key={`${index}-${action.label}`}
                variant="ghost"
                size="sm"
                label={action.label}
                // Every question opens the assistant, so the One mark is the
                // default signal that this is a button and not more copy.
                icon={action.icon ?? OneIcon}
                onClick={action.onClick}
              />
            ))}
          </div>
        ) : null}
      </div>
    </DashboardItem>
  )
}
