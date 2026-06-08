import { DataCollectionSettings } from "../Settings/SettingsProvider"
import { collectionVisualizations } from "../visualizations/collection"

/**
 * Builds the default `DataCollectionSettings` from the visualization registry —
 * the same shape produced by the settings provider on first mount. Used both as
 * the reset target and as the baseline for dirty detection.
 */
export const getDefaultDataCollectionSettings = (): DataCollectionSettings => {
  const visualization = {} as Record<string, unknown>

  for (const [key, viz] of Object.entries(collectionVisualizations)) {
    if (viz.settings.default) {
      visualization[key] = { ...viz.settings.default }
    }
  }

  return {
    visualization,
  } as DataCollectionSettings
}

/**
 * Whether the settings for a single visualization match its registry default.
 * Mirrors the per-visualization comparison previously inlined in `Settings`.
 */
export const isVisualizationSettingsDefault = (
  settings: DataCollectionSettings,
  visualizationType: string | undefined
): boolean => {
  if (!visualizationType || !(visualizationType in collectionVisualizations)) {
    return true
  }

  const key = visualizationType as keyof typeof collectionVisualizations
  const currentSettings = settings.visualization[key]
  const defaultSettings = collectionVisualizations[key]?.settings.default

  return JSON.stringify(currentSettings) === JSON.stringify(defaultSettings)
}

/**
 * Whether the whole settings object matches the registry defaults across every
 * visualization. Used for dirty detection against the baseline.
 */
export const isSettingsDefault = (
  settings: DataCollectionSettings
): boolean => {
  return (
    JSON.stringify(settings) ===
    JSON.stringify(getDefaultDataCollectionSettings())
  )
}
