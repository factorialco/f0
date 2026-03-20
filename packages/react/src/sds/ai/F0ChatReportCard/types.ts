import type { ChatDashboardConfig } from "../F0ChatDashboard/types"

export interface F0ChatReportCardProps {
  /** The original dashboard config from the agent */
  config: ChatDashboardConfig
  /** Callback when the user clicks the card to view the report */
  onView: (config: ChatDashboardConfig) => void
  /** Tool call ID used to look up saved (edited) dashboard configs */
  toolCallId?: string
}
