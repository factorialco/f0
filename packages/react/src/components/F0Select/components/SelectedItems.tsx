import { forwardRef } from "react"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { OneEllipsis } from "@/lib/OneEllipsis"
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
  /**
   * Whether to leave the selected item's icon out.
   *
   * Set when the FIELD already carries an `icon`: the two are drawn in different
   * places — the field's is absolutely placed at `left-2`, this one sits inside
   * the value area's `px-3` — so showing both puts two glyphs 4px apart on one
   * trigger. Options keep their icons for the rows either way.
   */
  hideItemIcon?: boolean
  /**
   * Whether to leave the clipped-text tooltip out.
   *
   * Set when the TRIGGER already carries a tooltip of its own — the `field`
   * variant wraps it in one that spells out the field's label and the whole
   * selection. Both then hang off the same hover target, and Radix closes every
   * open tooltip whenever another opens, so the two took turns on a single
   * hover: one bubble appeared, flashed out as the other opened, and the
   * selection was read back twice. The trigger's tooltip already says
   * everything this one would, so this is the one that goes.
   *
   * The `inline` variant has no trigger tooltip, so there it stays: it is the
   * only way back to text the layout has cut off.
   */
  noTooltip?: boolean
}

function SelectedCount({
  count,
  noTooltip,
}: {
  count: number
  noTooltip?: boolean
}) {
  const i18n = useI18n()
  return (
    <div className="flex w-full items-center gap-1 text-left">
      <OneEllipsis
        className="min-w-0 flex-1 text-f1-foreground"
        noTooltip={noTooltip}
      >
        {`${count} ${count === 1 ? i18n.status.selected.singular : i18n.status.selected.plural}`.toLowerCase()}
      </OneEllipsis>
    </div>
  )
}

function MultiSelectDisplay({
  selection,
  totalSelectedCount,
  noTooltip,
}: {
  selection: F0SelectItemObject<string>[]
  totalSelectedCount: number
  noTooltip?: boolean
}) {
  const labels = selection.map((item) => item.selectedLabel ?? item.label)
  const { allFit, containerRef } = useLabelsOverflow(labels)

  if (!allFit) {
    return (
      <div ref={containerRef} className="flex w-full items-center text-left">
        <SelectedCount count={totalSelectedCount} noTooltip={noTooltip} />
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
 * The multi-selection reading: "All (n)", a bare count when the labels are not
 * loaded, or the labels themselves.
 */
function SelectedMultiple({
  selection,
  totalSelectedCount,
  allSelected,
  noTooltip,
}: Pick<
  SelectValueProps,
  "selection" | "totalSelectedCount" | "allSelected" | "noTooltip"
>) {
  const i18n = useI18n()
  const selectedCount = totalSelectedCount ?? selection.length

  if (selectedCount === 0 && selection.length === 0) {
    return null
  }

  if (allSelected === true) {
    return (
      <div className="flex w-full items-center gap-1 text-left">
        <OneEllipsis
          className="min-w-0 flex-1 text-f1-foreground"
          noTooltip={noTooltip}
        >
          {`${i18n.status.selected.all} (${selectedCount})`}
        </OneEllipsis>
      </div>
    )
  }

  if (selection.length === 0 && selectedCount > 0) {
    return <SelectedCount count={selectedCount} noTooltip={noTooltip} />
  }

  return (
    <MultiSelectDisplay
      selection={selection}
      totalSelectedCount={selectedCount}
      noTooltip={noTooltip}
    />
  )
}

/**
 * Component for displaying the selected item or items in the inputField
 */
export const SelectedItems = forwardRef<HTMLDivElement, SelectValueProps>(
  function SelectValue(
    {
      selection,
      multiple,
      totalSelectedCount,
      allSelected,
      hideItemIcon,
      noTooltip,
    },
    ref
  ) {
    if (multiple) {
      return (
        <SelectedMultiple
          selection={selection}
          totalSelectedCount={totalSelectedCount}
          allSelected={allSelected}
          noTooltip={noTooltip}
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
            noTooltip={noTooltip}
          >
            ...
          </OneEllipsis>
        </div>
      )
    }

    if (!selectedItem) {
      return null
    }

    if (
      selectedItem.tag &&
      typeof selectedItem.tag !== "string" &&
      selectedItem.tag.type === "status"
    ) {
      return (
        <div className="flex min-w-0 flex-1 justify-start" ref={ref}>
          <F0TagStatus
            text={selectedItem.tag.text}
            variant={selectedItem.tag.variant}
          />
        </div>
      )
    }

    return (
      <div className="flex min-w-0 flex-1 justify-start gap-1.5" ref={ref}>
        {selectedItem.avatar ? (
          <div className="flex shrink-0 items-center">
            <F0Avatar avatar={selectedItem.avatar} size="xs" />
          </div>
        ) : null}
        {selectedItem.icon && !hideItemIcon ? (
          <div className="h-5 shrink-0 text-f1-icon">
            <F0Icon icon={selectedItem.icon} />
          </div>
        ) : null}
        <OneEllipsis
          tag="span"
          className="text-left text-f1-foreground"
          noTooltip={noTooltip}
        >
          {/* `selectedLabel` when the item carries one: out here there is no
              group header or sibling to read the row's short label against. */}
          {selectedItem.selectedLabel ?? selectedItem.label}
        </OneEllipsis>
      </div>
    )
  }
)
