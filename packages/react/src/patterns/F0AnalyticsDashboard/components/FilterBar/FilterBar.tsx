import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/patterns/F0FilterPicker/types"

import { ControlledF0FilterPicker } from "@/patterns/F0FilterPicker/internal/ControlledF0FilterPicker"

interface FilterBarProps<Filters extends FiltersDefinition> {
  filters?: Filters
  value: FiltersState<Filters>
  presets?: PresetsDefinition<Filters>
  presetsLoading?: boolean
  onChange: (value: FiltersState<Filters>) => void
}

/**
 * Dashboard-level filter bar.
 *
 * Renders `F0FilterPicker` with the dashboard source's filters, presets,
 * and current filter values. This is the single point of filter control
 * for the entire dashboard.
 */
export function FilterBar<Filters extends FiltersDefinition>({
  filters,
  value,
  presets,
  presetsLoading,
  onChange,
}: FilterBarProps<Filters>) {
  // Only render the filter bar if there are filters or presets defined
  if (!filters && !presets) {
    return null
  }

  return (
    <ControlledF0FilterPicker
      filters={filters}
      value={value}
      presets={presets}
      presetsLoading={presetsLoading}
      onChange={onChange}
      displayCounter
    />
  )
}
