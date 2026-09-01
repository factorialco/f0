import React, { createContext, useContext, useState } from "react"

import {
  createInitialVisualizationSettings,
  type VisualizationSettings,
} from "./visualizationSettings"

export type { VisualizationSettings } from "./visualizationSettings"

export type DataCollectionSettings = {
  visualization: VisualizationSettings
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

const DataCollectionSettingsContext =
  createContext<DataCollectionSettingsContextType>({
    setSettings: () => {},
    settings: {
      visualization: createInitialVisualizationSettings(),
    },
    setVisualizationSettings: () => {},
  })

export const useDataCollectionSettings = () => {
  return useContext(DataCollectionSettingsContext)
}

export const DataCollectionSettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<DataCollectionSettings>({
    visualization: createInitialVisualizationSettings(),
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
