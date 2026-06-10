import { describe, expect, it, vi } from "vitest"
import { Observable } from "zen-observable-ts"

import { PromiseState } from "@/lib/promise-to-observable"

import { ItemNeighborsResponse } from "../../types/fetch.typings"
import { resolveItemNeighbors } from "../resolveItemNeighbors"

type TestRecord = { id: number; name: string }

const response: ItemNeighborsResponse<TestRecord> = {
  previous: { id: 1, name: "One" },
  next: { id: 3, name: "Three" },
  position: 2,
  total: 10,
}

describe("resolveItemNeighbors", () => {
  it("resolves a synchronous response", async () => {
    const { promise } = resolveItemNeighbors<TestRecord>(response)
    await expect(promise).resolves.toEqual(response)
  })

  it("resolves a promise response", async () => {
    const { promise } = resolveItemNeighbors<TestRecord>(
      Promise.resolve(response)
    )
    await expect(promise).resolves.toEqual(response)
  })

  it("rejects a rejecting promise", async () => {
    const error = new Error("boom")
    const { promise } = resolveItemNeighbors<TestRecord>(Promise.reject(error))
    await expect(promise).rejects.toBe(error)
  })

  it("resolves on the first data emission of an observable and unsubscribes", async () => {
    const unsubscribe = vi.fn()
    const observable = new Observable<
      PromiseState<ItemNeighborsResponse<TestRecord>>
    >((subscriber) => {
      subscriber.next({ loading: true })
      setTimeout(() => {
        subscriber.next({ loading: false, data: response })
        subscriber.next({
          loading: false,
          data: { ...response, position: 99 },
        })
      }, 0)
      return unsubscribe
    })

    const { promise } = resolveItemNeighbors<TestRecord>(observable)
    await expect(promise).resolves.toEqual(response)
    expect(unsubscribe).toHaveBeenCalled()
  })

  it("rejects on an error emission of an observable", async () => {
    const error = new Error("fetch failed")
    const observable = new Observable<
      PromiseState<ItemNeighborsResponse<TestRecord>>
    >((subscriber) => {
      subscriber.next({ loading: true })
      setTimeout(() => subscriber.next({ loading: false, error }), 0)
    })

    const { promise } = resolveItemNeighbors<TestRecord>(observable)
    await expect(promise).rejects.toBe(error)
  })

  it("cancel() prevents a pending promise from settling", async () => {
    let resolveFetch: (value: ItemNeighborsResponse<TestRecord>) => void
    const pending = new Promise<ItemNeighborsResponse<TestRecord>>(
      (resolve) => {
        resolveFetch = resolve
      }
    )

    const { promise, cancel } = resolveItemNeighbors<TestRecord>(pending)
    const settled = vi.fn()
    promise.then(settled, settled)

    cancel()
    resolveFetch!(response)
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(settled).not.toHaveBeenCalled()
  })

  it("cancel() unsubscribes from an observable", () => {
    const unsubscribe = vi.fn()
    const observable = new Observable<
      PromiseState<ItemNeighborsResponse<TestRecord>>
    >(() => unsubscribe)

    const { cancel } = resolveItemNeighbors<TestRecord>(observable)
    cancel()
    expect(unsubscribe).toHaveBeenCalled()
  })
})
