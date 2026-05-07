import { F0Dialog, F0Text, StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader, Tabs } from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import type { PrototypeMeta } from "../types"
import type { SignalAreaId } from "./shared/types"

import { EmployeeDetail } from "./components/EmployeeDetail"
import { PolicyBar } from "./components/PolicyBar"
import { findArea } from "./shared/areas"
import { findEmployeeSignals, signalPolicies } from "./shared/data"
import { moduleTabs, type SignalTabId } from "./tabs"
import { AreaTab } from "./tabs/AreaTab"
import { OverviewTab } from "./tabs/OverviewTab"

/**
 * Performance Signal System — manager-facing prototype.
 *
 * Goal: surface "battery scores" (0–100) per employee across 6 product areas
 * (Goals, Absenteeism, Engagement, Attendance & Productivity, Talent
 * Development, Compensation) plus an upsell area (Compensation Insights)
 * to help managers prep performance reviews with data.
 *
 * Layout:
 *   - PageHeader (Performance module avatar)
 *   - Primary tabs: Overview · one tab per area
 *   - PolicyBar (weighting template switcher)
 *   - Body: Overview = KPIs + heatmap + ranking + alerts
 *           Area tabs = per-area KPIs + bar chart + ranking
 *   - Drill-down: clicking any employee opens a right-side F0Dialog with
 *     gauge, trend, radar and per-area headlines.
 *
 * Folder layout:
 *   signals/
 *     Signals.tsx            ← this file (page shell + drill-down)
 *     tabs.ts                ← tab id/label constants
 *     shared/                ← areas catalog, types, mock signal data
 *     components/            ← StatusPill, PolicyBar, EmployeeDetail
 *     tabs/                  ← OverviewTab, AreaTab
 */
export const meta: PrototypeMeta = {
  slug: "signals",
  title: "Performance signals",
  description:
    "Manager-facing battery scores across 6 performance areas. Overview tab with team KPIs, heatmap, rankings and alerts; area tabs with per-area drill-downs; click any employee to open a detail sidepanel with composite gauge, 12-month trend, area radar and signal headlines.",
  category: "Talent",
  module: "performance",
  audience: ["manager"],
  tags: ["performance", "signals", "battery-score", "review"],
  createdAt: "2026-05-07",
}

export default function Signals() {
  const [activeTab, setActiveTab] = useState<SignalTabId>("overview")
  const [activePolicyId, setActivePolicyId] = useState<string>("policy-default")
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(
    null
  )

  const closeDrawer = () => setSelectedEmployeeId(null)
  const selectedSignals = selectedEmployeeId
    ? findEmployeeSignals(selectedEmployeeId)
    : null

  const renderBody = () => {
    if (activeTab === "overview") {
      return <OverviewTab onSelectEmployee={setSelectedEmployeeId} />
    }
    return (
      <AreaTab
        areaId={activeTab as SignalAreaId}
        onSelectEmployee={setSelectedEmployeeId}
      />
    )
  }

  const headerSubtitle =
    activeTab === "overview"
      ? "Real-time battery scores across all activated areas, computed on view."
      : (findArea(activeTab as SignalAreaId)?.description ?? "")

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "performance",
              name: "Performance signals",
              href: "/p/signals",
            }}
            actions={[]}
          />
          <Tabs
            tabs={[...moduleTabs]}
            activeTabId={activeTab}
            setActiveTabId={(id: string) => setActiveTab(id as SignalTabId)}
          />
        </>
      }
    >
      <StandardLayout>
        <div className="flex flex-col gap-4">
          <F0Text content={headerSubtitle} variant="description" />
          <PolicyBar
            policies={signalPolicies}
            activePolicyId={activePolicyId}
            onSelect={setActivePolicyId}
          />
          {renderBody()}
        </div>
      </StandardLayout>

      {selectedSignals && (
        <F0Dialog
          isOpen={!!selectedEmployeeId}
          onClose={closeDrawer}
          position="right"
          width="lg"
          title="Employee signals"
          description="Composite score, 12-month trend and per-area breakdown."
          module={{
            id: "performance",
            label: "Performance",
            href: "/p/signals",
          }}
        >
          <EmployeeDetail signals={selectedSignals} onClose={closeDrawer} />
        </F0Dialog>
      )}
    </Page>
  )
}
