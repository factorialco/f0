import { motion } from "motion/react"
import { ReactNode, RefObject, useState } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn, focusRing } from "@/lib/utils"
import { Collapsible, CollapsibleContent } from "@/ui/collapsible"

/**
 * One action on a section's own header — "new channel" beside Channels, "new
 * community" beside Communities. Icon-only, and revealed on hover like the
 * row's pin, so the header stays a title until somebody reaches for it.
 */
export type SidebarSectionAction = {
  /** Names the button for a screen reader, and shows as its tooltip. */
  label: string
  icon: IconType
  onClick: () => void
}

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
  /** Shown on hover at the end of the header — see {@link SidebarSectionAction}. */
  action?: SidebarSectionAction
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
  action,
  isDragging,
  wasDragging,
}: SidebarCollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  const shouldReduceMotion = useReducedMotion()
  const highlighted = highlightWhenCollapsed && !isOpen

  const handleClick = () => {
    if (isDragging || wasDragging?.current) {
      return
    }

    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onCollapse?.(newIsOpen)
  }

  return (
    <div data-sidebar-collapsible-open={isOpen}>
      <Collapsible open={isOpen}>
        <div className="group/section group relative flex items-center">
          <button
            type="button"
            className={cn(
              "group relative flex w-full select-none items-center gap-1 rounded p-1.5 pr-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset"),
              isRoot && "hidden"
            )}
            onClick={handleClick}
            aria-expanded={isOpen}
            tabIndex={0}
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
            {/* Surfaces hidden unreads at the far right while collapsed. The
                action takes that same spot on hover, so it steps aside. */}
            {!isOpen && collapsedBadge ? (
              <span
                className={cn(
                  "ml-auto transition-opacity",
                  action && "group-hover/section:opacity-0"
                )}
              >
                {collapsedBadge}
              </span>
            ) : null}
          </button>
          {/* A SIBLING of the header button, never inside it: the header is a
              button itself, and a button within a button is neither valid nor
              clickable. Revealed on hover — or on focus, so it is reachable by
              keyboard — exactly like the row's pin. */}
          {action ? (
            <div
              className={cn(
                "absolute right-1 top-1/2 -translate-y-1/2",
                "opacity-0 transition-opacity focus-within:opacity-100 group-hover/section:opacity-100"
              )}
            >
              <ButtonInternal
                variant="neutral"
                size="sm"
                hideLabel
                label={action.label}
                icon={action.icon}
                onClick={(event) => {
                  // The header toggles the section; this must not also collapse
                  // it on the way past.
                  event.stopPropagation()
                  action.onClick()
                }}
              />
            </div>
          ) : null}
        </div>
        <CollapsibleContent forceMount className="mt-0.5 flex flex-col gap-1">
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
