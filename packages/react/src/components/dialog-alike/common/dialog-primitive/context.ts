import { createContext, useContext } from "react"

import { DialogProps } from "./types"

export const DialogPrimitiveContext = createContext<DialogProps>({})

export const useDialogPrimitiveContext = () =>
  useContext(DialogPrimitiveContext)
