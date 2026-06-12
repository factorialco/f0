/**
 * In-memory change notifications for data collection storage keys.
 *
 * The storage handler contract (`DataCollectionStorageHandler`) is plain
 * get/set — it has no way to tell other collection-bound consumers that the
 * persisted state changed. This module fills that gap for same-document
 * consumers: a writer calls `notifyDataCollectionStorageChange(collectionId)`
 * after a successful `set`, and live consumers subscribed to that id re-read
 * the storage (e.g. the breadcrumb collection-select's editable filters
 * notifying `useDataCollectionItemNavigation` so prev/next + counter follow).
 *
 * Intentionally not a storage event bridge: cross-tab/server sync is the
 * handler's concern. This is only "another component in this tree just wrote
 * this key".
 */

type Listener = () => void

const listenersByCollectionId = new Map<string, Set<Listener>>()

/**
 * Subscribes to write notifications for a collection id. Returns the
 * unsubscribe function (effect-friendly).
 */
export const subscribeToDataCollectionStorageChanges = (
  collectionId: string,
  listener: Listener
): (() => void) => {
  let listeners = listenersByCollectionId.get(collectionId)
  if (!listeners) {
    listeners = new Set()
    listenersByCollectionId.set(collectionId, listeners)
  }
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) listenersByCollectionId.delete(collectionId)
  }
}

/**
 * Notifies subscribers that the persisted state for a collection id was
 * written. Call after the storage handler's `set` resolves.
 */
export const notifyDataCollectionStorageChange = (
  collectionId: string
): void => {
  listenersByCollectionId.get(collectionId)?.forEach((listener) => listener())
}
