import { useState } from "react"
import { StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { RequestsTab } from "./requests/RequestsTab"
import { SmartEnrollmentsTab } from "./smart-enrollments/SmartEnrollmentsTab"
import { SmartEnrollmentsTab as SmartEnrollmentsTabV2 } from "./smart-enrollments-v2/SmartEnrollmentsTab"
import { OneCreateView } from "./smart-enrollments-v2/OneCreateView"
import { TrainingsListTab } from "./list/TrainingsListTab"
import { TrainingDetailView } from "./training-detail/TrainingDetailView"
import {
  moduleTabs,
  coursesSubTabs,
  type ModuleTabId,
  type CoursesSubTabId,
} from "./tabs"

/**
 * Trainings (admin) prototype — entry point.
 *
 * Navigation (URL-driven):
 *   /p/trainings                      — Trainings list
 *   /p/trainings?tab=requests         — Training requests
 *   /p/trainings?view=detail&id=<id>  — Training detail (overview/groups/participants/surveys)
 *   /p/trainings?view=detail&id=<id>&dtab=groups  — Training detail, groups tab
 */
export const meta: PrototypeMeta = {
  slug: "trainings",
  title: "Trainings (Admin)",
  description:
    "Company admin Trainings module: full list with status/type/categories/competencies filters, request approval workflow, and training detail with Overview, Groups, Participants, and Surveys tabs.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "compliance", "learning", "admin"],
  createdAt: "2026-05-12",
}

const VALID_TABS = new Set<string>(moduleTabs.map((t) => t.id))

export default function Trainings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showOneCreate, setShowOneCreate] = useState(false)

  const view = searchParams.get("view")
  const trainingId = searchParams.get("id") ?? ""
  const rawTab = searchParams.get("tab")
  const activeTab: ModuleTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as ModuleTabId) : "trainings"

  const VALID_SUB_TABS = new Set<string>(coursesSubTabs.map((t) => t.id))
  const rawSub = searchParams.get("sub")
  const activeSubTab: CoursesSubTabId =
    rawSub && VALID_SUB_TABS.has(rawSub) ? (rawSub as CoursesSubTabId) : "courses"

  const goToList = () => setSearchParams({})
  const goToDetail = (id: string) => setSearchParams({ view: "detail", id })
  const setTab = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "trainings") next.set("tab", id)
    setSearchParams(next)
  }
  const setSubTab = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "courses") next.set("sub", id)
    setSearchParams(next)
  }

  const tabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
  }))

  const subTabsWithNav = coursesSubTabs.map((t) => ({
    ...t,
    onClick: () => setSubTab(t.id),
  }))

  if (view === "detail" && trainingId) {
    return <TrainingDetailView trainingId={trainingId} onBack={goToList} />
  }

  if (showOneCreate) {
    return (
      <Page
        header={
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Training",
              href: "/p/trainings",
            }}
            breadcrumbs={[
              { id: "enrollment-rules", label: "Enrollment rules" },
            ]}
            actions={[]}
          />
        }
      >
        <OneCreateView onClose={() => setShowOneCreate(false)} onSubmit={() => {}} />
      </Page>
    )
  }

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Trainings",
              href: "/p/trainings",
            }}
            actions={[]}
          />
          <Tabs
            key={activeTab}
            tabs={tabsWithNav}
            activeTabId={activeTab}
          />
          {activeTab === "trainings" && (
            <Tabs
              secondary
              key={activeSubTab}
              tabs={subTabsWithNav}
              activeTabId={activeSubTab}
            />
          )}
        </>
      }
    >
      <StandardLayout>
        {activeTab === "trainings" && activeSubTab === "courses" && (
          <TrainingsListTab onOpenTraining={goToDetail} />
        )}
        {activeTab === "trainings" && activeSubTab === "tags" && (
          <div className="py-8 text-center text-gray-400">Tags management — coming soon</div>
        )}
        {activeTab === "trainings" && activeSubTab === "survey-templates" && (
          <div className="py-8 text-center text-gray-400">Survey templates — coming soon</div>
        )}
        {activeTab === "requests" && <RequestsTab />}
        {activeTab === "enrollments" && <SmartEnrollmentsTab />}
        {activeTab === "enrollments-v2" && <SmartEnrollmentsTabV2 onStartCreate={() => setShowOneCreate(true)} />}
      </StandardLayout>
    </Page>
  )
}
