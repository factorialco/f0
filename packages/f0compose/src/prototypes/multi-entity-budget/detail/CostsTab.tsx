import { useState } from "react"
import {
  F0Alert,
  F0Box,
  F0Button,
  F0Heading,
  F0Text,
  F0Select,
} from "@factorialco/f0-react"
import { NumberInput, Switch } from "@factorialco/f0-react/dist/experimental"
import {
  ArrowDown,
  ArrowRight,
  Calculator,
  ExternalLink,
} from "@factorialco/f0-react/icons/app"

import type { Training, TrainingClass } from "@/fixtures"
import {
  breakdownByLegalEntityFor,
  legalEntities,
  legalEntityForEmployee,
  trainingBudgets,
  trainingBudgetMovements,
  trainingParticipants,
} from "@/fixtures"
import { useLegalEntityToggle } from "../_shared/legalEntityToggleContext"

type Props = { training: Training; klass?: TrainingClass }
type PaymentStatus = "pending" | "paid" | ""

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
}: {
  budgetId: string | null
  totalCost: number
}) {
  const goToBudgets = () => {
    window.location.href = "/p/trainings-budgets"
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
  const [budgetId, setBudgetId] = useState<string | null>("bud-001")
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("pending")
  const [calculatorOpen, setCalculatorOpen] = useState(false)

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

      <BudgetLinkBanner budgetId={budgetId} totalCost={totalCost} />

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

      <CostsByLegalEntitySection klass={klass} />

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

// ── Costs by legal entity (frame 7) ─────────────────────────────────────────
// Sticks to the GROUP page (Costs tab). Reads the per-movement toggle from
// the shared context so the GroupSidepanel and this page stay in sync.

function CostsByLegalEntitySection({ klass }: { klass?: TrainingClass }) {
  const toggleCtx = useLegalEntityToggle()
  // Find the movement bound to this group (klass.id === movement.groupId).
  // For prototypes we fall back to the first movement of bud-001 if there is
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

  const [openLeIds, setOpenLeIds] = useState<Set<string>>(new Set())

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
        <div className="flex flex-col gap-1">
          <F0Heading
            as="h3"
            variant="heading"
            content="Costs by legal entity"
          />
          <F0Text
            variant="description"
            content="Track and manage all costs per legal entity"
          />
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
        <div className="flex flex-col gap-2">
          {les.map((le) => {
            const open = openLeIds.has(le.id)
            const breakdown = breakdownMap.get(le.id)
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
                className="rounded-md border border-solid border-f1-border-secondary bg-f1-background"
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
                      <F0Text variant="label" content={le.legalName} />
                      <F0Text
                        variant="small"
                        content={`${leParticipants.length} ${leParticipants.length === 1 ? "participant" : "participants"}`}
                      />
                    </div>
                  </button>
                  <div className="flex items-center gap-2">
                    <F0Text
                      variant="label"
                      content={formatMoney(leTotal, "EUR")}
                    />
                    <ExternalLink />
                  </div>
                </div>
                {open && breakdown && (
                  <F0Box
                    display="flex"
                    flexDirection="column"
                    gap="xs"
                    padding="md"
                  >
                    <div className="flex justify-between">
                      <F0Text variant="small" content="Direct cost" />
                      <F0Text
                        variant="small"
                        content={formatMoney(breakdown.directCost, "EUR")}
                      />
                    </div>
                    <div className="flex justify-between">
                      <F0Text variant="small" content="Indirect cost" />
                      <F0Text
                        variant="small"
                        content={formatMoney(breakdown.indirectCost, "EUR")}
                      />
                    </div>
                    <div className="flex justify-between">
                      <F0Text variant="small" content="Salary cost" />
                      <F0Text
                        variant="small"
                        content={formatMoney(breakdown.salaryCost, "EUR")}
                      />
                    </div>
                  </F0Box>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
