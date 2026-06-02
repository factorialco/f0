import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Delete,
  Download,
  EyeInvisible,
  EyeVisible,
  LayersFront,
  Upload,
} from "@factorialco/f0-react/icons/app"

import {
  trainingCategories,
  trainingCompetencies,
  trainings,
  type Training,
  type TrainingStatus,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

// Last 10 years for the year filter
const yearOptions = Array.from({ length: 10 }, (_, i) => {
  const y = 2026 - i
  return { value: String(y), label: String(y) }
})

export function useTrainingsListSource(onOpenTraining: (id: string) => void, onAddCourse?: () => void) {
  return useDataCollectionSource<Training>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
        competencyId: {
          type: "in",
          label: "Competencies",
          options: {
            options: trainingCompetencies.map((c) => ({
              value: c.id,
              label: c.name,
            })),
          },
        },
        categoryId: {
          type: "in",
          label: "Tags",
          options: {
            options: trainingCategories.map((c) => ({
              value: c.id,
              label: c.name,
            })),
          },
        },
        year: {
          type: "in",
          label: "Year",
          options: { options: yearOptions },
        },
        courseExpiration: {
          type: "in",
          label: "Course expiration",
          options: {
            options: [
              { value: "expired", label: "With expired participants" },
              { value: "not_expired", label: "No expired participants" },
            ],
          },
        },
        isMandatory: {
          type: "in",
          label: "Mandatory",
          options: {
            options: [
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ],
          },
        },
        hasCurrentClasses: {
          type: "in",
          label: "With current classes",
          options: {
            options: [
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ],
          },
        },
      },
      presets: [
        { label: "All", filter: {} },
        { label: "Active", filter: { status: ["active"] } },
        {
          label: "Expired participants",
          filter: { courseExpiration: ["expired"] },
        },
      ],
      sortings: {
        name: { label: "Name" },
        participants: { label: "Participants" },
      },
      primaryActions: () => ({
        label: "Add course",
        icon: undefined,
        onClick: () => { if (onAddCourse) onAddCourse() },
      }),
      secondaryActions: () => [
        { label: "Export", icon: Upload, onClick: () => {} },
        { label: "Import trainings", icon: Download, onClick: () => {} },
        { label: "Import courses", icon: Download, onClick: () => {} },
      ],
      itemOnClick: (t: Training) => () => onOpenTraining(t.id),
      itemActions: (t: Training) => [
        {
          label: "View details",
          onClick: () => onOpenTraining(t.id),
        },
        {
          label: "Duplicate",
          icon: LayersFront,
          onClick: () => {},
        },
        ...(t.status !== "draft"
          ? [
              t.catalog
                ? {
                    label: "Remove from catalog",
                    icon: EyeInvisible,
                    onClick: () => {},
                  }
                : {
                    label: "Display in catalog",
                    icon: EyeVisible,
                    onClick: () => {},
                  },
            ]
          : []),
        { type: "separator" as const },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => {},
          critical: true,
        },
      ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 30,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatus = Array.isArray(filters?.status)
            ? (filters.status as TrainingStatus[])
            : []
          const wantedMandatory = Array.isArray(filters?.isMandatory)
            ? (filters.isMandatory as string[])
            : []
          const wantedCategories = Array.isArray(filters?.categoryId)
            ? (filters.categoryId as string[])
            : []
          const wantedCompetencies = Array.isArray(filters?.competencyId)
            ? (filters.competencyId as string[])
            : []
          const wantedExpiration = Array.isArray(filters?.courseExpiration)
            ? (filters.courseExpiration as string[])
            : []
          const wantedYears = Array.isArray(filters?.year)
            ? (filters.year as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = trainings
            .filter((t) =>
              wantedStatus.length === 0 ? true : wantedStatus.includes(t.status)
            )
            .filter((t) =>
              wantedMandatory.length === 0
                ? true
                : wantedMandatory.includes(String(t.isMandatory))
            )
            .filter((t) =>
              wantedCategories.length === 0
                ? true
                : t.categoryIds.some((id) => wantedCategories.includes(id))
            )
            .filter((t) =>
              wantedCompetencies.length === 0
                ? true
                : t.competencyIds.some((id) =>
                    wantedCompetencies.includes(id)
                  )
            )
            .filter((t) => {
              if (wantedExpiration.length === 0) return true
              if (wantedExpiration.includes("expired"))
                return t.expiredParticipantCount > 0
              if (wantedExpiration.includes("not_expired"))
                return t.expiredParticipantCount === 0
              return true
            })
            .filter((t) =>
              wantedYears.length === 0
                ? true
                : wantedYears.includes(String(t.year))
            )
            .filter((t) =>
              term === ""
                ? true
                : t.name.toLowerCase().includes(term) ||
                  t.code.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (t, field) => {
            switch (field) {
              case "name":
                return t.name.toLowerCase()
              case "participants":
                return t.participantCount
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 30
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
    },
    []
  )
}
