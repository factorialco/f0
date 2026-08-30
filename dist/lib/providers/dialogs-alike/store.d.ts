import { DialogDefinitionProviderItem } from './internal-types';
import { DialogId } from './types';
/**
 * Module-level store backing the imperative `dialog` / `drawer` API.
 *
 * Open dialogs/drawers live here (not in React state), so they can be opened
 * from anywhere — including outside React — via plain functions. The
 * `DialogsAlikeLayoutProvider` subscribes to this store with
 * `useSyncExternalStore` and renders the items into a portal.
 */
type Listener = () => void;
export declare const dialogsAlikeStore: {
    subscribe(listener: Listener): () => void;
    getSnapshot(): DialogDefinitionProviderItem[];
    getServerSnapshot(): DialogDefinitionProviderItem[];
    addItem(item: DialogDefinitionProviderItem): void;
    removeItem(id: DialogId): void;
    /** Remove all open items. Mainly useful to isolate Storybook stories/tests. */
    clear(): void;
    setDefaultActionLabels(labels: {
        ok: string;
        cancel: string;
    }): void;
    getDefaultActionLabels(): {
        ok: string;
        cancel: string;
    };
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
