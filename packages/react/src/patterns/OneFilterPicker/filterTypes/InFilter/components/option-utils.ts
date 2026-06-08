import { InFilterOptionItem, InFilterOptions } from "../types"

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
 * Collects all nested child filter keys from an InFilter's options.
 * Used to determine if a parent filter should show an active indicator
 * when any of its nested children have selections.
 */
export function collectNestedFilterKeys<T>(
  filterOptions: InFilterOptions<T>
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

  if ("options" in filterOptions && Array.isArray(filterOptions.options)) {
    collect(filterOptions.options)
  }

  return [...keys]
}
