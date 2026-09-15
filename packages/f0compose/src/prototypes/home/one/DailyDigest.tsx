import {
  CalendarEventList,
  WidgetInboxList,
  WidgetSimpleList,
} from "@factorialco/f0-react/dist/experimental"

import { openInboxTasks } from "../inbox/inboxTasks"
import { useNeedsYou } from "../needsYouStore"
import { useProfile } from "../profileStore"
import { Post } from "../windows/CommunitiesWindow"
import { COMMUNITY_POSTS } from "../windows/communityPosts"
import { homeEvents } from "../windows/EventsWindow"
import { HomeWidget } from "./digest/HomeWidget"

/**
 * The digest, a screen below the composer (Angel, 2026-09-15): the same
 * widgets the monorepo's new Home puts in its columns, in the order he
 * asked for — what needs you across the top, the day beside the pipeline,
 * the wall underneath.
 *
 * Production builds these as declarative specs whose slots the f0 runtime
 * renders (`listSlot`, `homeSlot`, `HomeWidgetItem`). That runtime is not
 * in this f0 build, so what is lifted here is the layer BELOW it: `Widget`
 * for the card and its header, and the very list components those slots
 * resolve to. The chrome is production's, the data is the prototype's own
 * fixtures, so the two cannot drift.
 */

/** The monorepo's own caps: NeedsYou/useNeedsYouWidget.ts MAX_NEEDS_YOU_ROWS,
 *  Events/params.ts DEFAULT_MAX_EVENTS, OpenPositions/widgetSpec.ts
 *  MAX_VISIBLE_LOCATIONS. */
const MAX_NEEDS_YOU_ROWS = 6
const MAX_EVENTS = 5
const MAX_LOCATIONS = 6

/** Open roles by location, the rows OpenPositions/widgetSpec.ts builds
 *  from `openPositionsLocationsConnection` (title = location, trailing
 *  counter, link to the same page). */
const OPEN_POSITIONS = [
  { id: "barcelona", title: "Barcelona", count: 6 },
  { id: "madrid", title: "Madrid", count: 3 },
  { id: "lisbon", title: "Lisbon", count: 2 },
  { id: "remote", title: "Remote · EU", count: 4 },
]

export function DailyDigest() {
  const profile = useProfile()
  const needsYou = useNeedsYou()
  const tasks = openInboxTasks(profile, needsYou.cleared, "all").slice(
    0,
    MAX_NEEDS_YOU_ROWS
  )

  return (
    <section
      data-home-digest
      aria-label="Daily digest"
      className="flex w-[712px] max-w-full shrink-0 flex-col gap-4 pb-16 pt-10"
    >
      <header className="mb-6 flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-f1-foreground">
          Daily digest
        </h2>
        <p className="text-base text-f1-foreground-secondary">
          Tuesday, 22nd of July 2026
        </p>
      </header>

      <HomeWidget
        title="Needs you"
        count={tasks.length}
        link={{ title: "Go to Inbox" }}
        actions={[{ label: "Mark all as read" }, { label: "Remove widget" }]}
        action={{ label: "Go to Inbox" }}
      >
        <WidgetInboxList
          showAllItems
          items={tasks.map((task) => ({
            id: task.id,
            title: task.title,
            subtitle: task.meta,
            module: task.module,
          }))}
        />
      </HomeWidget>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <HomeWidget
          fullHeight
          title="Events"
          // The way out is a FOOTER button and the way IN is the title:
          // f0's SlotWidget states the rule, and the header's corner
          // belongs to the widget's own menu.
          link={{ title: "Go to Calendar" }}
          actions={[{ label: "Configure widget" }, { label: "Remove widget" }]}
          action={{ label: "Go to Calendar" }}
        >
          <CalendarEventList
            events={homeEvents.slice(0, MAX_EVENTS)}
            showAllItems
          />
        </HomeWidget>
        <HomeWidget
          fullHeight
          title="Open positions"
          count={OPEN_POSITIONS.reduce((total, row) => total + row.count, 0)}
          link={{ title: "Go to Recruitment" }}
          actions={[{ label: "Remove widget" }]}
          action={{ label: "Go to Recruitment" }}
        >
          <WidgetSimpleList
            showAllItems
            items={OPEN_POSITIONS.slice(0, MAX_LOCATIONS)}
          />
        </HomeWidget>
      </div>

      <HomeWidget
        title="Community posts"
        link={{ title: "Go to Communities" }}
        actions={[{ label: "Remove widget" }]}
        action={{ label: "Go to Communities" }}
      >
        <Post post={COMMUNITY_POSTS[1]} />
      </HomeWidget>
    </section>
  )
}
