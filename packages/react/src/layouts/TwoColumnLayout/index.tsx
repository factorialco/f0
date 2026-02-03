import { ReactNode, forwardRef } from "react"

import { Component } from "@/lib/component/component"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

export interface TwoColumnLayoutProps {
  children: ReactNode
  sideContent: ReactNode
  mainColumnPosition?: "left" | "right"
  sticky?: boolean
}

const _TwoColumnLayout = forwardRef<HTMLDivElement, TwoColumnLayoutProps>(
  function TwoColumnLayout(
    {
      children: mainContent,
      sideContent,
      mainColumnPosition = "left",
      sticky = false,
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
            sticky && "md:sticky md:top-0 md:max-h-full"
          )}
        >
          <main
            className={cn(
              "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
              sticky
                ? "md:h-full md:max-h-full md:overflow-y-auto"
                : "min-h-full",
              mainColumnPosition === "right"
                ? "sm:border-l sm:border-l-f1-border-secondary"
                : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            )}
          >
            {mainContent}
          </main>
          <Aside
            sticky={sticky}
            className={cn(
              "order-1",
              mainColumnPosition === "right" ? "md:order-1" : "md:order-3"
            )}
          >
            {sideContent}
          </Aside>
        </div>
      </div>
    )
  }
)

export const TwoColumnLayout = withDataTestId(
  Component(
    {
      name: "TwoColumnLayout",
      type: "layout",
    },
    _TwoColumnLayout
  )
)

const Aside = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
  sticky?: boolean
}) => (
  <aside
    className={cn(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      className
    )}
  >
    {children}
  </aside>
)
