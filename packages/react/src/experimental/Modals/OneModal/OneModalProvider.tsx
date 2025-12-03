import { createContext, RefObject, useContext } from "react"
import { ContentPadding, ModalPosition } from "./types"

type OneModalContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: ModalPosition
  contentPadding: ContentPadding
  /**
   * Reference to the modal's content container element.
   * Use this as the `portalContainer` prop for components like F0Select.
   */
  portalContainerRef: RefObject<HTMLDivElement | null>
}

export const OneModalContext = createContext<OneModalContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  contentPadding: "md",
  shownBottomSheet: false,
  portalContainerRef: { current: null },
})

export const OneModalProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  contentPadding,
  position,
  children,
  portalContainerRef,
}: {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: ModalPosition
  children: React.ReactNode
  contentPadding: ContentPadding
  portalContainerRef: RefObject<HTMLDivElement | null>
}) => {
  return (
    <OneModalContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        shownBottomSheet,
        contentPadding,
        portalContainerRef,
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
