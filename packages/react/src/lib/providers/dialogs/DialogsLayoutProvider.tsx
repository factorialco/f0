import { Dialogs } from "@/lib/providers/dialogs/components/Dialogs"
import { DialogDefinitionProviderInternal } from "@/lib/providers/dialogs/internal-types"
import { DialogId } from "@/lib/providers/dialogs/types"
import { createContext, useContext, useMemo, useState } from "react"
import { createPortal } from "react-dom"

type DialogsLayoutContextValue = {
  addDialog: (dialog: DialogDefinitionProviderInternal) => void
  removeDialog: (id: DialogId) => void
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
  const [dialogs, setDialogs] = useState<DialogDefinitionProviderInternal[]>([])

  const addDialog = (dialog: DialogDefinitionProviderInternal) => {
    setDialogs((prev) => [...prev, dialog])
  }

  const removeDialog = (id: DialogId) => {
    setDialogs((prev) => prev.filter((d) => d.id !== id))
  }

  const contextValue = useMemo<DialogsLayoutContextValue>(
    () => ({
      addDialog,
      removeDialog,
    }),
    [dialogs, setDialogs]
  )

  return (
    <DialogsLayoutContext.Provider value={contextValue}>
      {createPortal(<Dialogs dialogs={dialogs} />, document.body)}
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
