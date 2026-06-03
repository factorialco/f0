import { useCallback, useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"
import {
  buildDataCollectionUrlParams,
  type DataCollectionUrlState,
  writeDataCollectionStorage,
} from "@/lib/providers/datacollection/dataCollectionUrlParams"
import { FiltersState } from "@/patterns/OneFilterPicker/types"

import { ExampleComponent, type FiltersType } from "./mockData"

/**
 * Identifier persisted to (and read from) the URL + localStorage cache. The URL
 * uses `?dc=<id>` to address this exact data collection.
 */
const STORAGE_ID = "examples/url-params/v1"

type CurrentFilters = FiltersState<FiltersType>
type UrlState = DataCollectionUrlState<CurrentFilters>

/** A salary range filter value (`{ mode: "range", from, to }`). */
const salaryRange = (from: number, to: number): UrlState["filters"] => ({
  salary: {
    mode: "range",
    from: { value: from, closed: true },
    to: { value: to, closed: true },
  },
})

/**
 * Button presets that map to a URL query string the data collection reacts to.
 * Each filter rides in its own `dc_<key>` param, so the URLs stay readable —
 * e.g. `?dc_id=…&dc_department=Engineering&dc_department=Product&dc_search=a`.
 */
const PRESETS: { label: string; state: UrlState }[] = [
  {
    label: "Eng + Product (multi)",
    state: { filters: { department: ["Engineering", "Product"] } },
  },
  {
    label: "Eng + salary 1k–9k",
    state: {
      filters: { department: ["Engineering"], ...salaryRange(1000, 9000) },
    },
  },
  {
    label: "Salary >1k, <9k (exclusive)",
    state: {
      filters: {
        salary: {
          mode: "range",
          from: { value: 1000, closed: false },
          to: { value: 9000, closed: false },
        },
      },
    },
  },
  {
    label: "Search “a”",
    state: { search: "a" },
  },
  {
    label: "Search filter “ann” (type: search)",
    state: { filters: { searchStrict: "ann" } },
  },
  {
    label: "Design + search + sort",
    state: {
      filters: { department: ["Design"] },
      search: "a",
      sortings: { field: "salary", order: "desc" },
    },
  },
  {
    label: "Sort name ↑",
    state: { sortings: { field: "name", order: "asc" } },
  },
]

/**
 * Demonstrates the built-in two-way URL sync of OneDataCollection. Note that the
 * collection only receives an `id` — no extra props are needed for the syncing;
 * it is on by default (and could be turned off with `disableUrlParams`).
 *
 * - **collection → URL:** change the filters, sorting or search directly in the
 *   UI and watch the query string update automatically.
 * - **URL → collection:** the preset buttons rewrite the URL and remount the
 *   collection, which reads the params on mount and applies them — the same path
 *   a fresh navigation to a shared URL would take.
 */
const UrlParamsExample = () => {
  // Remounting re-runs OneDataCollection's read-from-URL on mount.
  const [hydrationKey, setHydrationKey] = useState(0)
  const [query, setQuery] = useState("")

  // The collection writes the URL itself (via replaceState, which fires no
  // event), so poll it to keep this demo's read-out in sync.
  useEffect(() => {
    const update = () => setQuery(window.location.search.replace(/^\?/, ""))
    update()
    const interval = setInterval(update, 300)
    return () => clearInterval(interval)
  }, [])

  const goToUrl = useCallback((search: URLSearchParams) => {
    const next = search.toString()
    window.history.replaceState(
      null,
      "",
      next ? `${window.location.pathname}?${next}` : window.location.pathname
    )
    setQuery(next)
    setHydrationKey((key) => key + 1)
  }, [])

  const applyPreset = useCallback(
    (state: UrlState) => {
      goToUrl(buildDataCollectionUrlParams<CurrentFilters>(STORAGE_ID, state))
    },
    [goToUrl]
  )

  const reset = useCallback(() => {
    // Clear the persisted state too, otherwise the collection would re-hydrate
    // the previous filters from storage on remount.
    writeDataCollectionStorage(STORAGE_ID, {})
    goToUrl(new URLSearchParams())
  }, [goToUrl])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {PRESETS.map((preset) => (
          <F0Button
            key={preset.label}
            label={preset.label}
            variant="outline"
            size="sm"
            onClick={() => applyPreset(preset.state)}
          />
        ))}
        <F0Button label="Reset" variant="critical" size="sm" onClick={reset} />
      </div>

      <div className="text-f1-foreground-secondary font-mono text-sm">
        URL query: <span data-testid="url-params-query">{query || "—"}</span>
      </div>

      <ExampleComponent
        key={hydrationKey}
        id={STORAGE_ID}
        storage={{ features: ["filters", "search", "sortings"] }}
        searchBar
      />
    </div>
  )
}

const meta = {
  title: "Data Collection/URL params",
  component: UrlParamsExample,
  parameters: {
    layout: "padded",
  },
  tags: ["experimental"],
} satisfies Meta<typeof UrlParamsExample>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Change filters/sorting/search to see them reflected in the URL, or click a
 * preset to load that state from the URL into the collection.
 */
export const Default: Story = {
  render: () => <UrlParamsExample />,
}
