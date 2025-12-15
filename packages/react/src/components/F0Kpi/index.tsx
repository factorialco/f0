import { experimentalComponent } from "@/lib/experimental"
export * from "./types"

import { F0Kpi as F0KpiCmp } from "./F0Kpi"

export const F0Kpi = experimentalComponent<typeof F0KpiCmp>("F0Kpi", F0KpiCmp)
