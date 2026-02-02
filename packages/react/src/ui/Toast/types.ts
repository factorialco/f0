import { IconType } from "@/components/F0Icon"

export const toastVariants = ["error", "warning", "success", "default"] as const
export type F0ToastVariant = (typeof toastVariants)[number]

export type ToastActionButton = {
  type: "button"
  label: string
  onClick: () => void
  icon?: IconType
  /**
   * If true, the toast will not be closed automatically when the action is clicked.
   */
  keepOpen?: boolean
}

export type ToastActionLink = {
  type: "link"
  label: string
  href: string
  /**
   * If true, the toast will not be closed automatically when the action is clicked.
   */
  keepOpen?: boolean
}

export type F0ToastAction = ToastActionButton | ToastActionLink

export type F0ToastProps = {
  /**
   * The title of the toast
   */
  title?: string
  /**
   * The description of the toast
   */
  description?: string
  /**
   * The variant of the toast
   */
  variant?: F0ToastVariant

  /**
   * The duration of the toast in milliseconds (if not provided, the toast will stay open until the user closes it)
   */
  duration?: number

  /**
   * The callback to be called when the toast is closed
   */
  onClose?: () => void

  /**
   * The actions to display in the toast ()
   */
  actions?:
    | ToastActionButton
    | ToastActionLink
    | [ToastActionButton, ToastActionLink]
}
