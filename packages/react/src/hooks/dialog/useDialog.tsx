import { useDialogsLayoutContext } from "@/lib/providers/dialogsLayout/DialogsLayoutProvider"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import {
  DialogDefinition,
  DialogActionValue,
  DialogAction,
  ConfirmDialogOptions,
  AlertDialogOptions,
  DialogActionValuePrimitive,
  DialogId,
} from "./types"
import { Dialogs } from "./components/Dialogs"
import { Optional } from "@/lib/typescript-utils/optional"
import { useI18n } from "@/lib/providers/i18n"
import { DialogDefinitionInternal } from "./internal-types"

export type UseDialogReturn = {
  openDialog: (
    definition: Optional<DialogDefinition, "id">
  ) => Promise<DialogActionValue>
  alert: (
    title: string,
    msg: string,
    options?: AlertDialogOptions
  ) => Promise<DialogActionValue>
  confirm: (
    title: string,
    msg: string,
    options?: ConfirmDialogOptions
  ) => Promise<DialogActionValue>
  closeDialog: (id: DialogId) => void
}

export const useDialog = (): UseDialogReturn => {
  const i18n = useI18n()
  const { setDialogsLayoutChildren } = useDialogsLayoutContext()

  const [dialogs, setDialogs] = useState<DialogDefinitionInternal[]>([])

  const openDialog = (
    definition: Optional<DialogDefinition, "id">
  ): Promise<DialogActionValue> => {
    return new Promise((resolve) => {
      const newDialog: DialogDefinitionInternal = {
        ...definition,
        id: definition.id || nanoid(),
        actions: definition.actions,
        onCloseDialog: () => {
          handleDialogAction(undefined, undefined)
        },
        onClickAction: (
          action: DialogAction,
          value: DialogActionValuePrimitive
        ) => {
          handleDialogAction(action, value)
        },
      }

      const handleDialogAction = async (
        action: DialogAction | undefined,
        value: DialogActionValuePrimitive | undefined
      ) => {
        resolve(value ?? undefined)

        if (action?.keepOpen) {
          return
        }
        // Remove the dialog from the list after the action is resolved
        setDialogs((prev) => prev.filter((d) => d.id !== newDialog.id))
      }

      setDialogs((prev) => [...prev, newDialog])
    })
  }

  /**
   * Alert Dialog
   */
  const alert = (
    title: string,
    msg: string,
    options: AlertDialogOptions = {}
  ): Promise<DialogActionValue> => {
    const dialog = {
      ...options,
      id: options.id || nanoid(),
      title,
      content: <div>{msg}</div>,
      actions: {
        primary: {
          value: options.confirm?.value || true,
          label: options.confirm?.label || i18n.actions.ok,
        },
      },
    }
    return openDialog(dialog)
  }

  /**
   * Confirm Dialog
   */
  const confirm = (
    title: string,
    msg: string,
    options: ConfirmDialogOptions = {}
  ): Promise<DialogActionValue> => {
    const dialog = {
      ...options,
      id: options.id || nanoid(),
      title,
      content: <div>{msg}</div>,
      actions: {
        primary: {
          value: options.confirm?.value || true,
          label: options.confirm?.label || i18n.actions.ok,
        },
        secondary: {
          value: options.cancel?.value || false,
          label: options.cancel?.label || i18n.actions.cancel,
        },
      },
    }
    return openDialog(dialog)
  }

  useEffect(() => {
    setDialogsLayoutChildren(<Dialogs dialogs={dialogs}></Dialogs>)
  }, [dialogs, setDialogsLayoutChildren])

  const closeDialog = (id: DialogId) => {
    setDialogs((prev) => prev.filter((d) => d.id !== id))
  }

  return {
    openDialog,
    alert,
    confirm,
    closeDialog,
  }
}
