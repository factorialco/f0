import { Counter } from "@/experimental/Information/Counter"
import { Preset } from "@/experimental/OnePreset"
import { cn, focusRing } from "@/lib/utils"
import { OverflowList } from "@/ui/OverflowList"
import { Skeleton } from "@/ui/skeleton"
import { FiltersDefinition, FiltersState, PresetsDefinition } from "../types"

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
  const renderListPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number,
    isVisible = true
  ) => {
    const isSelected = JSON.stringify(preset.filter) === JSON.stringify(value)

    return (
      <Preset
        key={index}
        label={preset.label}
        selected={isSelected}
        onClick={() =>
          onPresetsChange?.(
            isSelected ? ({} as FiltersState<Filters>) : preset.filter
          )
        }
        data-visible={isVisible}
        number={preset.itemsCount?.(value) ?? undefined}
      />
    )
  }

  const renderDropdownPresetItem = (
    preset: NonNullable<typeof presets>[number],
    index: number
  ) => {
    const isSelected = JSON.stringify(preset.filter) === JSON.stringify(value)
    return (
      <button
        key={index}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary",
          isSelected &&
            "bg-f1-background-selected hover:bg-f1-background-selected",
          focusRing()
        )}
        onClick={() =>
          onPresetsChange?.(
            isSelected ? ({} as FiltersState<Filters>) : preset.filter
          )
        }
        data-visible={true}
      >
        {preset.label}
        <Counter
          value={Object.keys(preset.filter).length}
          type={isSelected ? "selected" : "default"}
        />
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
    presets &&
    presets.length > 0 && (
      <OverflowList
        items={presets}
        renderListItem={renderListPresetItem}
        renderDropdownItem={renderDropdownPresetItem}
        className="min-w-0 flex-1"
      />
    )
  )
}
