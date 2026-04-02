import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker/types"

import { OneFilterPicker } from "@/components/OneFilterPicker"

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
 * Renders `OneFilterPicker` with the dashboard source's filters, presets,
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
    <OneFilterPicker
      filters={filters}
      value={value}
      presets={presets}
      presetsLoading={presetsLoading}
      onChange={onChange}
    />
  )
}
