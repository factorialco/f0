import type { GridStack, GridStackOptions, GridStackWidget } from "gridstack"
import { createContext, useContext } from "react"
import "./types"

export type GridStackWidgetWithRequiredId = GridStackWidget & {
  id: Required<GridStackWidget>["id"]
}

export const GridStackContext = createContext<{
  options: GridStackOptions
  gridStack: GridStack | null
  _gridStack: {
    value: GridStack | null
    set: React.Dispatch<React.SetStateAction<GridStack | null>>
  }
  _rawWidgetMetaMap: {
    value: Map<string, GridStackWidget>
    set: React.Dispatch<React.SetStateAction<Map<string, GridStackWidget>>>
  }
  _reactContentMap: {
    value: Map<string, React.ReactElement>
    set: React.Dispatch<React.SetStateAction<Map<string, React.ReactElement>>>
  }
} | null>(null)

export function useGridStackContext() {
  const context = useContext(GridStackContext)
  if (!context) {
    throw new Error("useGridStackContext must be used within a GridStackProvider")
  }
  return context
}
