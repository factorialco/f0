import { beforeEach, describe, expect, it, vi } from "vitest"

import { act, waitFor, zeroRender as render } from "@/testing/test-utils"

import type { DashboardCollectionItem } from "../types"

import { CollectionItem } from "../components/CollectionItem/CollectionItem"

const useDataCollectionSource = vi.hoisted(() =>
  vi.fn(() => ({ data: [], total: 0 }))
)

vi.mock("@/patterns/OneDataCollection/hooks/useDataCollectionSource", () => ({
  useDataCollectionSource,
}))

const loadStateTrackers = vi.hoisted(() => ({
  byCycle: new Map<string, (state: "loading" | "ready" | "error") => void>(),
  currentCycle: undefined as string | undefined,
}))

vi.mock("@/patterns/OneDataCollection", () => ({
  OneDataCollection: () => <div>Collection</div>,
}))

vi.mock("@/patterns/OneDataCollection/internal/LoadStateObserver", () => ({
  OneDataCollectionLoadStateObserver: ({
    children,
    dataCycleKey,
    onStateChange,
  }: {
    children: React.ReactNode
    dataCycleKey: string
    onStateChange: (event: {
      dataCycleKey: string
      state: "loading" | "ready" | "error"
    }) => void
  }) => {
    loadStateTrackers.currentCycle = dataCycleKey
    loadStateTrackers.byCycle.set(dataCycleKey, (state) => {
      if (loadStateTrackers.currentCycle !== dataCycleKey) return
      onStateChange({ dataCycleKey, state })
    })
    return children
  },
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
  beforeEach(() => {
    loadStateTrackers.byCycle.clear()
    loadStateTrackers.currentCycle = undefined
  })

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

  it("reports collection render states with monotonic request IDs", async () => {
    const onItemRenderStateChange = vi.fn()
    const createSource = vi.fn(() => ({ id: "source" }))

    const { rerender } = render(
      <CollectionItem
        item={item(createSource) as never}
        filters={{}}
        renderCycleKey="view-1"
        onItemRenderStateChange={onItemRenderStateChange}
      />
    )

    act(() =>
      loadStateTrackers.byCycle.get('["{}","{}","view-1"]')?.("loading")
    )

    await waitFor(() =>
      expect(onItemRenderStateChange).toHaveBeenCalledWith({
        itemId: "employees",
        renderCycleKey: "view-1",
        requestId: 1,
        state: "loading",
      })
    )

    act(() => loadStateTrackers.byCycle.get('["{}","{}","view-1"]')?.("ready"))

    await waitFor(() =>
      expect(onItemRenderStateChange).toHaveBeenCalledWith({
        itemId: "employees",
        renderCycleKey: "view-1",
        requestId: 1,
        state: "ready",
      })
    )

    rerender(
      <CollectionItem
        item={item(createSource) as never}
        filters={{}}
        renderCycleKey="view-2"
        onItemRenderStateChange={onItemRenderStateChange}
      />
    )

    const callCountBeforeStaleState = onItemRenderStateChange.mock.calls.length
    act(() => loadStateTrackers.byCycle.get('["{}","{}","view-1"]')?.("error"))
    expect(onItemRenderStateChange).toHaveBeenCalledTimes(
      callCountBeforeStaleState
    )

    act(() => loadStateTrackers.byCycle.get('["{}","{}","view-2"]')?.("ready"))

    await waitFor(() =>
      expect(onItemRenderStateChange).toHaveBeenCalledWith({
        itemId: "employees",
        renderCycleKey: "view-2",
        requestId: 2,
        state: "ready",
      })
    )
    expect(onItemRenderStateChange).not.toHaveBeenCalledWith(
      expect.objectContaining({
        renderCycleKey: "view-2",
        state: "loading",
      })
    )

    act(() =>
      loadStateTrackers.byCycle.get('["{}","{}","view-2"]')?.("loading")
    )
    act(() => loadStateTrackers.byCycle.get('["{}","{}","view-2"]')?.("error"))

    await waitFor(() =>
      expect(onItemRenderStateChange).toHaveBeenCalledWith({
        itemId: "employees",
        renderCycleKey: "view-2",
        requestId: 3,
        state: "error",
      })
    )
  })
})
