import { Observable } from "zen-observable-ts"

import { PromiseState } from "@/lib/promise-to-observable"

import { ItemNeighborsResponse } from "../types/fetch.typings"

export type ItemNeighborsResult<R> =
  | ItemNeighborsResponse<R>
  | Promise<ItemNeighborsResponse<R>>
  | Observable<PromiseState<ItemNeighborsResponse<R>>>

/**
 * Normalizes the three `fetchItemNeighbors` return channels (sync value,
 * Promise, Observable of PromiseState) into a single one-shot Promise.
 *
 * Observables are consumed one-shot: the first emission carrying `data`
 * resolves, the first emission carrying `error` rejects, and the
 * subscription is closed either way — live updates are intentionally out of
 * scope for neighbour resolution.
 *
 * `cancel()` unsubscribes/abandons the request: the returned promise then
 * never settles, so a cancelled request can never reach consumer state.
 */
export function resolveItemNeighbors<R>(result: ItemNeighborsResult<R>): {
  promise: Promise<ItemNeighborsResponse<R>>
  cancel: () => void
} {
  if (result instanceof Observable) {
    let cancelled = false
    let subscription: ZenObservable.Subscription | null = null
    const promise = new Promise<ItemNeighborsResponse<R>>((resolve, reject) => {
      subscription = result.subscribe({
        next: (state) => {
          if (cancelled || state.loading) return
          if (state.error) {
            subscription?.unsubscribe()
            reject(state.error)
          } else if (state.data !== undefined && state.data !== null) {
            subscription?.unsubscribe()
            resolve(state.data)
          }
        },
        error: (error) => {
          if (!cancelled) reject(error)
        },
      })
    })
    return {
      promise,
      cancel: () => {
        cancelled = true
        subscription?.unsubscribe()
      },
    }
  }

  let cancelled = false
  const promise = new Promise<ItemNeighborsResponse<R>>((resolve, reject) => {
    Promise.resolve(result).then(
      (response) => {
        if (!cancelled) resolve(response)
      },
      (error) => {
        if (!cancelled) reject(error)
      }
    )
  })
  return {
    promise,
    cancel: () => {
      cancelled = true
    },
  }
}
