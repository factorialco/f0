/**
 * Document templates specific to the Documents prototype — the Templates tab.
 * Reusable starting points HR can generate documents from. All mocked.
 */
import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import type { FileFormat } from "./documents"

export type TemplateCategory =
  | "Contracts"
  | "Payroll"
  | "Onboarding"
  | "Policies"
  | "Letters"

export type DocTemplate = {
  id: string
  name: string
  /** Spanish display name — shown when the global locale is "es". */
  name_es?: string
  /** Logic key (also the EN display label). Use `categoryLabel` for display. */
  category: TemplateCategory
  format: FileFormat
  /** How many documents have been generated from this template. */
  usageCount: number
  updatedAt: string
}

/** Display label for a template category (logic key stays English). */
export function categoryLabel(
  category: TemplateCategory,
  locale: AppLocale = "en"
): string {
  if (locale !== "es") return category
  const es: Record<TemplateCategory, string> = {
    Contracts: "Contratos",
    Payroll: "Nóminas",
    Onboarding: "Incorporación",
    Policies: "Políticas",
    Letters: "Cartas",
  }
  return es[category]
}

/** Locale-aware display name for a template (falls back to the English name). */
export function templateName(
  tpl: DocTemplate,
  locale: AppLocale = "en"
): string {
  return locale === "es" && tpl.name_es ? tpl.name_es : tpl.name
}

export const templates: DocTemplate[] = [
  {
    id: "tpl-employment",
    name: "Employment contract",
    name_es: "Contrato de trabajo",
    category: "Contracts",
    format: "docx",
    usageCount: 142,
    updatedAt: "2026-05-02",
  },
  {
    id: "tpl-nda",
    name: "Non-disclosure agreement",
    name_es: "Acuerdo de confidencialidad",
    category: "Contracts",
    format: "docx",
    usageCount: 58,
    updatedAt: "2026-03-14",
  },
  {
    id: "tpl-offer",
    name: "Offer letter",
    name_es: "Carta de oferta",
    category: "Letters",
    format: "docx",
    usageCount: 96,
    updatedAt: "2026-04-21",
  },
  {
    id: "tpl-payslip",
    name: "Payslip",
    name_es: "Nómina",
    category: "Payroll",
    format: "pdf",
    usageCount: 1280,
    updatedAt: "2026-01-09",
  },
  {
    id: "tpl-welcome",
    name: "Welcome letter",
    name_es: "Carta de bienvenida",
    category: "Onboarding",
    format: "docx",
    usageCount: 73,
    updatedAt: "2026-02-18",
  },
  {
    id: "tpl-equipment",
    name: "Equipment assignment",
    name_es: "Asignación de equipamiento",
    category: "Onboarding",
    format: "xlsx",
    usageCount: 41,
    updatedAt: "2026-03-30",
  },
  {
    id: "tpl-remote",
    name: "Remote work agreement",
    name_es: "Acuerdo de teletrabajo",
    category: "Policies",
    format: "docx",
    usageCount: 67,
    updatedAt: "2026-04-05",
  },
  {
    id: "tpl-termination",
    name: "Termination letter",
    name_es: "Carta de despido",
    category: "Letters",
    format: "docx",
    usageCount: 19,
    updatedAt: "2026-05-28",
  },
]
