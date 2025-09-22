import React, { createContext, useContext, useState } from "react"
import { TableVisualizationSettings } from "../types"

export interface TableSettingsContextType {
  setSettings: React.Dispatch<React.SetStateAction<TableVisualizationSettings>>
  settings: TableVisualizationSettings
}

export const TableSettingsContext = createContext<TableSettingsContextType>({
  setSettings: () => {},
  settings: {
    order: [],
    hidden: [],
  },
})

export const useTableSettings = () => {
  const context = useContext(TableSettingsContext)
  if (!context) {
    throw new Error(
      "useTableSettings must be used within a TableSettingsProvider"
    )
  }
  return context
}

export const TableSettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<TableVisualizationSettings>({
    order: [],
    hidden: [],
  })

  return (
    <TableSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </TableSettingsContext.Provider>
  )
}
