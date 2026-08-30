/**
 * THE CARD THE POINTER CARRIES while a widget is dragged: a static COPY of the
 * real card's DOM, taken as the drag starts.
 *
 * It used to be a second RENDER of the widget in the DragOverlay, and a second
 * render is a second mount: the copy's slot content started over while the
 * original — hidden, holding its slot — kept the state you had built up. A
 * carousel showed its first page for the length of the drag and snapped back on
 * release; a clock restarted; a scrolled list went to the top.
 *
 * A copy of the DOM cannot do that. It has no state to start over and runs no
 * effects: it is the card exactly as it looked when you picked it up. What it
 * cannot carry is anything that isn't IN the DOM — a canvas's pixels, a playing
 * video — which goes blank in the ghost and is whole again on release.
 */
export declare const takeCardGhost: (card: Element | null | undefined) => HTMLElement | null;
export interface PageSurfaceGhost {
    node: HTMLElement;
    offset: {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    /** The colour the page is painted on, under its own wash. */
    base: string | null;
}
/** A copy of the page's own surface, placed so it lines up under `card`. */
export declare const takePageSurface: (surface: Element | null | undefined, card: Element | null | undefined) => PageSurfaceGhost | null;
