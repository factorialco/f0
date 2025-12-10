import { TabsProps } from "@/experimental/Navigation/Tabs"
import { Dialog, DialogContent } from "@/ui/Dialog/dialog"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"
import { cva } from "cva"
import {
  ComponentProps,
  FC,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"
import { OneModalContent } from "./OneModalContent/OneModalContent"
import { OneModalHeader } from "./OneModalHeader/OneModalHeader"
import { OneModalProvider } from "./OneModalProvider"
import { ContentPadding, ModalPosition, ModalWidth } from "./types"
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
  width?: ModalWidth
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

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
      fullscreen: "p-6",
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

export const OneModal: FC<OneModalProps> = ({
  asBottomSheetInMobile = true,
  position = "center",
  onClose,
  isOpen,
  contentPadding = "md",
  children,
  width = "md",
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
  }, [isSmallScreen, asBottomSheetInMobile, isSidePosition])

  const contentClassName = useMemo(() => {
    return modalContentClassName({
      variant,
      position,
      width,
    })
  }, [variant, position, width])

  if (isSmallScreen && asBottomSheetInMobile) {
    return (
      <OneModalProvider
        isOpen={isOpen}
        onClose={onClose}
        position={position}
        contentPadding={contentPadding}
        portalContainerRef={portalContainerRef}
        portalContainer={containerElement}
        shownBottomSheet
      >
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerOverlay className="bg-f1-background-overlay" />
          <DrawerContent ref={setContentRef} className={contentClassName}>
            {children}
          </DrawerContent>
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
          withTraslateAnimation={!isSidePosition}
          wrapperClassName={modalWrapperClassName({
            variant,
            position,
          })}
          className={contentClassName}
        >
          {children}
        </DialogContent>
      </Dialog>
    </OneModalProvider>
  )
}
