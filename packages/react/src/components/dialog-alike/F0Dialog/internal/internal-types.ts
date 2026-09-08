import { DialogAlikeInternalProps } from "../../common/types"

export const dialogVariants = ["default", "notification"] as const
export type DialogVariant = (typeof dialogVariants)[number]

export type DialogInternalProps = DialogAlikeInternalProps & {
  /**
   * The type of the dialog. It changes the primary action variant.
   * @default "default"
   */
  type?: "default" | "critical"

  /**
   * The variant of the dialog.
   * Notification variant is used to display a notification dialog like confirmation, error, warning, etc.
   * @default "default"
   * @private
   */
  variant?: DialogVariant

  /**
   * Renders a dismiss (X) control in the notification variant's top-right corner. Ignored by the
   * default variant, whose `Header` already carries one.
   * @default false
   */
  dismissable?: boolean
}
