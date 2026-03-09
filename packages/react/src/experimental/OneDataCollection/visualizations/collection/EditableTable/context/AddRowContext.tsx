"use client"

import { createContext, useContext } from "react"

import type { RecordType } from "@/hooks/datasource"

type AddRowContextValue = {
  onAddRow?: (parentItem?: unknown) => void | Promise<void>
  addRowButtonLabel?: string
  nestedAddRowButtonLabel?: string
}

const AddRowContext = createContext<AddRowContextValue | null>(null)

export type AddRowProviderProps<R extends RecordType = RecordType> = {
  onAddRow?: (parentItem?: R) => void | Promise<void>
  addRowButtonLabel?: string
  nestedAddRowButtonLabel?: string
  children: React.ReactNode
}

/**
 * Generic provider that accepts a typed `onAddRow` callback and erases the
 * generic parameter before storing it in context.  The cast here is safe
 * because consumers narrow the type back via `useAddRow<R>()`.
 */
export function AddRowProvider<R extends RecordType>({
  onAddRow,
  addRowButtonLabel,
  nestedAddRowButtonLabel,
  children,
}: AddRowProviderProps<R>) {
  return (
    <AddRowContext.Provider
      value={{
        onAddRow: onAddRow as AddRowContextValue["onAddRow"],
        addRowButtonLabel,
        nestedAddRowButtonLabel,
      }}
    >
      {children}
    </AddRowContext.Provider>
  )
}

type TypedAddRowValue<R> = {
  onAddRow?: (parentItem?: R) => void | Promise<void>
  addRowButtonLabel?: string
  nestedAddRowButtonLabel?: string
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
