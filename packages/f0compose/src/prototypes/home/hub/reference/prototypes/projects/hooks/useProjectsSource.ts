import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"

import { CURRENT_USER_ID, type Project } from "../mocks/projects"

/** Shape of the args OneDataCollection passes to `fetchData` (the linked F0 PR
 * build ships no types, so we declare just what this adapter reads). */
type FetchParams = {
  filters?: Record<string, unknown>
  search?: string | null
  sortings?:
    | { field: string; order: "asc" | "desc" }
    | { field: string; order: "asc" | "desc" }[]
    | null
  pagination?: { perPage?: number; currentPage?: number } | null
}

/**
 * useDataCollectionSource for the Projects overview table.
 *
 * The in-table views ("All" / "Assigned to me" / "Created by me") are modelled
 * as `presets`, which OneDataCollection renders as chip-tabs above the table.
 * The table defaults to "All". "Assigned to me" keeps projects the current user
 * belongs to (`memberIds`); "Created by me" keeps projects they own (`ownerId`).
 * Search filters by project name; per-column sortings mirror the reference
 * screen.
 */
export function useProjectsSource(
  projects: Project[],
  onCreateProject: () => void,
  onOpenProject: (id: string) => void,
  isEmployee = false
) {
  // Distinct clients for the Client filter options.
  const clientOptions = [
    ...new Set(projects.map((p) => p.client).filter(Boolean)),
  ].map((c) => ({ value: c as string, label: c as string }))
  // Attribute filters offered in every view — employees lose the scope chips
  // but keep the filter funnel (Billing / Client).
  const attributeFilters = {
    billing: {
      type: "in" as const,
      label: "Billing",
      options: {
        options: [
          { value: "billable", label: "Billable" },
          { value: "non-billable", label: "Non-billable" },
        ],
      },
    },
    client: {
      type: "in" as const,
      label: "Client",
      options: { options: clientOptions },
    },
  }

  return useDataCollectionSource<Project>(
    {
      search: { enabled: true, sync: true },
      // Employees lose the All / Assigned to me / Created by me scope chips, but
      // keep the attribute filters (Billing / Client) in the funnel.
      filters: isEmployee
        ? attributeFilters
        : {
            scope: {
              type: "in" as const,
              label: "Scope",
              options: {
                options: [
                  { value: "assigned", label: "Assigned to me" },
                  { value: "created", label: "Created by me" },
                ],
              },
            },
            ...attributeFilters,
          },
      presets: isEmployee
        ? []
        : [
            { label: "All", filter: {} },
            { label: "Assigned to me", filter: { scope: ["assigned"] } },
            { label: "Created by me", filter: { scope: ["created"] } },
          ],
      sortings: {
        name: { label: "Name" },
        client: { label: "Client" },
        trackedHours: { label: "Tracked hours" },
        costToDate: { label: "Cost-to-date" },
        startDate: { label: "Start date" },
        endDate: { label: "End date" },
      },
      itemOnClick: (item: Project) => () => onOpenProject(item.id),
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }: FetchParams) => {
          const scope = Array.isArray(filters?.scope)
            ? (filters.scope as string[])
            : []
          const billingSel = Array.isArray(filters?.billing)
            ? (filters.billing as string[])
            : []
          const clientSel = Array.isArray(filters?.client)
            ? (filters.client as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          // Scope: Assigned to me (member) / Created by me (owner). No scope = All.
          // Employees are pinned to the projects they belong to ("assigned").
          const inScope = (p: Project) => {
            if (isEmployee) return p.memberIds.includes(CURRENT_USER_ID)
            if (scope.length === 0) return true
            return (
              (scope.includes("assigned") &&
                p.memberIds.includes(CURRENT_USER_ID)) ||
              (scope.includes("created") && p.ownerId === CURRENT_USER_ID)
            )
          }

          const filtered = projects
            .filter(inScope)
            .filter((p) =>
              term === "" ? true : p.name.toLowerCase().includes(term)
            )
            .filter((p) =>
              billingSel.length ? billingSel.includes(p.billing) : true
            )
            .filter((p) =>
              clientSel.length
                ? p.client
                  ? clientSel.includes(p.client)
                  : false
                : true
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "name":
                return p.name.toLowerCase()
              case "client":
                return p.client?.toLowerCase() ?? null
              case "trackedHours":
                return p.trackedHours
              case "costToDate":
                return p.costToDate
              case "startDate":
                return p.startDate
              case "endDate":
                return p.endDate
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 25
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "Create project",
        icon: Add,
        onClick: onCreateProject,
      }),
      itemActions: (item: Project) => [
        { label: "Open project", onClick: () => onOpenProject(item.id) },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    [projects, onCreateProject, onOpenProject, isEmployee]
  )
}
