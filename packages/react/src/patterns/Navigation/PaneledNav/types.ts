import { IconType } from "@/components/F0Icon"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"

/** A single navigable link inside a mega-menu section. */
export type NavLink = {
  label: string
  href: string
  /** Optional leading icon shown next to the label. */
  icon?: IconType
}

/** A titled group of links rendered as one block in the panel. */
export type NavSection = {
  title: string
  items: NavLink[]
}

export type PaneledNavProps = {
  /** Sections rendered inside the mega-menu, distributed across columns. */
  sections: NavSection[]
  /**
   * Number of columns the panel is laid out in. Sections are distributed
   * round-robin across them, matching the original concept.
   * @default 4
   */
  columns?: number
  /** The signed-in user, used to render the rightmost avatar (no text). */
  user: {
    firstName: string
    lastName: string
    src?: string
  }
  /** Items for the avatar dropdown menu (e.g. My settings, Log out). */
  userMenuItems: DropdownItem[]
  /** Invoked when the notifications bell is pressed. */
  onNotificationsClick?: () => void
  /** Shows an unread dot on the notifications bell when true. */
  notificationsBadge?: boolean
}
