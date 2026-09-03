import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

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
  visualizations: DashboardCollectionItem["visualizations"] = [],
  rowTrends?: DashboardCollectionItem["rowTrends"]
): DashboardCollectionItem => ({
  id: "employees",
  type: "collection",
  title: "Employees",
  visualizations,
  createSource,
  rowTrends,
})

const tableViz = [
  { type: "table", options: { columns: [{ label: "Name", id: "name" }] } },
]

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

  it("appends a Change column for the rowTrends the item carries", () => {
    const collection = item(() => ({ id: "source" }), tableViz, {
      "1": { direction: "up", label: "+2" },
    })

    render(<CollectionItem item={collection} filters={{}} />)

    const column = changeColumnOf()
    expect(column.label).toBe("Change")
    expect(column.render({ id: "1", name: "Ada" })).toEqual({
      type: "delta",
      value: { label: "+2", deltaStatus: "positive" },
    })
    expect(column.render({ id: "unknown" })).toBeUndefined()
  })

  it("leaves the visualizations untouched when the item carries no rowTrends", () => {
    const collection = item(() => ({ id: "source" }), tableViz)

    render(<CollectionItem item={collection} filters={{}} />)

    expect(rendered.visualizations).toBe(collection.visualizations)
  })

  it("keys trends by the source's idProvider, else by the record id", () => {
    const trends = { "emp-7": { direction: "up" as const, label: "+2" } }
    const withProvider = item(
      () => ({ idProvider: (row: { code: number }) => `emp-${row.code}` }),
      tableViz,
      trends
    )

    render(<CollectionItem item={withProvider} filters={{}} />)
    expect(changeColumnOf().render({ code: 7 })).toEqual({
      type: "delta",
      value: { label: "+2", deltaStatus: "positive" },
    })

    // No idProvider: the same lookup the datasource itself falls back to.
    const withoutProvider = item(() => ({ id: "source" }), tableViz, trends)

    render(<CollectionItem item={withoutProvider} filters={{}} />)
    expect(changeColumnOf().render({ code: 7 })).toBeUndefined()
    expect(changeColumnOf().render({ id: "emp-7" })).toEqual({
      type: "delta",
      value: { label: "+2", deltaStatus: "positive" },
    })
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
