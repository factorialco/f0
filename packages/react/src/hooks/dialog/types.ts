import { Optional } from "@/lib/typescript-utils/optional"
import {
  DialogActionValue,
  DialogDefinition,
} from "@/lib/providers/dialogs/types"

export type SimpleDialogOptions = Optional<
  Pick<DialogDefinition, "id" | "title" | "description" | "width">,
  "id" | "title"
>

export type DialogSimpleAction = {
  label?: string
  value?: DialogActionValue
}

export type ConfirmDialogOptions = SimpleDialogOptions & {
  /*
   * The label of the confirm action (default: label: "Ok", value: true).
   */
  confirm?: DialogSimpleAction
  /*
   * The label of the cancel action (default: label: "Cancel", value: false).
   */
  cancel?: DialogSimpleAction
}

export type AlertDialogOptions = SimpleDialogOptions & {
  /*
   * The label of the alert action (default: label: "Ok", value: true).
   */
  confirm?: DialogSimpleAction
}
