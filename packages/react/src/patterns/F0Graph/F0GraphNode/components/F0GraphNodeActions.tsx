import type { ReactNode } from "react"

export interface F0GraphNodeActionsProps {
  children?: ReactNode
}

export function F0GraphNodeActions({ children }: F0GraphNodeActionsProps) {
  return (
    <div className="flex items-center gap-1 border-t border-f1-border pt-2">
      {children}
    </div>
  )
}

F0GraphNodeActions.displayName = "F0GraphNodeActions"
