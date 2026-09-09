import { useCallback, useRef } from "react"

import { F0Icon, type IconType } from "@/components/F0Icon"
import { Circle as CircleIcon } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Badge } from "@/ui/IconBadge"

import { CompanySelector, type CompanySelectorProps } from "../CompanySelector"
import type { SidebarTab } from "../Tabs"
import { usePersistedTab } from "../Tabs/usePersistedTab"
import { SidebarUserMenu, type SidebarUserMenuProps } from "../UserMenu"
import { RailTab } from "./RailTab"

/** A shortcut pinned to the foot of the rail — marketplace, security, activity. */
export type SidebarRailAction = {
  id: string
  label: string
  icon: IconType
  onClick: () => void
  /** Show the unread marker over the icon. */
  hasUpdates?: boolean
}

export type SidebarRailProps = {
  /** The workspace switcher, rendered as the logo alone. */
  company: Omit<CompanySelectorProps, "variant">
  tabs: SidebarTab[]
  activeTab: string
  onTabChange: (id: string) => void
  /**
   * Remember the active tab across reloads. Same key space as `SidebarTabs`,
   * so a host that swaps one for the other keeps the user where they were.
   */
  persistKey?: string
  /** Pressing the module you are already in. Hosts use it to fold the panel. */
  onActiveTabPress?: () => void
  actions?: SidebarRailAction[]
  user?: Omit<SidebarUserMenuProps, "compact">
}

/** An icon-only shortcut at the foot of the rail, on the tab's own geometry. */
const RailAction = ({ action }: { action: SidebarRailAction }) => (
  <button
    type="button"
    aria-label={action.label}
    title={action.label}
    onClick={action.onClick}
    className={cn(
      "relative flex size-8 cursor-pointer items-center justify-center rounded-[10px] transition-colors hover:bg-f1-background-secondary",
      focusRing()
    )}
  >
    <F0Icon icon={action.icon} size="md" color="default" />
    {action.hasUpdates && (
      <span
        aria-hidden="true"
        className="absolute -right-1 -top-1 rounded-full bg-f1-background"
      >
        <Badge type="highlight" size="sm" icon={CircleIcon} />
      </span>
    )}
  </button>
)

/**
 * The permanent module rail: the workspace logo, the modules, and the account.
 *
 * It is the half of the navigation that never collapses — at any viewport,
 * including mobile. That is the whole point of it: with the modules always on
 * screen there is no state in which the app has no navigation, so nothing has
 * to put an "open main menu" button back into the content to compensate.
 */
export function SidebarRail({
  company,
  tabs,
  activeTab,
  onTabChange,
  persistKey,
  onActiveTabPress,
  actions = [],
  user,
}: SidebarRailProps) {
  const i18n = useI18n()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  usePersistedTab(persistKey, tabs, activeTab, onTabChange)

  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeTab)
  )

  const handleSelect = useCallback(
    (id: string) => {
      if (id === activeTab) {
        onActiveTabPress?.()
        return
      }
      onTabChange(id)
    },
    [activeTab, onActiveTabPress, onTabChange]
  )

  // Roving arrow keys down the column. The group keeps a single tab stop, so
  // reaching the account menu from the keyboard is one Tab away rather than
  // one per module.
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const last = tabs.length - 1
      let next: number | null = null
      if (event.key === "ArrowDown") next = index === last ? 0 : index + 1
      else if (event.key === "ArrowUp") next = index === 0 ? last : index - 1
      else if (event.key === "Home") next = 0
      else if (event.key === "End") next = last
      if (next === null) return
      event.preventDefault()
      tabRefs.current[next]?.focus()
    },
    [tabs.length]
  )

  return (
    <div
      data-testid="sidebar-rail"
      className={cn(
        "flex h-full w-[var(--ds-sidebar-rail-width)] shrink-0 flex-col items-center overflow-y-auto",
        // No surface of its own: the navigation sits on whatever the app
        // paints behind it, so it reads as the floor the content is raised
        // off rather than as a second card beside it. The seam is drawn on
        // the rail itself so the 1px lands INSIDE the 48px the frame reserves
        // (border-box) rather than widening the pair.
        "border-0 border-r border-solid border-f1-border-secondary",
        // The rail runs edge to edge, so it owns the notch and the home
        // indicator: without this the account avatar sits under the latter.
        "pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]"
      )}
    >
      {/* 60px, the same height as the panel's title bar beside it, so the logo
          and the section title sit on one line. */}
      <div className="flex h-[60px] shrink-0 items-center justify-center">
        <CompanySelector {...company} variant="compact" />
      </div>

      <div
        role="group"
        aria-label={i18n.navigation.sidebar.rail.label}
        className="flex w-full flex-col gap-2 px-1.5"
      >
        {tabs.map((tab, index) => (
          <RailTab
            key={tab.id}
            ref={(node) => {
              tabRefs.current[index] = node
            }}
            tab={tab}
            isActive={tab.id === activeTab}
            isFocusable={index === activeIndex}
            onSelect={() => handleSelect(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        ))}
      </div>

      {(actions.length > 0 || user) && (
        <div className="mt-auto flex shrink-0 flex-col items-center gap-0.5 pb-3 pt-2">
          {actions.map((action) => (
            <RailAction key={action.id} action={action} />
          ))}
          {user && (
            <span className="pt-1.5">
              <SidebarUserMenu {...user} compact />
            </span>
          )}
        </div>
      )}
    </div>
  )
}
