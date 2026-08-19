import { createContext } from "react"

export type FilterPickerStateMode = "optimistic" | "controlled"

export const FilterPickerStateModeContext =
  createContext<FilterPickerStateMode>("optimistic")
