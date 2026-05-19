import {
  F0Alert,
  F0Avatar,
  F0Box,
  F0Button,
  F0Dialog,
  F0Heading,
  F0Icon,
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
  ResourceHeader,
  Switch,
  Tabs,
  Textarea,
  Widget,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  ArrowDown,
  ChartLine,
  Delete,
  DollarBill,
  ExternalLink,
  InProgressTask,
  Office,
  Pencil,
  Search,
  Sliders,
  Upload,
  Download,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import type { ReactNode } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { z } from "zod"

import {
  breakdownByLegalEntityFor,
  findLegalEntity,
  findEmployee,
  grossCostFromMovement,
  hoursCompletedForEmployee,
  legalEntities,
  legalEntityCurrencyMap,
  legalEntityForEmployee,
  salaryCostForEmployeeInGroup,
  movementsForBudget,
  trainingBudgets,
  trainingParticipants,
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

const fmtNumericDate = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "-"

const fmtFigmaEur = (n: number) =>
  `${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} €`

function participantsForGroup(groupId: string) {
  return trainingParticipants.filter((p) => p.classId === groupId)
}

function participantsForLegalEntity(
  movement: TrainingBudgetMovement,
  legalEntityId: string
) {
  return participantsForGroup(movement.groupId).filter(
    (p) => legalEntityForEmployee(p.employeeId).id === legalEntityId
  )
}

function participantsByLegalEntityForMovement(
  movement: TrainingBudgetMovement
): Array<{ legalEntityId: string; count: number }> {
  const counts = new Map<string, number>()
  for (const p of participantsForGroup(movement.groupId)) {
    const le = legalEntityForEmployee(p.employeeId)
    counts.set(le.id, (counts.get(le.id) ?? 0) + 1)
  }
  return Array.from(counts.entries()).map(([legalEntityId, count]) => ({
    legalEntityId,
    count,
  }))
}

function legalEntitiesForMovement(movement: TrainingBudgetMovement) {
  return participantsByLegalEntityForMovement(movement)
    .map(({ legalEntityId }) => findLegalEntity(legalEntityId))
    .filter((le): le is NonNullable<typeof le> => Boolean(le))
}

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
    <F0Box display="flex" flexDirection="column" gap="lg" padding="xl">
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
    </F0Box>
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
  setSearch: _setSearch,
}: {
  budgetId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const navigate = useNavigate()
  const b = trainingBudgets.find((x) => x.id === budgetId)
  const [removeTarget, setRemoveTarget] =
    useState<TrainingBudgetMovement | null>(null)
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false)
  const [selectedMovement, setSelectedMovement] =
    useState<TrainingBudgetMovement | null>(null)
  const [selectedLegalEntityCost, setSelectedLegalEntityCost] = useState<{
    movement: TrainingBudgetMovement
    legalEntityId: string
  } | null>(null)
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

  const scopeLabel =
    b.scope === "company"
      ? "Company"
      : b.scope === "department"
        ? "Department"
        : "Team"

  // Status pill shown in the header. When the budget is archived/closed we
  // surface "Archived" neutral; otherwise we surface the computed health
  // (within budget / at risk / over budget) using the canonical labels.
  const headerStatus: {
    label: string
    text: string
    variant: "neutral" | "info" | "positive" | "warning" | "critical"
  } = isArchived
    ? { label: "Status", text: "Archived", variant: "neutral" }
    : status === "over_budget"
      ? { label: "Status", text: "Over budget", variant: "critical" }
      : status === "budget_risk"
        ? { label: "Status", text: "Budget at risk", variant: "warning" }
        : { label: "Status", text: "Within budget", variant: "positive" }

  return (
    <F0Box display="flex" flexDirection="column" gap="lg" padding="xl">
      <ResourceHeader
        title={b.name}
        description={b.description}
        status={headerStatus}
        metadata={[
          { label: "Year", value: { type: "text", content: String(b.year) } },
          { label: "Scope", value: { type: "text", content: scopeLabel } },
          { label: "Applies to", value: { type: "text", content: b.scopeName } },
          {
            label: "Owner",
            value: { type: "text", content: b.ownerEmployeeName },
          },
        ]}
        primaryAction={{
          label: "Edit budget",
          icon: Pencil,
          onClick: () => setIsEditOpen(true),
        }}
        secondaryActions={[
          {
            label: "Export",
            icon: Download,
            hideLabel: true,
            onClick: () => {},
          },
        ]}
      />

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
                  label: "Legal entities",
                  id: "legalEntities",
                  render: (item) => {
                    const les = legalEntitiesForMovement(item)
                    return {
                      type: "tagList",
                      value: {
                        type: "raw",
                        tags: les.map((le) => ({ text: le.legalName })),
                        max: 1,
                      },
                    }
                  },
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
        <TrainingGroupCostSidepanel
          movement={selectedMovement}
          onClose={() => setSelectedMovement(null)}
        />
      )}

      {selectedLegalEntityCost && (
        <LegalEntityCostSidepanel
          movement={selectedLegalEntityCost.movement}
          legalEntityId={selectedLegalEntityCost.legalEntityId}
          onClose={() => setSelectedLegalEntityCost(null)}
        />
      )}
    </F0Box>
  )
}

function TrainingGroupCostSidepanel({
  movement,
  onClose,
}: {
  movement: TrainingBudgetMovement
  onClose: () => void
}) {
  return (
    <SidepanelFrame
      title={movement.groupName}
      description={movement.trainingName}
      paymentStatus={movement.paymentStatus}
      timeframe={`${fmtNumericDate(movement.startDate)}- ${fmtNumericDate(movement.endDate)}`}
      activeTab="cost"
      onTabChange={() => {}}
      onClose={onClose}
    >
      <GroupSidepanelCostTab
        movement={movement}
      />
    </SidepanelFrame>
  )
}

function SidepanelFrame({
  title,
  description,
  paymentStatus,
  timeframe,
  activeTab,
  onTabChange,
  onClose,
  children,
}: {
  title: string
  description: string
  paymentStatus: TrainingBudgetMovement["paymentStatus"]
  timeframe: string
  activeTab: "cost" | "participants"
  onTabChange: (tab: "cost" | "participants") => void
  onClose: () => void
  children: ReactNode
}) {
  const statusClass =
    paymentStatus === "spent"
      ? "bg-f1-background-positive text-f1-foreground-positive"
      : "bg-f1-background-warning text-f1-foreground-warning"

  return (
    <div className="fixed inset-0 z-50 bg-f1-background-overlay">
      <section
        className="absolute right-0 top-0 flex h-[calc(100%-4px)] flex-col overflow-hidden rounded-2xl border border-f1-border-secondary bg-f1-background shadow-2xl"
        style={{ width: 568 }}
      >
        <header className="flex flex-col gap-5 px-4 py-3">
          <div className="flex h-8 items-center justify-end gap-2">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-f1-border bg-f1-background shadow-sm"
            >
              <F0Text content="..." variant="label" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-f1-border bg-f1-background shadow-sm"
            >
              <F0Text content="×" variant="label" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <F0Text content={title} variant="label" />
              <F0Text variant="description" content={description} />
            </div>
            <div className="flex items-center gap-3">
              <div className={`rounded-xl px-2 py-1 ${statusClass}`}>
                <F0Text
                  content={`● ${paymentStatus === "spent" ? "Paid" : "Pending"}`}
                  variant="small"
                />
              </div>
              <div className="h-4 w-px bg-f1-border-secondary" />
              <div className="flex items-center gap-1">
                <F0Text content="Timeframe" variant="description" />
                <F0Text content={timeframe} variant="body" />
              </div>
              <div className="h-4 w-px bg-f1-border-secondary" />
            </div>
          </div>
        </header>
        <nav className="border-b border-f1-border-secondary px-5">
          <div className="flex h-14 items-end gap-3">
            <button
              type="button"
              onClick={() => onTabChange("cost")}
              className={`h-12 px-4 ${activeTab === "cost" ? "border-b border-f1-foreground bg-f1-background-secondary text-f1-foreground" : "text-f1-foreground-secondary"}`}
            >
              <F0Text content="Cost" variant="body" />
            </button>
            <button
              type="button"
              onClick={() => onTabChange("participants")}
              className={`h-12 px-4 ${activeTab === "participants" ? "border-b border-f1-foreground bg-f1-background-secondary text-f1-foreground" : "text-f1-foreground-secondary"}`}
            >
              <F0Text content="Participants" variant="body" />
            </button>
          </div>
        </nav>
        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      </section>
    </div>
  )
}

function GroupSidepanelCostTab({
  movement,
}: {
  movement: TrainingBudgetMovement
}) {
  const [openLeId, setOpenLeId] = useState<string | null>(() => {
    const first = legalEntitiesForMovement(movement)[0]
    return first?.id ?? null
  })
  const les = legalEntitiesForMovement(movement)
  const breakdownMap = new Map(
    breakdownByLegalEntityFor(
      movement,
      participantsByLegalEntityForMovement(movement)
    ).map((cost) => [cost.legalEntityId, cost])
  )

  return (
    <div className="flex flex-col gap-8 px-5 py-8">
      <div className="flex flex-col gap-3">
        <F0Text content="Payment status" variant="label" />
        <button
          type="button"
          className="flex h-10 items-center justify-between rounded-xl border border-f1-border bg-f1-background px-3 py-2 text-left"
        >
          <F0Text
            content={movement.paymentStatus === "spent" ? "Paid" : "Pending"}
            variant="body"
          />
          <F0Icon icon={ArrowDown} size="sm" color="secondary" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <F0Text content="Total cost" variant="label" />
        <div className="flex h-16 items-center justify-between gap-2 rounded-2xl border border-f1-border bg-f1-background p-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-f1-border-secondary bg-f1-background-secondary text-f1-foreground-secondary">
              <F0Icon icon={Office} size="md" color="secondary" />
            </div>
            <div className="flex flex-col gap-0.5">
              <F0Text content="Total cost" variant="label" />
              <F0Text
                content={`${movement.participantsCount} participants`}
                variant="description"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <F0Text
              content={fmtFigmaEur(grossCostFromMovement(movement))}
              variant="label"
            />
            <F0Icon icon={ArrowDown} size="sm" color="secondary" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-xl border border-f1-border-secondary bg-f1-background px-2 py-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-f1-background px-8 py-6">
          <div className="flex flex-col gap-0.5">
            <F0Heading as="h3" variant="heading" content="Costs by legal entity" />
            <F0Text
              variant="description"
              content="Track and manage all costs per legal entity"
            />
          </div>
          <Switch title="Costs by legal entity" hideLabel checked />
        </div>

        <div className="flex flex-col gap-6 px-8">
          <div className="flex flex-col gap-6">
            {les.map((le) => {
              const breakdown = breakdownMap.get(le.id)
              const isOpen = openLeId === le.id
              const total = breakdown
                ? breakdown.directCost + breakdown.indirectCost + breakdown.salaryCost
                : 0
              const participantCount =
                breakdown?.participantsCount ??
                participantsForLegalEntity(movement, le.id).length
              const prefix = le.countryCode === "ES" ? "" : `${le.countryCode} · `

              return (
                <div
                  key={le.id}
                  className="rounded-2xl border border-f1-border bg-f1-background p-6"
                >
                  <div className="flex w-full items-center justify-between gap-3 text-left">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-f1-border-secondary bg-f1-background-secondary text-f1-foreground-secondary">
                        <F0Icon icon={Office} size="md" color="secondary" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <F0Heading as="h4" variant="heading" content={le.legalName} />
                        <F0Text
                          variant="description"
                          content={`${prefix}${participantCount} participants`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <F0Text content={fmtFigmaEur(total)} variant="label" />
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          setOpenLeId((current) =>
                            current === le.id ? null : le.id
                          )
                        }}
                        className="flex h-5 w-5 items-center justify-center text-f1-foreground-secondary"
                      >
                        <F0Icon
                          icon={ArrowDown}
                          size="sm"
                          color="secondary"
                        />
                      </button>
                    </div>
                  </div>
                  {isOpen && breakdown && (
                    <div className="mt-8 flex gap-5">
                        <LegalEntityInput
                          label="Direct cost"
                          value={breakdown.directCost}
                        />
                        <LegalEntityInput
                          label="Indirect cost"
                          value={breakdown.indirectCost}
                        />
                        <LegalEntityInput
                          label="Salary cost"
                          value={breakdown.salaryCost}
                          plain
                        />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="rounded-xl border border-f1-border-secondary bg-f1-background-secondary px-4 py-2">
            <div className="flex flex-col gap-2">
              {les.map((le) => {
                const breakdown = breakdownMap.get(le.id)
                const total = breakdown
                  ? breakdown.directCost +
                    breakdown.indirectCost +
                    breakdown.salaryCost
                  : 0
                return (
                  <div key={le.id} className="flex items-center justify-between">
                    <F0Text content={le.legalName} variant="description" />
                    <F0Text content={fmtFigmaEur(total)} variant="description" />
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-f1-border-secondary pt-4">
              <div className="flex flex-col gap-0.5">
                <F0Text content="Total cost" variant="label" />
                <F0Text
                  content="Gross cost= Direct + Indirect + Salary "
                  variant="description"
                />
              </div>
              <F0Text
                content={fmtFigmaEur(grossCostFromMovement(movement))}
                variant="label"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LegalEntityInput({
  label,
  value,
  plain = false,
}: {
  label: string
  value: number
  plain?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <F0Text content={label} variant="label" />
      <div className="flex h-10 items-center rounded-xl border border-f1-border bg-f1-background-secondary px-3 py-2">
        <F0Text content={plain ? String(value) : fmtFigmaEur(value)} variant="body" />
      </div>
    </div>
  )
}

function LegalEntityCostSidepanel({
  movement,
  legalEntityId,
  onClose,
}: {
  movement: TrainingBudgetMovement
  legalEntityId: string
  onClose: () => void
}) {
  const [tab, setTab] = useState<"cost" | "participants">("cost")
  const le = findLegalEntity(legalEntityId)
  const breakdown = breakdownByLegalEntityFor(
    movement,
    participantsByLegalEntityForMovement(movement)
  ).find((cost) => cost.legalEntityId === legalEntityId)

  return (
    <SidepanelFrame
      title={le?.legalName ?? legalEntityId}
      description={movement.groupName}
      paymentStatus={movement.paymentStatus}
      timeframe={`${fmtNumericDate(movement.startDate)}- ${fmtNumericDate(movement.endDate)}`}
      activeTab={tab}
      onTabChange={setTab}
      onClose={onClose}
    >
      {tab === "cost" ? (
        <div className="px-5 py-4">
          <LegalEntityCostBreakdown
            direct={breakdown?.directCost ?? 0}
            indirect={breakdown?.indirectCost ?? 0}
            salary={breakdown?.salaryCost ?? 0}
          />
        </div>
      ) : (
        <LegalEntityParticipantsTab
          movement={movement}
          legalEntityId={legalEntityId}
        />
      )}
    </SidepanelFrame>
  )
}

function LegalEntityParticipantsTab({
  movement,
  legalEntityId,
}: {
  movement: TrainingBudgetMovement
  legalEntityId: string
}) {
  const participants = participantsForLegalEntity(movement, legalEntityId)

  return (
    <div className="flex flex-col gap-5 pt-5">
      <div className="flex items-center justify-between px-6">
        <F0Button label="Filter" icon={InProgressTask} variant="outline" />
        <div className="flex items-center gap-2">
          <F0Button label="Search" icon={Search} variant="outline" hideLabel />
          <F0Button label="Settings" icon={Sliders} variant="outline" hideLabel />
          <F0Button label="More options" icon={Pencil} variant="outline" hideLabel />
        </div>
      </div>
      <div className="overflow-hidden border-y border-f1-border-secondary">
        <div className="flex min-h-10 items-center px-3">
          <div className="w-11 shrink-0" />
          <div className="flex-1 px-3 py-2.5">
            <F0Text content="Name" variant="label" />
          </div>
          <div className="flex-1 px-3 py-2.5">
            <F0Text content="Hours completed" variant="label" />
          </div>
          <div className="flex-1 px-3 py-2.5">
            <F0Text content="Salary cost" variant="label" />
          </div>
        </div>
        {participants.map((participant) => {
          const employee = findEmployee(participant.employeeId)
          const name = employee?.fullName ?? participant.employeeName
          const [firstName, ...restName] = name.split(" ")
          const hours = hoursCompletedForEmployee(
            participant.employeeId,
            movement.groupId
          )
          const salaryCost = salaryCostForEmployeeInGroup(
            participant.employeeId,
            movement.groupId
          )

          return (
            <div
              key={participant.id}
              className="flex min-h-12 items-center border-t border-f1-border-secondary px-3"
            >
              <div className="flex w-11 shrink-0 justify-center">
                <div className="h-5 w-5 rounded-md border border-f1-border bg-f1-background" />
              </div>
              <div className="flex flex-1 items-center gap-1 px-3 py-2.5">
                <F0Avatar
                  avatar={{
                    type: "person",
                    src: employee?.avatarUrl ?? participant.employeeAvatar,
                    firstName,
                    lastName: restName.join(" "),
                  }}
                  size="xs"
                />
                <F0Text content={name} variant="body" />
              </div>
              <div className="flex-1 px-3 py-3">
                <F0Text content={`${hours}h`} variant="body" />
              </div>
              <div className="flex-1 px-3 py-3">
                <F0Text content={fmtFigmaEur(salaryCost)} variant="body" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LegalEntityCostBreakdown({
  direct,
  indirect,
  salary,
}: {
  direct: number
  indirect: number
  salary: number
}) {
  const total = direct + indirect + salary
  return (
    <div className="flex flex-col gap-4">
      <F0Text content="Cost breakdown" variant="label" />
      <div className="overflow-hidden rounded-xl border border-f1-border-secondary bg-f1-background">
        <CostBreakdownRow
          label="Direct cost"
          description="Course fees, venue rentals, and training materials"
          value={direct}
          bordered
        />
        <CostBreakdownRow
          label="Indirect cost"
          description="Administrative overhead and support costs"
          value={indirect}
          bordered
        />
        <CostBreakdownRow
          label="Salary cost"
          description="Cost of employees' time spent in training"
          value={salary}
        />
      </div>
      <div className="border-t border-f1-border-secondary pt-4">
        <div className="flex h-16 items-center justify-between rounded-xl border border-f1-border-secondary bg-f1-background px-4 py-2">
          <div className="flex flex-col gap-0.5">
            <F0Text content="Total cost" variant="label" />
            <F0Text
              content="Gross cost= Direct + Indirect + Salary"
              variant="description"
            />
          </div>
          <F0Text content={fmtFigmaEur(total)} variant="label" />
        </div>
      </div>
    </div>
  )
}

function CostBreakdownRow({
  label,
  description,
  value,
  bordered = false,
}: {
  label: string
  description: string
  value: number
  bordered?: boolean
}) {
  return (
    <div
      className={`flex h-16 items-center justify-between px-4 py-2 ${bordered ? "border-b border-f1-border-secondary" : ""}`}
    >
      <div className="flex min-w-0 flex-col gap-0.5">
        <F0Text content={label} variant="label" />
        <F0Text content={description} variant="description" />
      </div>
      <F0Text content={fmtFigmaEur(value)} variant="body" />
    </div>
  )
}

// ── NEW BUDGET WIZARD ───────────────────────────────────────────────────────
// Upstream: TrainingsBudgetWizard — 3 steps:
//   1. Basic information — Define the essential details of your training budget.
//   2. Amount             — Set the total amount and timeframe for this budget.
//   3. Allocation         — Select the training groups eligible to use this budget.

const legalEntityOptions = legalEntities.map((le) => ({
  value: le.id,
  label: le.legalName,
}))

const basicDetailsSchema = z.object({
  legalEntityId: f0FormField.multiSelect({
    label: "Legal entity",
    options: legalEntityOptions,
    max: 1,
  }),
  name: f0FormField.text({
    label: "Budget name",
    placeholder: "e.g. Engineering 2026",
  }),
  description: f0FormField.textarea({
    label: "Budget description",
    optional: true,
    placeholder: "Write budget description",
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
  basicDetails: {
    legalEntityId: [legalEntities[0]!.id],
    name: "",
    description: "",
  },
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
        const legalEntityId =
          basicDetails.legalEntityId?.[0] ?? legalEntities[0]!.id
        const currency = legalEntityCurrencyMap[legalEntityId] ?? "EUR"
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
          currency,
          status: "active",
          scope: "company",
          scopeName: "All employees",
          ownerEmployeeId: "emp-001",
          ownerEmployeeName: "You",
          legalEntityId,
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

  const currentBudget =
    view === "detail" && budgetId
      ? trainingBudgets.find((x) => x.id === budgetId)
      : undefined

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
                ? [{ id: "budgets", label: "Budgets" }]
                : [
                    {
                      id: "budgets",
                      label: "Budgets",
                      href: "/p/trainings-budgets",
                    },
                    {
                      id: "current",
                      label:
                        view === "new"
                          ? "New training budget"
                          : (currentBudget?.name ?? "Budget detail"),
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
