import { createContext, useContext } from "react"

export type SelectContextType = {
  open?: boolean
  as?: "list"
  multiple?: boolean
  value: string[] | string
}
export const SelectContext = createContext<SelectContextType>({
  value: "",
  open: false,
  multiple: false,
})

export const useSelectContext = () => useContext(SelectContext)
