import { createContext, useContext } from "react"

import { F0DialogContextType, F0DialogProviderProps } from "../internal-types"

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

/**
 * Portal target for floating layers opened from inside a dialog. Centered and
 * fullscreen dialogs trap focus, so a layer portalled to `body` would be
 * unreachable and any click on it would read as a click outside; side panels
 * render in `body` on purpose to avoid clipping. Returns `undefined` outside
 * a dialog, which lets Radix fall back to `document.body`.
 */
export const useDialogPortalContainer = (): HTMLElement | undefined => {
  const { portalContainer, position } = useContext(F0DialogContext)
  const isFocusTrapped = position === "center" || position === "fullscreen"
  return isFocusTrapped && portalContainer ? portalContainer : undefined
}
