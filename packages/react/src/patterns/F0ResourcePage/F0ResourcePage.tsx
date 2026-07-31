import { LayoutProvider } from "@/layouts/LayoutProvider"
import { StandardLayout } from "@/layouts/StandardLayout"
import { TwoColumnLayout } from "@/layouts/TwoColumnLayout"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import { F0ResourcePageProps } from "./types"

/**
 * Composes the body of a page about one resource, in a fixed order: notice,
 * header, tabs, then the content beside its rail. Order is owned by this
 * component so every resource page reads the same way.
 *
 * The app shell stays with the consumer: mount this in the `children` of
 * `@/patterns/Navigation/Page`, whose `header` slot holds the `PageHeader` and
 * its breadcrumbs.
 */
export function F0ResourcePage({
  tabs,
  secondaryTabs,
  activeTabId,
  activeSecondaryTabId,
  alert,
  aside,
  stickyAside,
  showBottomBorder,
  children,
  ...header
}: F0ResourcePageProps) {
  const hasTabs = Boolean(tabs?.length) || Boolean(secondaryTabs?.length)

  return (
    // One element rather than a fragment: `Page` stretches each of its direct
    // children with `[&>*]:flex-1`, which would hand the header, the tab strip
    // and the content an equal share of the page height.
    <div className="flex min-h-full w-full flex-col">
      {alert}
      <ResourceHeader
        {...header}
        // With tabs the tab strip already separates header from content, so a
        // border would double the rule.
        showBottomBorder={showBottomBorder ?? !hasTabs}
      />
      {!!tabs?.length && <Tabs tabs={tabs} activeTabId={activeTabId} />}
      {!!secondaryTabs?.length && (
        <Tabs
          secondary
          tabs={secondaryTabs}
          activeTabId={activeSecondaryTabId}
        />
      )}
      {aside ? (
        <div className="flex flex-1 flex-col">
          <TwoColumnLayout sideContent={aside} sticky={stickyAside}>
            {/* Only the main column claims the standard layout: SectionHeader
                reads it to bleed into the page gutter, which the narrow rail
                cannot afford. */}
            <LayoutProvider layout="standard">{children}</LayoutProvider>
          </TwoColumnLayout>
        </div>
      ) : (
        <StandardLayout>{children}</StandardLayout>
      )}
    </div>
  )
}
