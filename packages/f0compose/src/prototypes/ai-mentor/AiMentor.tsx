import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Person } from "@factorialco/f0-react/icons/app"
import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { type AiMentorTab, moduleTabs } from "./tabs"
import { AiMentorSettingsTab } from "./settings/AiMentorSettingsTab"
import { BudgetsTab } from "./budgets/BudgetsTab"
import { InsightsTab } from "./insights/InsightsTab"
import { RequestsTab } from "./requests/RequestsTab"
import { TrainingsTab } from "./trainings/TrainingsTab"
import { EmployeeView } from "./shared/EmployeeView"

export const meta: PrototypeMeta = {
  slug: "ai-mentor",
  title: "AI Mentor",
  description:
    "AI Mentor embedded in the real Trainings admin flow. Courses, requests, budgets and insights keep their existing logic; AI Mentor only adds context when a closed Performance Review creates a learning recommendation.",
  category: "Talent",
  module: "my-training",
  audience: ["admin", "manager", "employee"],
  tags: ["ai", "training", "learning", "performance", "career-path", "l&d"],
  createdAt: "2026-05-07",
}

const VALID_TABS = new Set(moduleTabs.map((t) => t.id))

export default function AiMentor() {
  const [searchParams, setSearchParams] = useSearchParams()

  const requestedTab = searchParams.get("tab")
  const activeTab = VALID_TABS.has(requestedTab as AiMentorTab)
    ? (requestedTab as AiMentorTab)
    : "trainings"

  const view = searchParams.get("view") ?? ""
  const employeeId = searchParams.get("employeeId") ?? ""
  const setTab = useCallback(
    (id: string) => {
      const next = new URLSearchParams()
      if (id !== "trainings") next.set("tab", id)
      setSearchParams(next)
    },
    [setSearchParams]
  )

  const goToEmployeeView = useCallback(
    (id: string) => {
      setSearchParams({ view: "employee", employeeId: id })
    },
    [setSearchParams]
  )

  const goBack = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  const tabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
  }))

  // -------------------------------------------------------------------------
  // Sub-screen: employee view
  // -------------------------------------------------------------------------
  if (view === "employee") {
    return <EmployeeView employeeId={employeeId} onBack={goBack} />
  }

  // -------------------------------------------------------------------------
  // Main admin view
  // -------------------------------------------------------------------------
  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Trainings",
              href: "/p/ai-mentor",
            }}
            actions={[
              {
                label: "Preview My trainings",
                icon: Person,
                onClick: () => goToEmployeeView("emp-005"),
              },
            ]}
          />
          <Tabs
            key={activeTab}
            tabs={tabsWithNav}
            activeTabId={activeTab}
          />
        </>
      }
    >
      <div className="flex flex-col gap-6 p-8">
        {activeTab === "trainings" && <TrainingsTab />}
        {activeTab === "requests" && <RequestsTab />}
        {activeTab === "budgets" && <BudgetsTab />}
        {activeTab === "insights" && <InsightsTab />}
        {activeTab === "ai-mentor-settings" && <AiMentorSettingsTab />}
      </div>
    </Page>
  )
}
