import { F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Cross } from "@factorialco/f0-react/icons/app"
import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { CandidatesTab } from "./candidates/CandidatesTab"
import { InternalOpportunitiesTab } from "./internal-opportunities/InternalOpportunitiesTab"
import { JobsTab } from "./jobs/JobsTab"
import { CreateJobForm, type NewJob } from "./shared/CreateJobForm"
import {
  jobsSubTabs,
  type JobsSubTabId,
  moduleTabs,
  type ModuleTabId,
} from "./tabs"

/**
 * Recruitment prototype — entry point. Wires the page shell, primary +
 * secondary tabs, and routes into the Jobs / Candidates / Internal
 * Opportunities tab subtrees, plus a "Create job posting" sub-screen.
 *
 * Navigation is URL-driven (Step 4.5 of the f0-prototype skill):
 *   /p/recruitment                              — default (jobs / openings)
 *   /p/recruitment?tab=candidates               — primary tab
 *   /p/recruitment?tab=jobs&sub=requisitions    — primary + secondary tab
 *   /p/recruitment?view=create-job              — create job sub-screen
 *
 * The create form is registered in the AI form registry from the entry
 * top-level (`useCreateJobForm`) so the agent can fill it from any
 * view, not just when the sub-screen is mounted.
 */
export const meta: PrototypeMeta = {
  slug: "recruitment",
  title: "Recruitment",
  description:
    "Real Factorial Recruitment module: navigate between Jobs, Candidates, and the employee-facing Internal opportunities card grid. URL-driven tabs, sticky sub-screen for creating a new job posting that the AI copilot can co-create.",
  category: "Talent",
  module: "recruitment",
  audience: ["admin", "employee"],
  tags: ["recruitment", "jobs", "candidates", "talent"],
  createdAt: "2026-05-05",
}

const VALID_MODULE_TABS = new Set<string>(moduleTabs.map((t) => t.id))
const VALID_JOBS_SUB_TABS = new Set<string>(jobsSubTabs.map((t) => t.id))

export default function Recruitment() {
  const [searchParams, setSearchParams] = useSearchParams()

  const view = searchParams.get("view") === "create-job" ? "create-job" : "list"
  const rawTab = searchParams.get("tab")
  const activeModuleTab: ModuleTabId =
    rawTab && VALID_MODULE_TABS.has(rawTab) ? (rawTab as ModuleTabId) : "jobs"
  const rawSub = searchParams.get("sub")
  const jobsSubTab: JobsSubTabId =
    rawSub && VALID_JOBS_SUB_TABS.has(rawSub)
      ? (rawSub as JobsSubTabId)
      : "job-openings"

  const setActiveModuleTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "jobs") next.delete("tab")
    else next.set("tab", id)
    next.delete("sub") // reset sub when switching primary
    next.delete("view")
    setSearchParams(next)
  }
  const setJobsSubTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "job-openings") next.delete("sub")
    else next.set("sub", id)
    setSearchParams(next)
  }
  const goToCreateJob = () =>
    setSearchParams({ tab: "jobs", view: "create-job" })
  const goToList = () => setSearchParams({})

  // Wire each tab's `onClick` so the URL is the source of truth.
  // We don't pass `setActiveTabId` — Tabs keeps its own internal state
  // for visual feedback; we force it to re-sync with the URL via
  // `key={activeModuleTab}` so external nav (breadcrumb, deep link)
  // remounts the component with the right initialActiveTabId.
  const moduleTabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setActiveModuleTab(t.id),
  }))
  const jobsSubTabsWithNav = jobsSubTabs.map((t) => ({
    ...t,
    onClick: () => setJobsSubTab(t.id),
  }))

  const handleCreate = useCallback(
    (data: NewJob) => {
      // eslint-disable-next-line no-console
      console.info("[recruitment] create job posting:", data)
      setSearchParams({})
    },
    [setSearchParams]
  )

  // ---------------------------------------------------------------------
  // Sub-screen: create job posting
  // ---------------------------------------------------------------------
  if (view === "create-job") {
    return (
      <Page
        header={
          <>
            <PageHeader
              module={{
                id: "ats",
                name: "Recruitment",
                href: "/p/recruitment",
              }}
              breadcrumbs={[{ id: "create-job", label: "Create job posting" }]}
            />
            {/*
              Sticky resource header for the sub-screen. Cancel sits as
              a secondary action here (the form's Create button is the
              primary action — owned by F0Form).
            */}
            <ResourceHeader
              title="Create job posting"
              description="Open a new role on the careers page. Fill it in yourself or ask the copilot (top right) to draft it for you."
              secondaryActions={[
                { label: "Cancel", icon: Cross, onClick: goToList },
              ]}
            />
          </>
        }
      >
        <StandardLayout>
          <CreateJobForm onCreate={handleCreate} />
        </StandardLayout>
      </Page>
    )
  }

  // ---------------------------------------------------------------------
  // Main view: tabbed module
  // ---------------------------------------------------------------------
  // Sub-tabs sit alongside the primary module tabs in the Page header so the
  // whole navigation stack stays sticky / fixed at the top. Candidates has
  // NO sub-tabs — Active / Talent pool / Archived are presets on the
  // OneDataCollection, not navigation.
  const subTabsSlot =
    activeModuleTab === "jobs" ? (
      <Tabs
        key={jobsSubTab}
        secondary
        tabs={jobsSubTabsWithNav}
        activeTabId={jobsSubTab}
      />
    ) : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "ats",
              name: "Recruitment",
              href: "/p/recruitment",
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
        {activeModuleTab === "jobs" && (
          <JobsTab
            activeSubTab={jobsSubTab}
            onCreateJob={goToCreateJob}
          />
        )}
        {activeModuleTab === "candidates" && <CandidatesTab />}
        {activeModuleTab === "internal-opportunities" && (
          <InternalOpportunitiesTab />
        )}
        {activeModuleTab !== "jobs" &&
          activeModuleTab !== "candidates" &&
          activeModuleTab !== "internal-opportunities" && (
            <F0Text
              content={`The "${
                moduleTabs.find((t) => t.id === activeModuleTab)?.label
              }" tab is part of the prototype scaffold but has no demo content yet.`}
              variant="description"
            />
          )}
      </StandardLayout>
    </Page>
  )
}
