import {
  DataCollectionStorage,
  DataCollectionStorageHandler,
} from "./DataCollectionStorageProvider"

const getKey = (keyName: string) => `datacollection-${keyName}`
export const dataCollectionLocalStorageHandler: DataCollectionStorageHandler = {
  get: async (keyName: string) => {
    return JSON.parse(
      localStorage.getItem(getKey(keyName)) ?? "{}"
    ) as DataCollectionStorage
  },
  set: async (keyName: string, settings: DataCollectionStorage) => {
    localStorage.setItem(getKey(keyName), JSON.stringify(settings))
  },
}
