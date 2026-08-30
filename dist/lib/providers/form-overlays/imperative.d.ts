import { DialogId } from '../dialogs-alike/types';
import { FormOverlayRenderApi } from './store';
export type { FormOverlayRenderApi };
export type FormOverlayDefinition = {
    /** Overlay id. Auto-generated if not provided. */
    id?: DialogId;
    /**
     * Renders the overlay. Receives `isOpen` — drive your dialog/wizard's
     * `isOpen` prop with it so it can animate out before unmounting.
     */
    render: (api: FormOverlayRenderApi) => React.ReactNode;
    /**
     * Called when the overlay is dismissed via `unmountFormOverlay(id)` (e.g.
     * programmatic close). The render callback's own close handler should cover
     * user-initiated dismissals.
     */
    onDismiss?: () => void;
};
/**
 * Mount a self-contained overlay (a node that renders its own dialog/wizard).
 * Returns the overlay id. Requires `<F0Provider>` to be mounted.
 *
 * This is an internal seam used by `forms.open`; it is
 * not part of the public API.
 */
export declare const mountFormOverlay: (definition: FormOverlayDefinition) => DialogId;
/** Dismiss an overlay by id (runs its `onDismiss`, then removes it). */
export declare const unmountFormOverlay: (id: DialogId) => void;
