import { F0Box, F0Icon, F0Text } from "@factorialco/f0-react"
import { Switch } from "@factorialco/f0-react/dist/experimental"
import {
  ChevronDown,
  ChevronRight,
  LockLocked,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type {
  ExpenseFormType,
  FieldRequirement,
  FieldRow,
} from "../forms/fields"
import { RequirementToggle } from "../forms/RequirementToggle"
import type { useExpenseFormsSource } from "../forms/useExpenseFormsSource"

/**
 * Field configuration table used inside the Edit fields modal.
 *
 * Layout (top \u2192 bottom):
 *   1. Column header row \u2014 "Field name | Show / Hide | If shown".
 *   2. Collapsible "Defaults" header row:
 *        \ud83d\udd12  N default fields \u00b7 Required by Factorial          \u2304
 *      Single full-width row, NOT split into the 3-column grid.
 *      Click toggles a section that renders every locked row inline
 *      at the top of the same table. Locked rows reuse the 3-column
 *      structure so they align with the editable rows below:
 *        \u2022 Show toggle: ON, disabled (renders muted green natively).
 *        \u2022 Required/Optional toggle: disabled, reflects configured
 *          value.
 *      Locked fields are part of the product contract \u2014 admins can
 *      audit them but not change them.
 *   3. The editable rows (Subcategory, Payment method, \u2026) with
 *      live Show/Hide + Required/Optional controls.
 *
 * Mutations route through `formsSource.setVisible /
 * setRequirement` so changes propagate to the Preview view.
 */
export function SimpleFieldTable(props: {
  formType: ExpenseFormType
  rows: readonly FieldRow[]
  formsSource: ReturnType<typeof useExpenseFormsSource>
}) {
  const { formType, rows, formsSource } = props

  const lockedRows = rows.filter((r) => r.kind === "locked")
  const editableRows = rows.filter((r) => r.kind === "editable")

  // Defaults section collapsed by default — admins land on the
  // editable rows (the part they actually act on) without locked
  // rows pushing them down.
  const [defaultsExpanded, setDefaultsExpanded] = useState(false)

  return (
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
        paddingX="xl"
        paddingY="md"
        alignItems="center"
        background="secondary"
        gap="md"
      >
        <F0Box colSpan="6">
          <F0Text content="Field name" variant="label" />
        </F0Box>
        <F0Box colSpan="3">
          <F0Text content="Show / Hide" variant="label" />
        </F0Box>
        <F0Box colSpan="3">
          <F0Text content="If shown" variant="label" />
        </F0Box>
      </F0Box>

      {/* Defaults section — rendered OUTSIDE the `divider="y"`
          body so the parent doesn't paint a border between the
          collapsible header and the first locked row. The header
          and locked rows form their own visually-merged zone. */}
      <DefaultsHeaderRow
        count={lockedRows.length}
        expanded={defaultsExpanded}
        onToggle={() => setDefaultsExpanded((v) => !v)}
      />
      {defaultsExpanded && (
        <div
          // Same tint as the header above so the whole defaults
          // block reads as one zone, at half the strength of the
          // column header.
          style={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
          className="flex flex-col divide-y divide-f1-border-default"
        >
          {lockedRows.map((row) => (
            <LockedRow key={row.id} row={row} />
          ))}
        </div>
      )}

      {/* Editable rows body — owns the `divider="y"` so dividers
          appear ONLY between editable rows, never between the
          defaults section and the first editable row, and never
          between the header and its locked rows. */}
      <F0Box
        display="flex"
        flexDirection="column"
        divider="y"
        dividerColor="default"
      >
        {editableRows.map((row) => (
          <EditableRow
            key={row.id}
            row={row}
            onToggleVisible={(visible) =>
              formsSource.setVisible(formType, row.id, visible)
            }
            onChangeRequirement={(req) =>
              formsSource.setRequirement(formType, row.id, req)
            }
          />
        ))}
      </F0Box>
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Section header for the locked "Defaults" rows
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Full-width section header that toggles the locked rows on/off.
 *
 * Visual recipe:
 *   - Background tinted with `background="secondary"` so it reads
 *     as a sub-header instead of a regular row.
 *   - Small lock icon (size="sm") tight against the label, then
 *     the count + provenance copy ("\u00b7 Required by Factorial"),
 *     then a chevron at the far right.
 *   - The whole row is a `<button>` so the entire surface is the
 *     click target (matches the metadata-line pattern used in the
 *     summary view).
 */
function DefaultsHeaderRow(props: {
  count: number
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={props.onToggle}
      // Subtle tint \u2014 ~half the strength of the column-header
      // (`background="secondary"`) above. Token `f1-background-
      // secondary` isn't alpha-aware so we drop to an explicit
      // rgba on a neutral light gray; matches gray-100 @ 50%.
      style={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
      className="flex w-full items-center px-4 py-2 text-left hover:bg-f1-background-secondary"
    >
      <span className="shrink-0 translate-y-px">
        <F0Icon icon={LockLocked} color="default" size="sm" />
      </span>
      <span className="ml-1 min-w-0 flex-1 truncate">
        <F0Text
          content={`**${props.count} default fields** \u00b7 Required by Factorial`}
          variant="body"
          ellipsis
        />
      </span>
      <span className="ml-2 shrink-0">
        <F0Icon
          icon={props.expanded ? ChevronDown : ChevronRight}
          color="default"
          size="sm"
        />
      </span>
    </button>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Rows
 * ──────────────────────────────────────────────────────────────────── */

function EditableRow(props: {
  row: FieldRow
  onToggleVisible: (visible: boolean) => void
  onChangeRequirement: (value: FieldRequirement) => void
}) {
  const { row, onToggleVisible, onChangeRequirement } = props
  if (row.kind !== "editable") return null
  return (
    <F0Box
      display="grid"
      columns="12"
      paddingX="xl"
      paddingY="sm"
      minHeight="12"
      alignItems="center"
      gap="md"
    >
      <F0Box colSpan="6" display="flex" alignItems="center" gap="sm">
        <F0Text content={row.label} variant="label" />
      </F0Box>
      <F0Box colSpan="3" display="flex" alignItems="center" gap="sm">
        <Switch
          title={`Show ${row.label}`}
          hideLabel
          checked={row.visible}
          onCheckedChange={onToggleVisible}
        />
      </F0Box>
      <F0Box colSpan="3" display="flex" alignItems="center">
        {row.visible ? (
          <RequirementToggle
            value={row.requirement}
            onChange={onChangeRequirement}
          />
        ) : null}
      </F0Box>
    </F0Box>
  )
}

/**
 * Read-only row used inside the expanded "Defaults" section.
 *
 * The Show/Hide column renders a disabled Switch in the ON state \u2014
 * the Switch component natively dims its checked colour when
 * disabled, giving the muted-green pill the designer asked for.
 *
 * The Required/Optional segmented toggle is rendered disabled but
 * at full visual strength (via `withoutDisabledAppearance` inside
 * RequirementToggle) so admins can still read the configured value
 * clearly against the tinted defaults background.
 */
function LockedRow(props: { row: FieldRow }) {
  const { row } = props
  if (row.kind !== "locked") return null
  return (
    <F0Box
      display="grid"
      columns="12"
      paddingX="xl"
      paddingY="sm"
      minHeight="12"
      alignItems="center"
      gap="md"
    >
      <F0Box colSpan="6" display="flex" alignItems="center" gap="sm">
        <F0Text content={row.label} variant="label" />
      </F0Box>
      <F0Box colSpan="3" display="flex" alignItems="center" gap="sm">
        <Switch
          title={`${row.label} always shown`}
          hideLabel
          checked
          disabled
          onCheckedChange={() => {}}
        />
      </F0Box>
      <F0Box colSpan="3" display="flex" alignItems="center">
        <RequirementToggle
          value={row.requirement}
          onChange={() => {}}
          disabled
        />
      </F0Box>
    </F0Box>
  )
}
