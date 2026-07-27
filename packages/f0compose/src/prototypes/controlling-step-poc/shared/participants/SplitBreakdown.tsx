import {
  F0Alert,
  F0AvatarPerson,
  F0Box,
  F0Text,
} from "@factorialco/f0-react"
import { NumberInput } from "@factorialco/f0-react/dist/experimental"
import { useMemo } from "react"

import { findEmployee } from "@/fixtures"
import {
  ownerImplicitShare,
  recomputeShares,
  reconcile,
} from "./computeShares"
import type { ExpenseSplit, Participant, SplitMode } from "./types"

/**
 * SplitBreakdown — per-participant share table that opens when the
 * "This expense is shared" toggle is on.
 *
 * Layout mirrors the canonical hand-composed grid used by the
 * policy-settings views (`PaymentMethodsView`,
 * `SubcategoriesView`): bordered F0Box with `display="grid"
 * columns="12"` rows. We picked this over OneDataCollection
 * because DC's table cells aren't natively editable and the spec
 * calls for inline amount editing in `by-amount` mode.
 *
 * Columns:
 *   [1]  Participant  — F0AvatarPerson + name        (cols 1‒8)
 *   [2]  Amount       — €value or <input>            (cols 9‒12, right-aligned)
 *
 * Mode toggle (Equal ↔ By amount) sits in the top-right of the
 * card header, next to the title — exactly like ref image 1.
 *
 * Owner row is first, locked. Internal participants follow in
 * insertion order. A single aggregated externals row sits at the
 * bottom when applicable. Footer shows Receipt total vs Sum of
 * shares + an F0Alert when they don't reconcile (R6).
 */
export function SplitBreakdown(props: {
  ownerEmployeeId: string
  participants: Participant[]
  receiptTotal: number
  mode: SplitMode
  shares: ExpenseSplit["shares"]
  onModeChange: (mode: SplitMode) => void
  onSharesChange: (shares: ExpenseSplit["shares"]) => void
  disabled?: boolean
}) {
  const {
    ownerEmployeeId,
    participants,
    receiptTotal,
    mode,
    shares,
    onModeChange,
    onSharesChange,
    disabled,
  } = props

  const owner = findEmployee(ownerEmployeeId)
  const ownerShare = ownerImplicitShare(receiptTotal, shares)
  const recon = useMemo(
    () => reconcile(receiptTotal, shares),
    [receiptTotal, shares]
  )

  const handleModeChange = (next: SplitMode) => {
    if (disabled) return
    onModeChange(next)
    onSharesChange(
      recomputeShares({
        mode: next,
        receiptTotal,
        participants,
        previousShares: shares,
      })
    )
  }

  const handleAmountChange = (key: string | null, value: number | null) => {
    if (disabled) return
    const amount = value ?? 0
    const next = shares.map((s) =>
      (s.employeeId ?? null) === key ? { ...s, amount } : s
    )
    onSharesChange(next)
  }

  const internalShares = shares.filter((s) => s.employeeId !== null)
  const externalShare = shares.find((s) => s.employeeId === null)
  const externalCount = participants.filter((p) => p.kind === "external")
    .length

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {/* Header: title + mode toggle, ref image 1 top */}
      <div className="flex items-center justify-between">
        <F0Text variant="label" content="Split mode" />
        <div className="flex gap-1 rounded-full bg-f1-background-secondary p-0.5">
          <ModePill
            label="Equal"
            active={mode === "equal"}
            onClick={() => handleModeChange("equal")}
            disabled={disabled}
          />
          <ModePill
            label="By amount"
            active={mode === "by-amount"}
            onClick={() => handleModeChange("by-amount")}
            disabled={disabled}
          />
        </div>
      </div>

      {/* Bordered table card. Same shape as PaymentMethodsView. */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderColor="default"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        {/* Body rows */}
        <F0Box display="flex" flexDirection="column">
          {/* Owner */}
          {owner ? (
            <BreakdownRow
              firstName={
                owner.preferredName ?? owner.fullName.split(" ")[0]
              }
              lastName={
                owner.preferredName
                  ? owner.fullName.replace(`${owner.preferredName} `, "")
                  : owner.fullName.split(" ").slice(1).join(" ")
              }
              avatarSrc={owner.avatarUrl}
              label={`${owner.fullName} · you`}
              amount={ownerShare}
              readOnly
            />
          ) : null}

          {/* Internal participants */}
          {internalShares.map((s) => {
            const emp = findEmployee(s.employeeId!)
            if (!emp) return null
            const first =
              emp.preferredName ?? emp.fullName.split(" ")[0]
            const last = emp.preferredName
              ? emp.fullName.replace(`${emp.preferredName} `, "")
              : emp.fullName.split(" ").slice(1).join(" ")
            return (
              <BreakdownRow
                key={s.employeeId}
                firstName={first}
                lastName={last}
                avatarSrc={emp.avatarUrl}
                label={emp.fullName}
                amount={s.amount}
                readOnly={mode === "equal"}
                onAmountChange={(v) => handleAmountChange(s.employeeId, v)}
                disabled={disabled}
              />
            )
          })}

          {/* Externals (aggregate) */}
          {externalShare ? (
            <BreakdownRow
              firstName="E"
              lastName="X"
              label={`Externals (${externalCount})`}
              amount={externalShare.amount}
              readOnly={mode === "equal"}
              onAmountChange={(v) => handleAmountChange(null, v)}
              disabled={disabled}
              muted
            />
          ) : null}
        </F0Box>

        {/* Footer */}
        <F0Box
          display="grid"
          columns="12"
          paddingX="lg"
          paddingY="md"
          alignItems="center"
          background="secondary"
          gap="md"
        >
          <F0Box colSpan="8">
            <F0Text variant="small" content="Receipt total" />
          </F0Box>
          <F0Box colSpan="4">
            <div className="text-right text-sm tabular-nums text-f1-foreground">
              {eur(recon.receiptTotal)}
            </div>
          </F0Box>

          <F0Box colSpan="8">
            <F0Text variant="small" content="Sum of shares" />
          </F0Box>
          <F0Box colSpan="4">
            <div
              className={
                recon.isReconciled
                  ? "text-right text-sm tabular-nums text-f1-foreground"
                  : "text-right text-sm tabular-nums text-f1-foreground-critical"
              }
            >
              {eur(recon.sumOfShares)}
            </div>
          </F0Box>
        </F0Box>
      </F0Box>

      {!recon.isReconciled ? (
        <F0Alert
          variant="critical"
          title="Shares don't add up to the receipt total"
          description={`Difference: ${eur(recon.delta)}. Adjust the amounts so they sum to ${eur(recon.receiptTotal)}.`}
        />
      ) : null}
    </F0Box>
  )
}

function ModePill(props: {
  label: string
  active: boolean
  onClick: () => void
  disabled?: boolean
}) {
  const { label, active, onClick, disabled } = props
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={
        active
          ? "rounded-full bg-f1-background px-3 py-1 text-sm font-medium text-f1-foreground shadow-sm"
          : "rounded-full px-3 py-1 text-sm text-f1-foreground-secondary hover:text-f1-foreground"
      }
    >
      {label}
    </button>
  )
}

function BreakdownRow(props: {
  firstName: string
  lastName: string
  avatarSrc?: string
  label: string
  amount: number
  readOnly?: boolean
  onAmountChange?: (value: number | null) => void
  disabled?: boolean
  muted?: boolean
}) {
  const {
    firstName,
    lastName,
    avatarSrc,
    label,
    amount,
    readOnly,
    onAmountChange,
    disabled,
    muted,
  } = props
  return (
    <F0Box
      display="grid"
      columns="12"
      paddingX="lg"
      paddingY="md"
      alignItems="center"
      gap="md"
      borderTop="default"
      borderColor="default"
    >
      <F0Box colSpan="8">
        <div
          className={`flex items-center gap-2 ${muted ? "opacity-70" : ""}`}
        >
          <F0AvatarPerson
            firstName={firstName}
            lastName={lastName}
            src={avatarSrc}
            size="xs"
          />
          <span className="text-sm text-f1-foreground">{label}</span>
        </div>
      </F0Box>
      <F0Box colSpan="4">
        {readOnly || !onAmountChange ? (
          <div className="text-right text-sm tabular-nums text-f1-foreground">
            {eur(amount)}
          </div>
        ) : (
          // Native F0 number input from the experimental Forms
          // package — same component F0Form renders for `number`
          // fields. Gives us the right typography, focus ring,
          // borders, and the "€" affix via the `units` prop. We
          // pin the width so the column still right-aligns to the
          // amount column header.
          <div className="flex justify-end">
            <div className="w-32">
              <NumberInput
                hideLabel
                label="Share amount"
                locale="en-EU"
                value={amount}
                onChange={(v) => onAmountChange(v)}
                disabled={disabled}
                min={0}
                maxDecimals={2}
                units="EUR"
              />
            </div>
          </div>
        )}
      </F0Box>
    </F0Box>
  )
}

function eur(n: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n)
}
