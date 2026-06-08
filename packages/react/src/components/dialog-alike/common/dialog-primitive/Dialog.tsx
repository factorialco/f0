"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"

import { DialogPrimitiveContext } from "./context"
import { DialogProps } from "./types"

/**
 * Dialog primitive root used by the dialog-alike system.
 *
 * This is a private fork of `@/ui/Dialog`'s root that provides the
 * `DialogPrimitiveContext` consumed by the forked `DialogContent` /
 * `DialogOverlay`. It is intentionally kept separate from `@/ui/Dialog`
 * so the existing (deprecated) `@/patterns/F0Dialog` keeps using the
 * original primitives unchanged.
 */
export const Dialog = (props: DialogProps) => {
  return (
    <DialogPrimitiveContext.Provider
      value={{ ...props, showOverlay: props.showOverlay }}
    >
      <DialogPrimitive.Root {...props} />
    </DialogPrimitiveContext.Provider>
  )
}
