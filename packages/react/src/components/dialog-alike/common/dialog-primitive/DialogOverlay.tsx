"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { useDialogPrimitiveContext } from "./context"

export const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const context = useDialogPrimitiveContext()

  // `modal` and `showOverlay` are separate questions: one is whether the dialog
  // TRAPS you (closable only through its actions), the other is whether it dims
  // what is behind it. Reading the dim as a trap made every scrim-wearing
  // dialog Radix-modal, which swallowed the very click that dismissed it -- so
  // dismissing a dialog and clicking the thing underneath took two clicks.
  const { modal } = context

  return (
    <>
      <DialogPrimitive.Root {...context} modal={modal}>
        <div
          data-state={context.open ? "open" : "closed"}
          ref={ref}
          className={cn(
            "fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            // A trapping dialog's scrim is the thing you click to be told "no"
            // (see the shake in `DialogContent`). A dismissible one's scrim is
            // decoration, and must let the click reach whatever it is covering.
            modal ? "pointer-events-auto" : "pointer-events-none",
            "transition-all duration-200",
            className
          )}
          {...props}
          style={{ pointerEvents: modal ? "auto" : "none", ...props.style }}
        />
      </DialogPrimitive.Root>
    </>
  )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
