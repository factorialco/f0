import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"

import type { DocTemplate } from "../mocks/templates"

import { categoryLabel } from "../mocks/templates"

const STR = {
  en: {
    category: "Category",
    template: "Template",
    generated: "Documents generated",
    lastUpdated: "Last updated",
    newTemplate: "New template",
  },
  es: {
    category: "Categoría",
    template: "Plantilla",
    generated: "Documentos generados",
    lastUpdated: "Última actualización",
    newTemplate: "Nueva plantilla",
  },
} as const

/** useDataCollectionSource for the Templates table. */
export function useTemplatesSource(
  templates: DocTemplate[],
  locale: AppLocale = "en"
) {
  const t = STR[locale]
  return useDataCollectionSource<DocTemplate>(
    {
      search: { enabled: true, sync: true },
      filters: {
        category: {
          type: "in",
          label: t.category,
          options: {
            options: [
              { value: "Contracts", label: categoryLabel("Contracts", locale) },
              { value: "Payroll", label: categoryLabel("Payroll", locale) },
              {
                value: "Onboarding",
                label: categoryLabel("Onboarding", locale),
              },
              { value: "Policies", label: categoryLabel("Policies", locale) },
              { value: "Letters", label: categoryLabel("Letters", locale) },
            ],
          },
        },
      },
      currentFilters: {},
      sortings: {
        name: { label: t.template },
        usageCount: { label: t.generated },
        updatedAt: { label: t.lastUpdated },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 12,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.category)
            ? (filters.category as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = templates
            .filter((tpl) =>
              wanted.length === 0 ? true : wanted.includes(tpl.category)
            )
            .filter((tpl) =>
              term === "" ? true : tpl.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (tpl, field) => {
            switch (field) {
              case "name":
                return tpl.name.toLowerCase()
              case "usageCount":
                return tpl.usageCount
              case "updatedAt":
                return tpl.updatedAt
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 12
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
        label: t.newTemplate,
        icon: Add,
        onClick: () => {},
      }),
    },
    [templates, locale]
  )
}
