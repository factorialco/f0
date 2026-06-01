"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

import { cn } from "../../../lib/utils"

export const SheetDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-f1-foreground-secondary", className)}
    {...props}
  />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName
