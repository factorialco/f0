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

vi.mock("@/patterns/OneDataCollection", () => ({
  OneDataCollection: () => <div>Collection</div>,
}))

vi.mock("../hooks/useCollectionDownloadActions", () => ({
  useCollectionDownloadActions: () => [],
}))

const item = (
  createSource: DashboardCollectionItem["createSource"]
): DashboardCollectionItem => ({
  id: "employees",
  type: "collection",
  title: "Employees",
  visualizations: [],
  createSource,
})

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

  it("recreates the source when the dataKey changes", () => {
    const createSource = vi.fn(() => ({ id: "source" }))

    const { rerender } = render(
      <CollectionItem
        item={item(createSource) as never}
        filters={{}}
        dataKey="none"
      />
    )

    expect(createSource).toHaveBeenCalledOnce()

    rerender(
      <CollectionItem
        item={item(createSource) as never}
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
