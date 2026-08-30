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
type Listener = () => void;
/**
 * Subscribes to write notifications for a collection id. Returns the
 * unsubscribe function (effect-friendly).
 */
export declare const subscribeToDataCollectionStorageChanges: (collectionId: string, listener: Listener) => (() => void);
/**
 * Notifies subscribers that the persisted state for a collection id was
 * written. Call after the storage handler's `set` resolves.
 */
export declare const notifyDataCollectionStorageChange: (collectionId: string) => void;
export {};
