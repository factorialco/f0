import type { CoachmarkId, CoachmarkItem } from "./types"

/**
 * Module-level store backing the imperative `coachmarks.open` /
 * `coachmarks.close` / `coachmarks.closeAll` API.
 *
 * Coachmarks live here (not in React state), so they can be opened from
 * anywhere — including outside React — via plain functions. `CoachmarkProvider`
 * subscribes with `useSyncExternalStore`.
 *
 * The list is a QUEUE, not a stack: only the head is rendered. Two coachmarks on
 * screen at once would compete for the same attention, so a second `open` waits
 * for the first to be closed. Deliberately the same shape as `toastStore` (which
 * renders all of its items) — if a third store needs the renderer election
 * below, that is the point to extract it rather than copy it again.
 */

type Listener = () => void

const EMPTY: CoachmarkItem[] = []

let items: CoachmarkItem[] = EMPTY
const listeners = new Set<Listener>()

// Mounted provider/renderer registry. Multiple CoachmarkProvider instances can
// be mounted at once (e.g. one per story canvas on a Storybook docs page). They
// all read this single store, so only ONE of them should actually render the
// head — otherwise every coachmark is rendered N times, N panels stacked on the
// same target. We elect the renderer as the lowest mounted id; when it unmounts
// the next lowest takes over automatically.
let rendererSeq = 0
const mountedRenderers = new Set<number>()
const rendererListeners = new Set<Listener>()

const emit = () => {
  for (const listener of listeners) listener()
}

const emitRenderer = () => {
  for (const listener of rendererListeners) listener()
}

export const coachmarkStore = {
  subscribe(listener: Listener) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
  getSnapshot() {
    return items
  },
  getServerSnapshot() {
    return EMPTY
  },
  /**
   * Queue a coachmark, or replace an existing one when an item with the same id
   * is already queued (so a repeated `coachmarks.open({ id })` — an effect that
   * runs twice, a re-render — updates in place instead of queueing a duplicate).
   * Replacing keeps the item's position in the queue.
   */
  addItem(item: CoachmarkItem) {
    const existingIndex = items.findIndex((current) => current.id === item.id)
    if (existingIndex !== -1) {
      const next = [...items]
      next[existingIndex] = item
      items = next
    } else {
      items = [...items, item]
    }
    emit()
  },
  removeItem(id: CoachmarkId) {
    if (!items.some((item) => item.id === id)) return
    items = items.filter((item) => item.id !== id)
    emit()
  },
  /** Remove every queued coachmark, including the one on screen. */
  clear() {
    if (items.length === 0) return
    items = EMPTY
    emit()
  },
  /**
   * Register a mounted provider as a candidate renderer. Returns the assigned
   * id and a `release` to call on unmount. Pair with `subscribeRenderer` +
   * `getActiveRendererId` to know whether this instance should render.
   */
  acquireRenderer() {
    rendererSeq += 1
    const id = rendererSeq
    mountedRenderers.add(id)
    emitRenderer()
    return {
      id,
      release() {
        mountedRenderers.delete(id)
        emitRenderer()
      },
    }
  },
  /** The elected renderer (lowest mounted id), or null if none mounted. */
  getActiveRendererId(): number | null {
    let min: number | null = null
    for (const id of mountedRenderers) {
      if (min === null || id < min) min = id
    }
    return min
  },
  subscribeRenderer(listener: Listener) {
    rendererListeners.add(listener)
    return () => {
      rendererListeners.delete(listener)
    }
  },
  hasProvider() {
    return mountedRenderers.size > 0
  },
}
