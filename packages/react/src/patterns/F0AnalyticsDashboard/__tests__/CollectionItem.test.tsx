import { describe, expect, it, vi } from "vitest"

import { act, zeroRender as render } from "@/testing/test-utils"

import type { DashboardCollectionItem } from "../types"

import { CollectionItem } from "../components/CollectionItem/CollectionItem"

const useDataCollectionSource = vi.hoisted(() =>
  vi.fn(() => ({ data: [], total: 0 }))
)

vi.mock("@/patterns/OneDataCollection/hooks/useDataCollectionSource", () => ({
  useDataCollectionSource,
}))

const rendered = vi.hoisted(() => ({
  visualizations: undefined as ReadonlyArray<unknown> | undefined,
}))

vi.mock("@/patterns/OneDataCollection", () => ({
  OneDataCollection: ({
    visualizations,
  }: {
    visualizations: ReadonlyArray<unknown>
  }) => {
    rendered.visualizations = visualizations
    return <div>Collection</div>
  },
}))

vi.mock("../hooks/useCollectionDownloadActions", () => ({
  useCollectionDownloadActions: () => [],
}))

const item = (
  createSource: DashboardCollectionItem["createSource"],
  visualizations: DashboardCollectionItem["visualizations"] = []
): DashboardCollectionItem => ({
  id: "employees",
  type: "collection",
  title: "Employees",
  visualizations,
  createSource,
})

const tableViz = [
  { type: "table", options: { columns: [{ label: "Name", id: "name" }] } },
]

/** Runs the source's own fetch, which is what carries `rowTrends` back. */
async function fetchOnce() {
  const definition = useDataCollectionSource.mock.lastCall?.[0] as {
    dataAdapter: { fetchData: (options: unknown) => Promise<unknown> }
  }
  await act(async () => {
    await definition.dataAdapter.fetchData({})
  })
}

function changeColumnOf() {
  const [viz] = rendered.visualizations as [
    {
      options: {
        columns: {
          id?: string
          label: string
          render: (row: Record<string, unknown>) => unknown
        }[]
      }
    },
  ]
  return viz.options.columns.at(-1)!
}

describe("CollectionItem", () => {
  it("recreates the source with the latest item closure when widget filters change", () => {
    const firstDefinition = { id: "unfiltered" }
    const secondDefinition = { id: "filtered" }
    const firstCreateSource = vi.fn(() => firstDefinition)
    const secondCreateSource = vi.fn(() => secondDefinition)
    const onChange = vi.fn()

    const { rerender } = render(
      <CollectionItem
        item={item(firstCreateSource) as never}
        filters={{}}
        itemFilters={{
          filters: { employee: { type: "search", label: "Employee" } },
          value: {},
          onChange,
        }}
      />
    )

    expect(firstCreateSource).toHaveBeenCalledOnce()
    expect(useDataCollectionSource).toHaveBeenLastCalledWith(firstDefinition, [
      "{}",
      "{}",
      undefined,
    ])

    rerender(
      <CollectionItem
        item={item(secondCreateSource) as never}
        filters={{}}
        itemFilters={{
          filters: { employee: { type: "search", label: "Employee" } },
          value: { employee: "Ada" },
          onChange,
        }}
      />
    )

    expect(secondCreateSource).toHaveBeenCalledOnce()
    expect(useDataCollectionSource).toHaveBeenLastCalledWith(secondDefinition, [
      "{}",
      '{"employee":"Ada"}',
      undefined,
    ])
  })

  it("appends a Change column for the rowTrends its own fetch returns", async () => {
    const records = [{ id: "1", name: "Ada" }]
    const collection = item(
      () => ({
        dataAdapter: {
          fetchData: () =>
            Promise.resolve({
              records,
              rowTrends: { "1": { direction: "up", label: "+2" } },
            }),
        },
      }),
      tableViz
    )

    render(<CollectionItem item={collection} filters={{}} />)
    await fetchOnce()

    const column = changeColumnOf()
    expect(column.label).toBe("Change")
    expect(column.render(records[0])).toEqual({
      type: "delta",
      value: { label: "+2", deltaStatus: "positive" },
    })
    expect(column.render({ id: "unknown" })).toBeUndefined()
  })

  it("leaves the visualizations untouched when the fetch carries no rowTrends", async () => {
    const collection = item(
      () => ({
        dataAdapter: { fetchData: () => Promise.resolve({ records: [] }) },
      }),
      tableViz
    )

    render(<CollectionItem item={collection} filters={{}} />)
    await fetchOnce()

    expect(rendered.visualizations).toBe(collection.visualizations)
  })

  it("re-creates its source on a dataKey change instead of refetching in place", () => {
    const createSource = vi.fn(() => ({ id: "source" }))
    const collection = item(createSource)

    const { rerender } = render(
      <CollectionItem item={collection} filters={{}} dataKey="none" />
    )

    expect(createSource).toHaveBeenCalledOnce()

    rerender(
      <CollectionItem
        item={collection}
        filters={{}}
        dataKey="previous_period"
      />
    )

    expect(createSource).toHaveBeenCalledTimes(2)
    expect(useDataCollectionSource).toHaveBeenLastCalledWith({ id: "source" }, [
      "{}",
      "{}",
      "previous_period",
    ])
  })
})
