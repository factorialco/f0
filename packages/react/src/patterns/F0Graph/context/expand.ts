import { createContext, useContext } from "react"

export interface F0GraphExpandContextValue {
  expandedNodes: Set<string>
}

export const F0GraphExpandContext =
  createContext<F0GraphExpandContextValue | null>(null)

F0GraphExpandContext.displayName = "F0GraphExpandContext"

export function useF0GraphExpand(): F0GraphExpandContextValue {
  const ctx = useContext(F0GraphExpandContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphExpand must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphExpandInternal(): F0GraphExpandContextValue | null {
  return useContext(F0GraphExpandContext)
}
