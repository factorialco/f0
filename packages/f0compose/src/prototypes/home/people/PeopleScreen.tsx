import {
  OneDataCollection,
  OneEmptyState,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"

import { PeopleBanners } from "./PeopleBanners"
import { peopleColumns } from "./peopleColumns"
import { usePeopleFocus } from "./peopleFocusStore"
import { setPeopleTab, usePeopleTab } from "./peopleTabStore"
import { usePeopleSource } from "./usePeopleSource"

/**
 * Organization › People — the Hub's People destination (Figma 2730:459215,
 * reached from the Hub nav panel's Company › People row).
 *
 * The screen runs EDGE TO EDGE inside the canvas: the tab rule and the
 * table's header hairline both span the full width, so unlike Policies it
 * owns its gutters and its own scroller rather than sitting in the
 * canvas's centred column.
 *
 * The frame carries no ONE composer (see Home's `HIDDEN_PROMPT_VIEWS`):
 * One is reached from the button ON the headcount banner, which is the
 * whole point of the design.
 */

const TABS = [
  { id: "people", label: "People" },
  { id: "activity", label: "Activity" },
  { id: "teams", label: "Teams" },
  { id: "org-chart", label: "Org chart" },
  { id: "roles", label: "Roles" },
] as const

type TabId = (typeof TABS)[number]["id"]

function PeopleTable() {
  const source = usePeopleSource()
  return (
    <OneDataCollection
      source={source}
      onSelectItems={() => {}}
      visualizations={[{ type: "table", options: { columns: peopleColumns } }]}
    />
  )
}

/**
 * The table, remounted when One changes its focus.
 *
 * ODC owns its own fetch lifecycle and knows nothing about our store, so
 * changing `peopleFocus` alone would leave the rows it already has on
 * screen. The `key` is the cheapest honest way to make it refetch — and
 * remounting a 24-row table costs nothing. The alternative, threading the
 * focus into `useDataCollectionSource`'s config and relying on ODC to
 * notice, depends on internals we do not own.
 */
function FocusedPeopleTable() {
  const focus = usePeopleFocus()
  return <PeopleTable key={focus ?? "all"} />
}

export function PeopleScreen() {
  // Only the People tab is designed. The other four move the highlight and
  // say so, rather than silently showing the People table under a
  // different name — the prototype's rule for undesigned surfaces is to
  // keep the finished shape and be honest about the gap.
  // Module store, not component state: the window unmounts with the
  // canvas whenever a widget maximizes, and the tab has to survive that.
  const tab = usePeopleTab()
  const active = TABS.find((t) => t.id === tab)

  return (
    // The pane is `fills: true`, so the BODY owns its layout and its
    // scroller. (It briefly did not, back when the card hugged its
    // content — that premise died when the window took the full height.)
    <div className="home-window-scroll flex min-h-0 w-full flex-1 flex-col overflow-auto overscroll-contain">
      <Tabs
        tabs={TABS.map((t) => ({ id: t.id, label: t.label }))}
        activeTabId={tab}
        setActiveTabId={(id: string) => setPeopleTab(id as TabId)}
      />
      {tab === "people" ? (
        <div className="flex w-full flex-col pb-6">
          <PeopleBanners />
          <FocusedPeopleTable />
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center px-6 py-16">
          <OneEmptyState
            emoji="🚧"
            title={active?.label ?? "Not designed yet"}
            description="This tab isn't part of the Home Vision prototype yet — People is the one this design covers."
          />
        </div>
      )}
    </div>
  )
}
