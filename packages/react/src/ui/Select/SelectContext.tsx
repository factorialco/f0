import { createContext, useContext } from "react"

export type SelectContextType = {
  open?: boolean
  asList?: boolean
  asListWithScroll?: boolean
  multiple?: boolean
  value: string[] | string
}
export const SelectContext = createContext<SelectContextType>({
  value: "",
  open: false,
  asList: false,
  multiple: false,
})

export const useSelectContext = () => useContext(SelectContext)
