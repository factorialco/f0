/**
 * Finds the nearest scrollable ancestor of the given element.
 */
export declare const findScrollContainer: (element: HTMLElement) => HTMLElement | null;
/**
 * Subscribes to scroll events on the nearest scrollable ancestor,
 * calling `callback` on each frame via requestAnimationFrame.
 * Returns a cleanup function, or undefined if no scroll container was found.
 */
export declare const subscribeToScroll: (element: HTMLElement, callback: () => void) => (() => void) | undefined;
