import { PageLayoutBlockComponent } from "./types"

// Helper function to create components that inherit from PageLayoutBlock
export const createPageLayoutBlock = <Props = unknown>(
  displayName: string,
  Component: React.ComponentType<Props>
): React.ComponentType<Props> & PageLayoutBlockComponent => {
  const WrappedComponent = Component as React.ComponentType<Props> &
    PageLayoutBlockComponent
  WrappedComponent.displayName = displayName
  WrappedComponent.__isPageLayoutBlock = true
  return WrappedComponent
}
