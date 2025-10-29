import { ReactElement } from "react"

export interface PageLayoutGroupProps {
  children: React.ReactNode
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

// Base marker interface for PageLayoutBlock components
export interface PageLayoutGroupComponent {
  __isPageLayoutGroup: true
  displayName?: string
}

// Type for components that inherit from PageLayoutGroup
export type PageLayoutGroupElement = ReactElement<PageLayoutGroupProps>
