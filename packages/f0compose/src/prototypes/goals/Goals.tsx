import { F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Cross } from "@factorialco/f0-react/icons/app"
import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { GoalDetail } from "./goal-detail/GoalDetail"
import { CreateGoalForm } from "./goals-tab/CreateGoalForm"
import { GoalsTab } from "./goals-tab/GoalsTab"
import { CompanySwitcherBar } from "./shared/CompanySwitcherBar"
import { DEFAULT_COMPANY_ID, type CompanyId } from "./shared/companies"
import { goalsFixtures } from "./shared/fixtures"
import type { GoalRecord } from "./shared/types"
import { performanceTabs, type PerformanceTabId } from "./tabs"

export const meta: PrototypeMeta = {
  slug: "goals",
  title: "Goals",
  description:
    "Performance Goals module with hierarchical tree table showing nested sub-goals, status tracking, and progress measurement.",
  category: "Talent",
  module: "performance",
  audience: ["admin", "manager"],
  tags: ["performance", "goals", "okr", "objectives"],
  createdAt: "2026-05-07",
}

const VALID_PERF_TABS = new Set<string>(performanceTabs.map((t) => t.id))

type ViewKind = "list" | "create-goal" | "goal" | "edit-goal"

type GoalOverride = {
  progress?: number
  status?: GoalRecord["status"]
  dueDate?: string
}

export default function Goals() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [extraGoals, setExtraGoals] = useState<GoalRecord[]>([])
  const [overrides, setOverrides] = useState<Record<string, GoalOverride>>({})
  const [activeCompanyId, setActiveCompanyId] =
    useState<CompanyId>(DEFAULT_COMPANY_ID)

  const view = parseView(searchParams.get("view"))
  const goalId = searchParams.get("id") ?? null

  const rawTab = searchParams.get("tab")
  const activeTab: PerformanceTabId =
    rawTab && VALID_PERF_TABS.has(rawTab)
      ? (rawTab as PerformanceTabId)
      : "goals"

  const viewMode: "table" | "tree" =
    searchParams.get("mode") === "tree" ? "tree" : "table"
  const treeScope =
    (searchParams.get("scope") as
      | "team"
      | "all"
      | "mine"
      | "created-by-me"
      | "needs-attention"
      | null) ?? "team"

  const setViewMode = (m: "table" | "tree") => {
    const next = new URLSearchParams(searchParams)
    if (m === "tree") next.set("mode", "tree")
    else next.delete("mode")
    setSearchParams(next)
  }

  const setTreeScope = (
    s: "team" | "all" | "mine" | "created-by-me" | "needs-attention"
  ) => {
    const next = new URLSearchParams(searchParams)
    next.set("scope", s)
    setSearchParams(next)
  }

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "goals") next.set("tab", id)
    setSearchParams(next)
  }

  const goToCreateGoal = useCallback(
    () => setSearchParams({ view: "create-goal" }),
    [setSearchParams]
  )
  const goToList = useCallback(() => setSearchParams({}), [setSearchParams])
  const goToGoal = useCallback(
    (id: string) => setSearchParams({ view: "goal", id }),
    [setSearchParams]
  )
  const goToEditGoal = useCallback(
    (id: string) => setSearchParams({ view: "edit-goal", id }),
    [setSearchParams]
  )

  const handleCreateGoal = useCallback(
    (goal: GoalRecord) => {
      setExtraGoals((prev) => [...prev, goal])
      setSearchParams({})
    },
    [setSearchParams]
  )

  const handleSaveGoal = useCallback(
    (id: string, update: GoalOverride) => {
      setOverrides((prev) => ({
        ...prev,
        [id]: { ...prev[id], ...update },
      }))
      // Land back on the detail page so the user sees the new values.
      setSearchParams({ view: "goal", id })
    },
    [setSearchParams]
  )

  const perfTabsWithNav = performanceTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  // ─── Sub-screen: Create goal ─────────────────────────────────────
  if (view === "create-goal") {
    return (
      <Page
        key="create-goal"
        header={
          <>
            <PageHeader
              module={{
                id: "performance",
                name: "Performance",
                href: "/p/goals",
              }}
              breadcrumbs={[{ id: "create-goal", label: "New goal" }]}
            />
            <ResourceHeader
              title="New goal"
              description="Create a new goal. You can also ask the AI copilot (top right) to help you draft it."
              secondaryActions={[
                { label: "Cancel", icon: Cross, onClick: goToList },
              ]}
            />
          </>
        }
      >
        <StandardLayout>
          <CreateGoalForm onCreateGoal={handleCreateGoal} />
        </StandardLayout>
      </Page>
    )
  }

  // ─── Sub-screen: Goal detail / edit ──────────────────────────────
  if ((view === "goal" || view === "edit-goal") && goalId) {
    const goal = resolveGoal(goalId, extraGoals, overrides)
    if (goal) {
      return (
        <GoalDetail
          goal={goal}
          edit={view === "edit-goal"}
          onEdit={() => goToEditGoal(goal.id)}
          onCancelEdit={() => goToGoal(goal.id)}
          onSave={handleSaveGoal}
          onSelectGoal={goToGoal}
          onBack={goToList}
        />
      )
    }
    // Bad id → fall through to list
  }

  // ─── Main view: tabbed module ────────────────────────────────────
  return (
    <>
      <Page
        key="list"
        header={
          <>
            <PageHeader
              module={{
                id: "performance",
                name: "Performance",
                href: "/p/goals",
              }}
              actions={[]}
            />
            <Tabs
              key={activeTab}
              tabs={perfTabsWithNav}
              activeTabId={activeTab}
            />
          </>
        }
      >
        <StandardLayout>
          {activeTab === "goals" && (
            <GoalsTab
              onCreateGoal={goToCreateGoal}
              onSelectGoal={goToGoal}
              onEditGoal={goToEditGoal}
              extraGoals={extraGoals}
              companyId={activeCompanyId}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              treeScope={treeScope}
              onTreeScopeChange={setTreeScope}
            />
          )}
          {activeTab !== "goals" && (
            <F0Text
              content={`The "${performanceTabs.find((t) => t.id === activeTab)?.label}" tab is part of the prototype scaffold but has no demo content yet.`}
              variant="description"
            />
          )}
        </StandardLayout>
      </Page>
      <CompanySwitcherBar
        activeCompanyId={activeCompanyId}
        onSelectCompany={setActiveCompanyId}
      />
    </>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────

function parseView(raw: string | null): ViewKind {
  if (raw === "create-goal") return "create-goal"
  if (raw === "goal") return "goal"
  if (raw === "edit-goal") return "edit-goal"
  return "list"
}

function resolveGoal(
  id: string,
  extras: GoalRecord[],
  overrides: Record<string, GoalOverride>
): GoalRecord | null {
  const base =
    extras.find((g) => g.id === id) ??
    goalsFixtures.find((g) => g.id === id) ??
    null
  if (!base) return null
  const o = overrides[id]
  if (!o) return base
  return {
    ...base,
    progress: o.progress ?? base.progress,
    status: o.status ?? base.status,
    dueDate: o.dueDate ?? base.dueDate,
  }
}
