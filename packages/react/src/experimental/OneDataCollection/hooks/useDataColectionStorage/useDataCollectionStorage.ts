import { useDataCollectionStorage as useDataCollectionStorageProvider } from "@/lib/providers/datacollection/DataCollectionStorageProvider"
import { useEffect } from "react"
import { DataCollectionSettings } from "../../Settings/SettingsProvider"
import { getFeatures } from "./getFeatures"
import { DataCollectionStorageFeaturesDefinition } from "./types"
import { validateStorageKey } from "./validateStorageKey"

export const useDataCollectionStorage = (
  key: string,
  featuresDef: DataCollectionStorageFeaturesDefinition,
  settings: DataCollectionSettings
) => {
  const { settings: settingsProvider } = useDataCollectionStorageProvider()

  if (!key) {
    key = "default"
  }

  /* Validate the storage key */
  if (!validateStorageKey(key)) {
    console.error(
      `Invalid storage key format: "${key}". ` +
        `Key must follow the format "name/version" where name can be a path ` +
        `(e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
    )
  }

  const storageFeatures = getFeatures(featuresDef)

  useEffect(() => {
    settingsProvider.get(key).then((settings) => {
      console.log("settings", settings)
    })
  }, [key, storageFeatures, settingsProvider])

  useEffect(() => {
    settingsProvider.set(key, settings)
  }, [key, storageFeatures, settingsProvider, JSON.stringify(settings)])

  return {
    settings: settingsProvider.get(key),
  }
}
