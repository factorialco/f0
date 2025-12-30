import { createContext, useContext } from "react"
import { F0ModalContextType, F0ModalProviderProps } from "../internal-types"

export const F0ModalContext = createContext<F0ModalContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  shownBottomSheet: false,
  portalContainerRef: { current: null },
  portalContainer: null,
})

export const F0ModalProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  children,
  portalContainerRef,
  portalContainer,
}: F0ModalProviderProps) => {
  return (
    <F0ModalContext.Provider
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
    </F0ModalContext.Provider>
  )
}

export const useF0Modal = () => {
  const context = useContext(F0ModalContext)
  return context
}
