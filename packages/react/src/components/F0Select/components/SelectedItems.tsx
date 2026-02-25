import { forwardRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

import type { F0SelectItemObject } from "../types"
import { LABEL_SEPARATOR, useLabelsOverflow } from "../utils"

type SelectValueProps = {
  selection: F0SelectItemObject<string>[]
  multiple?: boolean
  /** Total count of selected items (useful when not all items are loaded) */
  totalSelectedCount?: number
  /** Whether all items are selected */
  allSelected?: boolean | "indeterminate"
}

function SelectedCount({ count }: { count: number }) {
  const i18n = useI18n()
  return (
    <div className="flex w-full items-center gap-1 text-left">
      <OneEllipsis className="min-w-0 flex-1 text-f1-foreground">
        {`${count} ${count === 1 ? i18n.status.selected.singular : i18n.status.selected.plural}`.toLowerCase()}
      </OneEllipsis>
    </div>
  )
}

function MultiSelectDisplay({
  selection,
  totalSelectedCount,
}: {
  selection: F0SelectItemObject<string>[]
  totalSelectedCount: number
}) {
  const labels = selection.map((item) => item.label)
  const { allFit, containerRef } = useLabelsOverflow(labels)

  if (!allFit) {
    return (
      <div ref={containerRef} className="flex w-full items-center text-left">
        <SelectedCount count={totalSelectedCount} />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="flex w-full items-center gap-1 text-left"
    >
      <span className="min-w-0 flex-1 truncate text-f1-foreground">
        {labels.join(LABEL_SEPARATOR)}
      </span>
    </div>
  )
}

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
      const selectedCount = totalSelectedCount ?? selection.length

      if (selectedCount === 0 && selection.length === 0) {
        return null
      }

      if (allSelected === true) {
        return (
          <div className="flex w-full items-center gap-1 text-left">
            <OneEllipsis className="min-w-0 flex-1 text-f1-foreground">
              {`${i18n.status.selected.all} (${selectedCount})`}
            </OneEllipsis>
          </div>
        )
      }

      if (selection.length === 0 && selectedCount > 0) {
        return <SelectedCount count={selectedCount} />
      }

      return (
        <MultiSelectDisplay
          selection={selection}
          totalSelectedCount={selectedCount}
        />
      )
    }

    const selectedItem = selection[0]

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
        <OneEllipsis tag="span" className="text-left text-f1-foreground">
          {selectedItem.label}
        </OneEllipsis>
      </div>
    )
  }
)
