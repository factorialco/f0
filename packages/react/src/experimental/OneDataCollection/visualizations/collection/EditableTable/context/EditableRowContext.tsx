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

type EditableRowContextValue<R extends RecordType> = {
  /** The optimistic local copy of the item, updated immediately on change */
  localItem: R
  /** Per-column error messages keyed by column id */
  cellErrors: Record<string, string>
  /** Per-column loading state keyed by column id */
  cellLoading: Record<string, boolean>
  /** Update a single field and notify the parent via onCellChange */
  handleCellChange: (columnId: string, value: string) => void
}

// React's createContext does not support per-usage generics.
// The generic useEditableRow<R>() hook below provides type safety at consumption time.
const EditableRowContext = createContext<EditableRowContextValue<any> | null>(
  null
)

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

  const localItemRef = useRef(localItem)
  localItemRef.current = localItem

  useEffect(() => {
    setLocalItem(item)
  }, [item])

  const handleCellChange = useCallback(
    (columnId: string, value: string) => {
      const updatedItem = { ...localItemRef.current, [columnId]: value } as R

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
            [columnId]: error instanceof Error ? error.message : "Save failed",
          }))
        })
        .finally(() => {
          setCellLoading((prev) => ({ ...prev, [columnId]: false }))
        })
    },
    [onCellChange]
  )

  return (
    <EditableRowContext.Provider
      value={{ localItem, cellErrors, cellLoading, handleCellChange }}
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
