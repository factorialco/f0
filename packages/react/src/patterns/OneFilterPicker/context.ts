import { createContext } from "react"

import {
  FiltersDefinition,
  FiltersMode,
  FiltersState,
  PresetsDefinition,
} from "./types"

export type FiltersContextType<Definition extends FiltersDefinition> = {
  filters: Definition | undefined
  value: FiltersState<Definition>
  presets?: PresetsDefinition<Definition>
  presetsLoading?: boolean
  removeFilterValue: (key: keyof Definition) => void
  setFiltersValue: (filters: FiltersState<Definition>) => void
  isFiltersOpen: boolean
  setIsFiltersOpen: (isOpen: boolean) => void
  emitFilterChange: (filters: FiltersState<Definition>) => void
  emitPresetClick: (filters: FiltersState<Definition>) => void
  mode?: FiltersMode
  displayCounter?: boolean
  /** Total number of items matching the current filters, displayed as "N results for:" prefix in the chips row */
  resultCount?: number
  /**
   * Id of the currently selected preset. When provided (together with
   * `onSelectPreset`), preset selection is identity-based: the preset stays
   * selected even as the user changes filters/sorting/etc. on top of it. When
   * absent, the picker falls back to legacy exact-filter-match selection.
   */
  selectedPresetId?: string
  /** Selects a preset by id. Enables identity-based selection (see above). */
  onSelectPreset?: (presetId: string) => void
  /** Ids of presets that can be edited/deleted (user-created presets). */
  editablePresetIds?: string[]
  /** Opens the edit flow for a preset (hover icon on editable presets). */
  onEditPreset?: (presetId: string) => void
  /**
   * Which preset action button to show next to "Clear":
   * - "persist": current state diverges from the selected (editable) preset
   * - "save": there are unsaved changes and no editable preset is selected
   * - "none": no action available
   */
  presetActionState?: "save" | "persist" | "none"
  /** Opens the preset create/update dialog. */
  onPresetAction?: () => void
}

export const FiltersContext = createContext<
  FiltersContextType<FiltersDefinition>
>({
  filters: {},
  value: {},
  presets: [],
  presetsLoading: false,
  removeFilterValue: () => {},
  setFiltersValue: () => {},
  isFiltersOpen: false,
  setIsFiltersOpen: () => {},
  emitFilterChange: () => {},
  emitPresetClick: () => {},
  mode: "default",
  displayCounter: false,
  resultCount: undefined,
  selectedPresetId: undefined,
  onSelectPreset: undefined,
  editablePresetIds: undefined,
  onEditPreset: undefined,
  presetActionState: "none",
  onPresetAction: undefined,
})
