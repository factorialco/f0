import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { actionVariants, buttonSizeVariants } from "@/ui/Action/variants"

const PresenceDot = () => {
  return (
    <div className="bg-f1-background absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center rounded-full">
      <span
        aria-hidden="true"
        className={cn(
          // The ring follows the item's hover/active state so the dot blends
          // with the highlighted row background.
          "ring-2 ring-f1-background-tertiary transition-[box-shadow]",
          "ring-f1-background-secondary",
          "h-2 w-2 rounded-full",
          "bg-f1-background-critical-bold"
        )}
      />
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
  search: {
    /** Accessible label / tooltip for the search icon button. */
    placeholder?: string
    onClick?: () => void
  }
}

/**
 * A single tab. Mirrors the F0Button `ghost`/`neutral` styling (same `Action`
 * variant recipes). The label simply grows/shrinks via an animated grid
 * column — no JS animation, it just expands and collapses.
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
  const variant = isActive ? "neutral" : "ghost"

  return (
    <button
      type="button"
      aria-label={tab.label}
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        actionVariants({ variant }),
        buttonSizeVariants({ size: "md" }),
        focusRing()
      )}
    >
      <div
        className={cn(
          "main flex h-8 min-w-0 flex-1 items-center justify-center",
          isActive ? "!pl-1.5 !pr-2" : "!px-1.5"
        )}
      >
        <F0Icon icon={tab.icon} size="md" color="default" />
        <span
          className={cn(
            "grid transition-[grid-template-columns] duration-200 ease-out motion-reduce:transition-none",
            isActive ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
          )}
        >
          {/* The tracked element has no padding so the column can reach 0;
              the inner span carries the spacing and gets clipped. */}
          <span className="min-w-0 overflow-hidden">
            <span className="block whitespace-nowrap pl-1.5">{tab.label}</span>
          </span>
        </span>
        {tab.badge && <PresenceDot />}
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
  search,
}: SidebarTabsProps) => {
  const i18n = useI18n()
  const searchLabel = search.placeholder ?? i18n.navigation.sidebar.search

  return (
    <div className="mb-5 flex items-center justify-between gap-1 px-3">
      <div
        role="group"
        aria-label={i18n.navigation.sidebar.tabs.label}
        className="flex items-center gap-1"
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={tab.id === activeTab}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>

      <F0Button
        variant="ghost"
        size="md"
        icon={Search}
        label={searchLabel}
        hideLabel
        onClick={search.onClick}
      />
    </div>
  )
}
