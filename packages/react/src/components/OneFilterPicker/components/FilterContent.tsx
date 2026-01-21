"use client"

import { FilterDefinitionsByType, getFilterType } from "../filterTypes"
import type {
  FilterDefinition,
  FiltersDefinition,
  FiltersState,
  FilterValue,
} from "../types"

/**
 * Props for the FilterContent component.
 * @template Definition - The type defining the structure of available filters
 */
type FilterContentProps<Definition extends FiltersDefinition> = {
  /** The currently selected filter key, if any */
  selectedFilterKey: keyof Definition | null
  /** The schema defining available filters and their configurations */
  definition: Definition
  /** Current temporary state of filters being configured */
  tempFilters: FiltersState<Definition>
  /** Callback fired when a filter value changes */
  onFilterChange: (key: keyof Definition, value: unknown) => void
  /** Tells us if we are in compact mode */
  isCompactMode?: boolean
}

/**
 * Renders the configuration content for the currently selected filter.
 *
 * Features:
 * - Dynamically renders different filter interfaces based on filter type
 * - Supports "in" filters with multi-select capabilities
 * - Supports "search" filters with text input
 * - Provides search functionality for filtering options within "in" filters
 * - Handles both static and dynamically loaded options
 * - Supports "Select All" functionality for multi-select filters
 *
 * This component renders the right panel in the filters popover interface
 * and adapts its UI based on the selected filter type.
 *
 * @template Definition - The type defining the structure of available filters
 */
export function FilterContent<Definition extends FiltersDefinition>({
  selectedFilterKey,
  definition,
  tempFilters,
  onFilterChange,
  isCompactMode,
}: FilterContentProps<Definition>) {
  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]

  const filterType = getFilterType(filter.type)

  if (!filterType) {
    throw new Error(`Filter type ${filter.type} not found`)
  }
  // TODO Find a way to avoid 'as'
  // Type assertion to ensure the renderer function is typed correctly as typescript can't infer the type correctly
  type FilterType = FilterDefinitionsByType[typeof filter.type]
  const currentValue = (tempFilters[selectedFilterKey] ||
    filterType.emptyValue) as FilterValue<FilterType>

  function renderFilterForm<T extends FilterDefinition>({
    schema,
    value,
    onChange,
  }: {
    schema: T
    value: FilterValue<T>
    onChange: (v: FilterValue<T>) => void
  }): React.ReactNode {
    // double-cast to resolve overload union into a single callable signature
    const filterType = getFilterType(schema.type)
    return (
      filterType.render as unknown as (props: {
        schema: T
        value: FilterValue<T>
        onChange: (v: FilterValue<T>) => void
        isCompactMode?: boolean
      }) => React.ReactNode
    )({ schema, value, onChange, isCompactMode })
  }

  return (
    <div className="relative flex h-full w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto ">
        {renderFilterForm({
          schema: filter,
          value: currentValue,
          onChange: (value) => {
            onFilterChange(selectedFilterKey, value)
          },
        })}
      </div>
    </div>
  )
}
