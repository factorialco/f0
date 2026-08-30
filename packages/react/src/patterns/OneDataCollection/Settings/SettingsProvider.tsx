import React, { createContext, useContext, useState } from "react"

import type { EditableTableVisualizationSettings } from "../visualizations/collection/EditableTable/types"
import type { GraphVisualizationSettings } from "../visualizations/collection/Graph/types"
import type { TableVisualizationSettings } from "../visualizations/collection/Table/types"

export type VisualizationSettings = {
  table: TableVisualizationSettings
  editableTable: EditableTableVisualizationSettings
  list: Record<string, never>
  card: Record<string, never>
  kanban: Record<string, never>
  graph: GraphVisualizationSettings
}

export type DataCollectionSettings = {
  // Dynamically generated from visualization definitions
  visualization: VisualizationSettings
}

const generateInitialVisualizationSettings = (): VisualizationSettings => {
  return {
    table: {},
    editableTable: {},
    list: {},
    card: {},
    kanban: {},
    graph: {},
  }
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
      // To avoid circular dependency initializating the settings (the value is provided in the provider)
      visualization: {} as VisualizationSettings,
    },
    setVisualizationSettings: () => {},
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
