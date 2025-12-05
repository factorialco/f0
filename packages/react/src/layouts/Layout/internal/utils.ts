import { Children, isValidElement, ReactElement, ReactNode } from "react"
import { PageLayoutBlockComponent, PageLayoutGroupComponent } from "../types"

// Utility to check if a component is a valid PageLayoutBlock
export const isPageLayoutBlockComponent = (
  child: ReactNode
): child is ReactElement<PageLayoutBlockComponent> => {
  return isValidElement(child) && "__isPageLayoutBlock" in child
}

// Utility to check if a component is a valid PageLayoutBlock
export const isPageLayoutGroupComponent = (
  child: ReactNode
): child is ReactElement<PageLayoutGroupComponent> => {
  return isValidElement(child) && "__isPageLayoutGroup" in child
}

// Utility to validate all children are PageLayoutBlock components
export const validLayoutChildrenGuard = (
  component: string,
  children: ReactNode,
  allowedTypes: ("block" | "group")[]
): void => {
  const childArray = Children.toArray(children)

  for (const child of childArray) {
    if (
      (allowedTypes.includes("block") && !isPageLayoutBlockComponent(child)) ||
      (allowedTypes.includes("group") && !isPageLayoutGroupComponent(child))
    ) {
      console.warn(
        `${component}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
        child
      )
    }
  }
}
