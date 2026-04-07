import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

import { useF0Dialog } from "./F0DialogProvider"

export type F0DialogContentProps = {
  children: React.ReactNode
  /**
   * Disable the default padding from the dialog content area
   * @default false
   */
  disableContentPadding?: boolean
}

const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 h-4",
      position === "top"
        ? [
            "top-0",
            "bg-gradient-to-b from-f1-background-secondary to-transparent",
            "after:top-0",
          ]
        : [
            "bottom-0",
            "bg-gradient-to-t from-f1-background-secondary to-transparent",
            "after:bottom-0",
          ]
    )}
  />
)

export const F0DialogContent = ({
  children,
  disableContentPadding = false,
}: F0DialogContentProps) => {
  const { position } = useF0Dialog()
  const viewportRef = useRef<HTMLDivElement>(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(true)

  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    setIsAtTop(scrollTop <= 0)
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1)
  }, [])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    el.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    const observer = new ResizeObserver(() => handleScroll())
    observer.observe(el)

    return () => {
      el.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [handleScroll])

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <ScrollArea
        viewportRef={viewportRef}
        className={cn(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
          !disableContentPadding && "px-4 [&>div]:py-4",
          position === "fullscreen" &&
            "h-full [&>div]:h-full [&>div>div]:h-full"
        )}
      >
        {children}
        <ScrollBar
          orientation="vertical"
          className="[&_div]:bg-f1-background"
        />
      </ScrollArea>

      <AnimatePresence>
        {!isAtTop && <ScrollShadow position="top" key="shadow-top" />}
        {!isAtBottom && <ScrollShadow position="bottom" key="shadow-bottom" />}
      </AnimatePresence>
    </div>
  )
}
