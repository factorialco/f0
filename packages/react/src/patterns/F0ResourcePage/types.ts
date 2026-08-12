import { ReactNode } from "react"

import { TabItem } from "@/patterns/Navigation/Tabs"
import { ResourceHeaderProps } from "@/patterns/ResourceHeader"

/** One entry in the rail, standing for one section of the main column. */
export interface F0ResourcePageRailItem {
  /** Matches the `id` of a section in `children`, which is what it scrolls to. */
  id: string
  /** What the rail calls it, normally the section's own title. */
  label: string
}

export interface F0ResourcePageRail {
  /** The sections it lists, in the order they appear down the page. */
  items: F0ResourcePageRailItem[]
}

/**
 * One tab of a resource page, and what it shows.
 *
 * A tab is not a page of its own: the header and the tab strip stay put and only
 * the body below them changes, so there is never a second `F0ResourcePage` inside
 * the first. Give the tab its `content` and, if it needs one, its own `aside`.
 *
 * Href-based tabs are routes, so their content arrives as the page's `children`
 * from whatever the router renders.
 */
export type F0ResourcePageTab = TabItem & {
  /** What this tab shows. Omit it on href tabs, where the route renders it. */
  content?: ReactNode
  /**
   * This tab's own rail. Tabs list different sections, so each carries its own:
   * an Overview of fields and a People tab holding a table have nothing in
   * common to navigate.
   */
  aside?: F0ResourcePageRail
}

// `onClose` is inherited from the header but has no meaning on a full page, so
// it is dropped rather than rendered as a stray button in the action row.
export interface F0ResourcePageProps extends Omit<
  ResourceHeaderProps,
  "onClose"
> {
  /**
   * The parts this page splits into, like Overview, People and Settings.
   * Rendered directly under the header, each with its own `content`.
   */
  tabs?: F0ResourcePageTab[]
  /**
   * Which tab is open, for id-based `tabs`. Pass it to open a given tab; the
   * page follows the reader's clicks from there. Href-based tabs resolve from
   * the route instead.
   */
  activeTabId?: string
  /** Page-wide notice. Rendered above the header, so it is seen first. */
  alert?: ReactNode
  /**
   * The right-hand rail: the page's own navigation over the sections in the
   * main column. Pass the sections and the page owns the rest, because tracking
   * the scroll needs the scrollport and the chrome's height, and only the page
   * knows those. It renders the table of contents, pins it under the header,
   * marks the section you are reading as you scroll, and scrolls to a section
   * when you pick it.
   *
   * Omit it for a single-column page. A tab's own `aside` takes precedence.
   */
  aside?: F0ResourcePageRail
  /**
   * What the page is about, when the tabs do not say. Used by a page with no
   * tabs, and by href tabs, where the route renders the body.
   */
  children?: ReactNode
}
