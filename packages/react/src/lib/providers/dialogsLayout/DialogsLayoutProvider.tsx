import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"

type DialogsLayoutContextValue = {
  setDialogsLayoutChildren: (children: React.ReactNode) => void
}

const DialogsLayoutContext = createContext<DialogsLayoutContextValue | null>(
  null
)

type DialogsLayoutProviderProps = {
  children: React.ReactNode
}

/*
  This provider creates a portal in the body for the dialogs wrapper
  This wrapper allows to render the dialogs layout in the document body, but the control of the content (dialogs) is handled in the useDialog hook.
*/
export const DialogsLayoutProvider = ({
  children,
}: DialogsLayoutProviderProps) => {
  const [dialogsLayoutChildren, _setDialogsLayoutChildren] =
    useState<React.ReactNode>(null)

  const setDialogsLayoutChildren = useCallback(
    (children: React.ReactNode) => {
      _setDialogsLayoutChildren(children)
    },
    [_setDialogsLayoutChildren]
  )

  const contextValue = useMemo<DialogsLayoutContextValue>(
    () => ({
      setDialogsLayoutChildren,
    }),
    [setDialogsLayoutChildren]
  )

  return (
    <DialogsLayoutContext.Provider value={contextValue}>
      {createPortal(dialogsLayoutChildren, document.body)}
      {children}
    </DialogsLayoutContext.Provider>
  )
}

export const useDialogsLayoutContext = () => {
  const context = useContext(DialogsLayoutContext)
  if (!context) {
    throw new Error(
      "useDialogsLayoutContext must be used within a DialogsLayoutProvider"
    )
  }
  return context
}
