// Public dashboard canvas primitives.
// Compose them in the host app's `CanvasEntityDefinition` and/or
// `useCopilotAction.render`.
export { DashboardCard } from "./DashboardCard"
export type { DashboardCardProps } from "./DashboardCard"
export { DashboardContent } from "./DashboardContent"
export { DashboardHeader } from "./DashboardHeader"
export { DashboardCanvasProvider } from "./DashboardContext"
export { savedDashboardConfigStore } from "./configStore"
export type { DashboardCanvasContent } from "../../../types"
export type { ChatDashboardConfig, DashboardCanvasActions } from "./types"
