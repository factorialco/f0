import { TabsProps } from "@/experimental/Navigation/Tabs"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/ui/dialog"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"
import { ComponentProps, FC, ReactElement, useMemo } from "react"
import { OneModalContent } from "./OneModalContent/OneModalContent"
import { OneModalHeader } from "./OneModalHeader/OneModalHeader"
import { OneModalProvider } from "./OneModalProvider"
import { ContentPadding, ModalPosition } from "./types"
import { useIsSmallScreen } from "./utils"

export type OneModalProps = {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal is closed */
  onClose: () => void
  /** Whether to render the modal as a bottom sheet on mobile */
  asBottomSheetInMobile?: boolean
  /** the padding of internal content areas (header, content, footer) */
  contentPadding?: ContentPadding
  position?: ModalPosition
  /** Custom content to render in the modal. Only accepts OneModal.Header and OneModal.Content components */
  children:
    | ReactElement<
        | ComponentProps<typeof OneModalHeader>
        | ComponentProps<typeof OneModalContent>
      >
    | ReactElement<
        | ComponentProps<typeof OneModalHeader>
        | ComponentProps<typeof OneModalContent>
      >[]
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export const OneModal: FC<OneModalProps> = ({
  asBottomSheetInMobile = true,
  position = "center",
  onClose,
  isOpen,
  contentPadding = "md",
  children,
}) => {
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  const isSmallScreen = useIsSmallScreen()

  const isSidePosition = position === "left" || position === "right"

  const contentClassName = useMemo(() => {
    if (isSmallScreen && asBottomSheetInMobile) {
      return "max-h-[95vh] bg-f1-background"
    }

    if (isSidePosition) {
      return cn(
        "w-full overflow-x-hidden flex flex-col absolute top-3 bottom-3 translate-y-0 translate-x-0 max-w-[539px] rounded-md border border-solid border-f1-border-secondary",
        position === "left" && "left-3",
        position === "right" && "left-auto right-3"
      )
    }

    if (position === "fullscreen") {
      return "w-[calc(100%-48px)] h-[calc(100%-48px)] overflow-x-hidden"
    }

    return "flex flex-col max-h-[620px] max-w-[680px] overflow-hidden"
  }, [position, isSmallScreen, asBottomSheetInMobile, isSidePosition])

  if (isSmallScreen && asBottomSheetInMobile) {
    return (
      <OneModalProvider
        isOpen={isOpen}
        onClose={onClose}
        position={position}
        contentPadding={contentPadding}
        shownBottomSheet
      >
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerOverlay className="bg-f1-background-overlay" />
          <DrawerContent className={contentClassName}>{children}</DrawerContent>
        </Drawer>
      </OneModalProvider>
    )
  }

  return (
    <OneModalProvider
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      contentPadding={contentPadding}
    >
      <Dialog
        open={isOpen}
        onOpenChange={handleOpenChange}
        modal={position === "center" || position === "fullscreen"}
      >
        <DialogContent
          withTraslateAnimation={!isSidePosition}
          className={contentClassName}
        >
          {children}
        </DialogContent>
      </Dialog>
    </OneModalProvider>
  )
}
