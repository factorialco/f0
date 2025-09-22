import { DataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"
import { DataCollectionStorageProvider } from "./DataCollectionStorageProvider"

export const localStorageProvider: DataCollectionStorageProvider = {
  settings: {
    get: async (keyName: string) => {
      const key = `datacollection-${keyName}-settings`
      return JSON.parse(localStorage.getItem(key) ?? "{}")
    },
    set: async (keyName: string, settings: DataCollectionSettings) => {
      const key = `datacollection-${keyName}-settings`
      localStorage.setItem(key, JSON.stringify(settings))
    },
  },
}
