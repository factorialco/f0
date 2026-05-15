import { useCallback, useState } from "react"

import {
  initialFields,
  type FieldRequirement,
  type FieldRow,
} from "./fields"

/**
 * Visual-only state for the Expense Forms table. Per BR-008 / AC-006,
 * toggle clicks update the UI immediately; nothing is persisted.
 *
 * Setters are no-ops for locked rows by construction (the UI never
 * exposes those controls), but we guard anyway so an agent-driven
 * action via the One chat can't corrupt them.
 */
export function useExpenseFormsSource() {
  const [rows, setRows] = useState<FieldRow[]>(initialFields)

  const setVisible = useCallback((id: string, visible: boolean) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.id !== id) return row
        if (row.kind === "locked") return row
        return { ...row, visible }
      })
    )
  }, [])

  const setRequirement = useCallback(
    (id: string, requirement: FieldRequirement) => {
      setRows((prev) =>
        prev.map((row) => {
          if (row.id !== id) return row
          if (row.kind === "locked") return row
          return { ...row, requirement }
        })
      )
    },
    []
  )

  return { rows, setVisible, setRequirement }
}
