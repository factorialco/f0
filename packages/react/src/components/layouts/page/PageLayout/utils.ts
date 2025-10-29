import {
  PageLayoutBlockComponent,
  PageLayoutBlockProps,
} from "./components/PageLayoutBlock/types"

// Helper function to create components that inherit from PageLayoutBlock
export const createPageLayoutBlock = <T extends Record<string, unknown>>(
  displayName: string,
  Component: React.ComponentType<PageLayoutBlockProps & T>
): React.ComponentType<PageLayoutBlockProps & T> => {
  const WrappedComponent = Component as React.ComponentType<
    PageLayoutBlockProps & T
  > &
    PageLayoutBlockComponent
  WrappedComponent.displayName = displayName
  WrappedComponent.__isPageLayoutBlock = true
  return WrappedComponent
}
