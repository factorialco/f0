import { FilterTypeSchema } from "../../types"
import { InFilterOptionItem, InFilterOptions } from "../types"
import { getCacheKey, getCachedOptions } from "../useLoadOptions"

/**
 * Recursively checks whether an option or any of its nested children
 * match the search term.
 */
export function optionMatchesSearch<T>(
  option: InFilterOptionItem<T>,
  term: string
): boolean {
  if (option.label.toLowerCase().includes(term)) return true
  if (option.children) {
    return option.children.options.some((child) =>
      optionMatchesSearch(child, term)
    )
  }
  return false
}

/**
 * Recursively checks whether any descendant option (at any depth)
 * is currently selected in allFiltersValue.
 */
export function hasSelectedDescendant<T>(
  option: InFilterOptionItem<T>,
  allFiltersValue?: Record<string, unknown>
): boolean {
  if (!option.children || !allFiltersValue) return false
  const { filterKey, options } = option.children
  const values = (allFiltersValue[filterKey] as T[]) ?? []
  for (const child of options) {
    if (values.includes(child.value)) return true
    if (hasSelectedDescendant(child, allFiltersValue)) return true
  }
  return false
}

/**
 * Collects the nested child filter keys reachable from an option tree.
 */
export function collectNestedFilterKeysFromOptions<T>(
  options: InFilterOptionItem<T>[] | undefined
): string[] {
  const keys = new Set<string>()

  function collect(items: InFilterOptionItem<T>[]) {
    for (const item of items) {
      if (item.children) {
        keys.add(item.children.filterKey)
        collect(item.children.options)
      }
    }
  }

  collect(options ?? [])

  return [...keys]
}

/**
 * All nested child filter keys of an InFilter, used to decide whether a parent
 * filter holds selections through its children (active indicator, selected
 * count, clearing).
 *
 * The keys must be knowable without the options at hand, because the filter
 * list and the chips render before the filter is ever opened. Three sources,
 * in decreasing reliability: the `nestedFilterKeys` declared in the schema,
 * literal option arrays, and the options resolved by a previous load.
 */
export function collectNestedFilterKeys<T>(
  schema: FilterTypeSchema<InFilterOptions<T>>
): string[] {
  const filterOptions = schema.options
  const keys = new Set<string>(filterOptions.nestedFilterKeys ?? [])

  const resolvedOptions =
    "options" in filterOptions && Array.isArray(filterOptions.options)
      ? filterOptions.options
      : getCachedOptions<T>(getCacheKey(schema))

  for (const key of collectNestedFilterKeysFromOptions(resolvedOptions)) {
    keys.add(key)
  }

  return [...keys]
}
