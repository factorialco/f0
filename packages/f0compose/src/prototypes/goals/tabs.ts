/** Primary tabs for the Performance module header. */
export const performanceTabs = [
  { id: "reviews", label: "Reviews" },
  { id: "goals", label: "Goals" },
  { id: "1on1s", label: "1:1s" },
  { id: "feedback", label: "Feedback" },
] as const

export type PerformanceTabId = (typeof performanceTabs)[number]["id"]
