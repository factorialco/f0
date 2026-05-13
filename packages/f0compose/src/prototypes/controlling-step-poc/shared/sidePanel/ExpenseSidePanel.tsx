import { F0Box, F0Button, F0Dialog, F0TagStatus, F0Text } from "@factorialco/f0-react"
import { Tabs } from "@factorialco/f0-react/dist/experimental"
import { useMemo, useState } from "react"

import { STATUS_LABEL, STATUS_VARIANT } from "../expenseStatus"
import type { SpendingRow } from "../rows"
import { ControllingForm, type ControllingFormData } from "./ControllingForm"

/**
 * Unified expense side panel.
 *
 * Mirrors the panel the f0 team is building behind the
 * `dev_expenses_f0_sidepanel` feature flag: a wide, right-anchored
 * `F0Dialog` with secondary tabs (Detail · Comments · Alerts ·
 * Accounting/Controlling). Background list stays interactive so finance
 * can keep selecting rows while the panel is open.
 *
 * The single component covers two contexts (Spec D BR-001, INV-004 —
 * "same chrome, different form"):
 *
 *   - `variant === "detail"`: read-only summary used everywhere except
 *     Pending Controlling. Default tab is Detail.
 *
 *   - `variant === "controlling"`: editable controlling form replaces
 *     the Accounting tab; default tab is Controlling. Footer surfaces
 *     `Save changes`, `Mark as controlled` and `Reject` actions.
 *
 *   - `variant === "bulk-edit"`: same controlling form, but pre-filled
 *     empty and applied to every selected row on submit
 *     (Spec D F-002 / BR-003 / BR-005). Header swaps to a "Editing N
 *     expenses" badge so finance knows the scope.
 */

export type ExpenseSidePanelVariant = "detail" | "controlling" | "bulk-edit"

const tabsForVariant: Record<
  ExpenseSidePanelVariant,
  Array<{ id: string; label: string }>
> = {
  detail: [
    { id: "detail", label: "Detail" },
    { id: "comments", label: "Comments" },
    { id: "alerts", label: "Alerts" },
    { id: "accounting", label: "Accounting" },
  ],
  controlling: [
    { id: "controlling", label: "Controlling" },
    { id: "detail", label: "Detail" },
    { id: "comments", label: "Comments" },
    { id: "alerts", label: "Alerts" },
  ],
  "bulk-edit": [{ id: "controlling", label: "Bulk edit" }],
}

const defaultTabFor: Record<ExpenseSidePanelVariant, string> = {
  detail: "detail",
  controlling: "controlling",
  "bulk-edit": "controlling",
}

export function ExpenseSidePanel(props: {
  /**
   * For `detail`/`controlling`: the row being viewed/edited.
   * For `bulk-edit`: representative row (used only for the header badge).
   */
  row: SpendingRow | null
  variant: ExpenseSidePanelVariant
  /** For `bulk-edit` only — count of rows the apply will hit. */
  bulkSelectionCount?: number
  isOpen: boolean
  onClose: () => void
  /** Save controlling fields without changing state (BR-005, BR-011). */
  onSaveControlling?: (data: ControllingFormData) => void
  /** Mark the row(s) as controlled — fires EV-001 (Spec D). */
  onMarkControlled?: () => void
  /** Reject — transitions to Rejected and closes the panel (BR-007). */
  onReject?: () => void
  /** Apply controlling values to every selected row (bulk-edit variant). */
  onBulkApply?: (data: ControllingFormData) => void
}) {
  const {
    row,
    variant,
    bulkSelectionCount,
    isOpen,
    onClose,
    onSaveControlling,
    onMarkControlled,
    onReject,
    onBulkApply,
  } = props

  const tabs = tabsForVariant[variant]
  const [activeTab, setActiveTab] = useState<string>(defaultTabFor[variant])

  const headerTitle = useMemo(() => {
    if (variant === "bulk-edit") {
      return `Editing ${bulkSelectionCount ?? 0} expenses`
    }
    return row?.name ?? ""
  }, [variant, bulkSelectionCount, row])

  const headerDescription = useMemo(() => {
    if (variant === "bulk-edit") {
      return "Changes apply to every selected expense. Marking as controlled is a separate action."
    }
    if (!row) return ""
    return `${row.description} · ${formatEUR(row.amount)}`
  }, [variant, row])

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      width="lg"
      title={headerTitle}
      description={headerDescription}
    >
      <F0Box display="flex" flexDirection="column" gap="none">
        {/* Status badge — only meaningful when a single row is in scope. */}
        {variant !== "bulk-edit" && row && (
          <F0Box padding="md">
            <F0TagStatus
              text={STATUS_LABEL[row.status]}
              variant={STATUS_VARIANT[row.status]}
            />
          </F0Box>
        )}

        {/* Tabs — per-tab onClick + remount on activeTabId change so the
            URL-sync gotcha (skill: f0-prototype) doesn't bite us. */}
        <Tabs
          key={activeTab}
          secondary
          tabs={tabs.map((t) => ({
            ...t,
            onClick: () => setActiveTab(t.id),
          }))}
          activeTabId={activeTab}
        />

        {/* Tab content */}
        <F0Box padding="md">
          {activeTab === "detail" && row && <DetailPane row={row} />}
          {activeTab === "comments" && <CommentsPane />}
          {activeTab === "alerts" && row && <AlertsPane row={row} />}
          {activeTab === "accounting" && row && (
            <AccountingPane row={row} />
          )}
          {activeTab === "controlling" && isOpen && (
            <ControllingForm
              // Remount the form when we switch between bulk-edit and
              // per-row editing — the AI form registry treats the same
              // form name + different defaultValues as a new
              // registration, and a clean remount is cheaper than
              // diffing the in-flight form state.
              key={variant === "bulk-edit" ? "bulk" : row?.id ?? "none"}
              defaultValues={
                variant === "bulk-edit"
                  ? undefined
                  : row?.controlling
              }
              submitLabel={
                variant === "bulk-edit"
                  ? `Apply to ${bulkSelectionCount ?? 0} expenses`
                  : "Save changes"
              }
              onSave={(data) => {
                if (variant === "bulk-edit") {
                  onBulkApply?.(data)
                } else {
                  onSaveControlling?.(data)
                }
              }}
            />
          )}
        </F0Box>

        {/* Per-row controlling footer — Mark as controlled / Reject.
            BR-005: bulk-edit MUST NOT auto-mark; so this footer is
            hidden for the bulk variant. */}
        {variant === "controlling" && (
          <F0Box
            display="flex"
            flexDirection="row"
            gap="sm"
            padding="md"
            justifyContent="end"
            borderTop="default"
          >
            <F0Button
              label="Reject"
              variant="critical"
              onClick={onReject ?? (() => {})}
            />
            <F0Button
              label="Mark as controlled"
              variant="default"
              onClick={onMarkControlled ?? (() => {})}
            />
          </F0Box>
        )}
      </F0Box>
    </F0Dialog>
  )
}

// ---------------------------------------------------------------------
// Tab panes — small, JSX-free helpers stay in the same file because
// they're tiny and only consumed here.
// ---------------------------------------------------------------------

function DetailPane({ row }: { row: SpendingRow }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <DetailRow label="Amount" value={formatEUR(row.amount)} />
      <DetailRow label="Category" value={row.description} />
      <DetailRow label="Date" value={formatDate(row.date)} />
      <DetailRow label="Status" value={STATUS_LABEL[row.status]} />
    </F0Box>
  )
}

function CommentsPane() {
  return (
    <F0Text
      content="No comments yet. Comments from the approval flow will appear here."
      variant="description"
    />
  )
}

function AlertsPane({ row }: { row: SpendingRow }) {
  if (row.alerts.length === 0) {
    return (
      <F0Text
        content="No alerts on this expense."
        variant="description"
      />
    )
  }
  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      {row.alerts.map((a) => (
        <F0Box
          key={a}
          padding="sm"
          background="warning"
          borderRadius="md"
        >
          <F0Text content={alertLabel(a)} variant="body" />
        </F0Box>
      ))}
    </F0Box>
  )
}

function AccountingPane({ row }: { row: SpendingRow }) {
  if (!row.controlling) {
    return (
      <F0Text
        content="No accounting data yet — finance has not coded this expense."
        variant="description"
      />
    )
  }
  const c = row.controlling
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <DetailRow label="Category" value={c.category ?? "—"} />
      <DetailRow label="Subcategory" value={c.subcategory ?? "—"} />
      <DetailRow label="Cost center" value={c.costCenter ?? "—"} />
      <DetailRow label="Project" value={c.project ?? "—"} />
      <DetailRow label="VAT rate" value={c.vatRate ?? "—"} />
      <DetailRow label="Description" value={c.description ?? "—"} />
    </F0Box>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={label} variant="label" />
      <F0Text content={value} variant="body" />
    </F0Box>
  )
}

const eurFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
})
function formatEUR(amount: number) {
  return eurFormatter.format(amount)
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "numeric",
})
function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso + "T00:00:00Z"))
}

function alertLabel(a: string) {
  switch (a) {
    case "late-submission":
      return "Late expense submission"
    case "receipt-after-timeframe":
      return "Receipt submitted after required timeframe"
    case "receipt-mismatch":
      return "Receipt amount does not match the expense"
    default:
      return a
  }
}
