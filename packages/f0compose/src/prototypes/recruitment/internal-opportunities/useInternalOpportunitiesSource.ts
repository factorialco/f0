import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  ExternalLink,
  PersonPlus,
  Plane,
} from "@factorialco/f0-react/icons/app"

import { departments, type Job, jobs } from "@/fixtures"

/**
 * useDataCollectionSource for the employee-facing "Internal opportunities"
 * card grid:
 * - Slices `jobs` to status === "published" (employees only see live openings).
 * - Search by title.
 * - Filters: Work mode (in), Location (in), Team (in, by departmentId),
 *   Posted between (date range).
 * - Quick presets for the most common Work-mode picks.
 * - Grouping by location (canonical "group by place" pattern).
 * - itemActions wired with `type: "primary" | "secondary"` so the Card
 *   visualization in OneDataCollection routes them into F0Card's primary
 *   button + secondary buttons (see Card/index.tsx:252-269). The 3rd action
 *   (`Open public job page`) automatically renders icon-only on desktop —
 *   F0Card's CardActions hides labels for `index > 0` secondary actions.
 */

/** Published jobs only — employees can't see drafts/archived. */
const publishedJobs = jobs.filter((j) => j.status === "published")

/** Unique locations across the published set, sorted alpha. */
const locationOptions = [...new Set(publishedJobs.map((j) => j.location))]
  .sort((a, b) => a.localeCompare(b))
  .map((loc) => ({ value: loc, label: loc }))

/** Team options come from the departments fixture (id → name). */
const teamOptions = departments.map((d) => ({ value: d.id, label: d.name }))

/** Date filter value: `Date | { from, to? } | undefined` (see filters.tsx:46-55). */
type DateRange = { from: Date; to?: Date }
type DateFilterValue = Date | DateRange | undefined

function isDateRange(v: unknown): v is DateRange {
  return typeof v === "object" && v !== null && "from" in v
}

function inRange(iso: string | null, value: DateFilterValue): boolean {
  if (!value || !iso) return true
  const d = new Date(iso + "T00:00:00Z").getTime()
  if (value instanceof Date) {
    // Single-date filter: same day match.
    return value.toISOString().slice(0, 10) === iso
  }
  if (isDateRange(value)) {
    const from = value.from.getTime()
    const to = value.to ? value.to.getTime() : Number.POSITIVE_INFINITY
    return d >= from && d <= to
  }
  return true
}

export function useInternalOpportunitiesSource() {
  return useDataCollectionSource<Job>(
    {
      search: { enabled: true, sync: true },
      filters: {
        jobType: {
          type: "in",
          label: "Work mode",
          options: {
            options: [
              { value: "Onsite", label: "On-site" },
              { value: "Remote", label: "Remote" },
              { value: "Hybrid", label: "Hybrid" },
            ],
          },
        },
        location: {
          type: "in",
          label: "Location",
          options: { options: locationOptions },
        },
        departmentId: {
          type: "in",
          label: "Team",
          options: { options: teamOptions },
        },
        publishedAt: {
          type: "date",
          label: "Posted between",
          options: { mode: "range", view: "day" },
        },
      },
      presets: [
        { label: "All", filter: {} },
        { label: "Remote", filter: { jobType: ["Remote"] } },
        { label: "Hybrid", filter: { jobType: ["Hybrid"] } },
        { label: "On-site", filter: { jobType: ["Onsite"] } },
      ],
      sortings: { publishedAt: { label: "Date posted" } },
      currentGrouping: { field: "location", order: "asc" },
      grouping: {
        mandatory: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          location: {
            name: "Location",
            label: (groupId) => String(groupId),
            itemCount: (groupId) =>
              publishedJobs.filter((j) => j.location === groupId).length,
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters, search }) => {
          const wantedTypes = Array.isArray(filters?.jobType)
            ? (filters.jobType as Job["jobType"][])
            : []
          const wantedLocations = Array.isArray(filters?.location)
            ? (filters.location as string[])
            : []
          const wantedDepts = Array.isArray(filters?.departmentId)
            ? (filters.departmentId as string[])
            : []
          const dateValue = filters?.publishedAt as DateFilterValue
          const term = (search ?? "").toLowerCase().trim()

          const records = publishedJobs
            .filter((j) =>
              wantedTypes.length === 0 ? true : wantedTypes.includes(j.jobType)
            )
            .filter((j) =>
              wantedLocations.length === 0
                ? true
                : wantedLocations.includes(j.location)
            )
            .filter((j) =>
              wantedDepts.length === 0
                ? true
                : !!j.departmentId && wantedDepts.includes(j.departmentId)
            )
            .filter((j) => inRange(j.publishedAt, dateValue))
            .filter((j) =>
              term === "" ? true : j.title.toLowerCase().includes(term)
            )

          return { records }
        },
      },
      itemActions: (job: Job) => [
        {
          label: "Apply",
          icon: Plane,
          onClick: () => {},
          type: "primary",
        },
        {
          label: "Refer a friend",
          icon: PersonPlus,
          onClick: () => {},
          type: "secondary",
        },
        {
          label: "Open public job page",
          icon: ExternalLink,
          onClick: () => {
            if (job.publicUrl) window.open(job.publicUrl, "_blank")
          },
          type: "secondary",
        },
      ],
    },
    []
  )
}
