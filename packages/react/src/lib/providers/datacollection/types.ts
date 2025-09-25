import { DataCollectionStatus } from "@/experimental/OneDataCollection/hooks/useDataColectionStorage/types"
import { DataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"

export type DataCollectionStorage = {
  settings?: DataCollectionSettings
} & DataCollectionStatus

export type DataCollectionStorageHandler = {
  get: (key: string) => Promise<DataCollectionStorage>
  set: (key: string, storage: DataCollectionStorage) => Promise<void>
}
