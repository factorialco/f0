import { Observable } from "zen-observable-ts"

export interface PromiseState<T> {
  loading: boolean
  error?: Error | null
  data?: T | null
}

/**
 * Duck-typed observable check. `instanceof Observable` breaks across package
 * boundaries — e.g. an Apollo observable built from the consumer app's copy of
 * zen-observable has a different class identity than the one bundled into f0 —
 * so detection follows `useData`'s convention: anything with a `subscribe`
 * member is treated as an observable.
 */
export function isObservableLike<T>(
  value: unknown
): value is Observable<PromiseState<T>> {
  return typeof value === "object" && value !== null && "subscribe" in value
}

/**
 * Duck-typed promise check, for the same cross-package reason as
 * `isObservableLike`. Check observables first: an object could in theory
 * carry both members, and f0's fetch channels treat `subscribe` as the
 * stronger signal.
 */
export function isPromiseLike<T>(value: unknown): value is Promise<T> {
  return typeof value === "object" && value !== null && "then" in value
}

export function promiseToObservable<T>(
  promise: Promise<T>
): Observable<PromiseState<T>> {
  return new Observable((observer) => {
    // Initial loading state
    observer.next({
      loading: true,
      error: null,
      data: null,
    })

    promise
      .then((data) => {
        observer.next({
          loading: false,
          error: null,
          data,
        })
        observer.complete()
      })
      .catch((error) => {
        observer.next({
          loading: false,
          error,
          data: null,
        })
        observer.complete()
      })

    // Cleanup function
    return () => {
      // No cleanup needed for promises
    }
  })
}
