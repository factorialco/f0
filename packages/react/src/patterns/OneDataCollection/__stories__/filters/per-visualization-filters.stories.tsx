import { useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react-vite"

import { Briefcase, Building, Envelope } from "@/icons/app"

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import {
  createPromiseDataFetch,
  filterPresets,
  filters,
  MockUser,
  sortings,
} from "../mockData"

const meta = {
  title: "Data Collection/Filters/Per Visualization",
  parameters: {
    layout: "padded",
  },
  tags: ["experimental", "internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const FiltersPerVisualization: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            filters: {
              department: filters.department,
            },
            presets: [
              {
                label: "Engineering",
                filter: { department: ["Engineering"] },
              },
            ],
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item: MockUser) => item.email,
                  sorting: "email",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            filters: {
              salary: filters.salary,
              search: filters.search,
            },
            options: {
              title: (item: MockUser) => item.name,
              description: (item: MockUser) => item.role,
              avatar: (item: MockUser) => ({
                type: "person",
                firstName: item.name.split(" ")[0],
                lastName: item.name.split(" ")[1],
              }),
              cardProperties: [
                {
                  label: "Email",
                  icon: Envelope,
                  render: (item: MockUser) => item.email,
                },
                {
                  label: "Department",
                  icon: Building,
                  render: (item: MockUser) => item.department,
                },
                {
                  label: "Role",
                  icon: Briefcase,
                  render: (item: MockUser) => item.role,
                },
              ],
            },
          },
        ]}
      />
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const source = useDataCollectionSource({
  filters,
  sortings,
  dataAdapter: { fetchData: ... },
})

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      // Only show "department" filter in table view
      filters: { department: filters.department },
      presets: [{ label: "Engineering", filter: { department: ["Engineering"] } }],
      options: { columns: [...] },
    },
    {
      type: "card",
      // Only show "salary" and "search" filters in card view
      filters: { salary: filters.salary, search: filters.search },
      options: { ... },
    },
  ]}
/>
        `,
      },
    },
  },
}

export const MixedGlobalAndPerViewFilters: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            filters: {
              department: filters.department,
            },
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item: MockUser) => item.email,
                  sorting: "email",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            options: {
              title: (item: MockUser) => item.name,
              description: (item: MockUser) => item.role,
              cardProperties: [
                {
                  label: "Email",
                  icon: Envelope,
                  render: (item: MockUser) => item.email,
                },
                {
                  label: "Department",
                  icon: Building,
                  render: (item: MockUser) => item.department,
                },
              ],
            },
          },
        ]}
      />
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const source = useDataCollectionSource({
  filters,
  presets: filterPresets,
  sortings,
  dataAdapter: { fetchData: ... },
})

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      // Table overrides with department-only filter
      filters: { department: filters.department },
      options: { columns: [...] },
    },
    {
      type: "card",
      // Card inherits all global source filters
      options: { ... },
    },
  ]}
/>
        `,
      },
    },
  },
}

export const PerViewPresetsOnly: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            presets: [
              {
                label: "High Salary",
                filter: {
                  salary: { mode: "single", value: 100000 },
                },
              },
            ],
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
                {
                  label: "Salary",
                  render: (item: MockUser) => ({
                    type: "amount",
                    value: item.salary,
                  }),
                  align: "right",
                  sorting: "salary",
                },
              ],
            },
          },
          {
            type: "list",
            options: {
              itemDefinition: (item: MockUser) => ({
                title: item.name,
                description: [item.email, item.role],
                avatar: {
                  type: "person",
                  firstName: item.name.split(" ")[0],
                  lastName: item.name.split(" ")[1],
                },
              }),
              fields: [
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                },
                {
                  label: "Manager",
                  render: (item: MockUser) => ({
                    type: "person",
                    value: {
                      firstName: item.manager.split(" ")[0],
                      lastName: item.manager.split(" ")[1],
                    },
                  }),
                },
              ],
            },
          },
        ]}
      />
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
const source = useDataCollectionSource({
  filters,
  presets: filterPresets,
  sortings,
  dataAdapter: { fetchData: ... },
})

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      // Adds extra presets specific to this view
      presets: [{ label: "High Salary", filter: { salary: { mode: "single", value: 100000 } } }],
      options: { columns: [...] },
    },
    {
      type: "list",
      // No per-view overrides, uses global filters & presets
      options: { ... },
    },
  ]}
/>
        `,
      },
    },
  },
}

/* ------------------------------------------------------------------ */
/* PersistenceAcrossRemounts                                           */
/* Interactive harness to manually reproduce the multi-viz storage     */
/* race fixed in useDataCollectionStorage. The wrapper exposes         */
/* mount/unmount, seed/clear/read controls and a live snapshot of the  */
/* localStorage value so you can verify visualizationFilters keys      */
/* survive a remount cycle.                                            */
/* ------------------------------------------------------------------ */

const PERSISTENCE_STORAGE_ID = "per-viz-filters-persistence/v1"
const PERSISTENCE_LS_KEY = `datacollection-${PERSISTENCE_STORAGE_ID}`
const PERSISTENCE_SEED = {
  visualization: 1,
  visualizationFilters: {
    "0": { department: ["Engineering"] },
    "1": { salary: { mode: "single", value: 100000 } },
  },
}

const PersistenceCollection = () => {
  const dataSource = useDataCollectionSource({
    filters,
    presets: filterPresets,
    sortings,
    dataAdapter: {
      fetchData: createPromiseDataFetch(),
    },
  })

  return (
    <OneDataCollection
      source={dataSource}
      id={PERSISTENCE_STORAGE_ID}
      storage={{ features: ["visualization", "visualizationFilters"] }}
      visualizations={[
        {
          type: "table",
          filters: {
            department: filters.department,
          },
          presets: [
            {
              label: "Engineering",
              filter: { department: ["Engineering"] },
            },
          ],
          options: {
            columns: [
              {
                label: "Name",
                render: (item: MockUser) => ({
                  type: "person",
                  value: {
                    firstName: item.name.split(" ")[0],
                    lastName: item.name.split(" ")[1],
                  },
                }),
                sorting: "name",
              },
              {
                label: "Email",
                render: (item: MockUser) => item.email,
                sorting: "email",
              },
              {
                label: "Department",
                render: (item: MockUser) => item.department,
                sorting: "department",
              },
            ],
          },
        },
        {
          type: "card",
          filters: {
            salary: filters.salary,
            search: filters.search,
          },
          presets: [
            {
              label: "High salary",
              filter: { salary: { mode: "single", value: 100000 } },
            },
          ],
          options: {
            title: (item: MockUser) => item.name,
            description: (item: MockUser) => item.role,
            avatar: (item: MockUser) => ({
              type: "person",
              firstName: item.name.split(" ")[0],
              lastName: item.name.split(" ")[1],
            }),
            cardProperties: [
              {
                label: "Email",
                icon: Envelope,
                render: (item: MockUser) => item.email,
              },
              {
                label: "Department",
                icon: Building,
                render: (item: MockUser) => item.department,
              },
              {
                label: "Role",
                icon: Briefcase,
                render: (item: MockUser) => item.role,
              },
            ],
          },
        },
      ]}
    />
  )
}

const PersistenceHarness = () => {
  const [mounted, setMounted] = useState(false)
  const [snapshot, setSnapshot] = useState<string>(
    () => localStorage.getItem(PERSISTENCE_LS_KEY) ?? ""
  )

  // Refresh snapshot on a 200 ms cadence while mounted so users can watch
  // the debounced storage writes land in real time.
  useEffect(() => {
    if (!mounted) return
    const id = window.setInterval(() => {
      setSnapshot(localStorage.getItem(PERSISTENCE_LS_KEY) ?? "")
    }, 200)
    return () => window.clearInterval(id)
  }, [mounted])

  const refresh = () =>
    setSnapshot(localStorage.getItem(PERSISTENCE_LS_KEY) ?? "")

  const seed = () => {
    localStorage.setItem(
      PERSISTENCE_LS_KEY,
      JSON.stringify(PERSISTENCE_SEED, null, 2)
    )
    refresh()
  }

  const reset = () => {
    localStorage.removeItem(PERSISTENCE_LS_KEY)
    refresh()
  }

  // Derive a status from the live snapshot so users see at a glance whether
  // the persisted multi-visualization map survived (≥ 2 keys), shrank to one
  // key (the bug signature), or is empty.
  const parsed = (() => {
    if (!snapshot) return null
    try {
      return JSON.parse(snapshot) as {
        visualizationFilters?: Record<string, unknown>
      }
    } catch {
      return null
    }
  })()
  const vizFilterKeys = parsed?.visualizationFilters
    ? Object.keys(parsed.visualizationFilters)
    : []
  const status: "ok" | "bug" | "empty" =
    vizFilterKeys.length >= 2
      ? "ok"
      : vizFilterKeys.length === 1
        ? "bug"
        : "empty"

  const statusBadge = {
    ok: { icon: "✅", label: "Multi-visualization map preserved" },
    bug: {
      icon: "⚠️",
      label: "Only one key present — multi-viz map was overwritten",
    },
    empty: { icon: "—", label: "No persisted state yet" },
  }[status]

  const buttonClass =
    "rounded-md border border-f1-border bg-f1-background px-3 py-1 text-f1-foreground hover:bg-f1-background-hover"

  return (
    <div className="flex flex-col gap-4">
      {/* Description card */}
      <div className="rounded-md border border-f1-border bg-f1-background-secondary p-4 text-sm leading-relaxed text-f1-foreground">
        <div className="mb-2 font-semibold">
          Per-visualization filter persistence
        </div>
        <p className="mb-2">
          This data collection saves the filters of each visualization to{" "}
          <code>localStorage</code>, so they survive a page reload. Switch
          between <strong>Table</strong> and <strong>Card</strong>, apply some
          filters in each, and watch the storage snapshot update live.
        </p>
        <p className="mb-1 font-medium">Bug repro:</p>
        <ol className="ml-5 list-decimal space-y-1">
          <li>
            Click <strong>Pre-fill storage</strong> — this writes filters for{" "}
            <em>both</em> visualizations into <code>localStorage</code>.
          </li>
          <li>
            Click <strong>Mount</strong>. The collection hydrates from the
            persisted state.
          </li>
          <li>
            Wait ~500 ms. With the fix, the snapshot below still shows{" "}
            <strong>two keys</strong> (✅). Without the fix, one key disappears
            (⚠️) because a pre-hydration write overwrites the stored map.
          </li>
        </ol>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
          Controls
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={buttonClass}
            onClick={seed}
            data-testid="persistence-seed"
          >
            Pre-fill storage
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={reset}
            data-testid="persistence-clear"
          >
            Reset storage
          </button>
          <button
            type="button"
            className={buttonClass}
            onClick={() => setMounted((m) => !m)}
            data-testid="persistence-toggle-mount"
          >
            {mounted ? "Unmount" : "Mount"}
          </button>
        </div>
      </div>

      {/* Storage status panel */}
      <div className="flex flex-col gap-2 rounded-md border border-f1-border bg-f1-background p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
          localStorage state
        </div>
        <div className="font-mono text-xs text-f1-foreground-secondary">
          {PERSISTENCE_LS_KEY}
        </div>
        <div
          className="flex items-center gap-2 text-sm"
          data-testid="persistence-status"
          data-status={status}
        >
          <span aria-hidden>{statusBadge.icon}</span>
          <span>
            <strong>Visualization filter keys:</strong>{" "}
            {vizFilterKeys.length > 0
              ? `[${vizFilterKeys.map((k) => `"${k}"`).join(", ")}]`
              : "(none)"}{" "}
            — {statusBadge.label}
          </span>
        </div>
        <details>
          <summary className="cursor-pointer text-xs text-f1-foreground-secondary">
            Full JSON
          </summary>
          <pre
            className="mt-2 max-h-48 overflow-auto rounded-md border border-f1-border bg-f1-background-secondary p-3 text-xs"
            data-testid="persistence-storage-snapshot"
          >
            {snapshot || "(empty)"}
          </pre>
        </details>
      </div>

      {mounted && <PersistenceCollection />}
    </div>
  )
}

export const PersistenceAcrossRemounts: Story = {
  render: () => <PersistenceHarness />,
  parameters: {
    docs: {
      description: {
        story: `
Manual reproduction harness for the per-visualization-filters storage race.

**Steps**
1. Click **Mount OneDataCollection**, switch between Table and Card and apply
   filters/presets in each view. The snapshot panel shows
   \`visualizationFilters\` populated with both \`"0"\` and \`"1"\` keys.
2. Click **Unmount**, then **Mount** again to simulate navigating away and
   back. Wait ~500ms; both keys should still be present.
3. Alternatively click **Seed storage** (writes a multi-viz map directly),
   then **Mount**, then watch the snapshot. The map should not lose any key.

**Bug behaviour (without the fix)**: the snapshot collapses to a single-key
\`visualizationFilters\` map shortly after mount because a pre-hydration write
overwrites the persisted multi-viz state.
        `,
      },
      source: {
        code: `
const STORAGE_ID = "per-viz-filters-persistence/v1"

<OneDataCollection
  source={source}
  id={STORAGE_ID}
  storage={{ features: ["visualization", "visualizationFilters"] }}
  visualizations={[
    { type: "table", filters: { department: filters.department }, presets: [...], options: { columns: [...] } },
    { type: "card",  filters: { salary: filters.salary, search: filters.search }, presets: [...], options: { ... } },
  ]}
/>
        `,
      },
    },
  },
}
