import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

export type OneDataCollectionLoadState = "loading" | "ready" | "error"

export interface OneDataCollectionLoadStateChange {
  dataCycleKey: string
  state: OneDataCollectionLoadState
}

export interface OneDataCollectionLoadStateTracker {
  dataCycleKey: string
  isActive: () => boolean
  notify: (state: OneDataCollectionLoadState) => void
}

const LoadStateObserverContext = createContext<
  OneDataCollectionLoadStateTracker | undefined
>(undefined)

export function OneDataCollectionLoadStateObserver({
  children,
  dataCycleKey,
  onStateChange,
}: {
  children: ReactNode
  dataCycleKey: string
  onStateChange: (event: OneDataCollectionLoadStateChange) => void
}) {
  const onStateChangeRef = useRef(onStateChange)
  onStateChangeRef.current = onStateChange
  const currentDataCycleKeyRef = useRef(dataCycleKey)
  currentDataCycleKeyRef.current = dataCycleKey
  const tracker = useMemo<OneDataCollectionLoadStateTracker>(
    () => ({
      dataCycleKey,
      isActive: () => currentDataCycleKeyRef.current === dataCycleKey,
      notify: (state) => {
        if (currentDataCycleKeyRef.current !== dataCycleKey) return
        onStateChangeRef.current({ dataCycleKey, state })
      },
    }),
    [dataCycleKey]
  )

  return (
    <LoadStateObserverContext.Provider value={tracker}>
      {children}
    </LoadStateObserverContext.Provider>
  )
}

export function useOneDataCollectionLoadStateObserver() {
  return useContext(LoadStateObserverContext)
}

export function useCommittedOneDataCollectionLoadState({
  isLoading,
  observer,
}: {
  isLoading: boolean
  observer: OneDataCollectionLoadStateTracker | undefined
}) {
  const [outcome, setOutcome] = useState<{
    observer: OneDataCollectionLoadStateTracker
    revision: number
    state: "ready" | "error"
  }>()

  const commitLoadResult = (state: "ready" | "error") => {
    if (!observer) return true
    if (!observer.isActive()) return false

    setOutcome((current) => ({
      observer,
      revision: (current?.revision ?? 0) + 1,
      state,
    }))
    return true
  }

  const committedState = isLoading ? "loading" : outcome?.state

  useEffect(
    function notifyCommittedLoadState() {
      if (committedState === "loading") {
        observer?.notify("loading")
        return
      }

      if (committedState) {
        outcome?.observer.notify(committedState)
      }
    },
    [committedState, observer, outcome?.revision]
  )

  return { commitLoadResult }
}
