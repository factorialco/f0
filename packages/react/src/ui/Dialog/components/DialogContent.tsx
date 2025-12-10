"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef, useEffect, useState } from "react"

import { cn } from "../../../lib/utils"
import { DialogOverlay } from "./DialogOverlay"
import { DialogPortal } from "./DialogPortal"

export const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    wrapperClassName?: string
    withTraslateAnimation?: boolean
    container?: HTMLElement | null
  }
>(
  (
    {
      wrapperClassName,
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
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            withTraslateAnimation &&
              "data-[state=open]:slide-in-to-bottom-[48%] data-[state=closed]:slide-out-to-top-[48%]",
            wrapperClassName
          )}
          {...props}
        >
          <div
            className={cn(
              "relative flex w-[90%] flex-col rounded-xl border bg-f1-background shadow-lg",
              "pointer-events-auto",
              className
            )}
          >
            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    )
  }
)
DialogContent.displayName = DialogPrimitive.Content.displayName
