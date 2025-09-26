import React, { createContext, useContext, useState } from "react"
import { collectionVisualizations } from "../visualizations/collection/collectionViewRegistry"

// Utility type to extract settings from visualization definitions
type ExtractVisualizationSettings<T> = T extends { settings: infer S }
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
    if (visualization.settings) {
      settings[key] = { ...visualization.settings }
    }
  }

  return settings as VisualizationSettings
}

export interface DataCollectionSettingsContextType {
  setSettings: React.Dispatch<React.SetStateAction<DataCollectionSettings>>
  settings: DataCollectionSettings
}

const DataCollectionSettingsContext =
  createContext<DataCollectionSettingsContextType>({
    setSettings: () => {},
    settings: {
      // To avoid circular dependency initializating the settings (the value is provided in the provider)
      visualization: {} as VisualizationSettings,
    },
  })

export const useDataCollectionSettings = () => {
  const context = useContext(DataCollectionSettingsContext)
  if (!context) {
    throw new Error(
      "useTableSettings must be used within a TableSettingsProvider"
    )
  }
  return context
}

export const DataCollectionSettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<DataCollectionSettings>({
    visualization: generateInitialVisualizationSettings(),
  })

  return (
    <DataCollectionSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </DataCollectionSettingsContext.Provider>
  )
}
