"use client"

import {
  getFilterType,
  RegisteredFilterDefinition,
  RegisteredFilterDefinitionsByType,
  RegisteredFiltersState,
  RegisteredFilterValue,
} from "../filterTypes"

type RenderableFiltersDefinition = Record<string, RegisteredFilterDefinition>

/**
 * Props for the FilterContent component.
 * @template Definition - The type defining the structure of available filters
 */
type FilterContentProps<Definition extends RenderableFiltersDefinition> = {
  /** The currently selected filter key, if any */
  selectedFilterKey: keyof Definition | null
  /** The schema defining available filters and their configurations */
  definition: Definition
  /** Current temporary state of filters being configured */
  tempFilters: RegisteredFiltersState<Definition>
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
export function FilterContent<Definition extends RenderableFiltersDefinition>({
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
  type FilterType = RegisteredFilterDefinitionsByType[typeof filter.type]
  const currentValue = (tempFilters[selectedFilterKey] ||
    filterType.emptyValue) as RegisteredFilterValue<FilterType>

  const handleSiblingFilterChange = (key: string, value: unknown) => {
    onFilterChange(key as keyof Definition, value)
  }

  function renderFilterForm<T extends RegisteredFilterDefinition>({
    schema,
    value,
    onChange,
  }: {
    schema: T
    value: RegisteredFilterValue<T>
    onChange: (v: RegisteredFilterValue<T>) => void
  }): React.ReactNode {
    // double-cast to resolve overload union into a single callable signature
    const filterType = getFilterType(schema.type)
    return (
      filterType.render as unknown as (props: {
        schema: T
        value: RegisteredFilterValue<T>
        onChange: (v: RegisteredFilterValue<T>) => void
        isCompactMode?: boolean
        onFilterChange?: (key: string, value: unknown) => void
        allFiltersValue?: Record<string, unknown>
      }) => React.ReactNode
    )({
      schema,
      value,
      onChange,
      isCompactMode,
      onFilterChange: handleSiblingFilterChange,
      allFiltersValue: tempFilters as Record<string, unknown>,
    })
  }

  return (
    <div className="relative flex h-full w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden">
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
