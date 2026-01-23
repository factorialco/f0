import { createContext, ReactNode, useContext } from "react"

import { DialogPosition as Position } from "../F0Dialog/types"

export type DialogWrapperContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: Position
  /**
   * The dialog's content container element.
   * Use this as the `portalContainer` prop for components like F0Select
   * to ensure dropdowns render inside the dialog.
   */
  portalContainer: HTMLDivElement | null
}

/**
 * The props for the F0DialogProvider component.
 */
export type DialogWrapperProviderProps = {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: Position
  children: ReactNode
  portalContainer: HTMLDivElement | null
}

export const DialogWrapperContext = createContext<DialogWrapperContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  shownBottomSheet: false,
  portalContainer: null,
})

export const DialogWrapperProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  children,
  portalContainer,
}: DialogWrapperProviderProps) => {
  return (
    <DialogWrapperContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        shownBottomSheet,
        portalContainer,
      }}
    >
      {children}
    </DialogWrapperContext.Provider>
  )
}

export const useDialogWrapperContext = () => {
  const context = useContext(DialogWrapperContext)
  return context
}
