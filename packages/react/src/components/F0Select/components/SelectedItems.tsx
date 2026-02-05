import { forwardRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

import type { F0SelectItemObject } from "../types"
import { LABEL_SEPARATOR, useVisibleLabelCount } from "../utils"

import { ItemsCounter } from "./ItemsCounter"

type SelectValueProps = {
  selection: F0SelectItemObject<string>[]
  multiple?: boolean
  /** Total count of selected items (useful when not all items are loaded) */
  totalSelectedCount?: number
  /** Whether all items are selected */
  allSelected?: boolean | "indeterminate"
  /** Callback to deselect an item by its value */
  onDeselect?: (value: string) => void
}

/**
 * Component for displaying selected items with dynamic truncation
 */
function MultiSelectDisplay({
  selection,
  totalSelectedCount,
  onDeselect,
}: {
  selection: F0SelectItemObject<string>[]
  totalSelectedCount: number
  onDeselect?: (value: string) => void
}) {
  const labels = selection.map((item) => item.label)
  const { visibleCount, containerRef } = useVisibleLabelCount(
    labels,
    totalSelectedCount
  )

  const visibleItems = selection.slice(0, visibleCount)
  const remainingCount = totalSelectedCount - visibleCount

  return (
    <div
      ref={containerRef}
      className="flex w-full items-center gap-1 text-left"
    >
      <span className="min-w-0 flex-1 truncate">
        {visibleItems.map((item) => item.label).join(LABEL_SEPARATOR)}
      </span>
      {remainingCount > 0 && (
        <ItemsCounter
          count={remainingCount}
          items={selection.slice(visibleCount)}
          onDeselect={onDeselect}
        />
      )}
    </div>
  )
}

/**
 * Component for displaying the selected item or items in the inputField
 */
export const SelectedItems = forwardRef<HTMLDivElement, SelectValueProps>(
  function SelectValue(
    { selection, multiple, totalSelectedCount, allSelected, onDeselect },
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

        // If no items are loaded yet but we have a count, show just the count
        if (selection.length === 0 && selectedCount > 0) {
          return (
            <div className="flex w-full items-center gap-1 text-left">
              <OneEllipsis className="min-w-0 flex-1">
                {`${selectedCount} ${i18n.status.selected.plural.toLowerCase()}`}
              </OneEllipsis>
            </div>
          )
        }

        return (
          <MultiSelectDisplay
            selection={selection}
            totalSelectedCount={selectedCount}
            onDeselect={onDeselect}
          />
        )
      }

      // If no items are loaded yet but we have a count, show just the count
      if (selection.length === 0 && selectedCount > 0) {
        return (
          <div className="flex w-full items-center gap-1 text-left">
            <OneEllipsis className="min-w-0 flex-1">
              {`${selectedCount} ${i18n.status.selected.plural.toLowerCase()}`}
            </OneEllipsis>
          </div>
        )
      }

      return (
        <MultiSelectDisplay
          selection={selection}
          totalSelectedCount={selectedCount}
          onDeselect={onDeselect}
        />
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
