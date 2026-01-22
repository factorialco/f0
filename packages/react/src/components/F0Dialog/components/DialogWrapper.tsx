import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer";
import { F0DialogProvider } from "../_components/F0DialogProvider";
import { useMemo } from "react";
import { useMediaQuery } from "@reactuses/core";
import { breakpoints } from "@factorialco/f0-core";
import { Dialog, DialogContent } from "@/ui/Dialog";

export type DialogMode = "sheet" | "dialog" | "auto";

export type DialogPosition = "left" | "right" | "center" | "fullscreen";

export type DialogWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  position: DialogPosition;
  portalContainer: HTMLElement | null;
  shownBottomSheet: boolean;
  /**
   * The mode to use for the dialog.
   * @default "auto"
   * @description If "auto", the dialog will be a sheet on small screens and a dialog on large screens.
   */
  mode?: DialogMode;
  /**
   * The children to render inside the dialog.
   */
  children: React.ReactNode;
  /**
   * The breakpoint to use for the auto mode.
   * If not provided, the default breakpoint will be used.
   * @default breakpoints.md
  */
  breakpoint?: number;

  /**
   * The content class name to use for the dialog.
   * @default "w-full max-w-md"
   */
  contentClassName?: string;
}
/**
 * This is a helper component to wrap the dialog content in a drawer or dialog component.
 * It is used to provide the context for the dialog and to handle the open and close state.
 * @param props 
 * @returns 
 */
export const DialogWrapper = ({isOpen, onClose, position, portalContainer, mode, children, breakpoint = breakpoints.md, contentClassName}: DialogWrapperProps) => {

    const isSmallScreen = useMediaQuery(`(max-width: ${breakpoint}px)`, {
        initializeWithValue: true,
    });


    const localMode: Exclude<DialogMode, "auto"> = useMemo(() => {
        if (mode === "auto") {
            return isSmallScreen ? "sheet" : "dialog";
        }
        return mode;
    }, [mode, isSmallScreen]);

  return (
    <F0DialogProvider
        isOpen={isOpen}
        onClose={onClose}
        position={position}
        portalContainer={portalContainer ?? undefined}
        shownBottomSheet
      >
        {localMode === "sheet" ? (
            <Drawer open={isOpen} onOpenChange={handleOpenChange}>
            <DrawerOverlay className="bg-f1-background-overlay" />
            <DrawerContent ref={setContentRef} className={contentClassName}>
                {children}
            </DrawerContent>
            </Drawer>
        )
    : (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent ref={setContentRef} className={contentClassName}>
                {children}
            </DialogContent>
        </Dialog>
    )}
        
      </F0DialogProvider>
    )
};