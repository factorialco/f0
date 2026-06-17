import { useEffect, useState, type ReactNode } from "react"
import {
  F0AvatarIcon,
  F0Button,
  F0Box,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Icon,
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
  InfoCircle,
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
type LegalEntityCostKey =
  | "directCost"
  | "indirectCost"
  | "salaryCost"
  | "subsidizedCost"

type LegalEntityCostDraft = {
  legalEntityId: string
  participantsCount: number
  directCost: number
  indirectCost: number
  salaryCost: number
  subsidizedCost: number
}

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

function grossCostForLegalEntity(draft: LegalEntityCostDraft): number {
  return draft.directCost + draft.indirectCost + draft.salaryCost
}

function buildLegalEntityCostDrafts(
  movement: (typeof trainingBudgetMovements)[number],
  totalSubsidizedCost: number
): LegalEntityCostDraft[] {
  const breakdown = legalEntityBreakdownForMovement(movement)
  const grossTotal = breakdown.reduce(
    (sum, item) => sum + item.directCost + item.indirectCost + item.salaryCost,
    0
  )
  const participantTotal = breakdown.reduce(
    (sum, item) => sum + item.participantsCount,
    0
  )

  return breakdown.map((item) => {
    const grossCost = item.directCost + item.indirectCost + item.salaryCost
    const ratio =
      grossTotal > 0
        ? grossCost / grossTotal
        : participantTotal > 0
          ? item.participantsCount / participantTotal
          : 0

    return {
      ...item,
      subsidizedCost: Math.round(totalSubsidizedCost * ratio),
    }
  })
}

function CostBreakdownCard({
  emoji,
  title,
  description,
  value,
  onChange,
  action,
  disabled,
}: {
  emoji: string
  title: string
  description: string
  value: number
  onChange: (n: number) => void
  action?: React.ReactNode
  disabled?: boolean
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="lg"
      border="default"
      borderColor="secondary"
      borderRadius="md"
      background="primary"
    >
      <F0Box display="flex" alignItems="center" gap="md">
        <span aria-hidden className="text-xl">
          {emoji}
        </span>
        <F0Heading as="h4" variant="heading" content={title} />
      </F0Box>
      <F0Text variant="description" content={description} />
      <F0Box display="flex" alignItems="center" gap="md" marginTop="auto">
        <F0Box grow>
          <NumberInput
            label="Amount"
            hideLabel
            value={value}
            onChange={(v) => onChange(v ?? 0)}
            step={50}
            locale="en-US"
            units="EUR"
            disabled={disabled}
          />
        </F0Box>
        {action}
      </F0Box>
    </F0Box>
  )
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
  const [costPerParticipantOpen, setCostPerParticipantOpen] = useState(false)
  const [selectedLegalEntityId, setSelectedLegalEntityId] = useState<
    string | null
  >(null)
  const canSplitByLegalEntity = linkedMovement
    ? participantsByLegalEntityForMovement(linkedMovement).length > 1
    : false
  const costsByLegalEntityEnabled = useCostsByLegalEntityToggle(
    linkedMovement?.groupId ?? "no-linked-group",
    canSplitByLegalEntity
  )
  const [legalEntityCostDrafts, setLegalEntityCostDrafts] = useState<
    LegalEntityCostDraft[]
  >(() =>
    linkedMovement
      ? buildLegalEntityCostDrafts(linkedMovement, initialSubsidy)
      : []
  )

  const legalEntityGrossCost = legalEntityCostDrafts.reduce(
    (sum, item) => sum + grossCostForLegalEntity(item),
    0
  )
  const totalCost = costsByLegalEntityEnabled
    ? legalEntityGrossCost
    : directCost + indirectCost + salaryCost
  const legalEntitySubsidizedCost = legalEntityCostDrafts.reduce(
    (sum, item) => sum + item.subsidizedCost,
    0
  )
  const activeSubsidizedCost = costsByLegalEntityEnabled
    ? legalEntitySubsidizedCost
    : subsidizedCost
  const netCost = Math.max(0, totalCost - activeSubsidizedCost)
  const perParticipant = Math.round(netCost / Math.max(participants, 1))
  const groupCostBreakdown: LegalEntityCostDraft = {
    legalEntityId: "group",
    participantsCount: participants,
    directCost: costsByLegalEntityEnabled
      ? legalEntityCostDrafts.reduce((sum, item) => sum + item.directCost, 0)
      : directCost,
    indirectCost: costsByLegalEntityEnabled
      ? legalEntityCostDrafts.reduce((sum, item) => sum + item.indirectCost, 0)
      : indirectCost,
    salaryCost: costsByLegalEntityEnabled
      ? legalEntityCostDrafts.reduce((sum, item) => sum + item.salaryCost, 0)
      : salaryCost,
    subsidizedCost: activeSubsidizedCost,
  }
  const [showEditInfo, setShowEditInfo] = useState(false)
  const [editInfoDismissed, setEditInfoDismissed] = useState(false)
  const handleLegalEntityCostChange = (
    legalEntityId: string,
    key: LegalEntityCostKey,
    value: number
  ) => {
    if (!editInfoDismissed) setShowEditInfo(true)
    setLegalEntityCostDrafts((current) =>
      current.map((item) =>
        item.legalEntityId === legalEntityId ? { ...item, [key]: value } : item
      )
    )
  }
  const dismissEditInfo = () => {
    setEditInfoDismissed(true)
    setShowEditInfo(false)
  }

  const budgetOptions = [
    { value: "", label: "No budget linked" },
    ...trainingBudgets.map((b) => ({
      value: b.id,
      label: `${b.name} (${b.currency})`,
    })),
  ]

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading as="h3" variant="heading-large" content="Costs" />
        <F0Text
          variant="description"
          content="Track direct, indirect and salary costs for this group. Link to a budget to keep spending under control."
        />
      </F0Box>

      {/* Summary row */}
      <F0Box display="grid" columns="1" gap="xl" md={{ columns: "3" }}>
        <F0Box
          display="flex"
          flexDirection="column"
          gap="xs"
          padding="lg"
          border="default"
          borderColor="secondary"
          borderRadius="md"
          background="primary"
        >
          <F0Text variant="label" content="Total group cost" />
          <F0Text
            variant="description"
            content="Sum of direct, indirect and salary costs."
          />
          <F0Box
            display="flex"
            alignItems="baseline"
            justifyContent="between"
            gap="md"
          >
            <F0Heading
              as="h2"
              variant="heading-large"
              content={formatMoney(totalCost, currency)}
            />
            {linkedMovement && (
              <F0Button
                label="View per participant"
                variant="ghost"
                size="sm"
                disabled={costsByLegalEntityEnabled}
                onClick={() => setCostPerParticipantOpen(true)}
              />
            )}
          </F0Box>
        </F0Box>

        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          padding="lg"
          border="default"
          borderColor="secondary"
          borderRadius="md"
          background="primary"
        >
          <F0Text variant="label" content="Linked budget" />
          <F0Select<string>
            label="Linked budget"
            hideLabel
            placeholder="Select a budget"
            value={budgetId ?? ""}
            onChange={(v: string) => {
              setBudgetId(v || null)
            }}
            options={budgetOptions}
          />
        </F0Box>

        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          padding="lg"
          border="default"
          borderColor="secondary"
          borderRadius="md"
          background="primary"
        >
          <F0Text variant="label" content="Payment status" />
          <F0Select<PaymentStatus>
            label="Payment status"
            hideLabel
            placeholder="—"
            value={paymentStatus}
            onChange={(v: PaymentStatus) => {
              setPaymentStatus(v)
            }}
            disabled={!budgetId}
            options={[
              { value: "", label: "—" },
              { value: "pending", label: "Pending" },
              { value: "paid", label: "Paid" },
            ]}
          />
        </F0Box>
      </F0Box>

      {/* Three cost breakdown cards */}
      <F0Box display="grid" columns="1" gap="xl" md={{ columns: "3" }}>
        <CostBreakdownCard
          emoji="💰"
          title="Direct cost"
          description="Provider fees, materials, room rental and other invoiced expenses."
          value={directCost}
          disabled={costsByLegalEntityEnabled}
          onChange={(value) => {
            setDirectCost(value)
          }}
        />
        <CostBreakdownCard
          emoji="🏢"
          title="Indirect cost"
          description="Overhead allocated to this group (HR, facilities, equipment amortisation)."
          value={indirectCost}
          disabled={costsByLegalEntityEnabled}
          onChange={(value) => {
            setIndirectCost(value)
          }}
        />
        <CostBreakdownCard
          emoji="📝"
          title="Gross salary cost"
          description="Payroll cost of participants and instructors during training hours."
          value={salaryCost}
          disabled={costsByLegalEntityEnabled}
          onChange={(value) => {
            setSalaryCost(value)
          }}
          action={
            <F0Button
              label="Calculate"
              icon={Calculator}
              variant="outline"
              disabled={costsByLegalEntityEnabled}
              onClick={() => setCalculatorOpen((v) => !v)}
            />
          }
        />
      </F0Box>

      {calculatorOpen && (
        <SalaryCostCalculatorDialog
          calculatedValue={28 * participants * training.totalDuration}
          currency={currency}
          onApply={(value) => {
            setSalaryCost(value)
            setCalculatorOpen(false)
          }}
          onClose={() => setCalculatorOpen(false)}
        />
      )}

      <CostsByLegalEntitySection
        movement={linkedMovement}
        legalEntityCostDrafts={legalEntityCostDrafts}
        onLegalEntityCostChange={handleLegalEntityCostChange}
        selectedLegalEntityId={selectedLegalEntityId}
        onOpenLegalEntity={setSelectedLegalEntityId}
        onCloseLegalEntity={() => setSelectedLegalEntityId(null)}
        showEditBanner={showEditInfo}
        onDismissEditBanner={dismissEditInfo}
      />

      {/* Other costs */}
      <F0Box display="flex" flexDirection="column" gap="lg">
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Heading as="h3" variant="heading" content="Other costs" />
            <F0Text
              variant="description"
              content="This cost is not used to calculate the group total cost and is not included in the budget."
            />
          </F0Box>
          <F0Box
            display="flex"
            flexDirection="column"
            gap="md"
            padding="lg"
            border="default"
            borderColor="secondary"
            borderRadius="md"
            background="primary"
          >
            <F0Box display="flex" alignItems="center" gap="md">
              <span aria-hidden className="text-xl">
                🎟️
              </span>
              <F0Heading as="h4" variant="heading" content="Subsidised cost" />
            </F0Box>
            <F0Text
              variant="description"
              content="Training expenses covered by financial aid or bonifications for this group."
            />
            <F0Box maxWidth="80">
              <NumberInput
                label="Subsidised amount"
                hideLabel
                value={subsidizedCost}
                onChange={(v) => {
                  setSubsidizedCost(v ?? 0)
                }}
                step={50}
                locale="en-US"
                units="EUR"
                disabled={costsByLegalEntityEnabled}
              />
            </F0Box>
            <F0Text
              variant="small"
              content={`Net after subsidies: ${formatMoney(netCost, currency)} · ${formatMoney(perParticipant, currency)} per participant`}
            />
          </F0Box>
        </F0Box>

      {linkedMovement && costPerParticipantOpen && (
        <CostPerParticipantSidepanel
          movement={linkedMovement}
          breakdown={groupCostBreakdown}
          onClose={() => setCostPerParticipantOpen(false)}
        />
      )}
    </F0Box>
  )
}

function SalaryCostCalculatorDialog({
  calculatedValue,
  currency,
  onApply,
  onClose,
}: {
  calculatedValue: number
  currency: string
  onApply: (value: number) => void
  onClose: () => void
}) {
  const [value, setValue] = useState(calculatedValue)
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
      position="center"
      width="sm"
      title="Salary cost calculator"
      container={dialogContainer}
      primaryAction={{
        label: "Apply",
        onClick: () => onApply(value),
      }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Box display="flex" alignItems="center" gap="xs">
            <F0Text variant="label" content="Calculated salary cost" />
            <F0Icon icon={InfoCircle} size="xs" color="default" />
          </F0Box>
          <NumberInput
            label="Calculated salary cost"
            hideLabel
            value={value}
            onChange={(v) => setValue(v ?? 0)}
            step={50}
            locale="en-US"
            units={currency}
          />
        </F0Box>
        <F0Box
          display="flex"
          alignItems="start"
          gap="sm"
          padding="md"
          borderRadius="md"
          background="info"
        >
          <F0Icon icon={InfoCircle} size="sm" color="info" />
          <F0Text
            variant="body"
            content="This is calculated by multiplying the cost per hour of each employee by the total course hours."
          />
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}

function CostPerParticipantSidepanel({
  movement,
  breakdown,
  onClose,
}: {
  movement: (typeof trainingBudgetMovements)[number]
  breakdown: LegalEntityCostDraft
  onClose: () => void
}) {
  const participants = participantsForMovement(movement)
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
      title="Cost per participant"
      description={movement.groupName}
      container={dialogContainer}
      disableContentPadding
    >
      <LegalEntityParticipantsPanel
        classId={movement.groupId}
        participants={participants}
        breakdown={breakdown}
      />
    </F0Dialog>
  )
}

function CostsByLegalEntitySection({
  movement,
  legalEntityCostDrafts,
  onLegalEntityCostChange,
  selectedLegalEntityId,
  onOpenLegalEntity,
  onCloseLegalEntity,
  showEditBanner,
  onDismissEditBanner,
}: {
  movement: (typeof trainingBudgetMovements)[number] | null
  legalEntityCostDrafts: LegalEntityCostDraft[]
  onLegalEntityCostChange: (
    legalEntityId: string,
    key: LegalEntityCostKey,
    value: number
  ) => void
  selectedLegalEntityId: string | null
  onOpenLegalEntity: (legalEntityId: string) => void
  onCloseLegalEntity: () => void
  showEditBanner: boolean
  onDismissEditBanner: () => void
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
    legalEntityCostDrafts.map((b) => [b.legalEntityId, b])
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
    <F0Box
      display="flex"
      flexDirection="column"
      gap="xl"
      padding="lg"
      border="default"
      borderColor="secondary"
      borderRadius="xl"
      background="primary"
    >
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="lg"
        padding="md"
        borderRadius="2xl"
        background="primary"
      >
        <F0Box display="flex" flexDirection="column" gap="none">
          <F0Text variant="label" content="Costs by legal entity" />
          <F0Text
            variant="description"
            content="Track and manage all costs per legal entity"
          />
        </F0Box>
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
      </F0Box>

      {isOn && (
        <F0Box display="flex" flexDirection="column" gap="lg">
          {les.map((le) => {
            const breakdown = breakdownMap.get(le.id)
            const leTotal = breakdown
              ? grossCostForLegalEntity(breakdown)
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
                className="border-f1-border bg-f1-background hover:bg-f1-background-hover flex h-16 items-center gap-3 rounded-2xl border border-solid p-3 text-left"
              >
                <F0AvatarIcon size="lg" icon={Office} />
                <F0Box
                  display="flex"
                  flexDirection="column"
                  gap="none"
                  minWidth="0"
                  grow
                >
                  <F0Text variant="label" content={le.legalName} />
                  <F0Text
                    variant="description"
                    content={`${le.countryCode} · ${participantsCount} ${participantsCount === 1 ? "participant" : "participants"}`}
                  />
                </F0Box>
                <F0Text variant="label" content={formatSidepanelMoney(leTotal)} />
                <F0Icon icon={ChevronRight} size="sm" color="secondary" />
              </button>
            )
          })}
        </F0Box>
      )}

      {selectedLegalEntityId && selectedLe && selectedBreakdown && (
        <LegalEntityCostsSidepanel
          movement={movement}
          legalEntity={selectedLe}
          breakdown={selectedBreakdown}
          onCostChange={onLegalEntityCostChange}
          activeTab={sidepanelTab}
          onTabChange={setSidepanelTab}
          onClose={onCloseLegalEntity}
          showEditBanner={showEditBanner}
          onDismissEditBanner={onDismissEditBanner}
        />
      )}
    </F0Box>
  )
}

function CostBreakdownList({
  legalEntityId,
  direct,
  indirect,
  salary,
  subsidized,
  salaryCalculatedValue,
  onCostChange,
}: {
  legalEntityId: string
  direct: number
  indirect: number
  salary: number
  subsidized: number
  salaryCalculatedValue: number
  onCostChange: (
    legalEntityId: string,
    key: LegalEntityCostKey,
    value: number
  ) => void
}) {
  const total = direct + indirect + salary
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  return (
    <F0Box display="flex" flexDirection="column">
      <F0Box display="flex" alignItems="center" height="12">
        <F0Text content="Cost breakdown" variant="label" />
      </F0Box>
      <F0Box
        display="flex"
        flexDirection="column"
        overflow="hidden"
        border="default"
        borderColor="secondary"
        borderRadius="xl"
        background="primary"
        divider="y"
        dividerColor="secondary"
        marginTop="sm"
      >
        <CostBreakdownRow
          label="Direct cost"
          description="Course fees, venue rentals, and training materials"
          value={direct}
          onChange={(value) => onCostChange(legalEntityId, "directCost", value)}
        />
        <CostBreakdownRow
          label="Indirect cost"
          description="Administrative overhead and support costs"
          value={indirect}
          onChange={(value) => onCostChange(legalEntityId, "indirectCost", value)}
        />
        <CostBreakdownRow
          label="Gross salary cost"
          description="Cost of employees' time spent in training"
          value={salary}
          onChange={(value) => onCostChange(legalEntityId, "salaryCost", value)}
          action={
            <F0Button
              label="Calculate"
              hideLabel
              icon={Calculator}
              variant="outline"
              size="sm"
              onClick={() => setCalculatorOpen(true)}
            />
          }
        />
        <CostBreakdownRow
          label="Subsidised cost"
          description="Bonified or subsidised amount assigned to this legal entity"
          value={subsidized}
          onChange={(value) =>
            onCostChange(legalEntityId, "subsidizedCost", value)
          }
        />
      </F0Box>
      <F0Box display="flex" alignItems="center" height="8" paddingY="lg">
        <F0Box height="0.5" width="full" background="secondary" />
      </F0Box>
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        minHeight="16"
        paddingX="lg"
        paddingY="sm"
        border="default"
        borderColor="secondary"
        borderRadius="xl"
        background="primary"
      >
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Total cost" variant="label" />
          <F0Text
            content="Gross cost= Direct + Indirect + Salary"
            variant="description"
          />
        </F0Box>
        <F0Text content={formatSidepanelMoney(total)} variant="label" />
      </F0Box>
      {calculatorOpen && (
        <SalaryCostCalculatorDialog
          calculatedValue={salaryCalculatedValue}
          currency="EUR"
          onApply={(value) => {
            onCostChange(legalEntityId, "salaryCost", value)
            setCalculatorOpen(false)
          }}
          onClose={() => setCalculatorOpen(false)}
        />
      )}
    </F0Box>
  )
}

function LegalEntityCostsSidepanel({
  movement,
  legalEntity,
  breakdown,
  onCostChange,
  activeTab,
  onTabChange,
  onClose,
  showEditBanner,
  onDismissEditBanner,
}: {
  movement: (typeof trainingBudgetMovements)[number]
  legalEntity: NonNullable<ReturnType<typeof findLegalEntity>>
  breakdown: LegalEntityCostDraft
  onCostChange: (
    legalEntityId: string,
    key: LegalEntityCostKey,
    value: number
  ) => void
  activeTab: "cost" | "participants"
  onTabChange: (tab: "cost" | "participants") => void
  onClose: () => void
  showEditBanner: boolean
  onDismissEditBanner: () => void
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
  const calculatedSalary = participants.reduce(
    (sum, participant) =>
      sum +
      salaryCostForEmployeeInGroup(participant.employeeId, movement.groupId),
    0
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
        <F0Box
          paddingX="xl"
          paddingY="lg"
          display="flex"
          flexDirection="column"
          gap="lg"
        >
          {showEditBanner && (
            <F0Box
              display="flex"
              flexDirection="column"
              gap="md"
              padding="md"
              borderRadius="md"
              background="info"
            >
              <F0Box display="flex" alignItems="start" gap="sm">
                <F0Icon icon={InfoCircle} size="sm" color="info" />
                <F0Text
                  variant="body"
                  content="Editing amounts for this legal entity affects the group's total cost."
                />
              </F0Box>
              <F0Box display="flex" alignItems="center" gap="sm">
                <F0Checkbox
                  title="Don't show this again"
                  hideLabel
                  checked={false}
                  onCheckedChange={(checked) => {
                    if (checked === true) onDismissEditBanner()
                  }}
                />
                <F0Text
                  variant="description"
                  content="Don't show this again"
                />
              </F0Box>
            </F0Box>
          )}
          <CostBreakdownList
            legalEntityId={legalEntity.id}
            direct={breakdown.directCost}
            indirect={breakdown.indirectCost}
            salary={breakdown.salaryCost}
            subsidized={breakdown.subsidizedCost}
            salaryCalculatedValue={calculatedSalary}
            onCostChange={onCostChange}
          />
        </F0Box>
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
  onChange,
  action,
}: {
  label: string
  description: string
  value: number
  onChange: (value: number) => void
  action?: ReactNode
}) {
  return (
    <div className="flex h-16 items-center justify-between px-4 py-2">
      <F0Box
        display="flex"
        flexDirection="column"
        gap="xs"
        minWidth="0"
        grow
      >
        <F0Text content={label} variant="label" />
        <F0Text content={description} variant="description" />
      </F0Box>
      <div className="flex shrink-0 items-center gap-2">
        {action}
        <div className="w-40">
          <NumberInput
            label={label}
            hideLabel
            value={value}
            onChange={(nextValue) => onChange(nextValue ?? 0)}
            step={50}
            locale="en-US"
            units="EUR"
          />
        </div>
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
