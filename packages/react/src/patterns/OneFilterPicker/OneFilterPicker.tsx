import type { ReactElement } from "react"
import { useContext, useEffect, useMemo, useRef, useState } from "react"

import { useEventEmitter } from "@/patterns/OneDataCollection/useEventEmitter"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { RenderErrorBoundary } from "@/lib/RenderErrorBoundary"
import { cn } from "@/lib/utils"

import type { FiltersDefinition, FiltersMode, FiltersState } from "./types"

import { collectNestedFilterKeys } from "./filterTypes/InFilter/components/option-utils"
import { FiltersChipsList as FiltersChipsListComponent } from "./components/FiltersChipsList"
import { FiltersControls as FiltersControlsComponent } from "./components/FiltersControls"
import { FiltersPresets as FiltersPresetsComponent } from "./components/FiltersPresets"
import { FiltersContext } from "./context"
import { isPresetSelected } from "./internal/isPresetSelected"
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
  /** Display counter for the applied filters */
  displayCounter?: boolean
  /** Total number of items matching the current filters, displayed as "N results for:" prefix in the chips row */
  resultCount?: number
  /**
   * Id of the currently selected preset. When provided together with
   * `onSelectPreset`, preset selection is identity-based (the preset stays
   * selected as the user changes state on top of it). When absent, the picker
   * falls back to legacy exact-filter-match selection.
   */
  selectedPresetId?: string
  /** Selects a preset by id. Enables identity-based selection. */
  onSelectPreset?: (presetId: string) => void
  /** Ids of presets that can be edited/deleted (user-created presets). */
  editablePresetIds?: string[]
  /** Opens the edit flow for a preset (hover icon on editable presets). */
  onEditPreset?: (presetId: string) => void
  /** Whether to show the dashed "Save view" chip ("save" | "none"). */
  presetActionState?: "save" | "none"
  /** Opens the preset create/update dialog. */
  onPresetAction?: () => void
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

    // Also clear nested child filter keys to avoid orphaned values
    const filterDef = filters?.[key]
    if (filterDef?.type === "in" && filterDef.options) {
      const nestedKeys = collectNestedFilterKeys(filterDef.options)
      nestedKeys.forEach((nestedKey) => {
        delete newFilters[nestedKey as keyof Definition]
      })
    }

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
    displayCounter,
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
        displayCounter={displayCounter}
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
  const {
    presets,
    presetsLoading,
    value,
    setFiltersValue,
    emitPresetClick,
    selectedPresetId,
    onSelectPreset,
    editablePresetIds,
    onEditPreset,
    presetActionState,
    onPresetAction,
  } = useContext(FiltersContext)

  const handlePresetClick = (presetFilter: FiltersState<FiltersDefinition>) => {
    emitPresetClick(presetFilter)
    setFiltersValue(presetFilter)
  }

  // In identity-based mode the owner applies the whole preset state; we still
  // emit the analytics event with the preset's filter for parity with legacy.
  const handleSelectPreset = onSelectPreset
    ? (presetId: string) => {
        const preset = presets?.find(
          (p, index) => (p.id ?? `${p.label}-${index}`) === presetId
        )
        if (preset) emitPresetClick(preset.filter)
        onSelectPreset(presetId)
      }
    : undefined

  return (
    presets && (
      // The presets row is non-critical chrome: if it throws while rendering,
      // hide it instead of unmounting the whole collection (and its fetching)
      <RenderErrorBoundary
        onError={(error) =>
          console.error(
            "[f0-react] FiltersPresets failed to render; hiding the presets row",
            error
          )
        }
      >
        <FiltersPresetsComponent
          presets={presets}
          presetsLoading={presetsLoading}
          value={value}
          onPresetsChange={handlePresetClick}
          selectedPresetId={selectedPresetId}
          onSelectPreset={handleSelectPreset}
          editablePresetIds={editablePresetIds}
          onEditPreset={onEditPreset}
          presetActionState={presetActionState}
          onPresetAction={onPresetAction}
        />
      </RenderErrorBoundary>
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
    resultCount,
    onSelectPreset,
  } = useContext(FiltersContext)

  // In identity-based mode chips stay visible while a preset is selected so the
  // user can see what they've changed on top of it. In legacy mode, hide all
  // chips when a preset exactly matches the current filters (the preset chip
  // already represents them).
  const isAnyPresetActive = useMemo(() => {
    if (onSelectPreset) return false
    if (!presets?.length) return false
    return presets.some((preset) => isPresetSelected(preset, value))
  }, [presets, value, onSelectPreset])

  return (
    filters && (
      <FiltersChipsListComponent
        filters={filters}
        value={value}
        onFilterSelect={() => setIsFiltersOpen(true)}
        onFilterRemove={removeFilterValue}
        onClearAll={() => setFiltersValue({})}
        hideChips={isAnyPresetActive}
        resultCount={resultCount}
      />
    )
  )
}
FiltersChipsList.displayName = "OneFilterPicker.ChipsList"

/**
 * OneFiltersPicker component to use as a single component
 */
const _OneFilterPicker = <Definition extends FiltersDefinition>(
  props: OneFilterPickerRootProps<Definition> & { dataTestId?: string }
) => {
  const { dataTestId, ...rootProps } = props
  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <FiltersRoot {...rootProps}>
        <div
          className={cn(
            "flex items-center justify-between gap-4",
            !rootProps.filters && "justify-end"
          )}
        >
          {rootProps.filters && (
            <div className="flex min-w-0 flex-1 gap-1">
              <FiltersControls />
              <FiltersPresets />
            </div>
          )}
          {rootProps.children && (
            <div className="flex shrink-0 items-center gap-2">
              {rootProps.children}
            </div>
          )}
        </div>
        {(!rootProps.mode || rootProps.mode === "default") && (
          <FiltersChipsList />
        )}
      </FiltersRoot>
    </DataTestIdWrapper>
  )
}
_OneFilterPicker.displayName = "OneFilterPicker"

const OneFilterPicker = _OneFilterPicker as <
  Definition extends FiltersDefinition,
>(
  props: OneFilterPickerRootProps<Definition> & { dataTestId?: string }
) => ReactElement | null

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
