import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useMemo, useState } from "react"

import type { PaginationInfo } from "@/hooks/datasource/types"
import {
  buildDataCollectionUrlParams,
  MAX_URL_FILTER_VALUES,
  parseDataCollectionUrlParams,
} from "@/lib/providers/datacollection/dataCollectionUrlParams"
import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import {
  paginationFilters,
  type PaginationFiltersType,
  PaginationExampleComponent,
} from "./mockData"

const STORAGE_ID = "examples/url-params/v1"

/**
 * Filters, sorting and pagination for one collection, all reflected in the URL
 * together — each filter in its own readable `dc_<key>` param (`dc_department`,
 * `dc_assignee`, …), plus `dc_sort` and `dc_page`. There is no `dc_id`: a single
 * URL-synced collection per page is assumed.
 *
 * Filter, sort and page through: the URL updates with all of them at once, and
 * reloading (or opening a shared URL) restores the same state. Because
 * pagination lives inside the data hook, everything is read from the URL
 * synchronously (seeding the first fetch — no race) and written back by a single
 * writer, which is what lets them coexist without clobbering. Try `Assignee` →
 * "Select all": over {@link MAX_URL_FILTER_VALUES} values it is dropped from the
 * URL (still applied). Storage is off here, so this also shows URL syncing needs
 * no storage.
 */
const UrlParamsExample = () => {
  // Read everything synchronously from the URL so the first fetch/render already
  // has filters + sorting + page.
  const initial = useMemo(
    () =>
      parseDataCollectionUrlParams(
        window.location.search,
        paginationFilters as unknown as FiltersDefinition
      ),
    []
  )

  const [filters, setFilters] = useState(
    (initial.filters ?? {}) as FiltersState<PaginationFiltersType>
  )
  const [sortings, setSortings] = useState(initial.sortings ?? null)
  const [page, setPage] = useState<number>(initial.page ?? 1)
  const [query, setQuery] = useState("")

  // A single writer for every param, so none clobbers the others.
  useEffect(() => {
    const params = buildDataCollectionUrlParams({
      filters: filters as FiltersState<FiltersDefinition>,
      sortings,
      page,
    })
    const next = params.toString()
    window.history.replaceState(
      null,
      "",
      next ? `${window.location.pathname}?${next}` : window.location.pathname
    )
    setQuery(next)
  }, [filters, sortings, page])

  return (
    <div className="space-y-4">
      <p className="max-w-prose text-sm text-f1-foreground-secondary">
        Filters, sorting and the current page all ride in the URL together —
        filter, sort and page through, then reload to restore them. The{" "}
        <strong>Assignee</strong> filter has 60 options; “Select all” exceeds
        the {MAX_URL_FILTER_VALUES}-value cap and is left out of the URL (still
        applied).
      </p>

      <div className="font-mono text-sm text-f1-foreground-secondary">
        URL query: <span data-testid="url-params-query">{query || "—"}</span>
      </div>

      <PaginationExampleComponent
        id={STORAGE_ID}
        currentFilters={initial.filters as FiltersState<PaginationFiltersType>}
        currentSortings={initial.sortings ?? null}
        currentPage={initial.page ?? 1}
        onPaginationChange={(info: PaginationInfo | null) =>
          setPage(info?.type === "pages" ? info.currentPage : 1)
        }
        onStateChange={(state) => {
          setFilters(
            (state.filters ?? {}) as FiltersState<PaginationFiltersType>
          )
          setSortings(state.sortings ?? null)
        }}
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
 * Filters + sorting + pagination all persisted in the URL at once.
 */
export const Default: Story = {
  render: () => <UrlParamsExample />,
}
