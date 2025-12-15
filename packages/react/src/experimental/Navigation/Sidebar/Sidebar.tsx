import { ScrollArea } from "@/ui/scrollarea"
import { AnimatePresence, motion } from "motion/react"
import { ReactElement, ReactNode, cloneElement, isValidElement } from "react"
import { useIntersectionObserver } from "usehooks-ts"
import { useReducedMotion } from "../../../lib/a11y"
import { useI18n } from "../../../lib/providers/i18n"
import { cn } from "../../../lib/utils"
import { useSidebar } from "../ApplicationFrame/FrameProvider"
import { SidebarFooter } from "./Footer"

const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      position === "top"
        ? ["top-0", "bg-gradient-to-b from-f1-background-secondary to-transparent", "after:top-0"]
        : [
            "bottom-0",
            "bg-gradient-to-t from-f1-background-secondary to-transparent",
            "after:bottom-0",
          ]
    )}
  />
)

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
  onFooterDropdownClick?: () => void
}

export function Sidebar({ header, body, footer, onFooterDropdownClick }: SidebarProps) {
  const { sidebarState, isSmallScreen } = useSidebar()
  const shouldReduceMotion = useReducedMotion()

  const [topRef, isAtTop] = useIntersectionObserver({ threshold: 1 })
  const [bottomRef, isAtBottom] = useIntersectionObserver({ threshold: 1 })
  const i18n = useI18n()

  const transition = {
    x: {
      ease:
        sidebarState !== "locked"
          ? isSmallScreen
            ? [0.25, 0.46, 0.45, 0.94]
            : [0.175, 0.885, 0.32, 1.1]
          : [0, 0, 0.58, 1],
      duration: shouldReduceMotion ? 0 : sidebarState !== "locked" && !isSmallScreen ? 0.3 : 0.2,
    },
    top: { duration: shouldReduceMotion ? 0 : 0.1 },
    left: { duration: shouldReduceMotion ? 0 : 0.1 },
    default: { duration: shouldReduceMotion ? 0 : 0.2 },
  }

  const renderFooter = () => {
    if (!footer) return null
    if (isValidElement(footer) && onFooterDropdownClick) {
      return cloneElement(footer as ReactElement<React.ComponentProps<typeof SidebarFooter>>, {
        onDropdownClick: onFooterDropdownClick,
      })
    }

    return footer
  }

  return (
    <motion.aside
      initial={false}
      aria-label={i18n.navigation.sidebar.label}
      className={cn(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        sidebarState === "locked"
          ? "h-full"
          : cn(
              "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
              isSmallScreen
                ? "h-full border-y-transparent border-l-transparent bg-f1-background/90"
                : "h-[calc(100%-16px)] bg-f1-background/60"
            )
      )}
      animate={{
        top: sidebarState === "locked" ? 0 : isSmallScreen ? 0 : "8px",
        borderRadius: sidebarState === "locked" ? "0" : isSmallScreen ? "0" : "12px",
        left: sidebarState === "locked" ? "0" : isSmallScreen ? 0 : "8px",
        x: sidebarState === "hidden" ? -260 : 0,
        opacity: sidebarState === "hidden" ? (isSmallScreen ? 0.7 : 0) : 1,
        pointerEvents: sidebarState === "hidden" ? "none" : "auto",
      }}
      transition={transition}
    >
      <header className="flex-shrink-0">{header}</header>
      {body && (
        <nav className="relative flex-grow overflow-y-hidden">
          <ScrollArea className="h-full">
            <div ref={topRef} className="h-px" aria-hidden="true" key="top-ref" />
            <div className="w-[var(--ds-sidebar-width)]">{body}</div>
            <div ref={bottomRef} className="h-px" aria-hidden="true" key="bottom-ref" />
          </ScrollArea>

          <AnimatePresence>
            {!isAtTop && <ScrollShadow position="top" key="shadow-scroll-top" />}
            {!isAtBottom && <ScrollShadow position="bottom" key="shadow-scroll-bottom" />}
          </AnimatePresence>
        </nav>
      )}
      <footer className="flex-shrink-0">{renderFooter()}</footer>
    </motion.aside>
  )
}
