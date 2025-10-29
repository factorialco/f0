import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"
import { validatePageLayoutChildren } from "./utils"

export interface PageLayoutProps {
  children: ReactNode
  aside?: ReactNode
  header?: ReactNode
  variant?: "main-aside" | "aside-main"
}

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
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
              "sm:min-h-xs h-fit border-0",
              "order-1 sm:flex-1 sm:border-solid md:order-2",
              stickyAside
                ? "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden"
                : "min-h-full",
              variant === "aside-main"
                ? "sm:border-l sm:border-l-f1-border-secondary"
                : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            )}
          >
            {header && (
              <header className={cn(stickyHeader && "sticky top-0 z-30")}>
                {header}
              </header>
            )}
            <div className="flex-1">{mainContent}</div>
          </main>

          {aside && (
            <aside
              className={cn(
                "min-w-30 sm:basis-1/4 md:max-w-80",
                "order-2",
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

export { PageLayout }
