/** Primary tabs for the Engagement module. */
export const moduleTabs = [
  { id: "one-on-one", label: "1:1 meetings" },
  { id: "pulse", label: "Pulse" },
  { id: "surveys", label: "Surveys" },
  { id: "enps", label: "eNPS" },
  { id: "insights", label: "Insights" },
] as const

export type ModuleTabId = (typeof moduleTabs)[number]["id"]
