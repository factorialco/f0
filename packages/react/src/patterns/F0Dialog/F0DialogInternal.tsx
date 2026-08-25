import { cva } from "cva"
import { FC, useCallback, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

import { Dialog, DialogContent } from "@/ui/Dialog/dialog"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"

import { F0DialogContent } from "./components/F0DialogContent"
import { F0DialogFooter } from "./components/F0DialogFooter"
import { F0DialogHeader } from "./components/F0DialogHeader"
import { F0DialogProvider } from "./components/F0DialogProvider"
import { F0DialogInternalProps } from "./internal-types"
import { useIsSmallScreen } from "./utils"

const dialogWrapperClassName = cva({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "absolute flex flex-col rounded-md w-full",
      center: "flex",
      fullscreen: "",
    },
    position: {
      right: "left-auto right-0 items-end p-3",
      left: "left-0 items-start p-3",
      center: "",
      // NO INSET ON A PHONE. A fullscreen dialog inset by 24px is a card with
      // the page showing round it; at 560px wide that gutter is most of what is
      // left of the margins. `560px` is `useIsSmallScreen`'s own breakpoint, so
      // the frame and the components inside it change over together.
      fullscreen: "inset-6 max-[560px]:inset-0",
    },
  },
  defaultVariants: {
    variant: "center",
  },
})

const dialogContentClassName = cva({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition:
        "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
      // ...and no rounded corners with nothing to round them against.
      fullscreen: "h-full w-full rounded-xl max-[560px]:rounded-none",
    },
    position: {
      left: "",
      right: "",
      center: "",
      fullscreen: "",
    },
    width: {
      sm: "max-w-[480px]",
      md: "max-w-[640px]",
      lg: "max-w-[800px]",
      xl: "max-w-[960px]",
    },
  },
  compoundVariants: [
    {
      variant: "fullscreen",
      width: ["sm", "md", "lg", "xl"],
      class: "max-w-full",
    },
  ],
  defaultVariants: {
    variant: "center",
  },
})

export const F0DialogInternal: FC<F0DialogInternalProps> = ({
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
  navigation,
  resourceHeader,
  controls,
  headerStatus,
  sideControls,
  tabs,
  activeTabId,
  setActiveTabId,
  disableContentPadding,
  container: containerProp,
}) => {
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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  const isSmallScreen = useIsSmallScreen()

  const isSidePosition = position === "left" || position === "right"

  const variant = useMemo(() => {
    if (isSmallScreen && asBottomSheetInMobile) {
      return "bottomSheet"
    }
    if (position === "fullscreen") {
      return "fullscreen"
    }
    if (isSidePosition) {
      return "sidePosition"
    }
    return "center"
  }, [isSmallScreen, asBottomSheetInMobile, isSidePosition, position])

  // Side panel positions (left/right) accept width variants
  const localWidth = useMemo(() => {
    if (width && !["center", "left", "right"].includes(position)) {
      console.warn(
        "F0Dialog: `width` prop is only applicable to center and side panel positions"
      )
    }

    return width
  }, [variant, width, position])

  const contentClassName = useMemo(() => {
    return dialogContentClassName({
      variant,
      position,
      width: localWidth,
    })
  }, [variant, position, localWidth])

  // Center & fullscreen modals portal to the top-level overlay root so they
  // escape app stacking contexts (e.g. the ApplicationFrame `isolate` layer
  // where the fullscreen AI chat paints at z-20). Side drawers (left/right)
  // stay docked inside `#content`.
  const defaultContainerId = isSidePosition ? "content" : "f0-overlay-root"

  if (resourceHeader && !isSidePosition) {
    console.warn(
      "F0Dialog: `resourceHeader` is only applicable to side panel positions (left/right)"
    )
  }

  const headerProps = {
    title,
    description,
    module,
    otherActions,
    navigation,
    resourceHeader,
    controls,
    headerStatus,
    tabs,
    activeTabId,
    setActiveTabId,
  }

  /**
   * The flanking controls. They are children of the PANEL — which is already
   * `relative` and `pointer-events-auto` — and merely positioned outside its
   * box, so they sit inside Radix's focus trap and are reachable by keyboard.
   * Rendered next to the dialog instead they would be `aria-hidden` and inert.
   *
   * `-left-14`/`-right-14` clears the panel by 56px on a screen with room for
   * it. A BOTTOM SHEET has no such room — it is the width of the phone — so
   * there they come back onto the panel's own edges and float over the content,
   * which is where a gallery has always put them.
   */
  // AN ELEMENT, NOT A COMPONENT. Declared as a local function component and
  // rendered as a tag, it would be a brand-new component TYPE on every render,
  // so React would tear the arrows down and rebuild them each time — losing
  // focus mid-interaction, and dropping a click between its own pointerdown and
  // mouseup because the node the press started on no longer exists.
  /**
   * ON A PHONE THE CONTROLS COME DOWN, into a bar across the bottom of the
   * panel, rather than flanking it.
   *
   * There is nothing to flank: the dialog is the width of the screen, so
   * "outside the panel" is off it. Floating them over the content instead —
   * where a gallery puts them — costs the content two thumb-sized holes and puts
   * the controls exactly where a thumb rests by accident. A bar is the phone
   * idiom: fixed, reachable, and out of the reading.
   *
   * `sticky` rather than `absolute`, so it sits under the content in the flow
   * and holds the bottom of a panel that scrolls.
   */
  const controlsInBar = isSmallScreen
  const isFullscreenOnPhone = isSmallScreen && position === "fullscreen"
  const sideControlsSeat = "absolute top-1/2 z-10 -translate-y-1/2"
  const renderedSideControls = !sideControls ? null : controlsInBar ? (
    <div
      className={cn(
        "sticky bottom-0 z-10 flex shrink-0 flex-row items-center justify-between gap-2",
        "border border-x-0 border-b-0 border-t border-solid border-f1-border-secondary",
        "bg-f1-background px-4 py-3"
      )}
    >
      {sideControls.previous}
      {sideControls.next}
    </div>
  ) : (
    <>
      {sideControls.previous ? (
        <div className={cn(sideControlsSeat, "-left-14")}>
          {sideControls.previous}
        </div>
      ) : null}
      {sideControls.next ? (
        <div className={cn(sideControlsSeat, "-right-14")}>
          {sideControls.next}
        </div>
      ) : null}
    </>
  )

  if (isSmallScreen && asBottomSheetInMobile) {
    return (
      <F0DialogProvider
        isOpen={isOpen}
        onClose={onClose}
        position={position}
        portalContainer={containerElement}
        shownBottomSheet
      >
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerOverlay className="bg-f1-background-overlay" />
          <DrawerContent ref={setContentRef} className={contentClassName}>
            <F0DialogHeader {...headerProps} />
            <F0DialogContent disableContentPadding={disableContentPadding}>
              {children}
            </F0DialogContent>
            {renderedSideControls}
            <F0DialogFooter
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />
          </DrawerContent>
        </Drawer>
      </F0DialogProvider>
    )
  }

  return (
    <F0DialogProvider
      isOpen={isOpen}
      onClose={onClose}
      position={position}
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
          // A PLAIN FADE once the dialog is the whole screen. The default entry
          // zooms from 95% and slides down — motion that reads as a card
          // arriving over a page, which is what it is on a desktop. On a phone
          // the "card" is the screen, so the zoom is the screen itself lurching,
          // and the bigger the surface the more that costs.
          animation={isFullscreenOnPhone ? "fade" : "scale"}
          // NOTHING LEFT TO DIM. The panel already covers the screen, so the
          // only moment the overlay is ever visible is the fade itself — showing
          // through a panel that is briefly semi-transparent, as a grey flash on
          // the way in and again on the way out. It still mounts, because Radix
          // hangs dismissal and the scroll lock off it; it just stops painting.
          overlayClassName={isFullscreenOnPhone ? "bg-transparent" : undefined}
          wrapperClassName={dialogWrapperClassName({
            variant,
            position,
          })}
          className={contentClassName}
          onOpenAutoFocus={(e) => e.preventDefault()}
          container={containerProp}
          defaultContainerId={defaultContainerId}
        >
          {controlsInBar ? null : renderedSideControls}
          <F0DialogHeader {...headerProps} />
          <F0DialogContent disableContentPadding={disableContentPadding}>
            {children}
          </F0DialogContent>
          {controlsInBar ? renderedSideControls : null}
          <F0DialogFooter
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        </DialogContent>
      </Dialog>
    </F0DialogProvider>
  )
}
