import { cn } from "@/lib/utils"
import {
  Children,
  ReactElement,
  ReactNode,
  forwardRef,
  isValidElement,
} from "react"
import {
  PageLayoutBlock,
  PageLayoutBlockComponent,
  PageLayoutBlockProps,
} from "./components/PageLayoutBlock"

// Type for components that inherit from PageLayoutBlock
export type PageLayoutBlockElement = ReactElement<PageLayoutBlockProps>

export interface PageLayoutProps {
  children: ReactNode
  aside?: ReactNode
  header?: ReactNode
  variant?: "main-aside" | "aside-main"
}

// Utility to check if a component is a valid PageLayoutBlock
const isPageLayoutBlockComponent = (
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
const validatePageLayoutChildren = (children: ReactNode): void => {
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

const PageLayoutComponent = forwardRef<HTMLDivElement, PageLayoutProps>(
  function PageLayout(
    { children: mainContent, aside, header, variant = "main-aside" },
    ref
  ) {
    const stickyHeader = true
    const stickyAside = true

    // Validate that all children are PageLayoutBlock components in development
    if (process.env.NODE_ENV === "development") {
      validatePageLayoutChildren(mainContent)
    }

    return (
      <div ref={ref} className="h-full">
        <div
          className={cn(
            "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
            "flex-col",
            "overflow-y-auto",
            stickyHeader && "md:sticky md:top-0 md:max-h-full"
          )}
        >
          <main
            className={cn(
              "sm:min-h-xs order-2 h-fit border-0 sm:flex-1 sm:border-solid md:order-2",
              stickyAside
                ? "auto overflow-x-hidden md:h-full md:max-h-full md:overflow-y-auto"
                : "min-h-full",
              variant === "aside-main"
                ? "sm:border-l sm:border-l-f1-border-secondary"
                : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            )}
          >
            {header && (
              <header className={cn(stickyHeader && "z-30 md:sticky md:top-0")}>
                {header}
              </header>
            )}
            <div className="flex-1">{mainContent}</div>
          </main>

          {aside && (
            <aside
              className={cn(
                "min-w-30 sm:basis-1/4 md:max-w-80",
                "order-1",
                variant === "aside-main" ? "md:order-1" : "md:order-3"
              )}
            >
              {aside}
            </aside>
          )}
        </div>
      </div>
    )
  }
)

export const PageLayout = Object.assign(PageLayoutComponent, {
  Block: PageLayoutBlock,
  isBlockComponent: isPageLayoutBlockComponent,
  validateChildren: validatePageLayoutChildren,
})
