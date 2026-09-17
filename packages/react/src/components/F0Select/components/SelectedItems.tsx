import { forwardRef, useEffect, useRef } from "react"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import type { F0SelectItemObject } from "../types"
import { LABEL_SEPARATOR, useIsClipped, useLabelsOverflow } from "../utils"

/**
 * Reports up whether the trigger is already showing the selection in full, so
 * the tooltip above it can stay shut rather than repeat what is on screen.
 *
 * A hook rather than a bare `useEffect` at each site because the answer is
 * settled in a different branch each time — a count, a tag, clipped text — and
 * every branch has to report, including the ones that return early.
 */
function useReportSpelledOut(
  onChange: ((spelledOut: boolean) => void) | undefined,
  /** `null` where a nested branch owns the answer and will report it instead. */
  spelledOut: boolean | null
) {
  useEffect(() => {
    if (spelledOut === null) {
      return
    }
    onChange?.(spelledOut)
  }, [onChange, spelledOut])
}

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
  /**
   * Called with whether the trigger is now showing the selection IN FULL.
   *
   * True only when every selected label is rendered and none of it is cut off.
   * A count standing in for the names (`3 selected`, `All (12)`), the `…`
   * placeholder for a label that has not loaded, a status tag drawn instead of
   * the label, or text the box clips — all of those hide part of the answer and
   * report false.
   *
   * The trigger tooltip above reads this to decide whether it still has
   * anything to add: repeating a fully visible selection is noise, which is why
   * the field's own label is already left out of the tooltip whenever it is
   * rendered beside the field.
   */
  onSpelledOutChange?: (spelledOut: boolean) => void
}

function SelectedCount({
  count,
  noTooltip,
  onSpelledOutChange,
}: {
  count: number
  noTooltip?: boolean
  onSpelledOutChange?: (spelledOut: boolean) => void
}) {
  const i18n = useI18n()
  // A count names nothing: the tooltip is the only place the items are listed.
  useReportSpelledOut(onSpelledOutChange, false)
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
  onSpelledOutChange,
}: {
  selection: F0SelectItemObject<string>[]
  totalSelectedCount: number
  noTooltip?: boolean
  onSpelledOutChange?: (spelledOut: boolean) => void
}) {
  const labels = selection.map((item) => item.selectedLabel ?? item.label)
  const { allFit, containerRef } = useLabelsOverflow(labels)
  /**
   * `allFit` is the whole answer here: when the labels fit they are all on
   * screen, and when they do not this falls back to a count, which names none
   * of them. `SelectedCount` below reports that itself.
   */
  useReportSpelledOut(onSpelledOutChange, allFit)

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
  onSpelledOutChange,
}: Pick<
  SelectValueProps,
  | "selection"
  | "totalSelectedCount"
  | "allSelected"
  | "noTooltip"
  | "onSpelledOutChange"
>) {
  const i18n = useI18n()
  const selectedCount = totalSelectedCount ?? selection.length

  /**
   * Settled here for the branches this component renders itself; `null` hands
   * the answer to `MultiSelectDisplay` / `SelectedCount` below. Computed before
   * the early returns so the hook runs on every path.
   */
  useReportSpelledOut(
    onSpelledOutChange,
    selectedCount === 0 && selection.length === 0
      ? // Nothing selected, so nothing is being withheld.
        true
      : allSelected === true
        ? // "All (12)" names none of the twelve.
          false
        : null
  )

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
    return (
      <SelectedCount
        count={selectedCount}
        noTooltip={noTooltip}
        onSpelledOutChange={onSpelledOutChange}
      />
    )
  }

  return (
    <MultiSelectDisplay
      selection={selection}
      totalSelectedCount={selectedCount}
      noTooltip={noTooltip}
      onSpelledOutChange={onSpelledOutChange}
    />
  )
}

type StatusTag = Extract<F0SelectItemObject<string>["tag"], { type: "status" }>

/** Whether the item is drawn as a status tag INSTEAD of its label. */
function isStatusTagItem(
  item: F0SelectItemObject<string>
): item is F0SelectItemObject<string> & { tag: StatusTag } {
  return (
    !!item.tag && typeof item.tag !== "string" && item.tag.type === "status"
  )
}

/**
 * Whether the single-selection trigger is showing the whole answer.
 *
 * Kept out of the component so each reading states its own case: only the last
 * one puts the label on screen, and only that one has to be measured.
 */
function spellsOutSingleSelection(
  selectedItem: F0SelectItemObject<string> | undefined,
  totalSelectedCount: number | undefined,
  labelClipped: boolean
): boolean {
  if (!selectedItem) {
    // Nothing is selected — or something is and its label has not loaded, so
    // the trigger is showing `…`, which names nothing.
    return !(totalSelectedCount && totalSelectedCount > 0)
  }
  if (isStatusTagItem(selectedItem)) {
    // The tag is drawn instead of the label, so the label is nowhere on it.
    return false
  }
  return !labelClipped
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
      onSpelledOutChange,
    },
    ref
  ) {
    const selectedItem = selection[0]
    const singleLabel = selectedItem
      ? (selectedItem.selectedLabel ?? selectedItem.label)
      : ""

    /**
     * The single selection's label is the one case the answer has to be
     * MEASURED rather than derived: it is rendered in full, and only its box
     * decides whether all of it is readable. Every other branch knows without
     * looking. The ref lands on the text itself — `OneEllipsis` forwards it to
     * the element it renders — so the avatar and icon beside it are already
     * accounted for.
     */
    const labelRef = useRef<HTMLElement>(null)
    const labelClipped = useIsClipped(labelRef, singleLabel)

    useReportSpelledOut(
      onSpelledOutChange,
      multiple
        ? // `SelectedMultiple` and its children own the multi-selection answer.
          null
        : spellsOutSingleSelection(
            selectedItem,
            totalSelectedCount,
            labelClipped
          )
    )

    if (multiple) {
      return (
        <SelectedMultiple
          selection={selection}
          totalSelectedCount={totalSelectedCount}
          allSelected={allSelected}
          noTooltip={noTooltip}
          onSpelledOutChange={onSpelledOutChange}
        />
      )
    }

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

    if (isStatusTagItem(selectedItem)) {
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
        {/* `singleLabel` is `selectedLabel` when the item carries one: out here
            there is no group header or sibling to read the row's short label
            against. */}
        <OneEllipsis
          ref={labelRef}
          tag="span"
          className="text-left text-f1-foreground"
          noTooltip={noTooltip}
        >
          {singleLabel}
        </OneEllipsis>
      </div>
    )
  }
)
