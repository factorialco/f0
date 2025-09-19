import { createContext, useContext } from "react"
import { TableVisualizationSettings } from "./types"

export interface TableSettingsContextType {
  onChange: (settings: TableVisualizationSettings) => void
  settings: TableVisualizationSettings
}

export const TableSettingsContext = createContext<TableSettingsContextType>({
  onChange: () => {},
  settings: {
    order: [],
    hidden: [],
  },
})

export const useTableSettings = () => {
  const context = useContext(TableSettingsContext)
  console.log("context", context)
  if (!context) {
    throw new Error(
      "useTableSettings must be used within a TableSettingsProvider"
    )
  }
  return context
}
