import { F0Text } from "@factorialco/f0-react"
import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { EyeVisible } from "@factorialco/f0-react/icons/app"

import { findEmployee } from "@/fixtures"
import { applySort } from "@/lib/applySort"
import {
  type AiMentorRecommendation,
  type RecommendationStatus,
  recommendations,
} from "../fixtures"

type Props = {
  onViewEmployee: (id: string) => void
}

const statusLabel: Record<RecommendationStatus, string> = {
  "pending-review": "Pending review",
  ready: "Ready to assign",
  assigned: "Assigned",
  completed: "Completed",
  overridden: "Overridden",
}

const decisionLabel = {
  existing: "Existing",
  adapted: "Adapted",
  new: "New (draft)",
}

const allStatuses: RecommendationStatus[] = [
  "pending-review",
  "ready",
  "assigned",
  "completed",
  "overridden",
]

const statusCounts = allStatuses.reduce<Record<string, number>>(
  (acc, s) => {
    acc[s] = recommendations.filter((r) => r.status === s).length
    return acc
  },
  {}
)

// Enrich recommendations with employee name for search/sort
type EnrichedRec = AiMentorRecommendation & { employeeName: string }

const enriched: EnrichedRec[] = recommendations.map((r) => ({
  ...r,
  employeeName: findEmployee(r.employeeId)?.fullName ?? r.employeeId,
}))

function useRecommendationsSource(onViewEmployee: (id: string) => void) {
  return useDataCollectionSource<EnrichedRec>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: allStatuses.map((s) => ({
              value: s,
              label: statusLabel[s],
            })),
          },
        },
        courseDecision: {
          type: "in",
          label: "Course type",
          options: {
            options: [
              { value: "existing", label: "Existing" },
              { value: "adapted", label: "Adapted" },
              { value: "new", label: "New (draft)" },
            ],
          },
        },
      },
      presets: allStatuses.map((s) => ({
        label: statusLabel[s],
        filter: { status: [s] },
        itemsCount: () => statusCounts[s] ?? 0,
      })),
      sortings: {
        employeeName: { label: "Employee" },
        courseTitle: { label: "Course" },
        generatedAt: { label: "Generated on" },
        courseDurationMin: { label: "Duration" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatuses = Array.isArray(filters?.status)
            ? (filters.status as RecommendationStatus[])
            : []
          const wantedDecisions = Array.isArray(filters?.courseDecision)
            ? (filters.courseDecision as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = enriched
            .filter((r) =>
              wantedStatuses.length === 0 ? true : wantedStatuses.includes(r.status)
            )
            .filter((r) =>
              wantedDecisions.length === 0 ? true : wantedDecisions.includes(r.courseDecision)
            )
            .filter((r) =>
              term === ""
                ? true
                : r.employeeName.toLowerCase().includes(term) ||
                  r.courseTitle.toLowerCase().includes(term) ||
                  r.gapSummary.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "employeeName":
                return r.employeeName.toLowerCase()
              case "courseTitle":
                return r.courseTitle.toLowerCase()
              case "generatedAt":
                return Date.parse(r.generatedAt)
              case "courseDurationMin":
                return r.courseDurationMin
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)

          return { type: "pages" as const, records, total, perPage, currentPage, pagesCount }
        },
      },
      itemActions: (item: EnrichedRec) => [
        {
          label: "View employee recommendation",
          icon: EyeVisible,
          onClick: () => onViewEmployee(item.employeeId),
        },
        { type: "separator" },
        {
          label: "Override recommendation",
          onClick: () => {},
          critical: true,
        },
      ],
    },
    [onViewEmployee]
  )
}

const columns = [
  {
    id: "employee",
    label: "Employee",
    render: (r: EnrichedRec) => ({
      type: "person" as const,
      value: {
        firstName: r.employeeName.split(" ")[0] ?? r.employeeName,
        lastName: r.employeeName.split(" ").slice(1).join(" "),
        src: findEmployee(r.employeeId)?.avatarUrl,
      },
    }),
  },
  {
    id: "gap",
    label: "Gap identified",
    render: (r: EnrichedRec) => r.gapSummary,
  },
  {
    id: "course",
    label: "Course",
    render: (r: EnrichedRec) => `${r.courseTitle} · ${r.courseDurationMin} min`,
  },
  {
    id: "decision",
    label: "Decision",
    render: (r: EnrichedRec) => ({
      type: "tag" as const,
      value: { label: decisionLabel[r.courseDecision] },
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (r: EnrichedRec) => ({
      type: "tag" as const,
      value: { label: statusLabel[r.status] },
    }),
  },
]

export function RecommendationsTab({ onViewEmployee }: Props) {
  const source = useRecommendationsSource(onViewEmployee)

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <F0Text content="All recommendations this cycle" variant="body" />
        </div>
      </header>
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns,
            },
          },
        ]}
      />
    </div>
  )
}
