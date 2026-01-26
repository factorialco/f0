import { DialogAlikeInternalProps } from "../../common/types"

export const dialogVariants = ["default", "notification"] as const
export type DialogVariant = (typeof dialogVariants)[number]

export type DialogInternalProps = DialogAlikeInternalProps & {
  /**
   * The type of the dialog. It chenges the primary action variant.
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
}
