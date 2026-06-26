import { AnimatePresence, motion } from "motion/react"
import { Fragment, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Search } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { fuzzyMatch } from "@/lib/fuzzyMatch"
import { cn, focusRing } from "@/lib/utils"

import { SidebarCollapsibleSection } from "../CollapsibleSection"
import { SidebarTabPanelAction, SidebarTabPanelProps } from "./types"

/**
 * Search field styled as an exact copy of the sidebar's `SearchBar` (the Home
 * search), but as a real, typeable input that filters in place. The `SearchBar`
 * is a button that opens a palette; this mirrors its chrome 1:1 (same box,
 * ring, padding, icon) and moves the focus ring to `focus-within` since the
 * focusable element here is the inner input.
 */
const SidebarTabPanelSearch = ({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
}) => (
  <div
    className={cn(
      "flex w-full -mt-px items-center gap-1 rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-colors hover:ring-f1-border-hover dark:bg-f1-background-tertiary",
      // Focus only recolours the existing inset ring (like hover). No extra
      // offset layer → no white halo in dark mode and no flicker on focus.
      "focus-within:outline-none focus-within:ring-f1-special-ring"
    )}
  >
    <F0Icon icon={Search} size="md" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
      className="w-full bg-transparent text-f1-foreground outline-none placeholder:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:appearance-none"
    />
  </div>
)

/** Left-aligned, full-width ghost button for a top-of-panel action. */
const SidebarTabPanelActionButton = ({
  action,
}: {
  action: SidebarTabPanelAction
}) => (
  <button
    type="button"
    onClick={action.onClick}
    className={cn(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      focusRing("focus-visible:ring-inset")
    )}
  >
    {action.icon && (
      <F0Icon icon={action.icon} size="md" className="text-f1-icon" />
    )}
    <span className="line-clamp-1">{action.label}</span>
  </button>
)

/**
 * Shared skeleton for a sidebar tab body: an optional search box pinned at the
 * top, optional actions, and collapsible groups of arbitrary item rows.
 *
 * The panel is agnostic about what a row is — it renders `item.content` — so it
 * backs the Messages (chats) and One (AI history) tabs from one place, keeping
 * paddings, search behaviour and the empty / no-results states consistent.
 */
export const SidebarTabPanel = ({
  groups,
  actions,
  searchPlaceholder,
  loading = false,
  skeleton,
  emptyState,
  noResultsLabel,
  animateItems = false,
  className,
}: SidebarTabPanelProps) => {
  const shouldReduceMotion = useReducedMotion()
  const [query, setQuery] = useState("")
  const hasSearch = searchPlaceholder !== undefined
  const isSearching = hasSearch && query.trim().length > 0

  const hasAnyItems = groups.some((group) => group.items.length > 0)
  const showSkeleton = loading && !hasAnyItems

  // Filter by the (optional) search, then drop groups left with no matches so
  // their title disappears too.
  const filteredGroups = groups
    .map((group) => ({
      ...group,
      items: isSearching
        ? group.items.filter((item) => fuzzyMatch(query, item.searchText ?? ""))
        : group.items,
    }))
    .filter((group) => group.items.length > 0)

  const noResults = isSearching && hasAnyItems && filteredGroups.length === 0

  return (
    <div className={cn("flex w-full flex-col gap-4 px-3", className)}>
      {/* Search always sits at the very top of the panel. */}
      {searchPlaceholder !== undefined && (
        <SidebarTabPanelSearch
          value={query}
          onChange={setQuery}
          placeholder={searchPlaceholder}
        />
      )}
      {actions && actions.length > 0 && (
        <div className="flex flex-col gap-0.5">
          {actions.map((action) => {
            const button = <SidebarTabPanelActionButton action={action} />
            return (
              <Fragment key={action.label}>
                {action.render ? action.render(button) : button}
              </Fragment>
            )
          })}
        </div>
      )}
      {showSkeleton && skeleton}
      {!showSkeleton && !hasAnyItems && emptyState}
      {noResults && (
        <p className="px-1.5 py-2 text-base text-f1-foreground-secondary">
          {noResultsLabel}
        </p>
      )}
      {!showSkeleton &&
        filteredGroups.map((group) => (
          <SidebarCollapsibleSection
            // Remount only when search toggles on/off (not per keystroke) so a
            // collapsed group opens to reveal its matches while searching.
            key={`${group.id}-${isSearching}`}
            title={group.title ?? ""}
            isRoot={group.title === undefined}
            isOpen={isSearching ? true : group.isOpen}
            highlightWhenCollapsed={group.highlightWhenCollapsed}
            collapsedBadge={group.collapsedBadge}
          >
            {animateItems ? (
              <AnimatePresence initial={false}>
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                  >
                    {item.content}
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              group.items.map((item) => (
                <Fragment key={item.id}>{item.content}</Fragment>
              ))
            )}
          </SidebarCollapsibleSection>
        ))}
    </div>
  )
}
