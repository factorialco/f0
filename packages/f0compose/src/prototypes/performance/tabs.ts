/** Primary tabs for the Performance module. */
export const moduleTabs = [
  { id: "reviews", label: "Reviews" },
  { id: "goals", label: "Goals" },
  { id: "feedback", label: "Feedback" },
  { id: "competencies", label: "Competencies" },
] as const

export type ModuleTabId = (typeof moduleTabs)[number]["id"]
