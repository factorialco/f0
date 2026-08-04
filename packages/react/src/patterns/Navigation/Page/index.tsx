interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { HeaderCollapseProvider } from "@/lib/providers/headerCollapse"
import { cn } from "@/lib/utils"

import { useHeaderCollapseDriver } from "./useHeaderCollapseDriver"

/**
 * The page's frame: a header block that stays put, over a body that scrolls.
 *
 * The header block is also where a resource header condenses as the body
 * scrolls, which this component drives because it is the only one holding both
 * the header's position and the scrollport. There is nothing to turn on and no
 * distance to set: a resource header in the slot condenses, and everything else
 * costs nothing. See `useHeaderCollapseDriver`.
 */
function _Page({ children, header, embedded = false }: PageProps) {
  const { bodyRef, progress, setHasHeader } = useHeaderCollapseDriver()

  return (
    <div
      className={cn(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !embedded && "xs:rounded-xl"
      )}
    >
      {header && (
        <div className="flex flex-col">
          {/* Only the header slot. A header rendered down in the body scrolls
              away instead of staying put, so condensing it would mean nothing,
              and it must not pick the progress up from here. */}
          <HeaderCollapseProvider
            progress={progress}
            onRegistrationChange={setHasHeader}
          >
            {header}
          </HeaderCollapseProvider>
        </div>
      )}
      <div
        ref={bodyRef}
        className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1"
      >
        {children}
      </div>
    </div>
  )
}

_Page.displayName = "Page"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Page = withDataTestId(experimentalComponent("Page", _Page))
