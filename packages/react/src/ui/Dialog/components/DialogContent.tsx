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
    withTranslateAnimation?: boolean
    /**
     * HOW IT ARRIVES.
     *
     * - `"scale"` (the default) — fades while zooming from 95% and sliding down,
     *   which reads as a card arriving over the page. Right when the dialog is
     *   a card on a page.
     * - `"fade"` — opacity only. For a dialog that is already the whole screen,
     *   where a zoom is the screen itself lurching and there is nothing behind
     *   it for the card to arrive over.
     *
     * A prop rather than classes layered on top: the zoom is applied under a
     * `data-[state]` selector, so an override has to win a specificity fight it
     * has no business being in. Not emitting it is the honest way to not have
     * it.
     */
    animation?: "scale" | "fade"
    /**
     * Extra classes for the dimming layer behind the dialog.
     *
     * Mostly for taking the dim AWAY — `bg-transparent` — when the dialog covers
     * the whole screen and there is nothing left to dim. The overlay still
     * mounts: Radix hangs the dismiss-on-outside-press and the scroll lock off
     * it, so removing it would take real behaviour with it.
     */
    overlayClassName?: string
    container?: HTMLElement | null
    /**
     * Id of the element to portal into when no explicit `container` is given.
     * Resolved at mount; falls back to `#content`, then to `document.body`
     * (Radix default) when neither element exists.
     * @default "content"
     */
    defaultContainerId?: string
  }
>(
  (
    {
      wrapperClassName,
      className,
      children,
      withTranslateAnimation = true,
      animation = "scale",
      overlayClassName,
      container: propContainer,
      defaultContainerId = "content",
      ...props
    },
    ref
  ) => {
    const [container, setContainer] = useState<HTMLElement | null>()

    useEffect(() => {
      if (propContainer !== undefined) {
        setContainer(propContainer)
      } else {
        // Prefer the requested default target (e.g. the top-level overlay root
        // for center/fullscreen modals, escaping app stacking contexts), then
        // the app shell's `#content`, and finally the document body so the
        // dialog still renders in contexts that have neither.
        setContainer(
          document.getElementById(defaultContainerId) ??
            document.getElementById("content") ??
            document.body
        )
      }
    }, [propContainer, defaultContainerId])

    if (container === undefined) return null

    return (
      <DialogPortal container={container}>
        <DialogOverlay className={overlayClassName} />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            animation === "scale" &&
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            animation === "scale" &&
              withTranslateAnimation &&
              "data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]",
            wrapperClassName
          )}
          {...props}
        >
          <div
            className={cn(
              "relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg",
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
