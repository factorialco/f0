import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import type { DocTemplate } from "../mocks/templates"

import { categoryLabel, templateName } from "../mocks/templates"
import { formatDate } from "./format"

const STR = {
  en: {
    template: "Template",
    category: "Category",
    format: "Format",
    generated: "Documents generated",
    updated: "Last updated",
  },
  es: {
    template: "Plantilla",
    category: "Categoría",
    format: "Formato",
    generated: "Documentos generados",
    updated: "Última actualización",
  },
} as const

/** Columns for the Templates OneDataCollection table. */
export function templateColumns(locale: AppLocale = "en") {
  const t = STR[locale]
  return [
    {
      id: "name",
      label: t.template,
      sorting: "name",
      render: (item: DocTemplate) => templateName(item, locale),
    },
    {
      id: "category",
      label: t.category,
      render: (item: DocTemplate) => ({
        type: "status" as const,
        value: {
          label: categoryLabel(item.category, locale),
          status: "neutral" as const,
        },
      }),
    },
    {
      id: "format",
      label: t.format,
      render: (item: DocTemplate) => item.format.toUpperCase(),
    },
    {
      id: "usageCount",
      label: t.generated,
      sorting: "usageCount",
      render: (item: DocTemplate) => item.usageCount.toLocaleString(),
    },
    {
      id: "updatedAt",
      label: t.updated,
      sorting: "updatedAt",
      render: (item: DocTemplate) => formatDate(item.updatedAt, locale),
    },
  ]
}
