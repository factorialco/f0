import { createContext, useContext } from "react"
import { DataCollectionStorage, DataCollectionStorageHandler } from "./types"

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
