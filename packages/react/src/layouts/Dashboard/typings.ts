export const dashboardWidgetSizes = ["1x1", "2x2", "4x2"] as const

export type DashboardWidgetSize = (typeof dashboardWidgetSizes)[number]
