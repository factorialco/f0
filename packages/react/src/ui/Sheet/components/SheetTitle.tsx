"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

import { cn } from "../../../lib/utils"

export const SheetTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-base font-semibold text-f1-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName
