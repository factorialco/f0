import { ReactElement } from "react"

export interface GroupLinearProps {
  children: React.ReactNode
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

// Type for components that inherit from PageLayoutGroup
export type GroupLinearElement = ReactElement<GroupLinearProps>
