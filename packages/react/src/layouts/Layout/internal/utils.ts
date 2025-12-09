import { Children, isValidElement, ReactElement, ReactNode } from "react"
import { PageLayoutBlockComponent, PageLayoutGroupComponent } from "../types"

// Utility to check if a component is a valid PageLayoutBlock
export const isPageLayoutBlockComponent = (
  child: ReactNode
): child is ReactElement<PageLayoutBlockComponent> => {
  if (!isValidElement(child) || !child.type || typeof child.type === "string") {
    return false
  }
  return (
    "__isPageLayoutBlock" in (child.type as unknown as Record<string, unknown>)
  )
}

// Utility to check if a component is a valid PageLayoutGroup
export const isPageLayoutGroupComponent = (
  child: ReactNode
): child is ReactElement<PageLayoutGroupComponent> => {
  if (!isValidElement(child) || !child.type || typeof child.type === "string") {
    return false
  }
  return (
    "__isPageLayoutGroup" in (child.type as unknown as Record<string, unknown>)
  )
}

// Utility to validate all children are PageLayoutBlock components
export const validLayoutChildrenGuard = (
  component: string,
  children: ReactNode,
  allowedTypes: ("block" | "group")[]
): void => {
  const childArray = Children.toArray(children)

  for (const child of childArray) {
    const isValidChild =
      (allowedTypes.includes("block") && isPageLayoutBlockComponent(child)) ||
      (allowedTypes.includes("group") && isPageLayoutGroupComponent(child))
    if (!isValidChild) {
      console.warn(
        `${component}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
        child
      )
    }
  }
}
