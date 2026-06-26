import { LayoutGroup, motion } from "motion/react"

import { F0Icon, IconType } from "@/components/F0Icon"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"

const UnreadDot = () => {
  return (
    <div className="absolute -right-2.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full">
      <span className="h-2 w-2 rounded-full bg-f1-background-critical-bold" />
    </div>
  )
}

export type SidebarTab = {
  id: string
  label: string
  icon: IconType
  /** Unread counter shown next to the tab. */
  badge?: number
}

export type SidebarTabsProps = {
  tabs: SidebarTab[]
  activeTab: string
  onTabChange: (id: string) => void
}

/**
 * A single tab. All tabs are ghost buttons; the active state is a shared-layout
 * "pill" (`layoutId`) that springs between tabs as the selection changes, while
 * each button resizes (`layout`) and the active label animates in/out. A single
 * `LayoutGroup` (in `SidebarTabs`) coordinates the three so the switch reads as
 * one fluid motion.
 */
const TabButton = ({
  tab,
  isActive,
  onClick,
}: {
  tab: SidebarTab
  isActive: boolean
  onClick: () => void
}) => {
  const reduceMotion = useReducedMotion()
  // `bounce: 0` → a critically-damped spring that eases to a stop with no
  // overshoot (avoids the little "whip" at the end of the switch).
  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, duration: 0.35, bounce: 0 }

  return (
    <button
      type="button"
      aria-label={tab.label}
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        // The active tab hugs its content and never shrinks (label always
        // visible); inactive tabs share the remaining space.
        isActive ? "shrink-0" : "flex-1",
        actionVariants({ variant: "ghost" }),
        buttonSizeVariants({ size: "md" }),
        focusRing()
      )}
    >
      {/* The sliding active background — one element shared across tabs. */}
      {isActive && (
        <motion.span
          layoutId="sidebar-tab-active-pill"
          transition={transition}
          aria-hidden="true"
          className="absolute inset-0 rounded bg-f1-background-inverse-secondary ring-1 ring-inset ring-f1-border dark:bg-f1-background"
        />
      )}
      <div className="main flex h-8 min-w-0 items-center justify-center">
        <span className="relative flex items-center">
          <F0Icon icon={tab.icon} size="md" color="default" />
          {/* The unread dot shows only on an inactive, non-hovered tab; it
              hugs the icon and hides on hover (and when active). */}
          {tab.badge && !isActive ? (
            <span className="group-hover:hidden">
              <UnreadDot />
            </span>
          ) : null}
        </span>
        {/* The label reveals via an animated grid column (0fr → 1fr). Unlike a
            width:auto tween it interpolates cleanly and never resets at the
            end, so there's no snap when it finishes expanding. */}
        <span
          className={cn(
            "grid transition-[grid-template-columns] duration-300 ease-out motion-reduce:transition-none",
            isActive ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
          )}
        >
          <span className="min-w-0 overflow-hidden">
            <span className="block whitespace-nowrap pl-1 pr-0.5 font-semibold">
              {tab.label}
            </span>
          </span>
        </span>
      </div>
    </button>
  )
}

/**
 * Tab switcher that replaces the `SearchBar` row when the Sidebar gains tabs.
 * The active tab shows icon + label (animated in); inactive tabs are
 * icon-only. Search becomes an icon button on the right.
 *
 * When no tabs are needed, keep composing the Sidebar header with `SearchBar`
 * instead — that path is unchanged.
 */
export const SidebarTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: SidebarTabsProps) => {
  const i18n = useI18n()

  return (
    <div className="mb-4 flex items-stretch justify-between px-2">
      <div
        role="group"
        aria-label={i18n.navigation.sidebar.tabs.label}
        className="flex w-full flex-row justify-between gap-1 rounded-lg bg-f1-background-secondary p-1"
      >
        <LayoutGroup>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTab}
              onClick={() => onTabChange(tab.id)}
            />
          ))}
        </LayoutGroup>
      </div>
    </div>
  )
}
