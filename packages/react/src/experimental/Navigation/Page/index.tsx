import type { TestableProps } from "@/global.types"
import { experimentalComponent } from "@/lib/experimental"

interface PageProps extends TestableProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

function _Page({ children, header, embedded = false, testId }: PageProps) {
  return (
    <div
      className={`flex min-h-full w-full flex-col overflow-hidden ${
        embedded ? "" : "xs:rounded-xl"
      } bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`}
      data-testid={testId}
    >
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
    </div>
  )
}

_Page.displayName = "Page"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Page = experimentalComponent("Page", _Page)
