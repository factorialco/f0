import { motion } from "motion/react"
import { ReactNode, RefObject, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn, focusRing } from "@/lib/utils"
import { Collapsible, CollapsibleContent } from "@/ui/collapsible"

export interface SidebarCollapsibleSectionProps {
  title: string
  /** Initial open state. @default true */
  isOpen?: boolean
  /** Root sections render their content without the collapsible header. */
  isRoot?: boolean
  onCollapse?: (isOpen: boolean) => void
  children?: ReactNode
  /**
   * Emphasises the title (darker, bolder) while the section is collapsed —
   * Slack-style hint that hidden items need attention (e.g. unread chats).
   */
  highlightWhenCollapsed?: boolean
  /**
   * Content shown at the end of the header only while collapsed (e.g. a total
   * unread badge) — surfaces what's hidden inside without expanding.
   */
  collapsedBadge?: ReactNode
  /** Drag-aware guards used by the sortable Menu; safe to omit elsewhere. */
  isDragging?: boolean
  wasDragging?: RefObject<boolean>
}

/**
 * Collapsible titled section used across the Sidebar (navigation categories,
 * chat groups). Title + rotating chevron + animated height.
 */
export const SidebarCollapsibleSection = ({
  title,
  isOpen: initialIsOpen = true,
  isRoot,
  onCollapse,
  children,
  highlightWhenCollapsed,
  collapsedBadge,
  isDragging,
  wasDragging,
}: SidebarCollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  const shouldReduceMotion = useReducedMotion()
  const highlighted = highlightWhenCollapsed && !isOpen

  const handleClick = () => {
    if (isDragging || wasDragging?.current) return

    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onCollapse?.(newIsOpen)
  }

  return (
    <div>
      <Collapsible open={isOpen}>
        <div className="group relative flex items-center">
          <div
            className={cn(
              "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset"),
              isRoot && "hidden"
            )}
            onClick={handleClick}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick()
              }
            }}
          >
            <span
              className={cn(
                "transition-colors py-0.5",
                highlighted && "font-[900] text-f1-foreground"
              )}
            >
              {title}
            </span>
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 0 : -90 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.1 }}
              className="flex h-3 w-3 items-center justify-center"
            >
              <F0Icon icon={ChevronDown} size="xs" />
            </motion.div>
            {/* Surfaces hidden unreads at the far right while collapsed. */}
            {!isOpen && collapsedBadge && (
              <span className="ml-auto">{collapsedBadge}</span>
            )}
          </div>
        </div>
        <CollapsibleContent forceMount className="flex flex-col gap-1 mt-0.5">
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1],
            }}
          >
            <div className="flex flex-col gap-0.5">{children}</div>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
