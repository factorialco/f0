"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef, useCallback, useEffect, useRef, useState } from "react"

type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent
}>

import { animate } from "motion"

import { cn } from "../../../lib/utils"
import { useDialogPrimitiveContext } from "../context"
import { DialogAnimation } from "../types"
import { DialogOverlay } from "./DialogOverlay"
import { DialogPortal } from "./DialogPortal"

const animationClassName = (animation: DialogAnimation) => {
  return cn(
    animation === "zoom" &&
      "group-data-[state=closed]:zoom-out-95 group-data-[state=open]:zoom-in-95",
    animation === "slideLeft" &&
      "group-data-[state=closed]:slide-out-to-right-full group-data-[state=open]:slide-in-from-right-full",
    animation === "slideRight" &&
      "group-data-[state=closed]:slide-out-to-left-full group-data-[state=open]:slide-in-from-left-full"
  )
}

export const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    wrapperClassName?: string
    container?: HTMLElement | null
    animation?: DialogAnimation
  }
>(
  (
    {
      wrapperClassName,
      animation = "zoom",
      className,
      children,
      container: propContainer,
      ...props
    },
    ref
  ) => {
    const [container, setContainer] = useState<HTMLElement | null>()
    const contentRef = useRef<HTMLDivElement>(null)

    // Shake the content when the dialog is opened and clicked outside in modal mode
    const shake = useCallback(() => {
      if (contentRef.current) {
        animate(
          contentRef.current,
          { x: [-15, 15, -10, 10, 0] },
          { duration: 0.3, ease: "easeInOut" }
        )
      }
    }, [contentRef.current])

    useEffect(() => {
      if (propContainer !== undefined) {
        setContainer(propContainer)
      } else {
        setContainer(document.getElementById("content"))
      }
    }, [propContainer])

    // useEffect(() => {
    //   if (contentRef.current) {
    //     // Force a reflow to ensure transition triggers
    //     requestAnimationFrame(() => {
    //       if (contentRef.current) {
    //         contentRef.current.offsetHeight // Force reflow
    //       }
    //     })
    //   }
    // }, [])

    const context = useDialogPrimitiveContext()

    if (container === undefined) return null

    return (
      <DialogPortal container={container}>
        {context.showOverlay && <DialogOverlay />}
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "pointer-events-none",
            "group",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            wrapperClassName
          )}
          style={{
            transition: "all 2s 100ms !important",
          }}
          {...props}
          onClick={(e) => {
            if (props.onPointerDownOutside) {
              const syntheticEvent = new CustomEvent("pointerdownoutside", {
                detail: { originalEvent: e.nativeEvent },
              }) as PointerDownOutsideEvent
              props.onPointerDownOutside(syntheticEvent)
            }

            if (context.modal) {
              shake()
            }
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <div
            ref={contentRef}
            className={cn(
              "relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg pointer-events-auto",
              "group-data-[state=open]:animate-in group-data-[state=closed]:animate-out",
              animationClassName(animation),
              className
            )}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    )
  }
)
DialogContent.displayName = DialogPrimitive.Content.displayName
