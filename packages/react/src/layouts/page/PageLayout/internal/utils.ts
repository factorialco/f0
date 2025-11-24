import { Children, isValidElement, ReactNode } from "react"
import { PageLayoutBlock } from "../components/PageLayoutBlock/PageLayoutBlock"
import {
  PageLayoutBlockComponent,
  PageLayoutBlockElement,
} from "../components/PageLayoutBlock/types"

// Utility to check if a component is a valid PageLayoutBlock
export const isPageLayoutBlockComponent = (
  child: ReactNode
): child is PageLayoutBlockElement => {
  return (
    isValidElement(child) &&
    ((child.type as unknown as PageLayoutBlockComponent)
      ?.__isPageLayoutBlock === true ||
      child.type === PageLayoutBlock ||
      (typeof child.type === "function" &&
        (child.type as { displayName?: string }).displayName ===
          "PageLayoutBlock"))
  )
}

// Utility to validate all children are PageLayoutBlock components
export const validatePageLayoutChildren = (children: ReactNode): void => {
  const childArray = Children.toArray(children)

  for (const child of childArray) {
    if (!isPageLayoutBlockComponent(child)) {
      console.warn(
        `PageLayout: Child component must inherit from PageLayoutBlock. Found:`,
        child
      )
    }
  }
}
