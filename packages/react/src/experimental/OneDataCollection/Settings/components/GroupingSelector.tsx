import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
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
  if (
    !grouping ||
    (!!grouping.mandatory && Object.entries(grouping.groupBy).length < 2)
  ) {
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
          <Select
            label={i18n.collections.grouping.groupBy}
            options={groupingOptions}
            hideLabel={hideLabel}
            value={currentGrouping?.field.toString() ?? EmptyGroupingValue}
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
        {currentGrouping?.field && (
          <Button
            hideLabel
            label={i18n.collections.grouping.toggleDirection}
            variant="outline"
            icon={currentGrouping?.order === "asc" ? ArrowUp : ArrowDown}
            onClick={() =>
              onGroupingChange?.({
                field: currentGrouping.field,
                order: currentGrouping.order === "asc" ? "desc" : "asc",
              })
            }
          />
        )}
      </div>
    </div>
  )
}
