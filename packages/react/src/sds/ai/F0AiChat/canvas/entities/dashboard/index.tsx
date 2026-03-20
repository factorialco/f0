import type { CanvasEntityDefinition } from "../../types"
import { registerCanvasEntity } from "../../registry"

import { DashboardActions } from "./DashboardActions"
import { DashboardContent } from "./DashboardContent"
import { DashboardCanvasProvider } from "./DashboardContext"
import type { DashboardCanvasContent } from "./types"

export const dashboardCanvasEntity: CanvasEntityDefinition<DashboardCanvasContent> =
  {
    type: "dashboard",
    renderContent: ({ content, refreshKey }) => (
      <DashboardContent content={content} refreshKey={refreshKey} />
    ),
    renderHeaderActions: () => <DashboardActions />,
    wrapper: ({ content, children }) => (
      <DashboardCanvasProvider content={content}>
        {children}
      </DashboardCanvasProvider>
    ),
  }

registerCanvasEntity(dashboardCanvasEntity)

export type { DashboardCanvasContent } from "./types"
export { savedDashboardConfigStore } from "./configStore"
export { DashboardCard } from "./DashboardCard"
export type { DashboardCardProps } from "./DashboardCard"
