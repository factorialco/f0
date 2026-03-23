import {
  DashboardCard,
  type DashboardCardProps,
} from "../F0AiChat/canvas/entities/dashboard/DashboardCard"

export type F0ChatReportCardProps = DashboardCardProps

/**
 * @deprecated Use `DashboardCard` from `canvas/entities/dashboard` directly.
 * This re-export exists for backwards compatibility.
 */
export const F0ChatReportCard = DashboardCard

F0ChatReportCard.displayName = "F0ChatReportCard"
