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
})
