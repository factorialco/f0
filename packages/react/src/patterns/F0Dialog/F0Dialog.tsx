import { FC } from "react"

import { F0Dialog as DialogAlike } from "@/components/dialog-alike/F0Dialog"
import { F0Drawer } from "@/components/dialog-alike/F0Drawer"

import { F0DialogInternalProps } from "./internal-types"

/**
 * @deprecated Use `F0Dialog` from `@/components/dialog-alike/F0Dialog` for
 * center and fullscreen dialogs, or `F0Drawer` from
 * `@/components/dialog-alike/F0Drawer` for side panels (`position: "left" | "right"`).
 *
 * This component is a backward-compatible shim that maps the legacy patterns
 * props onto those components. `navigation`, `resourceHeader`, and `controls`
 * are forwarded to `F0Drawer` when `position` is `"left"` or `"right"`.
 * `asBottomSheetInMobile` is accepted but ignored (handled internally).
 */
export const F0Dialog: FC<F0DialogInternalProps> = ({
  isOpen,
  onClose,
  position = "center",
  width = "md",
  primaryAction,
  secondaryAction,
  title,
  description,
  module,
  otherActions,
  children,
  disableContentPadding,
  container,
  tabs,
  activeTabId,
  setActiveTabId,
  // Accepted but ignored — mobile behaviour is handled internally.
  asBottomSheetInMobile: _asBottomSheetInMobile,
  navigation,
  resourceHeader,
  controls,
}) => {
  const commonProps = {
    isOpen,
    onClose,
    primaryAction,
    secondaryAction,
    title,
    description,
    module,
    otherActions,
    disableContentPadding,
    container,
    ...(tabs ? { tabs, activeTabId, setActiveTabId } : {}),
  }

  if (position === "left" || position === "right") {
    return (
      <F0Drawer
        position={position}
        navigation={navigation}
        resourceHeader={resourceHeader}
        controls={controls}
        {...commonProps}
      >
        {children}
      </F0Drawer>
    )
  }

  return (
    <DialogAlike
      size={position === "fullscreen" ? "fullscreen" : width}
      {...commonProps}
    >
      {children}
    </DialogAlike>
  )
}

F0Dialog.displayName = "F0Dialog"
