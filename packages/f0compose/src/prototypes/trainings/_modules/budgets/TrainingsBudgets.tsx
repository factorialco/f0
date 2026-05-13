import {
  F0Alert,
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import { trainingBudgets } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"
import { trainingsTopNav } from "../../topNav"
import { BudgetModals, type BudgetAction } from "./BudgetModals"

const BudgetModalContext: { open: (a: BudgetAction) => void } = {
  open: () => {},
}

export const meta: PrototypeMeta = {
  slug: "trainings-budgets",
  title: "Trainings — Budgets",
  description:
    "Admin budget management: list of yearly training budgets per scope (company / department / team), detail view with spend breakdown, and a new-budget form.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "budgets", "spend"],
  createdAt: "2026-05-12",
}

type View = "list" | "detail" | "new"

function useView() {
  const [params, setSearch] = useSearchParams()
  const view = (params.get("view") as View | null) ?? "list"
  return { view, budgetId: params.get("budgetId"), setSearch }
}

function go(
  setSearch: ReturnType<typeof useSearchParams>[1],
  next: Record<string, string | null>
) {
  setSearch((prev) => {
    const sp = new URLSearchParams(prev)
    Object.entries(next).forEach(([k, v]) => {
      if (v === null) sp.delete(k)
      else sp.set(k, v)
    })
    return sp
  })
}

const fmtEur = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    active: "bg-f1-background-positive text-f1-foreground-positive",
    exceeded: "bg-f1-background-critical text-f1-foreground-critical",
    draft: "bg-f1-background-secondary text-f1-foreground-secondary",
    closed: "bg-f1-background-secondary text-f1-foreground-secondary",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${map[status] ?? "bg-f1-background-secondary text-f1-foreground-secondary"}`}
    >
      {status}
    </span>
  )
}

// --- LIST -------------------------------------------------------------------

function ListView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const total = trainingBudgets.reduce((a, b) => a + b.totalAmount, 0)
  const spent = trainingBudgets.reduce((a, b) => a + b.spentAmount, 0)
  const pending = trainingBudgets.reduce((a, b) => a + b.pendingAmount, 0)
  const remaining = trainingBudgets.reduce((a, b) => a + b.remainingAmount, 0)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="Budgets" variant="heading-large" as="h1" />
          <F0Text
            content="Track training spend across the organization."
            variant="body"
          />
        </div>
        <F0Button
          label="New budget"
          variant="default"
          onClick={() => go(setSearch, { view: "new" })}
        />
      </div>

      <section className="grid grid-cols-4 gap-4">
        <F0BigNumber label="Total" value={fmtEur(total)} />
        <F0BigNumber label="Spent" value={fmtEur(spent)} />
        <F0BigNumber label="Pending" value={fmtEur(pending)} />
        <F0BigNumber label="Remaining" value={fmtEur(remaining)} />
      </section>

      <F0Card title="Budgets">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-x-4 gap-y-2 p-4">
          <F0Text content="Name" variant="small" />
          <F0Text content="Scope" variant="small" />
          <F0Text content="Total" variant="small" />
          <F0Text content="Spent" variant="small" />
          <F0Text content="Remaining" variant="small" />
          <F0Text content="" variant="small" />
          {trainingBudgets.map((b) => {
            const pct = Math.min(
              100,
              Math.round((b.spentAmount / b.totalAmount) * 100)
            )
            return (
              <div
                key={b.id}
                className="col-span-6 grid grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] items-center gap-4 border-t border-f1-border-secondary py-3"
              >
                <div className="flex flex-col">
                  <F0Text content={b.name} variant="label" />
                  <F0Text content={`${b.year} • Owner: ${b.ownerEmployeeName}`} variant="small" />
                </div>
                <F0Text
                  content={`${b.scope} · ${b.scopeName}`}
                  variant="small"
                />
                <F0Text content={fmtEur(b.totalAmount)} variant="small" />
                <div className="flex flex-col gap-1">
                  <F0Text content={fmtEur(b.spentAmount)} variant="small" />
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-f1-background-secondary">
                    <div
                      className={`h-full rounded-full ${b.status === "exceeded" ? "bg-f1-background-critical" : "bg-f1-background-info"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <F0Text content={fmtEur(b.remainingAmount)} variant="small" />
                <div className="flex items-center gap-2">
                  <StatusChip status={b.status} />
                  <F0Button
                    label="Open"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      go(setSearch, { view: "detail", budgetId: b.id })
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- DETAIL -----------------------------------------------------------------

function DetailView({
  budgetId,
  setSearch,
}: {
  budgetId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const b = trainingBudgets.find((x) => x.id === budgetId)
  if (!b)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Budget not found"
          description="Pick one from the list."
        />
      </F0Box>
    )
  const pct = Math.min(100, Math.round((b.spentAmount / b.totalAmount) * 100))

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "list", budgetId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to budgets
      </button>

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <F0Heading content={b.name} variant="heading-large" as="h1" />
          <F0Text
            content={`${b.year} • ${b.scope} · ${b.scopeName} • Owner: ${b.ownerEmployeeName}`}
            variant="small"
          />
        </div>
        <div className="flex items-center gap-2">
          <StatusChip status={b.status} />
          <F0Button
            label="Edit"
            variant="ghost"
            onClick={() => BudgetModalContext.open({ kind: "edit", name: b.name })}
          />
          <F0Button
            label="Allocate"
            variant="outline"
            onClick={() => BudgetModalContext.open({ kind: "allocate", name: b.name })}
          />
          <F0Button
            label="Archive"
            variant="outline"
            onClick={() => BudgetModalContext.open({ kind: "archive", name: b.name })}
          />
          <F0Button
            label="Delete"
            variant="critical"
            onClick={() => BudgetModalContext.open({ kind: "delete", name: b.name })}
          />
        </div>
      </div>

      <section className="grid grid-cols-4 gap-4">
        <F0BigNumber label="Total" value={fmtEur(b.totalAmount)} />
        <F0BigNumber label="Spent" value={fmtEur(b.spentAmount)} />
        <F0BigNumber label="Pending" value={fmtEur(b.pendingAmount)} />
        <F0BigNumber label="Remaining" value={fmtEur(b.remainingAmount)} />
      </section>

      <F0Card title="Spend">
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-baseline justify-between">
            <F0Text content="Spent vs total" variant="small" />
            <F0Text content={`${pct}%`} variant="small" />
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-f1-background-secondary">
            <div
              className={`h-full rounded-full ${b.status === "exceeded" ? "bg-f1-background-critical" : "bg-f1-background-info"}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </F0Card>

      <F0Card title="Recent allocations">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {[
            { name: "Management Fundamentals", amount: 4200 },
            { name: "GDPR Compliance", amount: 1800 },
            { name: "Resolución de conflictos", amount: 2100 },
            { name: "Public Speaking", amount: 1300 },
          ].map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between p-4"
            >
              <F0Text content={a.name} variant="label" />
              <F0Text content={fmtEur(a.amount)} variant="small" />
            </div>
          ))}
        </div>
      </F0Card>

      <F0Card title="Pending expense approvals">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {[
            { name: "Leadership Bootcamp", amount: 3200, requestedBy: "Maria Garcia" },
            { name: "AWS Solutions Architect", amount: 1450, requestedBy: "Luis Torres" },
            { name: "TypeScript Advanced", amount: 600, requestedBy: "Sara Martinez" },
          ].map((exp) => (
            <div
              key={exp.name}
              className="flex items-center justify-between gap-3 p-4"
            >
              <div className="flex flex-col">
                <F0Text content={exp.name} variant="label" />
                <F0Text
                  content={`Requested by ${exp.requestedBy}`}
                  variant="small"
                />
              </div>
              <div className="flex items-center gap-3">
                <F0Text content={fmtEur(exp.amount)} variant="small" />
                <F0Button
                  label="Approve"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    BudgetModalContext.open({
                      kind: "approve-expense",
                      trainingName: exp.name,
                      amount: exp.amount,
                    })
                  }
                />
                <F0Button
                  label="Reject"
                  variant="critical"
                  size="sm"
                  onClick={() =>
                    BudgetModalContext.open({
                      kind: "reject-expense",
                      trainingName: exp.name,
                      amount: exp.amount,
                    })
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- NEW --------------------------------------------------------------------

function NewBudgetView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const [name, setName] = useState("")
  const [scope, setScope] = useState<"company" | "department" | "team">("company")
  const [total, setTotal] = useState<number | null>(10000)
  const [year, setYear] = useState<number | null>(new Date().getFullYear())

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "list" })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Cancel
      </button>
      <div className="flex flex-col gap-1">
        <F0Heading content="New budget" variant="heading-large" as="h1" />
        <F0Text content="Define a yearly budget for training spend." variant="body" />
      </div>

      <F0Card title="Details">
        <div className="grid grid-cols-2 gap-4 p-4">
          <Input
            label="Name"
            value={name}
            onChange={(v) => setName(v ?? "")}
            placeholder="e.g. Engineering 2026"
          />
          <NumberInput
            label="Year"
            value={year}
            onChange={(v) => setYear(v)}
            locale="en-US"
          />
          <F0Select<"company" | "department" | "team">
            label="Scope"
            value={scope}
            onChange={(v: "company" | "department" | "team") => setScope(v)}
            options={[
              { value: "company", label: "Company" },
              { value: "department", label: "Department" },
              { value: "team", label: "Team" },
            ]}
          />
          <NumberInput
            label="Total amount (€)"
            value={total}
            onChange={(v) => setTotal(v)}
            locale="en-US"
          />
        </div>
      </F0Card>

      <div className="flex justify-end gap-2">
        <F0Button
          label="Cancel"
          variant="ghost"
          onClick={() => go(setSearch, { view: "list" })}
        />
        <F0Button
          label="Create budget"
          variant="default"
          disabled={!name}
          onClick={() => go(setSearch, { view: "list" })}
        />
      </div>
    </F0Box>
  )
}

// --- ROOT -------------------------------------------------------------------

export default function TrainingsBudgets() {
  const navigate = useNavigate()
  const { view, budgetId, setSearch } = useView()
  const [action, setAction] = useState<BudgetAction>(null)
  BudgetModalContext.open = (a: BudgetAction) => setAction(a)
  return (
    <>
    <Page
      header={
        <>
        <PageHeader
          module={{
            id: "company_trainings",
            name: "Trainings",
            href: "/p/trainings",
          }}
          breadcrumbs={
            view === "list"
              ? [
                  { id: "list", label: "Trainings", href: "/p/trainings" },
                  { id: "budgets", label: "Budgets" },
                ]
              : [
                  { id: "list", label: "Trainings", href: "/p/trainings" },
                  {
                    id: "budgets",
                    label: "Budgets",
                    href: "/p/trainings-budgets",
                  },
                  {
                    id: "current",
                    label: view === "new" ? "New budget" : "Budget detail",
                  },
                ]
          }
        />
        {view === "list" && (
          <Tabs
            tabs={trainingsTopNav.map((t) => ({
              id: t.id,
              label: t.label,
              onClick: () => navigate(t.href),
            }))}
            activeTabId="budgets"
          />
        )}
        </>
      }
    >
      {view === "list" && <ListView setSearch={setSearch} />}
      {view === "detail" && (
        <DetailView budgetId={budgetId} setSearch={setSearch} />
      )}
      {view === "new" && <NewBudgetView setSearch={setSearch} />}
    </Page>
    <BudgetModals action={action} onClose={() => setAction(null)} />
    </>
  )
}
