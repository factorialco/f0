import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"

import { DialogsAlike } from "./components/DialogsAlike"
import { DialogDefinitionProviderItem } from "./internal-types"
import { DialogId } from "./types"

type DialogsAlikeLayoutContextValue = {
  addDialog: (dialog: DialogDefinitionProviderItem) => void
  removeDialog: (id: DialogId) => void
  addDrawer: (drawer: DialogDefinitionProviderItem) => void
  removeDrawer: (id: DialogId) => void
}

const DialogsAlikeLayoutContext =
  createContext<DialogsAlikeLayoutContextValue | null>(null)

type DialogsAlikeLayoutProviderProps = {
  children: React.ReactNode
}

/*
  This provider creates a portal in the body for the dialogs wrapper
  This wrapper allows to render the dialogs layout in the document body, but the control of the content (dialogs) is handled in the useDialog hook.
*/
export const DialogsAlikeLayoutProvider = ({
  children,
}: DialogsAlikeLayoutProviderProps) => {
  const [items, setItems] = useState<DialogDefinitionProviderItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  // Track if component is mounted (client-side) to avoid SSR issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const addDialog = useCallback((dialog: DialogDefinitionProviderItem) => {
    setItems((prev) => [...prev, dialog])
  }, [])

  const removeDialog = useCallback((id: DialogId) => {
    setItems((prev) => prev.filter((d) => d.id !== id))
  }, [])

  const addDrawer = useCallback((drawer: DialogDefinitionProviderItem) => {
    setItems((prev) => [...prev, drawer])
  }, [])

  const removeDrawer = useCallback((id: DialogId) => {
    setItems((prev) => prev.filter((d) => d.id !== id))
  }, [])

  const contextValue = useMemo<DialogsAlikeLayoutContextValue>(
    () => ({
      addDialog,
      removeDialog,
      addDrawer,
      removeDrawer,
    }),
    [addDialog, removeDialog, addDrawer, removeDrawer]
  )

  return (
    <DialogsAlikeLayoutContext.Provider value={contextValue}>
      {isMounted &&
        typeof document !== "undefined" &&
        createPortal(<DialogsAlike items={items} />, document.body)}
      {children}
    </DialogsAlikeLayoutContext.Provider>
  )
}

export const useDialogsAlikeLayoutContext = () => {
  const context = useContext(DialogsAlikeLayoutContext)
  if (!context) {
    throw new Error(
      "useDialogsAlikeLayoutContext must be used within a DialogsAlikeLayoutProvider"
    )
  }
  return context
}
