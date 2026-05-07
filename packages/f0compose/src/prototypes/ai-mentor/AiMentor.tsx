import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Person, Sparkles } from "@factorialco/f0-react/icons/app"
import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { type AiMentorTab, moduleTabs } from "./tabs"
import { OverviewTab } from "./overview/OverviewTab"
import { RecommendationsTab } from "./recommendations/RecommendationsTab"
import { DraftCoursesTab } from "./draft-courses/DraftCoursesTab"
import { CareerPathsTab } from "./career-paths/CareerPathsTab"
import { CompanyContextTab } from "./company-context/CompanyContextTab"
import { EmployeeView } from "./shared/EmployeeView"
import { ManagerView } from "./shared/ManagerView"

export const meta: PrototypeMeta = {
  slug: "ai-mentor",
  title: "AI Mentor",
  description:
    "AI-powered personalised learning paths for every employee. The AI Mentor analyses performance reviews, goals, competencies and career paths to recommend the right course at the right time. Covers the L&D Admin dashboard, recommendation management, draft course review, career path configuration, company context settings, and both employee and manager views.",
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
    : "overview"

  const view = searchParams.get("view") ?? ""
  const employeeId = searchParams.get("employeeId") ?? ""
  const managerId = searchParams.get("managerId") ?? ""

  const setTab = useCallback(
    (id: string) => {
      const next = new URLSearchParams()
      if (id !== "overview") next.set("tab", id)
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

  const goToManagerView = useCallback(
    (id: string) => {
      setSearchParams({ view: "manager", managerId: id })
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
  // Sub-screen: manager view
  // -------------------------------------------------------------------------
  if (view === "manager") {
    return <ManagerView managerId={managerId} onBack={goBack} />
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
              id: "my_trainings",
              name: "Training",
              href: "/p/ai-mentor",
            }}
            actions={[
              {
                label: "Employee view",
                icon: Person,
                onClick: () => goToEmployeeView("emp-005"),
              },
              {
                label: "Manager view",
                icon: Sparkles,
                onClick: () => goToManagerView("emp-004"),
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
        {activeTab === "overview" && (
          <OverviewTab
            onViewEmployee={goToEmployeeView}
            onViewManager={goToManagerView}
          />
        )}
        {activeTab === "recommendations" && (
          <RecommendationsTab onViewEmployee={goToEmployeeView} />
        )}
        {activeTab === "draft-courses" && <DraftCoursesTab />}
        {activeTab === "career-paths" && <CareerPathsTab />}
        {activeTab === "company-context" && <CompanyContextTab />}
      </div>
    </Page>
  )
}
