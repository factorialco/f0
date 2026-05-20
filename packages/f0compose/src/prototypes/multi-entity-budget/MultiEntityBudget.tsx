import {
  F0Alert,
  F0Box,
  F0Button,
  F0Dialog,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  EntitySelect,
  type EntityId,
  type EntitySelectEntity,
  OneDataCollection,
  Page,
  PageHeader,
  Select,
  Switch,
  Textarea,
  Widget,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  ArrowDown,
  ArrowRight,
  ChartLine,
  ChevronUp,
  Delete,
  DollarBill,
  ExternalLink,
  InProgressTask,
  Pencil,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type {
  Training,
  TrainingBudget,
  TrainingBudgetMovement,
} from "@/fixtures"

import {
  directCostFromMovement,
  findLegalEntity,
  grossCostFromMovement,
  breakdownByLegalEntityFor,
  hoursCompletedForEmployee,
  salaryCostForEmployeeInGroup,
  indirectCostFromMovement,
  legalEntities,
  legalEntityCurrencyMap,
  legalEntityForEmployee,
  movementsForBudget,
  salaryCostFromMovement,
  trainingBudgetMovements,
  trainingBudgets,
  trainingParticipants,
  trainings,
} from "@/fixtures"

import type { PrototypeMeta } from "../types"

import {
  LegalEntityToggleProvider,
  defaultToggleFor,
  useLegalEntityToggle,
} from "./_shared/legalEntityToggleContext"
import { ClassDetail } from "./detail/ClassDetail"

export const meta: PrototypeMeta = {
  slug: "multi-entity-budget",
  title: "Trainings — Multi-entity Budget",
  description:
    "RFC: Multi-entity Training Budget. Budget detail with a Legal entities column, group sidepanel with a 'Costs by legal entity' toggle splitting Direct/Indirect/Salary per LE, and a per-LE sidepanel with Cost breakdown and Participants tabs.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "budgets", "spend", "multi-entity", "rfc"],
  createdAt: "2026-05-18",
}

// ── Status helpers ──────────────────────────────────────────────────────────

type View = "list" | "detail" | "new" | "group"
type BudgetStatusKey = "within_budget" | "budget_risk" | "over_budget"
type BudgetStatusColor = "viridian" | "yellow" | "radical"

const STATUS_LABEL: Record<BudgetStatusKey, string> = {
  within_budget: "Within budget",
  budget_risk: "Budget at risk",
  over_budget: "Over budget",
}

const PAYMENT_STATUS_LABEL: Record<
  TrainingBudgetMovement["paymentStatus"],
  string
> = {
  pending: "Pending",
  spent: "Spent",
}

const GROUP_STATUS_LABEL: Record<
  TrainingBudgetMovement["groupStatus"],
  string
> = {
  planned: "Planned",
  ongoing: "Ongoing",
  completed: "Completed",
}

const GROUP_STATUS_VARIANT: Record<
  TrainingBudgetMovement["groupStatus"],
  "neutral" | "info" | "positive"
> = {
  planned: "neutral",
  ongoing: "info",
  completed: "positive",
}

const PAYMENT_STATUS_VARIANT: Record<
  TrainingBudgetMovement["paymentStatus"],
  "warning" | "positive"
> = {
  pending: "warning",
  spent: "positive",
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

// ── Multi-entity helpers ────────────────────────────────────────────────────
// Source of truth for "which legal entities does a group involve" =
// the set of legal entities of its participants (each employee belongs to
// one LE). Scoped to the budget's legal entity if set (a budget owned by
// one LE only "sees" participants from that LE).

function participantsForGroup(groupId: string) {
  return trainingParticipants.filter((p) => p.classId === groupId)
}

function legalEntitiesForMovement(
  movement: TrainingBudgetMovement,
  budget: TrainingBudget | undefined
): Array<{ id: string; legalName: string; currency: string }> {
  const participants = participantsForGroup(movement.groupId)
  const ids = new Set<string>()
  for (const p of participants) {
    const le = legalEntityForEmployee(p.employeeId)
    if (le) ids.add(le.id)
  }
  // If the budget is scoped to a single LE, restrict to it.
  if (budget?.legalEntityId && ids.has(budget.legalEntityId)) {
    return [
      {
        id: budget.legalEntityId,
        legalName:
          legalEntities.find((le) => le.id === budget.legalEntityId)
            ?.legalName ?? budget.legalEntityId,
        currency: legalEntityCurrencyMap[budget.legalEntityId] ?? "EUR",
      },
    ]
  }
  return Array.from(ids).map((id) => ({
    id,
    legalName: legalEntities.find((le) => le.id === id)?.legalName ?? id,
    currency: legalEntityCurrencyMap[id] ?? "EUR",
  }))
}

// Participant counts per LE for a movement's group, used to compute the
// proportional cost breakdown when the fixture does not define one.
function participantsByLegalEntityForMovement(
  movement: TrainingBudgetMovement
): Array<{ legalEntityId: string; count: number }> {
  const counts = new Map<string, number>()
  for (const p of participantsForGroup(movement.groupId)) {
    const le = legalEntityForEmployee(p.employeeId)
    if (!le) continue
    counts.set(le.id, (counts.get(le.id) ?? 0) + 1)
  }
  return Array.from(counts.entries()).map(([legalEntityId, count]) => ({
    legalEntityId,
    count,
  }))
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
      asBottomSheetInMobile={false}
      position="center"
      width="xl"
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
      <div className="flex flex-col gap-6">
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
        <div className="border-f1-border bg-f1-background-secondary flex items-center justify-between rounded-md border p-3">
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
  currentMovements,
}: {
  budget: TrainingBudget
  onClose: () => void
  onAdded: (movements: TrainingBudgetMovement[]) => void
  currentMovements: TrainingBudgetMovement[]
}) {
  // Multi-select of training groups, replicating frames 2 & 3.
  // Selectable groups: any class from any training that is not already in
  // this budget.
  const allGroupOptions = useMemo(() => {
    const taken = new Set(currentMovements.map((m) => m.groupId))
    const out: Array<{
      value: string
      label: string
      trainingId: string
      cost: number
    }> = []
    for (const t of trainings) {
      for (const c of t.classes) {
        if (taken.has(c.id)) continue
        const cost = classTotalCost(t, c.id)
        out.push({
          value: c.id,
          label: `${t.name} · ${c.name}`,
          trainingId: t.id,
          cost: cost.total,
        })
      }
    }
    return out
  }, [currentMovements])

  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const selectedOptions = allGroupOptions.filter((o) =>
    selectedIds.includes(o.value)
  )
  const trainingEntities = useMemo<EntitySelectEntity[]>(() => {
    const entities: EntitySelectEntity[] = []

    for (const training of trainings) {
      const subItems = allGroupOptions
        .filter((option) => option.trainingId === training.id)
        .map((option) => ({
          subId: option.value,
          subName: `${training.classes.find((c) => c.id === option.value)?.name ?? option.label} · ${fmtEur(option.cost)}`,
          subSearchKeys: [option.label],
        }))

      if (subItems.length === 0) continue

      entities.push({
        id: training.id,
        name: training.name,
        searchKeys: [training.name],
        expanded: expandedElements.includes(training.id),
        subItems,
      })
    }

    return entities
  }, [allGroupOptions, expandedElements])
  const selectedEntities = useMemo<EntitySelectEntity[]>(() => {
    const entities: EntitySelectEntity[] = []

    for (const entity of trainingEntities) {
      const subItems = entity.subItems?.filter((subItem) =>
        selectedIds.includes(String(subItem.subId))
      )
      if (!subItems || subItems.length === 0) continue
      entities.push({ ...entity, subItems })
    }

    return entities
  }, [selectedIds, trainingEntities])
  const selectedCost = selectedOptions.reduce((s, o) => s + o.cost, 0)

  // KPIs: Total budget, Allocated (current movements + selection), Available.
  const allocatedNow = currentMovements.reduce(
    (s, m) => s + grossCostFromMovement(m),
    0
  )
  const allocatedAfter = allocatedNow + selectedCost
  const available = budget.totalAmount - allocatedAfter
  const isWithin = available >= 0

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="center"
      width="xl"
      title="Add group"
      primaryAction={
        dropdownOpen
          ? undefined
          : {
              label: "Add",
              disabled: selectedOptions.length === 0,
              onClick: () => {
                const movs: TrainingBudgetMovement[] = []
                for (const opt of selectedOptions) {
                  const t = trainings.find((x) => x.id === opt.trainingId)
                  const c = t?.classes.find((x) => x.id === opt.value)
                  const cost = t && c ? classTotalCost(t, c.id) : null
                  if (!t || !c || !cost) continue
                  movs.push({
                    id: `mov-${Date.now()}-${c.id}`,
                    budgetId: budget.id,
                    trainingId: t.id,
                    trainingName: t.name,
                    groupId: c.id,
                    groupName: c.name,
                    groupStatus: "planned",
                    startDate: c.startDate,
                    endDate: c.endDate,
                    amountCents: Math.round(cost.total * 100),
                    currency: budget.currency,
                    trainingProvider:
                      t.type === "external"
                        ? (t.externalProvider ?? "External")
                        : "Internal",
                    trainingTeamId: "team-eng",
                    trainingTeamName: "Engineering",
                    paymentStatus: "pending",
                    participantsCount: c.participantCount,
                    directCost: cost.direct,
                    indirectCost: cost.indirect,
                    salaryCost: cost.salary,
                  })
                }
                onAdded(movs)
                onClose()
              },
            }
      }
      secondaryAction={
        dropdownOpen ? undefined : { label: "Cancel", onClick: onClose }
      }
    >
      <F0Box display="flex" flexDirection="column" gap="xl" minHeight="96">
        {!dropdownOpen && (
          <F0Box display="grid" columns="3" gap="sm">
            <Widget
              summaries={[
                { label: "Total budget", value: fmtEur(budget.totalAmount) },
              ]}
            />
            <Widget
              summaries={[
                { label: "Allocated", value: fmtEur(allocatedAfter) },
              ]}
            />
            <Widget
              summaries={[
                { label: "Available", value: fmtEur(Math.max(available, 0)) },
              ]}
            />
          </F0Box>
        )}

        {selectedOptions.length > 0 && !dropdownOpen && (
          <F0Alert
            variant={isWithin ? "positive" : "warning"}
            title={isWithin ? "Within budget" : "Outside budget"}
            description={
              isWithin
                ? `${fmtEur(available)} remaining after this addition.`
                : `This selection exceeds the budget by ${fmtEur(-available)}.`
            }
          />
        )}

        {!dropdownOpen && <F0Box borderBottom="default" borderColor="info" />}

        <EntitySelect
          label="Training group"
          placeholder="e.g., January group"
          entities={trainingEntities}
          groups={[{ label: "All", value: "all" }]}
          selectedGroup="all"
          selectedEntities={selectedEntities}
          selectedItemsCopy="trainings selected"
          searchPlaceholder="Search"
          selectAllLabel="Select all"
          clearLabel="Clear"
          selectedLabel="selected"
          notFoundTitle="No trainings found"
          notFoundSubtitle=""
          hiddenAvatar
          singleSelector={false}
          width={600}
          onOpenChange={setDropdownOpen}
          onGroupChange={() => {}}
          onItemExpandedChange={(id, expanded) => {
            setExpandedElements((prev) =>
              expanded ? [id, ...prev] : prev.filter((item) => item !== id)
            )
          }}
          onSelect={(selection) => {
            const ids = selection.flatMap((entity) =>
              (entity.subItems ?? []).map((subItem) => String(subItem.subId))
            )
            setSelectedIds(ids)
          }}
        />

        {!dropdownOpen && (
          <F0Alert
            variant="neutral"
            title="Budget deductions"
            description="Direct, indirect, and salary costs of the selected training groups will be deducted from this budget."
          />
        )}
      </F0Box>
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
  const b = trainingBudgets.find((x) => x.id === budgetId)
  const [removeTarget, setRemoveTarget] =
    useState<TrainingBudgetMovement | null>(null)
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false)
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
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

  const selectedMovementIndex = selectedMovement
    ? movements.findIndex((movement) => movement.id === selectedMovement.id)
    : -1

  const selectMovementAt = (index: number) => {
    const movement = movements[index]
    if (movement) setSelectedMovement(movement)
  }

  const goToTrainingGroup = (m: TrainingBudgetMovement) => {
    go(setSearch, {
      view: "group",
      movementId: m.id,
    })
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
      secondaryActions: {
        expanded: 1,
        actions: () => {
          if (!b) return []
          const isArchived = b.status === "closed"
          return [
            {
              label: "Add training group",
              disabled: isArchived,
              onClick: () => setIsAddGroupOpen(true),
            },
            {
              label: "Export budget",
              icon: Upload,
              onClick: () => setIsExportOpen(true),
            },
          ]
        },
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
    <F0Box
      display="flex"
      flexDirection="column"
      gap="xl"
      padding="xl"
      paddingTop="lg"
    >
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
        <AmountWidget
          label="Available"
          value={fmtEur(available)}
          emphasize={available < 0 ? "negative" : "positive"}
        />
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
                    type: "status",
                    value: {
                      status: GROUP_STATUS_VARIANT[item.groupStatus],
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
                    type: "status",
                    value: {
                      status: PAYMENT_STATUS_VARIANT[item.paymentStatus],
                      label: PAYMENT_STATUS_LABEL[item.paymentStatus],
                    },
                  }),
                },
                {
                  label: "Legal entities",
                  id: "legalEntities",
                  render: (item) => {
                    const les = legalEntitiesForMovement(item, b)
                    if (les.length === 0) {
                      return { type: "text", value: "—" }
                    }
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
          currentMovements={movements}
          onClose={() => setIsAddGroupOpen(false)}
          onAdded={(movs) => setExtraMovements((prev) => [...prev, ...movs])}
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
        <GroupSidepanel
          movement={selectedMovement}
          budget={trainingBudgets.find(
            (b) => b.id === selectedMovement.budgetId
          )}
          position={selectedMovementIndex + 1}
          total={movements.length}
          hasPrevious={selectedMovementIndex > 0}
          hasNext={selectedMovementIndex < movements.length - 1}
          onPrevious={() => selectMovementAt(selectedMovementIndex - 1)}
          onNext={() => selectMovementAt(selectedMovementIndex + 1)}
          onClose={() => setSelectedMovement(null)}
          onGoToTrainingGroup={() => goToTrainingGroup(selectedMovement)}
          onOpenLegalEntity={(le) => {
            setSelectedLegalEntityCost({
              movement: selectedMovement,
              legalEntityId: le.id,
            })
          }}
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

function NewBudgetView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const [name, setName] = useState("")
  const [legalEntityId, setLegalEntityId] = useState(legalEntities[0]!.id)
  const [amount, setAmount] = useState<number | null>(10000)
  const [year, setYear] = useState<number | null>(2026)

  const createBudget = () => {
    const id = `bud-${Date.now()}`
    const total = amount ?? 0
    const currency = legalEntityCurrencyMap[legalEntityId] ?? "EUR"
    const newBudget: TrainingBudget = {
      id,
      name: name.trim() || "Untitled budget",
      year: year ?? new Date().getFullYear(),
      totalAmount: total,
      spentAmount: 0,
      pendingAmount: 0,
      remainingAmount: total,
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
  }

  return (
    <F0Dialog
      isOpen
      title="New training budget"
      description="Create a training budget and allocate groups from its detail page."
      onClose={() => go(setSearch, { view: "list", budgetId: null })}
      position="center"
      width="md"
      primaryAction={{
        label: "Create budget",
        icon: Add,
        onClick: createBudget,
      }}
      secondaryAction={{
        label: "Cancel",
        onClick: () => go(setSearch, { view: "list", budgetId: null }),
      }}
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Title"
          value={name}
          onChange={(value) => setName(value ?? "")}
          placeholder="e.g. Engineering 2026"
        />
        <Select<string>
          label="Legal entity"
          value={legalEntityId}
          onChange={(value: string) => setLegalEntityId(value)}
          options={legalEntities.map((le) => ({
            value: le.id,
            label: le.legalName,
          }))}
        />
        <div className="grid grid-cols-2 gap-4">
          <NumberInput
            label="Amount"
            value={amount}
            onChange={setAmount}
            min={0}
            locale="en-US"
          />
          <NumberInput
            label="Year"
            value={year}
            onChange={setYear}
            min={2024}
            locale="en-US"
          />
        </div>
      </div>
    </F0Dialog>
  )
}

// ── GROUP DETAIL VIEW (frame 7 of RFC) ──────────────────────────────────────
// Renders the Training group screen (ClassDetail equivalent) inside this
// prototype, so the "Go to training group" action from the Budget detail
// table never leaves /p/multi-entity-budget.

function GroupDetailView({
  movementId,
  budgetId,
  setSearch,
}: {
  movementId: string | null
  budgetId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const movement = movementId
    ? trainingBudgetMovements.find((m) => m.id === movementId)
    : null
  const training = movement
    ? trainings.find((t) => t.id === movement.trainingId)
    : null
  const classId = movement?.groupId ?? null

  if (!movement || !training || !classId) {
    return (
      <div className="text-f1-foreground-secondary flex items-center justify-center p-12">
        Training group not found.
      </div>
    )
  }

  const backToDetail = () =>
    go(setSearch, {
      view: "detail",
      budgetId,
      movementId: null,
    })

  return (
    <ClassDetail
      training={training}
      classId={classId}
      movement={movement}
      onBackToList={backToDetail}
      onBackToTraining={backToDetail}
      onBackToClasses={backToDetail}
    />
  )
}

// ── SIDEPANELS ──────────────────────────────────────────────────────────────

// Cost tab — frames 5 (toggle OFF) and 6 (toggle ON) of the Figma "Flow
// validation" section. Shows:
//   - Payment status select
//   - Total cost card (collapsible)
//   - Switch card "Costs by legal entity"
//   - When ON: collapsible row per legal entity, each opening a secondary
//     sidepanel (LegalEntityCostSidepanel) with the LE breakdown
function GroupSidepanelCostTab({
  movement,
  budget,
  onOpenLegalEntity,
}: {
  movement: TrainingBudgetMovement
  budget: TrainingBudget | undefined
  onOpenLegalEntity: (le: { id: string; legalName: string }) => void
}) {
  const toggle = useLegalEntityToggle()
  const les = legalEntitiesForMovement(movement, budget)
  const canSplit = les.length > 1
  const isOn = canSplit && toggle.isOn(movement.id)
  const totalCost = grossCostFromMovement(movement)
  const participants = participantsForGroup(movement.groupId)
  const leBreakdownMap = new Map(
    breakdownByLegalEntityFor(
      movement,
      participantsByLegalEntityForMovement(movement)
    ).map((b) => [b.legalEntityId, b])
  )
  const [openLeIds, setOpenLeIds] = useState<Set<string>>(
    () => new Set(les.slice(0, 1).map((le) => le.id))
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg" paddingX="md">
      <CostBreakdownList
        direct={directCostFromMovement(movement)}
        indirect={indirectCostFromMovement(movement)}
        salary={salaryCostFromMovement(movement)}
      />

      {/* Costs by legal entity switch card */}
      <div className="border-f1-border bg-f1-background flex items-start justify-between gap-3 rounded-xl border p-4">
        <div className="flex flex-col gap-0.5">
          <F0Text content="Costs by legal entity" variant="label" />
          <F0Text
            content="Track and manage all costs per legal entity"
            variant="small"
          />
        </div>
        <Switch
          checked={isOn}
          onCheckedChange={(v) => toggle.setOn(movement.id, v)}
          hideLabel
          title="Costs by legal entity"
          disabled={!canSplit}
        />
      </div>

      {/* Per-LE rows when ON */}
      {isOn && (
        <div className="flex flex-col gap-2">
          {les.map((le) => {
            const open = openLeIds.has(le.id)
            const breakdown = leBreakdownMap.get(le.id)
            const leTotal = breakdown
              ? breakdown.directCost +
                breakdown.indirectCost +
                breakdown.salaryCost
              : 0
            const leParticipants = participants.filter(
              (p) => legalEntityForEmployee(p.employeeId)?.id === le.id
            )
            return (
              <div
                key={le.id}
                className="border-f1-border bg-f1-background rounded-xl border"
              >
                <div className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenLeIds((prev) => {
                        const next = new Set(prev)
                        if (next.has(le.id)) next.delete(le.id)
                        else next.add(le.id)
                        return next
                      })
                    }
                    className="flex flex-1 items-center gap-2 text-left"
                  >
                    <span className="text-f1-foreground-secondary">
                      {open ? <ArrowDown /> : <ArrowRight />}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <F0Text content={le.legalName} variant="label" />
                      <F0Text
                        content={`${leParticipants.length} ${leParticipants.length === 1 ? "participant" : "participants"}`}
                        variant="small"
                      />
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onOpenLegalEntity(le)
                    }}
                    className="flex items-center gap-2"
                  >
                    <F0Text content={fmtEur(leTotal)} variant="label" />
                    <span className="text-f1-foreground-secondary">
                      <ExternalLink />
                    </span>
                  </button>
                </div>
                {open && breakdown && (
                  <div className="border-f1-border grid grid-cols-1 gap-3 border-t p-4 sm:grid-cols-3">
                    <NumberInput
                      label="Direct cost"
                      value={breakdown.directCost}
                      onChange={() => undefined}
                      disabled
                      locale="en-US"
                    />
                    <NumberInput
                      label="Indirect cost"
                      value={breakdown.indirectCost}
                      onChange={() => undefined}
                      disabled
                      locale="en-US"
                    />
                    <NumberInput
                      label="Salary cost"
                      value={breakdown.salaryCost}
                      onChange={() => undefined}
                      disabled
                      locale="en-US"
                    />
                  </div>
                )}
              </div>
            )
          })}

          {/* Footer summary card: per-LE totals + Total cost */}
          <div className="border-f1-border bg-f1-background mt-2 rounded-xl border p-4">
            <F0Text content="Cost breakdown" variant="label" />
            <div className="mt-2 flex flex-col gap-1">
              {les.map((le) => {
                const breakdown = leBreakdownMap.get(le.id)
                const leTotal = breakdown
                  ? breakdown.directCost +
                    breakdown.indirectCost +
                    breakdown.salaryCost
                  : 0
                return (
                  <div key={le.id} className="flex justify-between">
                    <F0Text content={le.legalName} variant="small" />
                    <F0Text content={fmtEur(leTotal)} variant="small" />
                  </div>
                )
              })}
            </div>
            <div className="border-f1-border mt-2 flex items-center justify-between border-t pt-2">
              <div className="flex flex-col gap-0.5">
                <F0Text content="Total cost" variant="label" />
                <F0Text
                  content="Gross cost = Direct + Indirect + Salary"
                  variant="small"
                />
              </div>
              <F0Heading
                as="h4"
                variant="heading"
                content={fmtEur(totalCost)}
              />
            </div>
          </div>
        </div>
      )}
    </F0Box>
  )
}

// Participants tab — list of trainees of the group, replicating the upstream
// ParticipantsTab columns (name + a secondary column). Upstream uses Team;
// here we use Status because f0compose fixtures have no teams.
function GroupSidepanelParticipantsTab({
  movement,
}: {
  movement: TrainingBudgetMovement
}) {
  const participants = participantsForGroup(movement.groupId)
  const source = useDataCollectionSource({
    filters: {},
    dataAdapter: {
      paginationType: "pages" as const,
      perPage: 50,
      fetchData: () => ({
        type: "pages" as const,
        records: participants,
        total: participants.length,
        perPage: 50,
        currentPage: 1,
        pagesCount: 1,
      }),
    },
  })
  return (
    <F0Box display="flex" flexDirection="column" paddingX="md">
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table" as const,
            options: {
              columns: [
                {
                  label: "Name",
                  render: (p) => ({
                    type: "person" as const,
                    value: {
                      firstName: p.employeeName.split(" ")[0] ?? "",
                      lastName: p.employeeName.split(" ").slice(1).join(" "),
                      src: p.employeeAvatar,
                    },
                  }),
                },
                {
                  label: "Status",
                  render: (p) => ({
                    type: "text" as const,
                    value: p.status,
                  }),
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function CostBreakdownList({
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
      <div className="border-f1-border-secondary bg-f1-background rounded-xl border">
        <div className="border-f1-border-secondary flex min-h-16 items-center justify-between gap-3 border-b px-4 py-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <F0Text content="Direct cost" variant="label" />
            <F0Text
              content="Course fees, venue rentals, and training materials"
              variant="small"
            />
          </div>
          <F0Text content={fmtEur(direct)} variant="label" />
        </div>
        <div className="border-f1-border-secondary flex min-h-16 items-center justify-between gap-3 border-b px-4 py-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <F0Text content="Indirect cost" variant="label" />
            <F0Text
              content="Administrative overhead and support costs"
              variant="small"
            />
          </div>
          <F0Text content={fmtEur(indirect)} variant="label" />
        </div>
        <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <F0Text content="Salary cost" variant="label" />
            <F0Text
              content="Cost of employees' time spent in training"
              variant="small"
            />
          </div>
          <F0Text content={fmtEur(salary)} variant="label" />
        </div>
      </div>
      <div className="border-f1-border-secondary border-t pt-4">
        <div className="border-f1-border-secondary bg-f1-background flex min-h-16 items-center justify-between gap-3 rounded-xl border px-4 py-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <F0Text content="Total cost" variant="label" />
            <F0Text
              content="Gross cost= Direct + Indirect + Salary"
              variant="small"
            />
          </div>
          <F0Text content={fmtEur(total)} variant="label" />
        </div>
      </div>
    </div>
  )
}

function GroupSidepanel({
  movement,
  budget,
  position,
  total,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
  onClose,
  onGoToTrainingGroup,
  onOpenLegalEntity,
}: {
  movement: TrainingBudgetMovement
  budget: TrainingBudget | undefined
  position: number
  total: number
  hasPrevious: boolean
  hasNext: boolean
  onPrevious: () => void
  onNext: () => void
  onClose: () => void
  onGoToTrainingGroup: () => void
  onOpenLegalEntity: (le: { id: string; legalName: string }) => void
}) {
  const [tab, setTab] = useState<"cost" | "participants">("cost")
  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="right"
      width="md"
      title={movement.groupName}
      description={movement.trainingName}
      otherActions={[
        {
          label: "Go to Training group",
          icon: ExternalLink,
          onClick: onGoToTrainingGroup,
        },
      ]}
      metadata={[
        {
          label: "Payment status",
          value: {
            type: "status" as const,
            label: PAYMENT_STATUS_LABEL[movement.paymentStatus],
            variant: PAYMENT_STATUS_VARIANT[movement.paymentStatus],
          },
        },
        {
          label: "Timeframe",
          value: {
            type: "text" as const,
            content: `${fmtDate(movement.startDate)}- ${fmtDate(movement.endDate)}`,
          },
        },
      ]}
      tabs={[
        { id: "cost", label: "Cost", onClick: () => setTab("cost") },
        {
          id: "participants",
          label: "Participants",
          onClick: () => setTab("participants"),
        },
      ]}
      activeTabId={tab}
      setActiveTabId={(id: string) => setTab(id as "cost" | "participants")}
      disableContentPadding
    >
      <div
        style={{
          position: "fixed",
          top: 25,
          right: 129,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: 4,
          pointerEvents: "auto",
        }}
      >
        <F0Button
          label="Previous group"
          icon={ChevronUp}
          hideLabel
          variant="outline"
          size="md"
          disabled={!hasPrevious}
          onClick={onPrevious}
        />
        <F0Button
          label="Next group"
          icon={ArrowDown}
          hideLabel
          variant="outline"
          size="md"
          disabled={!hasNext}
          onClick={onNext}
        />
      </div>
      <F0Box display="flex" justifyContent="end" paddingX="md" paddingY="sm">
        <F0Text
          variant="small"
          content={`${position}/${total} · ${PAYMENT_STATUS_LABEL[movement.paymentStatus]} · ${fmtDate(movement.startDate)}- ${fmtDate(movement.endDate)}`}
        />
      </F0Box>
      {tab === "cost" && (
        <GroupSidepanelCostTab
          movement={movement}
          budget={budget}
          onOpenLegalEntity={onOpenLegalEntity}
        />
      )}
      {tab === "participants" && (
        <GroupSidepanelParticipantsTab movement={movement} />
      )}
    </F0Dialog>
  )
}

// Frame 8 + 9 — secondary sidepanel that opens on top of the GroupSidepanel
// when the user clicks a legal-entity row in the Cost tab. Mirrors the
// GroupSidepanel layout (Cost + Participants tabs) but scoped to a single
// legal entity.
export function LegalEntityCostSidepanel({
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
  ).find((c) => c.legalEntityId === legalEntityId)
  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="right"
      width="md"
      title={le?.legalName ?? legalEntityId}
      description={movement.groupName}
      metadata={[
        {
          label: "Payment status",
          value: {
            type: "status" as const,
            label: PAYMENT_STATUS_LABEL[movement.paymentStatus],
            variant: PAYMENT_STATUS_VARIANT[movement.paymentStatus],
          },
        },
        {
          label: "Timeframe",
          value: {
            type: "text" as const,
            content: `${fmtDate(movement.startDate)}- ${fmtDate(movement.endDate)}`,
          },
        },
      ]}
      tabs={[
        { id: "cost", label: "Cost", onClick: () => setTab("cost") },
        {
          id: "participants",
          label: "Participants",
          onClick: () => setTab("participants"),
        },
      ]}
      activeTabId={tab}
      setActiveTabId={(id: string) => setTab(id as "cost" | "participants")}
      disableContentPadding
    >
      {tab === "cost" && (
        <F0Box display="flex" flexDirection="column" gap="lg" paddingX="md">
          <CostBreakdownList
            direct={breakdown?.directCost ?? 0}
            indirect={breakdown?.indirectCost ?? 0}
            salary={breakdown?.salaryCost ?? 0}
          />
        </F0Box>
      )}
      {tab === "participants" && (
        <LegalEntityParticipantsTab
          movement={movement}
          legalEntityId={legalEntityId}
        />
      )}
    </F0Dialog>
  )
}

// Participants tab of the LegalEntityCostSidepanel — uses OneDataCollection
// like the rest of the prototype, not raw HTML. Derives Hours completed and
// Salary cost per participant from synthetic data on the Employee.
function LegalEntityParticipantsTab({
  movement,
  legalEntityId,
}: {
  movement: TrainingBudgetMovement
  legalEntityId: string
}) {
  const rows = participantsForGroup(movement.groupId)
    .filter((p) => legalEntityForEmployee(p.employeeId)?.id === legalEntityId)
    .map((p) => ({
      id: p.id,
      employeeId: p.employeeId,
      employeeName: p.employeeName,
      employeeAvatar: p.employeeAvatar,
      hours: hoursCompletedForEmployee(p.employeeId, movement.groupId),
      salary: salaryCostForEmployeeInGroup(p.employeeId, movement.groupId),
    }))

  const source = useDataCollectionSource({
    filters: {},
    dataAdapter: {
      paginationType: "pages" as const,
      perPage: 50,
      fetchData: () => ({
        type: "pages" as const,
        records: rows,
        total: rows.length,
        perPage: 50,
        currentPage: 1,
        pagesCount: 1,
      }),
    },
  })

  return (
    <F0Box display="flex" flexDirection="column" paddingX="md">
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table" as const,
            options: {
              columns: [
                {
                  label: "Name",
                  render: (r) => ({
                    type: "person" as const,
                    value: {
                      firstName: r.employeeName.split(" ")[0] ?? "",
                      lastName: r.employeeName.split(" ").slice(1).join(" "),
                      src: r.employeeAvatar,
                    },
                  }),
                },
                {
                  label: "Hours completed",
                  render: (r) => ({
                    type: "text" as const,
                    value: `${r.hours}h`,
                  }),
                },
                {
                  label: "Salary cost",
                  render: (r) => ({
                    type: "text" as const,
                    value: fmtEur(r.salary),
                  }),
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

// ── ROOT ────────────────────────────────────────────────────────────────────

export default function MultiEntityBudget() {
  const [params, setSearch] = useSearchParams()
  const view = (params.get("view") as View | null) ?? "list"
  const budgetId = params.get("budgetId")
  const movementId = params.get("movementId")

  // Shared "Costs by legal entity" toggle state per movement. Persisted at
  // the prototype root so the sidepanel and Group detail Costs tab stay in
  // sync. Initialized lazily from the fixture (ON when a breakdown exists).
  const [toggleByMovement, setToggleByMovement] = useState<
    Record<string, boolean>
  >(() =>
    Object.fromEntries(
      trainingBudgetMovements.map((m) => [m.id, defaultToggleFor(m)])
    )
  )
  const toggleValue = useMemo(
    () => ({
      isOn: (id: string) => toggleByMovement[id] ?? false,
      setOn: (id: string, on: boolean) =>
        setToggleByMovement((prev) =>
          prev[id] === on ? prev : { ...prev, [id]: on }
        ),
    }),
    [toggleByMovement]
  )

  const currentBudget = budgetId
    ? trainingBudgets.find((b) => b.id === budgetId)
    : undefined
  const currentMovement = movementId
    ? trainingBudgetMovements.find((m) => m.id === movementId)
    : undefined
  const movementBudget = currentMovement
    ? trainingBudgets.find((b) => b.id === currentMovement.budgetId)
    : undefined

  const breadcrumbs =
    view === "list"
      ? [
          {
            id: "list",
            label: "Trainings budgets",
          },
        ]
      : view === "group"
        ? [
            {
              id: "list",
              label: "Trainings budgets",
              href: "/p/multi-entity-budget",
            },
            {
              id: "budget",
              label: movementBudget?.name ?? "Budget",
              href: movementBudget
                ? `/p/multi-entity-budget?view=detail&budgetId=${movementBudget.id}`
                : "/p/multi-entity-budget",
            },
            {
              id: "group",
              label: currentMovement?.groupName ?? "Training group",
            },
          ]
        : view === "new"
          ? [
              {
                id: "list",
                label: "Trainings budgets",
                href: "/p/multi-entity-budget",
              },
              { id: "current", label: "New training budget" },
            ]
          : [
              {
                id: "list",
                label: "Trainings budgets",
                href: "/p/multi-entity-budget",
              },
              {
                id: "current",
                label: currentBudget?.name ?? "Budget detail",
              },
            ]

  if (view === "group") {
    return (
      <LegalEntityToggleProvider value={toggleValue}>
        <GroupDetailView
          movementId={movementId}
          budgetId={budgetId}
          setSearch={setSearch}
        />
      </LegalEntityToggleProvider>
    )
  }

  return (
    <LegalEntityToggleProvider value={toggleValue}>
      <Page
        header={
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Trainings",
              href: "/p/multi-entity-budget",
            }}
            breadcrumbs={breadcrumbs}
          />
        }
      >
        {view === "list" && <ListView setSearch={setSearch} />}
        {view === "detail" && (
          <DetailView budgetId={budgetId} setSearch={setSearch} />
        )}
        {view === "new" && <NewBudgetView setSearch={setSearch} />}
      </Page>
    </LegalEntityToggleProvider>
  )
}
