import { nanoid } from "nanoid"

import { useDialogsLayoutContext } from "@/lib/providers/dialogs/DialogsLayoutProvider"
import { DialogDefinitionProviderItem } from "@/lib/providers/dialogs/internal-types"
import {
  DialogDefinition,
  DialogActionValue,
  DialogAction,
  DialogActionValuePrimitive,
  DialogId,
  DialogDefinitionInternal,
} from "@/lib/providers/dialogs/types"
import { useI18n } from "@/lib/providers/i18n"
import { Optional } from "@/lib/typescript-utils/optional"

import {
  AlertDialogOptions,
  ConfirmDialogOptions,
  NotificationDialogOptions,
} from "./types"

export type UseDialogReturn = {
  openDialog: (
    definition: Optional<DialogDefinition, "id">
  ) => Promise<DialogActionValue>
  openNotificationDialog: (
    options: NotificationDialogOptions
  ) => Promise<DialogActionValue>
  alert: (options: AlertDialogOptions) => Promise<DialogActionValue>
  confirm: (options: ConfirmDialogOptions) => Promise<DialogActionValue>
  closeDialog: (id: DialogId) => void
}

export const useDialog = (): UseDialogReturn => {
  const i18n = useI18n()
  const { addDialog, removeDialog } = useDialogsLayoutContext()

  const openDialog = (
    definition: Optional<DialogDefinition, "id">
  ): Promise<DialogActionValue> => {
    return _openDialogInternal({ ...definition, variant: "default" })
  }

  const _openDialogInternal = (
    definition: Optional<DialogDefinitionInternal, "id">
  ): Promise<DialogActionValue> => {
    return new Promise((resolve) => {
      // We have to use a cast here because the type of newDialog is not correctly inferred
      // when using the spread operator with a discriminated union
      const baseDialog = {
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

      let newDialog: DialogDefinitionProviderItem

      if (definition.variant === "notification") {
        if (!definition.type || definition.type === "default") {
          throw new Error("Notification dialog must have a type")
        }
        newDialog = {
          ...definition,
          ...baseDialog,
          variant: "notification",
          type: definition.type,
        }
      } else {
        newDialog = {
          ...definition,
          ...baseDialog,
          variant: "default",
          type: undefined,
        }
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
        removeDialog(newDialog.id)
      }

      addDialog(newDialog)
    })
  }

  /**
   * Notification Dialog
   */
  const openNotificationDialog = (
    options: NotificationDialogOptions
  ): Promise<DialogActionValue> => {
    const dialog = {
      type: options.type ?? "info",
      variant: "notification" as const,
      description: options.msg,
      id: options.id || nanoid(),
      title: options.title,
      content: <></>,
      actions: options.actions,
    }

    return _openDialogInternal(dialog)
  }

  /**
   * Alert Dialog
   */
  const alert = (options: AlertDialogOptions): Promise<DialogActionValue> => {
    return openNotificationDialog({
      ...options,
      actions: {
        primary: {
          value: options.confirm?.value ?? true,
          label: options.confirm?.label || i18n.actions.ok,
        },
      },
    })
  }

  /**
   * Confirm Dialog
   */
  const confirm = (
    options: ConfirmDialogOptions
  ): Promise<DialogActionValue> => {
    return openNotificationDialog({
      ...options,
      actions: {
        primary: {
          value: options.confirm?.value ?? true,
          label: options.confirm?.label || i18n.actions.ok,
        },
        secondary: {
          value: options.cancel?.value ?? false,
          label: options.cancel?.label || i18n.actions.cancel,
        },
      },
    })
  }

  const closeDialog = (id: DialogId) => {
    removeDialog(id)
  }

  return {
    openDialog,
    openNotificationDialog,
    alert,
    confirm,
    closeDialog,
  }
}
