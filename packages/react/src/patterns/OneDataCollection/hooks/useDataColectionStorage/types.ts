import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  RecordType,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource"
import { PresetsDefinition } from "@/patterns/OneFilterPicker/types"

import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"
import { DataCollectionSettings } from "../../Settings/SettingsProvider"

/**
 * The status of the data collection
 */
export type DataCollectionStatus<
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
> = {
  grouping?: GroupingState<RecordType, GroupingDefinition<RecordType>>
  sortings?: SortingsState<SortingsDefinition>
  filters?: CurrentFiltersState
  search?: string | undefined
  navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>
  visualization?: number
  /** Per-visualization filter states, keyed by visualization index.
   *  Only present when visualizations declare per-view filter overrides. */
  visualizationFilters?: Record<string, CurrentFiltersState>
  /** User-created custom presets persisted alongside the rest of the state. */
  customPresets?: PresetsDefinition<FiltersDefinition>
}

export type DataCollectionStatusComplete<
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
> = DataCollectionStatus<CurrentFiltersState> & {
  settings?: DataCollectionSettings
}

/**
 * The available features of the data collection status storage
 */
export const dataCollectionStorageFeatures = [
  "filters",
  "navigationFilters",
  "sortings",
  "grouping",
  "visualization",
  "search",
  "visualizationFilters",
] as const

export type DataCollectionStorageFeature =
  (typeof dataCollectionStorageFeatures)[number]

export type DataCollectionStorageFeaturesDefinition = (
  | "*"
  | `all`
  | `!${DataCollectionStorageFeature}`
  | `${DataCollectionStorageFeature}`
)[]

/**
 * The feature providers for the data collection storage
 */
export type FeatureProviders<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
  Sortings extends SortingsDefinition,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = {
  settings?: {
    value: DataCollectionSettings
    setValue: React.Dispatch<React.SetStateAction<DataCollectionSettings>>
  }
  grouping?: {
    value: GroupingState<R, Grouping>
    setValue: React.Dispatch<React.SetStateAction<GroupingState<R, Grouping>>>
  }
  sortings?: {
    value: SortingsState<Sortings>
    setValue: React.Dispatch<React.SetStateAction<SortingsState<Sortings>>>
  }
  visualization?: {
    value: number
    setValue: React.Dispatch<React.SetStateAction<number>>
  }
  search?: {
    value: string | undefined
    setValue: (value: string | undefined) => void
  }
  filters?: {
    value: FiltersState<Filters>
    setValue: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
  }
  navigationFilters?: {
    value: NavigationFiltersState<NavigationFilters>
    setValue: React.Dispatch<
      React.SetStateAction<NavigationFiltersState<NavigationFilters>>
    >
  }
  visualizationFilters?: {
    value: Record<string, FiltersState<Filters>>
    setValue: (value: Record<string, FiltersState<Filters>>) => void
  }
  customPresets?: {
    value: PresetsDefinition<Filters>
    setValue: React.Dispatch<React.SetStateAction<PresetsDefinition<Filters>>>
  }
}
