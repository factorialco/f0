import type { ReactNode } from "react"

export interface F0GraphNodeSubtitleProps {
  children?: ReactNode
}

export function F0GraphNodeSubtitle({ children }: F0GraphNodeSubtitleProps) {
  return (
    <p className="w-full truncate text-sm font-normal leading-4 tracking-[-0.07px] text-f1-foreground-secondary">
      {children}
    </p>
  )
}

F0GraphNodeSubtitle.displayName = "F0GraphNodeSubtitle"
