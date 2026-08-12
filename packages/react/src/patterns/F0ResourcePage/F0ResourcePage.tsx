import { useEffect, useState } from "react"

import { motion } from "motion/react"

import { F0TableOfContent } from "@/experimental/Navigation/F0TableOfContent"
import { LayoutProvider } from "@/layouts/LayoutProvider"
import { StandardLayout } from "@/layouts/StandardLayout"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import { F0ResourcePageProps } from "./types"
import { scrollSectionIntoView, useActiveSection } from "./useActiveSection"
import { useCollapseOnScroll } from "./useCollapseOnScroll"

/**
 * Composes the body of a page about one resource, in a fixed order: notice,
 * header, tabs, then the content beside its rail. Order is owned by this
 * component so every resource page reads the same way.
 *
 * The app shell stays with the consumer: mount this in the `children` of
 * `@/patterns/Navigation/Page`, whose `header` slot holds the `PageHeader` and
 * its breadcrumbs.
 *
 * Tabs are parts of this page, not pages of their own: the header and the tab
 * strip stay mounted and only the body under them changes, so a tab's `content`
 * goes on the tab rather than into another `F0ResourcePage`.
 *
 * The header and tabs are sticky, the header condenses as the content scrolls,
 * and the rail pins itself under them: see `useCollapseOnScroll`.
 */
export function F0ResourcePage({
  tabs,
  activeTabId,
  alert,
  aside,
  showBottomBorder,
  children,
  ...header
}: F0ResourcePageProps) {
  const hasTabs = Boolean(tabs?.length)
  // Which tab the reader is on. `Tabs` reports its own choice through
  // `setActiveTabId`, including the one it resolves on mount, so this fills in
  // even when no `activeTabId` was passed and following a click needs no state
  // from the consumer.
  const [openTabId, setOpenTabId] = useState(activeTabId)
  // And it still follows the prop, for a page that drives the tab from a route.
  useEffect(() => {
    if (activeTabId) setOpenTabId(activeTabId)
  }, [activeTabId])

  // Href tabs are routes, so they carry no content of their own and the body is
  // whatever the router put in `children`.
  const openTab = tabs?.find((tab) => "id" in tab && tab.id === openTabId)
  const content = openTab?.content ?? children
  const rail = openTab?.aside ?? aside

  const {
    ref: chromeRef,
    progress,
    chromeHeight,
    chromeExpandedHeight,
    viewportHeight,
  } = useCollapseOnScroll()
  const { ref: mainRef, activeId } = useActiveSection({
    ids: (rail?.items ?? []).map((item) => item.id),
    chromeHeight,
  })

  return (
    // One element rather than a fragment: `Page` stretches each of its direct
    // children with `[&>*]:flex-1`, which would hand the header, the tab strip
    // and the content an equal share of the page height.
    //
    // `overflow-anchor: none`, because the chrome's height changes while the
    // reader scrolls, and the browser's scroll anchoring answers layout shifts
    // above the viewport by adjusting the scroll position, which here means
    // fighting the very gesture that caused the shift.
    <div className="flex min-h-full w-full flex-col [overflow-anchor:none]">
      {alert}
      {/* The header and its tabs stay put while the content scrolls under them,
          so the resource is always named and its parts always reachable. The
          header condenses as it goes, and because that is driven by the scroll
          position rather than tweened over time, the tab strip below it tracks
          the scroll instead of lagging behind a running animation. The page
          background rides along so nothing shows through. */}
      <motion.div
        ref={chromeRef}
        // The active tab's underline is a shared-layout animation, so it springs
        // toward any position it measures as new. A sticky element moves up the
        // viewport on every scroll tick, which measures as a layout change, so
        // without this the underline chases the strip down the page instead of
        // sitting under its tab. `layoutRoot` makes descendants measure relative
        // to this box, so scrolling is no longer a layout change and only an
        // actual tab switch animates.
        layoutRoot
        // Any positive z-index puts this above the content, because the content
        // is isolated below: its own z-indexes, whatever their value, cannot
        // reach this layer.
        className="sticky top-0 z-20 flex flex-col bg-f1-special-page"
      >
        <ResourceHeader
          {...header}
          collapsed={progress}
          // With tabs the tab strip already separates header from content, so a
          // border would double the rule.
          showBottomBorder={showBottomBorder ?? !hasTabs}
        />
        {!!tabs?.length && (
          <Tabs
            tabs={tabs}
            activeTabId={activeTabId}
            setActiveTabId={setOpenTabId}
          />
        )}
      </motion.div>
      {/* The chrome shrinks as it condenses, but the page must not. The page
          reserves the chrome's fully-open height, like a fixed padding at the
          top, and the chrome shrinks and grows inside it: this spacer holds
          whatever the chrome has given up, so the two always add up to the same
          space. Without it every pixel the header loses is removed from the
          scrollable content and handed back at the top, so the page breathes
          under the reader and grows the moment they return. */}
      <div
        aria-hidden
        className="w-full shrink-0"
        style={{
          height: Math.max(0, chromeExpandedHeight - chromeHeight),
        }}
      />
      {rail ? (
        // The two columns are composed here rather than with `TwoColumnLayout`:
        // that layout puts the pair inside its own scrollport, which a sticky
        // rail has nothing to stick to, and it draws a rule between the columns
        // that would frame the rail as a panel bolted on rather than as the
        // page's own navigation.
        //
        // `isolate`, because parts of the content carry z-indexes of their own:
        // a button's label wrapper is a flex item at z-20, which would tie with
        // the chrome and, being later in the DOM, paint over it as the section
        // scrolls under. Isolating the content keeps every such value inside,
        // so the chrome wins on layer rather than by outbidding numbers.
        <div className="isolate flex flex-1 flex-col md:flex-row">
          <main ref={mainRef} className="min-w-0 flex-1 px-page py-5">
            {/* Only the main column claims the standard layout: SectionHeader
                reads it to bleed into the page gutter, which the narrow rail
                cannot afford. */}
            <LayoutProvider layout="standard">{content}</LayoutProvider>
          </main>
          {/* No gutter on the rail's right at `md` and up: the page gutter is
              there to hold text off the page edge, and the rail's items carry
              their own padding, so keeping it only pushed the rail in twice.
              Below `md` the rail is a full-width block under the content, where
              `px-page` is the gutter it should have. */}
          <aside className="shrink-0 px-page pb-6 md:w-72 md:pl-2 md:pr-0">
            {/* The rail stays with you down the page, pinned just under the
                chrome, and scrolls inside whatever height is left rather than
                making the page taller. Both numbers are measured, since the
                chrome's height changes as the header condenses. */}
            <div
              style={{
                top: chromeHeight,
                maxHeight: viewportHeight
                  ? viewportHeight - chromeHeight
                  : undefined,
              }}
              className="sticky flex flex-col overflow-y-auto"
            >
              {/* No title: the section headings are what people scan for, so
                  naming the list again adds nothing. */}
              <F0TableOfContent
                items={rail.items.map((item) => ({
                  id: item.id,
                  label: item.label,
                  onClick: (id: string) =>
                    scrollSectionIntoView(mainRef.current, id, chromeHeight),
                }))}
                activeItem={activeId}
                // Always on, not a choice: every rail filters the same way, so
                // whether a page's sections can be searched is not something
                // for each page to decide differently.
                showSearchBox
              />
            </div>
          </aside>
        </div>
      ) : (
        // Isolated for the same reason as the two-column branch above.
        <StandardLayout className="isolate">{content}</StandardLayout>
      )}
    </div>
  )
}
