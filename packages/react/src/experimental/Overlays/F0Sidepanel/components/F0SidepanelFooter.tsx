import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const F0SidepanelFooter = ({ children }: Props) => (
  <div className="mt-auto flex shrink-0 items-center justify-end gap-2 border-0 border-t border-solid border-f1-border-secondary p-4">
    {children}
  </div>
)
