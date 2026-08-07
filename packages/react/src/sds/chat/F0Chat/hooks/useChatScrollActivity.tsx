import {
  createContext,
  type ReactNode,
  useContext,
  useSyncExternalStore,
} from "react"

type QueuedMount = {
  id: number
  mount: () => void
}

type ScheduledIdleWork =
  | { kind: "idle"; id: number }
  | { kind: "timeout"; id: number }

export type ChatScrollActivityStore = {
  getSnapshot: () => boolean
  subscribe: (listener: () => void) => () => void
  setScrolling: (scrolling: boolean) => void
  enqueueMount: (mount: () => void) => () => void
}

const scheduleIdleWork = (callback: () => void): ScheduledIdleWork => {
  if (typeof window.requestIdleCallback === "function") {
    return {
      kind: "idle",
      id: window.requestIdleCallback(callback, { timeout: 250 }),
    }
  }

  return { kind: "timeout", id: window.setTimeout(callback, 0) }
}

const cancelIdleWork = (work: ScheduledIdleWork) => {
  if (work.kind === "idle") {
    window.cancelIdleCallback(work.id)
  } else {
    window.clearTimeout(work.id)
  }
}

/**
 * External scroll store kept outside the transcript render tree. Text rows do
 * not subscribe to it, while heavyweight previews can pause their first mount
 * without invalidating every memoized Virtuoso item.
 */
export const createChatScrollActivityStore = (): ChatScrollActivityStore => {
  let scrolling = false
  let nextId = 0
  let scheduledIdleWork: ScheduledIdleWork | null = null
  let nextFrame: number | null = null
  const listeners = new Set<() => void>()
  const queue: QueuedMount[] = []

  const cancelSchedule = () => {
    if (scheduledIdleWork) cancelIdleWork(scheduledIdleWork)
    if (nextFrame !== null) cancelAnimationFrame(nextFrame)
    scheduledIdleWork = null
    nextFrame = null
  }

  const scheduleNext = () => {
    if (scrolling || scheduledIdleWork || nextFrame !== null || !queue.length) {
      return
    }

    scheduledIdleWork = scheduleIdleWork(() => {
      scheduledIdleWork = null
      if (scrolling) return

      const next = queue.shift()
      next?.mount()

      // Let the browser paint between heavyweight mounts. Starting every map,
      // parser and media player in the same idle deadline still creates a long
      // task immediately after the gesture ends.
      if (queue.length > 0) {
        nextFrame = requestAnimationFrame(() => {
          nextFrame = null
          scheduleNext()
        })
      }
    })
  }

  return {
    getSnapshot: () => scrolling,
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    setScrolling: (nextScrolling) => {
      if (scrolling === nextScrolling) return
      scrolling = nextScrolling
      if (scrolling) cancelSchedule()
      listeners.forEach((listener) => listener())
      if (!scrolling) scheduleNext()
    },
    enqueueMount: (mount) => {
      const item = { id: nextId++, mount }
      queue.push(item)
      scheduleNext()

      return () => {
        const index = queue.findIndex(({ id }) => id === item.id)
        if (index !== -1) queue.splice(index, 1)
        if (queue.length === 0) cancelSchedule()
      }
    },
  }
}

const ChatScrollActivityContext = createContext<ChatScrollActivityStore | null>(
  null
)

export const ChatScrollActivityProvider = ({
  store,
  children,
}: {
  store: ChatScrollActivityStore
  children: ReactNode
}): ReactNode => (
  <ChatScrollActivityContext.Provider value={store}>
    {children}
  </ChatScrollActivityContext.Provider>
)

const subscribeNoop = () => () => {}
const getNotScrolling = () => false

/** Subscribe only while a preview is still waiting to mount. */
export const useChatScrollActivity = (mounted: boolean): boolean => {
  const store = useContext(ChatScrollActivityContext)
  return useSyncExternalStore(
    mounted ? subscribeNoop : (store?.subscribe ?? subscribeNoop),
    mounted ? getNotScrolling : (store?.getSnapshot ?? getNotScrolling),
    getNotScrolling
  )
}

export const useChatScrollActivityStore = (): ChatScrollActivityStore | null =>
  useContext(ChatScrollActivityContext)
