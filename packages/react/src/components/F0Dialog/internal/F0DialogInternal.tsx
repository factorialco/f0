import { Dialog, DialogContent } from "@/ui/Dialog/dialog";
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer";
import { cva } from "cva";
import { FC, useCallback, useMemo, useState } from "react";
import { F0DialogProvider } from "../components/F0DialogProvider";
import { DialogInternalProps } from "./internal-types";
import { useIsSmallScreen } from "./utils";
import { DialogLayout } from "../components/DialogLayout";

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
      fullscreen: "inset-6",
    },
  },
  defaultVariants: {
    variant: "center",
  },
});

const dialogContentClassName = cva({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition:
        "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex max-h-[85vh] flex-1 flex-col rounded-xl",
      fullscreen: "h-full w-full rounded-xl",
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
});

export const DialogInternal: FC<DialogInternalProps> = ({
  asBottomSheetInMobile = true,
  position = "center",
  disableClose = false,
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
  tabs,
  activeTabId,
  setActiveTabId,
  disableContentPadding,
}) => {

  // Defailt variant exclusive props
  const 

  // Use state to store the container element so we can trigger re-renders
  // when it's set. This ensures child components like F0Select get the
  // correct portalContainer after the dialog content mounts.
  const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);

  // Callback ref to update both the ref and state
  const setContentRef = useCallback((node: HTMLDivElement | null) => {
    // Update state to trigger re-render so children get the new container
    setContainerElement(node);
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const isSmallScreen = useIsSmallScreen();

  const isSidePosition = position === "left" || position === "right";

  const variant = useMemo(() => {
    // asBottomSheetInMobile is deprecated this should be an automatic behavior
    if (isSmallScreen && asBottomSheetInMobile) {
      return "bottomSheet";
    }

    // @deprecated
    if (position === "fullscreen") {
      return "fullscreen";
    }
    // @deprecated
    if (isSidePosition) {
      return "sidePosition";
    }
    return "center";
  }, [isSmallScreen, asBottomSheetInMobile, isSidePosition, position]);

  // Forces the width to be "sm" for sidePosition variants
  const localWidth = useMemo(() => {
    if (variant === "sidePosition") {
      return "sm";
    }
    if (width && position !== "center") {
      console.warn("F0Dialog: `width` prop is only applicable to center position");
    }

    return width;
  }, [variant, width, position]);

  const contentClassName = useMemo(() => {
    return dialogContentClassName({
      variant,
      position,
      width: localWidth,
    });
  }, [variant, position, localWidth]);

  const _memoizedDialogLayout = useMemo(() => {
    return (
      <DialogLayout
        header={{
          title,
          description,
          module,
          otherActions,
          tabs,
          activeTabId,
          setActiveTabId,
          disableClose,
        }}
        content={{ disableContentPadding: disableContentPadding ?? false, children }}
        footer={{ primaryAction: primaryAction ?? [], secondaryAction: secondaryAction ?? [] }}
      />
    );
  }, [
    title,
    description,
    module,
    otherActions,
    tabs,
    activeTabId,
    setActiveTabId,
    disableClose,
    disableContentPadding,
    children,
    primaryAction,
    secondaryAction,
  ]);

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
            {_memoizedDialogLayout}
          </DrawerContent>
        </Drawer>
      </F0DialogProvider>
    );
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
          wrapperClassName={dialogWrapperClassName({
            variant,
            position,
          })}
          className={contentClassName}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => (disableClose ? e.preventDefault() : undefined)}
          onPointerDownOutside={disableClose ? (e) => e.preventDefault() : undefined}
          onInteractOutside={disableClose ? (e) => e.preventDefault() : undefined}
        >
          {_memoizedDialogLayout}
        </DialogContent>
      </Dialog>
    </F0DialogProvider>
  );
};
