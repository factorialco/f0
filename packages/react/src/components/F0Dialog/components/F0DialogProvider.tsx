import { createContext, ReactNode, useContext } from "react"

import { F0DialogContextType } from "../internal/internal-types"
import { DialogPosition } from "../types"

/**
 * The props for the F0DialogProvider component.
 */
export type F0DialogProviderProps = {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: DialogPosition
  children: ReactNode
  portalContainer: HTMLDivElement | null
}

export const F0DialogContext = createContext<F0DialogContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  shownBottomSheet: false,
  portalContainer: null,
})

export const F0DialogProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  children,
  portalContainer,
}: F0DialogProviderProps) => {
  return (
    <F0DialogContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        shownBottomSheet,
        portalContainer,
      }}
    >
      {children}
    </F0DialogContext.Provider>
  )
}

export const useF0Dialog = () => {
  const context = useContext(F0DialogContext)
  return context
}
