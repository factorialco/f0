import { useState } from "react"
import {
  F0Alert,
  F0Button,
  F0Heading,
  F0Text,
  F0Select,
} from "@factorialco/f0-react"
import { NumberInput } from "@factorialco/f0-react/dist/experimental"
import { Calculator } from "@factorialco/f0-react/icons/app"

import type { Training, TrainingClass } from "@/fixtures"
import { trainingBudgets } from "@/fixtures"

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
