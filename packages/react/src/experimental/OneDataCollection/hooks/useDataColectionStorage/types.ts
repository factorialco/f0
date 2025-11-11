import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  RecordType,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource"
import { DataCollectionSettings } from "../../Settings/SettingsProvider"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"

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
}
