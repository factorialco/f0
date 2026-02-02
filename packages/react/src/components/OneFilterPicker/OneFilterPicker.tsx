import { useContext, useEffect, useMemo, useRef, useState } from "react"

import { useEventEmitter } from "@/experimental/OneDataCollection/useEventEmitter"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import type { FiltersDefinition, FiltersMode, FiltersState } from "./types"

import { FiltersChipsList as FiltersChipsListComponent } from "./components/FiltersChipsList"
import { FiltersControls as FiltersControlsComponent } from "./components/FiltersControls"
import { FiltersPresets as FiltersPresetsComponent } from "./components/FiltersPresets"
import { FiltersContext } from "./context"
import { getPresetCoveredKeys } from "./internal/getPresetCoveredKeys"
import { PresetsDefinition } from "./types"

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
export type OneFilterPickerRootProps<Definition extends FiltersDefinition> = {
  /** The definition of available filters and their configurations */
  filters?: Definition
  /** Current state of applied filters */
  value: FiltersState<Definition>
  /** Optional preset configurations that users can select */
  presets?: PresetsDefinition<Definition>
  /** Whether presets are currently loading */
  presetsLoading?: boolean
  /** Callback fired when filters are changed */
  onChange: (value: FiltersState<Definition>) => void
  /** The children of the component */
  children?: React.ReactNode
  /** The mode of the component */
  mode?: FiltersMode
  /** Callback fired when filters open state is changed */
  onOpenChange?: (isOpen: boolean) => void
}

/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for filter configuration and displays active filters as chips.
 *
 * The component supports multiple filter types through a unified interface:
 * - "in" type filters: Multi-select filters with predefined options
 * - "search" type filters: Free-text search filters
 *
 * Features:
 * - Search and multi-select filters with type safety
 * - Temporary filter state that's only applied when explicitly confirmed
 * - Animated filter chips for active filters
 * - Support for filter presets for quick selection of common filter combinations
 * - Responsive design for different viewport sizes
 *
 * The component maintains a temporary state of filters that are only applied
 * when the user explicitly clicks the "Apply Filters" button, allowing for
 * a more controlled filtering experience.
 *
 * @template Definition - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Example with multiple filter types and presets
 * <Filters
 *   schema={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" },
 *         { value: "sales", label: "Sales" }
 *       ]
 *     },
 *     search: {
 *       type: "search",
 *       label: "Search"
 *     }
 *   }}
 *   filters={{
 *     department: ["engineering"]
 *   }}
 *   presets={[
 *     {
 *       label: "Engineering Only",
 *       filter: { department: ["engineering"] }
 *     },
 *     {
 *       label: "Sales & Marketing",
 *       filter: { department: ["sales", "marketing"] }
 *     }
 *   ]}
 *   onChange={setFilters}
 * />
 * ```
 *
 * @see {@link FiltersDefinition} for detailed schema structure
 * @see {@link FiltersState} for the structure of filter state
 */
const FiltersRoot = <Definition extends FiltersDefinition>({
  filters,
  value,
  children,
  presetsLoading = false,
  mode = "default",
  onOpenChange,
  ...props
}: OneFilterPickerRootProps<Definition>) => {
  const defaultFilters = useRef(value)

  const { emitFilterChange, emitPresetClick } = useEventEmitter({
    defaultFilters: defaultFilters.current,
  })

  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  useEffect(() => {
    onOpenChange?.(isFiltersOpen)
  }, [isFiltersOpen, onOpenChange])

  const [localFiltersValue, setLocalFiltersValue] = useState(value)

  useEffect(() => {
    setLocalFiltersValue(value ?? {})
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We deep compare the filters object
  }, [JSON.stringify(filters), JSON.stringify(value)])

  const removeFilterValue = (key: keyof Definition) => {
    const newFilters = { ...localFiltersValue }
    delete newFilters[key]
    setLocalFiltersValue(newFilters as FiltersState<Definition>)
    props.onChange(newFilters as FiltersState<Definition>)
  }

  const setFiltersValue = (filters: FiltersState<Definition>) => {
    setLocalFiltersValue(filters)
    props.onChange(filters)
  }

  return (
    <FiltersContext.Provider
      value={{
        ...props,
        mode,
        presets: props.presets as PresetsDefinition<FiltersDefinition>,
        presetsLoading,
        value: localFiltersValue,
        filters: filters,
        removeFilterValue,
        setFiltersValue: (value: FiltersState<FiltersDefinition>) =>
          setFiltersValue(value as FiltersState<Definition>),
        isFiltersOpen,
        setIsFiltersOpen,
        emitFilterChange,
        emitPresetClick,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
FiltersRoot.displayName = "OneFilterPicker.Root"

/**
 * Filter controls
 */
const FiltersControls = () => {
  const {
    value,
    filters,
    isFiltersOpen,
    setIsFiltersOpen,
    setFiltersValue,
    presets,
    emitFilterChange,
    mode,
  } = useContext(FiltersContext)

  const shownFilters = filters
    ? Object.fromEntries(
        Object.entries(filters).filter(([_, filter]) => !filter.hideSelector)
      )
    : undefined

  const handleFilterChange = (filters: FiltersState<FiltersDefinition>) => {
    emitFilterChange(filters)
    setFiltersValue(filters)
  }

  if (!shownFilters || Object.keys(shownFilters).length === 0) return null

  return (
    <>
      <FiltersControlsComponent
        filters={shownFilters}
        value={value}
        onChange={handleFilterChange}
        onOpenChange={setIsFiltersOpen}
        isOpen={isFiltersOpen}
        hideLabel={!!presets || mode === "simple"}
        mode={mode}
      />
      {!!presets?.length && (
        <div className="flex items-center">
          <div className="mx-2 h-4 w-px bg-f1-background-secondary-hover" />
        </div>
      )}
    </>
  )
}
FiltersControls.displayName = "OneFilterPicker.Controls"

/**
 * Filter presets
 */
const FiltersPresets = () => {
  const { presets, presetsLoading, value, setFiltersValue, emitPresetClick } =
    useContext(FiltersContext)

  const handlePresetClick = (presetFilter: FiltersState<FiltersDefinition>) => {
    emitPresetClick(presetFilter)
    setFiltersValue(presetFilter)
  }

  return (
    presets && (
      <FiltersPresetsComponent
        presets={presets}
        presetsLoading={presetsLoading}
        value={value}
        onPresetsChange={handlePresetClick}
      />
    )
  )
}
FiltersPresets.displayName = "Filters.Presets"

/**
 * Filter chips list
 */
const FiltersChipsList = () => {
  const {
    value,
    filters,
    setIsFiltersOpen,
    presets,
    removeFilterValue,
    setFiltersValue,
  } = useContext(FiltersContext)

  // Get filter keys that are covered by currently selected presets
  const presetCoveredKeys = useMemo(() => {
    return getPresetCoveredKeys(presets, value)
  }, [presets, value])

  return (
    filters && (
      <FiltersChipsListComponent
        filters={filters}
        value={value}
        onFilterSelect={() => setIsFiltersOpen(true)}
        onFilterRemove={removeFilterValue}
        onClearAll={() => setFiltersValue({})}
        excludedKeys={presetCoveredKeys}
      />
    )
  )
}
FiltersChipsList.displayName = "OneFilterPicker.ChipsList"

/**
 * OneFiltersPicker component to use as a single component
 */
const _OneFilterPicker = <Definition extends FiltersDefinition>(
  props: OneFilterPickerRootProps<Definition>
) => {
  return (
    <FiltersRoot {...props}>
      <div
        className={cn(
          "flex items-center justify-between gap-4",
          !props.filters && "justify-end"
        )}
      >
        {props.filters && (
          <div className="flex min-w-0 flex-1 gap-1">
            <FiltersControls />
            <FiltersPresets />
          </div>
        )}
        {props.children && (
          <div className="flex shrink-0 items-center gap-2">
            {props.children}
          </div>
        )}
      </div>
      {(!props.mode || props.mode === "default") && <FiltersChipsList />}
    </FiltersRoot>
  )
}
_OneFilterPicker.displayName = "OneFilterPicker"

const OneFilterPicker = withDataTestId(_OneFilterPicker)

/**
 * Export the components as named exports to allow to customize the layout
 *
 * @example
 * ```tsx
 * <OneFiltersPicker>
 *   <div className="flex flex-col gap-2">
 *     <OneFiltersPicker.Controls />
 *     <OneFiltersPicker.Presets />
 *     <div className="flex flex-col gap-2">
 *       {children}
 *     </div>
 *   </div>
 *  <OneFiltersPicker.ChipsList />
 * </OneFiltersPicker>
 *
 * Use OneFilterPicker as a single component to get a default layout
 * ```tsx
 * <OneFilterPicker />
 * ```
 */
export {
  FiltersChipsList as ChipsList,
  FiltersControls as Controls,
  OneFilterPicker,
  FiltersPresets as Presets,
  FiltersRoot as Root,
}
