import { DataCollectionStatus } from "@/experimental/OneDataCollection/hooks/useDataColectionStorage/types"
import { DataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"
import { createContext, useContext } from "react"

export type DataCollectionStorage = {
  settings?: DataCollectionSettings
} & DataCollectionStatus

export type DataCollectionStorageHandler = {
  get: (key: string) => Promise<DataCollectionStorage>
  set: (key: string, storage: DataCollectionStorage) => Promise<void>
}

const noopHandler = {
  get: () => ({}) as Promise<DataCollectionStorage>,
  set: () => Promise.resolve(),
}

const DataCollectionStorageContext =
  createContext<DataCollectionStorageHandler>(noopHandler)

export const DataCollectionStorageProvider = ({
  children,
  handler,
}: {
  children: React.ReactNode
  handler?: DataCollectionStorageHandler
}) => (
  <DataCollectionStorageContext.Provider value={handler ?? noopHandler}>
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
