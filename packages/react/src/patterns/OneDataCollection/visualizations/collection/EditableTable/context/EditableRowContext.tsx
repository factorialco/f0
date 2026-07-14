"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"

import type { RecordType } from "@/hooks/datasource"

import { useI18n } from "@/lib/providers/i18n"

import type {
  EditableTableCellChanges,
  EditableTableOnCellChangeParams,
} from "../types"

/** How long to wait after the last keystroke before saving a typing cell. */
export const CELL_CHANGE_DEBOUNCE_MS = 250

export type CellChangeOptions = {
  /**
   * Update the local item immediately but wait until the user stops typing
   * before calling onCellChange. Used by typing cells (text, number, money)
   * so a save is not triggered on every keystroke.
   */
  debounce?: boolean
}

/** A change already applied locally whose save is still waiting for the user to stop typing. */
type PendingChange = {
  timer: ReturnType<typeof setTimeout>
  /** Value of each column before the user started typing */
  previousValues: Record<string, unknown>
  /** Latest typed values, re-applied if the item prop reloads mid-typing */
  updates: Record<string, unknown>
}

type EditableRowContextValue<R extends RecordType> = {
  /** The optimistic local copy of the item, updated immediately on change */
  localItem: R
  /** Per-column error messages keyed by column id */
  cellErrors: Record<string, string>
  /** Per-column loading state keyed by column id */
  cellLoading: Record<string, boolean>
  /** Update a single field and notify the parent via onCellChange */
  handleCellChange: (
    columnId: string,
    value: unknown,
    options?: CellChangeOptions
  ) => void
  /** Apply multiple field updates at once, then call onCellChange once */
  batchCellChanges: (
    updates: Record<string, unknown>,
    options?: CellChangeOptions
  ) => void
}

// React's createContext does not support per-usage generics.
// The generic useEditableRow<R>() hook below provides type safety at consumption time.
const EditableRowContext =
  createContext<EditableRowContextValue<RecordType> | null>(null)

export type EditableRowProviderProps<R extends RecordType> = {
  item: R
  onCellChange: (
    params: EditableTableOnCellChangeParams<R>
  ) => Promise<void | Record<string, string>>
  children: React.ReactNode
}

/**
 * Provider that wraps a table row with editing state.
 * Manages an optimistic local copy of the item, handles cell change callbacks,
 * and tracks per-cell error state.
 */
export function EditableRowProvider<R extends RecordType>({
  item,
  onCellChange,
  children,
}: EditableRowProviderProps<R>) {
  const [localItem, setLocalItem] = useState<R>(item)
  const [cellErrors, setCellErrors] = useState<Record<string, string>>({})
  const [cellLoading, setCellLoading] = useState<Record<string, boolean>>({})

  const { t } = useI18n()

  const localItemRef = useRef(localItem)
  localItemRef.current = localItem

  const pendingRef = useRef<PendingChange | null>(null)

  // Sync with the parent item, keeping any value the user is still typing
  useEffect(() => {
    const next = { ...item, ...pendingRef.current?.updates } as R
    localItemRef.current = next
    setLocalItem(next)
  }, [item])

  const setLoading = (columnIds: string[], loading: boolean) => {
    setCellLoading((prev) => {
      const next = { ...prev }
      for (const id of columnIds) next[id] = loading
      return next
    })
  }

  const setErrors = (columnIds: string[], message?: string) => {
    setCellErrors((prev) => {
      const next = { ...prev }
      for (const id of columnIds) {
        if (message === undefined) delete next[id]
        else next[id] = message
      }
      return next
    })
  }

  /** Calls onCellChange with the current item, tracking loading and errors. */
  const save = (previousValues: Record<string, unknown>) => {
    const columnIds = Object.keys(previousValues)
    const updatedItem = localItemRef.current

    const changes = {} as Record<string, [unknown, unknown]>
    for (const id of columnIds) {
      changes[id] = [previousValues[id], updatedItem[id]]
    }

    setLoading(columnIds, true)

    onCellChange({
      updatedItem,
      changes: changes as EditableTableCellChanges<R>,
    })
      .then((errors) => {
        if (errors && Object.keys(errors).length > 0) {
          setCellErrors((prev) => ({ ...prev, ...errors }))
        }
      })
      .catch((error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : t("collections.editableTable.errors.saveFailed")
        setErrors(columnIds, message)
      })
      .finally(() => {
        setLoading(columnIds, false)
      })
  }

  /** Saves the pending change now instead of waiting for its timer. */
  const flushPending = () => {
    const pending = pendingRef.current
    if (!pending) return

    clearTimeout(pending.timer)
    pendingRef.current = null
    save(pending.previousValues)
  }

  const flushPendingRef = useRef(flushPending)
  flushPendingRef.current = flushPending

  // Save what the user typed even if the row unmounts before the timer fires
  useEffect(() => () => flushPendingRef.current(), [])

  const applyChanges = (
    updates: Record<string, unknown>,
    options?: CellChangeOptions
  ) => {
    const columnIds = Object.keys(updates)
    if (columnIds.length === 0) return

    const previousItem = localItemRef.current
    const previousValues: Record<string, unknown> = {}
    for (const id of columnIds) previousValues[id] = previousItem[id]

    // The local item always updates immediately so the cell stays responsive
    const updatedItem = { ...previousItem, ...updates } as R
    localItemRef.current = updatedItem
    setLocalItem(updatedItem)
    setErrors(columnIds, undefined)

    if (!options?.debounce) {
      // Save any pending typing first so changes reach the parent in order
      flushPending()
      save(previousValues)
      return
    }

    // Restart the timer so only the final value is saved. Keep the values
    // from before the first keystroke so the reported change covers the
    // whole typing session, not just the last keystroke.
    const pending = pendingRef.current
    if (pending) clearTimeout(pending.timer)

    pendingRef.current = {
      previousValues: { ...previousValues, ...pending?.previousValues },
      updates: { ...pending?.updates, ...updates },
      timer: setTimeout(
        () => flushPendingRef.current(),
        CELL_CHANGE_DEBOUNCE_MS
      ),
    }
  }

  const handleCellChange = (
    columnId: string,
    value: unknown,
    options?: CellChangeOptions
  ) => applyChanges({ [columnId]: value }, options)

  const batchCellChanges = (
    updates: Record<string, unknown>,
    options?: CellChangeOptions
  ) => applyChanges(updates, options)

  return (
    <EditableRowContext.Provider
      value={{
        localItem,
        cellErrors,
        cellLoading,
        handleCellChange,
        batchCellChanges,
      }}
    >
      {children}
    </EditableRowContext.Provider>
  )
}

/**
 * Access the editable row context.
 * Returns null when used outside an EditableRowProvider (non-editable rows).
 */
export function useEditableRow<
  R extends RecordType,
>(): EditableRowContextValue<R> | null {
  return useContext(EditableRowContext) as EditableRowContextValue<R> | null
}
