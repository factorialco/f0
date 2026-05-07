import type { SignalAreaId } from "./shared/types"

export type SignalTabId = "overview" | SignalAreaId

export const moduleTabs: { id: SignalTabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "goals", label: "Goals" },
  { id: "absenteeism", label: "Absences" },
  { id: "engagement", label: "Engagement" },
  { id: "attendance_productivity", label: "Attendance" },
  { id: "talent_development", label: "Development" },
  { id: "compensation", label: "Compensation" },
  { id: "compensation_insights", label: "Insights" },
]
