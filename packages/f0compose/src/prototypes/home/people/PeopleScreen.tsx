import {
  OneDataCollection,
  OneEmptyState,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import { PeopleBanners } from "./PeopleBanners"
import { peopleColumns } from "./peopleColumns"
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

export function PeopleScreen() {
  // Only the People tab is designed. The other four move the highlight and
  // say so, rather than silently showing the People table under a
  // different name — the prototype's rule for undesigned surfaces is to
  // keep the finished shape and be honest about the gap.
  const [tab, setTab] = useState<TabId>("people")
  const active = TABS.find((t) => t.id === tab)

  return (
    <div className="home-canvas-scroll flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
      <Tabs
        tabs={TABS.map((t) => ({ id: t.id, label: t.label }))}
        activeTabId={tab}
        setActiveTabId={(id: string) => setTab(id as TabId)}
      />
      {tab === "people" ? (
        <div className="flex w-full flex-col pb-6">
          <PeopleBanners />
          <PeopleTable />
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
