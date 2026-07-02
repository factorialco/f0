/** Primary tabs for the Training module. */
export const moduleTabs = [
  { id: "trainings", label: "Trainings" },
  { id: "requests", label: "Requests" },
  { id: "budgets", label: "Budgets" },
  { id: "insights", label: "Insights" },
] as const

/** Secondary tabs under "Trainings". */
export const trainingsSubTabs = [
  { id: "list", label: "Trainings list" },
  { id: "categories", label: "Categories" },
] as const

export type ModuleTabId = (typeof moduleTabs)[number]["id"]
export type TrainingsSubTabId = (typeof trainingsSubTabs)[number]["id"]
