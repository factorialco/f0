export const dataCollectionStorageFeatures = [
  "filters",
  "sortings",
  "grouping",
  "search",
] as const

export type DataCollectionStorageFeature =
  (typeof dataCollectionStorageFeatures)[number]

export type DataCollectionStorageFeaturesDefinition = (
  | "*"
  | `all`
  | `!${DataCollectionStorageFeature}`
  | `${DataCollectionStorageFeature}`
)[]
