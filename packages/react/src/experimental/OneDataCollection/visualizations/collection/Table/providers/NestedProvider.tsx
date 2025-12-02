import { RecordType } from "@/hooks/datasource"
import { ChildrenResponse } from "@/hooks/datasource/types/nested.typings"
import { createContext, ReactNode, useContext, useState } from "react"

interface NestedDataContextValue<R extends RecordType> {
  fetchedData: Record<string, ChildrenResponse<R>>
  updateFetchedData: (rowId: string, data: ChildrenResponse<R>) => void
}

const NestedDataContext = createContext<
  NestedDataContextValue<RecordType> | undefined
>(undefined)

export const NestedDataProvider = <R extends RecordType>({
  children,
}: {
  children: ReactNode
}) => {
  const [fetchedData, setFetchedData] = useState<
    Record<string, ChildrenResponse<R>>
  >({})

  const updateFetchedData = (rowId: string, data: ChildrenResponse<R>) => {
    setFetchedData((prev) => ({
      ...prev,
      [rowId]: data,
    }))
  }

  return (
    <NestedDataContext.Provider
      value={
        { fetchedData, updateFetchedData } as NestedDataContextValue<RecordType>
      }
    >
      {children}
    </NestedDataContext.Provider>
  )
}

export const useNestedDataContext = <R extends RecordType>() => {
  const context = useContext(NestedDataContext)
  if (!context) {
    throw new Error(
      "useNestedDataContext must be used within NestedDataProvider"
    )
  }
  return context as NestedDataContextValue<R>
}
