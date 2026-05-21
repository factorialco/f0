import type { ModuleId } from "@/shell/modules"

export type Audience = "admin" | "employee" | "manager"

export type Category =
  | "People"
  | "Payroll"
  | "Time"
  | "Talent"
  | "Documents"
  | "Settings"
  | "Other"

export type PrototypeMeta = {
  /** kebab-case unique identifier; used in routes (/p/:slug) and registry. */
  slug: string
  /** Human-readable title shown on cards and the page header. */
  title: string
  /** One-line description for the catalog card. */
  description: string
  /** Catalog grouping. */
  category: Category
  /** Module the prototype "belongs to" — drives sidebar highlight. */
  module: ModuleId
  /** Who is this for? Drives density and primary actions. */
  audience: Audience[]
  /** Optional searchable tags. */
  tags?: string[]
  /** ISO date when the prototype was first authored. */
  createdAt: string
  /** Optional author display name. */
  author?: string
}

/**
 * Each prototype module exports `meta` and a default React component.
 * The framework reads them via `import.meta.glob` in registry.ts.
 */
export type PrototypeModule = {
  default: React.ComponentType
  meta: PrototypeMeta
}
