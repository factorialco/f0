import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon/F0Icon"
import { TabsProps } from "@/experimental/Navigation/Tabs"
import { DialogModule } from "@/lib/providers/dialogs-alike/types"

import { HeaderProps } from "./Header"

export const dialogAlikePositions = [
  "center",
  "left",
  "right",
  "fullscreen",
] as const
export type DialogAlikePosition = (typeof dialogAlikePositions)[number]

export const dialogAlikeSizes = ["sm", "md", "lg", "xl", "fullscreen"] as const
export type DialogAlikeSize = (typeof dialogAlikeSizes)[number]

export const dialogAlikePrivateProps = ["variant", "disableClose"] as const
export type DialogAlikePrivateProps = (typeof dialogAlikePrivateProps)[number]

export type DialogAlikeAction = {
  value?: string
  label: string
  icon?: IconType
  onClick: () => void | Promise<void>
  disabled?: boolean
  loading?: boolean
  closeOnClick?: boolean
}

export type DialogAlikeActionsProps = {
  primaryAction?: DialogAlikeAction | DialogAlikeAction[]
  secondaryAction?: DialogAlikeAction | DialogAlikeAction[]
}

export type DialogAlikeTabsProps = {
  tabs: TabsProps["tabs"]
  activeTabId?: TabsProps["activeTabId"]
  setActiveTabId?: TabsProps["setActiveTabId"]
}

export type DialogAlikeInternalProps = {
  // Whether the dialog is open
  isOpen: boolean
  // Callback when dialog is closed
  onClose: () => void
  // The size of the dialog.
  size?: DialogAlikeSize
  // Actions to render in the footer
  primaryAction?: DialogAlikeAction | DialogAlikeAction[]
  secondaryAction?: DialogAlikeAction | DialogAlikeAction[]
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
  module?: DialogModule
  // Other actions to display in the header
  otherActions?: HeaderProps["otherActions"]
  // Custom content to render in the dialog
  children: ReactNode
  // Disable the default padding from the dialog content area
  disableContentPadding?: boolean
} & (
  | DialogAlikeTabsProps
  | {
      [key in keyof DialogAlikeTabsProps]?: undefined
    }
)
