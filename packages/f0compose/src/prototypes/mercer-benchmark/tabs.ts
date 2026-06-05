export const primaryTabs = [
  { id: "catalog", label: "Job Catalog" },
  { id: "mapping", label: "Role Mapping" },
] as const

export type PrimaryTabId = (typeof primaryTabs)[number]["id"]
