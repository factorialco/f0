import { F0Box, F0Heading, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useSearchParams } from "react-router-dom"

import { trainingBudgets } from "@/fixtures"

import type { PrototypeMeta } from "../types"
import { RequestsTab } from "./requests/RequestsTab"
import {
  moduleTabs,
  trainingsSubTabs,
  type ModuleTabId,
  type TrainingsSubTabId,
} from "./tabs"
import { TrainingsListTab } from "./trainings/TrainingsListTab"

/**
 * Training prototype — admin view of the Training module.
 *
 * Navigation is URL-driven:
 *   /p/training                        — default (trainings list)
 *   /p/training?tab=requests           — requests tab
 *   /p/training?tab=budgets            — budgets tab
 *   /p/training?tab=trainings&sub=categories — sub-tab
 */
export const meta: PrototypeMeta = {
  slug: "training",
  title: "Training",
  description:
    "Admin view of the Factorial Training module: manage trainings, review employee requests, track budgets, and view insights.",
  category: "Talent",
  module: "my-training",
  audience: ["admin", "manager"],
  tags: ["training", "learning", "development", "talent"],
  createdAt: "2026-05-07",
}

const VALID_MODULE_TABS = new Set<string>(moduleTabs.map((t) => t.id))
const VALID_SUB_TABS = new Set<string>(trainingsSubTabs.map((t) => t.id))

export default function Training() {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawTab = searchParams.get("tab")
  const activeModuleTab: ModuleTabId =
    rawTab && VALID_MODULE_TABS.has(rawTab)
      ? (rawTab as ModuleTabId)
      : "trainings"
  const rawSub = searchParams.get("sub")
  const trainingsSubTab: TrainingsSubTabId =
    rawSub && VALID_SUB_TABS.has(rawSub) ? (rawSub as TrainingsSubTabId) : "list"

  const setActiveModuleTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "trainings") next.delete("tab")
    else next.set("tab", id)
    next.delete("sub")
    setSearchParams(next)
  }

  const setTrainingsSubTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "list") next.delete("sub")
    else next.set("sub", id)
    setSearchParams(next)
  }

  const moduleTabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setActiveModuleTab(t.id),
  }))
  const subTabsWithNav = trainingsSubTabs.map((t) => ({
    ...t,
    onClick: () => setTrainingsSubTab(t.id),
  }))

  const subTabsSlot =
    activeModuleTab === "trainings" ? (
      <Tabs
        key={trainingsSubTab}
        secondary
        tabs={subTabsWithNav}
        activeTabId={trainingsSubTab}
      />
    ) : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "trainings",
              name: "Training",
              href: "/p/training",
            }}
            actions={[]}
          />
          <Tabs
            key={activeModuleTab}
            tabs={moduleTabsWithNav}
            activeTabId={activeModuleTab}
          />
          {subTabsSlot}
        </>
      }
    >
      <StandardLayout>
        {activeModuleTab === "trainings" && trainingsSubTab === "list" && (
          <TrainingsListTab />
        )}

        {activeModuleTab === "trainings" && trainingsSubTab === "categories" && (
          <F0Text
            content="Categories management is part of the prototype scaffold but has no demo content yet."
            variant="description"
          />
        )}

        {activeModuleTab === "requests" && <RequestsTab />}

        {activeModuleTab === "budgets" && <BudgetsTab />}

        {activeModuleTab === "insights" && (
          <F0Text
            content="The Insights tab is part of the prototype scaffold but has no demo content yet."
            variant="description"
          />
        )}
      </StandardLayout>
    </Page>
  )
}

/** Simple budgets overview with cards. */
function BudgetsTab() {
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0Heading content="Training Budgets — 2026" level={3} />
      <F0Box display="flex" flexDirection="column" gap="m">
        {trainingBudgets.map((b) => {
          const pct = Math.round((b.spent / b.totalBudget) * 100)
          return (
            <F0Box
              key={b.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="m"
              borderRadius="m"
              backgroundColor="f1-background-secondary"
            >
              <F0Box display="flex" flexDirection="column" gap="xs">
                <F0Text content={b.teamName} variant="body" />
                <F0Text
                  content={`${b.employeeCount} employees`}
                  variant="description"
                />
              </F0Box>
              <F0Box display="flex" gap="l" alignItems="center">
                <F0Box display="flex" flexDirection="column" alignItems="flex-end" gap="xs">
                  <F0Text
                    content={`${b.spent.toLocaleString()} / ${b.totalBudget.toLocaleString()} ${b.currency}`}
                    variant="body"
                  />
                  <F0Text content={`${pct}% used`} variant="description" />
                </F0Box>
              </F0Box>
            </F0Box>
          )
        })}
      </F0Box>
    </F0Box>
  )
}
