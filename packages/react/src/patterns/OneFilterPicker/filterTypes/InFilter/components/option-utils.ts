import { InFilterOptionItem, InFilterOptions } from "../types"

/** A (filterKey, value) pair identifying an option in the hierarchical tree. */
export type InterlockTuple<T> = { filterKey: string; value: T }

/** For a given option, the other options whose selection should be cleared
 *  when this one is picked under `nestedSelection: 'exclusive'`. */
export type InterlockEntry<T> = {
  ancestors: Array<InterlockTuple<T>>
  descendants: Array<InterlockTuple<T>>
}

/** Index keyed by (filterKey, value) → interlock context. */
export type InterlockIndex<T> = Map<string, Map<T, InterlockEntry<T>>>

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

/**
 * Builds a flat index mapping every (filterKey, value) in the option tree to
 * the ancestors and descendants that should be cleared when it is selected
 * under `nestedSelection: 'exclusive'`.
 *
 * - `rootFilterKey` is the filter key the top-level options live under (i.e.
 *   the widget's own filter key).
 * - Ancestors are listed root-first (matches FiltersState traversal order).
 * - Descendants include every option in the selected node's subtree, at any
 *   depth.
 */
export function buildInterlockIndex<T>(
  rootFilterKey: string,
  topLevelOptions: Array<InFilterOptionItem<T>>
): InterlockIndex<T> {
  const index: InterlockIndex<T> = new Map()
  const bucket = (filterKey: string) => {
    let m = index.get(filterKey)
    if (!m) {
      m = new Map()
      index.set(filterKey, m)
    }
    return m
  }

  const collectDescendants = (
    options: Array<InFilterOptionItem<T>>,
    filterKey: string,
    out: Array<InterlockTuple<T>>
  ) => {
    for (const option of options) {
      out.push({ filterKey, value: option.value })
      if (option.children) {
        collectDescendants(
          option.children.options,
          option.children.filterKey,
          out
        )
      }
    }
  }

  const walk = (
    options: Array<InFilterOptionItem<T>>,
    filterKey: string,
    ancestors: ReadonlyArray<InterlockTuple<T>>
  ) => {
    for (const option of options) {
      const descendants: Array<InterlockTuple<T>> = []
      if (option.children) {
        collectDescendants(
          option.children.options,
          option.children.filterKey,
          descendants
        )
      }
      bucket(filterKey).set(option.value, {
        ancestors: [...ancestors],
        descendants,
      })
      if (option.children) {
        walk(option.children.options, option.children.filterKey, [
          ...ancestors,
          { filterKey, value: option.value },
        ])
      }
    }
  }

  walk(topLevelOptions, rootFilterKey, [])
  return index
}
