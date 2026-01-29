import { DialogNotificationType } from "@/components/dialog-alike/F0Dialog/types"
import {
  DialogActions,
  DialogActionValue,
  DialogDefinition,
} from "@/lib/providers/dialogs-alike/types"
import { Optional } from "@/lib/typescript-utils/optional"

export type NotificationDialogBaseOptions = Optional<
  Pick<DialogDefinition, "id" | "title">,
  "id"
> & {
  msg: string
  type?: DialogNotificationType
}

export type NotificationDialogOptions = NotificationDialogBaseOptions & {
  actions: DialogActions
}

export type DialogSimpleAction = {
  label?: string
  value?: DialogActionValue
}

export type ConfirmDialogOptions = NotificationDialogBaseOptions & {
  /*
   * The label of the confirm action (default: label: "Ok", value: true).
   */
  confirm?: DialogSimpleAction
  /*
   * The label of the cancel action (default: label: "Cancel", value: false).
   */
  cancel?: DialogSimpleAction
}

export type AlertDialogOptions = NotificationDialogBaseOptions & {
  /*
   * The label of the alert action (default: label: "Ok", value: true).
   */
  confirm?: DialogSimpleAction
}
