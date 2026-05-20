import { useEffect, useState } from "react"
import {
  F0Alert,
  F0Button,
  F0Dialog,
  F0Heading,
  F0Text,
  F0Select,
} from "@factorialco/f0-react"
import {
  NumberInput,
  OneDataCollection,
  Switch,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Calculator,
  ChevronRight,
  Office,
} from "@factorialco/f0-react/icons/app"

import {
  setCostsByLegalEntityToggle,
  useCostsByLegalEntityToggle,
} from "../costsByLegalEntityToggleStore"
import type { Training, TrainingClass, TrainingParticipant } from "@/fixtures"
import {
  breakdownByLegalEntityFor,
  directCostFromMovement,
  findEmployee,
  findLegalEntity,
  findTeam,
  hoursCompletedForEmployee,
  indirectCostFromMovement,
  legalEntities,
  legalEntityForEmployee,
  salaryCostFromMovement,
  salaryCostForEmployeeInGroup,
  trainingBudgets,
  trainingBudgetMovements,
  trainingParticipants,
} from "@/fixtures"

type Props = { training: Training; klass?: TrainingClass }
type PaymentStatus = "pending" | "paid" | ""

function participantsForMovement(movement: (typeof trainingBudgetMovements)[number]) {
  return trainingParticipants.filter((p) => p.classId === movement.groupId)
}

function participantsByLegalEntityForMovement(
  movement: (typeof trainingBudgetMovements)[number]
): Array<{ legalEntityId: string; count: number }> {
  const counts = new Map<string, number>()
  for (const participant of participantsForMovement(movement)) {
    const legalEntity = legalEntityForEmployee(participant.employeeId)
    counts.set(legalEntity.id, (counts.get(legalEntity.id) ?? 0) + 1)
  }

  if (counts.size === 0 && movement.costsByLegalEntity?.length) {
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

function legalEntityBreakdownForMovement(
  movement: (typeof trainingBudgetMovements)[number]
) {
  const participantsByLegalEntity = participantsByLegalEntityForMovement(movement)
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

function formatMoney(n: number, currency = "EUR"): string {
  return n.toLocaleString("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  })
}

function CostBreakdownCard({
  emoji,
  title,
  description,
  value,
  onChange,
  action,
}: {
  emoji: string
  title: string
  description: string
  value: number
  onChange: (n: number) => void
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
      <div className="flex items-center gap-2">
        <span aria-hidden className="text-xl">
          {emoji}
        </span>
        <F0Heading as="h4" variant="heading" content={title} />
      </div>
      <F0Text variant="description" content={description} />
      <div className="mt-auto flex items-center gap-2 pt-2">
        <div className="flex-1">
          <NumberInput
            label="Amount"
            hideLabel
            value={value}
            onChange={(v) => onChange(v ?? 0)}
            step={50}
            locale="en-US"
            units="EUR"
          />
        </div>
        {action}
      </div>
    </div>
  )
}

function BudgetLinkBanner({
  budgetId,
  totalCost,
  movement,
}: {
  budgetId: string | null
  totalCost: number
  movement: (typeof trainingBudgetMovements)[number] | null
}) {
  const goToBudgets = () => {
    window.location.href = budgetId
      ? `/p/trainings-budgets?view=detail&budgetId=${budgetId}`
      : "/p/trainings-budgets"
  }

  if (trainingBudgets.length === 0) {
    return (
      <F0Alert
        variant="neutral"
        title="No budgets yet"
        description="Create a budget to start tracking training spend across your organisation."
        action={{ label: "Create budget", onClick: goToBudgets }}
      />
    )
  }

  if (!budgetId) {
    return (
      <F0Alert
        variant="neutral"
        title="No budget linked"
        description="Link this group to a budget so the spend is tracked against your training pool."
        action={{ label: "View budgets", onClick: goToBudgets }}
      />
    )
  }

  const budget = trainingBudgets.find((b) => b.id === budgetId)
  if (!budget) return null

  const available = budget.remainingAmount
  const isOverBudget = totalCost > available
  const statusAlert = isOverBudget ? (
    <F0Alert
      variant="warning"
      title="Over budget"
      description={`This group exceeds ${budget.name} by ${formatMoney(totalCost - available, budget.currency)} (${budget.totalAmount > 0 ? (((totalCost - available) / budget.totalAmount) * 100).toFixed(1) : "0"}% of total budget).`}
      action={{ label: "View budget", onClick: goToBudgets }}
    />
  ) : (
    <F0Alert
      variant="positive"
      title={`Within ${budget.name}`}
      description={`${formatMoney(available, budget.currency)} remaining after this group.`}
      action={{ label: "View budget", onClick: goToBudgets }}
    />
  )

  if (movement?.costUpdateNotice) {
    return (
      <div className="flex flex-col gap-3">
        <F0Alert
          variant="warning"
          title="Update budget"
          description={`${movement.costUpdateNotice.change ?? "Group changed"} · ${movement.costUpdateNotice.impact ?? "No total change"}. This group changed after it was added to the budget.`}
          action={{ label: "Update budget", onClick: goToBudgets }}
        />
        {statusAlert}
      </div>
    )
  }

  return statusAlert
}

export function CostsTab({ training, klass }: Props) {
  const currency = "EUR"
  const linkedMovement =
    (klass && trainingBudgetMovements.find((m) => m.groupId === klass.id)) ??
    null
  const participants = klass?.participantCount ?? training.participantCount ?? 1
  const splitCount = Math.max(training.classes.length, 1)
  const initialDirect = linkedMovement
    ? directCostFromMovement(linkedMovement)
    : klass
      ? Math.round(training.totalCost / splitCount)
      : training.totalCost
  const initialIndirect = linkedMovement
    ? indirectCostFromMovement(linkedMovement)
    : Math.round(initialDirect * 0.15)
  const initialSalary = linkedMovement
    ? salaryCostFromMovement(linkedMovement)
    : klass
      ? Math.round(training.totalSalaryCost / splitCount)
      : training.totalSalaryCost
  const initialSubsidy = klass
    ? Math.round(training.totalSubsidizedCost / splitCount)
    : training.totalSubsidizedCost

  const [directCost, setDirectCost] = useState(initialDirect)
  const [indirectCost, setIndirectCost] = useState(initialIndirect)
  const [salaryCost, setSalaryCost] = useState(initialSalary)
  const [subsidizedCost, setSubsidizedCost] = useState(initialSubsidy)
  const [budgetId, setBudgetId] = useState<string | null>(
    linkedMovement?.budgetId ?? "bud-001"
  )
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("pending")
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [selectedLegalEntityId, setSelectedLegalEntityId] = useState<
    string | null
  >(null)

  const totalCost = directCost + indirectCost + salaryCost
  const netCost = Math.max(0, totalCost - subsidizedCost)
  const perParticipant = Math.round(netCost / Math.max(participants, 1))

  const budgetOptions = [
    { value: "", label: "No budget linked" },
    ...trainingBudgets.map((b) => ({
      value: b.id,
      label: `${b.name} (${b.currency})`,
    })),
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading as="h3" variant="heading-large" content="Costs" />
        <F0Text
          variant="description"
          content="Track direct, indirect and salary costs for this group. Link to a budget to keep spending under control."
        />
      </div>

      <BudgetLinkBanner
        budgetId={budgetId}
        totalCost={totalCost}
        movement={linkedMovement}
      />

      {/* Summary row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
          <F0Text variant="label" content="Total group cost" />
          <F0Text
            variant="description"
            content="Sum of direct, indirect and salary costs."
          />
          <F0Heading
            as="h2"
            variant="heading-large"
            content={formatMoney(totalCost, currency)}
          />
        </div>

        <div className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
          <F0Text variant="label" content="Linked budget" />
          <F0Select<string>
            label="Linked budget"
            hideLabel
            placeholder="Select a budget"
            value={budgetId ?? ""}
            onChange={(v: string) => setBudgetId(v || null)}
            options={budgetOptions}
          />
        </div>

        <div className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
          <F0Text variant="label" content="Payment status" />
          <F0Select<PaymentStatus>
            label="Payment status"
            hideLabel
            placeholder="—"
            value={paymentStatus}
            onChange={(v: PaymentStatus) => setPaymentStatus(v)}
            disabled={!budgetId}
            options={[
              { value: "", label: "—" },
              { value: "pending", label: "Pending" },
              { value: "paid", label: "Paid" },
            ]}
          />
        </div>
      </div>

      {/* Three cost breakdown cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <CostBreakdownCard
          emoji="💰"
          title="Direct cost"
          description="Provider fees, materials, room rental and other invoiced expenses."
          value={directCost}
          onChange={setDirectCost}
        />
        <CostBreakdownCard
          emoji="🏢"
          title="Indirect cost"
          description="Overhead allocated to this group (HR, facilities, equipment amortisation)."
          value={indirectCost}
          onChange={setIndirectCost}
        />
        <CostBreakdownCard
          emoji="📝"
          title="Salary opportunity cost"
          description="Payroll cost of participants and instructors during training hours."
          value={salaryCost}
          onChange={setSalaryCost}
          action={
            <F0Button
              label="Calculate"
              icon={Calculator}
              variant="outline"
              onClick={() => setCalculatorOpen((v) => !v)}
            />
          }
        />
      </div>

      {calculatorOpen && (
        <div className="flex flex-col gap-3 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
          <F0Heading
            as="h4"
            variant="heading"
            content="Salary cost calculator"
          />
          <F0Text
            variant="description"
            content={`Estimate based on average payroll cost per hour × ${participants} participants × training duration (${training.totalDuration}h).`}
          />
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <F0Text variant="label" content="Avg. €/h" />
              <F0Heading as="h4" variant="heading" content="28 €" />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text variant="label" content="Participants" />
              <F0Heading
                as="h4"
                variant="heading"
                content={String(participants)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text variant="label" content="Estimated" />
              <F0Heading
                as="h4"
                variant="heading"
                content={formatMoney(
                  28 * participants * training.totalDuration,
                  currency
                )}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <F0Button
              label="Apply"
              onClick={() => {
                setSalaryCost(28 * participants * training.totalDuration)
                setCalculatorOpen(false)
              }}
            />
            <F0Button
              label="Cancel"
              variant="outline"
              onClick={() => setCalculatorOpen(false)}
            />
          </div>
        </div>
      )}

      <CostsByLegalEntitySection
        movement={linkedMovement}
        selectedLegalEntityId={selectedLegalEntityId}
        onOpenLegalEntity={setSelectedLegalEntityId}
        onCloseLegalEntity={() => setSelectedLegalEntityId(null)}
      />

      {/* Other costs */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <F0Heading as="h3" variant="heading" content="Other costs" />
          <F0Text
            variant="description"
            content="This cost is not used to calculate the group total cost and is not included in the budget."
          />
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
          <div className="flex items-center gap-2">
            <span aria-hidden className="text-xl">
              🎟️
            </span>
            <F0Heading as="h4" variant="heading" content="Subsidised cost" />
          </div>
          <F0Text
            variant="description"
            content="Training expenses covered by financial aid or bonifications for this group."
          />
          <div className="max-w-xs">
            <NumberInput
              label="Subsidised amount"
              hideLabel
              value={subsidizedCost}
              onChange={(v) => setSubsidizedCost(v ?? 0)}
              step={50}
              locale="en-US"
              units="EUR"
            />
          </div>
          <F0Text
            variant="small"
            content={`Net after subsidies: ${formatMoney(netCost, currency)} · ${formatMoney(perParticipant, currency)} per participant`}
          />
        </div>
      </section>
    </div>
  )
}

function CostsByLegalEntitySection({
  movement,
  selectedLegalEntityId,
  onOpenLegalEntity,
  onCloseLegalEntity,
}: {
  movement: (typeof trainingBudgetMovements)[number] | null
  selectedLegalEntityId: string | null
  onOpenLegalEntity: (legalEntityId: string) => void
  onCloseLegalEntity: () => void
}) {
  if (!movement) return null

  const participants = participantsForMovement(movement)
  const countsByLe = participantsByLegalEntityForMovement(movement)
  const leIds = countsByLe.map(({ legalEntityId }) => legalEntityId)
  const les = leIds
    .map((id) => legalEntities.find((le) => le.id === id))
    .filter((le): le is NonNullable<typeof le> => Boolean(le))
  const canSplit = les.length > 1
  const isOn = useCostsByLegalEntityToggle(movement.groupId, canSplit)

  const breakdownMap = new Map(
    legalEntityBreakdownForMovement(movement).map((b) => [
      b.legalEntityId,
      b,
    ])
  )
  const selectedBreakdown = selectedLegalEntityId
    ? breakdownMap.get(selectedLegalEntityId)
    : undefined
  const selectedLe = selectedLegalEntityId
    ? findLegalEntity(selectedLegalEntityId)
    : undefined
  const [sidepanelTab, setSidepanelTab] = useState<"cost" | "participants">(
    "cost"
  )

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-f1-background p-3">
        <div className="flex flex-col gap-0">
          <F0Text variant="label" content="Costs by legal entity" />
          <F0Text
            variant="description"
            content="Track and manage all costs per legal entity"
          />
        </div>
        <Switch
          title="Costs by legal entity"
          id={`training-costs-by-legal-entity-${movement.id}`}
          hideLabel
          checked={isOn}
          onCheckedChange={(v: boolean) =>
            setCostsByLegalEntityToggle(movement.groupId, v)
          }
          disabled={!canSplit}
        />
      </div>

      {isOn && (
        <div className="flex flex-col gap-3">
          {les.map((le) => {
            const breakdown = breakdownMap.get(le.id)
            const leTotal = breakdown
              ? breakdown.directCost + breakdown.indirectCost + breakdown.salaryCost
              : 0
            const leParticipants = participants.filter(
              (p) => legalEntityForEmployee(p.employeeId)?.id === le.id
            )
            const participantsCount =
              breakdown?.participantsCount ?? leParticipants.length
            return (
              <button
                type="button"
                key={le.id}
                onClick={() => onOpenLegalEntity(le.id)}
                className="flex h-16 items-center gap-3 rounded-2xl border border-solid border-f1-border bg-f1-background p-3 text-left hover:bg-f1-background-hover"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-f1-border-secondary bg-f1-background-secondary text-f1-foreground-secondary">
                  <Office />
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0">
                  <F0Text variant="label" content={le.legalName} />
                  <F0Text
                    variant="description"
                    content={`${le.countryCode} · ${participantsCount} ${participantsCount === 1 ? "participant" : "participants"}`}
                  />
                </div>
                <span className="whitespace-nowrap font-bold text-f1-foreground">
                  {formatSidepanelMoney(leTotal)}
                </span>
                <span
                  aria-hidden
                  className="flex h-5 w-5 shrink-0 items-center justify-center text-f1-foreground-secondary"
                >
                  <ChevronRight />
                </span>
              </button>
            )
          })}
        </div>
      )}

      {selectedLegalEntityId && selectedLe && selectedBreakdown && (
        <LegalEntityCostsSidepanel
          movement={movement}
          legalEntity={selectedLe}
          breakdown={selectedBreakdown}
          activeTab={sidepanelTab}
          onTabChange={setSidepanelTab}
          onClose={onCloseLegalEntity}
        />
      )}
    </section>
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
    <div className="flex flex-col">
      <div className="flex h-[50px] items-center">
        <F0Text content="Cost breakdown" variant="label" />
      </div>
      <div className="mt-2 divide-y divide-f1-border-secondary overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
        <CostBreakdownRow
          label="Direct cost"
          description="Course fees, venue rentals, and training materials"
          value={direct}
        />
        <CostBreakdownRow
          label="Indirect cost"
          description="Administrative overhead and support costs"
          value={indirect}
        />
        <CostBreakdownRow
          label="Salary cost"
          description="Cost of employees' time spent in training"
          value={salary}
        />
      </div>
      <div className="flex h-8 items-center py-4">
        <div className="h-px w-full bg-f1-border-secondary" />
      </div>
      <div>
        <div className="flex h-16 items-center justify-between rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-4 py-2">
          <div className="flex flex-col gap-0.5">
            <F0Text content="Total cost" variant="label" />
            <F0Text
              content="Gross cost= Direct + Indirect + Salary"
              variant="description"
            />
          </div>
          <F0Text content={formatSidepanelMoney(total)} variant="label" />
        </div>
      </div>
    </div>
  )
}

function LegalEntityCostsSidepanel({
  movement,
  legalEntity,
  breakdown,
  activeTab,
  onTabChange,
  onClose,
}: {
  movement: (typeof trainingBudgetMovements)[number]
  legalEntity: NonNullable<ReturnType<typeof findLegalEntity>>
  breakdown: NonNullable<ReturnType<typeof breakdownByLegalEntityFor>[number]>
  activeTab: "cost" | "participants"
  onTabChange: (tab: "cost" | "participants") => void
  onClose: () => void
}) {
  const tabs = [
    { id: "cost", label: "Cost", onClick: () => onTabChange("cost") },
    {
      id: "participants",
      label: "Participants",
      onClick: () => onTabChange("participants"),
    },
  ]
  const participants = trainingParticipants.filter(
    (participant) =>
      participant.classId === movement.groupId &&
      legalEntityForEmployee(participant.employeeId).id === legalEntity.id
  )
  const [dialogContainer, setDialogContainer] = useState<HTMLElement | null>(
    null
  )

  useEffect(() => {
    const container = document.createElement("div")
    container.className = "fixed inset-0 z-50"
    document.body.appendChild(container)
    setDialogContainer(container)

    return () => {
      setDialogContainer(null)
      container.remove()
    }
  }, [])

  if (!dialogContainer) return null

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="right"
      width="md"
      title={legalEntity.legalName}
      description={movement.groupName}
      tabs={tabs}
      activeTabId={activeTab}
      setActiveTabId={(id: string) =>
        onTabChange(id as "cost" | "participants")
      }
      container={dialogContainer}
      disableContentPadding
    >
      {activeTab === "cost" ? (
        <div className="px-5 py-4">
          <CostBreakdownList
            direct={breakdown.directCost}
            indirect={breakdown.indirectCost}
            salary={breakdown.salaryCost}
          />
        </div>
      ) : (
        <LegalEntityParticipantsPanel
          classId={movement.groupId}
          participants={participants}
          breakdown={breakdown}
        />
      )}
    </F0Dialog>
  )
}

function LegalEntityParticipantsPanel({
  classId,
  participants,
  breakdown,
}: {
  classId: string
  participants: TrainingParticipant[]
  breakdown: NonNullable<ReturnType<typeof breakdownByLegalEntityFor>[number]>
}) {
  const directAndIndirectPerParticipant =
    participants.length > 0
      ? (breakdown.directCost + breakdown.indirectCost) / participants.length
      : 0
  const rows = participants.map((participant) => ({
    ...participant,
    hours: hoursCompletedForEmployee(participant.employeeId, classId),
    salary: salaryCostForEmployeeInGroup(participant.employeeId, classId),
    employeeCost:
      salaryCostForEmployeeInGroup(participant.employeeId, classId) +
      directAndIndirectPerParticipant,
  }))

  const source = useDataCollectionSource<(typeof rows)[number]>(
    {
      search: { enabled: true, sync: true },
      filters: {
        team: {
          type: "in",
          label: "Team",
          options: {
            options: Array.from(
              new Set(
                rows
                  .map((participant) => findEmployee(participant.employeeId))
                  .map((employee) => employee?.teamId)
                  .filter((teamId): teamId is string => Boolean(teamId))
              )
            ).map((teamId) => ({
              value: teamId,
              label: findTeam(teamId)?.name ?? teamId,
            })),
          },
        },
      },
      totalItemSummary: (totalItems) =>
        `${totalItems} ${totalItems === 1 ? "participant" : "participants"}`,
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, pagination }) => {
          const teamFilter = Array.isArray(filters?.team)
            ? (filters.team as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows
            .filter((participant) => {
              if (teamFilter.length === 0) return true
              const employee = findEmployee(participant.employeeId)
              return employee ? teamFilter.includes(employee.teamId) : false
            })
            .filter((participant) =>
              term === ""
                ? true
                : participant.employeeName.toLowerCase().includes(term)
            )
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: filtered.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
    },
    [rows]
  )

  return (
    <div className="flex w-full flex-col gap-5 px-5 py-4">
      <OneDataCollection
        id={`finance/budget-training-group-participants-${classId}/v3`}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (participant) => {
                    const employee = findEmployee(participant.employeeId)
                    const [firstName, ...lastName] = participant.employeeName.split(
                      " "
                    )
                    return {
                      type: "person" as const,
                      value: {
                        firstName: firstName ?? "",
                        lastName: lastName.join(" "),
                        src: employee?.avatarUrl ?? participant.employeeAvatar,
                      },
                    }
                  },
                },
                {
                  label: "Team",
                  render: (participant) => {
                    const employee = findEmployee(participant.employeeId)
                    return {
                      type: "text" as const,
                      value: employee ? (findTeam(employee.teamId)?.name ?? "") : "",
                    }
                  },
                },
                {
                  label: "Hours completed",
                  render: (participant) => ({
                    type: "text" as const,
                    value: `${participant.hours}h`,
                  }),
                },
                {
                  label: "Salary cost",
                  render: (participant) => ({
                    type: "text" as const,
                    value: formatMoney(participant.salary),
                  }),
                },
                {
                  label: "Employee cost",
                  render: (participant) => ({
                    type: "text" as const,
                    value: formatMoney(participant.employeeCost),
                  }),
                },
              ],
            },
          },
        ]}
      />
    </div>
  )
}

function CostBreakdownRow({
  label,
  description,
  value,
}: {
  label: string
  description: string
  value: number
}) {
  return (
    <div className="flex h-16 items-center justify-between px-4 py-2">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 [&_p]:truncate">
        <F0Text content={label} variant="label" />
        <F0Text content={description} variant="description" />
      </div>
      <div className="flex h-12 shrink-0 items-center justify-end px-3 py-3">
        <F0Text content={formatSidepanelMoney(value)} variant="body" />
      </div>
    </div>
  )
}

function formatSidepanelMoney(n: number): string {
  return `${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}€`
}
