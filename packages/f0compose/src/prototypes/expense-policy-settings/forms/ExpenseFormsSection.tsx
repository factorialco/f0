import {
  F0Box,
  F0Button,
  F0Heading,
  F0Icon,
  F0Text,
} from "@factorialco/f0-react"
import { Switch } from "@factorialco/f0-react/dist/experimental"
import {
  ChevronDown,
  ChevronRight,
  LockLocked,
  Receipt,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type { PolicyData } from "../data/usePolicyData"
import { PaymentMethodsModal } from "../views/PaymentMethodsModal"
import { SubcategoriesModal } from "../views/SubcategoriesModal"

import { DrillHint, DrillRow } from "./DrillRow"
import type { FieldRow, ModalTarget } from "./fields"
import { RequirementToggle } from "./RequirementToggle"
import { useExpenseFormsSource } from "./useExpenseFormsSource"

/**
 * Center detail pane: the "Expense forms" section.
 *
 * Composition (BR-005, BR-010, INV-002):
 *
 * The table is composed from F0Box + real F0 primitives because
 * OneDataCollection cells cannot host arbitrary JSX (no escape hatch
 * for Switch / RequirementToggle / DrillHint). Per BR-010 we only
 * use existing primitives — no new components.
 *
 * Layout uses an F0Box grid with `columns="12"` and `colSpan` per
 * cell (5 / 2 / 3 / 2) so columns have proportional widths instead
 * of equal quarters. Row dividers come from `divider="y"` on the
 * body container.
 *
 * Columns (spec §1, §2):
 *  1. Field name (with optional inline hint affordance)
 *  2. Type      (subdued data-type label; not configurable)
 *  3. Show / Hide (Switch — or locked "🔒 Always shown")
 *  4. If shown  (RequirementToggle — or static "Required" / "Optional")
 *
 * Iterated UX (slice 1, this revision):
 *
 *  - Category row is `expandable`. Clicking it (anywhere except the
 *    inner controls) toggles inline nested rows directly below it —
 *    one per category, with ONLY the Show/Hide column populated
 *    (toggle the category's `visible` flag). Categories cannot be
 *    renamed/added/deleted from the prototype — admins only toggle
 *    which ones appear.
 *  - Subcategory + Payment method rows are `modalTarget`-bound.
 *    Clicking them opens the corresponding management modal. The
 *    Switch / Required-Optional controls inside those rows stop
 *    click propagation so they don't trigger the modal.
 */
export function ExpenseFormsSection(props: {
  policyData: PolicyData
}) {
  const { rows, setVisible, setRequirement } = useExpenseFormsSource()
  const { categories, subcategories, paymentMethods, toggleCategoryVisible } =
    props.policyData

  // Inline expansion state for the Category row. A Set keeps the
  // shape generic in case other rows become expandable later. Today
  // there's only one expandable row but the contract is the same.
  const [expandedRowIds, setExpandedRowIds] = useState<Set<string>>(new Set())

  // Modal state for Subcategories / Payment methods. Driven by row
  // clicks on the two modal-bound rows. `null` = closed.
  const [openModal, setOpenModal] = useState<ModalTarget | null>(null)

  const toggleExpanded = (rowId: string) => {
    setExpandedRowIds((prev) => {
      const next = new Set(prev)
      if (next.has(rowId)) {
        next.delete(rowId)
      } else {
        next.add(rowId)
      }
      return next
    })
  }

  /**
   * Count of options behind each modal target. Surfaced inline in
   * the field-name cell as "N <noun> set ›" (spec §2 / §10).
   */
  const modalCount = (target: ModalTarget): number => {
    switch (target) {
      case "subcategories":
        return subcategories.length
      case "payment-methods":
        return paymentMethods.length
    }
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {/* Section title */}
      <F0Box display="flex" flexDirection="row" alignItems="center" gap="sm">
        <F0Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="sm"
          background="secondary"
          borderRadius="md"
        >
          <F0Icon icon={Receipt} size="md" />
        </F0Box>
        <F0Heading content="Regular expense" variant="heading" as="h2" />
      </F0Box>

      {/* Table */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        {/* Column header */}
        <F0Box
          display="grid"
          columns="12"
          paddingX="lg"
          paddingY="md"
          alignItems="center"
          background="secondary"
          gap="md"
        >
          <F0Box colSpan="5">
            <F0Text content="Field name" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="Type" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="Show / Hide" variant="label" />
          </F0Box>
          <F0Box colSpan="3">
            <F0Text content="If shown" variant="label" />
          </F0Box>
        </F0Box>

        {/* Body — divider="y" draws a 1px row separator between children */}
        <F0Box
          display="flex"
          flexDirection="column"
          divider="y"
          dividerColor="default"
        >
          {rows.map((row) => {
            const isExpandable = row.expandable === true
            const isExpanded = isExpandable && expandedRowIds.has(row.id)
            const modalTarget = row.modalTarget

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
                {/* Field name cell — includes inline hint when applicable */}
                <F0Box colSpan="5" display="flex" alignItems="center" gap="sm">
                  {/* Chevron for expandable rows */}
                  {isExpandable && (
                    <F0Icon
                      icon={isExpanded ? ChevronDown : ChevronRight}
                      size="sm"
                    />
                  )}
                  <F0Text content={row.label} variant="label" />
                  {modalTarget === "subcategories" && (
                    <DrillHint label={`${modalCount(modalTarget)} set`} />
                  )}
                  {modalTarget === "payment-methods" && (
                    <DrillHint label={`${modalCount(modalTarget)} set`} />
                  )}
                  {/* Category row: no inline hint. The chevron on
                      the left + the row's clickability already
                      communicate the affordance; the redundant
                      "8 categories set ›" added visual noise. */}
                </F0Box>

                {/* Type column (spec §1) — subdued data-type label */}
                <F0Box colSpan="2">
                  <F0Text content={row.type} variant="description" />
                </F0Box>

                {/* Show / Hide column */}
                <F0Box colSpan="2" display="flex" alignItems="center" gap="sm">
                  {row.kind === "locked" ? (
                    <>
                      <F0Icon icon={LockLocked} size="sm" />
                      <F0Text content="Always shown" variant="body" />
                    </>
                  ) : (
                    <ClickStopper>
                      <Switch
                        title={`Show ${row.label}`}
                        hideLabel
                        checked={row.visible}
                        onCheckedChange={(checked) =>
                          setVisible(row.id, checked)
                        }
                      />
                      {row.hasSettings && (
                        <F0Button
                          variant="ghost"
                          size="md"
                          icon={Settings}
                          label={`Configure ${row.label}`}
                          hideLabel
                          onClick={() => {}}
                        />
                      )}
                    </ClickStopper>
                  )}
                </F0Box>

                {/* If shown column */}
                <F0Box colSpan="3" display="flex" alignItems="center">
                  {renderRequirement(row, (value) =>
                    setRequirement(row.id, value)
                  )}
                </F0Box>
              </F0Box>
            )

            // Modal-bound rows: wrap the body in a clickable
            // container that opens the corresponding modal.
            if (modalTarget) {
              return (
                <DrillRow
                  key={row.id}
                  onClick={() => setOpenModal(modalTarget)}
                >
                  {rowBody}
                </DrillRow>
              )
            }

            // Expandable rows: wrap the body in a clickable
            // container that toggles inline expansion, and render
            // the nested category rows directly underneath.
            if (isExpandable) {
              return (
                <div key={row.id}>
                  <DrillRow onClick={() => toggleExpanded(row.id)}>
                    {rowBody}
                  </DrillRow>
                  {isExpanded && (
                    <F0Box
                      display="flex"
                      flexDirection="column"
                      background="secondary"
                      divider="y"
                      dividerColor="default"
                    >
                      {categories.map((cat) => (
                        <NestedCategoryRow
                          key={cat.id}
                          name={cat.name}
                          visible={cat.visible}
                          onToggle={() => toggleCategoryVisible(cat.id)}
                        />
                      ))}
                    </F0Box>
                  )}
                </div>
              )
            }

            return <div key={row.id}>{rowBody}</div>
          })}
        </F0Box>
      </F0Box>

      {/* Modals — rendered as siblings of the table so they overlay
          the entire page. F0Dialog manages its own portal + backdrop. */}
      <SubcategoriesModal
        isOpen={openModal === "subcategories"}
        onClose={() => setOpenModal(null)}
        policyData={props.policyData}
      />
      <PaymentMethodsModal
        isOpen={openModal === "payment-methods"}
        onClose={() => setOpenModal(null)}
        policyData={props.policyData}
      />
    </F0Box>
  )
}

/**
 * Nested row rendered when the Category parent row is expanded.
 *
 * Only the Show/Hide column is populated — categories cannot be
 * renamed/added/deleted from the prototype. The other columns
 * (Field name with extra left indent, Type blank, If shown blank)
 * mirror the parent table grid for visual alignment.
 *
 * Indent: an empty F0Box on the left edge of the name cell adds the
 * 24px gutter that signals nesting; the chevron column of the parent
 * gives us the visual anchor.
 */
function NestedCategoryRow(props: {
  name: string
  visible: boolean
  onToggle: () => void
}) {
  return (
    <F0Box
      display="grid"
      columns="12"
      paddingX="lg"
      paddingY="sm"
      minHeight="10"
      alignItems="center"
      gap="md"
    >
      <F0Box colSpan="5" display="flex" alignItems="center" gap="md">
        {/* Indent block — matches the chevron width in the parent. */}
        <F0Box width="4" />
        <F0Text content={props.name} variant="body" />
      </F0Box>
      <F0Box colSpan="2" />
      <F0Box colSpan="2">
        <Switch
          title={`Show ${props.name}`}
          hideLabel
          checked={props.visible}
          onCheckedChange={() => props.onToggle()}
        />
      </F0Box>
      <F0Box colSpan="3" />
    </F0Box>
  )
}

/**
 * Renders the "If shown" cell. Locked rows show static text; editable
 * rows show the RequirementToggle when visible and empty when hidden.
 * Per spec §2 the toggle must not bubble its clicks up to the row
 * click handler — wrapped in <ClickStopper>.
 */
function renderRequirement(
  row: FieldRow,
  onChange: (value: "required" | "optional") => void
) {
  if (row.kind === "locked") {
    return (
      <F0Text
        content={row.requirement === "required" ? "Required" : "Optional"}
        variant="body"
      />
    )
  }
  if (!row.visible) return null
  return (
    <ClickStopper>
      <RequirementToggle value={row.requirement} onChange={onChange} />
    </ClickStopper>
  )
}

/**
 * Tiny click-eating wrapper so interactive controls inside a
 * clickable row don't trigger the row's click handler. Single-line
 * bare div is acceptable under BR-010 — there is no F0 primitive
 * for this.
 */
function ClickStopper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}
