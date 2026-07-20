import { getDataCollectionStorageKey } from "./dataCollectionStorageKey"
import { DataCollectionStorage, DataCollectionStorageHandler } from "./types"

export const dataCollectionLocalStorageHandler: DataCollectionStorageHandler = {
  get: async (keyName: string) => {
    return JSON.parse(
      localStorage.getItem(getDataCollectionStorageKey(keyName)) ?? "{}"
    ) as DataCollectionStorage
  },
  set: async (keyName: string, settings: DataCollectionStorage) => {
    localStorage.setItem(
      getDataCollectionStorageKey(keyName),
      JSON.stringify(settings)
    )
  },
}
