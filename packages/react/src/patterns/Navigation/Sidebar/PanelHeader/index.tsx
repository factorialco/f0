import type { ReactNode } from "react"

import { OneEllipsis } from "@/lib/OneEllipsis"

import { SidebarIcon } from "../Icon"

export type SidebarPanelHeaderProps = {
  /**
   * What the panel is showing — normally the label of the active rail tab.
   *
   * The company's name used to sit here. It moved into the rail's dropdown:
   * which workspace you are in changes once a session, which section you are
   * in changes constantly, and only one of the two earns the top of the panel.
   */
  title: string
  /** Controls to the left of the collapse toggle (e.g. a "new" button). */
  actions?: ReactNode
}

/**
 * The panel's title bar in the rail composition: the active section, and the
 * control that collapses the panel down to the rail.
 *
 * `SidebarIcon` already renders as a cross on a small screen, so the same
 * button reads as "collapse" on desktop and "close" over the drawer.
 */
export function SidebarPanelHeader({
  title,
  actions,
}: SidebarPanelHeaderProps) {
  return (
    // 60px, the same height as the rail's logo row, so the section title and
    // the workspace mark sit on one line.
    <div className="flex h-[60px] w-full shrink-0 items-center justify-between gap-2 pl-3 pr-2">
      <OneEllipsis
        tag="h2"
        className="min-w-0 text-base font-medium text-f1-foreground"
      >
        {title}
      </OneEllipsis>
      <div className="flex shrink-0 items-center">
        {actions}
        <SidebarIcon />
      </div>
    </div>
  )
}
