import { F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import type { PrototypeMeta } from "../types"
import { CandidatesTab } from "./candidates/CandidatesTab"
import { InternalOpportunitiesTab } from "./internal-opportunities/InternalOpportunitiesTab"
import { JobsTab } from "./jobs/JobsTab"
import { jobsSubTabs, moduleTabs } from "./tabs"

/**
 * Recruitment prototype — entry point. Wires the page shell, primary +
 * secondary tabs, and routes into the Jobs / Candidates / Internal
 * Opportunities tab subtrees.
 *
 * Folder layout:
 *   recruitment/
 *     Recruitment.tsx           ← this file (page shell + tab routing)
 *     tabs.ts                   ← tab id/label constants
 *     shared/stageColors.ts     ← colour mapping reused across tabs
 *     jobs/                     ← Jobs tab: JobsTab, PinnedJobCard, table
 *                                 columns, data source hook, status helpers
 *     candidates/               ← Candidates tab: CandidatesTab, table
 *                                 columns, data source hook, rating helper
 *     internal-opportunities/   ← employee-facing card grid grouped by
 *                                 location, with Apply / Refer / public-page
 *                                 actions on each card
 */
export const meta: PrototypeMeta = {
  slug: "recruitment",
  title: "Recruitment",
  description:
    "Real Factorial Recruitment module: navigate between Jobs, Candidates, and the employee-facing Internal opportunities card grid. Pinned jobs, candidate funnels, sortable tables, and per-card Apply / Refer / Open-public-page actions on the OneDataCollection.",
  category: "Talent",
  module: "recruitment",
  audience: ["admin", "employee"],
  tags: ["recruitment", "jobs", "candidates", "talent"],
  createdAt: "2026-05-05",
}

export default function Recruitment() {
  const [activeModuleTab, setActiveModuleTab] = useState<string>("jobs")
  const [jobsSubTab, setJobsSubTab] = useState<string>("job-openings")

  // Sub-tabs sit alongside the primary module tabs in the Page header so the
  // whole navigation stack stays sticky / fixed at the top. Candidates has
  // NO sub-tabs — Active / Talent pool / Archived are presets on the
  // OneDataCollection, not navigation.
  const subTabsSlot =
    activeModuleTab === "jobs" ? (
      <Tabs
        secondary
        tabs={[...jobsSubTabs]}
        activeTabId={jobsSubTab}
        setActiveTabId={setJobsSubTab}
      />
    ) : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "ats", name: "Recruitment", href: "/recruitment" }}
            actions={[]}
          />
          <Tabs
            tabs={[...moduleTabs]}
            activeTabId={activeModuleTab}
            setActiveTabId={setActiveModuleTab}
          />
          {subTabsSlot}
        </>
      }
    >
      <StandardLayout>
        {activeModuleTab === "jobs" && <JobsTab activeSubTab={jobsSubTab} />}
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
