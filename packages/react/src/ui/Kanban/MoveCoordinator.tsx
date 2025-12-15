import { createContext, useCallback, useContext, useMemo, useRef } from "react"

type MoveExecutor<TResult> = () => Promise<TResult>

type InFlightRecord<TResult> = {
  promise: Promise<TResult>
}

type MoveCoordinatorApi = {
  getMoveKey: (sourceId: string, initialLaneId: string) => string
  perform: <TResult>(key: string, executor?: MoveExecutor<TResult>) => Promise<TResult>
  leave: <TResult>(key: string) => Promise<TResult>
  insert: <TResult>(key: string, executor: MoveExecutor<TResult>) => Promise<TResult>
}

const MoveCoordinatorContext = createContext<MoveCoordinatorApi | null>(null)

export function useMoveCoordinator(): MoveCoordinatorApi {
  const ctx = useContext(MoveCoordinatorContext)
  if (!ctx) throw new Error("useMoveCoordinator must be used within MoveCoordinatorProvider")
  return ctx
}

export function MoveCoordinatorProvider({ children }: { children: React.ReactNode }) {
  const inFlightRef = useRef<Map<string, InFlightRecord<unknown>>>(new Map())

  const getMoveKey = useCallback((sourceId: string, initialLaneId: string) => {
    return `${initialLaneId}::${sourceId}`
  }, [])

  const perform = useCallback(
    async <TResult,>(key: string, executor?: MoveExecutor<TResult>): Promise<TResult> => {
      const existing = inFlightRef.current.get(key) as InFlightRecord<TResult> | undefined
      if (existing) {
        return existing.promise
      }

      if (!executor) {
        // No executor and not in flight: create a deferred that waits until an executor arrives.
        // Practically, lanes should call perform() nearly simultaneously; this path protects from races.
        return new Promise<TResult>((resolve, reject) => {
          const waitKey = key
          const check = () => {
            const inflight = inFlightRef.current.get(waitKey) as InFlightRecord<TResult> | undefined
            if (inflight) {
              inflight.promise.then(resolve, reject)
              return true
            }
            return false
          }
          // Try a short number of microtasks before giving up
          let attempts = 0
          const tick = () => {
            if (check()) return
            attempts += 1
            if (attempts > 10) {
              reject(new Error("No executor available for move key"))
              return
            }
            queueMicrotask(tick)
          }
          queueMicrotask(tick)
        })
      }

      const run = (async () => executor())()
      inFlightRef.current.set(key, {
        promise: run as unknown as Promise<unknown>,
      })
      try {
        const result = await run
        return result
      } finally {
        inFlightRef.current.delete(key)
      }
    },
    []
  )

  const value = useMemo<MoveCoordinatorApi>(
    () => ({
      getMoveKey,
      perform,
      leave: (key) => perform(key),
      insert: (key, executor) => perform(key, executor),
    }),
    [getMoveKey, perform]
  )

  return <MoveCoordinatorContext.Provider value={value}>{children}</MoveCoordinatorContext.Provider>
}
