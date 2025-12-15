import { createContext, useContext } from "react"

interface TableContextValue {
  isScrolled: boolean
  setIsScrolled: (value: boolean) => void
  isScrolledRight: boolean
  setIsScrolledRight: (value: boolean) => void
}

export const TableContext = createContext<TableContextValue | undefined>(undefined)

export function useTable() {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error("useTable must be used within a TableProvider")
  }
  return context
}
