import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo } from "react"

import { Calendar, Flag, Person } from "@/icons/app"

import { RecordType } from "@/hooks/datasource"

import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { OneDataCollection } from "../.."

// Preview of per-version columns (the onboarding case): each version shows its
// own phases, and versions with no people are simply not shown.
// NOTE: stacked-board height in Kanban.tsx is PROVISIONAL. The API shape
// (getLanesForGroup) is pending Foundations review.

type Onbo = RecordType & {
  id: string
  name: string
  version: string
  phase: string
  status: "on_track" | "at_risk" | "off_track"
  role: string
  startDate: string
}

// Mirrors the real onboarding card (VersionBoard): status as a coloured tag.
const STATUS: Record<
  Onbo["status"],
  { label: string; level: "positive" | "warning" | "critical" }
> = {
  on_track: { label: "On track", level: "positive" },
  at_risk: { label: "At risk", level: "warning" },
  off_track: { label: "Off track", level: "critical" },
}

// Phases per version (from the policy definition) — they DIFFER per version.
const PHASES: Record<string, Array<{ id: string; title: string }>> = {
  v2: [
    { id: "start", title: "Start date" },
    { id: "sixmo", title: "6 months" },
  ],
  v1: [
    { id: "month", title: "After 1 month" },
    { id: "prob", title: "Probation" },
  ],
}

// Global union of every version's phases — the fetch runs over this.
const UNION_LANES = [
  { id: "start", title: "Start date" },
  { id: "month", title: "After 1 month" },
  { id: "prob", title: "Probation" },
  { id: "sixmo", title: "6 months" },
]

// v2 and v1 have people (with different phases). A version with no people is not shown.
const DATA: Onbo[] = [
  {
    id: "1",
    name: "Alice Stone",
    version: "v2",
    phase: "start",
    status: "on_track",
    role: "Software Engineer",
    startDate: "12/05/2026",
  },
  {
    id: "2",
    name: "Bob Ng",
    version: "v2",
    phase: "start",
    status: "at_risk",
    role: "Product Manager",
    startDate: "05/05/2026",
  },
  {
    id: "3",
    name: "Carla Ruiz",
    version: "v2",
    phase: "sixmo",
    status: "on_track",
    role: "Designer",
    startDate: "01/02/2026",
  },
  {
    id: "4",
    name: "Dan Peer",
    version: "v1",
    phase: "month",
    status: "off_track",
    role: "Data Analyst",
    startDate: "20/03/2026",
  },
  {
    id: "5",
    name: "Eve Lang",
    version: "v1",
    phase: "prob",
    status: "on_track",
    role: "Sales Rep",
    startDate: "15/01/2026",
  },
]

const meta = {
  title: "Data Collection/Visualizations/Kanban Versions",
  parameters: { layout: "padded", chromatic: { disableSnapshot: true } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const PerVersionColumns: Story = {
  render: () => {
    const dataAdapter = useMemo(
      () => ({
        paginationType: "infinite-scroll" as const,
        perPage: 50,
        fetchData: async (options: { filters?: { phase?: string[] } }) => {
          const phase = options.filters?.phase
          const records = phase
            ? DATA.filter((d) => phase.includes(d.phase))
            : DATA
          return {
            records,
            total: records.length,
            perPage: records.length,
            type: "infinite-scroll" as const,
            cursor: null,
            hasMore: false,
          }
        },
      }),
      []
    )

    const source = useDataCollectionSource<Onbo>(
      {
        lanes: UNION_LANES.map((l) => ({
          id: l.id,
          filters: { phase: [l.id] },
        })),
        currentGrouping: { field: "version", order: "desc" },
        grouping: {
          collapsible: true,
          defaultOpenGroups: true,
          groupBy: {
            version: {
              name: "Version",
              label: (id) => `Version ${String(id).replace("v", "")}`,
            },
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- preview adapter
        dataAdapter: dataAdapter as any,
      },
      [dataAdapter]
    )

    return (
      // Mirrors ExampleComponent's wrapper (the working KanbanWithGrouping setup):
      // fullHeight + a bounded, white-background scroll container.
      <div className="max-h-full w-full bg-[#fff]">
        <OneDataCollection
          source={source}
          fullHeight
          visualizations={[
            {
              type: "kanban" as const,
              options: {
                lanes: UNION_LANES,
                getLanesForGroup: (key: string) => PHASES[key] ?? [],
                title: (item: Onbo) => item.name,
                avatar: (item: Onbo) => {
                  const [firstName, lastName] = item.name.split(" ")
                  return {
                    type: "person" as const,
                    firstName: firstName ?? "",
                    lastName: lastName ?? "",
                  }
                },
                metadata: (item: Onbo) => [
                  {
                    icon: Flag,
                    property: {
                      type: "alertTag" as const,
                      label: "Status",
                      value: STATUS[item.status],
                    },
                  },
                  {
                    icon: Person,
                    property: {
                      type: "text" as const,
                      label: "Role",
                      value: item.role,
                    },
                  },
                  {
                    icon: Calendar,
                    property: {
                      type: "text" as const,
                      label: "Start date",
                      value: item.startDate,
                    },
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}
