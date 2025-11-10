import { createContext, useContext } from "react"

export type SelectContextType = {
  open?: boolean
  as?: "list" | "list-with-scroll"
  multiple?: boolean
  value: string[] | string
}
export const SelectContext = createContext<SelectContextType>({
  value: "",
  open: false,
  as: undefined,
  multiple: false,
})

export const useSelectContext = () => useContext(SelectContext)
