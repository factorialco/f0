import { useState } from "react"
import {
  F0Alert,
  F0Button,
  F0Box,
  F0Dialog,
  F0Heading,
  F0Icon,
  F0Text,
  type IconType,
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
  DollarBill,
  Office,
  Receipt,
} from "@factorialco/f0-react/icons/app"

import type { Training, TrainingClass } from "@/fixtures"
import {
  breakdownByLegalEntityFor,
  findLegalEntity,
  hoursCompletedForEmployee,
  legalEntities,
  legalEntityForEmployee,
  salaryCostForEmployeeInGroup,
  trainingBudgets,
  trainingBudgetMovements,
  trainingParticipants,
} from "@/fixtures"
import { useLegalEntityToggle } from "../_shared/legalEntityToggleContext"

type Props = { training: Training; klass?: TrainingClass }

const PAYMENT_STATUS_LABEL: Record<string, string> = {
  pending: "Pending",
  spent: "Paid",
}

const PAYMENT_STATUS_VARIANT: Record<
  string,
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  pending: "warning",
  spent: "positive",
}

function formatMoney(n: number, currency = "EUR"): string {
  return n.toLocaleString("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  })
}

function formatDate(iso: string | null): string {
  return iso
    ? new Date(iso).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "-"
}

function CostBreakdownCard({
  icon,
  title,
  description,
  value,
  onChange,
  action,
}: {
  icon: IconType
  title: string
  description: string
  value: number
  onChange: (n: number) => void
  action?: React.ReactNode
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2.5 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-f1-border-secondary bg-f1-background-secondary text-xl">
        <F0Icon icon={icon} size="md" color="secondary" />
      </div>
      <div className="flex flex-col gap-0">
        <F0Text variant="label" content={title} />
        <F0Text variant="description" content={description} />
      </div>
      <div className="mt-auto flex h-10 items-center gap-2">
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
}: {
  budgetId: string | null
  totalCost: number
}) {
  const goToBudgets = () => {
    window.location.href = budgetId
      ? `/p/multi-entity-budget?view=detail&budgetId=${budgetId}`
      : "/p/multi-entity-budget"
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

  if (!isOverBudget) {
    return (
      <F0Alert
        variant="positive"
        title={`Within ${budget.name} budget`}
        description={`${formatMoney(available, budget.currency)} remaining after this group.`}
        action={{ label: "View budget", onClick: goToBudgets }}
      />
    )
  }

  const overrun = totalCost - available
  const overrunPct =
    budget.totalAmount > 0
      ? ((overrun / budget.totalAmount) * 100).toFixed(1)
      : "0"

  return (
    <F0Alert
      variant="warning"
      title="Over budget"
      description={`This group exceeds ${budget.name} by ${formatMoney(overrun, budget.currency)} (${overrunPct}% of total budget).`}
      action={{ label: "View budget", onClick: goToBudgets }}
    />
  )
}

export function CostsTab({ training, klass }: Props) {
  const currency = "EUR"
  const participants = klass?.participantCount ?? training.participantCount ?? 1
  const splitCount = Math.max(training.classes.length, 1)
  const initialDirect = klass
    ? Math.round(training.totalCost / splitCount)
    : training.totalCost
  const initialSalary = klass
    ? Math.round(training.totalSalaryCost / splitCount)
    : training.totalSalaryCost
  const initialSubsidy = klass
    ? Math.round(training.totalSubsidizedCost / splitCount)
    : training.totalSubsidizedCost

  const [directCost, setDirectCost] = useState(initialDirect)
  const [indirectCost, setIndirectCost] = useState(
    Math.round(initialDirect * 0.15)
  )
  const [salaryCost, setSalaryCost] = useState(initialSalary)
  const [subsidizedCost, setSubsidizedCost] = useState(initialSubsidy)
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [selectedLegalEntityId, setSelectedLegalEntityId] = useState<
    string | null
  >(null)

  const totalCost = directCost + indirectCost + salaryCost
  const netCost = Math.max(0, totalCost - subsidizedCost)
  const perParticipant = Math.round(netCost / Math.max(participants, 1))
  const linkedMovement = klass
    ? trainingBudgetMovements.find((movement) => movement.groupId === klass.id)
    : trainingBudgetMovements.find((movement) => movement.trainingId === training.id)

  return (
    <div className="flex flex-col gap-6">
      <BudgetLinkBanner budgetId={linkedMovement?.budgetId ?? null} totalCost={totalCost} />

      <div className="flex gap-4">
        <CostBreakdownCard
          icon={DollarBill}
          title="Direct cost"
          description="Training-related expenses, such as instructor fees, materials, venue, and logistics."
          value={directCost}
          onChange={setDirectCost}
        />
        <CostBreakdownCard
          icon={Office}
          title="Indirect cost"
          description="General business expenses related to training, such as utilities and administrative fees."
          value={indirectCost}
          onChange={setIndirectCost}
        />
        <CostBreakdownCard
          icon={Receipt}
          title="Salary cost"
          description="Cost of all employees' time spent on the course."
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
        klass={klass}
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
            <span className="text-f1-foreground-secondary">
              <Receipt />
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

// ── Costs by legal entity (frame 7) ─────────────────────────────────────────
// Sticks to the GROUP page (Costs tab). Reads the per-movement toggle from
// the shared context so the GroupSidepanel and this page stay in sync.

function CostsByLegalEntitySection({
  klass,
  selectedLegalEntityId,
  onOpenLegalEntity,
  onCloseLegalEntity,
}: {
  klass?: TrainingClass
  selectedLegalEntityId: string | null
  onOpenLegalEntity: (legalEntityId: string) => void
  onCloseLegalEntity: () => void
}) {
  const toggleCtx = useLegalEntityToggle()
  // Find the movement bound to this group (klass.id === movement.groupId).
  // For prototypes we fall back to the first movement if there is
  // no class context, so the section still renders in training-level views.
  const movement =
    (klass && trainingBudgetMovements.find((m) => m.groupId === klass.id)) ??
    trainingBudgetMovements[0]
  if (!movement) return null

  const participants = trainingParticipants.filter(
    (p) => p.classId === movement.groupId
  )
  const leIds = Array.from(
    new Set(
      participants
        .map((p) => legalEntityForEmployee(p.employeeId)?.id)
        .filter((id): id is string => Boolean(id))
    )
  )
  const les = leIds
    .map((id) => legalEntities.find((le) => le.id === id))
    .filter((le): le is NonNullable<typeof le> => Boolean(le))

  const canSplit = les.length > 1
  const isOn = canSplit && toggleCtx.isOn(movement.id)

  // Resolve per-LE cost breakdown: fixture-defined when available, else
  // proportional split by participant count.
  const countsByLe = leIds.map((legalEntityId) => ({
    legalEntityId,
    count: participants.filter(
      (p) => legalEntityForEmployee(p.employeeId)?.id === legalEntityId
    ).length,
  }))
  const breakdownMap = new Map(
    breakdownByLegalEntityFor(movement, countsByLe).map((b) => [
      b.legalEntityId,
      b,
    ])
  )

  // Local edited values per LE (Direct / Indirect / Salary) so the grid is
  // editable. Initial values come from the fixture breakdown.
  const initialCosts: Record<
    string,
    { direct: number; indirect: number; salary: number }
  > = Object.fromEntries(
    les.map((le) => {
      const b = breakdownMap.get(le.id)
      return [
        le.id,
        {
          direct: b ? Math.round(b.directCost) : 0,
          indirect: b ? Math.round(b.indirectCost) : 0,
          salary: b ? Math.round(b.salaryCost) : 0,
        },
      ]
    })
  )
  const [costsByLe] = useState(initialCosts)
  const [sidepanelTab, setSidepanelTab] = useState<"cost" | "participants">("cost")
  const selectedBreakdown = selectedLegalEntityId
    ? breakdownMap.get(selectedLegalEntityId)
    : undefined
  const selectedLe = selectedLegalEntityId
    ? findLegalEntity(selectedLegalEntityId)
    : undefined

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-f1-background p-3">
        <div className="flex flex-col gap-0">
          <F0Text variant="label" content="Costs by legal entity" />
          <F0Text variant="description" content="Track and manage all costs per legal entity" />
        </div>
        <Switch
          title="Costs by legal entity"
          hideLabel
          checked={isOn}
          onCheckedChange={(v: boolean) => toggleCtx.setOn(movement.id, v)}
          disabled={!canSplit}
        />
      </div>

      {isOn && (
        <div className="flex flex-col gap-3">
          {les.map((le) => {
            const c = costsByLe[le.id] ?? { direct: 0, indirect: 0, salary: 0 }
            const leTotal = c.direct + c.indirect + c.salary
            const leParticipants = participants.filter(
              (p) => legalEntityForEmployee(p.employeeId)?.id === le.id
            )
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
                    content={`${le.countryCode} · ${leParticipants.length} ${leParticipants.length === 1 ? "participant" : "participants"}`}
                  />
                </div>
                <span className="whitespace-nowrap font-bold text-f1-foreground">
                  {formatMoney(leTotal, "EUR")}
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

      {selectedLegalEntityId && selectedLe && (
        <F0Dialog
          isOpen
          onClose={onCloseLegalEntity}
          position="right"
          width="md"
          title={selectedLe.legalName}
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
                content: `${formatDate(movement.startDate)}- ${formatDate(movement.endDate)}`,
              },
            },
          ]}
          tabs={[
            { id: "cost", label: "Cost", onClick: () => setSidepanelTab("cost") },
            {
              id: "participants",
              label: "Participants",
              onClick: () => setSidepanelTab("participants"),
            },
          ]}
          activeTabId={sidepanelTab}
          setActiveTabId={(id: string) =>
            setSidepanelTab(id as "cost" | "participants")
          }
          disableContentPadding
        >
          {sidepanelTab === "cost" && (
            <F0Box display="flex" flexDirection="column" gap="lg" paddingX="md">
              <CostBreakdownList
                direct={selectedBreakdown?.directCost ?? 0}
                indirect={selectedBreakdown?.indirectCost ?? 0}
                salary={selectedBreakdown?.salaryCost ?? 0}
              />
            </F0Box>
          )}
          {sidepanelTab === "participants" && (
            <LegalEntityParticipantsTab
              movement={movement}
              legalEntityId={selectedLegalEntityId}
            />
          )}
        </F0Dialog>
      )}
    </section>
  )
}

function LegalEntityParticipantsTab({
  movement,
  legalEntityId,
}: {
  movement: NonNullable<typeof trainingBudgetMovements[number]>
  legalEntityId: string
}) {
  const rows = trainingParticipants
    .filter(
      (participant) =>
        participant.classId === movement.groupId &&
        legalEntityForEmployee(participant.employeeId)?.id === legalEntityId
    )
    .map((participant) => ({
      id: participant.id,
      employeeName: participant.employeeName,
      employeeAvatar: participant.employeeAvatar,
      hours: hoursCompletedForEmployee(participant.employeeId, movement.groupId),
      salary: salaryCostForEmployeeInGroup(participant.employeeId, movement.groupId),
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
                  label: "Hours completed",
                  render: (row) => `${row.hours}h`,
                },
                {
                  label: "Salary cost",
                  render: (row) => formatMoney(row.salary),
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
    <div className="flex flex-col gap-3 rounded-xl border border-f1-border bg-f1-background p-4">
      <F0Text content="Cost breakdown" variant="label" />
      <div className="flex flex-col gap-2">
        <CostBreakdownRow label="Direct cost" value={direct} />
        <CostBreakdownRow label="Indirect cost" value={indirect} />
        <CostBreakdownRow label="Salary cost" value={salary} />
      </div>
      <div className="flex items-center justify-between border-t border-f1-border-secondary pt-3">
        <F0Text content="Total cost" variant="label" />
        <F0Heading as="h4" variant="heading" content={formatMoney(total)} />
      </div>
    </div>
  )
}

function CostBreakdownRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between">
      <F0Text content={label} variant="small" />
      <F0Text content={formatMoney(value)} variant="small" />
    </div>
  )
}
