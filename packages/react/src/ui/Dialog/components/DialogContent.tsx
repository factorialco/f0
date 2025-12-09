"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef, useEffect, useState } from "react"

import { cn } from "../../../lib/utils"
import { DialogOverlay } from "./DialogOverlay"
import { DialogPortal } from "./DialogPortal"

export const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    withTraslateAnimation?: boolean
    container?: HTMLElement | null
  }
>(
  (
    {
      className,
      children,
      withTraslateAnimation = true,
      container: propContainer,
      ...props
    },
    ref
  ) => {
    const [container, setContainer] = useState<HTMLElement | null>()

    useEffect(() => {
      if (propContainer !== undefined) {
        setContainer(propContainer)
      } else {
        setContainer(document.getElementById("content"))
      }
    }, [propContainer])

    if (container === undefined) return null

    return (
      <DialogPortal container={container}>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <DialogOverlay />
          <DialogPrimitive.Content
            ref={ref}
            className={cn(
              "relative z-50 flex w-[90%] flex-col rounded-xl border bg-f1-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              withTraslateAnimation &&
                "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
              className
            )}
            {...props}
          >
            {children}
          </DialogPrimitive.Content>
        </div>
      </DialogPortal>
    )
  }
)
DialogContent.displayName = DialogPrimitive.Content.displayName
