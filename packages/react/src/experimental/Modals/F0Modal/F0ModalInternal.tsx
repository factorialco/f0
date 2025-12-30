import { Dialog, DialogContent } from "@/ui/Dialog/dialog"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"
import { cva } from "cva"
import { FC, useCallback, useMemo, useRef, useState } from "react"
import { F0ModalContent } from "./components/F0ModalContent"
import { F0ModalFooter } from "./components/F0ModalFooter"
import { F0ModalHeader } from "./components/F0ModalHeader"
import { F0ModalProvider } from "./components/F0ModalProvider"
import { F0ModalInternalProps } from "./internal-types"
import { useIsSmallScreen } from "./utils"

const modalWrapperClassName = cva({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition:
        "absolute bottom-3 top-3 flex w-full translate-x-0 translate-y-0 flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex",
      fullscreen: "",
    },
    position: {
      right: "left-auto right-3 items-end",
      left: "left-3 items-start",
      center: "",
      fullscreen: "inset-6",
    },
  },
  defaultVariants: {
    variant: "center",
  },
})

const modalContentClassName = cva({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition:
        "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex max-h-[95%] min-w-[100px] flex-1 flex-col rounded-xl",
      fullscreen: "h-full w-full rounded-xl",
    },
    position: {
      left: "",
      right: "",
      center: "",
      fullscreen: "",
    },
    width: {
      sm: "max-w-[539px]",
      md: "max-w-[680px]",
      lg: "max-w-[820px]",
    },
  },
  compoundVariants: [
    {
      variant: "fullscreen",
      width: ["sm", "md", "lg"],
      class: "max-w-full",
    },
  ],
  defaultVariants: {
    variant: "center",
  },
})

export const F0ModalInternal: FC<F0ModalInternalProps> = ({
  asBottomSheetInMobile = true,
  position = "center",
  onClose,
  isOpen,
  children,
  width = "md",
  primaryAction,
  secondaryAction,
  title,
  description,
  module,
  otherActions,
  withPadding = false,
  tabs,
  activeTabId,
  setActiveTabId,
}) => {
  // Use state to store the container element so we can trigger re-renders
  // when it's set. This ensures child components like F0Select get the
  // correct portalContainer after the modal content mounts.
  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null)

  const portalContainerRef = useRef<HTMLDivElement | null>(null)

  // Callback ref to update both the ref and state
  const setContentRef = useCallback((node: HTMLDivElement | null) => {
    portalContainerRef.current = node
    // Update state to trigger re-render so children get the new container
    setContainerElement(node)
  }, [])

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  const isSmallScreen = useIsSmallScreen()

  const isSidePosition = position === "left" || position === "right"

  const variant = useMemo(() => {
    if (position === "fullscreen") {
      return "fullscreen"
    }
    if (isSmallScreen && asBottomSheetInMobile) {
      return "bottomSheet"
    }
    if (isSidePosition) {
      return "sidePosition"
    }
    return "center"
  }, [isSmallScreen, asBottomSheetInMobile, isSidePosition, position])

  // Forces the width to be "sm" for sidePosition variants
  const localWidth = useMemo(() => {
    if (variant === "sidePosition") {
      return "sm"
    }
    if (width && position !== "center") {
      console.warn(
        "F0Modal: `width` prop is only applicable to center position"
      )
    }

    return width
  }, [variant, width, position])

  const contentClassName = useMemo(() => {
    return modalContentClassName({
      variant,
      position,
      width: localWidth,
    })
  }, [variant, position, localWidth])

  const headerProps = {
    title,
    description,
    module,
    otherActions,
    tabs,
    activeTabId,
    setActiveTabId,
  }

  if (isSmallScreen && asBottomSheetInMobile) {
    return (
      <F0ModalProvider
        isOpen={isOpen}
        onClose={onClose}
        position={position}
        portalContainerRef={portalContainerRef}
        portalContainer={containerElement}
        shownBottomSheet
      >
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerOverlay className="bg-f1-background-overlay" />
          <DrawerContent ref={setContentRef} className={contentClassName}>
            <F0ModalHeader {...headerProps} />
            <F0ModalContent withPadding={withPadding}>
              {children}
            </F0ModalContent>
            <F0ModalFooter
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />
          </DrawerContent>
        </Drawer>
      </F0ModalProvider>
    )
  }

  return (
    <F0ModalProvider
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      portalContainerRef={portalContainerRef}
      portalContainer={containerElement}
    >
      <Dialog
        open={isOpen}
        onOpenChange={handleOpenChange}
        modal={position === "center" || position === "fullscreen"}
      >
        <DialogContent
          ref={setContentRef}
          withTranslateAnimation={!isSidePosition}
          wrapperClassName={modalWrapperClassName({
            variant,
            position,
          })}
          className={contentClassName}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <F0ModalHeader {...headerProps} />
          <F0ModalContent withPadding={withPadding}>{children}</F0ModalContent>
          <F0ModalFooter
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        </DialogContent>
      </Dialog>
    </F0ModalProvider>
  )
}
