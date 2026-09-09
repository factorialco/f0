import { F0Button } from "@factorialco/f0-react"
import { Megaphone, Settings } from "@factorialco/f0-react/icons/app"

import type { PanelSpec } from "./WindowStack"

import { MONTH_LABEL } from "../calendar/calendarFixtures"
import { CalendarScreen } from "../calendar/CalendarScreen"
import { PeopleScreen } from "../people/PeopleScreen"

/**
 * A Hub section as a pane in the LEFT STACK (Figma 2787:39347 for People,
 * 2789:54639 for the calendar — the two frames are identical apart from
 * the title, the first action and the content height).
 *
 * SUPERSEDES this file's own earlier reasoning, which said a module could
 * NOT be a stack member because `columnWidth` is one number for the whole
 * stack. That was true and it was the wrong conclusion: Oskar asked for
 * the stacking rules ("si abro una conversacion de coms, deberia apilarse
 * verticalmente"), and one column with one width is exactly what
 * stacking means. As a bespoke `shrink-0` pane beside the stack it was
 * also actively broken — measured at 1440: 428 of chat + 576 of module +
 * 480 of canvas needs 1484 in a 1152 row, and since the module refused to
 * shrink and the canvas has a floor, the CHATS stack was crushed to 96px
 * and the conversation you clicked was an 88px sliver.
 *
 * So this file is now only a registry. Everything the old `ModuleWindow`
 * hand-rolled — the dock, the resize seam, the width clamps, the maximize
 * takeover, the entrance motion — comes from `WindowStack` instead, which
 * is also where the push-vs-overlay lift lives.
 */

export type ModuleWindowView = "people" | "calendar"

export type ModulePaneId = `module:${ModuleWindowView}`

const MODULE_PANES: Record<
  ModuleWindowView,
  { title: string; content: React.ReactNode; action: React.ReactNode }
> = {
  // Titled "People" in the frame, where `screenTitle` said "Organization".
  // Kept as the frame draws it, which is also the rule already recorded
  // for a window: it is titled by what you clicked, and the Hub row you
  // clicked says People.
  people: {
    title: "People",
    content: <PeopleScreen />,
    // The module's own action, in the frame's first header slot — a
    // megaphone for People, settings for the calendar. It is the screen's
    // former navbar action: the actions of a module travel with it.
    action: (
      <F0Button
        variant="ghost"
        size="md"
        icon={Megaphone}
        hideLabel
        label="Announcements"
      />
    ),
  },
  calendar: {
    title: MONTH_LABEL,
    content: <CalendarScreen />,
    action: (
      <F0Button
        variant="ghost"
        size="md"
        icon={Settings}
        hideLabel
        label="Calendar settings"
      />
    ),
  },
}

/** Which `?view=` values open as a pane rather than replacing One. Kept in
 *  step with `HUB_VIEWS` in HomeNav — a row there with no entry here
 *  navigates to a screen, and an entry here with no row is unreachable. */
export function isModuleWindowView(
  view: string | null
): view is ModuleWindowView {
  return view !== null && view in MODULE_PANES
}

export function modulePaneId(view: ModuleWindowView): ModulePaneId {
  return `module:${view}`
}

export function isModulePane(id: string): id is ModulePaneId {
  return id.startsWith("module:")
}

export function moduleViewOf(id: ModulePaneId): ModuleWindowView {
  return id.slice("module:".length) as ModuleWindowView
}

/**
 * `fills` on BOTH modules, for two different reasons that land on the same
 * flag: the calendar's toolbar has to stay put while only its hour grid
 * scrolls under the sticky day header, and People needs the maximized
 * state to run full-bleed rather than being clamped to the stack's 712px
 * reading column. Each screen owns its own scroller.
 */
export function modulePaneSpec(view: ModuleWindowView): PanelSpec {
  const pane = MODULE_PANES[view]
  return {
    title: pane.title,
    content: pane.content,
    actions: pane.action,
    fills: true,
  }
}
