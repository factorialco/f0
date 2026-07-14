import { DialogDefinitionProviderItem } from "./internal-types"
import { DialogId } from "./types"

/**
 * Module-level store backing the imperative `dialog` / `drawer` API.
 *
 * Open dialogs/drawers live here (not in React state), so they can be opened
 * from anywhere — including outside React — via plain functions. The
 * `DialogsAlikeLayoutProvider` subscribes to this store with
 * `useSyncExternalStore` and renders the items into a portal.
 */

type Listener = () => void

const EMPTY: DialogDefinitionProviderItem[] = []

let items: DialogDefinitionProviderItem[] = EMPTY
const listeners = new Set<Listener>()

// Default footer labels for `dialog.alert` / `dialog.confirm`. The provider
// registers the active i18n translations here so the imperative functions
// (which cannot use hooks) still get localized defaults.
let defaultActionLabels = { ok: "Ok", cancel: "Cancel" }

// Mounted provider/renderer registry. Multiple DialogsAlikeLayoutProvider
// instances can be mounted at once (e.g. one per story canvas on a Storybook
// docs page). They all read this single store, so only ONE of them should
// actually render the items — otherwise every dialog/drawer is rendered N
// times (N stacked overlays look opaque, N modals fight over focus). We elect
// the renderer as the lowest mounted id; when it unmounts the next lowest
// takes over automatically.
let rendererSeq = 0
const mountedRenderers = new Set<number>()
const rendererListeners = new Set<Listener>()

const emit = () => {
  for (const listener of listeners) listener()
}

const emitRenderer = () => {
  for (const listener of rendererListeners) listener()
}

export const dialogsAlikeStore = {
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
  addItem(item: DialogDefinitionProviderItem) {
    items = [...items, item]
    emit()
  },
  removeItem(id: DialogId) {
    if (!items.some((item) => item.id === id)) return
    items = items.filter((item) => item.id !== id)
    emit()
  },
  /** Remove all open items. Mainly useful to isolate Storybook stories/tests. */
  clear() {
    if (items.length === 0) return
    items = EMPTY
    emit()
  },
  setDefaultActionLabels(labels: { ok: string; cancel: string }) {
    defaultActionLabels = labels
  },
  getDefaultActionLabels() {
    return defaultActionLabels
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
