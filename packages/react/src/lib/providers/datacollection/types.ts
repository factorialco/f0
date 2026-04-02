import {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { DataCollectionStatus } from "@/patterns/OneDataCollection/hooks/useDataColectionStorage/types"
import { DataCollectionSettings } from "@/patterns/OneDataCollection/Settings/SettingsProvider"

export type DataCollectionStorage<
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
> = {
  settings?: DataCollectionSettings
} & DataCollectionStatus<CurrentFiltersState>

export type DataCollectionStorageHandler<
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
> = {
  get: (key: string) => Promise<DataCollectionStorage<CurrentFiltersState>>
  set: (
    key: string,
    storage: DataCollectionStorage<CurrentFiltersState>
  ) => Promise<void>
}
