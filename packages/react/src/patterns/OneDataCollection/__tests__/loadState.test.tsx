import { useMemo } from "react"
import { describe, expect, it, vi } from "vitest"

import { Placeholder } from "@/icons/app"
import {
  act,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"
import { OneDataCollectionLoadStateObserver } from "../internal/LoadStateObserver"
import type { OnLoadDataCallback } from "../types"

type Row = { id: string; name: string }

const columns = [{ id: "name", label: "Name", render: (row: Row) => row.name }]

function deferred<T>() {
  let resolve: (value: T) => void = () => undefined
  let reject: (reason?: unknown) => void = () => undefined
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise
    reject = rejectPromise
  })

  return { promise, reject, resolve }
}

function CollectionHarness({
  dataCycleKey = "test-cycle",
  fetchData,
  onLoadStateChange,
}: {
  dataCycleKey?: string
  fetchData: () => { records: Row[] } | Promise<{ records: Row[] }>
  onLoadStateChange: (event: {
    dataCycleKey: string
    state: "loading" | "ready" | "error"
  }) => void
}) {
  const dataAdapter = useMemo(() => ({ fetchData }), [fetchData])
  const source = useDataCollectionSource<Row>({ dataAdapter }, [dataCycleKey])

  return (
    <OneDataCollectionLoadStateObserver
      dataCycleKey={dataCycleKey}
      onStateChange={onLoadStateChange}
    >
      <OneDataCollection
        source={source}
        visualizations={[{ type: "table", options: { columns } }]}
      />
    </OneDataCollectionLoadStateObserver>
  )
}

function RetainedCallbackHarness({
  callbacksByCycle,
  dataCycleKey,
  onLoadStateChange,
}: {
  callbacksByCycle: Map<string, OnLoadDataCallback<Row, Record<string, never>>>
  dataCycleKey: string
  onLoadStateChange: (event: {
    dataCycleKey: string
    state: "loading" | "ready" | "error"
  }) => void
}) {
  const source = useDataCollectionSource<Row>(
    { dataAdapter: { fetchData: () => ({ records: [] }) } },
    [dataCycleKey]
  )
  const visualizations = useMemo(
    () => [
      {
        type: "custom" as const,
        label: "Captured callbacks",
        icon: Placeholder,
        component: ({
          onLoadData,
        }: {
          onLoadData: OnLoadDataCallback<Row, Record<string, never>>
        }) => {
          callbacksByCycle.set(dataCycleKey, onLoadData)
          return <div>{dataCycleKey}</div>
        },
      },
    ],
    [callbacksByCycle, dataCycleKey]
  )

  return (
    <OneDataCollectionLoadStateObserver
      dataCycleKey={dataCycleKey}
      onStateChange={onLoadStateChange}
    >
      <OneDataCollection source={source} visualizations={visualizations} />
    </OneDataCollectionLoadStateObserver>
  )
}

describe("OneDataCollection load state", () => {
  it("drops a retained completion callback after a newer cycle begins", async () => {
    const callbacksByCycle = new Map<
      string,
      OnLoadDataCallback<Row, Record<string, never>>
    >()
    const onLoadStateChange = vi.fn()

    const { rerender } = render(
      <RetainedCallbackHarness
        callbacksByCycle={callbacksByCycle}
        dataCycleKey="cycle-a"
        onLoadStateChange={onLoadStateChange}
      />
    )
    const cycleACompletion = callbacksByCycle.get("cycle-a")
    expect(cycleACompletion).toBeDefined()

    rerender(
      <RetainedCallbackHarness
        callbacksByCycle={callbacksByCycle}
        dataCycleKey="cycle-b"
        onLoadStateChange={onLoadStateChange}
      />
    )
    expect(callbacksByCycle.get("cycle-b")).toBeDefined()

    act(() =>
      cycleACompletion?.({
        data: [{ id: "1", name: "Ada" }],
        filters: {},
        isInitialLoading: false,
        search: undefined,
        totalItems: 1,
      })
    )

    expect(onLoadStateChange).not.toHaveBeenCalledWith({
      dataCycleKey: "cycle-b",
      state: "ready",
    })

    act(() =>
      callbacksByCycle.get("cycle-b")?.({
        data: [{ id: "2", name: "Grace" }],
        filters: {},
        isInitialLoading: false,
        search: undefined,
        totalItems: 1,
      })
    )

    await waitFor(() =>
      expect(onLoadStateChange).toHaveBeenCalledWith({
        dataCycleKey: "cycle-b",
        state: "ready",
      })
    )
  })

  it("does not commit a superseded cycle when its request settles late", async () => {
    const firstRequest = deferred<{ records: Row[] }>()
    const secondRequest = deferred<{ records: Row[] }>()
    const fetchData = vi
      .fn()
      .mockImplementationOnce(() => firstRequest.promise)
      .mockImplementationOnce(() => secondRequest.promise)
    const onLoadStateChange = vi.fn()

    const { rerender } = render(
      <CollectionHarness
        dataCycleKey="cycle-a"
        fetchData={fetchData}
        onLoadStateChange={onLoadStateChange}
      />
    )
    await waitFor(() => expect(fetchData).toHaveBeenCalledOnce())

    rerender(
      <CollectionHarness
        dataCycleKey="cycle-b"
        fetchData={fetchData}
        onLoadStateChange={onLoadStateChange}
      />
    )
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2))

    await act(async () =>
      firstRequest.resolve({ records: [{ id: "1", name: "Ada" }] })
    )

    expect(screen.queryByText("Ada")).not.toBeInTheDocument()
    expect(onLoadStateChange).not.toHaveBeenCalledWith({
      dataCycleKey: "cycle-b",
      state: "ready",
    })

    await act(async () =>
      secondRequest.resolve({ records: [{ id: "2", name: "Grace" }] })
    )

    await waitFor(() => expect(screen.getByText("Grace")).toBeInTheDocument())
    expect(onLoadStateChange).toHaveBeenCalledWith({
      dataCycleKey: "cycle-b",
      state: "ready",
    })
  })

  it("never reports loading from a commit that already shows synchronous rows", async () => {
    const observations: Array<{ rowVisible: boolean; state: string }> = []

    render(
      <CollectionHarness
        fetchData={() => ({ records: [{ id: "1", name: "Ada" }] })}
        onLoadStateChange={({ state }) =>
          observations.push({
            state,
            rowVisible: screen.queryByText("Ada") !== null,
          })
        }
      />
    )

    await waitFor(() =>
      expect(observations).toContainEqual({
        state: "ready",
        rowVisible: true,
      })
    )
    expect(observations).not.toContainEqual({
      state: "loading",
      rowVisible: true,
    })
  })

  it("reports ready only after fetched content commits", async () => {
    const request = deferred<{ records: Row[] }>()
    const observations: Array<{ rowVisible: boolean; state: string }> = []

    render(
      <CollectionHarness
        fetchData={() => request.promise}
        onLoadStateChange={({ state }) =>
          observations.push({
            state,
            rowVisible: screen.queryByText("Ada") !== null,
          })
        }
      />
    )

    await waitFor(() =>
      expect(observations).toContainEqual({
        state: "loading",
        rowVisible: false,
      })
    )

    await act(async () =>
      request.resolve({ records: [{ id: "1", name: "Ada" }] })
    )

    await waitFor(() =>
      expect(observations).toContainEqual({
        state: "ready",
        rowVisible: true,
      })
    )
  })

  it("reports error after a rejected request commits its error UI", async () => {
    const request = deferred<{ records: Row[] }>()
    const onLoadStateChange = vi.fn()

    render(
      <CollectionHarness
        fetchData={() => request.promise}
        onLoadStateChange={onLoadStateChange}
      />
    )

    await act(async () => request.reject(new Error("Unavailable")))

    await waitFor(() =>
      expect(onLoadStateChange).toHaveBeenLastCalledWith({
        dataCycleKey: "test-cycle",
        state: "error",
      })
    )
  })
})
