import { DataCollectionStatus } from "@/experimental/OneDataCollection/hooks/useDataColectionStorage/types"
import { DataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"
import { createContext, useContext } from "react"

export type DataCollectionStorage = {
  settings?: DataCollectionSettings
} & DataCollectionStatus

export type DataCollectionStorageProvider = {
  get: (key: string) => Promise<DataCollectionStorage>
  set: (key: string, storage: DataCollectionStorage) => Promise<void>
}

const noopProvider = {
  get: () => ({}) as Promise<DataCollectionStorage>,
  set: () => Promise.resolve(),
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
