"use client"

import { createContext, useContext } from "react"

import type { RecordType } from "@/hooks/datasource"

import type { AddRowActionsResult } from "../types"

type AddRowContextValue = {
  addRowActions?: () => AddRowActionsResult
  addRowActionsLabel?: string
  addNestedRowActions?: (parentItem: RecordType) => AddRowActionsResult
  addNestedRowActionsLabel?: string
}

const AddRowContext = createContext<AddRowContextValue | null>(null)

export type AddRowProviderProps<R extends RecordType = RecordType> = {
  addRowActions?: () => AddRowActionsResult
  addRowActionsLabel?: string
  addNestedRowActions?: (parent: R) => AddRowActionsResult
  addNestedRowActionsLabel?: string
  children: React.ReactNode
}

/**
 * Generic provider that accepts typed callbacks and erases the generic
 * parameter before storing them in context.  The cast is safe because
 * consumers narrow the type back via `useAddRow<R>()`.
 */
export function AddRowProvider<R extends RecordType>({
  addRowActions,
  addRowActionsLabel,
  addNestedRowActions,
  addNestedRowActionsLabel,
  children,
}: AddRowProviderProps<R>) {
  return (
    <AddRowContext.Provider
      value={{
        addRowActions,
        addRowActionsLabel,
        addNestedRowActions:
          addNestedRowActions as AddRowContextValue["addNestedRowActions"],
        addNestedRowActionsLabel,
      }}
    >
      {children}
    </AddRowContext.Provider>
  )
}

type TypedAddRowValue<R> = {
  addRowActions?: () => AddRowActionsResult
  addRowActionsLabel?: string
  addNestedRowActions?: (parent: R) => AddRowActionsResult
  addNestedRowActionsLabel?: string
}

/**
 * Access the add-row context.
 * Returns null when used outside an AddRowProvider (non-editable tables).
 */
export function useAddRow<
  R extends RecordType = RecordType,
>(): TypedAddRowValue<R> | null {
  return useContext(AddRowContext) as TypedAddRowValue<R> | null
}
