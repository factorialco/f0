import { CoachmarkId, CoachmarkItem } from './types';
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
type Listener = () => void;
export declare const coachmarkStore: {
    subscribe(listener: Listener): () => void;
    getSnapshot(): CoachmarkItem[];
    getServerSnapshot(): CoachmarkItem[];
    /**
     * Queue a coachmark, or replace an existing one when an item with the same id
     * is already queued (so a repeated `coachmarks.open({ id })` — an effect that
     * runs twice, a re-render — updates in place instead of queueing a duplicate).
     * Replacing keeps the item's position in the queue.
     */
    addItem(item: CoachmarkItem): void;
    removeItem(id: CoachmarkId): void;
    /** Remove every queued coachmark, including the one on screen. */
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
