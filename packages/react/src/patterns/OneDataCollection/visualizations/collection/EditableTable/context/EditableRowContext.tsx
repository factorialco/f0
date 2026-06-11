"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import type { RecordType } from "@/hooks/datasource"

import { useI18n } from "@/lib/providers/i18n"

import type {
  EditableTableCellChanges,
  EditableTableOnCellChangeParams,
} from "../types"

/**
 * How long to wait after the last keystroke before notifying the parent
 * via onCellChange for typing cells (text, number, money...).
 */
export const CELL_CHANGE_DEBOUNCE_MS = 750

export type CellChangeOptions = {
  /**
   * When true, the optimistic local update still happens immediately but the
   * onCellChange notification is deferred until the user stops typing for
   * CELL_CHANGE_DEBOUNCE_MS. Subsequent changes reset the timer, so only the
   * final value is committed.
   */
  debounce?: boolean
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

/**
 * Accumulates debounced changes that have been applied locally but not yet
 * committed to the parent. `previousValues` keeps the value each column had
 * before the first change of the debounce session, so the committed change
 * tuple spans the whole typing session rather than the last keystroke.
 */
type PendingCellChanges = {
  timer: ReturnType<typeof setTimeout> | undefined
  previousValues: Record<string, unknown>
  updates: Record<string, unknown>
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

  const pendingRef = useRef<PendingCellChanges | null>(null)

  useEffect(() => {
    // Re-apply uncommitted debounced changes on top of the incoming item so a
    // background reload doesn't clobber what the user is currently typing.
    const pending = pendingRef.current
    const next = pending ? ({ ...item, ...pending.updates } as R) : item
    localItemRef.current = next
    setLocalItem(next)
  }, [item])

  const commitCellChanges = useCallback(
    (
      updatedItem: R,
      changes: EditableTableCellChanges<R>,
      columnIds: string[]
    ) => {
      setCellLoading((prev) => {
        const next = { ...prev }
        for (const id of columnIds) {
          next[id] = true
        }
        return next
      })

      onCellChange({ updatedItem, changes })
        .then((errors) => {
          if (errors && Object.keys(errors).length > 0) {
            setCellErrors((prev) => ({ ...prev, ...errors }))
          }
        })
        .catch((error: unknown) => {
          const msg =
            error instanceof Error
              ? error.message
              : t("collections.editableTable.errors.saveFailed")
          setCellErrors((prev) => {
            const next = { ...prev }
            for (const id of columnIds) {
              next[id] = msg
            }
            return next
          })
        })
        .finally(() => {
          setCellLoading((prev) => {
            const next = { ...prev }
            for (const id of columnIds) {
              next[id] = false
            }
            return next
          })
        })
    },
    [onCellChange, t]
  )

  const flushPendingChanges = useCallback(() => {
    const pending = pendingRef.current
    if (!pending) return
    if (pending.timer !== undefined) clearTimeout(pending.timer)
    pendingRef.current = null

    const columnIds = Object.keys(pending.previousValues)
    const changes: EditableTableCellChanges<R> = {}
    for (const id of columnIds) {
      ;(changes as Record<string, [unknown, unknown]>)[id] = [
        pending.previousValues[id],
        localItemRef.current[id],
      ]
    }

    commitCellChanges(localItemRef.current, changes, columnIds)
  }, [commitCellChanges])

  const flushPendingChangesRef = useRef(flushPendingChanges)
  flushPendingChangesRef.current = flushPendingChanges

  useEffect(() => {
    // Don't lose the in-flight debounced change if the row unmounts
    // (virtualization, leaving edit mode...) before the timer fires.
    return () => flushPendingChangesRef.current()
  }, [])

  const applyCellChanges = useCallback(
    (updates: Record<string, unknown>, options?: CellChangeOptions) => {
      const columnIds = Object.keys(updates)
      if (columnIds.length === 0) return

      const previousItem = localItemRef.current
      const updatedItem = { ...previousItem, ...updates } as R
      localItemRef.current = updatedItem

      setLocalItem(updatedItem)

      setCellErrors((prev) => {
        const next = { ...prev }
        let changed = false
        for (const id of columnIds) {
          if (id in next) {
            delete next[id]
            changed = true
          }
        }
        return changed ? next : prev
      })

      const existing = pendingRef.current
      if (existing?.timer !== undefined) clearTimeout(existing.timer)

      const previousValues: Record<string, unknown> = {}
      for (const id of columnIds) {
        previousValues[id] = previousItem[id]
      }

      pendingRef.current = {
        timer: undefined,
        // For columns already pending, keep the value they had before the
        // debounce session started, not the one from the last keystroke.
        previousValues: { ...previousValues, ...existing?.previousValues },
        updates: { ...existing?.updates, ...updates },
      }

      if (options?.debounce) {
        pendingRef.current.timer = setTimeout(
          () => flushPendingChangesRef.current(),
          CELL_CHANGE_DEBOUNCE_MS
        )
      } else {
        flushPendingChanges()
      }
    },
    [flushPendingChanges]
  )

  const handleCellChange = useCallback(
    (columnId: string, value: unknown, options?: CellChangeOptions) => {
      applyCellChanges({ [columnId]: value }, options)
    },
    [applyCellChanges]
  )

  const batchCellChanges = useCallback(
    (updates: Record<string, unknown>, options?: CellChangeOptions) => {
      applyCellChanges(updates, options)
    },
    [applyCellChanges]
  )

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
