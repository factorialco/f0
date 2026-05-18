import { F0Box, F0Heading, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { moduleTabs, type ModuleTabId } from "./tabs"
import { enpsTabs, type EnpsTabId } from "./enps/enpsTabs"
import { ResultsView } from "./enps/results/ResultsView"
import { AnswersView } from "./enps/answers/AnswersView"
import { ConfigurationView } from "./enps/configuration/ConfigurationView"

export const meta: PrototypeMeta = {
  slug: "engagement",
  title: "Engagement",
  description:
    "Engagement module: 1:1 meetings, pulse, surveys, eNPS and insights.",
  category: "Talent",
  module: "engagement",
  audience: ["admin"],
  tags: ["engagement", "enps", "surveys", "1:1", "meetings", "pulse", "insights"],
  createdAt: "2026-05-11",
}

const VALID_TABS = new Set<string>(moduleTabs.map((t) => t.id))
const VALID_ENPS_TABS = new Set<string>(enpsTabs.map((t) => t.id))

export default function Engagement() {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawTab = searchParams.get("tab")
  const activeTab: ModuleTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as ModuleTabId) : "enps"

  const rawEnpsTab = searchParams.get("enpsTab")
  const activeEnpsTab: EnpsTabId =
    rawEnpsTab && VALID_ENPS_TABS.has(rawEnpsTab)
      ? (rawEnpsTab as EnpsTabId)
      : "answers"

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "enps") next.set("tab", id)
    setSearchParams(next)
  }

  const setActiveEnpsTab = (id: string) => {
    const next = new URLSearchParams()
    next.set("tab", "enps")
    if (id !== "answers") next.set("enpsTab", id)
    setSearchParams(next)
  }

  const primaryTabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  const secondaryTabsWithNav = enpsTabs.map((t) => ({
    ...t,
    onClick: () => setActiveEnpsTab(t.id),
  }))

  const placeholderTab = (title: string, description: string) => (
    <F0Box display="flex" flexDirection="column" gap="md" padding="lg">
      <F0Heading content={title} variant="heading" as="h2" />
      <F0Text content={description} variant="description" />
    </F0Box>
  )

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "engagement",
              name: "Engagement",
              href: "/p/engagement",
            }}
          />
          <Tabs
            key={activeTab}
            tabs={primaryTabsWithNav}
            activeTabId={activeTab}
          />
          {activeTab === "enps" && (
            <Tabs
              secondary
              key={`enps-${activeEnpsTab}`}
              tabs={secondaryTabsWithNav}
              activeTabId={activeEnpsTab}
            />
          )}
        </>
      }
    >
      <StandardLayout>
        {activeTab === "one-on-one" &&
          placeholderTab("1:1 Meetings", "Manage and schedule one-on-one meetings with your team.")}
        {activeTab === "pulse" &&
          placeholderTab("Pulse", "Track employee pulse surveys and sentiment over time.")}
        {activeTab === "surveys" &&
          placeholderTab("Surveys", "Create and manage employee surveys.")}
        {activeTab === "insights" &&
          placeholderTab("Insights", "Engagement analytics and trends across the organization.")}
        {activeTab === "enps" && activeEnpsTab === "answers" && (
          <AnswersView />
        )}
        {activeTab === "enps" && activeEnpsTab === "analytics" &&
          placeholderTab("Analytics", "eNPS trends, breakdowns by department, and historical analysis.")}
        {activeTab === "enps" && activeEnpsTab === "results" && (
          <ResultsView />
        )}
        {activeTab === "enps" && activeEnpsTab === "configuration" && (
          <ConfigurationView />
        )}
      </StandardLayout>
    </Page>
  )
}
