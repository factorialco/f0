import { collectNestedFilterKeys } from "../filterTypes/InFilter/components/option-utils"
import { getFilterType } from "../filterTypes"
import type { FiltersDefinition, FiltersState } from "../types"

export function getClearedFiltersValue<Filters extends FiltersDefinition>(
  filters: Filters
): FiltersState<Filters> {
  const clearedFilters = {} as FiltersState<Filters>

  for (const [key, filter] of Object.entries(filters)) {
    const typedKey = key as keyof Filters
    const filterType = getFilterType(filter.type)

    clearedFilters[typedKey] =
      filterType.emptyValue as FiltersState<Filters>[keyof Filters]

    if (filter.type !== "in" || !("options" in filter)) {
      continue
    }

    for (const nestedKey of collectNestedFilterKeys(filter.options)) {
      clearedFilters[nestedKey as keyof Filters] =
        [] as unknown as FiltersState<Filters>[keyof Filters]
    }
  }

  return clearedFilters
}
