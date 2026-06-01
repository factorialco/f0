import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent } from "@/ui/Sheet/sheet"

import { F0SidepanelFooter } from "./components/F0SidepanelFooter"
import { F0SidepanelHeader } from "./components/F0SidepanelHeader"
import { F0SidepanelProps, SidepanelWidth } from "./types"

const EXIT_DURATION_MS = 200

const widthClasses: Record<SidepanelWidth, string> = {
  narrow: "w-full max-w-[360px]",
  wide: "w-full max-w-[600px]",
  wideXL: "w-full max-w-[800px]",
  extended: "w-[95vw] max-w-[95vw]",
  full: "w-screen max-w-full",
}

export const F0SidepanelInternal = ({
  open,
  onClose,
  onCloseClicked,
  title,
  closeLabel = "Close",
  side = "right",
  width = "narrow",
  boxPadding = true,
  footer,
  overlay = true,
  locked = false,
  allowBackgroundInteraction = false,
  headerBorder = false,
  options,
  navigation,
  children,
}: F0SidepanelProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // If the parent re-opens us before the exit-animation timeout has fired,
    // cancel the pending onClose so it doesn't run while the panel is visible.
    if (open && closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsOpen(open)
  }, [open])

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    },
    []
  )

  const requestClose = useCallback(() => {
    setIsOpen(false)
    onCloseClicked?.()
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => {
      onClose()
    }, EXIT_DURATION_MS)
  }, [onClose, onCloseClicked])

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      if (locked) return
      requestClose()
    }
  }

  return (
    <Sheet
      open={isOpen}
      onOpenChange={handleOpenChange}
      modal={!allowBackgroundInteraction}
    >
      <SheetContent
        side={side}
        withOverlay={overlay && !allowBackgroundInteraction}
        className={cn(widthClasses[width], "rounded-none")}
        onOpenAutoFocus={(event) => event.preventDefault()}
        onInteractOutside={(event) => {
          if (locked || allowBackgroundInteraction) event.preventDefault()
        }}
        onEscapeKeyDown={(event) => {
          if (locked) event.preventDefault()
        }}
      >
        <F0SidepanelHeader
          title={title}
          closeLabel={closeLabel}
          onCloseClick={requestClose}
          navigation={navigation}
          options={options}
          headerBorder={headerBorder}
        />

        <div
          className={cn(
            "flex-1 overflow-y-auto",
            boxPadding ? "px-6 py-6" : "p-0"
          )}
        >
          {children}
        </div>

        {footer && <F0SidepanelFooter>{footer}</F0SidepanelFooter>}
      </SheetContent>
    </Sheet>
  )
}
