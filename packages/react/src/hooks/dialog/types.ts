import { F0ButtonProps } from "@/components/F0Button"
import { DialogWidth } from "@/components/F0Dialog/types"
import { Optional } from "@/lib/typescript-utils/optional"
import { ReactNode } from "react"

export type DialogActionValuePrimitive =
  | string
  | boolean
  | number
  | undefined
  | null

export type DialogActionValue =
  | DialogActionValuePrimitive
  | (() => Promise<DialogActionValuePrimitive>)

export type DialogAction = Pick<
  F0ButtonProps,
  "label" | "icon" | "disabled"
> & {
  value: DialogActionValue
  /*
   * If true, the dialog will not be closed automatically when an action is clicked.
   */
  keepOpen?: boolean
  /*
   * If true, the dialog will not be blocked when an action is clicked and is a promise
   */
  nonBlocking?: boolean
}

export type DialogId = string

export type DialogActions = {
  primary: DialogAction | DialogAction[]
  secondary?: DialogAction | DialogAction[]
}

export const dialogVariants = ["default", "critical", "neutral"] as const
export type DialogVariant = (typeof dialogVariants)[number]

export type DialogDefinition = {
  /*
   * The width of the dialog.
   */
  width?: DialogWidth
  /*
   * The id of the dialog.
   */
  id: DialogId
  /*
   * The title of the dialog.
   */
  title: string
  /*
   * The description of the dialog.
   */
  description?: string
  /*
   * The content of the dialog.
   */
  content: ReactNode
  /*
   * The actions of the dialog.
   */
  actions: DialogActions
  /*
   * The variant of the dialog.
`   */
  variant?: DialogVariant
  /*
   * If true, the dialog will not be closed automatically when an action is clicked.
   * This is useful for dialogs that need to be closed manually
   */
  keepOpen?: boolean
}

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
