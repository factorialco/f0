import { Observable } from "zen-observable-ts"

export interface PromiseState<T> {
  loading: boolean
  error?: Error | null
  data?: T | null
  cached?: boolean
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
