import { createContext, useContext } from "react"

export interface F0GraphSelectionContextValue {
  selectedNodes: Set<string>
  highlightedNodes: Set<string>
}

export const F0GraphSelectionContext =
  createContext<F0GraphSelectionContextValue | null>(null)

F0GraphSelectionContext.displayName = "F0GraphSelectionContext"

export function useF0GraphSelection(): F0GraphSelectionContextValue {
  const ctx = useContext(F0GraphSelectionContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphSelection must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphSelectionInternal(): F0GraphSelectionContextValue | null {
  return useContext(F0GraphSelectionContext)
}
