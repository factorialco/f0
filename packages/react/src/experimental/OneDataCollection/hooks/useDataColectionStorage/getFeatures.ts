import {
  DataCollectionStorageFeature,
  dataCollectionStorageFeatures,
  DataCollectionStorageFeaturesDefinition,
} from "./types"

const ALL_FEATURES_TOKENS = ["*", "all"]

/**
 * Calculate the features to use for the data collection storage
 * @param features
 * @returns
 */
export const getFeatures = (
  features: DataCollectionStorageFeaturesDefinition | undefined
) => {
  const res: Set<DataCollectionStorageFeature> = new Set()
  if (!features) {
    return []
  }
  if (features.some((feature) => ALL_FEATURES_TOKENS.includes(feature))) {
    dataCollectionStorageFeatures.forEach((feature) => {
      res.add(feature)
    })
  }

  features
    .filter((feature) => !ALL_FEATURES_TOKENS.includes(feature))
    .forEach((feature) => {
      if (feature.startsWith("!")) {
        res.delete(feature.slice(1) as DataCollectionStorageFeature)
      } else {
        res.add(feature as DataCollectionStorageFeature)
      }
    })
  return Array.from(res)
}
