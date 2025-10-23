import { createContext, useContext } from "react"
import { ContentPadding, ModalPosition } from "./types"

type OneModalContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: ModalPosition
  contentPadding: ContentPadding
}

export const OneModalContext = createContext<OneModalContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  contentPadding: "md",
  shownBottomSheet: false,
})

export const OneModalProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  contentPadding,
  position,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: ModalPosition
  children: React.ReactNode
  contentPadding: ContentPadding
}) => {
  return (
    <OneModalContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        shownBottomSheet,
        contentPadding,
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
