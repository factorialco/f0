import { nanoid } from "nanoid"

import { DialogId } from "../dialogs-alike/types"
import { formOverlaysStore, FormOverlayRenderApi } from "./store"

export type { FormOverlayRenderApi }

export type FormOverlayDefinition = {
  /** Overlay id. Auto-generated if not provided. */
  id?: DialogId
  /**
   * Renders the overlay. Receives `isOpen` — drive your dialog/wizard's
   * `isOpen` prop with it so it can animate out before unmounting.
   */
  render: (api: FormOverlayRenderApi) => React.ReactNode
  /**
   * Called when the overlay is dismissed via `unmountFormOverlay(id)` (e.g.
   * programmatic close). The render callback's own close handler should cover
   * user-initiated dismissals.
   */
  onDismiss?: () => void
}

// Dismiss callbacks keyed by overlay id, kept at module level (not in a React
// ref) so `unmountFormOverlay(id)` works from anywhere.
const dismissCallbacks = new Map<DialogId, () => void>()

const warnIfNoProvider = (method: string) => {
  if (
    process.env.NODE_ENV !== "production" &&
    !formOverlaysStore.hasProvider()
  ) {
    console.warn(
      `[f0] ${method} was called but no <F0Provider> is mounted, so the form ` +
        `overlay will not render. Make sure your app is wrapped in <F0Provider>.`
    )
  }
}

/**
 * Mount a self-contained overlay (a node that renders its own dialog/wizard).
 * Returns the overlay id. Requires `<F0Provider>` to be mounted.
 *
 * This is an internal seam used by `forms.open`; it is
 * not part of the public API.
 */
export const mountFormOverlay = (
  definition: FormOverlayDefinition
): DialogId => {
  const id = definition.id || nanoid()
  const dismiss = () => {
    if (!dismissCallbacks.has(id)) return
    dismissCallbacks.delete(id)
    definition.onDismiss?.()
    formOverlaysStore.removeItem(id)
  }
  dismissCallbacks.set(id, dismiss)
  warnIfNoProvider("mountFormOverlay()")
  formOverlaysStore.addItem({ id, render: definition.render })
  return id
}

/** Dismiss an overlay by id (runs its `onDismiss`, then removes it). */
export const unmountFormOverlay = (id: DialogId) => {
  const dismiss = dismissCallbacks.get(id)
  if (dismiss) {
    dismiss()
  } else {
    formOverlaysStore.removeItem(id)
  }
}
