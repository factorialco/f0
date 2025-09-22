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
    return null
  }

  /* Validate the storage key */
  if (!validateStorageKey(key)) {
    throw new Error(
      `Invalid storage key format: "${key}". ` +
        `Key must follow the format "name/version" where name can be a path ` +
        `(e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
    )
  }

  const storageFeatures = getFeatures(featuresDef)

  useEffect(() => {
    settingsProvider.set(key, {
      visualization: storageFeatures,
    })
  }, [key, storageFeatures, settings])

  return {
    settings: settingsProvider.get(key),
  }
}
