import {
  createContext,
  type ReactNode,
  type RefCallback,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

const SCROLL_SETTLE_MS = 250

type PreviewTask = {
  cancelled: boolean
  prepared: boolean
  prepare: () => Promise<unknown>
  mount: () => void
}

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number
    cancelIdleCallback?: (handle: number) => void
  }

export type TranscriptHeavyPreviewStore = ReturnType<
  typeof createTranscriptHeavyPreviewStore
>

export const createTranscriptHeavyPreviewStore = () => {
  const tasks: PreviewTask[] = []
  const visibilityCallbacks = new Map<Element, () => void>()
  let observer: IntersectionObserver | null = null
  let viewport: HTMLElement | null = null
  let ready = false
  let scrolling = false
  let disposed = false
  let running = false
  let settleTimer: number | null = null
  let idleHandle: number | null = null
  let paintFrame: number | null = null

  const cancelScheduledWork = () => {
    if (settleTimer != null) window.clearTimeout(settleTimer)
    settleTimer = null
    if (idleHandle != null) {
      const idleWindow = window as IdleWindow
      if (idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleHandle)
      } else {
        window.clearTimeout(idleHandle)
      }
    }
    idleHandle = null
    if (paintFrame != null) cancelAnimationFrame(paintFrame)
    paintFrame = null
  }

  const schedule = (waitForSettle: boolean) => {
    if (
      disposed ||
      running ||
      !ready ||
      scrolling ||
      tasks.every((task) => task.cancelled)
    ) {
      return
    }
    cancelScheduledWork()

    const requestTurn = () => {
      if (disposed || running || !ready || scrolling) return
      const idleWindow = window as IdleWindow
      const run = () => {
        idleHandle = null
        void runNext()
      }
      idleHandle = idleWindow.requestIdleCallback
        ? idleWindow.requestIdleCallback(run, { timeout: 300 })
        : window.setTimeout(run, 0)
    }

    if (waitForSettle) {
      settleTimer = window.setTimeout(() => {
        settleTimer = null
        requestTurn()
      }, SCROLL_SETTLE_MS)
    } else {
      requestTurn()
    }
  }

  const runNext = async () => {
    const task = tasks.shift()
    if (!task) return
    if (task.cancelled) {
      schedule(false)
      return
    }

    running = true
    if (!task.prepared) {
      try {
        await task.prepare()
      } catch {
        // React.lazy keeps the rejected loader result. Mounting preserves the
        // component's existing error behavior while the queue remains usable.
      }
      task.prepared = true
    }
    running = false

    if (disposed || task.cancelled) {
      schedule(false)
      return
    }
    if (scrolling) {
      tasks.unshift(task)
      return
    }

    task.mount()
    paintFrame = requestAnimationFrame(() => {
      paintFrame = null
      schedule(false)
    })
  }

  const ensureObserver = () => {
    if (observer || disposed || !viewport || visibilityCallbacks.size === 0)
      return
    if (typeof IntersectionObserver === "undefined") {
      const callbacks = [...visibilityCallbacks.values()]
      visibilityCallbacks.clear()
      callbacks.forEach((callback) => callback())
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const callback = visibilityCallbacks.get(entry.target)
          if (!callback) continue
          visibilityCallbacks.delete(entry.target)
          observer?.unobserve(entry.target)
          callback()
        }
      },
      { root: viewport }
    )
    visibilityCallbacks.forEach((_, element) => observer?.observe(element))
  }

  const rebuildObserver = () => {
    observer?.disconnect()
    observer = null
    ensureObserver()
  }

  return {
    setReady(nextReady: boolean) {
      ready = nextReady
      if (ready) schedule(true)
      else cancelScheduledWork()
    },
    setScrolling(nextScrolling: boolean) {
      if (scrolling === nextScrolling) return
      scrolling = nextScrolling
      if (scrolling) cancelScheduledWork()
      else schedule(true)
    },
    setViewport(nextViewport: HTMLElement | null) {
      if (viewport === nextViewport) return
      viewport = nextViewport
      rebuildObserver()
    },
    observe(element: Element, onVisible: () => void) {
      visibilityCallbacks.set(element, onVisible)
      ensureObserver()
      observer?.observe(element)
      return () => {
        visibilityCallbacks.delete(element)
        observer?.unobserve(element)
      }
    },
    enqueue(prepare: () => Promise<unknown>, mount: () => void) {
      const task: PreviewTask = {
        cancelled: false,
        prepared: false,
        prepare,
        mount,
      }
      tasks.push(task)
      schedule(true)
      return () => {
        task.cancelled = true
      }
    },
    dispose() {
      disposed = true
      cancelScheduledWork()
      observer?.disconnect()
      observer = null
      visibilityCallbacks.clear()
      tasks.splice(0).forEach((task) => {
        task.cancelled = true
      })
    },
  }
}

const TranscriptHeavyPreviewContext =
  createContext<TranscriptHeavyPreviewStore | null>(null)

export const TranscriptHeavyPreviewProvider = ({
  children,
  store,
}: {
  children: ReactNode
  store: TranscriptHeavyPreviewStore
}): ReactNode => (
  <TranscriptHeavyPreviewContext.Provider value={store}>
    {children}
  </TranscriptHeavyPreviewContext.Provider>
)

const noPreparation = (): Promise<void> => Promise.resolve()

/** Outside a transcript there is no store, so previews keep mounting eagerly. */
export const useTranscriptHeavyPreview = (
  prepare: () => Promise<unknown> = noPreparation
): { ref: RefCallback<HTMLElement>; shouldMount: boolean } => {
  const store = useContext(TranscriptHeavyPreviewContext)
  const [shouldMount, setShouldMount] = useState(store == null)
  const visibilityCleanupRef = useRef<(() => void) | null>(null)
  const queueCleanupRef = useRef<(() => void) | null>(null)
  const elementRef = useRef<HTMLElement | null>(null)
  const queuedRef = useRef(false)
  const mountedRef = useRef(shouldMount)
  mountedRef.current = shouldMount

  const stopPendingWork = useCallback(() => {
    visibilityCleanupRef.current?.()
    visibilityCleanupRef.current = null
    queueCleanupRef.current?.()
    queueCleanupRef.current = null
    if (!mountedRef.current) queuedRef.current = false
  }, [])

  const register = useCallback(() => {
    const element = elementRef.current
    if (!store || !element || queuedRef.current || mountedRef.current) return

    visibilityCleanupRef.current = store.observe(element, () => {
      if (queuedRef.current) return
      queuedRef.current = true
      queueCleanupRef.current = store.enqueue(prepare, () => {
        mountedRef.current = true
        setShouldMount(true)
      })
    })
  }, [prepare, store])

  const ref = useCallback<RefCallback<HTMLElement>>(
    (element) => {
      stopPendingWork()
      elementRef.current = element
      register()
    },
    [register, stopPendingWork]
  )

  useEffect(() => {
    register()
    return stopPendingWork
  }, [register, stopPendingWork])

  return { ref, shouldMount }
}
