import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { useEffect } from "react"

import { activityViews, periodLabels, type ActivityRecord } from "./model"

export function useActivitySource(
  rows: ActivityRecord[],
  open: (row: ActivityRecord) => void,
  needsYou = false
) {
  const source = useDataCollectionSource(
    {
      defaultFilters: needsYou ? { status: ["needs-you"] } : {},
      filters: {
        status: {
          type: "in" as const,
          label: "Status",
          options: {
            options: activityViews.map((view) => ({
              value: view.id,
              label: view.label,
            })),
          },
        },
        owner: {
          type: "in" as const,
          label: "Handled by",
          options: {
            options: [...new Set(rows.map((row) => row.owner))].map(
              (owner) => ({ value: owner, label: owner })
            ),
          },
        },
      },
      presets: activityViews.map((view) => ({
        label: view.label,
        filter: { status: [view.id] },
        itemsCount: () => rows.filter((row) => row.status === view.id).length,
      })),
      search: { enabled: true, sync: true, debounceTime: 200 },
      totalItemSummary: (total) =>
        `${total} ${total === 1 ? "activity" : "activities"}`,
      grouping: {
        hideSelector: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          period: {
            name: "Date",
            label: (value) => periodLabels[String(value)] ?? String(value),
          },
        },
      },

      dataAdapter: {
        fetchData: ({ filters, search }) => ({
          records: rows
            .filter(
              (row) =>
                (!filters.status?.length ||
                  filters.status.includes(row.status)) &&
                (!filters.owner?.length ||
                  filters.owner.includes(row.owner)) &&
                (!search ||
                  `${row.title} ${row.detail} ${row.owner}`
                    .toLowerCase()
                    .includes(search.toLowerCase()))
            )
            .sort((a, b) => a.period.localeCompare(b.period)),
        }),
      },
      itemOnClick: (row: ActivityRecord) => () => open(row),
      itemActions: (row: ActivityRecord) => [
        {
          label:
            row.status === "needs-you"
              ? "Review"
              : row.status === "in-progress"
                ? "View progress"
                : row.children?.length
                  ? `View ${row.breakdownLabel?.toLowerCase() ?? "tasks"}`
                  : "View details",
          type: "primary" as const,
          onClick: () => open(row),
        },
      ],
    },
    [rows, open]
  )
  const selectedStatuses = source.currentFilters.status
  const completedOnly =
    selectedStatuses?.length === 1
      ? selectedStatuses[0] === "completed"
      : !selectedStatuses?.length &&
        rows.length > 0 &&
        rows.every((row) => row.status === "completed")
  const { setCurrentGrouping } = source
  useEffect(() => {
    setCurrentGrouping(
      completedOnly ? { field: "period", order: "asc" } : undefined
    )
  }, [completedOnly, setCurrentGrouping])
  return source
}
