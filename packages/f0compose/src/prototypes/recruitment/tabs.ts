/** Primary tabs for the Recruitment module — match the production navigation. */
export const moduleTabs = [
  { id: "jobs", label: "Jobs" },
  { id: "candidates", label: "Candidates" },
  { id: "messages", label: "Messages" },
  { id: "internal-opportunities", label: "Internal opportunities" },
  { id: "insights", label: "Insights" },
  { id: "purchase-requests", label: "Purchase requests" },
] as const

/** Secondary tabs only shown under "Jobs". Candidates uses presets, not tabs. */
export const jobsSubTabs = [
  { id: "job-openings", label: "Job openings" },
  { id: "requisitions", label: "Requisitions" },
] as const

export type ModuleTabId = (typeof moduleTabs)[number]["id"]
export type JobsSubTabId = (typeof jobsSubTabs)[number]["id"]
