export type CompanyId = "default" | "factorial" | "lefebvre" | "gofit" | "plexus"

export const companies: Company[] = [
  { id: "default", name: "Default" },
  { id: "factorial", name: "Factorial" },
  { id: "lefebvre", name: "Lefebvre" },
  { id: "gofit", name: "GOfit" },
  { id: "plexus", name: "Plexus" },
]

export const DEFAULT_COMPANY_ID: CompanyId = "default"
