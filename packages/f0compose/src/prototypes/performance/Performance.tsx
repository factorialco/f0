import { StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { CompetenciesTab } from "./competencies/CompetenciesTab"
import { DashboardsTab } from "./dashboards/DashboardsTab"
import { FeedbackTab } from "./feedback/FeedbackTab"
import { GoalsTab } from "./goals/GoalsTab"
import { ReviewsTab } from "./reviews/ReviewsTab"
import { moduleTabs, type ModuleTabId } from "./tabs"

export const meta: PrototypeMeta = {
  slug: "performance",
  title: "Performance",
  description:
    "Performance module: manage review cycles, goals, feedback, and competencies.",
  category: "Talent",
  module: "performance",
  audience: ["admin", "manager"],
  tags: ["performance", "reviews", "goals", "feedback", "competencies", "talent"],
  createdAt: "2026-05-07",
}

const VALID_TABS = new Set<string>(moduleTabs.map((t) => t.id))

export default function Performance() {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawTab = searchParams.get("tab")
  const activeTab: ModuleTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as ModuleTabId) : "dashboards"

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "dashboards") next.delete("tab")
    else next.set("tab", id)
    setSearchParams(next)
  }

  const tabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "performance",
              name: "Performance",
              href: "/p/performance",
            }}
          />
          <Tabs
            key={activeTab}
            tabs={tabsWithNav}
            activeTabId={activeTab}
          />
        </>
      }
    >
      <StandardLayout>
        {activeTab === "dashboards" && <DashboardsTab />}
        {activeTab === "reviews" && <ReviewsTab />}
        {activeTab === "goals" && <GoalsTab />}
        {activeTab === "feedback" && <FeedbackTab />}
        {activeTab === "competencies" && <CompetenciesTab />}
      </StandardLayout>
    </Page>
  )
}
