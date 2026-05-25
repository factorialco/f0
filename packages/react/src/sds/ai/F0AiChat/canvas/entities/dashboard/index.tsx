import type { CanvasEntityDefinition } from "../../types"

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
      <DashboardHeader content={content} onClose={onClose} />
    ),
    wrapper: ({ content, children }) => (
      <DashboardCanvasProvider content={content}>
        {children}
      </DashboardCanvasProvider>
    ),
    // Dashboard manages its own scroll: the grid grows with `flex-1` so a
    // single-item dashboard fills the remaining height (no scroll), while a
    // multi-item dashboard scrolls internally above the persistent action bar.
    overflowHidden: true,
  }

export type { DashboardCanvasContent } from "../../../types"
export { savedDashboardConfigStore } from "./configStore"
export { DashboardCard } from "./DashboardCard"
export type { DashboardCardProps } from "./DashboardCard"
