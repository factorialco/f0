import type { DataCollectionSettings } from "../Settings/SettingsProvider"

import {
  createInitialVisualizationSettings,
  type VisualizationSettings,
} from "../Settings/visualizationSettings"

/**
 * Builds the same default shape produced by the settings provider on first
 * mount. Used both as the reset target and as the baseline for dirty detection.
 */
export const getDefaultDataCollectionSettings = (): DataCollectionSettings => {
  return {
    visualization: createInitialVisualizationSettings(),
  }
}

/**
 * Whether the settings for a single visualization match its registry default.
 * Mirrors the per-visualization comparison previously inlined in `Settings`.
 */
export const isVisualizationSettingsDefault = (
  settings: DataCollectionSettings,
  visualizationType: string | undefined
): boolean => {
  const defaultSettings = createInitialVisualizationSettings()
  if (!visualizationType || !(visualizationType in defaultSettings)) {
    return true
  }

  const key = visualizationType as keyof VisualizationSettings
  const currentSettings = settings.visualization[key]

  return (
    JSON.stringify(currentSettings) === JSON.stringify(defaultSettings[key])
  )
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
