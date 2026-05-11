import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import { getGoalChildren } from "../shared/fixtures"
import type { GoalRecord } from "../shared/types"

/**
 * OneDataCollection source for the "Sub-goals" widget on the detail page.
 * Pure read of the children of `parentGoalId`, with search + sort +
 * pagination wired so the table behaves like the design even when there
 * are many sub-goals.
 */
export function useSubGoalsSource(
  parentGoalId: string,
  onSelectGoal: (id: string) => void
) {
  return useDataCollectionSource<GoalRecord>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        title: { label: "Name" },
        progress: { label: "Progress" },
        dueDate: { label: "Due date" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()

          const children = getGoalChildren(parentGoalId)
          const filtered = children.filter((g) =>
            term === "" ? true : g.title.toLowerCase().includes(term)
          )

          const sorted = applySort(filtered, sortings, (g, field) => {
            switch (field) {
              case "title":
                return g.title.toLowerCase()
              case "progress":
                return g.progress
              case "dueDate":
                return g.dueDate
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 10
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)

          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: (item: GoalRecord) => [
        {
          label: "View details",
          onClick: () => onSelectGoal(item.id),
          type: "primary" as const,
        },
        { type: "separator" as const },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    [parentGoalId, onSelectGoal]
  )
}
