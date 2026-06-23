import { ReactNode } from "react"

import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { NavigationProps } from "@/experimental/Navigation/Header/PageNavigation"
import { TabsProps } from "@/patterns/Navigation/Tabs"
import { ResourceHeaderProps } from "@/patterns/ResourceHeader"

import {
  DialogControls,
  DialogPosition,
  DialogWidth,
  F0DialogPrimaryAction,
  F0DialogPrimaryActionItem,
  F0DialogSecondaryAction,
  F0DialogSecondaryActionItem,
} from "./types"

// Mirrors the shape of the dialog-alike `DialogWrapperContextType` (the actual
// runtime context). Kept under this name so the public `F0DialogContext` export
// keeps its original `Context<F0DialogContextType>` type signature.
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

export type F0DialogHeaderProps = {
  title?: string
  description?: string
  module?: {
    id: ModuleId
    label: string
    href: string
  }
  otherActions?: DropdownInternalProps["items"]
  navigation?: NavigationProps
  resourceHeader?: ResourceHeaderProps
  controls?: DialogControls
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export type F0DialogInternalProps = {
  // Whether the dialog is open
  isOpen: boolean
  // Callback when dialog is closed
  onClose: () => void
  // Whether to render the dialog as a bottom sheet on mobile
  asBottomSheetInMobile?: boolean
  // The position of the dialog
  position?: DialogPosition
  // The width of the dialog. Applies to center and side panel positions (left/right), but we can NOT use narrowing as position undefined is valid
  width?: DialogWidth
  // Actions to render in the footer
  primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[]
  secondaryAction?: F0DialogSecondaryAction | F0DialogSecondaryActionItem[]
  // Title of the dialog
  title?: string
  // Description of the dialog
  description?: string
  // Module configuration for the header. Only works when dialog position is set to "right". Displays module icon and name in the header.
  module?: F0DialogHeaderProps["module"]
  // Other actions to display in the header
  otherActions?: F0DialogHeaderProps["otherActions"]
  navigation?: F0DialogHeaderProps["navigation"]
  resourceHeader?: F0DialogHeaderProps["resourceHeader"]
  controls?: F0DialogHeaderProps["controls"]
  // Custom content to render in the dialog
  children: ReactNode
  // Disable the default padding from the dialog content area
  disableContentPadding?: boolean
  // Override the DOM element the dialog is portaled into. Pass `null` to portal to `document.body` (useful to escape stacking contexts).
  container?: HTMLElement | null
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>
