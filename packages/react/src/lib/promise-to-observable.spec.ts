import { describe, expect, it } from "vitest"
import { Observable } from "zen-observable-ts"
import { PromiseState, promiseToObservable } from "./promise-to-observable"

// Simple implementation of firstValueFrom since zen-observable-ts doesn't export it
function firstValueFrom<T>(observable: Observable<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const subscription = observable.subscribe({
      next: (value) => {
        resolve(value)
        subscription.unsubscribe()
      },
      error: reject,
    })
  })
}

describe("promiseToObservable", () => {
  it("emits loading state immediately", () => {
    return new Promise<void>((done) => {
      const promise = Promise.resolve(42)
      const observable = promiseToObservable(promise)

      const states: PromiseState<number>[] = []
      const subscription = observable.subscribe({
        next: (state) => {
          states.push(state)
          if (states.length === 1) {
            expect(states[0]).toEqual({
              loading: true,
              error: null,
              data: null,
            })
            subscription.unsubscribe()
            done()
          }
        },
      })
    })
  })

  it("emits success state when promise resolves", async () => {
    const promise = Promise.resolve(42)
    const observable = promiseToObservable(promise)

    const result = await firstValueFrom(observable.filter((state) => !state.loading))

    expect(result).toEqual({
      loading: false,
      error: null,
      data: 42,
    })
  })

  it("emits error state when promise rejects", async () => {
    const error = new Error("Test error")
    const promise = Promise.reject(error)
    const observable = promiseToObservable(promise)

    const result = await firstValueFrom(observable.filter((state) => !state.loading))

    expect(result).toEqual({
      loading: false,
      error,
      data: null,
    })
  })

  it("completes after emitting final state", async () => {
    const promise = Promise.resolve(42)
    const observable = promiseToObservable(promise)

    let completed = false
    const subscription = observable.subscribe({
      complete: () => {
        completed = true
      },
    })

    await promise
    expect(completed).toBe(true)
    subscription.unsubscribe()
  })

  it("handles async operations correctly", async () => {
    const asyncOperation = new Promise<string>((resolve) => {
      setTimeout(() => resolve("done"), 100)
    })

    const observable = promiseToObservable(asyncOperation)
    const states: PromiseState<string>[] = []

    const subscription = observable.subscribe((state) => {
      states.push(state)
    })

    await asyncOperation

    expect(states).toHaveLength(2)
    expect(states[0]).toEqual({
      loading: true,
      error: null,
      data: null,
    })
    expect(states[1]).toEqual({
      loading: false,
      error: null,
      data: "done",
    })

    subscription.unsubscribe()
  })
})
