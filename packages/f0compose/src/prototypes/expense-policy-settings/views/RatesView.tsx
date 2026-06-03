import { F0Box, F0Button, F0Text } from "@factorialco/f0-react"
import { Input } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { useAiChat } from "@/copilot"

import type { Rate, RateFormType, RateScope } from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

/**
 * Rates management view (Per diem + Mileage forms).
 *
 * The view mirrors the structural language of `SubcategoriesView`
 * (bordered card, group header on a secondary background, body
 * rows, ghost-button add footer) so the modal feels consistent
 * with the Subcategories and Payment methods modals. The only
 * structural difference is that rates carry more than a single
 * name field — each row exposes:
 *
 *   [name (input)] [amount (input)] [currency chip] [scope chip] [🗑]
 *
 * All four data cells are inline-editable; there is no nested
 * "edit rate" modal (decision: B). The chat is the canonical
 * creation path for non-trivial values (decision: A) and the
 * only path for non-trivial scopes (decision: B-scope).
 *
 * Why a hand-rolled grid (and not OneDataCollection):
 *  - The cells need to host arbitrary JSX (Input, ghost chips,
 *    delete button), which OneDataCollection's typed cell renderers
 *    cannot accommodate cleanly today.
 *  - The matching `SubcategoriesView` already uses the same
 *    F0Box-grid composition, so consistency wins.
 *
 * Currency chip — slice 1 ships a three-value cycle (EUR → USD →
 * GBP → EUR). Wider currency coverage is a chat-only flow ("set
 * the rate currency to BRL") so the chip stays compact.
 *
 * Scope chip — clicking it composes a chat message asking the
 * agent to walk the admin through scope configuration. The chip
 * label reflects the currently-configured scope so admins always
 * see who the rate applies to without opening anything.
 */
export function RatesView(props: {
  formType: RateFormType
  policyData: PolicyData
  /** Hide the heading — the modal renders its own title. */
  hideHeader?: boolean
}) {
  const {
    rates,
    addRate,
    renameRate,
    setRateAmount,
    setRateCurrency,
    deleteRate,
  } = props.policyData

  const [editingNameId, setEditingNameId] = useState<string | null>(null)
  const [editingAmountId, setEditingAmountId] = useState<string | null>(null)

  // Filter rates down to the form's slice. Order is the insertion
  // order from `usePolicyData` (newest at the bottom), which matches
  // how SubcategoriesView orders its rows.
  const rows = rates.filter((r) => r.formType === props.formType)

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {/* One bordered card per form. We don't render a group header
          here (the modal title already says e.g. "Per diem rates")
          — the bordered container alone gives the visual anchor. */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderColor="secondary"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        {/* Header row — matches the body grid (spans 4/2/2/3/1) so
            cell labels line up with the row content. `background="secondary"`
            and `variant="label"` mirror PaymentMethodsView and
            SubcategoriesView, giving the modal table a consistent
            top-frame across the prototype. The trailing delete cell
            has no label (intentional — same as PaymentMethodsView). */}
        <F0Box
          display="grid"
          columns="12"
          paddingX="lg"
          paddingY="md"
          alignItems="center"
          background="secondary"
          gap="md"
        >
          <F0Box colSpan="4">
            <F0Text content="Name" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="Amount" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="Currency" variant="label" />
          </F0Box>
          <F0Box colSpan="3">
            <F0Text content="Applies to" variant="label" />
          </F0Box>
          <F0Box colSpan="1" />
        </F0Box>

        {/* Body rows — `divider="y"` matches SubcategoriesView. */}
        <F0Box
          display="flex"
          flexDirection="column"
          divider="y"
          dividerColor="default"
        >
          {rows.map((rate) => (
            <RateRow
              key={rate.id}
              rate={rate}
              isEditingName={editingNameId === rate.id}
              isEditingAmount={editingAmountId === rate.id}
              onStartEditName={() => {
                setEditingNameId(rate.id)
                setEditingAmountId(null)
              }}
              onCommitName={(name) => {
                renameRate(rate.id, name)
                setEditingNameId(null)
              }}
              onStartEditAmount={() => {
                setEditingAmountId(rate.id)
                setEditingNameId(null)
              }}
              onCommitAmount={(amount) => {
                setRateAmount(rate.id, amount)
                setEditingAmountId(null)
              }}
              onCycleCurrency={() => {
                const next = nextCurrency(rate.currency)
                setRateCurrency(rate.id, next)
              }}
              onDelete={() => deleteRate(rate.id)}
              formType={props.formType}
            />
          ))}
        </F0Box>

        {/* Footer — Add rate. Same ghost-button pattern as
            SubcategoriesView's CategoryGroup footer. New rows land
            in name-edit mode so the user can type immediately. */}
        <F0Box
          paddingX="lg"
          paddingY="sm"
          background="secondary"
          display="flex"
          alignItems="center"
          borderTop="default"
          borderColor="default"
        >
          <F0Button
            variant="ghost"
            size="sm"
            icon={Add}
            label="Add rate"
            onClick={() => {
              const id = addRate(props.formType)
              setEditingNameId(id)
              setEditingAmountId(null)
            }}
          />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Single rate row — four inline-editable cells + delete.
 *
 * Grid spans (12-col): 4 name / 2 amount / 2 currency / 3 scope / 1
 * delete. The delete cell right-aligns its content so the icon hugs
 * the row edge.
 * ──────────────────────────────────────────────────────────────────── */

function RateRow(props: {
  rate: Rate
  isEditingName: boolean
  isEditingAmount: boolean
  onStartEditName: () => void
  onCommitName: (name: string) => void
  onStartEditAmount: () => void
  onCommitAmount: (amount: number) => void
  onCycleCurrency: () => void
  onDelete: () => void
  formType: RateFormType
}) {
  const { appendMessages } = useAiChat()
  const [nameDraft, setNameDraft] = useState(props.rate.name)
  const [amountDraft, setAmountDraft] = useState(String(props.rate.amount))

  // Re-sync local drafts when the upstream value changes (e.g. the
  // chat updated the rate). Same idempotent pattern as
  // SubcategoryRow's draft re-sync block.
  if (!props.isEditingName && nameDraft !== props.rate.name) {
    setNameDraft(props.rate.name)
  }
  if (!props.isEditingAmount && amountDraft !== String(props.rate.amount)) {
    setAmountDraft(String(props.rate.amount))
  }

  const handleConfigureScope = () => {
    // Defer scope configuration to the chat (decision: B-scope). We
    // post a user message that names the rate and the form so the
    // agent can pick up context without needing extra round-trips.
    // `persist: false` keeps it ephemeral — the message exists for
    // the current chat session only.
    const formLabel = props.formType === "per-diem" ? "per diem" : "mileage"
    const rateLabel = props.rate.name.trim() === "" ? "this rate" : `"${props.rate.name}"`
    appendMessages(
      [
        {
          role: "user",
          content: `Configure scope for ${formLabel} rate ${rateLabel}. Who should it apply to?`,
        },
      ],
      { persist: false }
    )
  }

  return (
    <F0Box
      display="grid"
      columns="12"
      paddingX="lg"
      paddingY="sm"
      minHeight="12"
      alignItems="center"
      gap="md"
    >
      {/* Name */}
      <F0Box colSpan="4" display="flex" alignItems="center" gap="sm">
        {props.isEditingName ? (
          <div className="flex-1">
            <Input
              label="Rate name"
              hideLabel
              autoFocus
              size="sm"
              value={nameDraft}
              onChange={(v) => setNameDraft(v)}
              onBlur={() => props.onCommitName(nameDraft)}
              onPressEnter={() => props.onCommitName(nameDraft)}
            />
          </div>
        ) : (
          <div
            className="flex-1 cursor-text"
            onClick={() => props.onStartEditName()}
          >
            <F0Text content={props.rate.name} variant="label" />
          </div>
        )}
      </F0Box>

      {/* Amount — same inline-input pattern as Name. We use a plain
          Input typed as `text` rather than the heavier NumberInput
          because the cell only needs basic numeric entry, and the
          modal does no validation (BR-008). `inputMode="decimal"`
          on the underlying input gives mobile keyboards the right
          layout. The committed value goes through `Number(...)` →
          `setRateAmount`, which guards against NaN. */}
      <F0Box colSpan="2" display="flex" alignItems="center">
        {props.isEditingAmount ? (
          <div className="flex-1">
            <Input
              label="Rate amount"
              hideLabel
              autoFocus
              size="sm"
              value={amountDraft}
              onChange={(v) => setAmountDraft(v)}
              onBlur={() => props.onCommitAmount(Number(amountDraft))}
              onPressEnter={() => props.onCommitAmount(Number(amountDraft))}
            />
          </div>
        ) : (
          <div
            className="flex-1 cursor-text"
            onClick={() => props.onStartEditAmount()}
          >
            <F0Text
              content={formatAmount(props.rate.amount)}
              variant="body"
            />
          </div>
        )}
      </F0Box>

      {/* Currency chip — ghost button cycling through EUR/USD/GBP.
          Wider coverage stays a chat-only flow. */}
      <F0Box colSpan="2" display="flex" alignItems="center">
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button
            variant="ghost"
            size="sm"
            label={props.rate.currency}
            onClick={() => props.onCycleCurrency()}
          />
        </div>
      </F0Box>

      {/* Scope chip — opens chat (decision: B-scope). Always
          shows the human-readable scope summary; clicking fires
          `appendMessages` so the agent can drive the picker. */}
      <F0Box colSpan="3" display="flex" alignItems="center">
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button
            variant="ghost"
            size="sm"
            label={scopeLabel(props.rate.scope)}
            onClick={() => handleConfigureScope()}
          />
        </div>
      </F0Box>

      {/* Delete */}
      <F0Box colSpan="1" display="flex" alignItems="center" justifyContent="end">
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button
            variant="outline"
            size="md"
            icon={Delete}
            label={`Delete ${props.rate.name || "rate"}`}
            hideLabel
            onClick={() => props.onDelete()}
          />
        </div>
      </F0Box>
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Helpers
 * ──────────────────────────────────────────────────────────────────── */

const CURRENCY_CYCLE = ["EUR", "USD", "GBP"] as const

/**
 * Next value in the currency cycle. Unknown currencies (set by the
 * chat) snap back to the first entry so the chip stays predictable.
 */
function nextCurrency(current: string): string {
  const idx = CURRENCY_CYCLE.indexOf(current as (typeof CURRENCY_CYCLE)[number])
  if (idx === -1) return CURRENCY_CYCLE[0]
  return CURRENCY_CYCLE[(idx + 1) % CURRENCY_CYCLE.length]
}

/**
 * Format the numeric amount for display. Two decimal places when
 * the value has a fractional component, integer otherwise — keeps
 * "0.26" readable while not adding noise to "70". Locale is fixed
 * to `en-US` to keep the prototype deterministic; production would
 * thread the company locale through.
 */
function formatAmount(amount: number): string {
  const decimals = Number.isInteger(amount) ? 0 : 2
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)
}

/**
 * Human-readable scope summary for the chip. Counts are not pluralised
 * (`"1 entities"`) because slice 1 ships only with `everyone` seeds;
 * production-grade pluralisation lands when the agent starts writing
 * non-trivial scopes.
 */
function scopeLabel(scope: RateScope): string {
  switch (scope.kind) {
    case "everyone":
      return "Everyone"
    case "entities":
      return scope.entityIds.length === 1
        ? "1 entity"
        : `${scope.entityIds.length} entities`
    case "people":
      return scope.personIds.length === 1
        ? "1 person"
        : `${scope.personIds.length} people`
  }
}
