import { FiltersDefinition, FiltersState, PresetsDefinition } from "../types"

export const getPresetCoveredKeys = <Filters extends FiltersDefinition>(
  presets: PresetsDefinition<Filters> | undefined,
  currentFilters: FiltersState<Filters>
): Set<string> => {
  if (!presets || presets.length === 0) {
    return new Set()
  }

  // Find all presets that are currently "selected"
  // A preset is selected when all its filter keys match the current filter values
  const selectedPresets = presets.filter((preset) =>
    Object.entries(preset.filter).every(
      ([key, val]) =>
        JSON.stringify(currentFilters[key as keyof Filters]) ===
        JSON.stringify(val)
    )
  )

  // Collect all keys covered by selected presets
  const coveredKeys = new Set<string>()
  selectedPresets.forEach((preset) => {
    Object.keys(preset.filter).forEach((key) => {
      coveredKeys.add(key)
    })
  })

  return coveredKeys
}
