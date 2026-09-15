import {
  CalendarEventList,
  Widget,
  WidgetInboxList,
  WidgetSimpleList,
} from "@factorialco/f0-react/dist/experimental"

import { openInboxTasks } from "../inbox/inboxTasks"
import { useNeedsYou } from "../needsYouStore"
import { useProfile } from "../profileStore"
import { Post } from "../windows/CommunitiesWindow"
import { COMMUNITY_POSTS } from "../windows/communityPosts"
import { homeEvents } from "../windows/EventsWindow"

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

/** Open roles by location, mirroring the monorepo's open-positions rows. */
const OPEN_POSITIONS = [
  { id: "barcelona", title: "Barcelona", count: 6 },
  { id: "madrid", title: "Madrid", count: 3 },
  { id: "lisbon", title: "Lisbon", count: 2 },
  { id: "remote", title: "Remote · EU", count: 4 },
]

export function DailyDigest() {
  const profile = useProfile()
  const needsYou = useNeedsYou()
  const tasks = openInboxTasks(profile, needsYou.cleared, "all").slice(0, 6)

  return (
    <section
      data-home-digest
      aria-label="Daily digest"
      className="flex w-[712px] max-w-full shrink-0 flex-col gap-4 pb-16 pt-10"
    >
      <header className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-f1-foreground">
          Daily digest
        </h2>
        <p className="text-base text-f1-foreground-secondary">
          Tuesday, 22nd of July 2026
        </p>
      </header>

      <Widget header={{ title: "Needs you", count: tasks.length }}>
        <WidgetInboxList
          showAllItems
          items={tasks.map((task) => ({
            id: task.id,
            title: task.title,
            subtitle: task.meta,
            module: task.module,
          }))}
        />
      </Widget>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Widget
          fullHeight
          header={{ title: "Events", link: { title: "Calendar" } }}
        >
          <CalendarEventList events={homeEvents.slice(0, 3)} showAllItems />
        </Widget>
        <Widget
          fullHeight
          header={{
            title: "Recruitment",
            count: OPEN_POSITIONS.reduce((total, row) => total + row.count, 0),
            link: { title: "Open positions" },
          }}
        >
          <WidgetSimpleList showAllItems items={OPEN_POSITIONS} />
        </Widget>
      </div>

      <Widget header={{ title: "Communities", link: { title: "Communities" } }}>
        <Post post={COMMUNITY_POSTS[1]} />
      </Widget>
    </section>
  )
}
