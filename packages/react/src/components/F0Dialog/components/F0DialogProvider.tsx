import { createContext, useContext } from "react"
import { F0DialogContextType, F0DialogProviderProps } from "../internal-types"

export const F0DialogContext = createContext<F0DialogContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  shownBottomSheet: false,
  portalContainerRef: { current: null },
  portalContainer: null,
})

export const F0DialogProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  children,
  portalContainerRef,
  portalContainer,
}: F0DialogProviderProps) => {
  return (
    <F0DialogContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        shownBottomSheet,
        portalContainerRef,
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
