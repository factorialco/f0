import { Widget, type WidgetProps } from "@/experimental/Widgets/Widget"

/**
 * @deprecated `F0Widget` is now the `Widget` from `experimental/Widgets/Widget`.
 * There was a second, narrower widget card here — title-only, with its own drag
 * handle and overflow menu — which meant two components drawing the same thing
 * and disagreeing about what a widget header holds. `Widget` gained `draggable`,
 * `isDragging`, `selected` and `actions`, so it does everything this one did and
 * keeps subtitles, counts, links, summaries and the rest.
 *
 * Import `Widget` directly; this alias only exists so the `F0Widget` name keeps
 * resolving for existing callers.
 */
export const F0Widget = Widget
export type { WidgetProps }
