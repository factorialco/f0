import { ToastId, ToastProviderItem } from "./types"

/**
 * Module-level store backing the imperative `toasts.open` / `toasts.close` /
 * `toasts.closeAll` API.
 *
 * Open toasts live here (not in React state), so they can be opened from
 * anywhere — including outside React — via plain functions. The `ToastProvider`
 * subscribes to this store with `useSyncExternalStore` and renders the items
 * into a portal.
 */

type Listener = () => void

const EMPTY: ToastProviderItem[] = []

let items: ToastProviderItem[] = EMPTY
const listeners = new Set<Listener>()

// Mounted provider/renderer registry. Multiple ToastProvider instances can be
// mounted at once (e.g. one per story canvas on a Storybook docs page). They all
// read this single store, so only ONE of them should actually render the items —
// otherwise every toast is rendered N times. We elect the renderer as the lowest
// mounted id; when it unmounts the next lowest takes over automatically.
let rendererSeq = 0
const mountedRenderers = new Set<number>()
const rendererListeners = new Set<Listener>()

const emit = () => {
  for (const listener of listeners) listener()
}

const emitRenderer = () => {
  for (const listener of rendererListeners) listener()
}

export const toastStore = {
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
   * Add a toast, or replace an existing one when an item with the same id is
   * already open (so repeated `toasts.open({ id })` calls update in place).
   */
  addItem(item: ToastProviderItem) {
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
  removeItem(id: ToastId) {
    if (!items.some((item) => item.id === id)) return
    items = items.filter((item) => item.id !== id)
    emit()
  },
  /** Remove all open toasts. */
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
