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

/** Nested child filter keys reachable from an option tree. */
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
 * Nested child filter keys of an InFilter. The filter list and the chips render
 * before the filter is ever opened, so the keys have to be resolvable without
 * the options: declared in the schema, listed literally, or left over in the
 * cache from a previous load.
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
