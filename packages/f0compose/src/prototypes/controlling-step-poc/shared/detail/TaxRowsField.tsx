import { F0Box, F0Button, F0Select, F0Text } from "@factorialco/f0-react"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { taxTypes, vatRates } from "@/fixtures"

/**
 * Repeatable Tax rows — recreation of the real Factorial expense
 * form's "Tax" section (Tax type + Tax rate on one line, Base amount
 * + Tax amount on the next, "+ Add tax" to append, trash to remove).
 *
 * State is LOCAL (useState) rather than threaded through RHF: the tax
 * breakdown isn't part of the submitter payload the prototype cares
 * about, and keeping it out of the form definition avoids re-feeding
 * the AI form registry (the same loop the `MockProjectField` works
 * around). The field is rendered as an F0Form custom field whose
 * schema value stays `undefined`.
 *
 * Selects use the canonical `F0Select`. If opening the listbox is
 * found to trigger the F0AiChat registry loop (as the Project field
 * does), swap to the `open={false}` mock-cycle pattern — but verify
 * first, since this widget's value never touches RHF.
 */

type TaxRow = {
  id: string
  taxTypeId?: string
  rateId?: string
  base?: string
  tax?: string
}

let taxRowSeq = 0
const newTaxRow = (): TaxRow => ({ id: `tax-row-${taxRowSeq++}` })

const NUMBER_INPUT_CLASS =
  "h-10 w-full rounded-md border border-solid border-f1-border bg-f1-background px-3 text-[14px] leading-normal text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"

export function TaxRowsField() {
  const [rows, setRows] = useState<TaxRow[]>(() => [newTaxRow()])

  const update = (id: string, patch: Partial<TaxRow>) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  const remove = (id: string) =>
    setRows((prev) => (prev.length <= 1 ? prev : prev.filter((r) => r.id !== id)))

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {rows.map((row) => (
        <F0Box
          key={row.id}
          display="flex"
          flexDirection="row"
          alignItems="start"
          gap="md"
        >
          <F0Box display="flex" flexDirection="column" gap="md" grow>
            <F0Box display="grid" columns="2" gap="md">
              <LabeledControl label="Tax type">
                <F0Select
                  label="Tax type"
                  hideLabel
                  placeholder="Select option"
                  size="md"
                  value={row.taxTypeId}
                  options={taxTypes.map((t) => ({ value: t.id, label: t.label }))}
                  onChange={(v: string) => update(row.id, { taxTypeId: v })}
                />
              </LabeledControl>
              <LabeledControl label="Tax rate">
                <F0Select
                  label="Tax rate"
                  hideLabel
                  placeholder="Select option"
                  size="md"
                  value={row.rateId}
                  options={vatRates.map((r) => ({ value: r.id, label: r.label }))}
                  onChange={(v: string) => update(row.id, { rateId: v })}
                />
              </LabeledControl>
            </F0Box>
            <F0Box display="grid" columns="2" gap="md">
              <LabeledControl label="Base amount">
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.base ?? ""}
                  onChange={(e) => update(row.id, { base: e.target.value })}
                  className={NUMBER_INPUT_CLASS}
                />
              </LabeledControl>
              <LabeledControl label="Tax amount">
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.tax ?? ""}
                  onChange={(e) => update(row.id, { tax: e.target.value })}
                  className={NUMBER_INPUT_CLASS}
                />
              </LabeledControl>
            </F0Box>
          </F0Box>
          <F0Box paddingTop="lg">
            <F0Button
              variant="outline"
              size="md"
              icon={Delete}
              label="Remove tax"
              hideLabel
              onClick={() => remove(row.id)}
              disabled={rows.length <= 1}
            />
          </F0Box>
        </F0Box>
      ))}
      <F0Box>
        <F0Button
          variant="outline"
          size="md"
          icon={Add}
          label="Add tax"
          onClick={() => setRows((prev) => [...prev, newTaxRow()])}
        />
      </F0Box>
    </F0Box>
  )
}

/** Small label-above-control wrapper matching the form's field chrome. */
function LabeledControl(props: { label: string; children: React.ReactNode }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={props.label} variant="label" />
      {props.children}
    </F0Box>
  )
}
