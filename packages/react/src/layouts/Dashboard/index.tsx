import { experimentalComponent } from "@/lib/experimental"
import { Dashboard as DashboardComponent } from "./Dashboard"
export type { DashboardProps } from "./Dashboard"
export * from "./typings"

export const Dashboard = experimentalComponent("Dashboard", DashboardComponent)
