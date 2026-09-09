import type { IconType } from "@factorialco/f0-react"

import {
  Calendar,
  Clock,
  Folders,
  Graph,
  Home as HomeIcon,
  Hub as HubIcon,
  Inbox as InboxIcon,
  Marketplace,
  Messages,
  Plus,
  Shield,
  Timer,
} from "@factorialco/f0-react/icons/app"

import { Bot } from "./Bot"

/**
 * Which hover motion a glyph gets, keyed by the icon COMPONENT itself.
 *
 * A Map rather than a prop threaded through every call site: the icons are
 * module singletons, so their identity is a reliable key, and `NavRow` /
 * `RailItem` already receive the component. Adding a motion is one line
 * here and nothing at the call sites.
 *
 * The key lands on the BUTTON, not the glyph, because `F0Icon` drops
 * `className` — so the CSS reaches into the SVG from the hovered ancestor
 * instead (see `icon-motion.css`, which is where the motions live).
 */
const ICON_MOTION = new Map<IconType, string>([
  [Timer, "timer"],
  [HomeIcon, "home"],
  [Messages, "messages"],
  [InboxIcon, "inbox"],
  [Calendar, "calendar"],
  [HubIcon, "hub"],
  [Plus, "plus"],
  [Bot, "bot"],
  [Clock, "clock"],
  [Graph, "graph"],
  [Folders, "folders"],
  [Marketplace, "marketplace"],
  [Shield, "shield"],
])

/** The `data-icon-motion` value for a glyph, or undefined if it has none. */
export function motionKeyFor(icon: IconType | undefined): string | undefined {
  return icon ? ICON_MOTION.get(icon) : undefined
}
