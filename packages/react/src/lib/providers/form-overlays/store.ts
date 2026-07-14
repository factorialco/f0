import { ReactNode } from "react"

import { DialogId } from "../dialogs-alike/types"

/**
 * Module-level store backing the imperative `forms.open`
 * helpers.
 *
 * Unlike `dialogs-alike` (which owns the dialog chrome and footer actions),
 * a form overlay is a self-contained React node that renders — and animates —
 * its OWN dialog/wizard. The store therefore holds opaque render functions and
 * stays out of the way: it just tracks which overlays are open so they can be
 * mounted from anywhere (including outside React) and portaled by
 * `FormOverlaysProvider`.
 */

export type FormOverlayRenderApi = {
  /** Whether the overlay is still open (in the store) or animating out. */
  isOpen: boolean
}

export type FormOverlayStoreItem = {
  id: DialogId
  render: (api: FormOverlayRenderApi) => ReactNode
}

type Listener = () => void

const EMPTY: FormOverlayStoreItem[] = []

let items: FormOverlayStoreItem[] = EMPTY
const listeners = new Set<Listener>()

// Mounted provider/renderer registry. Multiple FormOverlaysProvider instances
// can be mounted at once (e.g. one per story canvas on a Storybook docs page).
// They all read this single store, so only ONE should actually render the
// overlays — otherwise every overlay is rendered N times (N stacked modals
// fight over focus). We elect the renderer as the lowest mounted id; when it
// unmounts the next lowest takes over automatically.
let rendererSeq = 0
const mountedRenderers = new Set<number>()
const rendererListeners = new Set<Listener>()

const emit = () => {
  for (const listener of listeners) listener()
}

const emitRenderer = () => {
  for (const listener of rendererListeners) listener()
}

export const formOverlaysStore = {
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
  addItem(item: FormOverlayStoreItem) {
    items = [...items, item]
    emit()
  },
  removeItem(id: DialogId) {
    if (!items.some((item) => item.id === id)) return
    items = items.filter((item) => item.id !== id)
    emit()
  },
  /** Remove all open overlays. Mainly useful to isolate Storybook stories/tests. */
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
