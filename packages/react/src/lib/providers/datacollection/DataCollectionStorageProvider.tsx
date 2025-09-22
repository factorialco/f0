import { DataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"
import { createContext, useContext } from "react"

export type DataCollectionStorageProvider = {
  settings: {
    get: (key: string) => Promise<DataCollectionSettings>
    set: (key: string, settings: DataCollectionSettings) => Promise<void>
  }
}

const noopProvider: DataCollectionStorageProvider = {
  settings: {
    get: () => ({}) as Promise<DataCollectionSettings>,
    set: () => Promise.resolve(),
  },
}

const DataCollectionStorageContext =
  createContext<DataCollectionStorageProvider>(noopProvider)

export const DataCollectionStorageProvider = ({
  children,
  provider,
}: {
  children: React.ReactNode
  provider?: DataCollectionStorageProvider
}) => (
  <DataCollectionStorageContext.Provider value={provider ?? noopProvider}>
    {children}
  </DataCollectionStorageContext.Provider>
)

export const useDataCollectionStorage = () => {
  const context = useContext(DataCollectionStorageContext)
  if (!context) {
    throw new Error(
      "useDataCollectionStorage must be used within a DataCollectionStorageProvider"
    )
  }
  return context
}
