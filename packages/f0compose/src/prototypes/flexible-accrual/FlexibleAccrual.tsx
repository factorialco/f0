import { StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import {
  Ai,
  Calendar,
  Filter,
  Plus,
  Settings as SettingsIcon,
  Shield,
} from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { AuthoringView } from "./authoring/AuthoringView"
import { EmployeeView } from "./employee/EmployeeView"
import { SettingsHome } from "./settings/SettingsHome"
import { SimulateView } from "./simulate/SimulateView"
import {
  AllowanceDetailView,
  type ExpTabId,
} from "./time-off/AllowanceDetailView"
import {
  EXPLORATIONS,
  ExplorationSwitcher,
  type ExplorationId,
} from "./time-off/explorations"
import { PlaceholderTab } from "./time-off/PlaceholderTab"
import { PoliciesTab } from "./time-off/PoliciesTab"
import { PolicyDetailView } from "./time-off/PolicyDetailView"
import { getAllowance, getPolicy } from "./time-off/policiesData"

export const meta: PrototypeMeta = {
  slug: "flexible-accrual",
  title: "Flexible accrual rules",
  description:
    "Functional Settings prototype with Flexible Accrual Rules: policy/allowance flow (Option A), standalone Accrual Rules tab (Option B), and four UX explorations (E1–E4).",
  category: "Settings",
  module: "time-off",
  audience: ["admin", "employee"],
  tags: ["settings", "time-off", "accrual", "ai", "policy", "leave"],
  createdAt: "2026-05-25",
  author: "f0compose",
}

const TIME_OFF_TABS = [
  { id: "policies", label: "Time off policies" },
  { id: "accrual-rules", label: "Accrual Rules" },
  { id: "absence-types", label: "Absence types" },
  { id: "approval-groups", label: "Approval groups" },
  { id: "blocked-periods", label: "Blocked periods" },
] as const

type TimeOffTabId = (typeof TIME_OFF_TABS)[number]["id"]

const ACCRUAL_SUBTABS = [
  { id: "authoring", label: "Rule Authoring" },
  { id: "simulate", label: "Simulate" },
  { id: "employee", label: "Employee View" },
] as const
type AccrualSubTabId = (typeof ACCRUAL_SUBTABS)[number]["id"]

// Fixed exploration tabs on the allowance detail page. Switching swaps the
// whole accrual-rules experience. Exploration 2 is the default this iteration.
const EXP_TABS = [
  { id: "e1", label: "Exploration 1" },
  { id: "e2", label: "Exploration 2" },
  { id: "e3", label: "Exploration 3" },
  { id: "e4", label: "Exploration 4" },
] as const

const VALID_TIME_OFF = new Set(TIME_OFF_TABS.map((t) => t.id))
const VALID_ACCRUAL = new Set(ACCRUAL_SUBTABS.map((t) => t.id))
const VALID_EXPLORATIONS = new Set(EXPLORATIONS.map((e) => e.id))

export default function FlexibleAccrual() {
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get("view")

  const update = (mut: (p: URLSearchParams) => void) => {
    const next = new URLSearchParams(searchParams)
    mut(next)
    setSearchParams(next)
  }

  // ───── Settings landing ───────────────────────────────────────────────
  if (view !== "time-off") {
    return (
      <Page
        header={
          <PageHeader
            module={{
              id: "settings",
              name: "Settings",
              href: "/p/flexible-accrual",
            }}
            actions={[]}
          />
        }
      >
        <StandardLayout>
          <SettingsHome
            onOpenTimeOff={() =>
              update((p) => {
                p.set("view", "time-off")
              })
            }
          />
        </StandardLayout>
      </Page>
    )
  }

  // ───── Time off section ───────────────────────────────────────────────
  const rawTab = searchParams.get("tab")
  const activeTab: TimeOffTabId =
    rawTab && VALID_TIME_OFF.has(rawTab as TimeOffTabId)
      ? (rawTab as TimeOffTabId)
      : "policies"

  const policyId = searchParams.get("policy")
  const allowanceId = searchParams.get("allowance")
  const policyTab = (searchParams.get("policyTab") as "basic" | "employees") || "basic"
  const rawExploration = searchParams.get("e")
  const exploration: ExplorationId =
    rawExploration && VALID_EXPLORATIONS.has(rawExploration as ExplorationId)
      ? (rawExploration as ExplorationId)
      : "open-chat"

  // Exploration tab on the allowance detail page (defaults to Exploration 2).
  const rawExpTab = searchParams.get("exp")
  const expTab: ExpTabId =
    rawExpTab === "e1"
      ? "e1"
      : rawExpTab === "e3"
        ? "e3"
        : rawExpTab === "e4"
          ? "e4"
          : "e2"
  const setExpTab = (id: ExpTabId) =>
    update((p) => {
      p.set("exp", id)
    })

  const goSettings = () => setSearchParams(new URLSearchParams())
  const goTimeOffTab = (tab: TimeOffTabId) =>
    setSearchParams(
      new URLSearchParams({ view: "time-off", tab, ...(tab === "accrual-rules" && rawExploration ? { e: exploration } : {}) })
    )
  const goPolicy = (id: string) =>
    setSearchParams(
      new URLSearchParams({ view: "time-off", tab: "policies", policy: id })
    )
  const goAllowance = (id: string) =>
    update((p) => {
      p.set("allowance", id)
      if (!p.get("e")) p.set("e", exploration)
    })
  const setExploration = (id: ExplorationId) =>
    update((p) => {
      p.set("e", id)
    })

  const timeOffTabs = TIME_OFF_TABS.map((t) => ({
    ...t,
    onClick: () => goTimeOffTab(t.id),
  }))

  // Breadcrumb construction
  const policy = policyId ? getPolicy(policyId) : undefined
  const allowanceCtx =
    policyId && allowanceId ? getAllowance(policyId, allowanceId) : undefined

  const breadcrumbs: { id: string; label: string; onClick?: () => void }[] = [
    { id: "time-off", label: "Time off", onClick: () => goTimeOffTab("policies") },
  ]
  if (activeTab === "accrual-rules") {
    breadcrumbs.push({ id: "accrual-rules", label: "Accrual Rules" })
  } else if (policy) {
    breadcrumbs.push({
      id: "policies",
      label: "Policies",
      onClick: () => goTimeOffTab("policies"),
    })
    breadcrumbs.push({
      id: policy.id,
      label: policy.name,
      onClick: allowanceCtx ? () => goPolicy(policy.id) : undefined,
    })
    if (allowanceCtx) breadcrumbs.push({ id: allowanceCtx.allowance.id, label: allowanceCtx.allowance.name })
  }

  // Page-level chrome (PageHeader + ResourceHeader + Tabs) lives in the
  // sticky <Page header> slot so the title and tabs stay visible while the
  // user scrolls the body.
  const policyTabsConfig = [
    { id: "basic" as const, label: "Basic Information" },
    { id: "employees" as const, label: "Employees" },
  ].map((t) => ({
    ...t,
    onClick: () =>
      update((p) => {
        p.set("policyTab", t.id)
      }),
  }))

  const pageHeader = (
    <PageHeader
      module={{
        id: "settings",
        name: "Settings",
        href: "/p/flexible-accrual",
      }}
      breadcrumbs={breadcrumbs}
      actions={[]}
    />
  )

  const expTabsConfig = EXP_TABS.map((t) => ({
    ...t,
    onClick: () => setExpTab(t.id),
  }))

  let header: React.ReactNode
  if (allowanceCtx) {
    // Fixed exploration tab bar pinned at the top of the allowance page.
    header = (
      <>
        {pageHeader}
        <Tabs key={expTab} tabs={expTabsConfig} activeTabId={expTab} />
      </>
    )
  } else if (policy) {
    header = (
      <>
        {pageHeader}
        <ResourceHeader
          title={policy.name}
          description={policy.description}
          primaryAction={
            policyTab === "basic"
              ? {
                  label: "Add time off allowance",
                  icon: Plus,
                  onClick: () => {},
                }
              : undefined
          }
        />
        <Tabs key={policyTab} tabs={policyTabsConfig} activeTabId={policyTab} />
      </>
    )
  } else {
    header = (
      <>
        {pageHeader}
        <ResourceHeader
          title="Time off"
          description="Manage your company's time off policies, absence types and approvals."
          primaryAction={
            activeTab === "policies"
              ? {
                  label: "New policy",
                  icon: Plus,
                  onClick: () => {},
                }
              : undefined
          }
        />
        <Tabs key={activeTab} tabs={timeOffTabs} activeTabId={activeTab} />
      </>
    )
  }

  // ───── Drill-down: allowance detail ───────────────────────────────────
  if (allowanceCtx) {
    return (
      <Page header={header}>
        <StandardLayout>
          <AllowanceDetailView
            policy={allowanceCtx.policy}
            allowance={allowanceCtx.allowance}
            expTab={expTab}
          />
        </StandardLayout>
      </Page>
    )
  }

  // ───── Drill-down: policy detail ──────────────────────────────────────
  if (policy) {
    return (
      <Page header={header}>
        <StandardLayout>
          <PolicyDetailView
            policy={policy}
            activeTab={policyTab}
            onOpenAllowance={goAllowance}
          />
        </StandardLayout>
      </Page>
    )
  }

  // ───── Top-level tabs ─────────────────────────────────────────────────
  if (activeTab === "accrual-rules") {
    return <AccrualRulesScreen
      header={header}
      exploration={exploration}
      onSetExploration={setExploration}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      goSettings={goSettings}
    />
  }

  return (
    <Page header={header}>
      <StandardLayout>
        {activeTab === "policies" && <PoliciesTab onOpenPolicy={goPolicy} />}
        {activeTab === "absence-types" && (
          <PlaceholderTab
            icon={Filter}
            title="Absence types"
            description="HR admins set up absence types here (e.g. Holidays, Sick Leave, Doctor's Appointment)."
          />
        )}
        {activeTab === "approval-groups" && (
          <PlaceholderTab
            icon={Shield}
            title="Approval groups"
            description="Configure who approves time off requests."
          />
        )}
        {activeTab === "blocked-periods" && (
          <PlaceholderTab
            icon={Calendar}
            title="Blocked periods"
            description="Define dates when time off cannot be requested."
          />
        )}
      </StandardLayout>
    </Page>
  )
  // unused import keepers
  void SettingsIcon
  void Ai
}

// ─────────────────────────────────────────────────────────────────────────────
// Accrual Rules tab (Option B): existing Authoring / Simulate / Employee
// ─────────────────────────────────────────────────────────────────────────────

function AccrualRulesScreen({
  header,
  exploration,
  onSetExploration,
  searchParams,
  setSearchParams,
}: {
  header: React.ReactNode
  exploration: ExplorationId
  onSetExploration: (id: ExplorationId) => void
  searchParams: URLSearchParams
  setSearchParams: (p: URLSearchParams) => void
  goSettings: () => void
}) {
  const rawSubTab = searchParams.get("ruleTab")
  const activeSubTab: AccrualSubTabId =
    rawSubTab && VALID_ACCRUAL.has(rawSubTab as AccrualSubTabId)
      ? (rawSubTab as AccrualSubTabId)
      : "authoring"

  const setSubTab = (id: AccrualSubTabId) => {
    const next = new URLSearchParams(searchParams)
    next.set("ruleTab", id)
    setSearchParams(next)
  }

  const goSimulate = () => setSubTab("simulate")

  const subTabs = ACCRUAL_SUBTABS.map((t) => ({
    ...t,
    onClick: () => setSubTab(t.id),
  }))

  return (
    <Page header={header}>
      <StandardLayout>
        <div className="flex w-full flex-col gap-4">
          <Tabs key={activeSubTab} tabs={subTabs} activeTabId={activeSubTab} />
          {activeSubTab === "authoring" && (
            <AuthoringView onSimulate={goSimulate} />
          )}
          {activeSubTab === "simulate" && <SimulateView />}
          {activeSubTab === "employee" && <EmployeeView />}
        </div>
      </StandardLayout>
      <ExplorationSwitcher
        exploration={exploration}
        onChange={onSetExploration}
      />
    </Page>
  )
}
