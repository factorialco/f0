import { collectNestedFilterKeys } from "../filterTypes/InFilter/components/option-utils"
import {
  getFilterType,
  RegisteredFiltersDefinition,
  RegisteredFiltersState,
} from "../filterTypes"

export function getClearedFiltersValue<
  Filters extends RegisteredFiltersDefinition,
>(filters: Filters): RegisteredFiltersState<Filters> {
  const clearedFilters = {} as RegisteredFiltersState<Filters>

  for (const [key, filter] of Object.entries(filters)) {
    const typedKey = key as keyof Filters
    const filterType = getFilterType(filter.type)

    clearedFilters[typedKey] =
      filterType.emptyValue as RegisteredFiltersState<Filters>[keyof Filters]

    if (filter.type !== "in" || !("options" in filter)) {
      continue
    }

    for (const nestedKey of collectNestedFilterKeys(filter.options)) {
      clearedFilters[nestedKey as keyof Filters] =
        [] as unknown as RegisteredFiltersState<Filters>[keyof Filters]
    }
  }

  return clearedFilters
}
