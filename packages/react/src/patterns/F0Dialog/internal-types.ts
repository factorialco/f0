import { ReactNode } from "react"

import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { NavigationProps } from "@/experimental/Navigation/Header/PageNavigation"
import { TabsProps } from "@/patterns/Navigation/Tabs"
import { F0ResourceHeaderProps } from "@/patterns/F0ResourceHeader"

import {
  DialogControls,
  DialogPosition,
  DialogWidth,
  F0DialogPrimaryAction,
  F0DialogPrimaryActionItem,
  F0DialogSecondaryAction,
  F0DialogSecondaryActionItem,
} from "./types"

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
  resourceHeader?: F0ResourceHeaderProps
  controls?: DialogControls
  headerStatus?: string
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

/**
 * Controls FLANKING the panel rather than inside it — the affordance for a
 * dialog whose content can be changed without closing it (see
 * `F0CarouselDialog`).
 *
 * They are rendered INSIDE the Radix content, so they are inside the focus trap
 * and reachable by keyboard, and merely positioned outside its box. Anything
 * portalled next to the dialog instead would be `aria-hidden` and inert, which
 * is exactly the trap a modal is supposed to set.
 */
export type F0DialogSideControls = {
  previous?: ReactNode
  next?: ReactNode
}

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
  /**
   * A short reading beside the close button — "3 of 11". Where the dialog says
   * WHICH of several things it is currently showing.
   *
   * Not `navigation`: that draws its own arrows in the header. This is the label
   * alone, for a dialog whose arrows are somewhere else (`sideControls`).
   */
  headerStatus?: F0DialogHeaderProps["headerStatus"]
  /**
   * Controls flanking the panel — see {@link F0DialogSideControls}. On a phone
   * (where the dialog is a bottom sheet and there is no room beside it) they move
   * ONTO the panel's own edges instead, which is where a gallery puts them.
   */
  sideControls?: F0DialogSideControls
  // Custom content to render in the dialog
  children: ReactNode
  // Disable the default padding from the dialog content area
  disableContentPadding?: boolean
  // Override the DOM element the dialog is portaled into. Pass `null` to portal to `document.body` (useful to escape stacking contexts).
  container?: HTMLElement | null
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>
