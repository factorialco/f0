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
 * props onto those components. The following props no longer have an
 * equivalent in the dialog-alike API and are accepted but ignored:
 * `asBottomSheetInMobile` (mobile behaviour is handled internally),
 * `navigation`, `resourceHeader` and `controls`.
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
  // Deprecated props with no dialog-alike equivalent. Destructured so they are
  // not forwarded; kept in the signature for backward compatibility.
  asBottomSheetInMobile: _asBottomSheetInMobile,
  navigation: _navigation,
  resourceHeader: _resourceHeader,
  controls: _controls,
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
      <F0Drawer position={position} {...commonProps}>
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
