import { F0Icon } from "@factorialco/f0-react"
import {
  ChevronDown,
  Pencil,
  Search,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { createPortal } from "react-dom"

export type PickerGroup = {
  label: string
  items: { id: string; title: string; meta: string }[]
}

/**
 * Shared picker modal for the ONE prompt bar, matching the Figma designs
 * for the chat history (node 1340:11793) and routines (node 1340:11887):
 * search on top, a "New …" row, then collapsible date/state groups whose
 * rows show a title and a secondary meta ("Yesterday at 7:59", "Every
 * weekday at 08:30").
 */
export function OnePickerModal({
  newLabel,
  groups,
  searchPlaceholder = "Search...",
  onClose,
  onPick,
}: {
  newLabel: string
  groups: PickerGroup[]
  searchPlaceholder?: string
  onClose: () => void
  onPick?: (title: string) => void
}) {
  const [query, setQuery] = useState("")
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())

  const visibleGroups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [groups, query])

  const toggleGroup = (label: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  return createPortal(
    <>
      {/* f0's dialog scrim (same token F0Dialog uses). */}
      <div
        className="f0c-overlay fixed inset-0 z-40 bg-f1-background-overlay"
        onClick={onClose}
      />
      <div
        role="dialog"
        className="f0c-modal fixed left-1/2 top-1/2 z-50 flex max-h-[70vh] w-[600px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-solid border-f1-border-secondary bg-f1-background shadow-[0_8px_30px_0_rgba(13,22,37,0.12)]"
      >
        {/* Search */}
        <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-5 py-4">
          <F0Icon icon={Search} size="md" color="secondary" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose()
            }}
            placeholder={searchPlaceholder}
            className="min-w-0 flex-1 border-0 bg-transparent text-lg text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          />
        </div>

        <div className="home-window-scroll flex min-h-0 flex-col gap-4 overflow-auto p-3">
          {/* New … */}
          <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 rounded-md bg-f1-background-secondary p-3 text-left hover:bg-f1-background-secondary-hover">
            <F0Icon icon={Pencil} size="md" color="default" />
            <span className="text-base font-medium text-f1-foreground">
              {newLabel}
            </span>
          </button>

          {/* Groups */}
          {visibleGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-1">
              <button
                onClick={() => toggleGroup(group.label)}
                className="flex cursor-pointer items-center gap-1 self-start rounded px-1 py-0.5 text-sm font-medium text-f1-foreground-secondary"
              >
                {group.label}
                <F0Icon
                  icon={ChevronDown}
                  size="xs"
                  color="secondary"
                  className={collapsed.has(group.label) ? "-rotate-90" : ""}
                />
              </button>
              {!collapsed.has(group.label) &&
                group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onPick?.(item.title)}
                    className="flex w-full cursor-pointer items-baseline gap-1.5 rounded-[10px] px-1 py-1.5 text-left hover:bg-f1-background-secondary"
                  >
                    <span className="text-base font-medium text-f1-foreground">
                      {item.title} -
                    </span>
                    <span className="text-sm font-medium text-f1-foreground-secondary">
                      {item.meta}
                    </span>
                  </button>
                ))}
            </div>
          ))}
          {visibleGroups.length === 0 && (
            <span className="px-1 text-base text-f1-foreground-secondary">
              No results
            </span>
          )}
        </div>
      </div>
    </>,
    document.body
  )
}

export const chatHistoryGroups: PickerGroup[] = [
  {
    label: "Yesterday",
    items: [
      { id: "c1", title: "Employee turnover analysis", meta: "Yesterday at 7:59" },
      { id: "c2", title: "Create a new onboarding workflow", meta: "Yesterday at 10:45" },
      { id: "c3", title: "Summarize the time-off policy", meta: "Yesterday at 10:45" },
    ],
  },
  {
    label: "This month",
    items: [
      { id: "c4", title: "Generate a team engagement survey", meta: "Apr 23 at 11:51" },
      { id: "c5", title: "Review last quarter hiring metrics", meta: "Apr 20 at 11:51" },
      { id: "c6", title: "Update remote work guidelines", meta: "Apr 14 at 11:51" },
      { id: "c7", title: "Analyze overtime trends by department", meta: "Apr 6 at 11:51" },
    ],
  },
]

export const routineGroups: PickerGroup[] = [
  {
    label: "Running",
    items: [
      {
        id: "r1",
        title: "Weekday Late Arrivals Summary",
        meta: "Every weekday at 08:30",
      },
      {
        id: "r2",
        title: "Weekday Late Arrivals Summary",
        meta: "Every weekday at 08:30",
      },
    ],
  },
]
