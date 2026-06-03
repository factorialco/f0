import { F0Box, F0Button, F0Select, F0Text } from "@factorialco/f0-react"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { costCenters } from "@/fixtures"

/**
 * Repeatable Cost-center allocation table — recreation of the real
 * Factorial expense form's "Cost centers" section: a two-column table
 * (Cost center · Dedication %), a running Total that turns critical
 * when it isn't 100%, "+ Add cost center" to append, trash to remove.
 *
 * Local state only (see TaxRowsField for the rationale): the
 * allocation isn't part of the submitter payload and staying out of
 * RHF avoids re-feeding the AI form registry.
 */

type AllocationRow = {
  id: string
  costCenterId?: string
  dedication?: string
}

let ccRowSeq = 0
const newRow = (): AllocationRow => ({ id: `cc-row-${ccRowSeq++}` })

const NUMBER_INPUT_CLASS =
  "h-10 w-full rounded-md border border-solid border-f1-border bg-f1-background px-3 text-[14px] leading-normal text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"

export function CostCentersField() {
  const [rows, setRows] = useState<AllocationRow[]>(() => [newRow()])

  const update = (id: string, patch: Partial<AllocationRow>) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  const remove = (id: string) =>
    setRows((prev) => (prev.length <= 1 ? prev : prev.filter((r) => r.id !== id)))

  const total = rows.reduce((sum, r) => {
    const n = Number.parseFloat(r.dedication ?? "")
    return sum + (Number.isFinite(n) ? n : 0)
  }, 0)
  const totalIsValid = total === 100

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        overflow="hidden"
        divider="y"
        dividerColor="default"
      >
        {/* Header */}
        <F0Box
          display="grid"
          columns="2"
          gap="md"
          paddingX="md"
          paddingY="sm"
          background="secondary"
          alignItems="center"
        >
          <F0Text content="Cost center" variant="label" />
          <F0Text content="Dedication (%)" variant="label" />
        </F0Box>

        {/* Rows */}
        {rows.map((row) => (
          <F0Box
            key={row.id}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="md"
            paddingX="md"
            paddingY="sm"
          >
            <F0Box grow>
              <F0Select
                label="Cost center"
                hideLabel
                placeholder="Select cost center"
                size="md"
                value={row.costCenterId}
                options={costCenters.map((c) => ({
                  value: c.id,
                  label: `${c.name} (${c.code})`,
                }))}
                onChange={(v: string) => update(row.id, { costCenterId: v })}
              />
            </F0Box>
            <F0Box width="32">
              <input
                type="number"
                inputMode="decimal"
                min={0}
                max={100}
                placeholder="Enter value"
                value={row.dedication ?? ""}
                onChange={(e) => update(row.id, { dedication: e.target.value })}
                className={NUMBER_INPUT_CLASS}
              />
            </F0Box>
            <F0Button
              variant="outline"
              size="md"
              icon={Delete}
              label="Remove cost center"
              hideLabel
              onClick={() => remove(row.id)}
              disabled={rows.length <= 1}
            />
          </F0Box>
        ))}

        {/* Total */}
        <F0Box
          display="grid"
          columns="2"
          gap="md"
          paddingX="md"
          paddingY="sm"
          background="secondary"
          alignItems="center"
        >
          <F0Text content="Total" variant="label" />
          {totalIsValid ? (
            <F0Text content={total.toFixed(2)} variant="body" />
          ) : (
            <span className="text-[14px] font-medium leading-normal text-f1-foreground-critical">
              {total.toFixed(2)}
            </span>
          )}
        </F0Box>
      </F0Box>
      <F0Box>
        <F0Button
          variant="outline"
          size="md"
          icon={Add}
          label="Add cost center"
          onClick={() => setRows((prev) => [...prev, newRow()])}
        />
      </F0Box>
    </F0Box>
  )
}
