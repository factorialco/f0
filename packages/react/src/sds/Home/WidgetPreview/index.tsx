import { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * THE ARRIVAL. A preview lands with a small zoom-and-fade rather than appearing —
 * the same lift the card's own info side jumps with (`SlotWidget`), so presenting
 * a widget reads one way across the kit.
 *
 * Tailwind's animate classes rather than a JS animation, on purpose: this plays
 * when the element MOUNTS (a `key` change is what replays it), which is exactly
 * when there is no state to drive an animation from — and it costs nothing while
 * nothing is arriving. `motion-reduce:animate-none` is the plugin's own opt-out.
 */
const WIDGET_ARRIVAL_CLASS =
  "animate-in fade-in zoom-in-95 duration-300 ease-out motion-reduce:animate-none"

export interface WidgetPreviewPaneProps {
  /**
   * What is being previewed. CHANGING IT REPLAYS the arrival — the preview is
   * announcing that it is now a different widget. Keep it stable while only the
   * widget's params change, or the card re-lands at every keystroke.
   */
  previewKey?: string
  /** The widget, drawn as the column will really draw it. */
  children: ReactNode
  /**
   * What this widget is telling you — the same sentence its own info side shows,
   * here at the pane's bottom, where it explains the preview above it without
   * having to be asked for.
   */
  info?: string
  /** Content width of the column the widget will live in. */
  previewWidth?: number
}

/**
 * WidgetPreviewPane — the right-hand half of both widget dialogs: the widget on
 * the page grey, at the width its column will really give it, with its `info`
 * underneath.
 *
 * One component rather than two identical blocks because the two dialogs are the
 * same offer at different moments — `WidgetCatalog` previews a widget you are
 * about to add, `WidgetUpdateDialog` one you are configuring — and a preview that
 * behaved differently between them would say they were different things.
 */
export function WidgetPreviewPane({
  previewKey,
  children,
  info,
  previewWidth = 396,
}: WidgetPreviewPaneProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg bg-f1-background-secondary p-6">
      <div
        // The key is what makes this a NEW element, and a new element is what
        // replays the animation — a class alone would only play once.
        key={previewKey}
        className={cn("w-full", WIDGET_ARRIVAL_CLASS)}
        style={{ maxWidth: `${previewWidth}px` }}
      >
        {children}
      </div>
      {info ? (
        // Not inside the card: this is about the widget, so it sits under it, in
        // the pane — the same words the card's own info side would show.
        <p className="m-0 max-w-96 text-center text-f1-foreground-secondary">
          {info}
        </p>
      ) : null}
    </div>
  )
}
