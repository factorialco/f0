import { ReactNode } from "react"

import { TabItem } from "@/patterns/Navigation/Tabs"
import { ResourceHeaderProps } from "@/patterns/ResourceHeader"

// `onClose` is inherited from the header but has no meaning on a full page, so
// it is dropped rather than rendered as a stray button in the action row.
export interface F0ResourcePageProps extends Omit<
  ResourceHeaderProps,
  "onClose"
> {
  /** Sub-views of this resource. Rendered directly under the header. */
  tabs?: TabItem[]
  /** Sub-views of the active tab. Rendered under `tabs`. */
  secondaryTabs?: TabItem[]
  /** Active tab, for id-based `tabs`. Href-based tabs resolve from the route. */
  activeTabId?: string
  /** Active secondary tab, for id-based `secondaryTabs`. */
  activeSecondaryTabId?: string
  /** Page-wide notice. Rendered above the header, so it is seen first. */
  alert?: ReactNode
  /** Right-hand rail, read top to bottom. Omit it for a single-column page. */
  aside?: ReactNode
  /** Keeps the rail in place while the main column scrolls. */
  stickyAside?: boolean
  /** What the page is about. */
  children?: ReactNode
}
