import {
  DataCollectionStorage,
  DataCollectionStorageProvider,
} from "./DataCollectionStorageProvider"

export const dataCollectionLocalStorageProvider: DataCollectionStorageProvider =
  {
    get: async (keyName: string) => {
      const key = `datacollection-${keyName}-settings`
      return JSON.parse(
        localStorage.getItem(key) ?? "{}"
      ) as DataCollectionStorage
    },
    set: async (keyName: string, settings: DataCollectionStorage) => {
      const key = `datacollection-${keyName}-settings`
      localStorage.setItem(key, JSON.stringify(settings))
    },
  }
