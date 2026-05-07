import { createContext, useContext } from "react"

export interface F0GraphActionsContextValue {
  toggleExpand: (nodeId: string) => void
  selectNode: (nodeId: string) => void
}

export const F0GraphActionsContext =
  createContext<F0GraphActionsContextValue | null>(null)

F0GraphActionsContext.displayName = "F0GraphActionsContext"

export function useF0GraphActions(): F0GraphActionsContextValue {
  const ctx = useContext(F0GraphActionsContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphActions must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphActionsInternal(): F0GraphActionsContextValue | null {
  return useContext(F0GraphActionsContext)
}
