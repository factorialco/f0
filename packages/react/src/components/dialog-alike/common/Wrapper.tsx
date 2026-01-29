import { cva } from "cva"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/ui/Dialog"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"

import { DialogWrapperProvider } from "./DialogWrapperProvider"
import { DialogAlikeSize } from "./types"

export const useIsSmallScreen = () =>
  useMediaQuery("(max-width: 560px)", {
    initializeWithValue: false,
  })

const dialogWrapperClassName = cva({
  variants: {
    position: {
      right:
        "absolute flex flex-col rounded-md w-full left-auto right-0 items-end p-3",
      left: "absolute flex flex-col rounded-md w-full left-0 items-start p-3",
      center: "p-6",
    },
  },
  defaultVariants: {
    position: "center",
  },
})

const dialogContentClassName = cva({
  base: "max-w-full max-h-full",
  variants: {
    size: {
      sm: "max-w-[480px]",
      md: "max-w-[640px]",
      lg: "max-w-[800px]",
      xl: "max-w-[960px]",
      fullscreen: "w-full h-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

/**
 * The mode to use for the dialog.
 * @description If "auto", the dialog will be a sheet on small screens and a dialog on large screens.
 */
export type DialogMode = "sheet" | "dialog" | "auto"

/**
 * The position of the dialog.
 * @description The dialog will be displayed in the center of the screen by default.
 */
export type DialogPosition = "left" | "right" | "center"

export type DialogWrapperProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onClose: () => void
  position: DialogPosition

  /**
   * The children to render inside the dialog.
   */
  children: React.ReactNode
  /**
   * Whether the dialog should be modal (only closable by clickiong the actions).
   * @default false
   */
  modal?: boolean

  /**
   * The width of the dialog.
   * @default "md"
   */
  size?: DialogAlikeSize

  /**
   * Whether the overlay should be shown.
   * @default true
   */
  showOverlay?: boolean

  /**
   * Whether the dialog should have a full height.
   * @default false
   */
  fullHeight?: boolean
}
/**
 * This is a helper component to wrap the dialog content in a drawer or dialog component.
 * It is used to provide the context for the dialog and to handle the open and close state.
 * @param props
 * @returns
 */
export const DialogWrapper = ({
  isOpen,
  onOpenChange,
  onClose,
  position,
  children,
  modal = false,
  showOverlay = true,
  size = "md",
  fullHeight = false,
}: DialogWrapperProps) => {
  // Use state to store the container element so we can trigger re-renders
  // when it's set. This ensures child components like F0Select get the
  // correct portalContainer after the dialog content mounts.
  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null)

  // Callback ref to update both the ref and state
  const setContentRef = useCallback((node: HTMLDivElement | null) => {
    // Update state to trigger re-render so children get the new container
    setContainerElement(node)
  }, [])

  const isSmallScreen = useIsSmallScreen()

  const handleOpenChange = useCallback(
    (open: boolean) => {
      onOpenChange?.(open)
      if (!open) {
        onClose()
      }
    },
    [onClose, onOpenChange]
  )

  // Track the previous value of isOpen to detect transitions
  const prevIsOpenRef = useRef<boolean | undefined>(undefined)

  useEffect(() => {
    // Only call onClose if isOpen transitions from true to false
    // Skip on initial mount (when prevIsOpenRef.current is undefined)
    if (prevIsOpenRef.current === true && !isOpen) {
      onClose()
    }
    // Update the ref for the next render
    prevIsOpenRef.current = isOpen
  }, [isOpen, onClose])

  const isSidePosition = useMemo(() => {
    return position === "left" || position === "right"
  }, [position])

  const localSize: DialogAlikeSize = useMemo(() => {
    if (isSidePosition) {
      return "sm"
    }
    if (size && position !== "center") {
      console.warn(
        "F0Dialog: `size` prop is only applicable to center position"
      )
    }

    return size
  }, [isSidePosition, size, position])

  const runwayEventCallback = (e: any) => {
    if (modal) {
      e.preventDefault()
    }
  }

  const animation: Record<DialogPosition, "zoom" | "slideLeft" | "slideRight"> =
    {
      left: "slideRight",
      right: "slideLeft",
      center: "zoom",
    }
  return (
    <DialogWrapperProvider
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      portalContainer={containerElement ?? null}
      shownBottomSheet
    >
      {isSmallScreen ? (
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerOverlay
            className={cn("bg-f1-background-overlay", fullHeight && "h-full")}
          />
          <DrawerContent
            ref={setContentRef}
            className="max-h-100 bg-f1-background"
          >
            {children}
          </DrawerContent>
        </Drawer>
      ) : (
        // We force the modal as we dont want to allow the user to click outside the dialog to close it
        <Dialog
          open={isOpen}
          onOpenChange={handleOpenChange}
          modal={modal}
          showOverlay={showOverlay}
        >
          <DialogContent
            ref={setContentRef}
            wrapperClassName={dialogWrapperClassName({ position })}
            className={cn(
              dialogContentClassName({ size: localSize }),
              fullHeight && "h-full"
            )}
            animation={animation[position]}
            onOpenAutoFocus={(e) => e.preventDefault()}
            onEscapeKeyDown={runwayEventCallback}
            onPointerDownOutside={runwayEventCallback}
            onInteractOutside={runwayEventCallback}
          >
            {children}
          </DialogContent>
        </Dialog>
      )}
    </DialogWrapperProvider>
  )
}
