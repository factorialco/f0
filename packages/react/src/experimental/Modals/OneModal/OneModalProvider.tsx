import { createContext, RefObject, useContext, useState } from "react"
import { ModalPosition } from "./types"

type OneModalContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: ModalPosition
  /**
   * Reference to the modal's content container element.
   * @deprecated Use `portalContainer` instead for components like F0Select.
   */
  portalContainerRef: RefObject<HTMLDivElement | null>
  /**
   * The modal's content container element.
   * Use this as the `portalContainer` prop for components like F0Select
   * to ensure dropdowns render inside the modal.
   */
  portalContainer: HTMLDivElement | null
  /**
   * Whether the modal content has tabs
   */
  hasTabs: boolean
  /**
   * Function to set whether the modal content has tabs
   */
  setHasTabs: (hasTabs: boolean) => void
}

export const OneModalContext = createContext<OneModalContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  shownBottomSheet: false,
  portalContainerRef: { current: null },
  portalContainer: null,
  hasTabs: false,
  setHasTabs: () => {},
})

export const OneModalProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  children,
  portalContainerRef,
  portalContainer,
}: {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: ModalPosition
  children: React.ReactNode
  portalContainerRef: RefObject<HTMLDivElement | null>
  portalContainer: HTMLDivElement | null
}) => {
  const [hasTabs, setHasTabs] = useState(false)

  return (
    <OneModalContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        shownBottomSheet,
        portalContainerRef,
        portalContainer,
        hasTabs,
        setHasTabs,
      }}
    >
      {children}
    </OneModalContext.Provider>
  )
}

export const useOneModal = () => {
  const context = useContext(OneModalContext)
  return context
}
