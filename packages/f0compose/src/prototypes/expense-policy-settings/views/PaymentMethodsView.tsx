import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { Input } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type { PaymentMethod } from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

/**
 * Payment methods management view (spec §6).
 *
 * Hand-composed grid (NOT editableTable) — same rationale as
 * SubcategoriesView: OneDataCollection's editable table renders
 * misaligned inside our bordered container, so we mirror the
 * CategoriesView grid pattern for visual consistency.
 *
 * Layout: F0Box grid `columns="12"` with spans 8 / 2 / 2 →
 *   1. Name (inline-editable on double-click)
 *   2. (spacer)
 *   3. Delete (critical ghost icon button)
 *
 * Behavioural rules:
 *  - Empty-name commit → "Untitled payment method" (handled in
 *    `renamePaymentMethod`, spec §8).
 *  - Delete is immediate, no confirmation (spec §8).
 *  - Adding a new row enters edit mode automatically so the user
 *    can name it without an extra click.
 */
export function PaymentMethodsView(props: {
  policyData: PolicyData
  /** Hide the heading + description (the modal renders its own title). */
  hideHeader?: boolean
}) {
  const {
    paymentMethods,
    addPaymentMethod,
    renamePaymentMethod,
    deletePaymentMethod,
  } = props.policyData

  // Which row is currently in inline-edit mode. Only one at a time.
  const [editingId, setEditingId] = useState<string | null>(null)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {!props.hideHeader && (
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading content="Payment methods" variant="heading" as="h2" />
          <F0Text
            content="Payment methods are shared across all expense forms. Removing one will not affect previously submitted expenses."
            variant="description"
          />
        </F0Box>
      )}

      {/* Table — same shape as CategoriesView */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderColor="default"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        {/* Header row */}
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
            <F0Text content="Name" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="" variant="label" />
          </F0Box>
        </F0Box>

        {/* Body rows */}
        <F0Box
          display="flex"
          flexDirection="column"
          divider="y"
          dividerColor="default"
        >
          {paymentMethods.map((pm) => (
            <PaymentMethodRow
              key={pm.id}
              paymentMethod={pm}
              isEditing={editingId === pm.id}
              onStartEdit={() => setEditingId(pm.id)}
              onCommitName={(name) => {
                renamePaymentMethod(pm.id, name)
                setEditingId(null)
              }}
              onDelete={() => deletePaymentMethod(pm.id)}
            />
          ))}
        </F0Box>

        {/* Footer with Add */}
        <F0Box
          paddingX="lg"
          paddingY="sm"
          background="secondary"
          display="flex"
          alignItems="center"
        >
          <F0Button
            variant="ghost"
            size="sm"
            icon={Add}
            label="Add payment method"
            onClick={() => {
              const id = addPaymentMethod()
              setEditingId(id)
            }}
          />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

/**
 * Single payment-method row. Mirrors `SubcategoryRow` exactly — kept
 * as a separate component for parity with how Categories /
 * Subcategories pull their row component out, so future tweaks
 * (hover state, ordering, etc.) can be applied uniformly.
 */
function PaymentMethodRow(props: {
  paymentMethod: PaymentMethod
  isEditing: boolean
  onStartEdit: () => void
  onCommitName: (name: string) => void
  onDelete: () => void
}) {
  const [draft, setDraft] = useState(props.paymentMethod.name)

  // Keep the draft in sync if the parent name changes externally
  // (e.g. via the chat copilot).
  if (!props.isEditing && draft !== props.paymentMethod.name) {
    setDraft(props.paymentMethod.name)
  }

  const rowBody = (
    <F0Box
      display="grid"
      columns="12"
      paddingX="lg"
      paddingY="sm"
      minHeight="12"
      alignItems="center"
      gap="md"
    >
      {/* Name cell — single-click enters edit mode */}
      <F0Box colSpan="8" display="flex" alignItems="center" gap="sm">
        {props.isEditing ? (
          <div className="flex-1">
            <Input
              label="Payment method name"
              hideLabel
              autoFocus
              size="sm"
              value={draft}
              onChange={(v) => setDraft(v)}
              onBlur={() => props.onCommitName(draft)}
              onPressEnter={() => props.onCommitName(draft)}
            />
          </div>
        ) : (
          <div
            className="flex-1 cursor-text"
            onClick={() => props.onStartEdit()}
          >
            <F0Text content={props.paymentMethod.name} variant="label" />
          </div>
        )}
      </F0Box>

      {/* Spacer column (visual parity with Categories) */}
      <F0Box colSpan="2" />

      {/* Delete column */}
      <F0Box
        colSpan="2"
        display="flex"
        alignItems="center"
        justifyContent="end"
      >
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button
            variant="outline"
            size="md"
            icon={Delete}
            label={`Delete ${props.paymentMethod.name}`}
            hideLabel
            onClick={() => props.onDelete()}
          />
        </div>
      </F0Box>
    </F0Box>
  )

  return (
    <div className="transition-colors hover:bg-f1-background-hover">
      {rowBody}
    </div>
  )
}
