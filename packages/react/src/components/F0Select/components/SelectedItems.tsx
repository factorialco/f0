import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { forwardRef } from "react"
import type { F0SelectItemObject } from "../types"
import { ItemsCounter } from "./ItemsCounter"

type SelectValueProps = {
  selection: F0SelectItemObject<string>[]
  multiple?: boolean
  /** Total count of selected items (useful when not all items are loaded) */
  totalSelectedCount?: number
  /** Whether all items are selected */
  allSelected?: boolean | "indeterminate"
}

/** Maximum number of labels to show before displaying count */
const MAX_VISIBLE_LABELS = 2

/**
 * Component for displaying the selected item or items in the inputField
 */
export const SelectedItems = forwardRef<HTMLDivElement, SelectValueProps>(
  function SelectValue(
    { selection, multiple, totalSelectedCount, allSelected },
    ref
  ) {
    const i18n = useI18n()

    if (multiple) {
      // Use totalSelectedCount if provided, otherwise use selection.length
      const selectedCount = totalSelectedCount ?? selection.length

      // If no items are selected, return nothing
      if (selectedCount === 0 && selection.length === 0) {
        return null
      }

      // Handle "All selected" state - show "All selected" with count
      if (allSelected === true) {
        return (
          <div className="flex w-full items-center gap-1 text-left">
            <OneEllipsis className="min-w-0 flex-1">
              {`${i18n.status.selected.all} (${selectedCount})`}
            </OneEllipsis>
          </div>
        )
      }

      // Handle indeterminate state - show labels for small selections, count for large ones
      if (allSelected === "indeterminate") {
        const MAX_ITEMS_FOR_LABELS = 20

        // For large selections, show just the count
        if (selectedCount >= MAX_ITEMS_FOR_LABELS) {
          return (
            <div className="flex w-full items-center gap-1 text-left">
              <OneEllipsis className="min-w-0 flex-1">
                {`${selectedCount} ${i18n.status.selected.plural.toLowerCase()}`}
              </OneEllipsis>
            </div>
          )
        }

        // For small selections, show visible labels with counter for remaining
        const visibleItems = selection.slice(0, MAX_VISIBLE_LABELS)
        const remainingItems = selection.slice(MAX_VISIBLE_LABELS)
        const remainingCount = selectedCount - visibleItems.length

        // If no items are loaded yet but we have a count, show just the count
        if (visibleItems.length === 0 && selectedCount > 0) {
          return (
            <div className="flex w-full items-center gap-1 text-left">
              <OneEllipsis className="min-w-0 flex-1">
                {`${selectedCount} ${i18n.status.selected.plural.toLowerCase()}`}
              </OneEllipsis>
            </div>
          )
        }

        return (
          <div className="flex w-full items-center gap-1 text-left">
            <OneEllipsis className="min-w-0 flex-1">
              {visibleItems.map((item) => item.label).join(", ")}
            </OneEllipsis>
            {remainingCount > 0 && (
              <ItemsCounter count={remainingCount} items={remainingItems} />
            )}
          </div>
        )
      }

      // Show labels for small selections, count with popover for large ones
      const visibleItems = selection.slice(0, MAX_VISIBLE_LABELS)
      const remainingItems = selection.slice(MAX_VISIBLE_LABELS)
      const remainingCount = selectedCount - visibleItems.length

      // If no items are loaded yet but we have a count, show just the count
      if (visibleItems.length === 0 && selectedCount > 0) {
        return (
          <div className="flex w-full items-center gap-1 text-left">
            <OneEllipsis className="min-w-0 flex-1">
              {`${selectedCount} ${i18n.status.selected.plural.toLowerCase()}`}
            </OneEllipsis>
          </div>
        )
      }

      return (
        <div className="flex w-full items-center gap-1 text-left">
          <OneEllipsis className="min-w-0 flex-1">
            {visibleItems.map((item) => item.label).join(", ")}
          </OneEllipsis>
          {remainingCount > 0 && (
            <ItemsCounter count={remainingCount} items={remainingItems} />
          )}
        </div>
      )
    }

    const selectedItem = selection[0]

    // For single select: if no item loaded but we have a count, show loading indicator
    if (!selectedItem && totalSelectedCount && totalSelectedCount > 0) {
      return (
        <div className="flex min-w-0 flex-1 justify-start gap-1.5" ref={ref}>
          <OneEllipsis
            tag="span"
            className="text-left text-f1-foreground-secondary"
          >
            ...
          </OneEllipsis>
        </div>
      )
    }

    if (!selectedItem) {
      return null
    }

    return (
      <div className="flex min-w-0 flex-1 justify-start gap-1.5" ref={ref}>
        {selectedItem.icon && (
          <div className="h-5 shrink-0 text-f1-icon">
            <F0Icon icon={selectedItem.icon} />
          </div>
        )}
        <OneEllipsis tag="span" className="text-left">
          {selectedItem.label}
        </OneEllipsis>
      </div>
    )
  }
)
