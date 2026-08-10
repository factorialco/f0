import { type ReactNode, useContext } from "react"

import { F0DialogContext } from "@/patterns/F0Dialog/components/F0DialogProvider"
import type { F0DialogContextType } from "@/patterns/F0Dialog/internal-types"

import { DialogAlikePosition as Position } from "./types"

export type DialogWrapperContextType = F0DialogContextType

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

// Dialog-alike components are being migrated to the stable dialog pattern.
// Sharing its context keeps nested overlays in the same portal and focus scope.
export const DialogWrapperContext = F0DialogContext

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
