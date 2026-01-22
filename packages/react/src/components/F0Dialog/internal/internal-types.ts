import { TabsProps } from "@/experimental/Navigation/Tabs"
import { ReactNode } from "react"
import { DialogPosition, DialogSize, F0DialogAction } from "../types"
import { DialogHeaderProps } from "../_components/DialogHeader"

export const dialogVariants = ["default", "notification"] as const
export type DialogVariant = (typeof dialogVariants)[number]

export type F0DialogContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: DialogPosition
  /**
   * The dialog's content container element.
   * Use this as the `portalContainer` prop for components like F0Select
   * to ensure dropdowns render inside the dialog.
   */
  portalContainer: HTMLDivElement | null
}

export type DialogInternalProps = {
  // Whether the dialog is open
  isOpen: boolean
  // Callback when dialog is closed
  onClose: () => void
  // The size of the dialog.
  size?: DialogSize
  // Actions to render in the footer
  primaryAction?: F0DialogAction | F0DialogAction[]
  secondaryAction?: F0DialogAction | F0DialogAction[]
  // Title of the dialog
  title?: string
  // Description of the dialog
  description?: string

  /**
   * Whether the dialog should be modal (only closable by clickiong the actions).
   * @default false
   */
  modal?: boolean

  /**
   * Disables the close button of the dialog.
   * @internal
   */
  disableClose?: boolean

  // Module configuration for the header. Only works when dialog position is set to "right". Displays module icon and name in the header.
  module?: DialogHeaderProps["module"]
  // Other actions to display in the header
  otherActions?: DialogHeaderProps["otherActions"]
  // Custom content to render in the dialog
  children: ReactNode
  // Disable the default padding from the dialog content area
  disableContentPadding?: boolean

  /**
   * The variant of the dialog.
   * Notification variant is used to display a notification dialog like confirmation, error, warning, etc.
   * @default "default"
   * @private
   */
  variant?: DialogVariant
} & (
  | {
      tabs: TabsProps["tabs"]
      activeTabId?: TabsProps["activeTabId"]
      setActiveTabId?: TabsProps["setActiveTabId"]
    }
  | {
      tabs?: undefined
      activeTabId?: undefined
      setActiveTabId?: undefined
    }
)
