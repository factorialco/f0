import { ReactNode } from "react"

import { useMediaQuery } from "usehooks-ts"

import { breakpoints } from "@factorialco/f0-core"

import { cn } from "@/lib/utils"

/**
 * How the widget dialogs lay themselves out — one decision taken once, because
 * both of them make it: `WidgetCatalog` (pick a widget) and `WidgetUpdateDialog`
 * (configure one) are the same offer at different moments, and a dialog that
 * behaved differently between them would say they were different things.
 *
 * FULLSCREEN, unless the display is genuinely big. These dialogs are two columns —
 * a list or a form beside the widget itself — and a centered `xl` box has to fit
 * both at their real widths (a 320px column, a 396px preview) with air around them
 * AND still leave enough page around the edges to be worth being a modal. On a
 * laptop, and on an ordinary 1080p monitor, it manages that only by taking most of
 * the screen anyway: the cost of a modal without the benefit. So those go
 * fullscreen, and only a large display gets the centered box.
 *
 * The number is deliberately past a 1920-wide monitor and every laptop, so what
 * qualifies is a 2560-class display. It is the ONE knob here; change it and both
 * dialogs follow.
 */
const CENTERED_DIALOG_QUERY = "(min-width: 2200px) and (min-height: 900px)"

export const useWidgetDialogLayout = () => {
  const roomForCentered = useMediaQuery(CENTERED_DIALOG_QUERY, {
    initializeWithValue: true,
    defaultValue: false,
  })
  // Stacking IS a size question: two columns need the width for two columns.
  const stacked = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
    defaultValue: false,
  })
  return {
    /** Hand straight to `F0Dialog`, with `width` below. */
    position: roomForCentered ? ("center" as const) : ("fullscreen" as const),
    /**
     * What the centered box is capped to. Fullscreen neutralises it (F0Dialog has
     * a compound variant for exactly that), so it is passed unconditionally.
     */
    width: "xl" as const,
    /** The body's own classes: one column on a narrow screen, two otherwise. */
    bodyClassName: cn(
      "flex h-full min-h-96 gap-4",
      stacked ? "flex-col" : "flex-row"
    ),
    /**
     * The left column's: it gives up its fixed width when stacked, and the
     * preview keeps its own height rather than being squeezed by it.
     */
    asideClassName: stacked ? "w-full shrink-0" : "w-80 shrink-0",
    stacked,
  }
}

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
    // TOP-ALIGNED, not centred. The dialog is fullscreen at most sizes, so the
    // stage is tall: a card floating in the middle of it reads as lost, and the
    // eye has to hunt for it after scanning the list on the left. Sitting near
    // the top, with generous air above, it is where you look first.
    <div className="flex min-w-0 flex-1 flex-col items-center gap-6 overflow-y-auto rounded-lg bg-f1-background-secondary px-6 pb-6 pt-10">
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
