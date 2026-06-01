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

type EditableRowContextValue<R extends RecordType> = {
  /** The optimistic local copy of the item, updated immediately on change */
  localItem: R
  /** Per-column error messages keyed by column id */
  cellErrors: Record<string, string>
  /** Per-column loading state keyed by column id */
  cellLoading: Record<string, boolean>
  /** Update a single field and notify the parent via onCellChange */
  handleCellChange: (columnId: string, value: unknown) => void
  /** Apply multiple field updates at once, then call onCellChange once */
  batchCellChanges: (updates: Record<string, unknown>) => void
}

// React's createContext does not support per-usage generics.
// The generic useEditableRow<R>() hook below provides type safety at consumption time.
const EditableRowContext =
  createContext<EditableRowContextValue<RecordType> | null>(null)

export type EditableRowProviderProps<R extends RecordType> = {
  item: R
  onCellChange: (updatedItem: R) => Promise<void | Record<string, string>>
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

  useEffect(() => {
    setLocalItem(item)
  }, [item])

  const handleCellChange = useCallback(
    (columnId: string, value: unknown) => {
      const updatedItem = { ...localItemRef.current, [columnId]: value } as R
      localItemRef.current = updatedItem

      setLocalItem(updatedItem)

      setCellErrors((prev) => {
        if (columnId in prev) {
          const { [columnId]: _, ...rest } = prev
          return rest
        }
        return prev
      })

      setCellLoading((prev) => ({ ...prev, [columnId]: true }))

      onCellChange(updatedItem)
        .then((errors) => {
          if (errors && Object.keys(errors).length > 0) {
            setCellErrors((prev) => ({ ...prev, ...errors }))
          }
        })
        .catch((error: unknown) => {
          setCellErrors((prev) => ({
            ...prev,
            [columnId]:
              error instanceof Error
                ? error.message
                : t("collections.editableTable.errors.saveFailed"),
          }))
        })
        .finally(() => {
          setCellLoading((prev) => ({ ...prev, [columnId]: false }))
        })
    },
    [onCellChange, t]
  )

  const batchCellChanges = useCallback(
    (updates: Record<string, unknown>) => {
      const columnIds = Object.keys(updates)
      if (columnIds.length === 0) return

      const updatedItem = { ...localItemRef.current, ...updates } as R
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

      const loadingOn: Record<string, boolean> = {}
      for (const id of columnIds) {
        loadingOn[id] = true
      }
      setCellLoading((prev) => ({ ...prev, ...loadingOn }))

      onCellChange(updatedItem)
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
