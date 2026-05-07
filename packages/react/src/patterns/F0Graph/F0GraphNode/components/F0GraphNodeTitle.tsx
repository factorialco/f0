import type { ReactNode } from "react"

export interface F0GraphNodeTitleProps {
  children?: ReactNode
}

export function F0GraphNodeTitle({ children }: F0GraphNodeTitleProps) {
  return (
    <p className="w-full truncate text-sm font-medium leading-4 tracking-[-0.07px] text-f1-foreground">
      {children}
    </p>
  )
}

F0GraphNodeTitle.displayName = "F0GraphNodeTitle"
