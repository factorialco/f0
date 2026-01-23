import { ReactNode } from "react"

import {
  DialogNotificationType,
  DialogSize,
} from "@/components/dialog-alike/F0Dialog/types"
import { F0ButtonProps } from "@/components/F0Button"
import { Optional } from "@/lib/typescript-utils/optional"

export type DialogActionValuePrimitive =
  | string
  | boolean
  | number
  | undefined
  | null

export type DialogActionValue =
  | DialogActionValuePrimitive
  | (() => Promise<DialogActionValuePrimitive>)

export type DialogAction = Optional<
  Pick<F0ButtonProps, "label" | "icon" | "disabled">,
  "icon" | "disabled"
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

export type DialogDefinition = {
  /*
   * The size of the dialog.
   */
  size?: DialogSize
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
   * If true, the dialog will not be closed automatically when an action is clicked.
   * This is useful for dialogs that need to be closed manually
   */
  keepOpen?: boolean
}

export type DialogDefinitionInternal = DialogDefinition &
  (
    | {
        variant?: "default"
        type?: "default"
      }
    | {
        variant: "notification"
        type: DialogNotificationType
      }
  )
