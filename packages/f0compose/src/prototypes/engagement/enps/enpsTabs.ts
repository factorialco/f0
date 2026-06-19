/** Secondary tabs for the eNPS section. */
export const enpsTabs = [
  { id: "answers", label: "Answers" },
  { id: "analytics", label: "Analytics" },
  { id: "results", label: "Results" },
  { id: "configuration", label: "Configuration" },
] as const

export type EnpsTabId = (typeof enpsTabs)[number]["id"]
