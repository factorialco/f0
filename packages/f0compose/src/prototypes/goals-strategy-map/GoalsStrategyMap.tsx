import { StandardLayout } from "@factorialco/f0-react"
import { OneEmptyState, ProductBlankslate, UpsellingBanner, UpsellingButton } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Sparkles } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { TreeListView } from "./tree-list/TreeListView"
import { TreeMapView } from "./tree-map/TreeMapView"
import { CompensationBody } from "./compensation/CompensationBody"
import {
  compTabs,
  VALID_COMP_TABS,
  type CompTabId,
} from "./compensation/compTabs"

export const meta: PrototypeMeta = {
  slug: "goals-strategy-map",
  title: "Performance",
  description:
    "Performance module with Reviews, Goals (tree list + strategy map), Feedback and Compensation.",
  category: "Talent",
  module: "performance",
  audience: ["admin", "manager"],
  tags: [
    "performance",
    "goals",
    "strategy",
    "compensation",
    "review",
    "feedback",
  ],
  createdAt: "2026-05-11",
}

// ── Primary tabs ────────────────────────────────────────────────────────
type SectionId = "review" | "goals" | "feedback" | "compensation" | "training"

const sectionTabs: { id: SectionId; label: string }[] = [
  { id: "review", label: "Review" },
  { id: "goals", label: "Goals" },
  { id: "feedback", label: "Feedback" },
  { id: "compensation", label: "Compensation" },
  { id: "training", label: "Training" },
]

const VALID_SECTIONS = new Set<string>(sectionTabs.map((t) => t.id))

// ── Goals sub-tabs ──────────────────────────────────────────────────────
type GoalViewId = "goals-list" | "strategy-map"

const goalViewTabs: { id: GoalViewId; label: string }[] = [
  { id: "goals-list", label: "Goals" },
  { id: "strategy-map", label: "Strategy map" },
]

const VALID_GOAL_VIEWS = new Set<string>(goalViewTabs.map((t) => t.id))

export default function GoalsStrategyMap() {
  const [searchParams, setSearchParams] = useSearchParams()

  // ── Primary section ─────────────────────────────────────────────────
  const rawSection = searchParams.get("section")
  const activeSection: SectionId =
    rawSection && VALID_SECTIONS.has(rawSection)
      ? (rawSection as SectionId)
      : "goals"

  const setSection = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "goals") next.set("section", id)
    setSearchParams(next)
  }

  const sectionTabsWithNav = sectionTabs.map((t) => ({
    ...t,
    onClick: () => setSection(t.id),
  }))

  // ── Goals view sub-tab ──────────────────────────────────────────────
  const rawView = searchParams.get("view")
  const activeGoalView: GoalViewId =
    rawView && VALID_GOAL_VIEWS.has(rawView)
      ? (rawView as GoalViewId)
      : "goals-list"

  const setGoalView = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "goals-list") next.delete("view")
    else next.set("view", id)
    setSearchParams(next)
  }

  const goalViewTabsWithNav = goalViewTabs.map((t) => ({
    ...t,
    onClick: () => setGoalView(t.id),
  }))

  // ── Compensation sub-tab ────────────────────────────────────────────
  const rawCompTab = searchParams.get("compTab")
  const activeCompTab: CompTabId =
    rawCompTab && VALID_COMP_TABS.has(rawCompTab)
      ? (rawCompTab as CompTabId)
      : "incentive-plans"

  const setCompTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("section", "compensation")
    if (id === "incentive-plans") next.delete("compTab")
    else next.set("compTab", id)
    setSearchParams(next)
  }

  const compTabsWithNav = compTabs.map((t) => ({
    ...t,
    onClick: () => setCompTab(t.id),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "performance",
              name: "Performance",
              href: "/p/goals-strategy-map",
            }}
          />
          <Tabs
            key={activeSection}
            tabs={sectionTabsWithNav}
            activeTabId={activeSection}
          />
          {activeSection === "goals" && (
            <Tabs
              key={`goal-${activeGoalView}`}
              secondary
              tabs={goalViewTabsWithNav}
              activeTabId={activeGoalView}
            />
          )}
          {activeSection === "compensation" && (
            <Tabs
              key={`comp-${activeCompTab}`}
              secondary
              tabs={compTabsWithNav}
              activeTabId={activeCompTab}
            />
          )}
        </>
      }
    >
      <StandardLayout>
        {activeSection === "review" && (
          <>
            <UpsellingBanner
              title="EU AI Act: train your team before August 2nd or get fined"
              subtitle="Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work."
              mediaUrl="https://images.pexels.com/photos/12541596/pexels-photo-12541596.jpeg?auto=compress&fit=crop&w=480&h=320&crop=center"
              primaryAction={{
                variant: "outline",
                label: "Learn more",
                onClick: () => {},
              }}
            />
            <OneEmptyState
              title="This is not done yet!"
              description="but looking cool right? Let's keep vibing!"
              emoji="🚀"
            />
          </>
        )}
        {activeSection === "goals" && (
          <>
            {activeGoalView === "goals-list" && <TreeListView />}
            {activeGoalView === "strategy-map" && <TreeMapView />}
          </>
        )}
        {activeSection === "feedback" && (
          <OneEmptyState
            title="This is not done yet!"
            description="but looking cool right? Let's keep vibing!"
            emoji="🚀"
          />
        )}
        {activeSection === "compensation" && (
          <CompensationBody activeTab={activeCompTab} />
        )}
        {activeSection === "training" && (
          <div className="flex items-center justify-center py-16 px-8 min-h-[60vh] [&_img]:w-[280px] [&_img]:h-[328px] [&_img]:max-w-none">
            <div className="w-full max-w-4xl">
              <ProductBlankslate
              module="company_trainings"
              moduleName="Training"
              title="EU AI Act: train your team before August 2nd or get fined"
              image="https://images.pexels.com/photos/12541596/pexels-photo-12541596.jpeg?auto=compress&fit=crop&w=480&h=320&crop=center"
              tag={{ label: "Add-on", icon: Sparkles }}
              promoTag={{ label: "New", variant: "positive" }}
              benefits={[
                "Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work.",
              ]}
              actions={
                <UpsellingButton label="Learn more" variant="outline" onClick={() => {}} />
              }
            />
            </div>
          </div>
        )}
      </StandardLayout>
    </Page>
  )
}
