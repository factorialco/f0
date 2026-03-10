import type { ChatDashboardConfig } from "../F0ChatDashboard/types"

export interface F0ChatReportCardProps {
  /** The full dashboard config — passed through to the canvas on click */
  config: ChatDashboardConfig
  /** Callback when the user clicks the card to view the report */
  onView: (config: ChatDashboardConfig) => void
}
