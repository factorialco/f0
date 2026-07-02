import { F0Dialog, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Calendar, Filter, Plus, Shield } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { SettingsHome } from "./settings/SettingsHome"
import {
  AllowanceDetailView,
  type ExpTabId,
} from "./time-off/AllowanceDetailView"
import {
  type E5AllowanceData,
  type E5AllowanceType,
} from "./time-off/E5AllowanceCreationModal"
import { PlaceholderTab } from "./time-off/PlaceholderTab"
import { PoliciesTab } from "./time-off/PoliciesTab"
import { PolicyDetailView } from "./time-off/PolicyDetailView"
import { type Allowance, getAllowance, getPolicy, policies } from "./time-off/policiesData"

export const meta: PrototypeMeta = {
  slug: "flexible-accrual",
  title: "Flexible accrual rules",
  description:
    "Functional Settings prototype: Time off policy → allowance flow with an AI-driven, plain-language allowance editor (Exploration 4).",
  category: "Settings",
  module: "time-off",
  audience: ["admin", "employee"],
  tags: ["settings", "time-off", "accrual", "ai", "policy", "leave"],
  createdAt: "2026-05-25",
  author: "f0compose",
}

const TIME_OFF_TABS = [
  { id: "policies", label: "Time off policies" },
  { id: "absence-types", label: "Absence types" },
  { id: "approval-groups", label: "Approval groups" },
  { id: "blocked-periods", label: "Blocked periods" },
] as const

type TimeOffTabId = (typeof TIME_OFF_TABS)[number]["id"]

// Fixed exploration tabs on the allowance detail page. Switching swaps the
// whole accrual-rules experience.
const EXP_TABS = [
  { id: "e4", label: "Exploration 4" },
  { id: "e5", label: "Exploration 5" },
] as const

const VALID_TIME_OFF = new Set(TIME_OFF_TABS.map((t) => t.id))

export default function FlexibleAccrual() {
  const [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get("view")

  // Extra allowances created through E5 modal, keyed by policyId then allowanceId.
  const [extraAllowances, setExtraAllowances] = useState<
    Record<string, Record<string, Allowance>>
  >({})
  // E5AllowanceData keyed by allowanceId, for type/absenceTypes on the detail page.
  const [extraE5Data, setExtraE5Data] = useState<Record<string, E5AllowanceData>>({})
  const [crossPolicySaveOpen, setCrossPolicySaveOpen] = useState(false)
  // Policies selected for cross-policy propagation (toggle set).
  const [propagatePolicies, setPropagatePolicies] = useState<Set<string>>(new Set())

  const resolveAllowance = (pId: string, aId: string) => {
    const extra = extraAllowances[pId]?.[aId]
    if (extra) return { policy: getPolicy(pId)!, allowance: extra }
    return getAllowance(pId, aId)
  }

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

  // Exploration tab on the allowance detail page (defaults to Exploration 5).
  const rawExpTab = searchParams.get("exp")
  const expTab: ExpTabId = rawExpTab === "e4" ? "e4" : "e5"
  const setExpTab = (id: ExpTabId) =>
    update((p) => {
      p.set("exp", id)
    })

  const goTimeOffTab = (tab: TimeOffTabId) =>
    setSearchParams(new URLSearchParams({ view: "time-off", tab }))
  const goPolicy = (id: string) =>
    setSearchParams(
      new URLSearchParams({ view: "time-off", tab: "policies", policy: id })
    )
  const goAllowance = (id: string) =>
    update((p) => {
      p.set("allowance", id)
    })

  const timeOffTabs = TIME_OFF_TABS.map((t) => ({
    ...t,
    onClick: () => goTimeOffTab(t.id),
  }))

  // Breadcrumb construction
  const policy = policyId ? getPolicy(policyId) : undefined
  const allowanceCtx =
    policyId && allowanceId ? resolveAllowance(policyId, allowanceId) : undefined

  const breadcrumbs: { id: string; label: string; onClick?: () => void }[] = [
    { id: "time-off", label: "Time off", onClick: () => goTimeOffTab("policies") },
  ]
  if (policy) {
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
    if (allowanceCtx)
      breadcrumbs.push({ id: allowanceCtx.allowance.id, label: allowanceCtx.allowance.name })
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

  const E5_TYPE_LABELS: Record<E5AllowanceType, string> = {
    fixed: "Fixed balance",
    overtime: "Overtime",
    "time-worked": "Based on time worked",
  }

  let header: React.ReactNode
  if (allowanceCtx) {
    const currentE5Data = allowanceId ? extraE5Data[allowanceId] : undefined
    // When on E5, show ResourceHeader with allowance name, type and Save.
    // Other explorations keep the plain tab bar only.
    header = (
      <>
        {pageHeader}
        {expTab === "e5" && (
          <ResourceHeader
            title={allowanceCtx.allowance.name}
            metadata={
              currentE5Data
                ? [
                    {
                      label: "Type",
                      value: {
                        type: "text" as const,
                        content: E5_TYPE_LABELS[currentE5Data.type],
                      },
                    },
                  ]
                : undefined
            }
          />
        )}
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
    const currentE5Data = allowanceId ? extraE5Data[allowanceId] : undefined
    return (
      <>
        <Page header={header}>
          <StandardLayout>
            <AllowanceDetailView
              policy={allowanceCtx.policy}
              allowance={allowanceCtx.allowance}
              expTab={expTab}
              e5Data={currentE5Data}
            />
          </StandardLayout>
        </Page>
        <CrossPolicySaveDialog
          isOpen={crossPolicySaveOpen}
          allowanceName={allowanceCtx.allowance.name}
          otherPolicies={policies.filter((p) => p.id !== policyId)}
          selected={propagatePolicies}
          onToggle={(id) =>
            setPropagatePolicies((prev) => {
              const next = new Set(prev)
              next.has(id) ? next.delete(id) : next.add(id)
              return next
            })
          }
          onConfirm={() => setCrossPolicySaveOpen(false)}
          onClose={() => setCrossPolicySaveOpen(false)}
        />
      </>
    )
  }

  // ───── Drill-down: policy detail ──────────────────────────────────────
  if (policy) {
    const handleE5Complete = (data: E5AllowanceData) => {
      const newId = `new-${Date.now()}`
      const newAllowance: Allowance = {
        id: newId,
        name: data.name,
        amount: 0,
        unit: "working days",
        accrual: "flat",
      }
      setExtraAllowances((prev) => ({
        ...prev,
        [policy.id]: { ...(prev[policy.id] ?? {}), [newId]: newAllowance },
      }))
      setExtraE5Data((prev) => ({ ...prev, [newId]: data }))
      // Navigate to the new allowance in E5 mode.
      const next = new URLSearchParams(searchParams)
      next.set("allowance", newId)
      next.set("exp", "e5")
      setSearchParams(next)
    }

    return (
      <Page header={header}>
        <StandardLayout>
          <PolicyDetailView
            policy={policy}
            activeTab={policyTab}
            onOpenAllowance={goAllowance}
            onAddAllowance={handleE5Complete}
          />
        </StandardLayout>
      </Page>
    )
  }

  // ───── Top-level tabs ─────────────────────────────────────────────────
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
}

// ── Cross-policy propagation dialog ──────────────────────────────────────────

type Policy = { id: string; name: string; employees: number }

function CrossPolicySaveDialog({
  isOpen,
  allowanceName,
  otherPolicies,
  selected,
  onToggle,
  onConfirm,
  onClose,
}: {
  isOpen: boolean
  allowanceName: string
  otherPolicies: Policy[]
  selected: Set<string>
  onToggle: (id: string) => void
  onConfirm: () => void
  onClose: () => void
}) {
  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Apply to other policies?"
      description={`"${allowanceName}" has been saved. Do you want to apply the same allowance configuration to other policies?`}
      width="sm"
      primaryAction={{
        label: selected.size > 0 ? `Apply to ${selected.size} ${selected.size === 1 ? "policy" : "policies"}` : "Skip",
        onClick: onConfirm,
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <div className="flex flex-col gap-0.5 pb-2">
        {otherPolicies.map((p) => {
          const isSelected = selected.has(p.id)
          return (
            <div
              key={p.id}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={0}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-f1-border-hover"
              onClick={() => onToggle(p.id)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") { e.preventDefault(); onToggle(p.id) }
              }}
            >
              <div
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded transition-colors ${
                  isSelected
                    ? "bg-f1-background-selected-bold"
                    : "border border-solid border-f1-border bg-f1-background"
                }`}
              >
                {isSelected && (
                  <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-none stroke-f1-background stroke-2">
                    <polyline points="1 4 3.5 6.5 9 1" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-f1-foreground">{p.name}</span>
                <span className="text-xs text-f1-foreground-secondary">{p.employees} employees</span>
              </div>
            </div>
          )
        })}
      </div>
    </F0Dialog>
  )
}
