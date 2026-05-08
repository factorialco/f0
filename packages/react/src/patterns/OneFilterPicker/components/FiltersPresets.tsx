import { useMemo } from "react"

import { Await } from "@/lib/Await"
import { cn, focusRing } from "@/lib/utils"
import { Counter } from "@/ui/Counter"
import { Preset } from "@/ui/OnePreset"
import { OverflowList } from "@/ui/OverflowList"
import { Skeleton } from "@/ui/skeleton"

import { FiltersDefinition, FiltersState, PresetsDefinition } from "../types"
import { isPresetSelected } from "../internal/isPresetSelected"

interface FilterPresetsProps<Filters extends FiltersDefinition> {
  value: FiltersState<Filters>
  onPresetsChange: (filter: FiltersState<Filters>) => void
  presets: PresetsDefinition<Filters>
  presetsLoading?: boolean
}

const NUMBER_OF_SKELETON_ITEMS = 4

export const FiltersPresets = <Filters extends FiltersDefinition>({
  presets,
  value,
  onPresetsChange,
  presetsLoading = false,
}: FilterPresetsProps<Filters>) => {
  // Ensure value is always a valid object, never null or undefined
  const safeValue = useMemo(() => {
    return value != null && typeof value === "object" && !Array.isArray(value)
      ? value
      : ({} as FiltersState<Filters>)
  }, [value])

  /**
   * Computes the selection state and click handler for a preset.
   * Presets replace all current filters when selected and clear all filters when deselected.
   * A preset is considered selected only when the current filters exactly match the preset's filter.
   */
  const getPresetState = (preset: NonNullable<typeof presets>[number]) => {
    const selected = isPresetSelected(preset, safeValue)

    const handleClick = () => {
      if (selected) {
        // Clear all filters when deselecting a preset
        onPresetsChange?.({} as FiltersState<Filters>)
      } else {
        // Replace all current filters with the preset's filter
        onPresetsChange?.({ ...preset.filter })
      }
    }

    return { isSelected: selected, handleClick }
  }

  const renderListPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number,
    isVisible = true
  ) => {
    const { isSelected, handleClick } = getPresetState(preset)
    const presetNumber = preset.itemsCount?.(safeValue)

    return (
      <Preset
        key={`${preset.label}-${index}`}
        label={preset.label}
        selected={isSelected}
        onClick={handleClick}
        data-visible={isVisible}
        number={presetNumber}
      />
    )
  }

  const renderDropdownPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number
  ) => {
    const { isSelected, handleClick } = getPresetState(preset)
    const presetNumber = preset.itemsCount?.(safeValue)

    return (
      <button
        key={`${preset.label}-${index}`}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary",
          isSelected &&
            "bg-f1-background-selected hover:bg-f1-background-selected",
          focusRing()
        )}
        onClick={handleClick}
        data-visible={true}
      >
        {preset.label}
        {presetNumber !== undefined && (
          <Await
            resolve={presetNumber}
            fallback={<Skeleton className="h-4 w-6" />}
          >
            {(number) =>
              number !== undefined && (
                <Counter
                  value={number}
                  type={isSelected ? "selected" : "default"}
                />
              )
            }
          </Await>
        )}
      </button>
    )
  }

  const renderSkeletonItem = (_: number, index: number, isVisible = true) => (
    <Skeleton
      key={index}
      className="h-8 w-32 rounded-md"
      data-visible={isVisible}
    />
  )

  const renderDropdownSkeletonItem = (_: number, index: number) => (
    <div
      key={index}
      className="flex w-full items-center justify-between rounded-sm p-2"
      data-visible={true}
    >
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-6" />
    </div>
  )

  // Filter out presets with invalid filters
  const validPresets = useMemo(() => {
    if (!presets || presets.length === 0) return []
    return presets.filter(
      (preset) =>
        preset &&
        preset.filter != null &&
        typeof preset.filter === "object" &&
        !Array.isArray(preset.filter)
    )
  }, [presets])

  // Show skeleton when loading
  if (presetsLoading) {
    const skeletonItems = Array.from(
      { length: NUMBER_OF_SKELETON_ITEMS },
      (_, index) => index
    )
    return (
      <OverflowList
        items={skeletonItems}
        renderListItem={renderSkeletonItem}
        renderDropdownItem={renderDropdownSkeletonItem}
        className="min-w-0 flex-1"
      />
    )
  }

  return (
    validPresets.length > 0 && (
      <OverflowList
        items={validPresets}
        renderListItem={renderListPresetItem}
        renderDropdownItem={renderDropdownPresetItem}
        className="min-w-0 flex-1"
        min={1}
      />
    )
  )
}
