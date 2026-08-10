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
    /**
     * Id of the element to portal into when no explicit `container` is given.
     * Resolved at mount; falls back to `#content`, then to `document.body`
     * (Radix default) when neither element exists.
     * @default "content"
     */
    defaultContainerId?: string
    animation?: DialogAnimation
    /**
     * Ref to the inner content box — the actually-sized element (`max-w-*`),
     * not the full-viewport `fixed inset-0` positioner the forwarded `ref`
     * lands on. Lets a parent measure the visible panel's width.
     */
    contentBoxRef?: (el: HTMLDivElement | null) => void
  }
>(
  (
    {
      wrapperClassName,
      animation = "zoom",
      className,
      children,
      container: propContainer,
      defaultContainerId = "content",
      contentBoxRef,
      ...props
    },
    ref
  ) => {
    const [container, setContainer] = useState<HTMLElement | null>()
    // Mutable (not RefObject) because `setContentEl` assigns `.current` directly.
    const contentRef = useRef<HTMLDivElement | null>(null)
    // Keep `contentRef` (used by `shake`) and hand the same node to the optional
    // `contentBoxRef` so a parent can measure the box.
    const setContentEl = useCallback(
      (el: HTMLDivElement | null) => {
        contentRef.current = el
        contentBoxRef?.(el)
      },
      [contentBoxRef]
    )

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
        // Prefer the requested default target (e.g. the top-level overlay root
        // for center modals), then the app shell's `#content`, and finally the
        // document body so the dialog still renders in contexts that have
        // neither (Storybook docs, tests, components opened outside the shell).
        setContainer(
          document.getElementById(defaultContainerId) ??
            document.getElementById("content") ??
            document.body
        )
      }
    }, [propContainer, defaultContainerId])

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
            ref={setContentEl}
            className={cn(
              "relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg pointer-events-auto",
              "group-data-[state=open]/dialog:animate-in group-data-[state=closed]/dialog:animate-out overflow-hidden",
              animationClassName(animation),
              className
            )}
            onClick={(e) => {
              // Stop propagation so clicks inside the dialog box are not treated as
              // outside-clicks by the wrapper handler above, and do not reach a
              // clickable ancestor rendering this dialog — React propagates
              // synthetic events along the component tree, so a portal does not
              // isolate them.
              //
              // Set React's own propagation flag rather than calling
              // `e.stopPropagation()`: that forwards to
              // `nativeEvent.stopPropagation()`, which halts the DOM event at
              // React's root container. Widgets embedded in a dialog that mount
              // their own React root need the DOM event to keep going — React 16
              // delegates every event at `document`, so such a widget otherwise
              // never observes its own clicks (silently, and with `mousedown` still
              // flowing, so its hover states look healthy).
              //
              // Also never `preventDefault()` here: this runs for every click
              // bubbling out of the dialog's contents, and it would cancel default
              // actions of inner controls — most visibly the native file picker,
              // opened by a programmatic `fileInputRef.click()` that passes through.
              e.isPropagationStopped = () => true
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
