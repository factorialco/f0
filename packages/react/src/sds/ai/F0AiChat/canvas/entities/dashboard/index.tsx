import type { CanvasEntityDefinition } from "../../types"
import { registerCanvasEntity } from "../../registry"

import { DashboardContent } from "./DashboardContent"
import { DashboardCanvasProvider } from "./DashboardContext"
import { DashboardHeader } from "./DashboardHeader"
import type { DashboardCanvasContent } from "../../../types"

export const dashboardCanvasEntity: CanvasEntityDefinition<DashboardCanvasContent> =
  {
    type: "dashboard",
    renderContent: ({ content, refreshKey }) => (
      <DashboardContent content={content} refreshKey={refreshKey} />
    ),
    renderHeader: ({ content, onClose }) => (
      <DashboardHeader title={content.title} onClose={onClose} />
    ),
    wrapper: ({ content, children }) => (
      <DashboardCanvasProvider content={content}>
        {children}
      </DashboardCanvasProvider>
    ),
  }

registerCanvasEntity(dashboardCanvasEntity)

export type { DashboardCanvasContent } from "../../../types"
export { savedDashboardConfigStore } from "./configStore"
export { DashboardCard } from "./DashboardCard"
export type { DashboardCardProps } from "./DashboardCard"
