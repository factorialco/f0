import { FiltersDefinition, FiltersState, PresetDefinition } from "../types"

/**
 * Checks whether a preset exactly matches the current filter state.
 * A preset is considered selected only when the current filters have the
 * same keys and values as the preset's filter — no extra, no missing.
 */
export const isPresetSelected = <Filters extends FiltersDefinition>(
  preset: PresetDefinition<Filters>,
  currentFilters: FiltersState<Filters>
): boolean => {
  const presetFilter = preset.filter
  if (
    presetFilter == null ||
    typeof presetFilter !== "object" ||
    Array.isArray(presetFilter)
  ) {
    return false
  }

  const presetKeys = Object.keys(presetFilter)
  const currentKeys = Object.keys(currentFilters).filter(
    (k) => currentFilters[k as keyof Filters] !== undefined
  )

  return (
    presetKeys.length === currentKeys.length &&
    Object.entries(presetFilter).every(
      ([key, val]) =>
        JSON.stringify(currentFilters[key as keyof Filters]) ===
        JSON.stringify(val)
    )
  )
}
