import { act, renderHook } from "@testing-library/react"
import { ReactNode } from "react"
import { Observable } from "zen-observable-ts"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { RecordType } from "@/hooks/datasource"
import { ChildrenResponse } from "@/hooks/datasource/types/nested.typings"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { PromiseState } from "@/lib/promise-to-observable"

import { NestedDataProvider } from "../../providers/NestedProvider"
import { useLoadChildren } from "../useLoadChildren"

type Row = RecordType & { id: string }

const row = (id: string): Row => ({ id })

const PARENT = row("parent")

/**
 * A source whose children arrive as one long-lived observable per requested
 * page, mirroring how a consumer keeps pushing updates for rows already on
 * screen. `emit(page, ...)` pushes a new payload into a specific page's
 * subscription, which is the case the flat-accumulator implementation could not
 * express.
 */
const makeSource = (perPage: number) => {
  const subscribers = new Map<
    number,
    ZenObservable.SubscriptionObserver<PromiseState<ChildrenResponse<Row>>>
  >()
  const teardowns: number[] = []
  let all: Row[] = []

  const payload = (page: number): ChildrenResponse<Row> => {
    const start = (page - 1) * perPage
    return {
      records: all.slice(start, start + perPage),
      type: "basic",
      paginationInfo: {
        total: all.length,
        perPage,
        currentPage: page,
        pagesCount: Math.max(1, Math.ceil(all.length / perPage)),
        hasMore: start + perPage < all.length,
      },
    }
  }

  const fetchChildren = vi.fn(
    ({ pagination }: { pagination?: { currentPage: number } }) => {
      const page = (pagination?.currentPage ?? 0) + 1

      return new Observable<PromiseState<ChildrenResponse<Row>>>(
        (subscriber) => {
          subscribers.set(page, subscriber)
          subscriber.next({
            loading: false,
            error: undefined,
            data: payload(page),
          })
          return () => {
            teardowns.push(page)
            subscribers.delete(page)
          }
        }
      )
    }
  )

  return {
    fetchChildren,
    teardowns,
    livePages: () => [...subscribers.keys()].sort((a, b) => a - b),
    setChildren: (next: Row[]) => {
      all = next
    },
    /** Re-emit a page from the CURRENT children, as a realtime sync would. */
    emit: (page: number) =>
      subscribers
        .get(page)
        ?.next({ loading: false, error: undefined, data: payload(page) }),
    source: (filters: object, sortings: object) =>
      ({
        fetchChildren,
        currentFilters: filters,
        currentSortings: sortings,
        currentNavigationFilters: {},
      }) as unknown as DataCollectionSource<
        Row,
        never,
        never,
        never,
        never,
        never,
        never
      >,
  }
}

const wrapper = ({ children }: { children: ReactNode }) => (
  <NestedDataProvider>{children}</NestedDataProvider>
)

const renderLoadChildren = (
  source: DataCollectionSource<Row, never, never, never, never, never, never>
) =>
  renderHook(
    ({ source: currentSource }) =>
      useLoadChildren({
        rowId: "row-0",
        item: PARENT,
        source: currentSource,
        onClearFetchedData: () => {},
      }),
    { initialProps: { source }, wrapper }
  )

describe("useLoadChildren", () => {
  let fake: ReturnType<typeof makeSource>

  beforeEach(() => {
    fake = makeSource(2)
    fake.setChildren([row("a"), row("b"), row("c"), row("d"), row("e")])
  })

  const ids = (children: Row[]) => children.map((child) => child.id)

  it("appends each page and stops when the last one lands", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    await act(async () => void result.current.loadChildren())
    expect(ids(result.current.children)).toEqual(["a", "b"])
    expect(result.current.paginationInfo?.hasMore).toBe(true)

    await act(async () => void result.current.loadChildren())
    expect(ids(result.current.children)).toEqual(["a", "b", "c", "d"])

    await act(async () => void result.current.loadChildren())
    expect(ids(result.current.children)).toEqual(["a", "b", "c", "d", "e"])
    expect(result.current.paginationInfo?.hasMore).toBe(false)
  })

  it("keeps every loaded page subscribed", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())

    expect(fake.livePages()).toEqual([1, 2])
    expect(fake.teardowns).toEqual([])
  })

  it("applies an update to a page loaded before the current one", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())

    fake.setChildren([row("a2"), row("b"), row("c"), row("d"), row("e")])
    await act(async () => void fake.emit(1))

    expect(ids(result.current.children)).toEqual(["a2", "b", "c", "d"])
  })

  it("does not duplicate a row that shifts across the page boundary", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())
    expect(ids(result.current.children)).toEqual(["a", "b", "c", "d"])

    // A team inserted at the top pushes "b" from page 1 into page 2.
    fake.setChildren([
      row("new"),
      row("a"),
      row("b"),
      row("c"),
      row("d"),
      row("e"),
    ])
    await act(async () => void fake.emit(1))
    await act(async () => void fake.emit(2))

    expect(ids(result.current.children)).toEqual(["new", "a", "b", "c"])
  })

  it("drops rows removed from an earlier page", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())

    fake.setChildren([row("a"), row("b")])
    await act(async () => void fake.emit(1))
    await act(async () => void fake.emit(2))

    expect(ids(result.current.children)).toEqual(["a", "b"])
  })

  it("lets the frontier page own the pagination state", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())
    expect(result.current.paginationInfo?.currentPage).toBe(3)
    expect(result.current.paginationInfo?.hasMore).toBe(false)

    // Page 1 re-emitting must not rewind the cursor and re-offer "See more".
    await act(async () => void fake.emit(1))
    expect(result.current.paginationInfo?.currentPage).toBe(3)
    expect(result.current.paginationInfo?.hasMore).toBe(false)
  })

  it("unsubscribes every page and starts over when the filters change", async () => {
    const source = fake.source({}, {})
    const { result, rerender } = renderLoadChildren(source)

    await act(async () => void result.current.loadChildren())
    await act(async () => void result.current.loadChildren())

    await act(async () =>
      rerender({ source: fake.source({ team: ["a"] }, {}) })
    )

    expect(result.current.children).toEqual([])
    expect(result.current.paginationInfo).toBeUndefined()
    expect(fake.livePages()).toEqual([])
    expect(fake.teardowns.sort()).toEqual([1, 2])

    await act(async () => void result.current.loadChildren())
    expect(ids(result.current.children)).toEqual(["a", "b"])
  })

  it("supersedes a duplicate request for the same page", async () => {
    const { result } = renderLoadChildren(fake.source({}, {}))

    // A row opened by the default policy asks twice in the same tick: the
    // chevron handler and the effect that covers rows opened without one.
    await act(async () => {
      result.current.loadChildren()
      result.current.loadChildren()
    })

    expect(fake.fetchChildren).toHaveBeenCalledTimes(2)
    expect(ids(result.current.children)).toEqual(["a", "b"])
    expect(fake.livePages()).toEqual([1])
    expect(fake.teardowns).toEqual([1])
  })
})
