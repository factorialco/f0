import { Counter } from "@/experimental/Information/Counter"
import { Preset } from "@/experimental/OnePreset"
import { cn, focusRing } from "@/lib/utils"
import { OverflowList } from "@/ui/OverflowList"
import { FiltersDefinition, FiltersState, PresetsDefinition } from "../types"

interface FilterPresetsProps<Filters extends FiltersDefinition> {
  value: FiltersState<Filters>
  onPresetsChange: (filter: FiltersState<Filters>) => void
  presets: PresetsDefinition<Filters>
}

export const FiltersPresets = <Filters extends FiltersDefinition>({
  presets,
  value,
  onPresetsChange,
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
