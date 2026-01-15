import { useDataCollectionStorage as useDataCollectionStorageProvider } from "@/lib/providers/datacollection/DataCollectionStorageProvider"
import { useEffect, useMemo, useState } from "react"
import { useDebounceCallback } from "usehooks-ts"
import { getFeatures } from "./getFeatures"
import {
  DataCollectionStatus,
  DataCollectionStorageFeature,
  DataCollectionStorageFeaturesDefinition,
  FeatureProviders,
} from "./types"

import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { validateStorageKey } from "./validateStorageKey"

type UseDataCollectionStorage = {
  storageReady: boolean
}

/**
 * Gets and sets the data collection settings in storage
 * @param key - The storage key
 * @param featuresDef - The features definition
 * @param settings - The settings
 * @returns The settings in storage and the settings storage ready
 */

export const useDataCollectionStorage = <
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
  Sortings extends SortingsDefinition,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
>(
  key: string | undefined,
  featuresDef: DataCollectionStorageFeaturesDefinition,
  featureProviders: FeatureProviders<
    R,
    Grouping,
    Sortings,
    Filters,
    NavigationFilters
  >,
  disabled?: boolean
): UseDataCollectionStorage => {
  const [storageReady, setStorageReady] = useState(false)

  const storageProvider = useDataCollectionStorageProvider()

  /* Validate the storage key */
  if (key && !validateStorageKey(key)) {
    console.error(
      `Invalid storage key format: "${key}". ` +
        `Key must follow the format "name/version" where name can be a path ` +
        `(e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
    )
  }

  const storageFeatures = useMemo(
    // Settings is always included
    () => [...getFeatures(featuresDef), "settings"],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
    [JSON.stringify(featuresDef)]
  )

  const active = useMemo(() => {
    return !disabled && !!key
  }, [disabled, key])

  /** Gets the settings in storage when the key and features change */
  useEffect(() => {
    if (!active) {
      // If storage is disabled or no key provided, we consider the storage ready
      setStorageReady(true)
      return
    }

    storageProvider.get(key!).then((status) => {
      Object.entries(featureProviders).forEach(
        ([featureName, featureProvider]) => {
          if (
            storageFeatures.includes(
              featureName as DataCollectionStorageFeature
            )
          ) {
            const featureValue =
              status[
                featureName as keyof DataCollectionStatus<FiltersState<Filters>>
              ]
            if (featureValue !== undefined) {
              ;(featureProvider.setValue as (value: unknown) => void)(
                featureValue
              )
            }
          }
        }
      )
    })

    setStorageReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only run when key changes
  }, [key, active])

  const serializedFeatureValues = useMemo(
    () =>
      JSON.stringify(
        Object.entries(featureProviders).map(
          ([providerName, featureProvider]) => [
            providerName,
            featureProvider.value,
          ]
        )
      ),
    [featureProviders]
  )

  const debouncedSetFeatures = useDebounceCallback(
    (
      featureProviders: FeatureProviders<
        R,
        Grouping,
        Sortings,
        Filters,
        NavigationFilters
      >
    ) => {
      if (!active || !storageReady) {
        return
      }

      // Status
      const featuresToSave = Object.fromEntries(
        Object.entries(featureProviders)
          .map(([featureName, featureProvider]) => {
            if (storageFeatures.includes(featureName)) {
              return [featureName, featureProvider.value]
            }
            return [featureName, undefined]
          })
          .filter(([_, value]) => value !== undefined)
      )
      // If no features to save, we don't need to save anything
      if (Object.keys(featuresToSave).length === 0) {
        storageProvider.set(key!, {})
        return
      }
      storageProvider.set(key!, featuresToSave)
    },
    200
  )

  /** Saves the settings in storage when the settings change */
  useEffect(() => {
    debouncedSetFeatures(featureProviders)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
  }, [
    key,
    storageFeatures,
    storageProvider,
    storageReady,
    serializedFeatureValues,
  ])

  return {
    storageReady,
  }
}
