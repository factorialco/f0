import { useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Select } from "@/components/F0Select"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource/types/sortings.typings"
import { Ascending, Descending } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

export const EmptySortingValue = "__no-sorting__"

export const SortingSelector = <Sortings extends SortingsDefinition>({
  currentSortings,
  sortings,
  onChange,
}: {
  sortings: SortingsDefinition
  currentSortings: SortingsState<Sortings>
  onChange: (sorting: SortingsState<Sortings>) => void
}) => {
  const i18n = useI18n()
  const sortingOptions = [
    {
      label: i18n.collections.sorting.noSorting,
      value: EmptySortingValue,
    },
    ...Object.entries(sortings || {}).map(([key, value]) => ({
      label: value.label,
      value: key,
    })),
  ]

  const displaySortings = useMemo(
    () =>
      currentSortings ?? {
        field: EmptySortingValue as SortingKey<Sortings>,
        order: "asc" as const,
      },
    [currentSortings]
  )

  const handleChange = (sorting: SortingsState<Sortings>) => {
    if (!sorting || sorting.field === EmptySortingValue) {
      onChange(null)
    } else {
      onChange(sorting)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-end gap-2">
        <div className="shrink grow [&_button]:h-8 [&_button]:rounded">
          <F0Select
            key={displaySortings.field as string}
            label={i18n.collections.sorting.sortBy}
            options={sortingOptions}
            value={displaySortings.field as string}
            onChange={(value) => {
              handleChange({
                field: value as SortingKey<Sortings>,
                order: displaySortings.order ?? "asc",
              })
            }}
          />
        </div>

        {displaySortings.field !== EmptySortingValue && (
          <div>
            <F0Button
              hideLabel
              label={i18n.collections.sorting.toggleDirection}
              variant="outline"
              icon={displaySortings.order === "asc" ? Ascending : Descending}
              onClick={() =>
                handleChange({
                  field: displaySortings.field as SortingKey<Sortings>,
                  order: displaySortings.order === "asc" ? "desc" : "asc",
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}
