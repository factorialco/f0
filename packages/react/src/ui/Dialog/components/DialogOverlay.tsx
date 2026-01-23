"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { useDialogPrimitiveContext } from "../context"

export const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const context = useDialogPrimitiveContext()

  const modal = context.modal || context.showOverlay

  return (
    <DialogPrimitive.Root {...context} modal={modal}>
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "pointer-events-auto",
          className
        )}
        {...props}
        style={{ pointerEvents: "auto", ...props.style }}
      />
    </DialogPrimitive.Root>
  )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
