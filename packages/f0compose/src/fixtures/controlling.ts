/**
 * Controlling (a.k.a. coding) catalogs used by the
 * `Spending > Manage > Pending Controlling` controlling form.
 *
 * Source of truth for all dropdowns in the controlling side panel and
 * its bulk-edit variant. Keep this list small and realistic — designers
 * lift these into Figma screenshots, so cardinality matters more than
 * exhaustiveness.
 */

import type { ExpenseCategory } from "./expenses"

export type CostCenter = {
  id: string
  /** Short human-readable name, e.g. "Engineering". */
  name: string
  /** Accounting code shown next to the name, e.g. "CC-100". */
  code: string
}

export type Project = {
  id: string
  /** Short human-readable name. */
  name: string
  /** Accounting code, e.g. "PRJ-2026-Q2-DEV". */
  code: string
}

export type VatRate = {
  id: string
  /** Display label, e.g. "21%". */
  label: string
  /** Numeric percent — used by the UI when previewing the breakdown. */
  percent: number
}

export type ControllingTag = {
  id: string
  label: string
}

/**
 * Subcategories — flat list keyed by ExpenseCategory. Designers asked for
 * dependent dropdowns (subcategory narrows when category changes); the
 * mapping below feeds that lookup.
 */
export const subcategoriesByCategory: Record<ExpenseCategory, string[]> = {
  Meals: ["Client meal", "Team lunch", "Travel meal", "On-call meal"],
  Taxis: ["Airport transfer", "Client visit", "Late-night work"],
  Travel: ["Flight", "Train", "Mileage", "Other transport"],
  Shopping: ["Office supplies", "Equipment", "Marketing material"],
  Hotel: ["Client visit", "Conference", "Team offsite"],
  Office: ["Furniture", "Snacks", "Cleaning"],
  Software: ["SaaS subscription", "License", "Cloud infrastructure"],
  Mileage: ["Personal car", "Client visit", "Conference travel"],
  "Per diem": ["Domestic", "International", "Client onsite"],
}

export const costCenters: CostCenter[] = [
  { id: "cc-eng", name: "Engineering", code: "CC-100" },
  { id: "cc-design", name: "Design", code: "CC-110" },
  { id: "cc-product", name: "Product", code: "CC-120" },
  { id: "cc-sales", name: "Sales", code: "CC-200" },
  { id: "cc-marketing", name: "Marketing", code: "CC-210" },
  { id: "cc-finance", name: "Finance", code: "CC-300" },
  { id: "cc-people", name: "People & HR", code: "CC-310" },
  { id: "cc-ops", name: "Operations", code: "CC-400" },
]

export const projects: Project[] = [
  { id: "prj-platform", name: "Platform 2026", code: "PRJ-2026-PLAT" },
  { id: "prj-onboarding", name: "Customer onboarding", code: "PRJ-2026-ON" },
  { id: "prj-international", name: "International expansion", code: "PRJ-2026-INTL" },
  { id: "prj-internal", name: "Internal tooling", code: "PRJ-2026-INT" },
  { id: "prj-rnd", name: "R&D", code: "PRJ-2026-RND" },
  { id: "prj-events", name: "Events 2026", code: "PRJ-2026-EVT" },
]

export const vatRates: VatRate[] = [
  { id: "vat-0", label: "0% (exempt)", percent: 0 },
  { id: "vat-4", label: "4%", percent: 4 },
  { id: "vat-10", label: "10%", percent: 10 },
  { id: "vat-21", label: "21%", percent: 21 },
]

export const controllingTags: ControllingTag[] = [
  { id: "tag-billable", label: "Billable" },
  { id: "tag-non-billable", label: "Non-billable" },
  { id: "tag-recurring", label: "Recurring" },
  { id: "tag-one-off", label: "One-off" },
  { id: "tag-internal", label: "Internal" },
  { id: "tag-client-facing", label: "Client-facing" },
]

export type Budget = {
  id: string
  /** Short human-readable name. */
  name: string
  /** Accounting code, e.g. "BUD-2026-MKT". */
  code: string
}

/**
 * Budgets catalog — feeds the "Budgets" dropdown in the
 * "Budget and project" section of the expense form. Distinct from
 * `projects`: a budget is the spending envelope, a project is the
 * initiative the spend is attributed to.
 */
export const budgets: Budget[] = [
  { id: "bud-travel", name: "Travel & accommodation", code: "BUD-2026-TRV" },
  { id: "bud-marketing", name: "Marketing", code: "BUD-2026-MKT" },
  { id: "bud-engineering", name: "Engineering", code: "BUD-2026-ENG" },
  { id: "bud-events", name: "Events & conferences", code: "BUD-2026-EVT" },
  { id: "bud-office", name: "Office & facilities", code: "BUD-2026-OFF" },
]

export type TaxType = {
  id: string
  label: string
}

/**
 * Tax types — the "Tax type" dropdown in the repeatable Tax section.
 * Kept short and Spain-flavoured (VAT/IGIC) since designers lift these
 * into screenshots; pair with `vatRates` for the rate column.
 */
export const taxTypes: TaxType[] = [
  { id: "tax-vat", label: "VAT" },
  { id: "tax-igic", label: "IGIC" },
  { id: "tax-withholding", label: "Withholding (IRPF)" },
  { id: "tax-none", label: "No tax" },
]
