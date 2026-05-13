import {
  F0Alert,
  F0Box,
  F0Button,
  F0Dialog,
  F0Heading,
  F0Text,
  F0WizardForm,
  f0FormField,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import type {
  F0FormSubmitResult,
  F0WizardFormStep,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  OneDataCollection,
  Page,
  PageHeader,
  Switch,
  Tabs,
  Textarea,
  Widget,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  ArrowRight,
  ChartLine,
  Delete,
  DollarBill,
  ExternalLink,
  InProgressTask,
  Pencil,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { z } from "zod"

import {
  movementsForBudget,
  trainingBudgets,
  trainings,
} from "@/fixtures"
import type {
  Training,
  TrainingBudget,
  TrainingBudgetMovement,
} from "@/fixtures"
import type { PrototypeMeta } from "../../../types"
import { trainingsTopNav } from "../../topNav"

export const meta: PrototypeMeta = {
  slug: "trainings-budgets",
  title: "Trainings — Budgets",
  description:
    "Admin budget management: yearly training budgets, detail view with amount widgets, training-group breakdown with sidepanel, edit/archive dialog, and a 3-step new-budget wizard (Basic information / Amount / Allocation).",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "budgets", "spend"],
  createdAt: "2026-05-12",
}

// ── Status helpers ──────────────────────────────────────────────────────────

type View = "list" | "detail" | "new"
type BudgetStatusKey = "within_budget" | "budget_risk" | "over_budget"
type BudgetStatusColor = "viridian" | "yellow" | "radical"

const STATUS_LABEL: Record<BudgetStatusKey, string> = {
  within_budget: "Within budget",
  budget_risk: "Budget at risk",
  over_budget: "Over budget",
}

const GROUP_STATUS_LABEL: Record<TrainingBudgetMovement["groupStatus"], string> =
  {
    planned: "Planned",
    ongoing: "Ongoing",
    completed: "Completed",
  }

const GROUP_STATUS_COLOR: Record<
  TrainingBudgetMovement["groupStatus"],
  "yellow" | "viridian" | "indigo"
> = {
  planned: "indigo",
  ongoing: "yellow",
  completed: "viridian",
}

const PAYMENT_STATUS_LABEL: Record<
  TrainingBudgetMovement["paymentStatus"],
  string
> = {
  pending: "Pending",
  spent: "Spent",
}

const PAYMENT_STATUS_COLOR: Record<
  TrainingBudgetMovement["paymentStatus"],
  "yellow" | "viridian"
> = {
  pending: "yellow",
  spent: "viridian",
}

function calculateBudgetStatus(
  used: number,
  total: number
): { status: BudgetStatusKey; color: BudgetStatusColor } {
  const pct = total > 0 ? (used / total) * 100 : 0
  if (pct > 100) return { status: "over_budget", color: "radical" }
  if (pct >= 80) return { status: "budget_risk", color: "yellow" }
  return { status: "within_budget", color: "viridian" }
}

const fmtEur = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

const fmtDate = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "-"

// ── URL routing ─────────────────────────────────────────────────────────────

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

// ── Allocation helpers ──────────────────────────────────────────────────────
// Mirrors upstream `calculateAllocationCents`: sums direct + indirect + salary
// costs across all selected training classes.

function classTotalCost(
  training: Training,
  classId: string
): { direct: number; indirect: number; salary: number; total: number } {
  const k = training.classes.find((c) => c.id === classId)
  if (!k) return { direct: 0, indirect: 0, salary: 0, total: 0 }
  const direct = Number(k.cost ?? 0) || 0
  const indirect = Number(k.indirectCost ?? 0) || 0
  const salary = Number(k.salaryCost ?? 0) || 0
  return { direct, indirect, salary, total: direct + indirect + salary }
}

function calculateAllocated(selectedTrainingClassIds: string[]): number {
  let total = 0
  for (const id of selectedTrainingClassIds) {
    const training = trainings.find((t) =>
      t.classes.some((c) => c.id === id)
    )
    if (!training) continue
    total += classTotalCost(training, id).total
  }
  return total
}

// ── LIST ────────────────────────────────────────────────────────────────────

function ListView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const source = useDataCollectionSource<TrainingBudget>(
    {
      search: { enabled: true, sync: true },
      presets: [
        {
          label: "Active",
          filter: { status: ["active", "exceeded", "draft"] },
        },
        { label: "Archived", filter: { status: ["closed"] } },
      ],
      filters: {
        status: {
          label: "Status",
          type: "in",
          options: {
            options: [
              { label: "Active", value: "active" },
              { label: "Exceeded", value: "exceeded" },
              { label: "Draft", value: "draft" },
              { label: "Archived", value: "closed" },
            ],
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 30,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []

          let filtered = trainingBudgets.filter((b) =>
            term === "" ? true : b.name.toLowerCase().includes(term)
          )
          if (statusFilter.length > 0) {
            filtered = filtered.filter((b) => statusFilter.includes(b.status))
          } else {
            filtered = filtered.filter((b) => b.status !== "closed")
          }

          const perPage = pagination?.perPage ?? 30
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = filtered.slice(start, start + perPage)
          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "Add budget",
        icon: Add,
        onClick: () => go(setSearch, { view: "new" }),
      }),
      itemOnClick: (item) => () =>
        go(setSearch, { view: "detail", budgetId: item.id }),
    },
    []
  )

  return (
    <OneDataCollection
      id="trainings/budgets/v1"
      storage={{ features: ["filters", "sortings", "search"] }}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Name",
                id: "name",
                render: (item) => ({ type: "text", value: item.name }),
              },
              {
                label: "Status",
                id: "status",
                render: (item) => {
                  const { status, color } = calculateBudgetStatus(
                    item.spentAmount + item.pendingAmount,
                    item.totalAmount
                  )
                  return {
                    type: "dotTag",
                    value: { color, label: STATUS_LABEL[status] },
                  }
                },
              },
              {
                label: "Training total budget",
                id: "totalBudget",
                render: (item) => ({
                  type: "text",
                  value: fmtEur(item.totalAmount),
                }),
              },
              {
                label: "Available budget",
                id: "availableBudget",
                render: (item) => ({
                  type: "text",
                  value: fmtEur(item.remainingAmount),
                }),
              },
            ],
          },
        },
        {
          type: "card",
          options: {
            title: (item) => item.name,
            cardProperties: [
              {
                label: "Status",
                icon: ChartLine,
                render: (item) => {
                  const { status, color } = calculateBudgetStatus(
                    item.spentAmount + item.pendingAmount,
                    item.totalAmount
                  )
                  return {
                    type: "dotTag",
                    value: { color, label: STATUS_LABEL[status] },
                  }
                },
              },
              {
                label: "Total budget",
                icon: DollarBill,
                render: (item) => ({
                  type: "text",
                  value: fmtEur(item.totalAmount),
                }),
              },
              {
                label: "Progress",
                icon: InProgressTask,
                render: (item) => {
                  const used = item.spentAmount + item.pendingAmount
                  const pct =
                    item.totalAmount > 0 ? (used / item.totalAmount) * 100 : 0
                  return {
                    type: "progressBar",
                    value: {
                      value: Math.min(pct, 100),
                      max: 100,
                      label: `${Math.round(pct)}% allocated`,
                    },
                  }
                },
              },
            ],
          },
        },
      ]}
    />
  )
}

// ── DETAIL ──────────────────────────────────────────────────────────────────

function AmountWidget({
  label,
  value,
  emphasize,
}: {
  label: string
  value: string
  emphasize?: "negative" | "positive"
}) {
  const colorClass =
    emphasize === "negative"
      ? "text-f1-foreground-critical"
      : emphasize === "positive"
        ? "text-f1-foreground-positive"
        : "text-f1-foreground"
  return (
    <Widget>
      <div className="flex flex-col gap-2 p-1">
        <F0Text content={label} variant="small" />
        <span className={`text-2xl font-semibold ${colorClass}`}>{value}</span>
      </div>
    </Widget>
  )
}

function EditBudgetDialog({
  budget,
  onClose,
}: {
  budget: TrainingBudget
  onClose: () => void
}) {
  // Local-state form — full F0Form integration would need useF0Form + a parent
  // <F0Form>; we use plain inputs inside an F0Dialog for sandbox fidelity.
  const [name, setName] = useState(budget.name)
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState<number | null>(budget.totalAmount)
  const [archived, setArchived] = useState(budget.status === "closed")

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="center"
      width="md"
      title="Edit budget"
      description="Update the budget's basic information, amount, or archive status."
      primaryAction={{
        label: "Save",
        onClick: () => {
          // sandbox: persist locally so the UI reflects the change immediately
          budget.name = name || budget.name
          if (typeof amount === "number" && amount > 0) {
            budget.totalAmount = amount
            budget.remainingAmount = Math.max(
              0,
              amount - (budget.spentAmount + budget.pendingAmount)
            )
          }
          budget.status = archived ? "closed" : "active"
          onClose()
        },
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Title"
          value={name}
          onChange={(v) => setName(v ?? "")}
          disabled={archived}
        />
        <Textarea
          label="Description"
          value={description}
          onChange={(v) => setDescription(v ?? "")}
          rows={3}
          disabled={archived}
        />
        <NumberInput
          label="Amount (€)"
          value={amount}
          onChange={(v) => setAmount(v)}
          locale="en-US"
          disabled={archived}
        />
        <div className="flex items-center justify-between rounded-md border border-f1-border bg-f1-background-secondary p-3">
          <div className="flex flex-col gap-0.5">
            <F0Text
              variant="label"
              content={archived ? "Unarchive budget" : "Archive budget"}
            />
            <F0Text
              variant="small"
              content={
                archived
                  ? "Reactivate this budget so new training groups can be allocated to it."
                  : "Archived budgets stop tracking new training spend. History is preserved."
              }
            />
          </div>
          <Switch checked={archived} onCheckedChange={setArchived} />
        </div>
      </div>
    </F0Dialog>
  )
}

function AddTrainingGroupDialog({
  budget,
  onClose,
  onAdded,
}: {
  budget: TrainingBudget
  onClose: () => void
  onAdded: (movement: TrainingBudgetMovement) => void
}) {
  const [trainingId, setTrainingId] = useState<string>(trainings[0]?.id ?? "")
  const training = trainings.find((t) => t.id === trainingId) ?? trainings[0]
  const firstClass = training?.classes[0]
  const [classId, setClassId] = useState<string>(firstClass?.id ?? "")

  const klass = training?.classes.find((c) => c.id === classId)
  const cost = training && klass ? classTotalCost(training, klass.id) : null

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="center"
      width="md"
      title="Add training group"
      description="Add a training group so its costs are deducted from this budget."
      primaryAction={{
        label: "Add",
        disabled: !training || !klass,
        onClick: () => {
          if (!training || !klass || !cost) return
          const mov: TrainingBudgetMovement = {
            id: `mov-${Date.now()}`,
            budgetId: budget.id,
            trainingId: training.id,
            trainingName: training.name,
            groupId: klass.id,
            groupName: klass.name,
            groupStatus: "planned",
            startDate: klass.startDate,
            endDate: klass.endDate,
            amountCents: Math.round(cost.total * 100),
            currency: budget.currency,
            trainingProvider:
              training.type === "external"
                ? (training.externalProvider ?? "External")
                : "Internal",
            trainingTeamId: "team-eng",
            trainingTeamName: "Engineering",
            paymentStatus: "pending",
            participantsCount: klass.participantCount,
            directCost: cost.direct,
            indirectCost: cost.indirect,
            salaryCost: cost.salary,
          }
          onAdded(mov)
          onClose()
        },
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <F0Text variant="label" content="Training" />
          <select
            value={trainingId}
            onChange={(e) => {
              setTrainingId(e.target.value)
              const t = trainings.find((x) => x.id === e.target.value)
              setClassId(t?.classes[0]?.id ?? "")
            }}
            className="rounded-md border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground"
          >
            {trainings.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <F0Text variant="label" content="Training group" />
          <select
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            className="rounded-md border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground"
            disabled={!training || training.classes.length === 0}
          >
            {(training?.classes ?? []).map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {cost && (
          <div className="flex flex-col gap-1 rounded-md border border-f1-border bg-f1-background-secondary p-3">
            <F0Text variant="label" content="Cost breakdown" />
            <div className="flex justify-between">
              <F0Text content="Direct cost" variant="small" />
              <F0Text content={fmtEur(cost.direct)} variant="small" />
            </div>
            <div className="flex justify-between">
              <F0Text content="Indirect cost" variant="small" />
              <F0Text content={fmtEur(cost.indirect)} variant="small" />
            </div>
            <div className="flex justify-between">
              <F0Text content="Salary cost" variant="small" />
              <F0Text content={fmtEur(cost.salary)} variant="small" />
            </div>
            <div className="flex justify-between border-t border-f1-border pt-2">
              <F0Text content="Total" variant="label" />
              <F0Text content={fmtEur(cost.total)} variant="label" />
            </div>
          </div>
        )}
      </div>
    </F0Dialog>
  )
}

function DetailView({
  budgetId,
  setSearch,
}: {
  budgetId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const navigate = useNavigate()
  const b = trainingBudgets.find((x) => x.id === budgetId)
  const [removeTarget, setRemoveTarget] =
    useState<TrainingBudgetMovement | null>(null)
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false)
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [selectedMovement, setSelectedMovement] =
    useState<TrainingBudgetMovement | null>(null)
  const [extraMovements, setExtraMovements] = useState<
    TrainingBudgetMovement[]
  >([])
  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set())

  const movements = useMemo<TrainingBudgetMovement[]>(() => {
    if (!b) return []
    const base = movementsForBudget(b.id)
    return [...base, ...extraMovements].filter((m) => !removedIds.has(m.id))
  }, [b, extraMovements, removedIds])

  const goToTrainingGroup = (m: TrainingBudgetMovement) => {
    navigate(`/p/trainings?training=${m.trainingId}&dtab=classes`)
  }

  const source = useDataCollectionSource<TrainingBudgetMovement>(
    {
      search: { enabled: true, sync: true },
      presets: [
        { label: "Pending", filter: { paymentStatus: ["pending"] } },
        { label: "Spent", filter: { paymentStatus: ["spent"] } },
      ],
      filters: {
        groupStatus: {
          label: "Group status",
          type: "in",
          options: {
            options: [
              { label: "Planned", value: "planned" },
              { label: "Ongoing", value: "ongoing" },
              { label: "Completed", value: "completed" },
            ],
          },
        },
        trainingProvider: {
          label: "Provider",
          type: "in",
          options: {
            options: Array.from(
              new Set(movements.map((m) => m.trainingProvider))
            ).map((p) => ({ label: p, value: p })),
          },
        },
        paymentStatus: {
          label: "Payment status",
          type: "in",
          options: {
            options: [
              { label: "Pending", value: "pending" },
              { label: "Spent", value: "spent" },
            ],
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 50,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const groupStatus = Array.isArray(filters?.groupStatus)
            ? (filters.groupStatus as string[])
            : []
          const provider = Array.isArray(filters?.trainingProvider)
            ? (filters.trainingProvider as string[])
            : []
          const paymentStatus = Array.isArray(filters?.paymentStatus)
            ? (filters.paymentStatus as string[])
            : []

          let filtered = movements.filter((m) => {
            if (
              term !== "" &&
              !m.groupName.toLowerCase().includes(term) &&
              !m.trainingName.toLowerCase().includes(term)
            )
              return false
            if (groupStatus.length > 0 && !groupStatus.includes(m.groupStatus))
              return false
            if (provider.length > 0 && !provider.includes(m.trainingProvider))
              return false
            if (
              paymentStatus.length > 0 &&
              !paymentStatus.includes(m.paymentStatus)
            )
              return false
            return true
          })

          filtered = filtered.slice().sort((a, x) => {
            const cmp = a.trainingName.localeCompare(x.trainingName)
            if (cmp !== 0) return cmp
            return (a.startDate ?? "").localeCompare(x.startDate ?? "")
          })

          const perPage = pagination?.perPage ?? 50
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = filtered.slice(start, start + perPage)
          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => {
        if (!b) return undefined
        const isArchived = b.status === "closed"
        return [
          {
            label: "Export budget",
            icon: Upload,
            onClick: () => setIsExportOpen(true),
          },
          {
            label: "Add training group",
            icon: Add,
            disabled: isArchived,
            onClick: () => setIsAddGroupOpen(true),
          },
        ]
      },
      itemOnClick: (item) => () => setSelectedMovement(item),
      itemActions: (item: TrainingBudgetMovement) => [
        {
          label: "Go to Training group",
          icon: ExternalLink,
          onClick: () => goToTrainingGroup(item),
        },
        {
          label: "Remove from budget",
          icon: Delete,
          critical: true as const,
          onClick: () => setRemoveTarget(item),
        },
      ],
    },
    [movements, b]
  )

  if (!b) {
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Budget not found"
          description="Pick one from the list."
        />
      </F0Box>
    )
  }

  // Recompute amounts from current movement set so widgets stay in sync.
  const total = b.totalAmount
  const spent = movements
    .filter((m) => m.paymentStatus === "spent")
    .reduce((s, m) => s + m.amountCents / 100, 0)
  const pending = movements
    .filter((m) => m.paymentStatus === "pending")
    .reduce((s, m) => s + m.amountCents / 100, 0)
  const committed = spent + pending
  const available = total - committed

  const { status } = calculateBudgetStatus(committed, total)
  const isOver = status === "over_budget" && total > 0
  const isAtRisk = status === "budget_risk"
  const exceedAmount = isOver ? Math.abs(available) : 0
  const exceedPct = total > 0 ? (committed * 100) / total : 0
  const isArchived = b.status === "closed"

  return (
    <F0Box display="flex" flexDirection="column" gap="lg" padding="xl">
      <button
        type="button"
        onClick={() => go(setSearch, { view: "list", budgetId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to budgets
      </button>

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <F0Heading content={b.name} variant="heading-large" as="h1" />
          <F0Text
            content={`${b.year} • ${b.scope === "company" ? "Company" : b.scope === "department" ? "Department" : "Team"} · ${b.scopeName} • Owner: ${b.ownerEmployeeName}`}
            variant="small"
          />
        </div>
        <F0Button
          label="Edit budget"
          icon={Pencil}
          variant="outline"
          onClick={() => setIsEditOpen(true)}
        />
      </div>

      {isArchived && (
        <F0Alert
          variant="warning"
          title="Archived budget"
          description="This budget is in read-only mode. Adding or removing groups is disabled unless the budget is reactivated."
        />
      )}

      {isOver && (
        <F0Alert
          variant="critical"
          title="Over budget"
          description={`Budget exceeded by ${fmtEur(exceedAmount)} (${exceedPct.toFixed(2)}%).`}
        />
      )}

      {isAtRisk && !isOver && (
        <F0Alert
          variant="warning"
          title="Budget at risk"
          description="Budget is at risk. Less than 10% available."
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AmountWidget label="Available" value={fmtEur(available)}
          emphasize={available < 0 ? "negative" : "positive"} />
        <AmountWidget label="Committed" value={fmtEur(committed)} />
        <AmountWidget label="Spent" value={fmtEur(spent)} />
        <AmountWidget label="Total" value={fmtEur(total)} />
      </div>

      <OneDataCollection
        id="trainings/budgets/detail/v1"
        storage={{ features: ["filters", "sortings", "search"] }}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Training group",
                  id: "groupName",
                  render: (item) => ({
                    type: "text",
                    value: item.groupName,
                  }),
                },
                {
                  label: "Group status",
                  id: "groupStatus",
                  render: (item) => ({
                    type: "dotTag",
                    value: {
                      color: GROUP_STATUS_COLOR[item.groupStatus],
                      label: GROUP_STATUS_LABEL[item.groupStatus],
                    },
                  }),
                },
                {
                  label: "Start date",
                  id: "startDate",
                  render: (item) => ({
                    type: "text",
                    value: fmtDate(item.startDate),
                  }),
                },
                {
                  label: "End date",
                  id: "endDate",
                  render: (item) => ({
                    type: "text",
                    value: fmtDate(item.endDate),
                  }),
                },
                {
                  label: "Cost",
                  id: "amount",
                  render: (item) => ({
                    type: "text",
                    value: fmtEur(item.amountCents / 100),
                  }),
                },
                {
                  label: "Provider",
                  id: "provider",
                  render: (item) => ({
                    type: "text",
                    value: item.trainingProvider,
                  }),
                },
                {
                  label: "Payment status",
                  id: "paymentStatus",
                  render: (item) => ({
                    type: "dotTag",
                    value: {
                      color: PAYMENT_STATUS_COLOR[item.paymentStatus],
                      label: PAYMENT_STATUS_LABEL[item.paymentStatus],
                    },
                  }),
                },
                {
                  label: "Participants",
                  id: "participants",
                  render: (item) => ({
                    type: "text",
                    value: String(item.participantsCount),
                  }),
                },
              ],
            },
          },
        ]}
      />

      {/* ── Modals ── */}

      {isEditOpen && (
        <EditBudgetDialog budget={b} onClose={() => setIsEditOpen(false)} />
      )}

      {isAddGroupOpen && (
        <AddTrainingGroupDialog
          budget={b}
          onClose={() => setIsAddGroupOpen(false)}
          onAdded={(mov) => setExtraMovements((prev) => [...prev, mov])}
        />
      )}

      {removeTarget && (
        <F0Dialog
          isOpen
          onClose={() => setRemoveTarget(null)}
          position="center"
          width="md"
          title="Remove from budget"
          description={`${removeTarget.trainingName} · ${removeTarget.groupName} will no longer have its costs deducted from this budget.`}
          primaryAction={{
            label: "Remove",
            variant: "critical",
            onClick: () => {
              setRemovedIds((prev) => {
                const next = new Set(prev)
                next.add(removeTarget.id)
                return next
              })
              setRemoveTarget(null)
            },
          }}
          secondaryAction={{
            label: "Cancel",
            onClick: () => setRemoveTarget(null),
          }}
        />
      )}

      {isExportOpen && (
        <F0Dialog
          isOpen
          onClose={() => setIsExportOpen(false)}
          position="center"
          width="md"
          title="Export budget"
          description="Export this budget and its training groups as a CSV file."
          primaryAction={{
            label: "Export",
            onClick: () => setIsExportOpen(false),
          }}
          secondaryAction={{
            label: "Cancel",
            onClick: () => setIsExportOpen(false),
          }}
        />
      )}

      {selectedMovement && (
        <F0Dialog
          isOpen
          onClose={() => setSelectedMovement(null)}
          position="right"
          width="md"
          title={selectedMovement.groupName}
          description={selectedMovement.trainingName}
          primaryAction={{
            label: "Go to Training group",
            icon: ArrowRight,
            onClick: () => {
              const m = selectedMovement
              setSelectedMovement(null)
              goToTrainingGroup(m)
            },
          }}
          secondaryAction={{
            label: "Close",
            onClick: () => setSelectedMovement(null),
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <F0Text content="Timeframe" variant="label" />
              <F0Text
                content={`${fmtDate(selectedMovement.startDate)} → ${fmtDate(selectedMovement.endDate)}`}
                variant="body"
              />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text content="Group status" variant="label" />
              <F0Text
                content={GROUP_STATUS_LABEL[selectedMovement.groupStatus]}
                variant="body"
              />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text content="Payment status" variant="label" />
              <F0Text
                content={PAYMENT_STATUS_LABEL[selectedMovement.paymentStatus]}
                variant="body"
              />
            </div>
            <div className="flex flex-col gap-2 rounded-md border border-f1-border bg-f1-background-secondary p-3">
              <F0Text content="Cost breakdown" variant="label" />
              <div className="flex justify-between">
                <F0Text content="Direct cost" variant="small" />
                <F0Text
                  content={fmtEur(selectedMovement.directCost)}
                  variant="small"
                />
              </div>
              <div className="flex justify-between">
                <F0Text content="Indirect cost" variant="small" />
                <F0Text
                  content={fmtEur(selectedMovement.indirectCost)}
                  variant="small"
                />
              </div>
              <div className="flex justify-between">
                <F0Text content="Salary cost" variant="small" />
                <F0Text
                  content={fmtEur(selectedMovement.salaryCost)}
                  variant="small"
                />
              </div>
              <div className="flex justify-between border-t border-f1-border pt-2">
                <F0Text content="Total cost" variant="label" />
                <F0Text
                  content={fmtEur(
                    selectedMovement.directCost +
                      selectedMovement.indirectCost +
                      selectedMovement.salaryCost
                  )}
                  variant="label"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <F0Text content="Participants" variant="label" />
              <F0Text
                content={`${selectedMovement.participantsCount} participants`}
                variant="body"
              />
            </div>
          </div>
        </F0Dialog>
      )}
    </F0Box>
  )
}

// ── NEW BUDGET WIZARD ───────────────────────────────────────────────────────
// Upstream: TrainingsBudgetWizard — 3 steps:
//   1. Basic information — Define the essential details of your training budget.
//   2. Amount             — Set the total amount and timeframe for this budget.
//   3. Allocation         — Select the training groups eligible to use this budget.

const basicDetailsSchema = z.object({
  name: f0FormField.text({
    label: "Title",
    placeholder: "e.g. Engineering 2026",
  }),
  description: f0FormField.textarea({
    label: "Description",
    optional: true,
    placeholder: "What is this budget for?",
  }),
})

const amountsSchema = z.object({
  amount: f0FormField.number({
    label: "Amount",
    placeholder: "0",
    min: 0,
  }),
  effectiveFrom: f0FormField.date({
    label: "Start date",
    row: "dates",
  }),
  effectiveUntil: f0FormField.date({
    label: "End date",
    optional: true,
    row: "dates",
  }),
})

const allocationSchema = z.object({
  selectedTrainingClassIds: f0FormField.multiSelect({
    label: "Training groups",
    optional: true,
    helpText:
      "Direct, indirect, and salary costs of the selected training groups will be deducted from this budget.",
    options: trainings.flatMap((t) =>
      t.classes.map((c) => ({
        value: c.id,
        label: `${t.name} — ${c.name}`,
      }))
    ),
  }),
})

const wizardSchema = {
  basicDetails: basicDetailsSchema,
  amounts: amountsSchema,
  allocation: allocationSchema,
}

type WizardSchema = typeof wizardSchema

const wizardSections = {
  basicDetails: {
    title: "Basic information",
    description: "Define the essential details of your training budget.",
  },
  amounts: {
    title: "Amount",
    description: "Set the total amount and timeframe for this budget.",
  },
  allocation: {
    title: "Allocation",
    description:
      "Select the training groups eligible to use this budget.",
  },
}

const wizardSteps: F0WizardFormStep[] = [
  { title: "Basic information", sectionIds: ["basicDetails"] },
  { title: "Amount", sectionIds: ["amounts"] },
  {
    title: "Allocation",
    sectionIds: ["allocation"],
    nextLabel: "Submit",
  },
]

const wizardDefaults = {
  basicDetails: { name: "", description: "" },
  amounts: { amount: 10000 },
  allocation: { selectedTrainingClassIds: [] as string[] },
}

function NewBudgetView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const handleSubmit = useMemo(
    () =>
      async (arg: {
        sectionId: keyof WizardSchema
        data: unknown
        fullData: {
          basicDetails: z.infer<typeof basicDetailsSchema>
          amounts: z.infer<typeof amountsSchema>
          allocation: z.infer<typeof allocationSchema>
        }
      }): Promise<F0FormSubmitResult> => {
        if (arg.sectionId !== "allocation") return { success: true }

        const { basicDetails, amounts, allocation } = arg.fullData
        const allocated = calculateAllocated(
          allocation.selectedTrainingClassIds ?? []
        )
        const id = `bud-${Date.now()}`
        const total = amounts.amount ?? 0
        const newBudget: TrainingBudget = {
          id,
          name: basicDetails.name ?? "Untitled budget",
          year: amounts.effectiveFrom
            ? new Date(amounts.effectiveFrom).getFullYear()
            : new Date().getFullYear(),
          totalAmount: total,
          spentAmount: 0,
          pendingAmount: allocated,
          remainingAmount: Math.max(0, total - allocated),
          currency: "EUR",
          status: "active",
          scope: "company",
          scopeName: "All employees",
          ownerEmployeeId: "emp-001",
          ownerEmployeeName: "You",
        }
        trainingBudgets.unshift(newBudget)
        go(setSearch, { view: "detail", budgetId: id })
        return { success: true }
      },
    [setSearch]
  )

  const formDefinition = useF0FormDefinition({
    name: "new-trainings-budget-wizard",
    schema: wizardSchema,
    sections: wizardSections,
    defaultValues: wizardDefaults,
    onSubmit: handleSubmit,
  })

  return (
    <F0WizardForm
      isOpen
      title="New training budget"
      formDefinition={formDefinition}
      steps={wizardSteps}
      onClose={() => go(setSearch, { view: "list", budgetId: null })}
      autoCloseOnLastStepSubmit
    />
  )
}

// ── ROOT ────────────────────────────────────────────────────────────────────

export default function TrainingsBudgets() {
  const navigate = useNavigate()
  const { view, budgetId, setSearch } = useView()

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
                      label:
                        view === "new" ? "New training budget" : "Budget detail",
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
  )
}
