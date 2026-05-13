import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  Delete,
  Download,
  EyeInvisible,
  EyeVisible,
  LayersFront,
  ArrowRight,
  Upload,
} from "@factorialco/f0-react/icons/app"

import { type Training, trainings } from "@/fixtures"
import { competencies, trainingAxes } from "@/fixtures"
import { employees } from "@/fixtures"
import { applySort } from "@/lib/applySort"

const currentYear = new Date().getFullYear()
const yearOptions = Array.from({ length: 10 }, (_, i) => ({
  label: String(currentYear - i),
  value: currentYear - i,
}))

export type TrainingsListAction =
  | { kind: "export" }
  | { kind: "import" }
  | { kind: "import-courses" }
  | { kind: "duplicate"; training: Training }
  | { kind: "toggle-catalog"; training: Training }
  | { kind: "delete"; training: Training }
  | { kind: "bulk"; bulkId: string; ids: string[] }

export function useTrainingsSource(
  onAdd: () => void,
  onSelect: (t: Training) => void,
  onAction: (action: TrainingsListAction) => void = () => {}
) {
  return useDataCollectionSource<Training>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
        competencies: {
          type: "in",
          label: "Competencies",
          options: {
            options: competencies.map((c) => ({ value: c.id, label: c.name })),
          },
        },
        categories: {
          type: "in",
          label: "Tags",
          options: {
            options: [
              { value: "Leadership", label: "Leadership" },
              { value: "Technical Skills", label: "Technical Skills" },
              { value: "Compliance", label: "Compliance" },
              { value: "Soft Skills", label: "Soft Skills" },
              { value: "Onboarding", label: "Onboarding" },
              { value: "Health & Safety", label: "Health & Safety" },
            ],
          },
        },
        axes: {
          type: "in",
          label: "Axes",
          options: {
            options: trainingAxes.map((a) => ({ value: a.id, label: a.name })),
          },
        },
        employee: {
          type: "in",
          label: "Participant",
          options: {
            options: employees
              .slice(0, 20)
              .map((e) => ({ value: e.id, label: e.fullName })),
          },
        },
        year: {
          type: "in",
          label: "Year",
          options: { options: yearOptions },
        },
        isMandatory: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "mandatory", label: "Mandatory" },
              { value: "non_mandatory", label: "Non-mandatory" },
            ],
          },
        },
      },
      presets: [
        { label: "Expired participants", filter: { expiration: ["expired"] } },
        { label: "Published", filter: { status: ["active"] } },
      ],
      sortings: {
        name: { label: "Name" },
        year: { label: "Year" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 30,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const competencyFilter = Array.isArray(filters?.competencies)
            ? (filters.competencies as string[])
            : []
          const isMandatoryFilter = Array.isArray(filters?.isMandatory)
            ? (filters.isMandatory as string[])
            : []
          const categoryFilter = Array.isArray(filters?.categories)
            ? (filters.categories as string[])
            : []
          const axesFilter = Array.isArray(filters?.axes)
            ? (filters.axes as string[])
            : []
          const employeeFilter = Array.isArray(filters?.employee)
            ? (filters.employee as string[])
            : []
          const yearFilter = Array.isArray(filters?.year)
            ? (filters.year as number[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = trainings
            .filter((t) =>
              statusFilter.length === 0 ? true : statusFilter.includes(t.status)
            )
            .filter((t) => {
              if (competencyFilter.length === 0) return true
              return (t.competencyIds ?? []).some((id) =>
                competencyFilter.includes(id)
              )
            })
            .filter((t) => {
              if (isMandatoryFilter.length === 0) return true
              if (isMandatoryFilter.includes("mandatory") && t.isMandatory) return true
              if (isMandatoryFilter.includes("non_mandatory") && !t.isMandatory) return true
              return false
            })
            .filter((t) => {
              if (categoryFilter.length === 0) return true
              return t.categories.some((c) => categoryFilter.includes(c.name))
            })
            .filter((t) => {
              if (axesFilter.length === 0) return true
              return (t.axes ?? []).some((a) => axesFilter.includes(a.id))
            })
            .filter((t) => {
              if (employeeFilter.length === 0) return true
              // employee filter: training includes any participant avatar that
              // resolves to a matching employee id (the avatarFor() seed)
              return employeeFilter.some((id) =>
                t.participantAvatars.some((p) => p.src.includes(id))
              )
            })
            .filter((t) =>
              yearFilter.length === 0 ? true : yearFilter.includes(t.year)
            )
            .filter((t) =>
              term === "" ? true : t.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (t, field) => {
            if (field === "name") return t.name.toLowerCase()
            if (field === "year") return t.year
            return null
          })

          const perPage = pagination?.perPage ?? 30
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
      itemUrl: (item: Training) => `/p/trainings?training=${item.id}`,
      primaryActions: () => ({
        label: "New training",
        icon: Add,
        onClick: onAdd,
      }),
      secondaryActions: {
        expanded: 0,
        actions: () => [
          {
            label: "Export",
            description: "Download trainings as CSV",
            icon: Upload,
            onClick: () => onAction({ kind: "export" }),
          },
          {
            label: "Import",
            description: "Import trainings from CSV",
            icon: Download,
            onClick: () => onAction({ kind: "import" }),
          },
          {
            label: "Import courses",
            description: "Bulk-import courses from a provider",
            icon: Download,
            onClick: () => onAction({ kind: "import-courses" }),
          },
        ],
      },
      itemActions: (item: Training) => [
        { label: "Open", icon: ArrowRight, onClick: () => onSelect(item) },
        {
          label: "Duplicate",
          icon: LayersFront,
          onClick: () => onAction({ kind: "duplicate", training: item }),
        },
        ...(item.status !== "draft"
          ? [
              item.catalog
                ? {
                    label: "Remove from catalog",
                    icon: EyeInvisible,
                    onClick: () =>
                      onAction({ kind: "toggle-catalog", training: item }),
                  }
                : {
                    label: "Add to catalog",
                    icon: EyeVisible,
                    onClick: () =>
                      onAction({ kind: "toggle-catalog", training: item }),
                  },
            ]
          : []),
        {
          label: "Delete",
          icon: Delete,
          onClick: () => onAction({ kind: "delete", training: item }),
          critical: true,
        },
      ],
      selectable: (item: Training) => item.id,
      bulkActions: () => ({
        primary: [
          { id: "display-catalog", label: "Add to catalog" },
          { id: "hide-catalog", label: "Remove from catalog" },
          { id: "export", label: "Export to CSV" },
        ],
        secondary: [{ id: "delete", label: "Delete" }],
      }),
    },
    [onAdd, onSelect, onAction]
  )
}
