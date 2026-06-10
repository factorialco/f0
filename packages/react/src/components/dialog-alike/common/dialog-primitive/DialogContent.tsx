"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef, useCallback, useEffect, useRef, useState } from "react"

type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent
}>

import { animate } from "motion"

import { cn } from "@/lib/utils"
import { DialogPortal } from "@/ui/Dialog/components/DialogPortal"

import { useDialogPrimitiveContext } from "./context"
import { DialogOverlay } from "./DialogOverlay"
import { DialogAnimation } from "./types"

const animationClassName = (animation: DialogAnimation) => {
  return cn(
    animation === "zoom" &&
      "group-data-[state=closed]/dialog:zoom-out-95 group-data-[state=open]/dialog:zoom-in-95",
    animation === "slideLeft" &&
      "group-data-[state=closed]/dialog:slide-out-to-right-full group-data-[state=open]/dialog:slide-in-from-right-full",
    animation === "slideRight" &&
      "group-data-[state=closed]/dialog:slide-out-to-left-full group-data-[state=open]/dialog:slide-in-from-left-full"
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
        // Prefer the app shell's `#content` element, but fall back to the
        // document body so the dialog still renders in contexts that don't
        // have it (Storybook docs, tests, components opened outside the shell).
        setContainer(document.getElementById("content") ?? document.body)
      }
    }, [propContainer])

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
            "group/dialog",
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
              "group-data-[state=open]/dialog:animate-in group-data-[state=closed]/dialog:animate-out overflow-hidden",
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
