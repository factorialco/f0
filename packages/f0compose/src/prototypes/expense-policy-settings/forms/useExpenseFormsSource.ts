import { useCallback, useState } from "react"

import {
  fieldsByFormType,
  type ExpenseFormType,
  type FieldRequirement,
  type FieldRow,
} from "./fields"

/**
 * Visual-only state for the Expense Forms tables. Per BR-008 /
 * AC-006, toggle clicks update the UI immediately; nothing is
 * persisted.
 *
 * The hook owns the rows for ALL THREE form types
 * (Regular / Per diem / Mileage) in a single record. It is meant to
 * be called ONCE at the prototype root and threaded down to:
 *
 *  - `ExpenseFormsSection` (the per-form editor) for table reads
 *    and toggle writes,
 *  - `FormsSummaryView` (the landing cards) for the live derived
 *    summary lines.
 *
 * Earlier versions instantiated the hook twice (root for Regular,
 * section for whichever form was active). Because React `useState`
 * is local to its caller, edits on Per diem / Mileage never reached
 * the summary cards. Lifting the state to a single root instance
 * fixes that without introducing a context provider.
 *
 * Setters take `formType` as the first argument so the same hook
 * instance can mutate any of the three forms. They are no-ops for
 * locked rows by construction (the UI never exposes those
 * controls), but we guard anyway so an agent-driven action via the
 * One chat can't corrupt them.
 */
export function useExpenseFormsSource() {
  const [rowsByForm, setRowsByForm] =
    useState<Record<ExpenseFormType, FieldRow[]>>(fieldsByFormType)

  const setVisible = useCallback(
    (formType: ExpenseFormType, id: string, visible: boolean) => {
      setRowsByForm((prev) => ({
        ...prev,
        [formType]: prev[formType].map((row) => {
          if (row.id !== id) return row
          if (row.kind === "locked") return row
          return { ...row, visible }
        }),
      }))
    },
    []
  )

  const setRequirement = useCallback(
    (formType: ExpenseFormType, id: string, requirement: FieldRequirement) => {
      setRowsByForm((prev) => ({
        ...prev,
        [formType]: prev[formType].map((row) => {
          if (row.id !== id) return row
          if (row.kind === "locked") return row
          return { ...row, requirement }
        }),
      }))
    },
    []
  )

  return { rowsByForm, setVisible, setRequirement }
}
