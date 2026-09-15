import { F0Button } from "@/components/F0Button"
import { F0Select } from "@/components/F0Select"
import {
  GroupingDefinition,
  GroupingState,
  RecordType,
} from "@/hooks/datasource"
import { SortOrder } from "@/hooks/datasource/types/sortings.typings"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

type GroupingSelectorProps<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
> = {
  grouping?: Grouping
  currentGrouping?: GroupingState<R, Grouping>
  onGroupingChange?: (groupingState: GroupingState<R, Grouping>) => void
  hideLabel?: boolean
}

const EmptyGroupingValue = "__no-grouping__"

/**
 * Whether the grouping picker has anything to offer.
 *
 * Two ways it has nothing. `hideSelector` is the definition saying so outright:
 * the grouping is the product's decision, not the user's, so it applies and the
 * control never appears. A MANDATORY grouping over a single field is the same
 * situation arrived at by arithmetic — the grouping applies, there is simply no
 * second option to switch to.
 *
 * Exported because "is the picker there?" and "is there a bar to put it in?"
 * are asked in different files, and they have to agree — a container that keeps
 * itself open for a control that renders null is an empty strip of chrome.
 *
 * Takes the three fields it actually reads rather than a `GroupingDefinition<R>`:
 * every caller holds a definition for a different record type, and the answer
 * does not depend on which.
 */
export const canSelectGrouping = (grouping?: {
  mandatory?: boolean
  hideSelector?: boolean
  groupBy: object
}): boolean =>
  !!grouping &&
  !grouping.hideSelector &&
  !(!!grouping.mandatory && Object.keys(grouping.groupBy).length < 2)

export const GroupingSelector = <
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
>({
  grouping,
  currentGrouping,
  onGroupingChange,
  hideLabel = false,
}: GroupingSelectorProps<R, Grouping>) => {
  const i18n = useI18n()
  if (!grouping || !canSelectGrouping(grouping)) {
    return null
  }

  const groupingOptions = [
    ...(!grouping.mandatory
      ? [
          {
            label: i18n.collections.grouping.noGrouping,
            value: EmptyGroupingValue,
          },
        ]
      : []),
    ...Object.entries(grouping.groupBy || {})
      .filter(
        (
          entry
        ): entry is [
          string,
          NonNullable<(typeof grouping.groupBy)[keyof typeof grouping.groupBy]>,
        ] => !!entry[1]
      )
      .map(([key, value]) => ({
        label: value.name,
        value: key,
      })),
  ]

  return (
    <div className="flex flex-col">
      <div className="flex items-end gap-2">
        <div className="shrink grow [&_button]:h-8 [&_button]:rounded">
          <F0Select
            label={i18n.collections.grouping.groupBy}
            options={groupingOptions}
            hideLabel={hideLabel}
            value={currentGrouping?.field.toString() ?? EmptyGroupingValue}
            // Picking a field here replaces the whole grouping, nested levels
            // included: the selector offers one field, so any `then` the state
            // carried belonged to the grouping the user just left behind.
            onChange={(value: string) =>
              onGroupingChange?.(
                value !== EmptyGroupingValue
                  ? {
                      field: value as keyof Grouping["groupBy"],
                      order:
                        (
                          grouping.groupBy[
                            value as keyof Grouping["groupBy"]
                          ] as { defaultDirection?: SortOrder }
                        )?.defaultDirection ??
                        currentGrouping?.order ??
                        "asc",
                    }
                  : undefined
              )
            }
          />
        </div>
        {currentGrouping?.field ? (
          <F0Button
            hideLabel
            label={i18n.collections.grouping.toggleDirection}
            variant="outline"
            icon={currentGrouping?.order === "asc" ? ArrowUp : ArrowDown}
            onClick={() =>
              onGroupingChange?.({
                ...currentGrouping,
                order: currentGrouping.order === "asc" ? "desc" : "asc",
              })
            }
          />
        ) : null}
      </div>
    </div>
  )
}
