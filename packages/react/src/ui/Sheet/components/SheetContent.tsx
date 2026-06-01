"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

import { cn } from "../../../lib/utils"
import { SheetOverlay } from "./SheetOverlay"
import { SheetPortal } from "./SheetPortal"

export const sheetSides = ["top", "right", "bottom", "left"] as const
export type SheetSide = (typeof sheetSides)[number]

const sideClasses: Record<SheetSide, string> = {
  top: "inset-x-0 top-0 h-auto border-b data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
  right:
    "inset-y-0 right-0 h-full border-l data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  bottom:
    "inset-x-0 bottom-0 h-auto border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
  left: "inset-y-0 left-0 h-full border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
}

export interface SheetContentProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> {
  side?: SheetSide
  withOverlay?: boolean
  withShadow?: boolean
  container?: HTMLElement | null
}

export const SheetContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = "right",
      withOverlay = true,
      withShadow = true,
      container,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <SheetPortal container={container ?? undefined}>
      {withOverlay && <SheetOverlay />}
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col gap-0 border-solid border-f1-border bg-f1-background text-f1-foreground transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
          withShadow && "shadow-lg",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
)
SheetContent.displayName = DialogPrimitive.Content.displayName
