import { createContext, ReactNode, useContext } from "react"

import { DialogAlikePosition as Position } from "./types"

export type DialogWrapperContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: Position
  fullHeight: boolean
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
  fullHeight?: boolean
  children: ReactNode
  portalContainer: HTMLDivElement | null
}

export const DialogWrapperContext = createContext<DialogWrapperContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  fullHeight: false,
  shownBottomSheet: false,
  portalContainer: null,
})

export const DialogWrapperProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  fullHeight = false,
  children,
  portalContainer,
}: DialogWrapperProviderProps) => {
  return (
    <DialogWrapperContext.Provider
      value={{
        open: isOpen,
        onClose,
        position,
        fullHeight,
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
