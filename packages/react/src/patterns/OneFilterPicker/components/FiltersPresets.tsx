import { useMemo } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Add } from "@/icons/app"
import { Await } from "@/lib/Await"
import { useI18n } from "@/lib/providers/i18n"
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
  /** Id of the selected preset for identity-based selection. */
  selectedPresetId?: string
  /** Selects a preset by id. When provided, selection is identity-based. */
  onSelectPreset?: (presetId: string) => void
  /** Ids of presets that can be edited/deleted (i.e. user-created). */
  editablePresetIds?: string[]
  /** Opens the edit flow for a preset (shown as a hover icon on editable presets). */
  onEditPreset?: (presetId: string) => void
  /**
   * When "save", a dashed "Save view" chip is shown at the end of the row.
   */
  presetActionState?: "save" | "none"
  /** Opens the create-view dialog (used by the "Save view" chip). */
  onPresetAction?: () => void
}

const NUMBER_OF_SKELETON_ITEMS = 4

/** A heterogeneous row item: a preset chip or a group separator. */
type PresetRowItem<Filters extends FiltersDefinition> =
  | {
      kind: "preset"
      preset: PresetsDefinition<Filters>[number]
      presetId: string
      key: string
    }
  | { kind: "separator"; key: string }
  | { kind: "save"; key: string }

export const FiltersPresets = <Filters extends FiltersDefinition>({
  presets,
  value,
  onPresetsChange,
  presetsLoading = false,
  selectedPresetId,
  onSelectPreset,
  editablePresetIds,
  onEditPreset,
  presetActionState = "none",
  onPresetAction,
}: FilterPresetsProps<Filters>) => {
  const i18n = useI18n()

  // Ensure value is always a valid object, never null or undefined
  const safeValue = useMemo(() => {
    return value != null && typeof value === "object" && !Array.isArray(value)
      ? value
      : ({} as FiltersState<Filters>)
  }, [value])

  /**
   * Computes the selection state and click handler for a preset.
   *
   * Two modes:
   * - Identity-based (when `onSelectPreset` is provided): the preset is selected
   *   when its id matches `selectedPresetId`; clicking delegates to the owner,
   *   which applies the preset's full captured state. The preset stays selected
   *   even as the user changes filters/sorting on top of it.
   * - Legacy (no `onSelectPreset`): selection is inferred by exact filter match;
   *   clicking replaces all filters, and clicking the selected preset clears them.
   */
  const getPresetState = (
    preset: PresetsDefinition<Filters>[number],
    presetId: string
  ) => {
    if (onSelectPreset) {
      return {
        isSelected: presetId === selectedPresetId,
        handleClick: () => onSelectPreset(presetId),
      }
    }

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

  // Build the row items: developer presets, then (if both groups exist) a
  // separator, then custom (editable) presets. Order within `validPresets` is
  // preserved (the owner appends custom presets after the developer ones).
  const rowItems = useMemo<PresetRowItem<Filters>[]>(() => {
    const items = validPresets.map((preset, index) => ({
      preset,
      presetId: preset.id ?? `${preset.label}-${index}`,
      key: `${preset.label}-${index}`,
    }))
    const isCustom = (presetId: string) =>
      editablePresetIds?.includes(presetId) ?? false
    const devItems = items.filter((it) => !isCustom(it.presetId))
    const customItems = items.filter((it) => isCustom(it.presetId))

    const toRow = (it: (typeof items)[number]): PresetRowItem<Filters> => ({
      kind: "preset",
      ...it,
    })

    return [
      ...devItems.map(toRow),
      ...(devItems.length > 0 && customItems.length > 0
        ? [{ kind: "separator", key: "preset-group-separator" } as const]
        : []),
      ...customItems.map(toRow),
    ]
  }, [validPresets, editablePresetIds])

  // The "Save as preset" action renders as the last item in the list, right
  // next to the last preset (it can collapse into the overflow dropdown).
  const allRowItems = useMemo<PresetRowItem<Filters>[]>(
    () =>
      presetActionState === "save"
        ? [...rowItems, { kind: "save", key: "save-as-preset" }]
        : rowItems,
    [rowItems, presetActionState]
  )

  const renderListItem = (
    item: PresetRowItem<Filters>,
    _index: number,
    isVisible = true
  ) => {
    if (item.kind === "separator") {
      return (
        <div
          className="mx-1 flex items-center"
          data-visible={isVisible}
          data-testid="preset-group-separator"
        >
          <div className="h-4 w-px bg-f1-background-secondary-hover" />
        </div>
      )
    }

    if (item.kind === "save") {
      return (
        <button
          type="button"
          data-visible={isVisible}
          onClick={() => onPresetAction?.()}
          className={cn(
            "flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded px-2.5 py-1.5 font-medium text-f1-foreground opacity-60 outline-dashed outline-1 outline-f1-border transition-opacity hover:opacity-100",
            focusRing()
          )}
        >
          <F0Icon icon={Add} size="sm" />
          {i18n.actions.saveAsPreset}
        </button>
      )
    }

    const { preset, presetId } = item
    const { isSelected, handleClick } = getPresetState(preset, presetId)
    const presetNumber = preset.itemsCount?.(safeValue)
    const isEditable = editablePresetIds?.includes(presetId) ?? false

    return (
      <Preset
        label={preset.label}
        description={preset.description}
        selected={isSelected}
        onClick={handleClick}
        data-visible={isVisible}
        number={presetNumber}
        onEdit={
          isEditable && onEditPreset ? () => onEditPreset(presetId) : undefined
        }
      />
    )
  }

  const renderDropdownItem = (item: PresetRowItem<Filters>) => {
    if (item.kind === "separator") {
      return <div className="my-1 h-px w-full bg-f1-border-secondary" />
    }

    if (item.kind === "save") {
      return (
        <button
          type="button"
          onClick={() => onPresetAction?.()}
          className={cn(
            "flex w-full cursor-pointer items-center gap-1 rounded-sm p-2 text-left font-medium text-f1-foreground opacity-70 hover:bg-f1-background-secondary hover:opacity-100",
            focusRing()
          )}
        >
          <F0Icon icon={Add} size="sm" />
          {i18n.actions.saveAsPreset}
        </button>
      )
    }

    const { preset, presetId } = item
    const { isSelected, handleClick } = getPresetState(preset, presetId)
    const presetNumber = preset.itemsCount?.(safeValue)

    return (
      <button
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

  if (allRowItems.length === 0) {
    return null
  }

  return (
    <OverflowList
      items={allRowItems}
      renderListItem={renderListItem}
      renderDropdownItem={renderDropdownItem}
      className="min-w-0 flex-1"
      min={1}
    />
  )
}
