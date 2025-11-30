import { cn } from "@/lib/utils"
import { Menu, PanelLeftClose } from "lucide-react"
import { ReactNode, forwardRef, useState } from "react"

export interface TwoColumnLayoutProps {
  children: ReactNode
  sideContent: ReactNode
  mainColumnPosition?: "left" | "right"
  sticky?: boolean
  collapsible?: boolean
  defaultCollapsed?: boolean
}

export const TwoColumnLayout = forwardRef<HTMLDivElement, TwoColumnLayoutProps>(
  function TwoColumnLayout(
    {
      children: mainContent,
      sideContent,
      mainColumnPosition = "left",
      sticky = false,
      collapsible = false,
      defaultCollapsed = false,
    },
    ref
  ) {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
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
            collapsible={collapsible}
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          >
            {sideContent}
          </Aside>
        </div>
      </div>
    )
  }
)

const Aside = ({
  children,
  className,
  collapsible = false,
  isCollapsed = false,
  onToggleCollapse,
}: {
  children: ReactNode
  className?: string
  sticky?: boolean
  collapsible?: boolean
  isCollapsed?: boolean
  onToggleCollapse?: () => void
}) => {
  return (
    <aside
      className={cn(
        "min-w-30 relative py-5 pl-4 pr-4 transition-all duration-300 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
        isCollapsed && collapsible && "md:min-w-16 md:max-w-16",
        className
      )}
    >
      {collapsible && (
        <button
          onClick={onToggleCollapse}
          className={cn(
            "absolute left-4 top-4 z-10 rounded-md p-2 hover:bg-f1-background-secondary",
            "transition-colors duration-200 focus:outline-none focus:ring-2",
            "focus:ring-f1-border-focus"
          )}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <Menu className="h-5 w-5 text-f1-foreground" />
          ) : (
            <PanelLeftClose className="h-5 w-5 text-f1-foreground" />
          )}
        </button>
      )}
      <div
        className={cn(
          "transition-opacity duration-300",
          collapsible && isCollapsed && "md:invisible md:opacity-0"
        )}
      >
        {children}
      </div>
    </aside>
  )
}
