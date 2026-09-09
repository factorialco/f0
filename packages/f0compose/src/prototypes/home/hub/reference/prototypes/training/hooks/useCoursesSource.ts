import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"

import { CURRENT_USER_ID, type Course } from "../mocks/courses"

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
 * useDataCollectionSource for the Training courses table.
 *
 * The in-table views ("All" / "Assigned to me" / "Created by me") are modelled
 * as `presets`, which OneDataCollection renders as chip-tabs above the table.
 * The table defaults to "All". "Assigned to me" keeps courses the current user
 * is enrolled in (`assignedToMe`); "Created by me" keeps courses they authored
 * (`ownerId`). Search filters by course name; per-column sortings mirror the
 * reference screen.
 */
export function useCoursesSource(
  courses: Course[],
  onCreateCourse: () => void,
  onOpenCourse: (id: string) => void,
  isEmployee = false
) {
  return useDataCollectionSource<Course>(
    {
      search: { enabled: true, sync: true },
      // Employees only ever see their own courses, so the scope filter and the
      // All / My courses chip-tabs are dropped (the table is forced to "mine").
      // In their place they get attribute filters to slice that own list —
      // Status and Requirement (the columns most worth filtering by).
      filters: isEmployee
        ? {
            status: {
              type: "in",
              label: "Status",
              options: {
                options: [
                  { value: "published", label: "Published" },
                  { value: "draft", label: "Draft" },
                ],
              },
            },
            requirement: {
              type: "in",
              label: "Requirement",
              options: {
                options: [
                  { value: "mandatory", label: "Mandatory" },
                  { value: "not-mandatory", label: "Not mandatory" },
                ],
              },
            },
          }
        : {
            scope: {
              type: "in",
              label: "Scope",
              options: {
                options: [
                  { value: "assigned", label: "Assigned to me" },
                  { value: "created", label: "Created by me" },
                ],
              },
            },
          },
      presets: isEmployee
        ? []
        : [
            { label: "All", filter: {} },
            { label: "Assigned to me", filter: { scope: ["assigned"] } },
            { label: "Created by me", filter: { scope: ["created"] } },
          ],
      sortings: {
        name: { label: "Course" },
        participants: { label: "Participants" },
      },
      itemOnClick: (item: Course) => () => onOpenCourse(item.id),
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }: FetchParams) => {
          const scope = Array.isArray(filters?.scope)
            ? (filters.scope as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const statusSel = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const requirementSel = Array.isArray(filters?.requirement)
            ? (filters.requirement as string[])
            : []

          // Scope: employees are pinned to their own courses; everyone else can
          // slice by the Assigned to me / Created by me views (no scope = All).
          const inScope = (c: Course) => {
            if (isEmployee) return c.ownerId === CURRENT_USER_ID
            if (scope.length === 0) return true
            return (
              (scope.includes("assigned") && c.assignedToMe) ||
              (scope.includes("created") && c.ownerId === CURRENT_USER_ID)
            )
          }

          const filtered = courses
            .filter(inScope)
            .filter((c) =>
              term === "" ? true : c.name.toLowerCase().includes(term)
            )
            .filter((c) =>
              statusSel.length ? statusSel.includes(c.status) : true
            )
            .filter((c) =>
              requirementSel.length
                ? requirementSel.includes(c.requirement)
                : true
            )

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "name":
                return c.name.toLowerCase()
              case "participants":
                return c.participants
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
        label: "New course",
        icon: Add,
        onClick: onCreateCourse,
      }),
      itemActions: (item: Course) => [
        { label: "Edit course", onClick: () => onOpenCourse(item.id) },
        { label: "Duplicate", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    [courses, onCreateCourse, onOpenCourse, isEmployee]
  )
}
