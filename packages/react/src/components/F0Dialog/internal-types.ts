import { ReactNode } from "react"

import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { TabsProps } from "@/experimental/Navigation/Tabs"

import { DialogPosition, DialogSize, F0DialogAction } from "./types"

export type F0DialogHeaderProps = {
  title?: string
  description?: string
  module?: {
    id: ModuleId
    label: string
    href: string
  }
  otherActions?: DropdownInternalProps["items"]
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

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

export type F0DialogProviderProps = {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: DialogPosition
  children: ReactNode
  portalContainer: HTMLDivElement | null
}

export type F0DialogInternalProps = {
  // Whether the dialog is open
  isOpen: boolean
  // Callback when dialog is closed
  onClose: () => void
  // Whether to render the dialog as a bottom sheet on mobile
  asBottomSheetInMobile?: boolean
  // The position of the dialog
  position?: DialogPosition
  // The width of the dialog. Only applies to center position but we can NOT use narrowing as position undefined is valid
  size?: DialogSize
  // Actions to render in the footer
  primaryAction?: F0DialogAction | F0DialogAction[]
  secondaryAction?: F0DialogAction | F0DialogAction[]
  // Title of the dialog
  title?: string
  // Description of the dialog
  description?: string
  // Module configuration for the header. Only works when dialog position is set to "right". Displays module icon and name in the header.
  module?: F0DialogHeaderProps["module"]
  // Other actions to display in the header
  otherActions?: F0DialogHeaderProps["otherActions"]
  // Custom content to render in the dialog
  children: ReactNode
  // Disable the default padding from the dialog content area
  disableContentPadding?: boolean
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>
