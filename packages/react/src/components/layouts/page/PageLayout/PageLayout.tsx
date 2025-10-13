import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"

export interface PageLayoutProps {
  children: ReactNode
  aside: ReactNode
  header: ReactNode
  variant?: "main-aside" | "aside-main"
  stickyAside?: boolean
}

export const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  function PageLayout(
    {
      children: mainContent,
      aside,
      header,
      variant = "main-aside",
      stickyAside = false,
    },
    ref
  ) {
    return (
      <div ref={ref} className="h-full">
        <div
          className={cn(
            "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
            "flex-col",
            "overflow-y-auto",
            stickyAside && "md:sticky md:top-0 md:max-h-full"
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
            {header && <header>{header}</header>}
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
