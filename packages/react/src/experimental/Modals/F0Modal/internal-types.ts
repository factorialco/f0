import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { TabsProps } from "@/experimental/Navigation/Tabs"
import React from "react"
import {
  F0ModalPrimaryAction,
  F0ModalSecondaryAction,
  ModalPosition,
  ModalWidth,
} from "./types"

export type F0ModalHeaderProps = {
  title?: string
  description?: string
  module?: {
    id: ModuleId
    label: string
    href: string
  }
  otherActions?: DropdownInternalProps["items"]
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export type F0ModalContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: ModalPosition
  /**
   * Reference to the modal's content container element.
   * @deprecated Use `portalContainer` instead for components like F0Select.
   */
  portalContainerRef: React.RefObject<HTMLDivElement | null>
  /**
   * The modal's content container element.
   * Use this as the `portalContainer` prop for components like F0Select
   * to ensure dropdowns render inside the modal.
   */
  portalContainer: HTMLDivElement | null
}

export type F0ModalProviderProps = {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: ModalPosition
  children: React.ReactNode
  portalContainerRef: React.RefObject<HTMLDivElement | null>
  portalContainer: HTMLDivElement | null
}

export type F0ModalInternalProps = {
  // Whether the modal is open
  isOpen: boolean
  // Callback when modal is closed
  onClose: () => void
  // Whether to render the modal as a bottom sheet on mobile
  asBottomSheetInMobile?: boolean
  // The position of the modal
  position?: ModalPosition
  // The width of the modal. Only applies to center position but we can NOT use narrowing as position undefined is valid
  width?: ModalWidth
  // Actions to render in the footer
  primaryAction?: F0ModalPrimaryAction
  secondaryAction?: F0ModalSecondaryAction
  // Title of the modal
  title?: string
  // Description of the modal
  description?: string
  // Module configuration for the header. Only works when modal position is set to "right". Displays module icon and name in the header.
  module?: F0ModalHeaderProps["module"]
  // Other actions to display in the header
  otherActions?: F0ModalHeaderProps["otherActions"]
  // Whether to add padding to the content
  withPadding?: boolean
  // Custom content to render in the modal
  children: React.ReactNode
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>
