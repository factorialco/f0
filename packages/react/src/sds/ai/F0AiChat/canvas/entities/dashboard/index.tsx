import type { DashboardCanvasContent } from "../../../types"
import type { CanvasEntityDefinition } from "../../types"

import { DashboardContent } from "./DashboardContent"
import { DashboardCanvasProvider } from "./DashboardContext"
import { DashboardHeader } from "./DashboardHeader"

export const dashboardCanvasEntity: CanvasEntityDefinition<DashboardCanvasContent> =
  {
    type: "dashboard",
    renderContent: ({ content, refreshKey }) => (
      <DashboardContent content={content} refreshKey={refreshKey} />
    ),
    renderHeader: ({ content, onClose, onRefresh }) => (
      <DashboardHeader
        title={content.title}
        onClose={onClose}
        onRefresh={onRefresh}
      />
    ),
    wrapper: ({ content, children }) => (
      <DashboardCanvasProvider content={content}>
        {children}
      </DashboardCanvasProvider>
    ),
  }

export type { DashboardCanvasContent } from "../../../types"
export { savedDashboardConfigStore } from "./configStore"
export { DashboardCard } from "./DashboardCard"
export type { DashboardCardProps } from "./DashboardCard"
