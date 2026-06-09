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

// Number of mounted providers — used only for a dev-time warning when the
// imperative API is called with nothing rendering the dialogs.
let providerCount = 0

const emit = () => {
  for (const listener of listeners) listener()
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
  registerProvider() {
    providerCount += 1
    return () => {
      providerCount -= 1
    }
  },
  hasProvider() {
    return providerCount > 0
  },
}
