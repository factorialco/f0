import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"
import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import { type Timesheet, timesheets } from "../mocks/timesheets"

const STR = {
  en: {
    all: "All",
    reviewStatus: "Review status",
    pending: "Pending",
    approved: "Approved",
    employee: "Employee",
    worked: "Worked",
    balance: "Balance",
    approve: "Approve",
    viewTimesheet: "View timesheet",
  },
  es: {
    all: "Todas",
    reviewStatus: "Estado de revisión",
    pending: "Pendiente",
    approved: "Aprobada",
    employee: "Empleado",
    worked: "Trabajadas",
    balance: "Balance",
    approve: "Aprobar",
    viewTimesheet: "Ver hoja de horas",
  },
} as const

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
 * useDataCollectionSource for the Time tracking review table. The All / Pending
 * / Approved presets drive the tab chips (defaulting to "All" — no status
 * filter), search filters by employee name, and `selectable` enables the
 * per-row selection checkboxes from the reference screen. perPage 25 matches the
 * page-size control.
 */
export function useTimesheetSource(locale: AppLocale = "en") {
  const t = STR[locale]
  return useDataCollectionSource<Timesheet>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: t.reviewStatus,
          options: {
            options: [
              { value: "pending", label: t.pending },
              { value: "approved", label: t.approved },
            ],
          },
        },
      },
      // Default to "All" (no status filter); the user opts into Pending/Approved.
      currentFilters: {},
      presets: [
        { label: t.all, filter: {} },
        { label: t.pending, filter: { status: ["pending"] } },
        { label: t.approved, filter: { status: ["approved"] } },
      ],
      sortings: {
        employee: { label: t.employee },
        worked: { label: t.worked },
        balance: { label: t.balance },
      },
      selectable: (item: Timesheet) => item.id,
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }: FetchParams) => {
          const wanted = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = timesheets
            .filter((r) =>
              wanted.length === 0 ? true : wanted.includes(r.status)
            )
            .filter((r) => {
              if (term === "") return true
              const name =
                findEmployee(r.employeeId)?.fullName.toLowerCase() ?? ""
              return name.includes(term)
            })

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "employee":
                return (
                  findEmployee(r.employeeId)?.fullName.toLowerCase() ?? null
                )
              case "worked":
                return r.worked
              case "balance":
                return r.balance
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
      itemActions: () => [
        { label: t.approve, onClick: () => {} },
        { label: t.viewTimesheet, onClick: () => {} },
      ],
    },
    [locale]
  )
}
