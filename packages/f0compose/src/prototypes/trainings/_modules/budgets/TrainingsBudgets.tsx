import {
  F0Alert,
  F0AvatarIcon,
  F0Box,
  F0Button,
  F0Dialog,
  F0Icon,
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
  ChevronUp,
  Delete,
  DollarBill,
  ExternalLink,
  InProgressTask,
  Office,
  Pencil,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import type {
  Training,
  TrainingBudget,
  TrainingBudgetMovement,
} from "@/fixtures"

import {
  breakdownByLegalEntityFor,
  findLegalEntity,
  findEmployee,
  findTeam,
  grossCostFromMovement,
  salaryCostForEmployeeInGroup,
  legalEntities,
  legalEntityCurrencyMap,
  legalEntityForEmployee,
  trainingBudgetMovements,
  movementsForBudget,
  trainingBudgets,
  trainingParticipants,
  trainings,
} from "@/fixtures"

import type { PrototypeMeta } from "../../../types"

import {
  setCostsByLegalEntityToggle,
  useCostsByLegalEntityToggle,
} from "../../costsByLegalEntityToggleStore"
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

const GROUP_STATUS_LABEL: Record<
  TrainingBudgetMovement["groupStatus"],
  string
> = {
  planned: "Planned",
  ongoing: "Ongoing",
  completed: "Finished",
}

// F0TagStatus variant per group status (Figma: pill rellena, status-tag cell)
const GROUP_STATUS_VARIANT: Record<
  TrainingBudgetMovement["groupStatus"],
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  planned: "info",
  ongoing: "positive",
  completed: "positive",
}

const PAYMENT_STATUS_LABEL: Record<
  TrainingBudgetMovement["paymentStatus"],
  string
> = {
  pending: "Pending",
  spent: "Paid",
}

const PAYMENT_STATUS_VARIANT: Record<
  TrainingBudgetMovement["paymentStatus"],
  "neutral" | "info" | "positive" | "warning" | "critical"
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

// KPI format: "50,000.00 €" (amount + space + symbol, 2 decimals)
const fmtEurAmount = (n: number) =>
  `${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n)} €`

// Table cell format: "€10,000" (€ prefix, no decimals)
const fmtEurCompact = (n: number) =>
  `€${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)}`

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

function participantCountForMovement(movement: TrainingBudgetMovement) {
  const participants = participantsForGroup(movement.groupId)
  return participants.length > 0
    ? participants.length
    : movement.participantsCount
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

  if (counts.size === 0 && movement.costsByLegalEntity) {
    return movement.costsByLegalEntity.map((cost) => ({
      legalEntityId: cost.legalEntityId,
      count: cost.participantsCount,
    }))
  }

  return Array.from(counts.entries()).map(([legalEntityId, count]) => ({
    legalEntityId,
    count,
  }))
}

function breakdownByLegalEntityWithRealParticipants(
  movement: TrainingBudgetMovement
) {
  const participantsByLegalEntity =
    participantsByLegalEntityForMovement(movement)
  const countsByLegalEntity = new Map(
    participantsByLegalEntity.map(({ legalEntityId, count }) => [
      legalEntityId,
      count,
    ])
  )

  return breakdownByLegalEntityFor(movement, participantsByLegalEntity).map(
    (breakdown) => ({
      ...breakdown,
      participantsCount:
        countsByLegalEntity.get(breakdown.legalEntityId) ??
        breakdown.participantsCount,
    })
  )
}

function legalEntitiesForMovement(movement: TrainingBudgetMovement) {
  return participantsByLegalEntityForMovement(movement)
    .map(({ legalEntityId }) => findLegalEntity(legalEntityId))
    .filter((le): le is NonNullable<typeof le> => Boolean(le))
}

type BudgetChangeRow = {
  id: string
  groupName: string
  changeType: "participants" | "legal_entity" | "salary"
  impactAmount: number | null
}

const BUDGET_CHANGE_LABEL: Record<BudgetChangeRow["changeType"], string> = {
  participants: "Participants changed",
  legal_entity: "Legal entity changed",
  salary: "Salary data changed",
}

const BUDGET_CHANGE_VARIANT: Record<
  BudgetChangeRow["changeType"],
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  participants: "neutral",
  legal_entity: "neutral",
  salary: "neutral",
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
  const total = direct + indirect + salary
  if (total > 0) return { direct, indirect, salary, total }

  const participants = participantsForGroup(classId)
  const fallbackSalary = participants.reduce(
    (sum, participant) =>
      sum + salaryCostForEmployeeInGroup(participant.employeeId, classId),
    0
  )
  const fallbackDirect = Math.max(1200, participants.length * 650)
  const fallbackIndirect = Math.round(fallbackDirect * 0.15 * 100) / 100
  const roundedSalary = Math.round(fallbackSalary * 100) / 100
  return {
    direct: fallbackDirect,
    indirect: fallbackIndirect,
    salary: roundedSalary,
    total: fallbackDirect + fallbackIndirect + roundedSalary,
  }
}

function calculateAllocated(selectedTrainingClassIds: string[]): number {
  let total = 0
  for (const id of selectedTrainingClassIds) {
    const training = trainings.find((t) => t.classes.some((c) => c.id === id))
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

function AmountWidget({ label, value }: { label: string; value: string }) {
  return <Widget summaries={[{ label, value }]} />
}

function EditBudgetDialog({
  budget,
  onClose,
}: {
  budget: TrainingBudget
  onClose: () => void
}) {
  // Mirrors upstream `EditTrainingBudgetDialog` (modules/trainings/components/
  // Budgets/EditTrainingBudgetDialog/index.tsx): a right-positioned F0Dialog
  // (side panel) titled "Budget information", with Legal entity (disabled),
  // Title, Description, Start/End date in the same row, Amount with currency
  // unit, and an Archive block at the bottom. Labels match en.json keys
  // budgets.forms.edit_training_budget.* and budgets.forms.edit_budget.*.
  const [name, setName] = useState(budget.name)
  const [description, setDescription] = useState(budget.description ?? "")
  const [amount, setAmount] = useState<number | null>(budget.totalAmount)
  const [startDate, setStartDate] = useState<string>(
    budget.startDate ?? `${budget.year}-01-01`
  )
  const [endDate, setEndDate] = useState<string>(
    budget.endDate ?? `${budget.year}-12-31`
  )
  const [archived, setArchived] = useState(budget.status === "closed")

  const legalEntityLabel = budget.legalEntityId
    ? (legalEntities.find((le) => le.id === budget.legalEntityId)?.legalName ??
      "—")
    : "—"

  const isArchived = archived
  const startAfterEnd = startDate && endDate && startDate > endDate

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="right"
      title="Budget information"
      primaryAction={{
        label: "Save",
        disabled: !!startAfterEnd,
        onClick: () => {
          budget.name = name || budget.name
          budget.description = description || budget.description
          if (typeof amount === "number" && amount > 0) {
            budget.totalAmount = amount
            budget.remainingAmount = Math.max(
              0,
              amount - (budget.spentAmount + budget.pendingAmount)
            )
          }
          budget.startDate = startDate
          budget.endDate = endDate
          budget.status = archived ? "closed" : "active"
          onClose()
        },
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        <Input
          label="Legal entity"
          value={legalEntityLabel}
          onChange={() => undefined}
          disabled
        />
        <Input
          label="Title"
          value={name}
          onChange={(v) => setName(v ?? "")}
          placeholder="Enter the budget title"
          disabled={isArchived}
        />
        <Textarea
          label="Description"
          value={description}
          onChange={(v) => setDescription(v ?? "")}
          rows={3}
          placeholder="Write budget description"
          disabled={isArchived}
        />
        <F0Box display="flex" flexDirection="row" gap="md">
          <Input
            label="Start date"
            type="date"
            value={startDate}
            onChange={(v) => setStartDate(v ?? "")}
            disabled={isArchived}
          />
          <Input
            label="End date"
            type="date"
            value={endDate}
            onChange={(v) => setEndDate(v ?? "")}
            disabled={isArchived}
          />
        </F0Box>
        {startAfterEnd && (
          <F0Text
            variant="small"
            content="Start date cannot be after end date"
          />
        )}
        <NumberInput
          label="Amount"
          value={amount}
          onChange={(v) => setAmount(v)}
          locale="en-US"
          units={budget.currency}
          disabled={isArchived}
          hint="This amount will decrease as training groups are assigned."
        />
        <F0Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="between"
          padding="lg"
          borderRadius="md"
          gap="md"
          border="default"
          borderColor="secondary"
        >
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text variant="label" content="Archive this budget" />
            <F0Text
              variant="small"
              content={
                archived
                  ? "This budget is currently archived. Restore it to enable employees to add further expenses"
                  : "Archiving this budget will prevent employees from adding new training groups. You can still view its history."
              }
            />
          </F0Box>
          <Switch checked={archived} onCheckedChange={setArchived} />
        </F0Box>
      </F0Box>
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
  const allGroupOptions = useMemo(() => {
    const taken = new Set(currentMovements.map((movement) => movement.groupId))
    const options: Array<{
      value: string
      label: string
      trainingId: string
      cost: number
    }> = []

    for (const training of trainings) {
      for (const klass of training.classes) {
        if (taken.has(klass.id)) continue
        const cost = classTotalCost(training, klass.id)
        options.push({
          value: klass.id,
          label: `${training.name} · ${klass.name}`,
          trainingId: training.id,
          cost: cost.total,
        })
      }
    }

    return options
  }, [currentMovements])

  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
  const [selectedGroup, setSelectedGroup] = useState("all")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const selectedOptions = allGroupOptions.filter((option) =>
    selectedIds.includes(option.value)
  )
  const trainingEntities = useMemo<EntitySelectEntity[]>(() => {
    const entities: EntitySelectEntity[] = []

    for (const training of trainings) {
      const subItems = allGroupOptions
        .filter((option) => option.trainingId === training.id)
        .map((option) => ({
          subId: option.value,
          subName: `${training.classes.find((klass) => klass.id === option.value)?.name ?? option.label} · ${fmtEur(option.cost)}`,
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

  const selectedCost = selectedOptions.reduce(
    (sum, option) => sum + option.cost,
    0
  )
  const allocatedNow = currentMovements.reduce(
    (sum, movement) => sum + grossCostFromMovement(movement),
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
      title="Add training group"
      description="Add a training group so its costs are deducted from this budget."
      primaryAction={
        dropdownOpen
          ? undefined
          : {
              label: "Add",
              disabled: selectedOptions.length === 0,
              onClick: () => {
                const movements: TrainingBudgetMovement[] = []
                for (const option of selectedOptions) {
                  const training = trainings.find(
                    (item) => item.id === option.trainingId
                  )
                  const klass = training?.classes.find(
                    (item) => item.id === option.value
                  )
                  const cost =
                    training && klass
                      ? classTotalCost(training, klass.id)
                      : null
                  if (!training || !klass || !cost) continue
                  movements.push({
                    id: `mov-${Date.now()}-${klass.id}`,
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
                  })
                }
                onAdded(movements)
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

        {allGroupOptions.length === 0 ? (
          <F0Alert
            variant="neutral"
            title="No training groups available"
            description="All eligible training groups are already assigned to this budget."
          />
        ) : (
          <EntitySelect
            label="Training group"
            placeholder="e.g., January group"
            entities={trainingEntities}
            groups={[{ label: "All", value: "all" }]}
            selectedGroup={selectedGroup}
            selectedEntities={selectedEntities}
            selectedItemsCopy="training groups selected"
            searchPlaceholder="Search"
            selectAllLabel="Select all"
            clearLabel="Clear"
            selectedLabel="selected"
            notFoundTitle="No training groups found"
            notFoundSubtitle=""
            hiddenAvatar
            singleSelector={false}
            width={600}
            onOpenChange={setDropdownOpen}
            onGroupChange={(value) => setSelectedGroup(value ?? "all")}
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
        )}
      </F0Box>
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
  const [isChangesOpen, setIsChangesOpen] = useState(false)
  const [reviewedChanges, setReviewedChanges] = useState(false)
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
  const movementsVersion = movements.map((movement) => movement.id).join("-")

  // Group movements by trainingId so the table can render a nested structure:
  // the parent row represents the training (with aggregated cost / participants
  // / earliest date) and its children are the actual training groups.
  type TrainingRow = TrainingBudgetMovement & { isParent?: boolean }

  const trainingParents = useMemo<TrainingRow[]>(() => {
    const byTraining = new Map<string, TrainingBudgetMovement[]>()
    for (const m of movements) {
      const arr = byTraining.get(m.trainingId) ?? []
      arr.push(m)
      byTraining.set(m.trainingId, arr)
    }
    const parents: TrainingRow[] = []
    for (const [trainingId, list] of byTraining) {
      const first = list[0]
      const totalCents = list.reduce(
        (s, m) => s + Math.round(grossCostFromMovement(m) * 100),
        0
      )
      const participants = list.reduce(
        (s, m) => s + participantCountForMovement(m),
        0
      )
      const startDate =
        list
          .map((m) => m.startDate)
          .filter((d): d is string => !!d)
          .sort()[0] ?? null
      const endDate =
        list
          .map((m) => m.endDate)
          .filter((d): d is string => !!d)
          .sort()
          .slice(-1)[0] ?? null
      parents.push({
        ...first,
        id: `trn:${trainingId}`,
        isParent: true,
        groupName: first.trainingName,
        amountCents: totalCents,
        participantsCount: participants,
        startDate,
        endDate,
      })
    }
    return parents.sort((a, x) => a.trainingName.localeCompare(x.trainingName))
  }, [movements])

  const movementNavigation = useMemo(
    () =>
      trainingParents.flatMap((parent) =>
        movements
          .filter((m) => m.trainingId === parent.trainingId)
          .slice()
          .sort((a, x) => (a.startDate ?? "").localeCompare(x.startDate ?? ""))
      ),
    [movements, trainingParents]
  )
  const changedMovements = movements.filter((movement) =>
    Boolean(movement.costUpdateNotice)
  )
  const hasUnreviewedChanges =
    Boolean(b?.costUpdateNotice) && changedMovements.length > 0 && !reviewedChanges

  const goToTrainingGroup = (m: TrainingBudgetMovement) => {
    navigate(`/p/trainings?training=${m.trainingId}&class=${m.groupId}`)
  }

  const selectedMovementIndex = selectedMovement
    ? movementNavigation.findIndex((m) => m.id === selectedMovement.id)
    : -1

  const selectMovementAt = (index: number) => {
    const movement = movementNavigation[index]
    if (movement) setSelectedMovement(movement)
  }

  const source = useDataCollectionSource<TrainingRow>(
    {
      search: { enabled: true, sync: true },
      totalItemSummary: (totalItems) =>
        `${b?.peopleCount ?? totalItems} ${(b?.peopleCount ?? totalItems) === 1 ? "person" : "people"}`,
      presets: [
        { label: "Pending", filter: { paymentStatus: ["pending"] } },
        { label: "Paid", filter: { paymentStatus: ["spent"] } },
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
              { label: "Paid", value: "spent" },
            ],
          },
        },
      },
      itemsWithChildren: (item) =>
        !!item.isParent &&
        movements.some((m) => m.trainingId === item.trainingId),
      childrenCount: ({ item }) =>
        item.isParent
          ? movements.filter((m) => m.trainingId === item.trainingId).length
          : undefined,
      fetchChildren: ({ item }) => ({
        type: "basic" as const,
        records: movements
          .filter((m) => m.trainingId === item.trainingId)
          .slice()
          .sort((a, x) => (a.startDate ?? "").localeCompare(x.startDate ?? "")),
      }),
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

          // Match on parent rows. A parent matches when any of its
          // children matches. The table will then expand to surface the
          // child rows that triggered the match.
          const parents = trainingParents.filter((p) => {
            const children = movements.filter(
              (m) => m.trainingId === p.trainingId
            )
            const any = children.some((m) => {
              if (
                term !== "" &&
                !m.groupName.toLowerCase().includes(term) &&
                !m.trainingName.toLowerCase().includes(term)
              )
                return false
              if (
                groupStatus.length > 0 &&
                !groupStatus.includes(m.groupStatus)
              )
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
            return any
          })

          const perPage = pagination?.perPage ?? 50
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = parents.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = parents.slice(start, start + perPage)
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
          if (!b) return undefined
          const isArchived = b.status === "closed"
          return [
            {
              label: "Add training group",
              disabled: isArchived,
              onClick: () => setIsAddGroupOpen(true),
            },
            {
              label: "Export budget",
              description: "Download a CSV with all budget movements",
              icon: Upload,
              onClick: () => setIsExportOpen(true),
            },
          ]
        },
      },
      itemOnClick: (item) =>
        item.isParent ? () => {} : () => setSelectedMovement(item),
      itemActions: (item) =>
        item.isParent
          ? [
              {
                label: "Go to Training",
                icon: ExternalLink,
                onClick: () => goToTrainingGroup(item),
              },
            ]
          : [
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
    [movements, trainingParents, b]
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
    .reduce((s, m) => s + grossCostFromMovement(m), 0)
  const pending = movements
    .filter((m) => m.paymentStatus === "pending")
    .reduce((s, m) => s + grossCostFromMovement(m), 0)
  const committed = spent + pending
  const available = total - committed

  const { status } = calculateBudgetStatus(committed, total)
  const isOver = status === "over_budget" && total > 0
  const isAtRisk = status === "budget_risk"
  const exceedAmount = isOver ? Math.abs(available) : 0
  const exceedPct = total > 0 ? (committed * 100) / total : 0
  const isArchived = b.status === "closed"

  // Status pill shown in the header next to the title. When the budget is
  // archived/closed we surface "Archived" neutral; otherwise we surface the
  // computed health (within budget / at risk / over budget).
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

  // Lifecycle status (active / draft / closed) — distinct from the health
  // pill above. Surfaced inside the metadata row as a dot-tag, matching the
  // production Figma for the budget detail header.
  const lifecycleLabel =
    b.status === "active"
      ? "Active"
      : b.status === "draft"
        ? "Draft"
        : "Archived"
  const lifecycleColor: "viridian" | "yellow" | "smoke" =
    b.status === "active"
      ? "viridian"
      : b.status === "draft"
        ? "yellow"
        : "smoke"

  // Number of distinct trainings currently allocated to this budget.
  const groupsCount = new Set(movements.map((m) => m.trainingId)).size
  // Start date of the budget period. Falls back to Jan 1st of `year` when the
  // fixture doesn't define it, so existing budgets keep rendering.
  const startDateIso = b.startDate ?? `${b.year}-01-01`

  return (
    <div>
      <F0Box display="flex" flexDirection="column" gap="xl">
        <ResourceHeader
          title={b.name}
          description={b.description}
          status={headerStatus}
          metadata={[
            {
              label: "Budget type",
              value: { type: "dot-tag", label: "Training", color: "malibu" },
            },
            {
              label: "Date",
              value: { type: "text", content: fmtDate(startDateIso) },
            },
            {
              label: "Status",
              value: {
                type: "dot-tag",
                label: lifecycleLabel,
                color: lifecycleColor,
              },
            },
            {
              label: "Groups",
              value: { type: "text", content: String(groupsCount) },
            },
          ]}
          secondaryActions={[
            {
              label: "Edit budget",
              icon: Pencil,
              onClick: () => setIsEditOpen(true),
            },
          ]}
        />

        {isArchived && (
          <div className="px-6">
            <F0Alert
              variant="warning"
              title="Archived budget"
              description="This budget is in read-only mode. Adding or removing groups is disabled unless the budget is reactivated."
            />
          </div>
        )}

        {hasUnreviewedChanges && b.costUpdateNotice && (
          <div className="px-6">
            <F0Alert
              variant="warning"
              title={b.costUpdateNotice.title}
              description={b.costUpdateNotice.description}
              action={{
                label: "Review changes",
                onClick: () => setIsChangesOpen(true),
              }}
            />
          </div>
        )}

        {isOver && (
          <div className="px-6">
            <F0Alert
              variant="critical"
              title="Over budget"
              description={`Budget exceeded by ${fmtEur(exceedAmount)} (${exceedPct.toFixed(2)}%).`}
            />
          </div>
        )}

        {isAtRisk && !isOver && (
          <div className="px-6">
            <F0Alert
              variant="warning"
              title="Budget at risk"
              description="Budget is at risk. Less than 10% available."
            />
          </div>
        )}

        <div className="mb-6 grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <AmountWidget label="Total budget" value={fmtEurAmount(total)} />
          <AmountWidget label="Allocated" value={fmtEurAmount(committed)} />
          <AmountWidget label="Spent" value={fmtEurAmount(spent)} />
          <AmountWidget label="Available" value={fmtEurAmount(available)} />
        </div>

        <OneDataCollection
          key={movementsVersion}
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
                    width: 283,
                    render: (item) => ({
                      type: "text",
                      value: item.isParent ? item.trainingName : item.groupName,
                    }),
                  },
                  {
                    label: "Group status",
                    id: "groupStatus",
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : {
                            type: "status",
                            value: {
                              status: GROUP_STATUS_VARIANT[item.groupStatus],
                              label: GROUP_STATUS_LABEL[item.groupStatus],
                            },
                          },
                  },
                  {
                    label: "Start date",
                    id: "startDate",
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : {
                            type: "text",
                            value: fmtNumericDate(item.startDate),
                          },
                  },
                  {
                    label: "End date",
                    id: "endDate",
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : { type: "text", value: fmtNumericDate(item.endDate) },
                  },
                  {
                    label: "Cost",
                    id: "amount",
                    align: "right" as const,
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : {
                            type: "text",
                            value: fmtEurCompact(grossCostFromMovement(item)),
                          },
                  },
                  {
                    label: "Cost / participant",
                    id: "costPerParticipant",
                    align: "right" as const,
                    width: 136,
                    render: (item) => {
                      if (item.isParent) return { type: "text", value: "" }
                      const participantCount = participantCountForMovement(item)
                      return {
                        type: "text",
                        value:
                          participantCount > 0
                            ? fmtEurCompact(
                                grossCostFromMovement(item) / participantCount
                              )
                            : "-",
                      }
                    },
                  },
                  {
                    label: "Provider",
                    id: "provider",
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : { type: "text", value: item.trainingProvider },
                  },
                  {
                    label: "Payment status",
                    id: "paymentStatus",
                    width: 128,
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : {
                            type: "status",
                            value: {
                              status:
                                PAYMENT_STATUS_VARIANT[item.paymentStatus],
                              label: PAYMENT_STATUS_LABEL[item.paymentStatus],
                            },
                          },
                  },
                  {
                    label: "Legal entities",
                    id: "legalEntities",
                    width: 180,
                    render: (item) => {
                      if (item.isParent) return { type: "text", value: "" }
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
                    render: (item) =>
                      item.isParent
                        ? { type: "text", value: "" }
                        : {
                            type: "text",
                            value: String(participantCountForMovement(item)),
                          },
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
            currentMovements={movements}
            onAdded={(newMovements) =>
              setExtraMovements((prev) => [...prev, ...newMovements])
            }
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

        {isChangesOpen && (
          <BudgetChangesDialog
            movements={changedMovements}
            onOpenGroup={(movement) => {
              setSelectedMovement(movement)
              setIsChangesOpen(false)
            }}
            onMarkReviewed={() => {
              setReviewedChanges(true)
              setIsChangesOpen(false)
            }}
            onClose={() => setIsChangesOpen(false)}
          />
        )}

        {selectedMovement && (
          <TrainingGroupCostSidepanel
            movement={selectedMovement}
            hasPrevious={selectedMovementIndex > 0}
            hasNext={selectedMovementIndex < movementNavigation.length - 1}
            onPrevious={() => selectMovementAt(selectedMovementIndex - 1)}
            onNext={() => selectMovementAt(selectedMovementIndex + 1)}
            onGoToGroup={() => goToTrainingGroup(selectedMovement)}
            onClose={() => setSelectedMovement(null)}
          />
        )}
      </F0Box>
    </div>
  )
}

function TrainingGroupCostSidepanel({
  movement,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
  onGoToGroup,
  onClose,
}: {
  movement: TrainingBudgetMovement
  hasPrevious: boolean
  hasNext: boolean
  onPrevious: () => void
  onNext: () => void
  onGoToGroup: () => void
  onClose: () => void
}) {
  const [activeTab, setActiveTab] = useState<"cost" | "participants">("cost")
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
          onClick: onGoToGroup,
        },
      ]}
      tabs={[
        {
          id: "cost",
          label: "Cost",
          onClick: () => setActiveTab("cost"),
        },
        {
          id: "participants",
          label: "Participants",
          onClick: () => setActiveTab("participants"),
        },
      ]}
      activeTabId={activeTab}
      setActiveTabId={(id: string) =>
        setActiveTab(id as "cost" | "participants")
      }
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
      {activeTab === "cost" ? (
        <GroupSidepanelCostTab movement={movement} />
      ) : (
        <GroupSidepanelParticipantsTab movement={movement} />
      )}
    </F0Dialog>
  )
}

function BudgetChangesDialog({
  movements,
  onOpenGroup,
  onMarkReviewed,
  onClose,
}: {
  movements: TrainingBudgetMovement[]
  onOpenGroup: (movement: TrainingBudgetMovement) => void
  onMarkReviewed: () => void
  onClose: () => void
}) {
  const rows: BudgetChangeRow[] = movements.map((movement) => ({
    id: movement.id,
    groupName: movement.groupName,
    changeType: movement.costUpdateNotice?.change?.includes("participant")
      ? "participants"
      : movement.costUpdateNotice?.change?.includes("Legal")
        ? "legal_entity"
        : "salary",
    impactAmount:
      movement.costUpdateNotice?.impact?.startsWith("+") &&
      movement.costUpdateNotice.impact.includes("€")
        ? Number(
            movement.costUpdateNotice.impact
              .replace("+", "")
              .replace("€", "")
              .replace(/,/g, "")
              .trim()
          )
        : null,
  }))

  const source = useDataCollectionSource<BudgetChangeRow>(
    {
      totalItemSummary: (totalItems) =>
        `${totalItems} ${totalItems === 1 ? "group" : "groups"} changed`,
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: () => ({
          type: "pages" as const,
          records: rows,
          total: rows.length,
          perPage: 20,
          currentPage: 1,
          pagesCount: 1,
        }),
      },
      itemActions: (row) => {
        const movement = movements.find((item) => item.id === row.id)
        return movement
          ? [
              {
                label: "Open group impact",
                icon: ExternalLink,
                onClick: () => onOpenGroup(movement),
              },
            ]
          : []
      },
    },
    [rows, movements]
  )

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="right"
      width="md"
      title="Changes since last review"
      primaryAction={{
        label: "Mark as reviewed",
        onClick: onMarkReviewed,
      }}
      secondaryAction={{
        label: "Close",
        onClick: onClose,
      }}
      disableContentPadding
    >
      <F0Box padding="lg" display="flex" flexDirection="column" gap="xl">
        <F0Text
          variant="description"
          content="These changes explain why the budget numbers moved since the last review. Current figures already include them."
        />
        <OneDataCollection
          id="trainings/budgets/review-changes/v1"
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Training group",
                    id: "groupName",
                    render: (row) => ({ type: "text", value: row.groupName }),
                  },
                  {
                    label: "Change type",
                    id: "changeType",
                    render: (row) => ({
                      type: "status",
                      value: {
                        status: BUDGET_CHANGE_VARIANT[row.changeType],
                        label: BUDGET_CHANGE_LABEL[row.changeType],
                      },
                    }),
                  },
                  {
                    label: "Impact",
                    id: "impact",
                    align: "right" as const,
                    render: (row) => ({
                      type: "text",
                      value:
                        row.impactAmount === null
                          ? "No total change"
                          : `+${fmtEurAmount(row.impactAmount)}`,
                    }),
                  },
                ],
              },
            },
          ]}
        />
      </F0Box>
    </F0Dialog>
  )
}

function GroupSidepanelCostTab({
  movement,
}: {
  movement: TrainingBudgetMovement
}) {
  const les = legalEntitiesForMovement(movement)
  const hasMultipleLEs = les.length > 1
  const showByLegalEntity = useCostsByLegalEntityToggle(
    movement.groupId,
    hasMultipleLEs
  )
  const [openLeId, setOpenLeId] = useState<string | null>(les[0]?.id ?? null)

  const breakdownMap = new Map(
    breakdownByLegalEntityWithRealParticipants(movement).map((cost) => [
      cost.legalEntityId,
      cost,
    ])
  )
  const grossCost = grossCostFromMovement(movement)

  return (
    <div className="flex flex-col gap-4 px-5 py-4">
      {/* InputSelect Payment status — node 5033:79904 */}
      <div className="flex flex-col gap-2">
        <span className="text-f1-foreground-secondary text-[14px] leading-[20px] font-medium tracking-[-0.07px]">
          Payment status
        </span>
        <button
          type="button"
          className="border-f1-border bg-f1-background flex h-10 items-center gap-2 rounded-xl border border-solid pr-2 pl-3"
        >
          <span className="text-f1-foreground flex-1 text-left text-[14px] leading-[20px] tracking-[-0.07px]">
            {movement.paymentStatus === "spent" ? "Paid" : "Pending"}
          </span>
          <F0Icon icon={ArrowDown} size="sm" color="secondary" />
        </button>
      </div>

      {/* Total cost grid — node 5033:79675 (header sticky + card) */}
      <div className="flex flex-col">
        <div className="flex h-[50px] items-center py-3">
          <span className="text-f1-foreground text-[14px] leading-[20px] font-semibold tracking-[-0.07px]">
            Total cost
          </span>
        </div>
        <div className="border-f1-border bg-f1-background flex h-16 items-center gap-2.5 overflow-hidden rounded-xl border border-solid p-3">
          <F0AvatarIcon size="lg" icon={Office} />
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <span className="text-f1-foreground text-[14px] leading-[20px] font-medium tracking-[-0.07px]">
              Total cost
            </span>
            <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
              {participantCountForMovement(movement)} participants
            </span>
          </div>
          <span className="text-f1-foreground text-[14px] leading-[20px] font-bold tracking-[-0.07px]">
            {fmtFigmaEur(grossCost)}
          </span>
          <F0Icon icon={ArrowDown} size="sm" color="secondary" />
        </div>
      </div>

      {/* Costs by legal entity outer wrapper — node 5033:79687 */}
      <div className="border-f1-border bg-f1-background flex flex-col gap-6 rounded-xl border border-solid px-2 py-4">
        {/* Toggle row card — node 5033:79689 (NO border, bg white) */}
        <div className="bg-f1-background flex items-center gap-2.5 overflow-hidden rounded-xl p-3">
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <span className="text-f1-foreground text-[14px] leading-[20px] font-medium tracking-[-0.07px]">
              Costs by legal entity
            </span>
            <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
              Track and manage all costs per legal entity
            </span>
          </div>
          <Switch
            title="Costs by legal entity"
            id={`budget-sidepanel-costs-by-legal-entity-${movement.id}`}
            hideLabel
            checked={showByLegalEntity}
            onCheckedChange={(checked) =>
              setCostsByLegalEntityToggle(movement.groupId, checked)
            }
            disabled={!hasMultipleLEs}
          />
        </div>

        {/* Inner cards wrapper — node 5033:79690 (px-4, gap-6) */}
        {showByLegalEntity && hasMultipleLEs && (
          <div className="flex flex-col gap-6 px-4">
            {les.map((le) => {
              const breakdown = breakdownMap.get(le.id)
              const isOpen = openLeId === le.id
              const total = breakdown
                ? breakdown.directCost +
                  breakdown.indirectCost +
                  breakdown.salaryCost
                : 0
              const participantCount =
                breakdown?.participantsCount ??
                participantsForLegalEntity(movement, le.id).length
              const prefix =
                le.countryCode === "ES" ? "" : `${le.countryCode} · `

              if (isOpen && breakdown) {
                // Expanded card — node 5033:79698 (gap-6 between header & inputs)
                return (
                  <div
                    key={le.id}
                    className="border-f1-border bg-f1-background flex flex-col gap-6 overflow-hidden rounded-xl border border-solid p-3"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenLeId(null)}
                      className="flex items-center gap-2.5 text-left"
                    >
                      <F0AvatarIcon size="lg" icon={Office} />
                      <div className="flex h-10 min-w-0 flex-1 flex-col justify-center">
                        <span className="text-f1-foreground text-[14px] leading-[20px] font-medium tracking-[-0.07px]">
                          {le.legalName}
                        </span>
                        <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
                          {participantCount} participants
                        </span>
                      </div>
                      <span className="text-f1-foreground text-[14px] leading-[20px] font-bold tracking-[-0.07px]">
                        {fmtFigmaEur(total)}
                      </span>
                      <F0Icon icon={ChevronUp} size="sm" color="secondary" />
                    </button>
                    <div className="grid grid-cols-3 gap-2.5">
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
                      />
                    </div>
                  </div>
                )
              }

              // Collapsed card — node 5033:79691 (h-16)
              return (
                <button
                  key={le.id}
                  type="button"
                  onClick={() => setOpenLeId(le.id)}
                  className="border-f1-border bg-f1-background flex h-16 items-center gap-2.5 overflow-hidden rounded-xl border border-solid p-3 text-left"
                >
                  <F0AvatarIcon size="lg" icon={Office} />
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <span className="text-f1-foreground text-[14px] leading-[20px] font-medium tracking-[-0.07px]">
                      {le.legalName}
                    </span>
                    <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
                      {prefix}
                      {participantCount} participants
                    </span>
                  </div>
                  <span className="text-f1-foreground text-[14px] leading-[20px] font-bold tracking-[-0.07px]">
                    {fmtFigmaEur(total)}
                  </span>
                  <F0Icon icon={ArrowDown} size="sm" color="secondary" />
                </button>
              )
            })}

            {/* Summary list item — node 5033:81077 */}
            <div className="border-f1-border-secondary bg-f1-background-secondary flex flex-col gap-2 overflow-hidden rounded-xl border border-solid py-2 pr-3 pl-4">
              {les.map((le) => {
                const breakdown = breakdownMap.get(le.id)
                const total = breakdown
                  ? breakdown.directCost +
                    breakdown.indirectCost +
                    breakdown.salaryCost
                  : 0
                return (
                  <div
                    key={le.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
                      {le.legalName}
                    </span>
                    <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
                      {fmtFigmaEur(total)}
                    </span>
                  </div>
                )
              })}
              {/* Divider — node 5033:81086 */}
              <div className="bg-f1-border-secondary h-px" />
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-f1-foreground text-[14px] leading-[20px] font-bold tracking-[-0.07px]">
                    Total cost
                  </span>
                  <span className="text-f1-foreground-secondary text-[14px] leading-[20px] tracking-[-0.07px]">
                    Gross cost= Direct + Indirect + Salary
                  </span>
                </div>
                <span className="text-f1-foreground text-[14px] leading-[20px] font-bold tracking-[-0.07px]">
                  {fmtFigmaEur(grossCost)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function GroupSidepanelParticipantsTab({
  movement,
}: {
  movement: TrainingBudgetMovement
}) {
  const participants = participantsForGroup(movement.groupId)
  const rows = participants.map((participant) => {
    const employee = findEmployee(participant.employeeId)
    const team = employee?.teamId ? findTeam(employee.teamId) : undefined

    return {
      id: participant.id,
      employeeName: participant.employeeName,
      employeeAvatar: employee?.avatarUrl ?? participant.employeeAvatar,
      teamName: team?.name ?? "-",
    }
  })
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
                  render: (row) => ({
                    type: "person" as const,
                    value: {
                      firstName: row.employeeName.split(" ")[0] ?? "",
                      lastName: row.employeeName.split(" ").slice(1).join(" "),
                      src: row.employeeAvatar,
                    },
                  }),
                },
                {
                  label: "Team",
                  render: (row) => row.teamName,
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function LegalEntityInput({
  label,
  value,
}: {
  label: string
  value: number
  plain?: boolean
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <span className="text-f1-foreground-secondary text-[14px] leading-[20px] font-medium tracking-[-0.07px]">
        {label}
      </span>
      <div className="border-f1-border bg-f1-background-tertiary flex h-10 items-center rounded-xl border border-solid pr-2 pl-3">
        <span className="text-f1-foreground flex-1 text-[14px] leading-[20px] tracking-[-0.07px]">
          {fmtFigmaEur(value)}
        </span>
      </div>
    </div>
  )
}

// ── NEW BUDGET WIZARD ───────────────────────────────────────────────────────
// Upstream: TrainingsBudgetWizard — 3 steps:
//   1. Basic information — Define the essential details of your training budget.
//   2. Amount             — Set the total amount and timeframe for this budget.
//   3. Allocation         — Select the training groups eligible to use this budget.

type NewBudgetStep = "basic" | "amount" | "allocation"

const newBudgetStepOrder: NewBudgetStep[] = ["basic", "amount", "allocation"]

const newBudgetStepLabel: Record<NewBudgetStep, string> = {
  basic: "Basic information",
  amount: "Amount",
  allocation: "Allocation",
}

const newBudgetStepDescription: Record<NewBudgetStep, string> = {
  basic: "Define the essential details of your training budget.",
  amount: "Set the total amount and timeframe for this budget.",
  allocation: "Select the training groups eligible to use this budget.",
}

function buildTrainingMovement(
  budget: TrainingBudget,
  trainingId: string,
  classId: string
): TrainingBudgetMovement | null {
  const training = trainings.find((item) => item.id === trainingId)
  const klass = training?.classes.find((item) => item.id === classId)
  const cost = training && klass ? classTotalCost(training, klass.id) : null

  if (!training || !klass || !cost) return null

  return {
    id: `mov-${Date.now()}-${klass.id}`,
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
}

function NewBudgetView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const [step, setStep] = useState<NewBudgetStep>("basic")
  const [legalEntityId, setLegalEntityId] = useState(legalEntities[0]!.id)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState<number | null>(10000)
  const [effectiveFrom, setEffectiveFrom] = useState("2026-01-01")
  const [effectiveUntil, setEffectiveUntil] = useState("2026-12-31")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
  const [selectedGroup, setSelectedGroup] = useState("all")

  const allGroupOptions = useMemo(() => {
    const options: Array<{
      value: string
      label: string
      trainingId: string
      cost: number
    }> = []

    for (const training of trainings) {
      for (const klass of training.classes) {
        const cost = classTotalCost(training, klass.id)
        options.push({
          value: klass.id,
          label: `${training.name} · ${klass.name}`,
          trainingId: training.id,
          cost: cost.total,
        })
      }
    }

    return options
  }, [])

  const trainingEntities = useMemo<EntitySelectEntity[]>(() => {
    const entities: EntitySelectEntity[] = []

    for (const training of trainings) {
      const subItems = allGroupOptions
        .filter((option) => option.trainingId === training.id)
        .map((option) => ({
          subId: option.value,
          subName: `${training.classes.find((klass) => klass.id === option.value)?.name ?? option.label} · ${fmtEur(option.cost)}`,
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

  const selectedOptions = allGroupOptions.filter((option) =>
    selectedIds.includes(option.value)
  )
  const allocated = calculateAllocated(selectedIds)
  const total = amount ?? 0
  const canContinue =
    step === "basic"
      ? name.trim().length > 0 && legalEntityId.length > 0
      : step === "amount"
        ? total > 0 && effectiveFrom.length > 0
        : true
  const currentStepIndex = newBudgetStepOrder.indexOf(step)
  const close = () => go(setSearch, { view: "list", budgetId: null })

  const submit = () => {
    const id = `bud-${Date.now()}`
    const currency = legalEntityCurrencyMap[legalEntityId] ?? "EUR"
    const newBudget: TrainingBudget = {
      id,
      name: name.trim() || "Untitled budget",
      description,
      year: effectiveFrom
        ? new Date(effectiveFrom).getFullYear()
        : new Date().getFullYear(),
      startDate: effectiveFrom,
      endDate: effectiveUntil || undefined,
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

    for (const option of selectedOptions) {
      const movement = buildTrainingMovement(
        newBudget,
        option.trainingId,
        option.value
      )
      if (movement) {
        trainingBudgetMovements.push(movement)
      }
    }

    go(setSearch, { view: "detail", budgetId: id })
  }

  const primaryAction =
    step === "allocation"
      ? { label: "Submit", onClick: submit }
      : {
          label: "Continue",
          disabled: !canContinue,
          onClick: () => setStep(newBudgetStepOrder[currentStepIndex + 1]!),
        }

  return (
    <F0Dialog
      isOpen
      onClose={close}
      position="center"
      width="md"
      title="New training budget"
      primaryAction={primaryAction}
      secondaryAction={
        step === "basic"
          ? { label: "Cancel", onClick: close }
          : {
              label: "Previous",
              onClick: () => setStep(newBudgetStepOrder[currentStepIndex - 1]!),
            }
      }
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Box display="grid" columns="3" gap="sm">
          {newBudgetStepOrder.map((item, index) => (
            <F0Box
              key={item}
              display="flex"
              flexDirection="column"
              gap="xs"
              padding="sm"
              borderRadius="md"
              background={item === step ? "selected" : "secondary"}
            >
              <F0Text
                variant="label"
                content={`${index + 1}. ${newBudgetStepLabel[item]}`}
              />
            </F0Box>
          ))}
        </F0Box>

        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text variant="label" content={newBudgetStepLabel[step]} />
          <F0Text variant="small" content={newBudgetStepDescription[step]} />
        </F0Box>

        {step === "basic" && (
          <F0Box display="flex" flexDirection="column" gap="md">
            <EntitySelect
              label="Legal entity"
              placeholder="Select legal entity"
              entities={legalEntities.map((entity) => ({
                id: entity.id,
                name: entity.legalName,
                searchKeys: [entity.legalName],
              }))}
              selectedEntities={[
                {
                  id: legalEntityId,
                  name:
                    legalEntities.find((entity) => entity.id === legalEntityId)
                      ?.legalName ?? "Legal entity",
                },
              ]}
              groups={[{ label: "All", value: "all" }]}
              selectedGroup="all"
              selectedItemsCopy="legal entity selected"
              searchPlaceholder="Search"
              selectAllLabel="Select all"
              clearLabel="Clear"
              selectedLabel="selected"
              notFoundTitle="No legal entities found"
              notFoundSubtitle=""
              hiddenAvatar
              singleSelector
              width={600}
              onGroupChange={() => undefined}
              onItemExpandedChange={() => undefined}
              onSelect={(selection) => {
                if (selection && !Array.isArray(selection)) {
                  setLegalEntityId(String(selection.id))
                }
              }}
            />
            <Input
              label="Budget name"
              value={name}
              onChange={(value) => setName(value ?? "")}
              placeholder="e.g. Engineering 2026"
            />
            <Textarea
              label="Budget description"
              value={description}
              onChange={(value) => setDescription(value ?? "")}
              placeholder="Write budget description"
              rows={3}
            />
          </F0Box>
        )}

        {step === "amount" && (
          <F0Box display="flex" flexDirection="column" gap="md">
            <NumberInput
              label="Amount"
              value={amount}
              onChange={(value) => setAmount(value)}
              locale="en-US"
              units={legalEntityCurrencyMap[legalEntityId] ?? "EUR"}
            />
            <F0Box display="flex" flexDirection="row" gap="md">
              <Input
                label="Start date"
                type="date"
                value={effectiveFrom}
                onChange={(value) => setEffectiveFrom(value ?? "")}
              />
              <Input
                label="End date"
                type="date"
                value={effectiveUntil}
                onChange={(value) => setEffectiveUntil(value ?? "")}
              />
            </F0Box>
          </F0Box>
        )}

        {step === "allocation" && (
          <F0Box display="flex" flexDirection="column" gap="md">
            <EntitySelect
              label="Training groups"
              placeholder="Select training groups"
              entities={trainingEntities}
              groups={[{ label: "All", value: "all" }]}
              selectedGroup={selectedGroup}
              selectedEntities={selectedEntities}
              selectedItemsCopy="training groups selected"
              searchPlaceholder="Search"
              selectAllLabel="Select all"
              clearLabel="Clear"
              selectedLabel="selected"
              notFoundTitle="No training groups found"
              notFoundSubtitle=""
              hiddenAvatar
              singleSelector={false}
              width={600}
              onGroupChange={(value) => setSelectedGroup(value ?? "all")}
              onItemExpandedChange={(id, expanded) => {
                setExpandedElements((prev) =>
                  expanded ? [id, ...prev] : prev.filter((item) => item !== id)
                )
              }}
              onSelect={(selection) => {
                const ids = selection.flatMap((entity) =>
                  (entity.subItems ?? []).map((subItem) =>
                    String(subItem.subId)
                  )
                )
                setSelectedIds(ids)
              }}
            />
            <F0Alert
              variant="neutral"
              title="Budget deductions"
              description={`Selected groups allocate ${fmtEur(allocated)}. ${fmtEur(Math.max(total - allocated, 0))} remains available.`}
            />
          </F0Box>
        )}
      </F0Box>
    </F0Dialog>
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
