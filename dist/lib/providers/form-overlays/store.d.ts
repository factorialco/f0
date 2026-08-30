import { ReactNode } from 'react';
import { DialogId } from '../dialogs-alike/types';
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
    isOpen: boolean;
};
export type FormOverlayStoreItem = {
    id: DialogId;
    render: (api: FormOverlayRenderApi) => ReactNode;
};
type Listener = () => void;
export declare const formOverlaysStore: {
    subscribe(listener: Listener): () => void;
    getSnapshot(): FormOverlayStoreItem[];
    getServerSnapshot(): FormOverlayStoreItem[];
    addItem(item: FormOverlayStoreItem): void;
    removeItem(id: DialogId): void;
    /** Remove all open overlays. Mainly useful to isolate Storybook stories/tests. */
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
