import { ReactNode } from 'react';
export declare const useWidgetDialogLayout: () => {
    /** Hand straight to `F0Dialog`, with `width` below. */
    position: "center" | "fullscreen";
    /**
     * What the centered box is capped to. Fullscreen neutralises it (F0Dialog has
     * a compound variant for exactly that), so it is passed unconditionally.
     */
    width: "xl";
    /** The body's own classes: one column on a narrow screen, two otherwise. */
    bodyClassName: string;
    /**
     * The left column's: it gives up its fixed width when stacked, and the
     * preview keeps its own height rather than being squeezed by it.
     */
    asideClassName: string;
    stacked: boolean;
};
export interface WidgetPreviewPaneProps {
    /**
     * What is being previewed. CHANGING IT REPLAYS the arrival — the preview is
     * announcing that it is now a different widget. Keep it stable while only the
     * widget's params change, or the card re-lands at every keystroke.
     */
    previewKey?: string;
    /** The widget, drawn as the column will really draw it. */
    children: ReactNode;
    /**
     * What this widget is telling you — the same sentence its own info side shows,
     * here at the pane's bottom, where it explains the preview above it without
     * having to be asked for.
     */
    info?: string;
    /** Content width of the column the widget will live in. */
    previewWidth?: number;
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
export declare function WidgetPreviewPane({ previewKey, children, info, previewWidth, }: WidgetPreviewPaneProps): import("react").JSX.Element;
