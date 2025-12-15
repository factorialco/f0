import React, { createContext, useContext, useState } from "react"
import { collectionVisualizations } from "../visualizations/collection/collectionViewRegistry"

// Utility type to extract settings from visualization definitions
type ExtractVisualizationSettings<T> = T extends {
  settings: {
    default: infer S
  }
}
  ? S
  : never

// Dynamic type that extracts settings from all visualizations
type VisualizationSettings = {
  [K in keyof typeof collectionVisualizations]: ExtractVisualizationSettings<
    (typeof collectionVisualizations)[K]
  >
}

export type DataCollectionSettings = {
  // Dynamically generated from visualization definitions
  visualization: VisualizationSettings
}

// Helper function to generate initial settings from visualization registry
const generateInitialVisualizationSettings = (): VisualizationSettings => {
  const settings = {} as Record<string, unknown>

  for (const [key, visualization] of Object.entries(collectionVisualizations)) {
    if (visualization.settings.default) {
      settings[key] = { ...visualization.settings.default }
    }
  }

  return settings as VisualizationSettings
}

export interface DataCollectionSettingsContextType {
  setSettings: React.Dispatch<React.SetStateAction<DataCollectionSettings>>
  settings: DataCollectionSettings
  setVisualizationSettings: (
    key: keyof VisualizationSettings,
    settings:
      | VisualizationSettings[keyof VisualizationSettings]
      | ((
          prev: VisualizationSettings[keyof VisualizationSettings]
        ) => VisualizationSettings[keyof VisualizationSettings])
  ) => void
}

const DataCollectionSettingsContext = createContext<DataCollectionSettingsContextType>({
  setSettings: () => {},
  settings: {
    // To avoid circular dependency initializating the settings (the value is provided in the provider)
    visualization: {} as VisualizationSettings,
  },
  setVisualizationSettings: () => {},
})

export const useDataCollectionSettings = () => {
  const context = useContext(DataCollectionSettingsContext)
  if (!context) {
    throw new Error("useTableSettings must be used within a TableSettingsProvider")
  }
  return context
}

export const DataCollectionSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<DataCollectionSettings>({
    visualization: generateInitialVisualizationSettings(),
  })

  const setVisualizationSettings = (
    key: keyof VisualizationSettings,
    settings:
      | VisualizationSettings[keyof VisualizationSettings]
      | ((
          prevVisualiztionSettings: VisualizationSettings[keyof VisualizationSettings]
        ) => VisualizationSettings[keyof VisualizationSettings])
  ) => {
    if (typeof settings === "function") {
      setSettings((prev) => ({
        ...prev,
        visualization: {
          ...prev.visualization,
          [key]: settings(prev.visualization[key]),
        },
      }))
    } else {
      setSettings((prev) => ({
        ...prev,
        visualization: { ...prev.visualization, [key]: settings },
      }))
    }
  }

  return (
    <DataCollectionSettingsContext.Provider
      value={{ settings, setSettings, setVisualizationSettings }}
    >
      {children}
    </DataCollectionSettingsContext.Provider>
  )
}
