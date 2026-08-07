interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

function _Page({ children, header, embedded = false }: PageProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page",
        !embedded && "xs:rounded-xl"
      )}
    >
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
      {/* The frame is an overlay rather than a `ring-inset` on the page itself:
          an inset ring is painted underneath descendants, so any full-bleed
          child that reaches the edge with an opaque background covers it — a
          table's header cells and its sticky rows do exactly that. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-f1-border-secondary"
      />
    </div>
  )
}

_Page.displayName = "Page"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Page = withDataTestId(experimentalComponent("Page", _Page))
