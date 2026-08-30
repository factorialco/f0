import { ToastId, ToastProviderItem } from './types';
/**
 * Module-level store backing the imperative `toasts.open` / `toasts.close` /
 * `toasts.closeAll` API.
 *
 * Open toasts live here (not in React state), so they can be opened from
 * anywhere — including outside React — via plain functions. The `ToastProvider`
 * subscribes to this store with `useSyncExternalStore` and renders the items
 * into a portal.
 */
type Listener = () => void;
export declare const toastStore: {
    subscribe(listener: Listener): () => void;
    getSnapshot(): ToastProviderItem[];
    getServerSnapshot(): ToastProviderItem[];
    /**
     * Add a toast, or replace an existing one when an item with the same id is
     * already open (so repeated `toasts.open({ id })` calls update in place).
     */
    addItem(item: ToastProviderItem): void;
    removeItem(id: ToastId): void;
    /** Remove all open toasts. */
    clear(): void;
    /**
     * Register a mounted provider as a candidate renderer. Returns the assigned
     * id and a `release` to call on unmount. Pair with `subscribeRenderer` +
     * `getActiveRendererId` to know whether this instance should render.
     */
    acquireRenderer(): {
        id: number;
        release(): void;
    };
    /** The elected renderer (lowest mounted id), or null if none mounted. */
    getActiveRendererId(): number | null;
    subscribeRenderer(listener: Listener): () => void;
    hasProvider(): boolean;
};
export {};
